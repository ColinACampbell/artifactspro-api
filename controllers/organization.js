const crypto = require('crypto');
const db = require('./../config/db')

exports.createOrg = (req,res)=>{

    const userID = req.session.userInfo.user_id;
    const orgName = req.body.name;
    
    let accessCode = crypto.randomBytes(30).toString('hex');
 
    // check if the organization key already exists
    db.query("SELECT * FROM organizations WHERE name = $1",[orgName],(err,result)=>{
        if (err) throw err;
        let rowCount = result.rowCount;
        // if the key does not exists
        if (rowCount === 0)
        {
            // add organization to the database
            db.query(`INSERT INTO public.organizations 
            (user_id, name, type, org_code,"createdAt","updatedAt") 
            VALUES ($1, $2, '', $3, $4, $5) RETURNING org_id,user_id, name, type,"createdAt","updatedAt"`,
            [userID,orgName,accessCode,new Date(),new Date()],(err,result)=>{
                if (err) throw err;
                // get organization info to store in session object in req object

                req.session.orgInfo = result.rows[0]; // store information about the organization so it can be used later
                const orgID = result.rows[0].org_id;
 
                // store user as a member of that organization
                db.query('INSERT INTO public.organization_members (user_id, org_id,role,"createdAt","updatedAt") VALUES($1, $2, $3, $4, $5);',[userID,orgID,'owner', new Date(),new Date()],(err,result)=>{
                    if (err) throw err;
                    res.status(201).json();
                });
                    
            })

        } else
        {
            res.status(409).json({})
        }
    });
}

exports.info = (req,res)=>{
    let org_id = req.session.orgInfo.org_id
    db.query('SELECT org_id, name, "createdAt", "type", user_id FROM organizations WHERE org_id = $1',[org_id],
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
    let userID = req.session.userInfo.user_id; // this session was set from the signup process
    db.query("SELECT * FROM organizations WHERE org_code = $1",[code],(err,result)=>{
        if (err) throw err;

        req.session.orgInfo = result.rows[0]; // store information about the organization so it can be used later
        const orgID = result.rows[0].org_id;

        // store user as a member of that organization
        db.query('INSERT INTO public.organization_members (user_id, org_id,role,"createdAt","updatedAt") VALUES($1, $2, $3, $4, $5);',[userID,orgID,'member', new Date(), new Date()],(err,result)=>{
            if (err) throw err;
            res.status(201).json({});
        });
        
    })
}