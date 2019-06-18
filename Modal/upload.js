/**
import CorrectOption from './../../shared/icons/CorrectOption';
 * The code has been rewritten to make it more clear
 * and understandable with comments added
 * Utilizing object methodology to add methods
 */

const config = require('../config').config;
//const _firebase = require('firebase');
// if (!_firebase.apps.length)
//     _firebase.initializeApp(config)
// let utilities = require('./utilities');


let nodemailer = require('nodemailer');
let mailerSettings = require('./mailersettings')
const collectionName = require('./collectionName');

function upload() {

}

upload.prototype.uploadFile = function (files, res) {

    var transporter = nodemailer.createTransport({
        service: mailerSettings.service,
        auth: {
            user: mailerSettings.auth.user,
            pass: mailerSettings.auth.pass,
            port: mailerSettings.auth.port,
            authentication: mailerSettings.auth.authentication
        }
    })


    let html = `Thankyou for your time on #MYFIDDLESTORY`
    var mailOptions = {
        from: mailerSettings.mailOptions.from,
        to: mailerSettings.mailOptions.from,
        subject: mailerSettings.mailOptions.subject,
        text: mailerSettings.mailOptions.text,
        html: html,
        attachments: [{
            path: files
        }]
    }
    // console.log(mailOptions)

    /*
    * send the email
    */



    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            //console.log(`Email not sent: ${error}`)
            res.send({
                Message:`Email not sent to ${mailOptions.to}`
            })
        }
        else {
            //console.log(`Email sent: ${info}`)
            res.send({
                Message:`Email sent to ${mailOptions.to}`
            })
        }
    })
}


module.exports = upload;
