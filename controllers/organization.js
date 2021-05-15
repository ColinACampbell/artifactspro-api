const crypto = require('crypto');
const db = require('./../config/db')
const jwtUtil = require('./../utils/jwtUtil');
const encryptUtil = require('./../utils/encryptionUtil');
const { STATUS_CODES } = require('http');

exports.createOrg = (req, res) => {

    const userID = req.token_data.userInfo.user_id;
    const userInfo = req.token_data.userInfo;
    const { name: orgName,
        phone1,
        phone2,
        address1,
        address2, pricePackageID } = req.body;
    const accessCode = encryptUtil.createOrgAccessCode();

    // check if the organization key already exists
    db.query("SELECT * FROM organizations WHERE name = $1", [orgName], (err, result) => {
        if (err) throw err;
        let rowCount = result.rowCount;
        // if the key does not exists
        if (rowCount === 0) {
            // add organization to the database
            db.query(`INSERT INTO public.organizations 
            (user_id, name, type, org_code,"createdAt","updatedAt",address_line_1,address_line_2,phone_line_1,phone_line_2,package_id) 
            VALUES ($1, $2, '', $3, $4, $5, $6, $7, $8, $9, $10) RETURNING org_id,user_id, name, type,"createdAt","updatedAt"`,
                [userID, orgName, accessCode, new Date(), new Date(), address1, address2, phone1, phone2, pricePackageID], (err, result) => {
                    if (err) throw err;
                    // get organization info to store in session object in req object

                    let orgInfo = result.rows[0]; // store information about the organization so it can be used later
                    const orgID = result.rows[0].org_id;

                    // store user as a member of that organization
                    // TODO : Test this thorughly
                    db.query('INSERT INTO public.organization_members (user_id, org_id,role,"createdAt","updatedAt") VALUES($1, $2, $3, $4, $5);', [userID, orgID, 'owner', new Date(), new Date()], (err, result) => {
                        if (err) throw err;
                        jwtUtil.createToken(userInfo, orgInfo).then((token) => {
                            res.status(201).json({
                                token
                            });
                        })

                    });

                })

        } else {
            res.status(409).json({})
        }
    });
}

exports.info = (req, res) => {

    const orgInfo = req.token_data.orgInfo
    // check if the user belongs to an organization
    if (orgInfo == null || orgInfo == undefined)
        res.status(422).json({})
    else {
        let org_id = req.token_data.orgInfo.org_id
        db.query(`SELECT org_id, name, "createdAt", "type", address_line_1, address_line_2, 
                phone_line_1, phone_line_2, user_id FROM organizations WHERE org_id = $1`, [org_id],
            (err, result) => {
                res.json(result.rows[0])
            })
    }
}

exports.infoFromAccessCode = (req, res) => {
    const accessCode = req.params.accessCode;
    db.query('SELECT name FROM organizations WHERE org_code = $1', [accessCode], (err, result) => {
        if (err) throw err;
        const org_name = result.rows[0].name;
        res.json({ org_name });
    });
}

exports.changeOrgInfo = (req, res) => {
    const { id: orgID } = req.query
    const { orgName, phoneLine1, phoneLine2, address1, address2 } = req.body;

    if (!orgID)
        res.status(400).json({})
    else
        db.query(`UPDATE public.organizations
            SET "name"=$1, address_line_1=$2, 
            address_line_2=$3, phone_line_1=$4, phone_line_2=$5 
            WHERE org_id=$6`,
            [orgName, address1, address2, phoneLine1, phoneLine2, orgID],
            (err, result) => {
                if (err) throw err;
                res.status(200).json({})
            })
}

// Update client : Status Code
exports.inviteFromAccessCode = (req, res) => {
    const code = req.params.code;
    const userID = req.token_data.userInfo.user_id; // this session was set from the signup process
    db.query("SELECT * FROM organizations WHERE org_code = $1", [code], (err, result) => {
        if (err) throw err;

        const orgInfo = result.rows[0];

        if (orgInfo === null || orgInfo === undefined)
            return res.status(404).json({})

        const orgID = orgInfo.org_id;

        // Check if the user is already a member of the organization
        db.query(`select * from organization_members om 
        inner join users u ON om.user_id = u.user_id 
        where u.user_id = $1 and om.org_id = $2`, [userID, orgID],
            (err, results) => {
                if (err) throw err;

                // TODO Implement front end to check for bad errors
                const resultsCount = results.rowCount;
                if (resultsCount == 1) // they already exists, so I can't add them
                    return res.status(409).json({})
                else // store user as a member of that organization
                    db.query('INSERT INTO public.organization_members (user_id, org_id,role,"createdAt","updatedAt") VALUES($1, $2, $3, $4, $5);', [userID, orgID, 'member', new Date(), new Date()], (err, result) => {
                        if (err) throw err;

                        jwtUtil.createToken(req.token_data.userInfo, orgInfo)
                            .then((token) => {
                                res.status(201).json({
                                    token
                                });
                            })
                    });
            })
    })
}

exports.updateInviteCode = (req,res) =>{
    const accessCode = encryptUtil.createOrgAccessCode();
    console.log(accessCode)
    const { orgID } = req.body;
    db.query(`UPDATE public.organizations
        SET org_code=$1
        WHERE org_id=$2`,[accessCode,orgID],
        (error,result)=>{
            if (error) throw error
            console.log(result)
            console.log(orgID)
            res.status(200).json({})
        })
}

exports.getAll = (req, res) => {
    const { user_id: userID } = req.token_data.userInfo
    db.query(`select o."name", 
    o.org_id, 
    o."type",  
    o.org_code,
    om."role" 
    from organizations o 
    inner join organization_members om on o.org_id  = om.org_id 
    inner join users on users.user_id  = om.user_id 
    where users.user_id = $1`, [userID], (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows)
    })
}

// Switches tokens used for the new organization
exports.switchOrganization = (req, res) => {
    const userInfo = req.token_data.userInfo;
    const { newOrgID } = req.body;
    db.query('SELECT * FROM organizations WHERE org_id = $1', [newOrgID],
        (err, result) => {
            if (err) throw err;
            const orgInfo = result.rows[0]
            // generate new token with organization info
            jwtUtil.createToken(userInfo, orgInfo)
                .then((token) => {
                    res.status(200).json({
                        token
                    });
                })
        })
}