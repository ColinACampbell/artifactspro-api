const crypto = require('crypto');
const db = require('./../config/db')
const jwt = require("jsonwebtoken");
const config = require('./../config/config')

exports.createOrg = (req,res)=>{

    const userID = req.authentication.userInfo.user_id;
    const orgName = req.body.name;
    const orgKey = req.body.orgKey;
    let orgPassKey = req.body.orgPassKey;
    

    orgPassKey = crypto.createHash("sha256")
    .update(orgPassKey)
    .digest("hex");

    let accessCode = crypto.randomBytes(30).toString('hex');

    // check if the organization key already exists
    db.query("SELECT * FROM organizations WHERE org_key = $1",[orgKey],(err,result)=>{
        if (err) throw err;
        let rowCount = result.rowCount;
        // if the key does not exists
        if (rowCount === 0)
        {
            // add organization to the database
            db.query("INSERT INTO public.organizations (user_id, name, type, org_key, org_code,access_key) VALUES ($1, $2, '', $3, $4,$5);",[userID,orgName,orgKey,orgPassKey,accessCode],(err,result)=>{
                if (err) throw err;
                // get organization info to store in authentication object in req object
                db.query("SELECT * FROM organizations WHERE org_key = $1",[orgKey],(err,result)=>{
                    if (err) throw err;

                    req.authentication.orgInfo = result.rows[0]; // store information about the organization so it can be used later
                    const orgID = result.rows[0].org_id;

                    // store user as a member of that organization
                    db.query('INSERT INTO public.organization_members (user_id, org_id,role) VALUES($1, $2, $3);',[userID,orgID,'owner'],(err,result)=>{
                        if (err) throw err;
                        let token = jwt.sign(req.authentication,config.jwt.secret)
                        res.status(201).json({token});
                    });
                    
                })

            })

        } else
        {
            res.status(409).json({})
        }
    });
}

exports.info = (req,res)=>{
    let org_key = req.authentication.orgInfo.org_key
    db.query('SELECT * FROM organizations WHERE org_key = $1',[org_key],
    (err,result)=>{
        res.json(result.rows[0])
    })
}

exports.infoFromAccessCode = (req,res)=>{
    const accessCode = req.params.accessCode;
    db.query('SELECT name FROM organizations WHERE org_code = $1',[accessCode],(err,result)=>{
        if (err) throw err;
        const org_name = result.rows[0].name;
        res.json({org_name});
    });
}

// Update client : Status Code
exports.inviteFromAccessCode = (req,res)=>
{
    let code = req.params.code; 
    let userID = req.authentication.userInfo.user_id; // this session was set from the signup process
    db.query("SELECT * FROM organizations WHERE org_code = $1",[code],(err,result)=>{
        if (err) throw err;

        req.session.orgInfo = result.rows[0]; // store information about the organization so it can be used later
        const orgID = result.rows[0].org_id;

        // store user as a member of that organization
        db.query('INSERT INTO public.organization_members (user_id, org_id,role) VALUES($1, $2, $3);',[userID,orgID,'member'],(err,result)=>{
            if (err) throw err;
            res.status(201).json({});
        });
        
    })
}