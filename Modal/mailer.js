let nodemailer = require('nodemailer');
let mailerSettings = require('./mailersettings')
// let utilities = require('../Modal/utilities')
// let collectionName = require('../Modal/collectionName')
const _firebase = require('firebase');
if (!_firebase.apps.length)
    _firebase.initializeApp(config)

function mailer() {
}
mailer.prototype.sendEmail = function (to, res) {
    var transporter = nodemailer.createTransport({
        service: mailerSettings.service,
        auth: {
            user: mailerSettings.auth.user,
            pass: mailerSettings.auth.pass,
            port: mailerSettings.auth.port,
            authentication: mailerSettings.auth.authentication
        }
    });

    let html = `Thankyou for your time on #MYFIDDLESTORY`
    var mailOptions = {
        from: mailerSettings.mailOptions.from,
        to: to,
        subject: mailerSettings.mailOptions.subject,
        text: mailerSettings.mailOptions.text,
        html: html
    }
    /*
    * send the email
    */
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            // res.send({ Message: info.response, error: error })
            console.log(`Email not sent: ${error}`)
        }
        else {
            console.log(`Email sent: ${info}`)
            // res.send({ Message: info.response, error: null })
        }
    })

}

module.exports = mailer;