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