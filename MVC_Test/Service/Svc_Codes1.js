
const MdCodes =  require('../Dao/Model_Codes.js');

class ServiceCodes {
	
	constructor() {
		this.vDao = new MdCodes();
	}
	
	selectCodeList() {
	  let sObj = this.vDao.readAll();
	  console.log('service: '+sObj);
	  return sObj;
	/*	var data1 = {};
		await this.vDao.readAll().then(function(result){
		  console.log('service :'+result);
		  return result;
		}).catch(function(err){
		  console.log(err);
		  return err;
		});*/
	}
	
	
}

//new ServiceCodes().selectCodeList();
module.exports = ServiceCodes;