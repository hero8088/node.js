
const MdCodes =  require('../Dao/Model_Codes.js');

class ServiceCodes {
	
	constructor() {
		this.vDao = new MdCodes();
	}
	
	async selectCodeList() {
		return await this.vDao.readAll();
	}
	
	
}

module.exports = ServiceCodes;