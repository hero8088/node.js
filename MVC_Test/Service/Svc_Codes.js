
const MdCodes =  require('../Dao/Model_Codes.js');
const vDao = new MdCodes();
 
async function myService() { 
   const result = await vDao.readAll();
   console.log(result);
}

myService();