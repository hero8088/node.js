
const MdCodes =  require('../Dao/Model_Codes.js');
const vDao = new MdCodes();
 
function myService() { 
   return vDao.readAll();
}

console.log(myService());