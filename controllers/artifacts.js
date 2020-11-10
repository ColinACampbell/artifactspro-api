const db = require('./../config/db')

exports.getAll = (req,res)=>{
    let orgID = req.session.orgInfo.org_id;
    let userID = req.session.userInfo.user_id;
    db.query('SELECT * FROM artifacts where org_id = $1 AND user_id = $2',[orgID,userID],
    (err,result)=>{
        if (err) throw err;
        res.json(result.rows);
    })

}

// TODO : Implement this end point
exports.getByWorkspace = async (req,res) =>
{
    //const userID = req.session.userInfo.user_id;
    const workspaceName = req.query.workspaceName
    const ordId = req.session.orgInfo.org_id;

    let query = `select 
    a.art_id, a.user_id, a."owner", 
    a.org_id, a."name", a.description, 
    a."createdAt", a."updatedAt", a.date_created, ws.work_space_name 
    from work_space_artifacts wsa 
    inner join artifacts a on a.art_id  = wsa.art_id 
    inner join work_space_members wsm on wsm.user_id = a.user_id 
    inner join work_spaces ws on ws.work_space_id = wsm.work_space_id 
    where wsa.work_space_id = wsm.work_space_id and ws.org_id = $1 and ws.work_space_name = $2`

    const results = await db.query(query,[ordId,workspaceName])

    res.status(200).json(results.rows)
}

exports.searchByWorkspace = async (req,res) => {
    let orgID = req.session.orgInfo.org_id;
    //let userID = req.session.userInfo.user_id;
    const { key,workspaceName } = req.query;
    
    let query = `select 
    a.art_id, a.user_id, a."owner", 
    a.org_id, a."name", a.description, 
    a."createdAt", a."updatedAt", a.date_created, ws.work_space_name 
    from work_space_artifacts wsa 
    inner join artifacts a on a.art_id  = wsa.art_id 
    inner join work_space_members wsm on wsm.user_id = a.user_id 
    inner join work_spaces ws on ws.work_space_id = wsm.work_space_id 
    where wsa.work_space_id = wsm.work_space_id and ws.org_id = $1 and ws.work_space_name = $2 and a."name" like '%' || $3 || '%'`

    let results = [];

    if (key.length === 0) // if the string is empty
    {
        query = `select 
        a.art_id, a.user_id, a."owner", 
        a.org_id, a."name", a.description, 
        a."createdAt", a."updatedAt", a.date_created, ws.work_space_name 
        from work_space_artifacts wsa 
        inner join artifacts a on a.art_id  = wsa.art_id 
        inner join work_space_members wsm on wsm.user_id = a.user_id 
        inner join work_spaces ws on ws.work_space_id = wsm.work_space_id 
        where wsa.work_space_id = wsm.work_space_id and ws.org_id = $1 and ws.work_space_name = $2`
        results = await db.query(query,[orgID,workspaceName])
    } else
    {
        results = await db.query(query,[orgID,workspaceName,key])
    }
    
    res.status(200).json(results.rows)
}

// TODO : Change the response type for client
exports.create = (req,res)=>{

    let orgInfo = req.session.orgInfo;
    let userInfo = req.session.userInfo;
    let userID = userInfo.user_id;
    let orgID = orgInfo.org_id;

    let name = req.body.name;
    let dateCreated = req.body.date_created;
    let description = req.body.description;
    let owner = req.body.owner || 0; // 0 for full ownership and not zero for group where owner >= 0

    db.query(`
    INSERT INTO artifacts
    ("name", org_id, user_id, date_created, description,owner,"createdAt","updatedAt")
    VALUES($1, $2, $3, $4, $5,$6, $7, $8);

    `,[name,orgID,userID,dateCreated,description,owner, new Date(), new Date()],
    (err,result)=>{
        if (err) throw err

        db.query(`SELECT art_id FROM artifacts WHERE org_id = $1  ORDER BY 1 DESC 
        LIMIT 1`,[orgID],(err,result)=>{
            if (err) throw err;
            let artID = result.rows['0'].art_id;
            res.status(200).json({message:'ok',art_id:artID})
        })
    })
}

exports.getFromID = (req,res)=>{
    let artID = req.params.artID;
    let orgInfo = req.session.orgInfo;
    let orgID = orgInfo.org_id;

    db.query(`SELECT * FROM artifacts WHERE art_id = $1 AND org_id = $2`,[artID,orgID],
    (err,result)=>{
        let artifact = result.rows['0'];
        res.status(200).json(artifact);
    })
}

exports.deleteArtifactFromID = (req,res)=>{
    const artifactID = req.params.artID;
    // delete all documents first, this is to prevent constraint error
    db.query('DELETE FROM documents WHERE art_id = $1',[artifactID],(err,result)=>{
        if (err) throw err;
        db.query('DELETE FROM artifacts WHERE art_id = $1',[artifactID],(err,result)=>{
            if (err) throw err;
            res.json({message:'done'})
        })
    })
}

exports.search = async (req,res) => {
    let orgID = req.session.orgInfo.org_id;
    let userID = req.session.userInfo.user_id;
    const { key } = req.query;
    
    let query = `SELECT * FROM artifacts 
    where org_id = $1 AND user_id = $2 and name like '%' || $3 || '%'`

    let results = [];

    if (key.length === 0) // if the string is empty
    {
        query = `SELECT * FROM artifacts 
        where org_id = $1 AND user_id = $2`
        results = await db.query(query,[orgID,userID])
    } else
    {
        results = await db.query(query,[orgID,userID,key])
    }
    
    res.status(200).json(results.rows)
}