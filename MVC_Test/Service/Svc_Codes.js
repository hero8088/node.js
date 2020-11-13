
const MdCodes =  require('../Dao/Model_Codes.js');

class ServiceCodes {
	
	constructor() {
		this.vDao = new MdCodes();
	}
	
	selectCodeList() {
		const data1 = this.vDao.readAll();
		console.log(data1);
		return data1;
	}
	
	
}

module.exports = ServiceCodes;