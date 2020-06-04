const express = require('express');
const router = express.Router();
const db = require('./../config/db');

// Gets workspaces from user 
router.get('/all',(req,res)=>{
    //console.log(req.session);
    const userID = req.session.userInfo.user_id;
    db.query(`select work_spaces.work_space_id, work_space_name, date_created, org_id from work_spaces 
    inner join work_space_members  on work_space_members.work_space_id  = work_spaces.work_space_id 
    inner join users on users.user_id = work_space_members.user_id 
    where users.user_id = $1`,[userID],(err,result)=>{
        if (err) throw err;
        let rows = result.rows;
        res.json(rows);
    })
});

router.post('/create',(req,res)=>{
    const userID = req.session.userInfo.user_id;
    const orgID = req.session.orgInfo.org_id;

    let workspaceName = req.body.workspace_name;
    let dateCreated = req.body.date_created;

    // First create the workspace
    db.query("INSERT INTO work_spaces (work_space_name, date_created, org_id) VALUES($1, $2, $3);",
    [workspaceName,dateCreated,orgID],(err,result)=>{
        // select the id of the work space created
        db.query("SELECT work_space_id FROM work_spaces where work_space_name = $1 and org_id = $2",
        [workspaceName,orgID],(err,result)=>{
            if (err) throw err;
            console.log(result.rows[0].work_space_id)
            let workspaceID = result.rows[0].work_space_id;
            // Then add the user a member (admin) of the workspace
            db.query("INSERT INTO work_space_members (user_id, work_space_id, role) VALUES($1, $2, 'admin');",
            [userID,workspaceID],(err,result)=>{
                if (err) throw err;
                res.json({message:'ok',work_space_id:workspaceID})
            });
        })
    });
});

router.post('/:workspaceID/add', async (req,res)=>{
    const email = req.body.email;
    const workspaceID = req.params.workspaceID;
    console.log(workspaceID,email);

    // check it the member already exists
    let members = await db.query(`select * from work_space_members 
    inner join users ON users.user_id  = work_space_members.user_id 
    where users.email = $1 and work_space_members.work_space_id = $2`,[email,workspaceID]);

    if (members.rowCount > 0)
        res.status(200).json({message:"user_exists"});
    else 
    {
        // First get user id then add them using that id
        let result = db.query('SELECT * FROM users WHERE email = $1',[email]);
       
        const userID = (await result).rows[0].user_id;

        db.query(`INSERT INTO work_space_members
        (user_id, work_space_id, "role")
        VALUES($1, $2, 'member');;
        `,[userID,workspaceID])

        res.status(200).json({message:"success"});
    }
});

router.get('/:workspaceID',(req,res)=>{
    // TODO : Verify that user has access to resource
    let workspaceID = req.params.workspaceID;
    db.query('SELECT * FROM work_spaces WHERE work_space_id = $1',[workspaceID],
    (err,result)=>{
        if (err) throw err;
        const row = result.rows[0];
        res.status(200).json(row);
    })
});

// Little experimenting on this endpoint
router.get('/:workspaceID/members',async (req,res)=>{
    let workspaceID = req.params.workspaceID;
    let result = await db.query(`select first_name, last_name,email,role from work_space_members 
    inner join users on users.user_id  = work_space_members.user_id 
    WHERE
    work_space_members.work_space_id  = $1`,[workspaceID])
    let members = result.rows;
    res.status(200).json(members);
})

// Get aritfacts that belong to the workspace
router.get('/:workspaceID/artifacts',async (req,res)=>{
    let workspaceID = req.params.workspaceID;
    let result = await db.query(`select * from artifacts 
    inner join work_spaces on artifacts.owner = work_spaces.work_space_id 
    where work_spaces.work_space_id = $1`,[workspaceID]);
    let artifacts = result.rows;
    res.status(200).json(artifacts);
})

// Get Messages
// TODO : Test this end point
router.get('/:workspaceID/messages', async (req,res)=>{
    let workspaceID = req.params.workspaceID;
    let result = await db.query(`SELECT * FROM work_space_messages WHERE work_space_id = $1`,[workspaceID]);
    console.log(result.rows);
})


// create a message
router.post("/:workspaceID/message", (req,res)=>{

    const { title, content, time } = req.body;
    const userID = req.session.userInfo.user_id;
    console.log(userID);
    const workspaceID = req.params.workspaceID;
    console.log(workspaceID);

    db.query(`INSERT INTO work_space_messages
    (message_title, message_content, user_id, work_space_id, "time")
    VALUES($1, $2, $3, $4, $5);`,[title,content,userID,time])

    res.status(201).json({});

})

// test out this endpoint
router.get('/suggestion/email', async (req,res)=>{
    console.log(req.session);

    const orgID = req.session.orgInfo.org_id;
    let email = req.query.email;
    
    let result = await db.query(`select  email from users 
    inner join organization_members ON organization_members.user_id = users.user_id 
    inner join organizations  on organizations.org_id  = organization_members.org_id 
    where users.email like '%' || $1 || '%' and organizations.org_id = $2;`,[email,orgID]);
    res.json(result.rows);
});

module.exports = router;