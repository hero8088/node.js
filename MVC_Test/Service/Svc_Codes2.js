
const MdCodes =  require('../Dao/Model_Codes.js');

class ServiceCodes {
	
	constructor() {
		this.vDao = new MdCodes();
	}
	
	async selectCodeList() {
		var data1 =	await this.vDao.readAll();
		console.log("service:"+data1);
	}
	
}

module.exports = ServiceCodes;