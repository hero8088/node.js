
const MdCodes =  require('../Dao/Model_Codes');

class ServiceCodes {
	
	constructor() {
		//this.vDao = new MdCodes();
	}
	
	selectCodeList() {
	//	return this.vDao.readAll;
	  return MdCodes.readAll;
	  
	}
	
	
}

module.exports = ServiceCodes;