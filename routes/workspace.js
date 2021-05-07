const express = require('express');
const { user } = require('./../config/db');
const router = express.Router();
const db = require('./../config/db');
const workspaceMiddleware = require('./../middleware/workspace-middleware')

router.get("/names", async (req, res) => {
    const userID = req.token_data.userInfo.user_id;
    const orgID = req.token_data.orgInfo.org_id;
    const query = `select ws.work_space_name from work_spaces ws 
    inner join work_space_members wsm on wsm.work_space_id = ws.work_space_id 
    inner join users u on u.user_id = wsm.user_id 
    where u.user_id  = $1 and ws.org_id = $2`
    const results = await db.query(query, [userID, orgID])
    res.status(200).json(results.rows)
})

// Gets workspaces from user 
router.get('/all', (req, res) => {
    const userID = req.token_data.userInfo.user_id;
    const orgID = req.token_data.orgInfo.org_id
    db.query(`select work_spaces.work_space_id, work_space_name, date_created, org_id from work_spaces 
    inner join work_space_members  on work_space_members.work_space_id  = work_spaces.work_space_id 
    inner join users on users.user_id = work_space_members.user_id 
    where users.user_id = $1 and work_spaces.org_id = $2`, [userID,orgID], (err, result) => {
        if (err) throw err;
        let rows = result.rows;
        res.json(rows);
    })
});

router.post('/create', async (req, res) => {
    const userID = req.token_data.userInfo.user_id;
    const orgID = req.token_data.orgInfo.org_id;

    let workspaceName = req.body.workspace_name;
    let dateCreated = req.body.date_created;
    const description = req.body.description;

    // First create the workspace
    const results = await db.query(`INSERT INTO work_spaces (work_space_name, date_created, org_id,"createdAt","updatedAt",work_space_description) VALUES($1, $2, $3, $4, $5,$6) returning work_space_id;`,
        [workspaceName, dateCreated, orgID, new Date(), new Date(), description]);

    const workspaceID = results.rows[0].work_space_id

    await db.query(`INSERT INTO work_space_members (user_id, work_space_id, role,"createdAt","updatedAt") VALUES($1, $2, 'admin', $3, $4);`,
        [userID, workspaceID, new Date(), new Date()]);

    res.status(201).json({ workspaceID })
});

router.delete("/:workspaceID/delete",async (req,res)=>{
    const { workspaceID } = req.params

    // Delete workspace artifact access users first
    await db.query(`delete from workspace_art_access_users waau 
    using work_space_artifacts wsa
    where wsa.work_space_artifacts_id = waau.work_space_artifacts_id  and wsa.work_space_id = $1`,[workspaceID])

    // Delete Workspace reference message items
    await db.query(`delete from work_space_ref_items wsri 
    using 
        work_space_references wsr,
        work_space_messages wsm
    where 
        wsr.work_space_ref_id = wsri.work_space_ref_id and
        wsm.work_space_msg_id = wsr.work_space_msg_id and
        wsm.work_space_id = $1`,[workspaceID])

    // Delete Workspace references (they point to the items)
    await db.query(`delete from  work_space_references wsr
	using 
		work_space_messages wsm
	where 
		wsm.work_space_msg_id  = wsr.work_space_msg_id and 
		wsm.work_space_id = $1`,[workspaceID])

    // Delete Work space message replies
    await db.query(`delete from work_space_message_replies wsmr 
    using 
        work_space_messages wsm
    where 
        wsm.work_space_msg_id = wsmr.work_space_msg_id and
        wsm.work_space_id = $1`,[workspaceID])

    // Remove workspace artifacts
    await db.query(`delete from work_space_artifacts wsa where wsa.work_space_id = $1`,[workspaceID])

    // Delete workspace messages
    await db.query(`delete from work_space_messages wsm where wsm.work_space_id = $1`,[workspaceID])

    // Remove the members
    await db.query(`DELETE FROM public.work_space_members
    WHERE work_space_id = $1`,[workspaceID])

    // Finally remove the workspace
    await db.query(`DELETE FROM work_spaces WHERE work_space_id = $1`,[workspaceID]);
    res.status(200).json({})
})

