const crypto = require('crypto');

exports.password = (req,res,next) =>
{
    let password = '';
    if (!req.body.password) // if the password does not exists
        next();

    password = req.body.password;   

    password = crypto.createHash("sha256")
    .update(password)
    .digest("hex");
    let user = {password}; // store it in an object
    req.user = user;
    next();
}

exports.userInformation = (req,res,next) =>
{
    if (req.session.userInfo)
        next(Error('No User Info'));

    let userInfo = req.session.userInfo;
    console.log("End Point")
    console.log(req.session.userInfo);
    req.userInfo = userInfo;
    next();
}