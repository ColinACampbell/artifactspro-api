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
        let rowCount = result.rowCount;
        // if the key does not exists
        if (rowCount === 0)
        {
            // add organization to the database
            db.query("INSERT INTO public.organizations (user_id, name, type, org_key, org_code) VALUES ($1, $2, '', $3, $4);",[userID,orgName,orgKey,orgPassKey],(err,result)=>{
                if (err) throw err;
                // get organization info to store in sessions
                db.query("SELECT * FROM organizations WHERE org_key = $1",[orgKey],(err,result)=>{
                    if (err) throw err;

                    req.session.orgInfo = result.rows[0]; // store information about the organization so it can be used later
                    const orgID = result.rows[0].org_id;

                    // store user as a member of that organization
                    db.query('INSERT INTO public.organization_members (user_id, org_id) VALUES($1, $2);',[userID,orgID],(err,result)=>{
                        if (err) throw err;
                        res.json({message:"success",organization:req.session.orgInfo});
                    });
                    
                })

            })

        } else
        {
            res.json({message:"failure"})
        }
    });
})

module.exports = router;