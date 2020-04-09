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
    console.log(req.session.orgInfo)
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

        db.query(`SELECT art_id FROM artifacts WHERE org_id = $1  ORDER BY 1 DESC 
        LIMIT 1`,[orgID],(err,result)=>{
            if (err) throw err;
            let artID = result.rows['0'].art_id;
            res.status(200).json({message:'ok',art_id:artID})
        })
    })
})

router.get('/:artID',(req,res)=>{
    let artID = req.params.artID;
    let orgInfo = req.session.orgInfo;
    let orgID = orgInfo.org_id;

    db.query(`SELECT * FROM artifacts WHERE art_id = $1 AND org_id = $2`,[artID,orgID],
    (err,result)=>{
        let artifact = result.rows['0'];
        res.status(200).json(artifact);
    })
})

module.exports = router;