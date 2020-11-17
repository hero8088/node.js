
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

		await this.vDao.readAll().then(function(result){
      let rslt = result;
      console.log('service :'+result[0].cd);
		  return await rslt;
		}).catch(function(err){
		  console.log(err);
		  return err;
		});
	}
	
	
}

//new ServiceCodes().selectCodeList();
module.exports = ServiceCodes;