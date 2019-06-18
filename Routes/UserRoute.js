const express = require('express');
const UserRouter = express.Router();
let survey_information = require('../Modal/Survey_Information');
let Survey_Information_fetch = require('../Modal/Survey_Information_fetch');
let mailer = require('../Modal/mailer')
let upload = require('../Modal/upload')


UserRouter
    .route('/fetch_survey_information')
    .post(function (req, res) {
        let obj = new Survey_Information_fetch()
        obj.fetch_record(res);
    });
UserRouter
    .route('/add_survey_information')
    .post(function (req, res) {
        let FullName = (req.body.FullName !== '') ? req.body.FullName : null;
        let EmailAddress = (req.body.EmailAddress !== '') ? req.body.EmailAddress : null;
        let Anonymous = req.body.Anonymous;
        let question1_blank1 = req.body.question1_blank1;
        let question2_blank1 = req.body.question2_blank1;
        let question3_blank1 = req.body.question3_blank1;
        let question3_blank2 = req.body.question3_blank2;
        let question3_blank3 = req.body.question3_blank3;
        let question4_blank1 = req.body.question4_blank1;
        let question5_blank1 = req.body.question5_blank1;
        let question6_blank1 = req.body.question6_blank1;
        let question7_blank1 = req.body.question7_blank1;
        let question8_blank1 = req.body.question8_blank1;
        let question9_blank1 = req.body.question9_blank1;
        let question10_blank1 = req.body.question10_blank1;
        let question11_blank1 = req.body.question11_blank1;
        let question12_blank1 = req.body.question12_blank1;
        let question13_blank1 = req.body.question13_blank1;
        let question14_blank1 = req.body.question14_blank1;
        let question15_blank1 = req.body.question15_blank1;
        let question16_blank1 = req.body.question16_blank1;
        let question17_blank1 = req.body.question17_blank1;
        let question18_blank1 = req.body.question18_blank1;
        let question19_blank1 = req.body.question19_blank1;
        let question20_blank1 = req.body.question20_blank1;
        let question21_blank1 = req.body.question21_blank1;
        let question22_blank1 = req.body.question22_blank1;
        let question23_blank1 = req.body.question23_blank1

        let obj = new survey_information(FullName, EmailAddress, Anonymous,
            question1_blank1, question2_blank1,
            question3_blank1, question3_blank2,
            question3_blank3,
            question4_blank1,
            question5_blank1,
            question6_blank1,
            question7_blank1,
            question8_blank1,
            question9_blank1,
            question10_blank1,
            question11_blank1, question12_blank1, question13_blank1, question14_blank1, question15_blank1,
            question16_blank1, question17_blank1, question18_blank1, question19_blank1, question20_blank1,
            question21_blank1, question22_blank1, question23_blank1);
        obj.addRecord(res);

    });



/**
 * usage:
 * {
 * "to": "email@email.com"
 * }
 * Send email API
 * @requires receiver's Email address
 */
UserRouter.route('/sendEmail').post(function (req, res) {
    let to = req.body.to;
    let _mailer = new mailer();
    _mailer.sendEmail(to, res);
});



// REMOVE THE CODE BELOW FROM HERE IF NOT WORKED
UserRouter.route('/upload').post(function (req, res) {
    let object = new upload();
    let filePath = req.files.File.name;
    req.files.File.mv(filePath, function (err) {
        if (err)
            console.log("ERROR: " + err)
        else
            console.log("FILE UPLOADED!")
    })

    //     console.log(filePath)
    object.uploadFile(filePath, res);
    // console.log(req.files.File.data);
});

module.exports = UserRouter;