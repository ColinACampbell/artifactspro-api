const express = require('express');
const router = express.Router();
const db = require('./../config/db');
const fs = require('fs')

// Get documents from artifact
router.get('/from-art/:artID',(req,res)=>{
    let artifactID = req.params.artID;
    // write code to check on the user id, prevent any other user from getting access to the resource purposefully or accidentally
    db.query('SELECT doc_id, version, comment, user_id, date_uploaded, date_modified, art_id, type FROM documents WHERE art_id = $1',[artifactID],
    (err,result)=>{
        if (err) throw err;
        let docs = result.rows;
        res.status(200).json(docs);
    })
})

router.post('/upload/:artID',(req,res)=>{

    let artID = req.params.artID;
    let userID = req.session.userInfo.user_id;
    let dateModified = req.body.date_modified;
    let dateUploaded = req.body.date_uploaded;
    let data = req.body.data;
    let version = req.body.version;
    let comment = req.body.comment;
    let fileType = req.body.file_type;

    let base64Data = data.split(',')[1];

    db.query(`INSERT INTO documents
    ("version", "comment", user_id, "data", date_uploaded, date_modified, art_id, "type")
    VALUES($1, $2, $3, $4, $5, $6, $7, $8);
    `,[version,comment,userID,base64Data,dateUploaded,dateModified,artID,fileType],
    (err,result)=>{
        if (err) throw err;
        console.log(result)
        res.status(200).json({message:'ok'});
    })

    /** 
    //fs.mkdirSync('temp');
    let buffer = Buffer.from(data.split(',')[1],"base64");
    fs.writeFileSync(`temp/${name}.pdf`,buffer);
    res.json({data,name,comment})
    **/
    // TODO : Write code to add to database
})

module.exports = router;