const testService = require('./MVC_Test/Service/Svc_Codes.js');

const ts = new testService();

(function selectCodesAll() {
  const data = ts.selectCodeList();
  console.dir(data);
})();
