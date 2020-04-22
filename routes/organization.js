const express = require('express');
const router = express.Router();
const db = require('./../config/db')
const crypto = require('crypto');


// TODO : Write code to prevent user from being added to an organization twice
router.post('/create',(req,res)=>{

    const userID = req.session.userInfo.user_id;
    const orgName = req.body.name;
    const orgKey = req.body.orgKey;
    let orgPassKey = req.body.orgPassKey;
    

    orgPassKey = crypto.createHash("sha256")
    .update(orgPassKey)
    .digest("hex");

    let accessCode = crypto.randomBytes(30).toString('hex');

    // check if the organiation key already exists
    db.query("SELECT * FROM organizations WHERE org_key = $1",[orgKey],(err,result)=>{
        if (err) throw err;
        let rowCount = result.rowCount;
        // if the key does not exists
        if (rowCount === 0)
        {
            // add organization to the database
            db.query("INSERT INTO public.organizations (user_id, name, type, org_key, org_code,access_key) VALUES ($1, $2, '', $3, $4,$5);",[userID,orgName,orgKey,orgPassKey,accessCode],(err,result)=>{
                if (err) throw err;
                // get organization info to store in sessions
                db.query("SELECT * FROM organizations WHERE org_key = $1",[orgKey],(err,result)=>{
                    if (err) throw err;

                    req.session.orgInfo = result.rows[0]; // store information about the organization so it can be used later
                    const orgID = result.rows[0].org_id;

                    // store user as a member of that organization
                    db.query('INSERT INTO public.organization_members (user_id, org_id,role) VALUES($1, $2, $3);',[userID,orgID,'owner'],(err,result)=>{
                        if (err) throw err;
                        res.json({message:"success"});
                    });
                    
                })

            })

        } else
        {
            res.json({message:"failure"})
        }
    });
});

router.get('/info',(req,res)=>{
    let org_key = req.session.orgInfo.org_key
    db.query('SELECT * FROM organizations WHERE org_key = $1',[org_key],
    (err,result)=>{
        res.json(result.rows[0])
    })
})

module.exports = router;