// Search workspace by name
router.get("/search", async (req, res) => {
    const { key } = req.query;
    const userID = req.token_data.userInfo.user_id;
    const orgID = req.token_data.orgInfo.org_id;

    let query = `select work_spaces.work_space_id, work_space_name, date_created, org_id from work_spaces 
    inner join work_space_members  on work_space_members.work_space_id  = work_spaces.work_space_id 
    inner join users on users.user_id = work_space_members.user_id 
    where users.user_id = $1 and work_spaces.work_space_name like '%' || $2 || '%' and work_spaces.org_id = $3`

    let results = []
    if (key.length === 0) {
        query = `select work_spaces.work_space_id, work_space_name, date_created, org_id from work_spaces 
        inner join work_space_members  on work_space_members.work_space_id  = work_spaces.work_space_id 
        inner join users on users.user_id = work_space_members.user_id 
        where users.user_id = $1 and work_spaces.org_id = $2`
        results = await db.query(query, [userID,orgID])
    } else {
        results = await db.query(query, [userID, key, orgID])
    }
    res.status(200).json(results.rows)
})

router.get("/info", async (req, res) => {
    const workspaceID = req.query.id;
    const orgID = req.token_data.orgInfo.org_id;

    const result = await db.query("select * from work_spaces ws where ws.org_id = $1 and ws.work_space_id = $2", [orgID, workspaceID])

    res.status(200).json(result.rows[0])

})

router.post("/authorize-password/workspace-artifact", workspaceMiddleware.encryptArtifactPassword, async (req, res) => {
    const workspaceReference = req.query.ref;

    const { artifactID } = req.body;
    const password = req.artifactPassword
    const orgID = req.token_data.orgInfo.org_id

    const result1 = await db.query(`select * from work_spaces ws where ws.work_space_name = $1 and ws.org_id = $2`, [workspaceReference, orgID]) // select workspace ID from the ref name
    const workspaceID = result1.rows[0].work_space_id

    // Now Select The Workspace The Artifact
    const result2 = await db.query(`select * from work_space_artifacts where art_id = $1 and work_space_id = $2 and password = $3`, [artifactID, workspaceID, password])
    if (result2.rowCount > 0) {
        res.status(200).json({})
    }
    else
        res.status(401).json({})
})
// suggest email to add user to workspace
router.get('/suggestion/email', async (req, res) => {

    const orgID = req.token_data.orgInfo.org_id;
    let email = req.query.email;

    let result = await db.query(`select email from users 
    inner join organization_members ON organization_members.user_id = users.user_id 
    inner join organizations  on organizations.org_id  = organization_members.org_id 
    where users.email like '%' || $1 || '%' and organizations.org_id = $2;`, [email, orgID]);
    res.json(result.rows);
});

router.get("/:workspaceID/all-participants", async (req, res) => {
    const workspaceID = req.params.workspaceID;
    const userID = req.token_data.userInfo.user_id;
    const result = await db.query(`select 
        u.user_id, wsm.work_space_member_id,
        u.first_name, u.last_name,u.email, wsm."role"
        from work_space_members wsm 
        inner join users u on u.user_id = wsm.user_id 
        where wsm.work_space_id = $1 and u.user_id <> $2`
        , [workspaceID, userID])
    res.send(result.rows)
})

// Get a particular participant from workspace
router.get("/:workspaceID/get-participant", async (req, res) => {
    const workspaceID = req.params.workspaceID
    const participantID = req.query.id
    const results = await db.query("select * from work_space_members wsm where work_space_id = $1 and work_space_member_id = $2", [workspaceID, participantID])
    const participant = results.rows[0];
    res.json(participant)
})

router.get("/:workspaceID/get-user-as-participant", async (req, res) => {
    const { workspaceID } = req.params
    const userID = req.token_data.userInfo.user_id
    // Get The Current user as a participant
    const result = await db.query("select * from work_space_members wsm where wsm.user_id = $1 and wsm.work_space_id = $2", [userID, workspaceID])
    res.status(200).json(result.rows[0])
})

