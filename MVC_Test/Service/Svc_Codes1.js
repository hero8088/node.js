
const MdCodes =  require('../Dao/Model_Codes.js');

class ServiceCodes {
	
	constructor() {
		this.vDao = new MdCodes();
	}
	
	selectCodeList() {
	  //let sObj = this.vDao.readAll();
	  //console.log('svc');
	 // console.log(sObj);
	  //return sObj;

		this.vDao.readAll().then(async function(result){
      let rslt = await result;
      console.log('service :'+result[0].cd);
		  return rslt;
		}).catch(function(err){
		  console.log(err);
		  return err;
		});
		return 'aaa';
	}
	
	
}

//new ServiceCodes().selectCodeList();
module.exports = ServiceCodes;