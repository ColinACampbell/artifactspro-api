const jwt = require("jsonwebtoken")
const jwtUtil = require('./../utils/jwtUtil')

module.exports = (req,res,next) =>{

    let authHeader = req.header("Authorization");

    if (authHeader === undefined)
        return res.status(401).json({});

    let token = authHeader.substring(7)

    if (token === undefined)
        return res.status(401).json({})
    else
    {
        jwtUtil.checkIfTokenIsVerified(token)
        .then((decodedData)=>{
            req.token_data = decodedData;
            next()
        }).catch((reason)=>{
            res.status(401).json({})
        })
    }

} 