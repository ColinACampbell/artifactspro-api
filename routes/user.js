const express = require('express');
const router = express.Router();
const db = require('./../config/db')

// auth end point is to ensure that the user is logged in with cookies
router.post('/auth',(req,res)=>{
    let status = 200
    if (!req.session.userInfo)
        status = 401;

    res.status(status).json({status});
});

router.post('/signup/process-1',(req,res)=>{

    let email = req.body.email;
    let password = req.user.password;
    let accessCode = req.user.accessCode;

    db.query("SELECT * FROM users WHERE email = $1",[email],(err,result)=>{
        if (err) throw err;
        
        let rowCount = result.rowCount;
        let response = {};
        
        // check if email already exists in the browser
        if (rowCount === 0)
        {
            // insert user
            db.query(`INSERT INTO users
            ("password", last_name, first_name, email, is_verified, access_code)
            VALUES($1, '', '', $2, $3,$4);`,[password,email,'0',accessCode],
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


router.post('/login',(req,res)=>{
    let email = req.body.email;
    let password = req.user.password;

    db.query('SELECT * FROM users WHERE email = $1 AND password = $2',[email,password],
    (err,result)=>{
        if (err) throw err;
        
        let rowCount = result.rowCount;
        let response = {};
        if (rowCount > 0)
        {
            req.session.userInfo = result.rows[0];
            db.query(`
            SELECT 
            organizations.name, 
            organizations.org_id, 
            organizations.type,  
            organizations.org_code,
            organizations.org_key
            FROM users 
            INNER JOIN organization_members ON organization_members.user_id = users.user_id
            INNER JOIN organizations ON organizations.org_id = organization_members.org_id
            WHERE users.email = $1
            `,[email],(err,result)=>{
                req.session.orgInfo = result.rows[0];
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