const db = require('./../config/db')
const config = require('./../config/configControl')
const mailTransporter = require('./../config/mail')
const jwtUtil = require('../utils/jwtUtil')
const mailUtil = require('../utils/emailUtil')

exports.auth = (req, res) => {

    let status = 401
    if (req.token_data.userInfo)
        status = 200

    res.status(status).json({})
}

// TODO : Update this service to use send grid api
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
            ("password", last_name, first_name, email, is_verified, access_code,"updatedAt")
            VALUES($1, '', '', $2, $3,$4,$5);`, [password, email, '0', accessCode, new Date()],
                (err, result) => {
                    if (err) throw err;

                    // Send of verification mail to user

                    var mailOptions = {
                        from: 'app.artifactspro@gmail.com',
                        to: email,
                        subject: 'Artifacts Pro : Verify Your Account !',
                        text: `Thanks for signing up on artifacts pro. 
                                Please click on the link to verify 
                                your ArtifactsPro account 
                                ${config.host}/account/verify/${accessCode}`
                    };

                    /**
                    mailTransporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                    });**/
                    mailUtil.sendHTML(email, 'Artifacts Pro : Verify Your Account',
                        `Thanks for signing up on artifacts pro. 
                        Please click the link to verify 
                        your ArtifactsPro account <br/>
                        ${config.host}/account/verify/${accessCode}`)
                    .then(() => {
                            // fetch user information and store it in the browser using sesssions
                            db.query('SELECT * FROM users WHERE email = $1', [email], (err, result) => {
                                if (err) throw err;
                                // Test this out with organization sign up
                                const userInfo = result.rows[0];
                                jwtUtil.createToken(userInfo, {}).then((token) => {
                                    res.status(201).json({
                                        token
                                    });
                                })
                            });
                        })
                })
        } else {
            response.message = "failure";
            res.status(409).json({})
        }

    })
}

exports.login = (req, res) => {
    let email = req.body.email;
    let password = req.user.password;

    db.query('SELECT first_name, last_name, email, is_verified, user_id FROM users WHERE email = $1 AND password = $2', [email, password],
        (err, result) => {
            if (err) throw err;

            let rowCount = result.rowCount;

            let userInfo = {}
            if (rowCount > 0) {
                //req.session.userInfo = result.rows[0];
                userInfo = result.rows[0]


                db.query(`
            SELECT 
            organizations.name, 
            organizations.org_id, 
            organizations.type,  
            organizations.org_code
            FROM users 
            INNER JOIN organization_members ON organization_members.user_id = users.user_id
            INNER JOIN organizations ON organizations.org_id = organization_members.org_id
            WHERE users.email = $1
            `, [email], (err, result) => {
                    if (err) throw err

                    //req.session.orgInfo = result.rows[0];
                    const orgInfo = result.rows[0];
                    jwtUtil.createToken(userInfo, orgInfo)
                        .then((token) => {
                            res.status(200).json({
                                token
                            })
                        })
                })
            } else {

                res.status(401).json({})
            }

        })
}

exports.info = (req, res) => {

    let first_name = req.token_data.userInfo.first_name;
    let last_name = req.token_data.userInfo.last_name;
    let email = req.token_data.userInfo.email
    let is_verified = req.token_data.userInfo.is_verified;
    let user_id = req.token_data.userInfo.user_id;
    is_verified = is_verified.trim() // the string is very long with extra spaces
    res.json({
        user_id,
        first_name,
        last_name,
        email,
        is_verified,
    });
}

// TODO : Test this with jwt and update client
exports.verifyUser = (req, res) => {
    const accessCode = req.params.accesscode;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;

    let statusCode = ''

    db.query('SELECT * FROM users WHERE access_code = $1', [accessCode],
        (err, result) => {

            if (err) throw err;

            if (result.rowCount === 0)
                statusCode = 409
            else
                statusCode = 201

            let row = result.rows[0]
            if (row === undefined) {
                row = { user_id: undefined }
            }
            //req.session.userInfo = row // used later for login
            const userID = row.user_id;

            // if it does update the user name and last, name
            db.query(`UPDATE users
        SET last_name = $1, first_name = $2, is_verified = '1', access_code = ' '
        WHERE user_id = $3;`, [last_name, first_name, userID],
                (err, result) => {
                    if (err) throw err;
                    res.status(statusCode).json({})
                })
        })
}

exports.updateBasicInfo = (req,res) =>
{
    const userID = req.token_data.userInfo.user_id;
    const { newFirstName, newLastName } = req.body;
   
    db.query(`UPDATE users
        SET last_name=$1, first_name=$2
        WHERE user_id=$3`,[newLastName,newFirstName,userID])
        .then((result,error)=>{
            if (error) throw error
            res.status(200).json({})
        })
}

// TODO : Do Further Tests to remove thisrs
exports.logout = (req, res) => {
    req.session.userInfo = null;
    req.session.orgInfo = null;

    res.status(200).json({})
}