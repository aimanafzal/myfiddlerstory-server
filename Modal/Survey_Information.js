const config = require('../config').config;
const _firebase = require('firebase');
if (!_firebase.apps.length)
    _firebase.initializeApp(config)
// let utilities = require('./utilities');
const collectionName = require('./collectionName');

//Contructor requiring two params to utilize
//them in the methods defined
function Survey_Information(FullName, EmailAddress, Anonymous,
    question1_blank1, question2_blank1, question3_blank1, question3_blank2, question3_blank3,
    question4_blank1, question5_blank1, question6_blank1, question7_blank1, question8_blank1,
    question9_blank1, question10_blank1, question11_blank1, question12_blank1, question13_blank1,
    question14_blank1, question15_blank1, question16_blank1, question17_blank1, question18_blank1,
    question19_blank1, question20_blank1, question21_blank1, question22_blank1, question23_blank1, link) {
    this.data = {
        FullName :( FullName !== "") ? FullName : null,
        EmailAddress : (EmailAddress!== "")? EmailAddress: null,
        Anonymous : Anonymous,
        question1_blank1: question1_blank1,
        question2_blank1 : question2_blank1,
        question3_blank1 : question3_blank1,
        question3_blank2 : question3_blank2,
        question3_blank3 : question3_blank3,
        question4_blank1 : question4_blank1,
        question5_blank1 : question5_blank1,
        question6_blank1 : question6_blank1,
        question7_blank1 : question7_blank1,
        question8_blank1 : question8_blank1,
        question9_blank1 : question9_blank1,
        question10_blank1 : question10_blank1,
        question11_blank1 : question11_blank1,
        question12_blank1 : question12_blank1,
        question13_blank1 : question13_blank1,
        question14_blank1 : question14_blank1,
        question15_blank1 : question15_blank1,
        question16_blank1 : question16_blank1,
        question17_blank1 : question17_blank1,
        question18_blank1 : question18_blank1,
        question19_blank1 : question19_blank1,
        question20_blank1 : question20_blank1,
        question21_blank1 : question21_blank1,
        question22_blank1 : question22_blank1,
        question23_blank1 : question23_blank1,
        link: link
    }

}

Survey_Information.prototype.addRecord = function (res) {
    let db = _firebase.firestore();
    db.collection(collectionName.Survey_Information).add(this.data).then((documentReference) => {
        res.send({ Message: "DATA ENTERED" })
    })
}


module.exports = Survey_Information;
