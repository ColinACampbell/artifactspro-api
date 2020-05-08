const express = require('express');
const router = express.Router();
const db = require('./../config/db');

// Gets workspaces from user 
router.get('/all',(req,res)=>{
    const userID = req.session.userInfo.user_id;
    db.query(`select work_spaces.work_space_id, work_space_name, date_created, org_id from work_spaces 
    inner join work_space_members  on work_space_members.work_space_id  = work_spaces.work_space_id 
    inner join users on users.user_id = work_space_members.user_id 
    where users.user_id = $1`,[userID],(err,result)=>{
        let rows = result.rows;
        res.json(rows);
    })
});

router.post('/create',(req,res)=>{
    console.log(req.body);
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
                res.json({message:'ok'})
            });
        })
    });
});

router.post('/assign',(req,res)=>{
    const userID = req.body.userID;
    const workspaceID = req.body.workspaceID;
    // TODO : Inset data in the database to add user to a workspace
});

module.exports = router;