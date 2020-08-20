const jwt = require("jsonwebtoken")
const config = require('./../config/config')

const auth = (req,res,next) =>{

    let authHeader = req.header("Authorization");
    
    if (authHeader === undefined)
        res.status(401);

    let token = authHeader.substring(7)

    if (token === undefined)
        res.status(401).json({})
    
    let authInfo = jwt.verify(token,config.jwt.secret)
    console.log("JWT Auth Hit");

    if (authInfo === undefined)
        res.status(401).json({})

    req.authentication = authInfo;
    next()
} 

module.exports = auth