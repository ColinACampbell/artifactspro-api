const { user } = require('./../config/db');
const db = require('./../config/db');

exports.getNames = async (req, res) => {
    const userID = req.token_data.userInfo.user_id;
    const orgID = req.token_data.orgInfo.org_id;
    const query = `select ws.work_space_name from work_spaces ws 
    inner join work_space_members wsm on wsm.work_space_id = ws.work_space_id 
    inner join users u on u.user_id = wsm.user_id 
    where u.user_id  = $1 and ws.org_id = $2`
    const results = await db.query(query, [userID, orgID])
    res.status(200).json(results.rows)
}

exports.getAll = (req, res) => {
    const userID = req.token_data.userInfo.user_id;
    const orgID = req.token_data.orgInfo.org_id
    db.query(`select work_spaces.work_space_id, work_space_name, date_created, org_id from work_spaces 
    inner join work_space_members  on work_space_members.work_space_id  = work_spaces.work_space_id 
    inner join users on users.user_id = work_space_members.user_id 
    where users.user_id = $1 and work_spaces.org_id = $2`, [userID,orgID], (err, result) => {
        if (err) throw err;
        let rows = result.rows;
        res.json(rows);
    })
}

exports.createWorkspace = async (req, res) => {
    const userID = req.token_data.userInfo.user_id;
    const orgID = req.token_data.orgInfo.org_id;

    let workspaceName = req.body.workspace_name;
    let dateCreated = req.body.date_created;
    const description = req.body.description;

    // First create the workspace
    const results = await db.query(`INSERT INTO work_spaces (work_space_name, date_created, org_id,"createdAt","updatedAt",work_space_description) VALUES($1, $2, $3, $4, $5,$6) returning work_space_id;`,
        [workspaceName, dateCreated, orgID, new Date(), new Date(), description]);

    const workspaceID = results.rows[0].work_space_id

    await db.query(`INSERT INTO work_space_members (user_id, work_space_id, role,"createdAt","updatedAt") VALUES($1, $2, 'admin', $3, $4);`,
        [userID, workspaceID, new Date(), new Date()]);

    res.status(201).json({ workspaceID })
}

exports.deleteWorkspace = async (req,res)=>{
    const { workspaceID } = req.params

    // Delete workspace artifact access users first
    await db.query(`delete from workspace_art_access_users waau 
    using work_space_artifacts wsa
    where wsa.work_space_artifacts_id = waau.work_space_artifacts_id  and wsa.work_space_id = $1`,[workspaceID])

    // Delete Workspace reference message items
    await db.query(`delete from work_space_ref_items wsri 
    using 
        work_space_references wsr,
        work_space_messages wsm
    where 
        wsr.work_space_ref_id = wsri.work_space_ref_id and
        wsm.work_space_msg_id = wsr.work_space_msg_id and
        wsm.work_space_id = $1`,[workspaceID])

    // Delete Workspace references (they point to the items)
    await db.query(`delete from  work_space_references wsr
	using 
		work_space_messages wsm
	where 
		wsm.work_space_msg_id  = wsr.work_space_msg_id and 
		wsm.work_space_id = $1`,[workspaceID])

    // Delete Work space message replies
    await db.query(`delete from work_space_message_replies wsmr 
    using 
        work_space_messages wsm
    where 
        wsm.work_space_msg_id = wsmr.work_space_msg_id and
        wsm.work_space_id = $1`,[workspaceID])

    // Remove workspace artifacts
    await db.query(`delete from work_space_artifacts wsa where wsa.work_space_id = $1`,[workspaceID])

    // Delete workspace messages
    await db.query(`delete from work_space_messages wsm where wsm.work_space_id = $1`,[workspaceID])

    // Remove the members
    await db.query(`DELETE FROM public.work_space_members
    WHERE work_space_id = $1`,[workspaceID])

    // Finally remove the workspace
    await db.query(`DELETE FROM work_spaces WHERE work_space_id = $1`,[workspaceID]);
    res.status(200).json({})
}

exports.search = async (req, res) => {
    const { key } = req.query;
    const userID = req.token_data.userInfo.user_id;
    const orgID = req.token_data.orgInfo.org_id;

    let query = `select work_spaces.work_space_id, work_space_name, date_created, org_id from work_spaces 
    inner join work_space_members  on work_space_members.work_space_id  = work_spaces.work_space_id 
    inner join users on users.user_id = work_space_members.user_id 
    where users.user_id = $1 and work_spaces.work_space_name like '%' || $2 || '%' and work_spaces.org_id = $3`

    let results = []
    if (key.length === 0) {
        query = `select work_spaces.work_space_id, work_space_name, date_created, org_id from work_spaces 
        inner join work_space_members  on work_space_members.work_space_id  = work_spaces.work_space_id 
        inner join users on users.user_id = work_space_members.user_id 
        where users.user_id = $1 and work_spaces.org_id = $2`
        results = await db.query(query, [userID,orgID])
    } else {
        results = await db.query(query, [userID, key, orgID])
    }
    res.status(200).json(results.rows)
}

exports.getInformation = async (req, res) => {
    const workspaceID = req.query.id;
    const orgID = req.token_data.orgInfo.org_id;

    const result = await db.query("select * from work_spaces ws where ws.org_id = $1 and ws.work_space_id = $2", [orgID, workspaceID])

    res.status(200).json(result.rows[0])

}