
const MdCodes =  require('../Dao/Model_Codes');

class ServiceCodes {
	
	constructor() {
		//this.vDao = new MdCodes();
	}
	
	selec1tCodeList() {
	//	return this.vDao.readAll;
	  return MdCodes.readAll;
	  
	}
	
	
}

module.exports = ServiceCodes;