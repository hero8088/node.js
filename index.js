const testService = require('./MVC_Test/Service/Svc_Codes.js');




async function selectCodesAll() {
  var ts = new testService();
  let data = await ts.selectCodeList();
  console.dir(data);
}

 selectCodesAll();