const config        = require('../config').config;
const _firebase     = require('firebase');
if (!_firebase.apps.length)
    _firebase.initializeApp(config)
const collectionName = require('./collectionName');



//Contructor requiring two params to utilize
//them in the methods defined
function Second_Generation_Survey_Information_BYDocumentID_fetch() {
}

Second_Generation_Survey_Information_BYDocumentID_fetch.prototype.fetch_record = function (res, documentID) {
    let db = _firebase.firestore();
    db.collection(collectionName.Second_Generation_Survey_Information).doc(documentID).get().then(querysnapshot => {


            this.data = {
                FullName: querysnapshot.data().FullName,
                EmailAddress:querysnapshot.data().EmailAddress,
                Anonymous: querysnapshot.data().Anonymous,
                question1_blank1: querysnapshot.data().question1_blank1,
                question2_blank1: querysnapshot.data().question2_blank1,
                question3_blank1:querysnapshot.data().question3_blank1,

                question4_blank1: querysnapshot.data().question4_blank1,
                question4_blank1:querysnapshot.data().question4_blank2,
                question4_blank1: querysnapshot.data().question4_blank3,
                question4_blank1:querysnapshot.data().question4_blank4,
                question4_blank1: querysnapshot.data().question4_blank5,

                question5_blank1: querysnapshot.data().question5_blank1,

                question6_blank1: querysnapshot.data().question6_blank1,
                question6_blank1: querysnapshot.data().question6_blank2,
                question6_blank1: querysnapshot.data().question6_blank3,
                question6_blank1: querysnapshot.data().question6_blank4,

                question7_blank1: querysnapshot.data().question7_blank1,
                question8_blank1: querysnapshot.data().question8_blank1,
                question9_blank1: querysnapshot.data().question9_blank1,
                question10_blank1: querysnapshot.data().question10_blank1,
                question11_blank1: querysnapshot.data().question11_blank1,
                question12_blank1: querysnapshot.data().question12_blank1,
                question13_blank1: querysnapshot.data().question13_blank1,
                question14_blank1: querysnapshot.data().question14_blank1,
                question15_blank1: querysnapshot.data().question15_blank1,
                question16_blank1: querysnapshot.data().question16_blank1,
                question17_blank1: querysnapshot.data().question17_blank1,
                link: querysnapshot.data().link
            }
            res.send(this.data)

    })
}

module.exports = Second_Generation_Survey_Information_BYDocumentID_fetch;
