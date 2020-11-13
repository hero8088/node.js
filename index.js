const testService = require('./MVC_Test/Service/Svc_Codes.js');

var ts = new testService();


async function selectCodesAll() {
  let data = await ts.selectCodeList();
  console.dir(data);
}

 selectCodesAll();