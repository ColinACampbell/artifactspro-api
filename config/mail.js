const nodemailer = require('nodemailer')
const mail = require('./../config/config').mail;

const transporter = nodemailer.createTransport({
    service: mail.service,
    auth: {
        user: mail.user,
        pass: mail.password
    }
})

module.exports = transporter;