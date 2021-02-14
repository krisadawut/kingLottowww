var express = require('express');
var router = express.Router();
var request = require('request');
const url = require('url'); 

const GetDataAPI = require("../CallAPI/GetDataAPI")

router.get('/', function(req, res, next) {
  GetDataAPI.ApiNews(function(rs_news){
      xxx = rs_news
      res.render('admin_news', { title: 'ผู้ดูแลระบบ',text: 'Admin' ,News: xxx });
  });
});

router.post('/controlnews', function(req, res, next) {
  let btn = req.body.btn;
  let nid = req.body.nid;
  let news_detail = req.body.news_detail;
  if (btn == 'Add'){
    res.redirect(url.format({
      pathname:"addnews",
      query: {
         "news_detail": news_detail,
       }
    }));
  } else if (btn == 'Edit') { 
      res.redirect(url.format({
        pathname:"editnews",
        query: {
           "nid": nid,
           "news_detail": news_detail,
         }
      }));
  } else if(btn == 'Delete'){
      res.redirect('delnews?'+'nid='+nid);
  } 
});

router.get('/addnews', function(req, res, next) {
  request.post({
      headers: {'content-type' : 'application/json'},
      // headers: {'content-type' : 'application/x-www-form-urlencoded'},
      url:     'http://localhost:3000/api/news/AddNews',
      body:    '',
      json: {
        "news_detail": req.query.news_detail
      }
  }, function(error, response, body){
      res.status(200).redirect('/admin_news');
  });
});

router.get('/editnews', function(req, res, next) {
  request.post({
      headers: {'content-type' : 'application/json'},
      // headers: {'content-type' : 'application/x-www-form-urlencoded'},
      url:     'http://localhost:3000/api/news/EditNews',
      body:    '',
      json: {
        "newsid": req.query.nid
        ,"news_detail": req.query.news_detail
      }
  }, function(error, response, body){
      res.status(200).redirect('/admin_news');
  });
});

router.get('/delnews', function(req, res, next) {
  let body_text = "newsid="+req.query.nid;
  request.post({
    headers: {'content-type' : 'application/x-www-form-urlencoded'},
    url:     'http://localhost:3000/api/news/DeleteNews',
    body:    body_text
  }, function(error, response, body){
    res.status(200).redirect('/admin_news');

  });
});

module.exports = router;