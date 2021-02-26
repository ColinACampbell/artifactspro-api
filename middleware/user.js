const crypto = require('crypto');

exports.password = (req,res,next) =>
{
    let password = '';
    if (!req.body.password) // if the password does not exists
        next();

    password = req.body.password || '';  

    //let email = req.body.email;

    password = crypto.createHash("sha256")
    .update(password)
    .digest("hex");

    let accessCode = crypto.randomBytes(30).toString('hex');

    let user = {password,accessCode}; // store it in an object
    req.user = user;
    next();
}

// TODO : Make this redundant
exports.userInformation = (req,res,next) =>
{
    if (req.session.userInfo)
        next(Error('No User Info'));

    let userInfo = req.session.userInfo;

    req.userInfo = userInfo;
    next();
}