// Change a particular participant role in the workspace
router.put("/:workspaceID/change-participant-role", async (req, res) => {

    const workspaceID = req.params.workspaceID;
    const participantID = req.body.participantID
    const newRole = req.body.newRole;

    await db.query(`update work_space_members set "role" = $1 
    where work_space_id = $2 and work_space_member_id = $3`, [newRole, workspaceID, participantID])

    res.status(200).json({})
})

// Add member 
router.post('/:workspaceID/add-member', async (req, res) => {
    const email = req.body.email;
    const workspaceID = req.params.workspaceID;

    // check it the member already exists
    let members = await db.query(`select * from work_space_members 
    inner join users ON users.user_id  = work_space_members.user_id 
    where users.email = $1 and work_space_members.work_space_id = $2`, [email, workspaceID]);

    if (members.rowCount > 0)
        res.status(409).json({});
    else {
        // First get user id then add them using that id
        let result = db.query('SELECT * FROM users WHERE email = $1', [email]);

        const userID = (await result).rows[0].user_id;

        db.query(`INSERT INTO work_space_members
        (user_id, work_space_id, "role","createdAt","updatedAt")
        VALUES($1, $2, 'member',$3,$4);;
        `, [userID, workspaceID, new Date(), new Date()])

        res.status(201).json({});
    }
});

// Remove member
router.delete('/:workspaceID/remove-member',(req,res)=>{
    const { id } = req.query; // id = member id
    db.query(`DELETE FROM public.work_space_members
    WHERE work_space_member_id = $1;`,[id],(err,_)=>{
        if (err) 
        {
            console.log(err)
            res.status(500).json({})
        } 

        res.status(200).json({})
    })
});

// Get Workspace
router.get('/:workspaceID', (req, res) => {
    // TODO : Verify that user has access to resource
    let workspaceID = req.params.workspaceID;
    db.query('SELECT * FROM work_spaces WHERE work_space_id = $1', [workspaceID],
        (err, result) => {
            if (err) throw err;
            const row = result.rows[0];
            res.status(200).json(row);
        })
});

// check workspace information
router.put("/:workspaceID/submit-change", async (req, res) => {
    const workspaceID = req.params.workspaceID;
    const newWorkspaceName = req.body.workspaceName;
    const newWorkspaceDsc = req.body.workspaceDsc;

    await db.query("UPDATE work_spaces SET work_space_name = $1, work_space_description = $2 WHERE work_space_id = $3",
        [newWorkspaceName, newWorkspaceDsc, workspaceID])
    res.status(200).json({})
})

// Get Members fom Workspace
router.get('/:workspaceID/members', async (req, res) => {
    let workspaceID = req.params.workspaceID;
    let result = await db.query(`select first_name, last_name,email,role from work_space_members 
    inner join users on users.user_id  = work_space_members.user_id 
    WHERE
    work_space_members.work_space_id  = $1`, [workspaceID])
    let members = result.rows;
    res.status(200).json(members);
})

// Get artifacts that belong to the workspace
router.get('/:workspaceID/artifacts', async (req, res) => {
    let workspaceID = req.params.workspaceID;
    let result = await db.query(`select 
    artifacts.art_id,
    artifacts.description,
    is_secured,
    artifacts."name",
    artifacts.org_id,
    artifacts."owner",
    artifacts.user_id,
    artifacts.date_created,
    work_space_artifacts_id,
    work_space_description,
    work_space_artifacts.work_space_id ,
    work_spaces.work_space_name 
    from artifacts 
    inner join work_space_artifacts on work_space_artifacts.art_id  = artifacts.art_id 
    inner join work_spaces on work_spaces.work_space_id  = work_space_artifacts.work_space_id 
    where work_space_artifacts.work_space_id = $1`, [workspaceID]);
    let artifacts = result.rows;
    res.status(200).json(artifacts);
})

router.get("/:workspaceID/suggestion/artifacts", async (req, res) => {

    const workspaceID = req.params.workspaceID;
    const artifactName = req.query.artifactName;

    const userID = req.token_data.userInfo.user_id;
    const orgID = req.token_data.orgInfo.org_id;

    let query = `select artifacts."name" from artifacts 
    inner join users on artifacts.user_id = users.user_id 
    inner join work_space_members on work_space_members.user_id = users.user_id 
    inner join work_spaces on work_spaces.work_space_id = work_space_members.work_space_id 
    inner join organizations on organizations.org_id = work_spaces.org_id 
    where users.user_id = $1 and work_spaces.work_space_id = $2
    and artifacts."name" like '%' || $3 || '%' and organizations.org_id = $4 and artifacts.org_id = $4`

    let results = await db.query(query, [userID, workspaceID, artifactName, orgID])
    res.status(200).json(results.rows)
})

