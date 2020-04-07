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

    console.log(req.body);

    let data = req.body.data;
    let name = req.body.name;
    let comment = req.body.comment;

    //fs.mkdirSync('temp');
    fs.writeFileSync(`temp/${name}.pdf`,data);
    res.json({data,name,comment})
    // TODO : Write code to add to database
})

module.exports = router;