
const MdCodes =  require('../Dao/Model_Codes.js');
const vDao = new MdCodes();
 
 
await vDao.readAll().then(function(result){
   console.log(result); 
}).catch(function(err){
  console.log(err);
}) ;		