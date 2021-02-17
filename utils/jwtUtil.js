const jwt = require('jsonwebtoken');

exports.createJWT = function(userInfo,orgInfo)
{
    const claim = {userInfo,orgInfo}
}