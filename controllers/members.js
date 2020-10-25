const db = require('./../config/db');
const config = require('./../config/configControl');
const { use } = require('../routes/member');

exports.getUserAsMember = async (req,res) => {
    const userID = req.session.userInfo.user_id;
    let orgID = req.session.orgInfo.org_id;

    const results = await db.query(`select users.user_id, role, email, first_name, last_name from organization_members
    INNER JOIN users on users.user_id = organization_members.user_id
    where org_id = $1 and users.user_id = $2`,[orgID,userID])

    res.status(200).json(results.rows[0]);
}

exports.getAll = (req,res)=>{
    let userID = req.session.userInfo.user_id;
    let orgID = req.session.orgInfo.org_id;
    db.query(`select users.user_id, role, email, first_name, last_name from organization_members
    INNER JOIN users on users.user_id = organization_members.user_id
    where org_id = $1 and users.user_id <> $2`,[orgID,userID],
    (err,result)=>{
        if (err) throw err;
        res.json(result.rows)
    })
}

exports.getInviteCode = (req,res)=>{
    let orgID = req.session.orgInfo.org_id;
    db.query('SELECT * FROM organizations WHERE org_id = $1',[orgID],(err,result)=>{
        //console.log(result.rows[0].org_code);
        let orgCode = result.rows[0].org_code;
        let orgName = result.rows[0].name;
        let serverhost = config.dev ? 'http://localhost:4200': config.host
        let invite_url = `${serverhost}/team/invite/${orgCode}`
        res.json({invite_url}); 
    })
}

exports.getMemberFromID = async (req,res) =>{
    const orgID = req.session.orgInfo.org_id;
    const userID = req.query.id;
    const results = await db.query(`select users.user_id, role, email, first_name, last_name from organization_members
    INNER JOIN users on users.user_id = organization_members.user_id
    where org_id = $1 and users.user_id = $2`,[orgID,userID])
    res.status(200).json(results.rows[0])
}
 
exports.changeMemberRole = async (req,res) => {
    const orgID = req.session.orgInfo.org_id;
    const userID = req.body.userID; // userID of member whose role to be changed NOT current user
    const role = req.body.role;

    const result = await db.query(`select mem_id from organization_members om 
    inner join users u on u.user_id  = om.user_id 
    inner join organizations o on o.org_id  = om.org_id 
    where u.user_id  = $1 and o.org_id  = $2`,[userID,orgID])

    const memberID = result.rows[0].mem_id

    await db.query(`update organization_members set "role" = $1 where mem_id = $2`,[role,memberID])
    
    res.status(200).json({})
}