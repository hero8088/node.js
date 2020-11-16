
const MdCodes =  require('../Dao/Model_Codes.js');
const vDao = new MdCodes();
 
 async function myService() {
     
   let data1 =	await vDao.readAll();
		console.log("service:"+data1);
		return data1;
 }
myService().then(function(result){
   console.log(result); 
});		