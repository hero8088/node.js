const testService = require('./MVC_Test/Service/Svc_Codes1.js');

const ts = new testService();

/*ts.selectCodeList().then(function(result){
  console.log('inx:');
  console.log(result);
}).catch(function(err){
  console.log(err);
});*/

let sList = ts.selectCodeList();
console.log(sList);