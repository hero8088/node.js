
const MdCodes =  require('../Dao/Model_Codes.js');

class ServiceCodes {
	
	constructor() {
		this.vDao = new MdCodes();
	}
	
	async selectCodeList() {
		var data = await this.vDao.readAll();
		console.log(data);
		return data;
	}
	
	
}

module.exports = ServiceCodes;