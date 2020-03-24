const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const db = require('./../config/db')

router.post('/signup/process-1',(req,res)=>{
    let email = req.body.email;
    let password = req.body.password;

    console.log(req.body)

    password = crypto.createHash("sha256")
    .update(password)
    .digest("hex");

    db.query("SELECT * FROM users WHERE email = $1",[email],(err,result)=>{
        if (err) throw err;
        
        let rowCount = result.rowCount;
        console.log(result.rows);

        let response = {};
        
        if (rowCount === 0)
        {
            // TODO : Fix issues with this
            db.query(`INSERT INTO users
            ("password", last_name, first_name, email, is_verified)
            VALUES($1, '', '', $2, '');`,[password,email],
            (err,result)=>
            {
                if (err) throw err;
                console.log(result)
                response.message = "success";
                res.json(response)
            })
        } else
        {
            response.message = "failure";
            res.json(response)
        }

    })
});

module.exports = router;