var express = require('express');
var router = express.Router();
var request = require('request');
const url = require('url'); 
const app = require('../app');

const GetDataAPI = require("../CallAPI/GetDataAPI")

router.get('/', function(req, res, next) {
  GetDataAPI.ApiUserType(function(rs_type){
      xxx = rs_type
      res.render('admin_usertype', { title: 'ผู้ดูแลระบบ',text: 'Admin' ,typex: xxx });
  });
});

router.post('/controlUsertype', function(req, res, next) {
    let btn = req.body.btn;
    let UserTypeId = req.body.UserTypeId;
    let UserTypeCode = req.body.UserTypeCode;
    let UserTypeName = req.body.UserTypeName;
    console.log(UserTypeId);
    console.log(UserTypeCode);
    console.log( UserTypeName );
    if (btn == 'Add'){
                  request.post({
                      headers: {'content-type' : 'application/json'},
                      url:     'http://localhost:3000/api/usertype/AddUserType',
                      json: {
                        "UserTypeCode": UserTypeCode,
                        "UserTypeName": UserTypeName
                      }
                  }, function(error, response, body){
                      res.status(200).redirect('/admin_usertype');
                  });


    } else if (btn == 'Edit') { 
                request.post({
                    headers: {'content-type' : 'application/json'},
                    url:     'http://localhost:3000/api/usertype/EditUserType',
                    json: {
                      "UserTypeId": UserTypeId,
                      "UserTypeCode": UserTypeCode,
                      "UserTypeName": UserTypeName
                    }
                }, function(error, response, body){
                    res.status(200).redirect('/admin_usertype');
                });

    } else if(btn == 'Delete'){
                request.post({
                    headers: {'content-type' : 'application/json'},
                    url:     'http://localhost:3000/api/usertype/DeleteUserType',
                    json: {
                      "UserTypeId": UserTypeId,
                    }
                }, function(error, response, body){
                    res.status(200).redirect('/admin_usertype');
                });
    } 
  });

  


module.exports = router;

