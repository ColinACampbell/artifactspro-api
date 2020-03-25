const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const db = require('./../config/db')

router.post('/signup/process-1',(req,res)=>{
    let email = req.body.email;
    let password = req.body.password;

    password = crypto.createHash("sha256")
    .update(password)
    .digest("hex");

    db.query("SELECT * FROM users WHERE email = $1",[email],(err,result)=>{
        if (err) throw err;
        
        let rowCount = result.rowCount;
        let response = {};
        
        // check if email already exists in the browser
        if (rowCount === 0)
        {
            // insert user
            db.query(`INSERT INTO users
            ("password", last_name, first_name, email, is_verified)
            VALUES($1, '', '', $2, $3);`,[password,email,'0'],
            (err,result)=>
            {
                if (err) throw err;

                // fetch user information and store it in the browser using sesssions
                db.query('SELECT * FROM users WHERE email = $1',[email],(err,result)=>{
                    if (err) throw err;
                    req.session.userInfo = result.rows[0];
                    response.message = "success";
                    res.json(response)
                });

            })
        } else
        {
            response.message = "failure";
            res.json(response)
        }

    })
});

module.exports = router;