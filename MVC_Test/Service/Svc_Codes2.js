
const MdCodes =  require('../Dao/Model_Codes.js');

class ServiceCodes {
	
	constructor() {
		this.vDao = new MdCodes();
	}
	
	selectCodeList() {
	  //프로미스를 그냥 땡기면 안됨
	  //then, catch를 통해서 받아야 함.
		var data1 =	this.vDao.readAll();
		console.log("service:"+data1);
	}
	
}

module.exports = ServiceCodes;