// Get Messages
router.get('/:workspaceID/messages', async (req, res) => {
    let workspaceID = req.params.workspaceID;


    let tempQuery = `SELECT 
    
    work_space_msg_id, message_title,message_content, work_space_messages.user_id, work_space_id, time, date, first_name, last_name, email  

    FROM work_space_messages 
    inner join users on users.user_id = work_space_messages.user_id 
    WHERE work_space_id = $1 
    
    ORDER BY work_space_messages.work_space_msg_id DESC`

    let query = `SELECT 
    wsm.work_space_msg_id, 
    wsm.message_title,
    wsm.message_content, 
    wsm.user_id, 
    wsm.work_space_id, 
    wsm.time, 
    wsm.date, 
    first_name, last_name, email,
    a2."name" as artifact_name, a2.art_id as artifact_id, a2.user_id as artifact_user,
    a2.description as artifact_description
    FROM work_space_messages wsm
    inner join users on users.user_id = wsm.user_id 
    left join work_space_references wsr on wsr.work_space_msg_id = wsm.work_space_msg_id 
    left join work_space_ref_items wsri on wsri.work_space_ref_id = wsr.work_space_ref_id 
    left join artifacts a2 on a2.art_id = wsri.art_id 
    WHERE work_space_id = $1
    ORDER BY wsm.work_space_msg_id DESC`

    let result = await db.query(query, [workspaceID]);
    res.status(200).json(result.rows)
})

// Create a message
const createReference = async (artifactName, workspaceID, messageID, req) => {

    const userID = req.token_data.userInfo.user_id

    const results = await db.query(`select a.art_id from work_spaces ws 
    inner join work_space_artifacts wsa ON wsa.work_space_id = ws.work_space_id 
    inner join artifacts a on a.art_id  = wsa.art_id 
    where ws.work_space_id = $1 and a."name" = $2`, [workspaceID, artifactName])

    let artID = 0;
    if (results.rowCount === 0) {
        return 404
    } else {
        artID = results.rows[0].art_id
    }

    let results2 = await db.query(`INSERT INTO work_space_references
    ("createdAt","updatedAt", work_space_msg_id)
    VALUES($1, $2, $3) returning work_space_ref_id`, [new Date(), new Date(), messageID])

    let referenceID = results2.rows[0].work_space_ref_id;

    await db.query(`INSERT INTO work_space_ref_items
    (art_id, work_space_ref_id, "createdAt", "updatedAt")
    VALUES($1, $2, $3, $4);`, [artID, referenceID, new Date(), new Date()])

    return 200
}

router.post("/:workspaceID/add/message", async (req, res) => {
    const { title, content, time, date, artifactName } = req.body;
    const userID = req.token_data.userInfo.user_id;
    const workspaceID = req.params.workspaceID;

    let result = await db.query(`INSERT INTO work_space_messages
    (message_title, message_content, user_id, work_space_id, "time", "date","createdAt","updatedAt")
    VALUES($1, $2, $3, $4, $5, $6, $7, $8) returning work_space_msg_id`, [title, content, userID, workspaceID, time, date, new Date(), new Date()])
    /**.then((err,result)=>{
        if (err) throw err;
        
    }).catch((err)=>{
        console.log(err)
    })**/

    if (artifactName.length > 0) {
        let messageID = result.rows[0].work_space_msg_id;
        await createReference(artifactName, workspaceID, messageID, req);
    }


    res.status(201).json({});
})

