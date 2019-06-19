/**
import CorrectOption from './../../shared/icons/CorrectOption';
 * The code has been rewritten to make it more clear
 * and understandable with comments added
 * Utilizing object methodology to add methods
 */

const config = require('../config').config;
const _firebase = require('firebase');
if (!_firebase.apps.length)
    _firebase.initializeApp(config)
// let utilities = require('./utilities');
const collectionName = require('./collectionName');



//Contructor requiring two params to utilize
//them in the methods defined
function Second_Generation_Survey_Information(
    FullName,
    EmailAddress,
    Anonymous,
    question1_blank1,
    question2_blank1,
    question3_blank1,
    question4_blank1, question4_blank2, question4_blank3, question4_blank4, question4_blank5,
    question5_blank1,
    question6_blank1, question6_blank2, question6_blank3, question6_blank4,
    question7_blank1,
    question8_blank1,
    question9_blank1,
    question10_blank1,
    question11_blank1,
    question12_blank1,
    question13_blank1,
    question14_blank1,
    question15_blank1,
    question16_blank1,
    question17_blank1,
    link
) {
    this.data = {
        FullName: (FullName !== "") ? FullName : null,
        EmailAddress: (EmailAddress !== "") ? EmailAddress : null,
        Anonymous: Anonymous,
        question1_blank1: question1_blank1,
        question2_blank1: question2_blank1,
        question3_blank1: question3_blank1,
        question4_blank1: question4_blank1,
        question4_blank2: question4_blank2,
        question4_blank3: question4_blank3,
        question4_blank4: question4_blank4,
        question4_blank5: question4_blank5,
        question5_blank1: question5_blank1,
        question6_blank1: question6_blank1,
        question6_blank2: question6_blank2,
        question6_blank3: question6_blank3,
        question6_blank4: question6_blank4,
        question7_blank1: question7_blank1,
        question8_blank1: question8_blank1,
        question9_blank1: question9_blank1,
        question10_blank1: question10_blank1,
        question11_blank1: question11_blank1,
        question12_blank1: question12_blank1,
        question13_blank1: question13_blank1,
        question14_blank1: question14_blank1,
        question15_blank1: question15_blank1,
        question16_blank1: question16_blank1,
        question17_blank1: question17_blank1,
        link: link
    }
}

Second_Generation_Survey_Information.prototype.addRecord = function (res) {
    let db = _firebase.firestore();
    db.collection(collectionName.Second_Generation_Survey_Information).add(this.data).then((documentReference) => {
        res.send({ Message: "DATA ENTERED" })
    })
}
module.exports = Second_Generation_Survey_Information;
