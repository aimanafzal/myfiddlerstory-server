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
function Survey_Information_fetch() {



}

Survey_Information_fetch.prototype.fetch_record = function (res) {
    let db = _firebase.firestore();
    db.collection(collectionName.Survey_Information).get().then(querysnapshot => {
        querysnapshot.forEach(element => {
            this.data = {
                FullName: element.data().FullName,
                EmailAddress: element.data().EmailAddress,
                Anonymous: element.data().Anonymous,
                question1_blank1: element.data().question1_blank1,
                question2_blank1: element.data().question2_blank1,
                question3_blank1: element.data().question3_blank1,
                question3_blank2: element.data().question3_blank2,
                question3_blank3: element.data().question3_blank3,
                question4_blank1: element.data().question4_blank1,
                question5_blank1: element.data().question5_blank1,
                question6_blank1: element.data().question6_blank1,
                question7_blank1: element.data().question7_blank1,
                question8_blank1: element.data().question8_blank1,
                question9_blank1: element.data().question9_blank1,
                question10_blank1: element.data().question10_blank1,
                question11_blank1: element.data().question11_blank1,
                question12_blank1: element.data().question12_blank1,
                question13_blank1: element.data().question13_blank1,
                question14_blank1: element.data().question14_blank1,
                question15_blank1: element.data().question15_blank1,
                question16_blank1: element.data().question16_blank1,
                question17_blank1: element.data().question17_blank1,
                question18_blank1: element.data().question18_blank1,
                question19_blank1: element.data().question19_blank1,
                question20_blank1: element.data().question20_blank1,
                question21_blank1: element.data().question21_blank1,
                question22_blank1: element.data().question22_blank1,
                question23_blank1: element.data().question23_blank1
            }
            res.send(this.data)
        })
    })
}

module.exports = Survey_Information_fetch;