router.get("/:workspaceID/user-emails-in-workspace", async (req, res) => {
    const email = req.query.email
    const workspaceID = req.params.workspaceID
    const userID = req.token_data.userInfo.user_id;
    const results = await db.query(`select email from users u 
    inner join work_space_members wsm on wsm.user_id  = u.user_id 
    inner join work_spaces ws on ws.work_space_id  = wsm.work_space_id 
    where ws.work_space_id = $1 and u.email like '%' || $2 || '%' and u.user_id <> $3`, [workspaceID, email, userID])
    res.status(200).json(results.rows);
})

async function userWorkspaceArtifactOperation(usersList, workspaceArtID, operation = "insert") {
    let usersToAdd = [] // [{ id : number, permission : string },...]

    for (let i = 0; i < usersList.length; i++) {
        let user = usersList[i];
        const userID = await (await db.query("SELECT user_id FROM users WHERE users.email = $1", [user.email])).rows[0].user_id
        usersToAdd.push({ userID, permissions: user.permissions })
    }

    if (operation === "insert")
    {
        for (let i = 0; i < usersToAdd.length; i++) {
            let userToAdd = usersToAdd[i]
            await db.query(`INSERT INTO workspace_art_access_users
                (user_id, permissions, "createdAt", "updatedAt",work_space_artifacts_id)
                VALUES($1, $2, $3, $4,$5)`, [userToAdd.userID, userToAdd.permissions, new Date(), new Date(), workspaceArtID])
        }
    }   
    else if (operation === "update")
    {
        await db.query(`Delete From workspace_art_access_users Where work_space_artifacts_id = $1;`,[workspaceArtID])
        for (let i = 0; i < usersToAdd.length; i++) {
            let userToAdd = usersToAdd[i]
            await db.query(`INSERT INTO workspace_art_access_users
                (user_id, permissions, "createdAt", "updatedAt",work_space_artifacts_id)
                VALUES($1, $2, $3, $4,$5)`, [userToAdd.userID, userToAdd.permissions, new Date(), new Date(), workspaceArtID])
        }
    }
}

// Add Artifact to workspace
router.post('/:workspaceID/artifact/add', workspaceMiddleware.encryptArtifactPassword, async (req, res) => {

    const workspaceID = req.params.workspaceID;
    const artifactName = req.body.artifactName; // array of the artifact id's
    const isSecured = req.body.isSecured === true ? 1 : 0; // check if the value corresponds with what it can put in the database
    const password = req.artifactPassword;
    const usersList = req.body.usersList; // people who have default access
    const userEmail = req.token_data.userInfo.email

    let responseCode = 200;

    // Adds the user to the list by default as the admin
    usersList.unshift({
        email: userEmail,
        permissions: 'Admin'
    })
    
    // select the id of the artifact
    let artifacts = await db.query(`SELECT * FROM artifacts WHERE artifacts.name = $1`, [artifactName])

    const emptyData = 0;
    if (artifacts.rows.length === emptyData) {
        return res.status(responseCode).json({}) // let user know that info not valid or found
    }

    const artifactID = artifacts.rows[0].art_id;

    // check if the artifact exists in the workspace
    let result = await db.query(`SELECT * FROM 
        work_space_artifacts where work_space_artifacts.art_id  = $1 
        and work_space_artifacts.work_space_id  = $2`, [artifactID, workspaceID])

    if (result.rowCount > 0) {
        responseCode = 409
        return res.status(responseCode).json({})
    }

    // Add the artifact to the workspace
    let result2 = await db.query(`INSERT INTO work_space_artifacts
    (work_space_id,art_id,"createdAt","updatedAt",is_secured,"password") VALUES($1,$2,$3,$4,$5,$6) returning work_space_artifacts_id`,
        [workspaceID, artifactID, new Date(), new Date(), isSecured, password]).catch((err) => {
            if (err) throw err
        })

    // Add users to the access list
    const workspaceArtID = result2.rows[0].work_space_artifacts_id
    
    await userWorkspaceArtifactOperation(usersList, workspaceArtID)


    return res.status(responseCode).json({})
})

router.put("/:workspaceID/artifact/update-access-users", async (req, res) => {
    const { usersList, workspaceArtifactID } = req.body;
    await userWorkspaceArtifactOperation(usersList,workspaceArtifactID,"update");
    res.status(200).json({})
})

