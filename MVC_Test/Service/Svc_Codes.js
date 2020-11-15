
const MdCodes =  require('../Dao/Model_Codes.js');

class ServiceCodes {
	
	constructor() {
		this.vDao = new MdCodes();
	}
	
	selectCodeList() {
		var data1;
		this.vDao.readAll().then(function(){
		  console.log('success');
		}).catch(function(){
		  console.log('err');
		});
		console.log(data1);
		return data1;
	}
	
	
}

module.exports = ServiceCodes;