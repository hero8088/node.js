
const MdCodes =  require('../Dao/Model_Codes.js');

class ServiceCodes {
	
	constructor() {
		this.vDao = new MdCodes();
	}
	
	async selectCodeList() {
		var data1 = {};
		await this.vDao.readAll().then(function(result){
		  console.log('success :'+result);
		  data1= {'resultList': result};
		  return data1;
		}).catch(function(err){
		  console.log(err);
		  return err;
		});
	}
	
	
}

//new ServiceCodes().selectCodeList();
module.exports = ServiceCodes;