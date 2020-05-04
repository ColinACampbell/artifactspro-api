const express = require('express');
const router = express.Router();
const db = require('./../config/db');
const config = require('./../config/config')

router.get('/all',(req,res)=>{
    //console.log(req.session)
    let orgID = req.session.orgInfo.org_id;
    db.query(`select role, email, first_name, last_name from organization_members
    INNER JOIN users on users.user_id = organization_members.user_id
    where org_id  = $1`,[orgID],
    (err,result)=>{
        if (err) throw err;
        //console.log(result.rows);
        res.json(result.rows)
    })
})

router.get('/invite-code',(req,res)=>{
    let orgID = req.session.orgInfo.org_id;
    db.query('SELECT * FROM organizations WHERE org_id = $1',[orgID],(err,result)=>{
        console.log(result.rows[0].org_code);
        let orgCode = result.rows[0].org_code;
        let orgName = result.rows[0].name;
        let serverhost = config.dev ? 'http://localhost:4200': config.host
        let invite_url = `${serverhost}/team/invite/${orgCode}`
        res.json({invite_url}); 
    })
})

module.exports = router;