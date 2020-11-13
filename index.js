const testService = require('./MVC_Test/Service/Svc_Codes.js');

const ts = new testService();

const data = (function selectCodesAll() {
  const data = ts.selectCodeList();
  return data;  
})();
console.log(data);