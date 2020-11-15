
const MdCodes =  require('../Dao/Model_Codes.js');

class ServiceCodes {
	
	constructor() {
		this.vDao = new MdCodes();
	}
	
	selectCodeList() {
		var data1;
		this.vDao.readAll().then(function(result){
		  console.log('success');
		  data1=result;
		}).catch(function(err){
		  console.log(err);
		});
		console.log(data1);
		return data1;
	}
	
	
}

module.exports = ServiceCodes;