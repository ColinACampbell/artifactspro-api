const express = require('express');
const router = express.Router();
const mailTransporter = require('./../config/mail')

router.post("/email/send-query",(req,res)=>{

    console.log(req.body)
    const {senderName,senderEmail,senderMessage} = req.body;

    var mailOptions = {
        from: 'app.artifactspro@gmail.com',
        to: 'app.artifactspro@gmail.com, eazleyja@gmail.com, colina.campbell.jr@gmail.com',
        subject: 'Artifacts Pro Query',
        text: `Someone sent a message : Sender Name ${senderName}, Sender email ${senderEmail}, Sender message ${senderMessage}`
    };
    
    mailTransporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    var senderMailOptions = {
        from: 'app.artifactspro@gmail.com',
        to: senderEmail,
        subject: 'Your Query About Artifacts Pro',
        text: `Thank you ${senderName} for your interest in our product ArtifactsPro. We will reply shortly.`
    };

    mailTransporter.sendMail(senderMailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.status(200).json({})
})

module.exports = router