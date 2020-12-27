const crypto = require('crypto')


exports.encryptArtifactPassword = (req,res,next) =>{

    if (!req.body.password)
        next()

    const plainPassword = req.body.password;

    let password = crypto.createHash("sha256")
    .update(plainPassword)
    .digest("hex");

    req.session.artifactPassword = password
    next()
}