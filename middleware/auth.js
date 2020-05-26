let authMiddleware = (req,res,next) =>
{
    if (req.session.userInfo === undefined || req.session.userInfo === undefined)
        res.status(401);
    else 
        next();
}

module.exports = authMiddleware;