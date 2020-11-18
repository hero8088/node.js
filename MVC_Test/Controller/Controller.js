const memberService = require('../Service/Svc_Member.js');
const express = require('express');
const app = express()

const ms = new memberService();

app.get('/', function(res,res){
  ms.selectAll().then(function(result) {
    console.log(result);
    res.send(result);
  }).catch(function(err) {
    console.log(err);
  });
});
