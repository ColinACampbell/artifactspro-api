const express = require('express');
const router = express.Router();
const db = require('./../config/db')
const crypto = require('crypto');

router.post('/create',(req,res)=>{

    const userID = req.session.userInfo.user_id;
    const orgName = req.body.name;
    const orgKey = req.body.orgKey;
    let orgPassKey = req.body.orgPassKey;

    orgPassKey = crypto.createHash("sha256")
    .update(orgPassKey)
    .digest("hex");

    // check if the organiation key already exists
    db.query("SELECT * FROM organizations WHERE org_key = $1",[orgKey],(err,result)=>{
        if (err) throw err;
        console.log(req.session)
        let rowCount = result.rowCount;
        if (rowCount === 0)
        {
            // add organization to the database
            db.query("INSERT INTO public.organizations (user_id, name, type, org_key, org_code) VALUES ($1, $2, '', $3, $4);",[userID,orgName,orgKey,orgPassKey],(err,result)=>{
                if (err) throw err;
                
                db.query("SELECT * FROM organizations WHERE org_key = $1",[orgKey],(err,result)=>{
                    if (err) throw err;
                    req.session.orgInfo = result.rows[0]; // store information about the organization so it can be used later
                    res.json({message:"success"});
                })

            })

        } else
        {
            res.json({message:"failure"})
        }
    });
})

module.exports = router;