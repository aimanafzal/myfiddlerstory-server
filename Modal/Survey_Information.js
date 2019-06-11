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
function Survey_Information(FullName, EmailAddress, Anonymous,
    question1_blank1, question2_blank1, question3_blank1, question3_blank2, question3_blank3,
    question4_blank1, question5_blank1, question6_blank1, question7_blank1, question8_blank1,
    question9_blank1, question10_blank1, question11_blank1, question12_blank1, question13_blank1,
    question14_blank1, question15_blank1, question16_blank1, question17_blank1, question18_blank1,
    question19_blank1, question20_blank1, question21_blank1, question22_blank1, question23_blank1) {
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
        question23_blank1 : question23_blank1
    }

    /*this.FullName = FullName || null;
    this.EmailAddress = EmailAddress || null;
    this.Anonymous = Anonymous;
    this.question1_blank1 = question1_blank1;
    this.question2_blank1 = question2_blank1;
    this.question3_blank1 = question3_blank1;
    this.question3_blank2 = question3_blank2;
    this.question3_blank3 = question3_blank3;
    this.question4_blank1 = question4_blank1;
    this.question5_blank1 = question5_blank1;
    this.question6_blank1 = question6_blank1;
    this.question7_blank1 = question7_blank1;
    this.question8_blank1 = question8_blank1;
    this.question9_blank1 = question9_blank1;
    this.question10_blank1 = question10_blank1;
    this.question11_blank1 = question11_blank1;
    this.question12_blank1 = question12_blank1;
    this.question13_blank1 = question13_blank1;
    this.question14_blank1 = question14_blank1;
    this.question15_blank1 = question15_blank1;
    this.question16_blank1 = question16_blank1;
    this.question17_blank1 = question17_blank1;
    this.question18_blank1 = question18_blank1;
    this.question19_blank1 = question19_blank1;
    this.question20_blank1 = question20_blank1;
    this.question21_blank1 = question21_blank1;
    this.question22_blank1 = question22_blank1;
    this.question23_blank1 = question23_blank1*/

}

Survey_Information.prototype.addRecord = function (res) {
    let db = _firebase.firestore();
    db.collection(collectionName.Survey_Information).add(this.data).then((documentReference) => {
        res.send({ Message: "DATA ENTERED" })
    })
}


/**
 * Validates the user to provide access to gameplay
 * @requires result object
 */
// CreateUser.prototype.login = function (res) {
//     let dt = _firebase.firestore();
//     let _utilities = new utilities();
//     _utilities.getDocumentIDbyEmail(this.getEmail()).then((resolved) => {
//         if (resolved.documentID == undefined) {
//             res.send({
//                 Message: 'Unregistered user'
//             })
//         } else {
//             _utilities.getEmailAndPasswordByDocumentID(resolved.documentID)
//                 .then((result) => {

//                     let docID = resolved.documentID;
//                     // console.log(`fetched password: ${fetchedPassword}`);
//                     // console.log(`Email:  ${this.getEmail()}`);
//                     // console.log(`fetchedEmail:  ${fetchedEmail}`);
//                     // console.log(`Password:  ${this.getPassword()}`);
//                     // console.log(`fetchedPassword:  ${fetchedPassword}`);
//                     // console.log(`password matched:  ${this.checkPassword(fetchedPassword,this.getPassword())}`);
//                     dt.collection('users').doc(docID).update(this.userLoginData);
//                     dt.collection('users').doc(docID).get().then((doc) => {
//                         res.send({
//                             authenticationToken: authToken,
//                             lastLogin: _firebase.firestore.Timestamp.now(),
//                             firstName: doc.data().firstName,
//                             lastName: doc.data().lastName,
//                             paypalEmail: doc.data().paypalEmail,
//                             email: doc.data().email,
//                             ReferralLink: doc.data().ReferralLink,
//                             incorrectAnswers: doc.data().incorrectAnswers,
//                             totalAnswered: doc.data().totalAnswered,
//                             correctAnswers: doc.data().correctAnswers,
//                             totalQuestionsAnsweredLastLogin: doc.data().totalQuestionsAnsweredLastLogin,
//                             invitedBy: doc.data().invitedBy,
//                             inviteeCode: doc.data().inviteeCode,
//                             walletData: doc.data().walletData,
//                             termsPolicy: true,
//                             eligiblityCertified: true,
//                             allowedToPlay: true
//                         })
//                     })

//                 })
//         }
//     })
// }



module.exports = Survey_Information;
