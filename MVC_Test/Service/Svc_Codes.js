
const MdCodes =  require('../Dao/Model_Codes.js');

class ServiceCodes {
	
	constructor() {
		this.vDao = new MdCodes();
	}
	
	async selectCodeList() {
		const data1 = await this.vDao.readAll();
		console.dir(data1);
		return data1;
	}
	
	
}

module.exports = ServiceCodes;