
const MdCodes =  require('../Dao/Model_Codes.js');

class ServiceCodes {
	
	constructor() {
		this.vDao = new MdCodes();
	}
	
	async selectCodeList() {
		var data1;
		await this.vDao.readAll().then(function(result){
		  console.log('success :'+result);
		  data1=result;
		}).catch(function(err){
		  console.log(err);
		});
		console.log("마지막:"+data1);
		return data1;
	}
	
	
}

module.exports = ServiceCodes;