router.put("/:workspaceID/artifact/toggle-password-protection",async (req,res)=>{
    const {newIsSecured, workspaceArtifactID} = req.body
    await db.query(`UPDATE work_space_artifacts SET is_secured = $1 WHERE work_space_artifacts_id = $2`,[newIsSecured,workspaceArtifactID])
    await db.query(`UPDATE work_space_artifacts SET is_secured = $1 WHERE work_space_artifacts_id = $2`,[newIsSecured,workspaceArtifactID])
    res.status(200).json({})
})

// Get who has access to a an workspace artifact
router.get("/:workspaceID/artifact/access-users-collection", async (req, res) => {
    const artifactID = req.query.artID;
    const workspaceID = req.params.workspaceID
    const results = await db.query(`select waau.ws_art_access_users_id, users.first_name, users.last_name, users.email, waau.permissions from work_space_artifacts wsa 
    inner join workspace_art_access_users waau on waau.work_space_artifacts_id = wsa.work_space_artifacts_id 
    inner join users on users.user_id = waau.user_id 
    where art_id  = $1 and work_space_id = $2`, [artifactID, workspaceID])

    res.status(200).json(results.rows)
})

// Get Workspace Artifact
router.get("/:workspaceID/artifact/as-workspace-artifact", async (req, res) => {
    const artifactID = req.query.artID;
    const workspaceID = req.params.workspaceID
    const results = await db.query(`select 
    work_space_artifacts_id, 
    work_space_id, 
    art_id, 
    is_secured, 
    "createdAt" 
    from 
    work_space_artifacts wsa where work_space_id = $1 and art_id = $2`, [workspaceID, artifactID])

    res.status(200).json(results.rows[0])
})

// Get specific workspace message, post or thread
router.get("/:workspaceID/message/:messageID", async (req, res) => {

    const workspaceID = req.params.workspaceID
    const messageID = req.params.messageID;
    const tempQuery = `select * from work_space_messages 
    
    inner join users on users.user_id = work_space_messages.user_id 

    where work_space_id = $1 and work_space_msg_id = $2`

    const query = `select date,
    message_content,
    message_title,
    time,
    users.user_id,
    work_space_id,
    wsm.work_space_msg_id,
    first_name,
    last_name,
    email,
    a2."name" as artifact_name,
    a2.art_id as artifact_id,
    a2.description as artifact_description,
    a2.user_id as artifact_user from work_space_messages wsm
    inner join users on users.user_id = wsm.user_id 
    left join work_space_references wsr on wsr.work_space_msg_id = wsm.work_space_msg_id 
    left join work_space_ref_items wsri on wsri.work_space_ref_id = wsr.work_space_ref_id 
    left join artifacts a2 on a2.art_id = wsri.art_id 
    where wsm.work_space_id = $1 and wsm.work_space_msg_id = $2`
    const result = await db.query(query, [workspaceID, messageID])
    const workspacePost = result.rows[0];
    res.status(200).json(workspacePost)
})

// Now working with message replies
router.get("/:workspaceID/message/:messageID/replies", async (req, res) => {
    //const workspaceID = req.params.workspaceID
    const messageID = req.params.messageID;
    const result = await db.query(`SELECT "timestamp", "content" , action_type, users.user_id,users.email,
    users.first_name, users.last_name,work_space_msg_reply_id, work_space_msg_id FROM work_space_message_replies
    inner join users on users.user_id = work_space_message_replies.user_id 
    WHERE work_space_msg_id = $1`, [messageID]);
    const rows = result.rows;
    res.status(200).json(rows)
})

// Submit a reply to a workspace
router.post("/:workspaceID/message/:messageID/reply", async (req, res) => {

    const userID = req.token_data.userInfo.user_id;

    const messageID = req.params.messageID
    const { content, actionType, timestamp } = req.body;

    const query = `INSERT INTO work_space_message_replies
    ("timestamp", "content", action_type, work_space_msg_id, user_id, "createdAt","updatedAt")
    VALUES($1, $2, $3, $4, $5, $6, $7);`

    const results = await db.query(query, [timestamp, content, actionType, messageID, userID, new Date(), new Date()])
        .catch(err => {
            if (err) throw err
            res.status(500).json({})
        })

    res.status(201).json({})
})

module.exports = router;