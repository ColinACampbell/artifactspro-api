const express = require('express');
const router = express.Router();
const db = require('./../config/db')

router.get('/',(req,res)=>{
    let orgID = req.session.orgInfo.org_id;
    db.query('SELECT * FROM artifacts where org_id = $1',[orgID],
    (err,result)=>{
        if (err) throw err;
        res.json(result.rows);
    })
});

router.post('/create',(req,res)=>{
    let orgInfo = req.session.orgInfo;
    let userInfo = req.session.userInfo;
    let userID = userInfo.user_id;
    let orgID = orgInfo.org_id;

    let name = req.body.name;
    let dateCreated = req.body.date_created;
    let description = req.body.description;

    db.query(`
    INSERT INTO artifacts
    ("name", org_id, user_id, date_created, description)
    VALUES($1, $2, $3, $4, $5);

    `,[name,orgID,userID,dateCreated,description],
    (err,result)=>{
        if (err) throw err
        res.status(200).send({message:"ok"})
    })
    
})

module.exports = router;