const crypto = require('crypto')


exports.encryptArtifactPassword = (req,res,next) =>{

    const plainPassword = req.body.password;

    let password = null

    if ( plainPassword !== "")
    {
        password = crypto.createHash("sha256")
        .update(plainPassword)
        .digest("hex");
    }

    req.session.artifactPassword = password
    next()
}