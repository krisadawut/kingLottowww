var express = require('express');
var router = express.Router();
var request = require('request');
const url = require('url'); 

const GetDataAPI = require("../CallAPI/GetDataAPI")

router.get('/', function(req, res, next) {
  GetDataAPI.ApiNews(function(rs_news){
  GetDataAPI.ApiUsers(function(rsb){
      xxx = rs_news
      yyy = rsb
      res.render('index', { title: 'หน้าแรก',text: 'ยินดีต้อนรับ' ,News: xxx ,Users: yyy});
  });});
});

router.get('/testdatatable', function(req, res, next) {
  GetDataAPI.ApiType(function(rs_type){
    xxx = rs_type.data
    res.render('test_datatable', { title: 'ผู้ดูแลระบบ',text: 'Admin' ,typex: xxx });
});
  
});

module.exports = router;
