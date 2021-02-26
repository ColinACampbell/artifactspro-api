const jwt = require('jsonwebtoken');
const config = require('./../config/configControl')

exports.createToken = function (userInfo, orgInfo) {
    const claim = { userInfo, orgInfo }
    return new Promise((resolve, reject) => {
        const token = jwt.sign(JSON.stringify(claim),config.jwt.secret)
        resolve(token)
    })
}

// Returns the token if true
exports.checkIfTokenIsVerified = function(token)
{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,config.jwt.secret,function(error,decodedData){
            if (error)
            {
                console.log(error)
                reject(false)
            } else{
                resolve(decodedData)
            }
            
        })
    })
}

exports.decodeJWT = function(token) 
{
    return new Promise((resolve,reject)=>{
        jwt.decode(token,"")
    })
}