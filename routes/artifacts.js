const express = require('express');
const router = express.Router();
const db = require('./../config/db')

router.get('/',(req,res)=>{
    let orgID = req.session.orgInfo.org_id;
    db.query('SELECT * FROM artifacts where org_id = $1',[orgID],
    (err,result)=>{
        if (err) throw err;
        res.json(result.rows);
    })
});

module.exports = router;