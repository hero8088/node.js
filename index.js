const testService = require('./MVC_Test/Service/Svc_Codes1.js');

const ts = new testService();

var resultList = ts.selectCodeList();
console.log(resultList.resultList);