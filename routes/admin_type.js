var express = require('express');
var router = express.Router();
var request = require('request');
const url = require('url'); 
const app = require('../app');

const GetDataAPI = require("../CallAPI/GetDataAPI")

router.get('/', function(req, res, next) {
  GetDataAPI.ApiType(function(rs_type){
      xxx = rs_type
      res.render('admin_type', { title: 'ผู้ดูแลระบบ',text: 'Admin' ,typex: xxx });
  });
});

router.post('/controltype', function(req, res, next) {
    let btn = req.body.btn;
    let typeid = req.body.typeid;
    let typecode = req.body.typecode;
    let typename = req.body.typename;

    if (btn == 'Add'){
                  request.post({
                      headers: {'content-type' : 'application/json'},
                      url:     'http://localhost:3000/api/type/AddType',
                      json: {
                        "typecode": typecode,
                        "typename": typename
                      }
                  }, function(error, response, body){
                      res.status(200).redirect('/admin_type');
                  });


    } else if (btn == 'Edit') { 
                request.post({
                    headers: {'content-type' : 'application/json'},
                    url:     'http://localhost:3000/api/type/EditType',
                    json: {
                      "typeid": typeid,
                      "typecode": typecode,
                      "typename": typename
                    }
                }, function(error, response, body){
                    res.status(200).redirect('/admin_type');
                });

    } else if(btn == 'Delete'){
                request.post({
                    headers: {'content-type' : 'application/json'},
                    url:     'http://localhost:3000/api/type/DeleteType',
                    json: {
                      "typeid": typeid,
                    }
                }, function(error, response, body){
                    res.status(200).redirect('/admin_type');
                });
    } 
  });

  


module.exports = router;

