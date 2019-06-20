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
    let link = 'drive.google.com/drive/folders/1cIiJWGhogvtH9wI15VpO9WC7jO86tB5A?usp=sharing'
    let html =`Thank you for participating in #MYFIDDLERSTORY.  If you have recorded a video it was automatically downloaded to your phone.  Please upload the video to the MyFiddlerStory Public Video folder <br> <a href='${link}'>link</a>`
    //let html =  `click on the given link to reset your password <a href='${link}'>link</a>.<br> Please do not reply to this email.<b>This is a computer generated email</b>`


    //let html = `Thankyou for your time on #MYFIDDLESTORY`
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
             res.send({ Message: info.response, error: error })
            //console.log(`Email not sent: ${error}`)
        }
        else {
            // console.log(`Email sent: ${info}`)
            res.send({ Message: info.response, error: null })
        }
    })

}

module.exports = mailer;