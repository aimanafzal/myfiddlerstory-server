
const config = require('../config').config;
let nodemailer = require('nodemailer');
let mailerSettings = require('./mailersettings')
const collectionName = require('./collectionName');
let aws = require('aws-sdk');
let multer = require('multer');
let multerS3 = require('multer-s3');


function upload_s3_bucket() { }
upload_s3_bucket.prototype.upload = function (file, res) {
    let s3bucket = new aws.S3({
        secretAccessKey: '',
        accessKeyId: '',
        region: 'us-east-2'
    })
    var params = {
        Bucket: 'myfiddlerstory',
        Key: file.name,
        Body: file.data
    }
    s3bucket.upload(params, function (err, data) {
        if (err) {
            // console.log('error in callback')
            // console.log(err)
            res.send({ err: err })
        }
        else {
            // console.log('success')
            // console.log(data)
            res.send({ data: data })
        }
    })
}


module.exports = upload_s3_bucket;
