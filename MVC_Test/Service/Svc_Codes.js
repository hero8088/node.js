
const MdCodes =  require('../Dao/Model_Codes.js');

class ServiceCodes {
	
	constructor() {
		this.vDao = new MdCodes();
	}
	
	selectCodeList() {
		var data1;
		this.vDao.readAll(function(result){
	    	  data1 = result;
		});
		console.log(data1);
		return data1;
	}
	
	
}

module.exports = ServiceCodes;