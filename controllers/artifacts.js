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

exports.getFromID = async (req,res)=>{

    let artID = req.params.artID;
    let workspaceReference = req.query.ref // Used to get the user password
    let orgInfo = req.session.orgInfo;
    const orgID = orgInfo.org_id;
    const userID = req.session.userInfo.user_id;

    workspaceReference = workspaceReference.replace(/^'(.*)'$/, '$1'); // remove surrounding single quotes from string like 'Workspace' to Workspace
    // When been accessed without reference, no workspace is specified, and it means it is being accessed by the user
    if ( workspaceReference == 'undefined') 
    {
        db.query(`SELECT * FROM artifacts WHERE art_id = $1 AND org_id = $2`,[artID,orgID],
        (err,result)=>{

            let artifact = result.rows[0];
            
        
            if (userID !== artifact.user_id) { // check if it's the original user who created the document, this is a safe guard
                
                const query = `select u2.user_id from work_space_artifacts wsa 
                inner join work_space_members wsm on wsa.work_space_id = wsm.work_space_id 
                inner join users u2 on u2.user_id = wsm.user_id 
                inner join workspace_art_access_users waau on waau.work_space_artifacts_id = wsa.work_space_artifacts_id and waau.user_id = u2.user_id 
                where wsa.art_id = $1 and u2.user_id = $2`
                db.query(query,[artID,userID],(err,result)=>{ // select to see if there's a user who has access to this document
                    if (err) throw err;
                    const rowCount = result.rowCount
                    if (rowCount == 0) 
                    {
                        // Send a request that they don't have access
                        return res.status(403).json({})
                    } else {
                        return res.status(200).json(artifact)
                    }
                })
            } else {
                return res.status(200).json(artifact);
            }
            
        })

    } else {
        // Check if it's secured in the workspace
        // TODO Use organization that the user is part of to better select the workspace ID in an non-flawed manner
        let result = await db.query(`select * from work_spaces ws where ws.work_space_name = $1 and ws.org_id = $2`,[workspaceReference,orgID]) // select workspace ID from the ref name

        const workspaceID = result.rows[0].work_space_id
        result = await db.query(`select * from work_space_artifacts wsa where wsa.art_id = $1 and wsa.work_space_id = $2`,[artID,workspaceID])
        
        const isSecured = result.rows[0].is_secured == 1 ? true : false // 1 is isSecured 

        result = await db.query(`select u2.user_id from work_space_artifacts wsa 
        inner join work_space_members wsm on wsa.work_space_id = wsm.work_space_id 
        inner join users u2 on u2.user_id = wsm.user_id 
        inner join workspace_art_access_users waau on waau.work_space_artifacts_id = wsa.work_space_artifacts_id and waau.user_id = u2.user_id 
        where wsa.art_id = $1 and u2.user_id = $2`,[artID,userID])
        
        let hasAccess = result.rowCount > 0 ? true : false // more than 0 is has access

         // If is is not just let them in
         let isArtifactNeeded = false
         if (!isSecured)
         {
            isArtifactNeeded = true
         } else if (hasAccess && isSecured){ // If it is and the user has access just give them access
            isArtifactNeeded = true
         } else { // If it is and the user does not have access ask for the password
            res.status(401).json({message:"password_needed"})
         }

         if (isArtifactNeeded)
         {
            const query = 'select * from artifacts where art_id = $1 and org_id = $2'
            const artifactResult = await db.query(query,[artID,orgID])
            let artifact = artifactResult.rows[0]
            res.status(200).json(artifact)
         }
            
    }    
}

exports.deleteArtifactFromID =  async function(req,res){
    const artifactID = req.params.artID;
    // delete all documents first, this is to prevent constraint error
    db.query(`ALTER TABLE artifacts DISABLE TRIGGER ALL;`,(err,results)=>{
        if (err) throw err;

        db.query('DELETE FROM documents WHERE art_id = $1',[artifactID],(err,result)=>{
            if (err) throw err;
            db.query('DELETE FROM artifacts WHERE art_id = $1',[artifactID],(err,result)=>{
                if (err) throw err;
                db.query(`ALTER TABLE artifacts ENABLE TRIGGER ALL;`,(err,results)=>{
                    if (err) throw err;
                    res.status(200).json({message:'done'})
                });
            })
        })
    });

    
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