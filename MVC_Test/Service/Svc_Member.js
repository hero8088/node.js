
const vDao =  require('../Dao/Model_Member.js');

class ServiceCodes {
	
	constructor() {
		this.daoMember = new vDao();
	}
	
	async selectAll() {
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
	
	async insertGo() {
	  var rsltObj;
	  var params={};
	  params.mid = "user3";
	  params.mpass = "1111";
	  params.mname = "Test User";
	  params.memail = "user1@mail.com";
	  params.mphone = "0805004949";
	  params.mnick = "";
	  
	  await this.daoMember.create(params).then(function(result){
       //return null
       rsltObj = "success";
	  }).catch(function(err){
	     rsltObj = err;
	  });
	  return rsltObj;
	}
	
	async updateGo() {
	  await this.daoMember.update().then(function() {
	
	  }).catch(function() {
	
	  });
	}
	
	async deleteGo() {
	  await this.daoMember.delete().then(function() {
	
	  }).catch(function() {
	
	  });
	}
	
	async selectById() {
	  await this.daoMember.read().then(function() {
	
	  }).catch(function() {
	
	  });
	}
	
	
}

new ServiceCodes().insertGo();
//module.exports = ServiceCodes;