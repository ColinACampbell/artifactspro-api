const express = require('express');
const router = express.Router();
const db = require('./../config/db');

// Gets workspaces from user 
router.get('/all', (req, res) => {
    //console.log(req.session);
    const userID = req.session.userInfo.user_id;
    db.query(`select work_spaces.work_space_id, work_space_name, date_created, org_id from work_spaces 
    inner join work_space_members  on work_space_members.work_space_id  = work_spaces.work_space_id 
    inner join users on users.user_id = work_space_members.user_id 
    where users.user_id = $1`, [userID], (err, result) => {
        if (err) throw err;
        let rows = result.rows;
        res.json(rows);
    })
});

// TODO make this function async
router.post('/create', async (req, res) => {
    const userID = req.session.userInfo.user_id;
    const orgID = req.session.orgInfo.org_id;

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

// Search workspace by name
router.get("/search", async (req, res) => {
    const { key } = req.query;
    const userID = req.session.userInfo.user_id;

    let query = `select work_spaces.work_space_id, work_space_name, date_created, org_id from work_spaces 
    inner join work_space_members  on work_space_members.work_space_id  = work_spaces.work_space_id 
    inner join users on users.user_id = work_space_members.user_id 
    where users.user_id = $1 and work_spaces.work_space_name like '%' || $2 || '%'`

    let results = []
    if (key.length === 0) {
        query = `select work_spaces.work_space_id, work_space_name, date_created, org_id from work_spaces 
        inner join work_space_members  on work_space_members.work_space_id  = work_spaces.work_space_id 
        inner join users on users.user_id = work_space_members.user_id 
        where users.user_id = $1`
        results = await db.query(query, [userID])
    } else {
        results = await db.query(query, [userID, key])
        console.log()
    }
    res.status(200).json(results.rows)
})

router.get("/info", async (req, res) => {
    const workspaceID = req.query.id;
    const orgID = req.session.orgInfo.org_id;

    const result = await db.query("select * from work_spaces ws where ws.org_id = $1 and ws.work_space_id = $2", [orgID, workspaceID])

    console.log(result.rows[0])

    res.status(200).json(result.rows[0])

})

router.get("/:workspaceID/all-participants", async (req,res)=>{
    const workspaceID = req.params.workspaceID;
    const userID = req.session.userInfo.user_id;
    const result = await db.query(`select 
        u.user_id, wsm.work_space_member_id,
        u.first_name, u.last_name,u.email, wsm."role"
        from work_space_members wsm 
        inner join users u on u.user_id = wsm.user_id 
        where wsm.work_space_id = $1 and u.user_id <> $2`
        ,[workspaceID,userID])
    res.send(result.rows)
})

// Add member 
router.post('/:workspaceID/add-member', async (req, res) => {
    const email = req.body.email;
    const workspaceID = req.params.workspaceID;
    //console.log(workspaceID,email);

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

router.put("/:workspaceID/submit-change",async (req,res)=>{
    const workspaceID = req.params.workspaceID;
    const newWorkspaceName = req.body.workspaceName;
    const newWorkspaceDsc = req.body.workspaceDsc;

    await db.query("UPDATE work_spaces SET work_space_name = $1, work_space_description = $2 WHERE work_space_id = $3",
        [newWorkspaceName,newWorkspaceDsc,workspaceID])
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
    let result = await db.query(`select * from artifacts 
    inner join work_space_artifacts on work_space_artifacts.art_id  = artifacts.art_id 
    inner join work_spaces on work_spaces.work_space_id  = work_space_artifacts.work_space_id 
    where work_space_artifacts.work_space_id = $1`, [workspaceID]);
    let artifacts = result.rows;
    res.status(200).json(artifacts);
})

router.get("/:workspaceID/suggestion/artifacts", async (req, res) => {

    const workspaceID = req.params.workspaceID;
    const artifactName = req.query.artifactName;

    const userID = req.session.userInfo.user_id;
    const orgID = req.session.orgInfo.org_id;

    let query = `select artifacts."name" from artifacts 
    inner join users on artifacts.user_id = users.user_id 
    inner join work_space_members on work_space_members.user_id = users.user_id 
    inner join work_spaces on work_spaces.work_space_id = work_space_members.work_space_id 
    inner join organizations on organizations.org_id = work_spaces.org_id 
    where users.user_id = $1 and work_spaces.work_space_id = $2
    and artifacts."name" like '%' || $3 || '%' and organizations.org_id = $4`

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

    const userID = req.session.userInfo.user_id

    console.log({ artifactName, userID, workspaceID, messageID })

    const results = await db.query(`select a.art_id from work_spaces ws 
    inner join work_space_artifacts wsa ON wsa.work_space_id = ws.work_space_id 
    inner join artifacts a on a.art_id  = wsa.art_id 
    where ws.work_space_id = $1 and a."name" = $2`, [workspaceID, artifactName])

    let artID = 0;
    if (results.rowCount === 0) {
        console.log("Artifact not found")
        res.status(404).json({})
        return
    } else {
        artID = results.rows[0].art_id
    }

    let results2 = await db.query(`INSERT INTO work_space_references
    ("createdAt","updatedAt", work_space_msg_id)
    VALUES($1, $2, $3) returning work_space_ref_id`, [new Date(), new Date(), messageID])

    let referenceID = results2.rows[0].work_space_ref_id;
    console.log("Reference ID " + referenceID)

    await db.query(`INSERT INTO work_space_ref_items
    (art_id, work_space_ref_id, "createdAt", "updatedAt")
    VALUES($1, $2, $3, $4);`, [artID, referenceID, new Date(), new Date()])
}

router.post("/:workspaceID/add/message", async (req, res) => {
    const { title, content, time, date, artifactName } = req.body;
    const userID = req.session.userInfo.user_id;
    //console.log(userID);
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
        console.log(messageID)
        await createReference(artifactName, workspaceID, messageID, req);
    }

    res.status(201).json({});
})

// suggest email to add 
router.get('/suggestion/email', async (req, res) => {
    //console.log(req.session);

    const orgID = req.session.orgInfo.org_id;
    let email = req.query.email;

    let result = await db.query(`select email from users 
    inner join organization_members ON organization_members.user_id = users.user_id 
    inner join organizations  on organizations.org_id  = organization_members.org_id 
    where users.email like '%' || $1 || '%' and organizations.org_id = $2;`, [email, orgID]);
    res.json(result.rows);
});

// Add Artifact to workspace
router.post('/:workspaceID/artifact/add', async (req, res) => {

    const workspaceID = req.params.workspaceID;
    const artifactName = req.body.artifactName; // array of the artifact id's

    // select the id of the artifact
    let artifacts = await db.query(`SELECT * FROM artifacts WHERE artifacts.name = $1`, [artifactName])

    const emptyData = 0;
    if (artifacts.rows.length === emptyData) {
        res.status(422).json({}) // let user know that info not valid or found
        return
    }

    const artifactID = artifacts.rows[0].art_id;

    // check if the artifact exists in the workspace
    let result = await db.query(`SELECT * FROM 
        work_space_artifacts where work_space_artifacts.art_id  = $1 
        and work_space_artifacts.work_space_id  = $2`, [artifactID, workspaceID])

    if (result.rowCount >= 1) {
        res.status(409).json({})
        return
    }

    // add the artifact to the workspace
    await db.query(`INSERT INTO work_space_artifacts
    (work_space_id,art_id,"createdAt","updatedAt") VALUES($1,$2,$3,$4);`,
        [workspaceID, artifactID, new Date(), new Date()]).catch((err) => {
            if (err) throw err || res.status(500).json({})
        })

    res.status(200).json({})
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

    const userID = req.session.userInfo.user_id;

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