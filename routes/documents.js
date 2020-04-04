const express = require('express');
const router = express.Router();
const db = require('./../config/db')

router.get('/:artID',(req,res)=>{
    let artifactID = req.params.artID;
    db.query('SELECT * FROM documents WHERE art_id = $1',[artifactID],
    (err,result)=>{
        if (err) throw err;
        let docs = result.rows;
        res.status(200).json(docs);
    })
})

module.exports = router;