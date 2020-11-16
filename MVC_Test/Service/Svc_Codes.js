
const MdCodes =  require('../Dao/Model_Codes.js');
const vDao = new MdCodes();
 
 async function myService() {
   var data1 =	await vDao.readAll();
		console.log("service:"+data1);
 }
myService();		