
const MdCodes =  require('../Dao/Model_Codes.js');
const vDao = new MdCodes();
 
 function myService() { 
    vDao.readAll().then( (result) => {console.log(result);});
}

myService();