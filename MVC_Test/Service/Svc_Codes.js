
const MdCodes =  require('../Dao/Model_Codes.js');
const vDao = new MdCodes();
 
async function myService() { 
   return await vDao.readAll();
}

console.log(myService());
