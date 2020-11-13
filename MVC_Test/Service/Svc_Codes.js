
const MdCodes =  require('../Dao/Model_Codes.js');

class ServiceCodes {
	
	constructor() {
		this.vDao = new MdCodes();
	}
	
	async selectCodeList() {
		const data = await this.vDao.readAll();
		console.dir(data);
		return data;
	}
	
	
}

module.exports = ServiceCodes;