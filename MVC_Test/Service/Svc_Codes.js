
const MdCodes =  require('../Dao/Model_Codes.js');

class ServiceCodes {
	
	constructor() {
		this.vDao = new MdCodes();
	}
	
	async selectCodeList() {
	  //let sObj = this.vDao.readAll();
	  //console.log('svc');
	 // console.log(sObj);
	  //return sObj;
   var rsltObj;
		await this.vDao.readAll().then(function(result){
      rsltObj = result;
      console.log('service :'+result[0].cd);
		}).catch(function(err){
		  console.log(err);
		  rsltObj = err;
		});
		return rsltObj;
	}
	
	
}

//new ServiceCodes().selectCodeList();
module.exports = ServiceCodes;