const express = require('express');
const router = express.Router();
const db = require('./../config/db')

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

module.exports = router;