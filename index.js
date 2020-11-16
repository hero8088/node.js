const testService = require('./MVC_Test/Service/Svc_Codes1.js');

const ts = new testService();

ts.selectCodeList().then(function(result){
  console.log('inx:'+result);
}).catch(function(err){
  console.log(err);
});
