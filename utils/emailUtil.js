const sgMail = require('@sendgrid/mail')
const ejs = require('ejs')
const path = require('path')

require('dotenv').config({path: __dirname + '/.env'})
console.log(process.env.SEND_GRID_API_KEY);

exports.sendHTML = (emailTo,subject,html) =>{
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY)
    return new Promise((resolve,reject)=>{
        const msg = {
            to: emailTo, // Change to your recipient
            from: 'app.artifactspro@gmail.com', // Change to your verified sender
            subject,
            html
            //html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        }
    
        sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent XD')
                resolve(true)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

exports.sendVerificationEmail = (emailTo,verificationLink) => {
    return new Promise((resolve,reject)=>{
        
        ejs.renderFile(path.resolve(__dirname,'../templates/email/verify-account.ejs'),{verificationLink },(err,html)=>{
            
            if (err)
            {
                console.log(err)
                reject(err)
                throw err
            }

            sgMail.setApiKey(process.env.SEND_GRID_API_KEY)

            const msg = {
                to: emailTo, // Change to your recipient
                from: 'app.artifactspro@gmail.com', // Change to your verified sender
                subject : "ArtifactsPro: Complete Your Registration (NoReply)",
                html 
                //html: '<strong>and easy to do anywhere, even with Node.js</strong>',
            }

            sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent XD')
                resolve(true)
            })
            .catch((error) => {
                reject(error)
            })
        })
    })
}
