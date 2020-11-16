
const MdCodes =  require('../Dao/Model_Codes.js');
const vDao = new MdCodes();
 
const result = vDao.readAll();
console.log(result);