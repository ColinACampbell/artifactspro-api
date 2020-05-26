const db = require('./../config/db')
const config = require('./../config/config')
const mailTransporter = require('./../config/mail')

// TODO : Test Everything here

exports.auth = (req, res) => {
    
    let status = 401
    if (req.session.userInfo)
        status = 200
    

    console.log("From user auth");
    
    res.status(status).json({})
}

exports.signup = (req, res) => {

    let email = req.body.email;
    let password = req.user.password;
    let accessCode = req.user.accessCode;

    db.query("SELECT * FROM users WHERE email = $1", [email], (err, result) => {
        if (err) throw err;

        let rowCount = result.rowCount;
        let response = {};

        // check if email already exists in the browser
        if (rowCount === 0) {
            // insert user
            db.query(`INSERT INTO users
            ("password", last_name, first_name, email, is_verified, access_code)
            VALUES($1, '', '', $2, $3,$4);`, [password, email, '0', accessCode],
                (err, result) => {
                    if (err) throw err;

                    // Send of verification mail to user
                    var mailOptions = {
                        from: 'app.artifactspro@gmail.com',
                        to: email,
                        subject: 'Verify Your Account !',
                        text: `Please click on the link to verify your ArtifactsPro account ${config.host}/account/verify/${accessCode}`
                    };
                
                    mailTransporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                    });

                    // fetch user information and store it in the browser using sesssions
                    db.query('SELECT * FROM users WHERE email = $1', [email], (err, result) => {
                        if (err) throw err;
                        req.session.userInfo = result.rows[0];
                        response.message = "success";
                        res.json(response)
                    });

                })
        } else {
            response.message = "failure";
            res.json(response)
        }

    })
}

exports.login = (req, res) => {
    let email = req.body.email;
    let password = req.user.password;

    db.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password],
        (err, result) => {
            if (err) throw err;

            let rowCount = result.rowCount;
            let response = {};
            if (rowCount > 0) {
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
            `, [email], (err, result) => {
                    req.session.orgInfo = result.rows[0];
                    response.message = "success";
                    res.json(response)
                })
            } else {
                response.message = "failure";
                res.json(response)
            }

        })
}

exports.info = (req, res) => {

    //console.log(req.session)
    let first_name = req.session.userInfo.first_name;
    let last_name = req.session.userInfo.last_name;
    let email = req.session.userInfo.email
    let is_verified = req.session.userInfo.is_verified;

    res.json({
        first_name,
        last_name,
        email,
        is_verified
    });
}


exports.verifyUser = (req, res) => {

    //console.log(req.body)
    const accessCode = req.params.accesscode;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;

    let message = ''
    
    db.query('SELECT * FROM users WHERE access_code = $1', [accessCode],
        (err, result) => {

            //req.session.userInfo = result.rows[0];

            if (err) throw err;

            if (result.rowCount === 0)
                message = 'code_not_exists'
            else
                message = 'ok'

            let row = result.rows[0]
            if (row === undefined) {
                row = { user_id: undefined }
            }
            req.session.userInfo = row // used later for login
            //console.log(row)
            const userID = row.user_id;

            // if it does update the user name and last, name
            db.query(`UPDATE users
        SET last_name = $1, first_name = $2, is_verified = '1', access_code = ' '
        WHERE user_id = $3;`, [last_name, first_name, userID],
                (err, result) => {
                    if (err) throw err;
                    //console.log(result)
                    res.json({
                        message
                    })
                })
        })

}

exports.logout = (req,res)=>{
    req.session.userInfo = undefined;
    req.session.orgInfo = undefined;
    res.json({message:"ok"})
}