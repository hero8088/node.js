const testService = require('./MVC_Test/Service/Svc_Codes1.js');

const ts = new testService();

ts.selectCodeList().then(result => {
  console.log(result.resultList);
}).catch(err => {
  console.log(err);
});
