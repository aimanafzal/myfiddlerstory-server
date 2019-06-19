const config = require('../config').config;
const _firebase = require('firebase');
if (!_firebase.apps.length)
    _firebase.initializeApp(config)
const collectionName = require('./collectionName');

//Contructor requiring two params to utilize
//them in the methods defined
function First_Generation_DocumentID_Fetch() {
}

First_Generation_DocumentID_Fetch.prototype.fetch_record = function (res) {
    let db = _firebase.firestore();
    db.collection(collectionName.Survey_Information).get().then(querysnapshot => {
        let allDocumentID = []
        querysnapshot.forEach(element => {
            allDocumentID.push( element.id)
        })
        res.send(allDocumentID)
    })
}

module.exports = First_Generation_DocumentID_Fetch;
