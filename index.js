const testService = require('./MVC_Test/Service/Svc_Codes.js');




async function selectCodesAll() {
  const ts = new testService();
  const data = await ts.selectCodeList();
  console.dir(data);
}

 selectCodesAll();