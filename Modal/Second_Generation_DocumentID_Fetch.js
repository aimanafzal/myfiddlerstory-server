const config = require('../config').config;
const _firebase = require('firebase');
if (!_firebase.apps.length)
    _firebase.initializeApp(config)
const collectionName = require('./collectionName');

//Contructor requiring two params to utilize
//them in the methods defined
function Second_Generation_DocumentID_Fetch() {
}

Second_Generation_DocumentID_Fetch.prototype.fetch_record = function (res) {
    let db = _firebase.firestore();
    db.collection(collectionName.Second_Generation_Survey_Information).get().then(querysnapshot => {
        let allDocumentID = []
        querysnapshot.forEach(element => {
            allDocumentID.push( element.id)
        })
        res.send(allDocumentID)
    })
}

module.exports = Second_Generation_DocumentID_Fetch;
