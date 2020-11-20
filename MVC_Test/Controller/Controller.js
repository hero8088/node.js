const memberService = require('../Service/Svc_Member.js');
const express = require('express');

const router = express.Router();
const ms = new memberService();

    router.get('/', function(res,res){
      ms.selectAll().then(function(result) {
        //console.log(result);
        res.send(result);
      }).catch(function(err) {
        console.log(err);
      });
    });

module.exports = router;
