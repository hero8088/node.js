const testService = require('./MVC_Test/Service/Svc_Codes.js');

var ts = new testService();

ts.selectCodeList(function(data){
  console.log(data);
});
