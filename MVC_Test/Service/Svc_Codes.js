
const MdCodes =  require('../Dao/Model_Codes.js');
const vDao = new MdCodes();
 
async function myService() { 
   await vDao.readAll().then( (result) => {console.log(result);});
}

myService();