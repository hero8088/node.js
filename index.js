const testService = require('./MVC_Test/Service/Svc_Codes.js');

var ts = new testService();

var data = await ts.selectCodeList();

console.log(data);