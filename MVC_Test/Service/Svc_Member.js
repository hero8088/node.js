
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
	  var rsltObj;
	  var params={};
	  params.mid = "user3";
	  params.mpass = "1111";
	  params.mname = "Test User3";
	  params.memail = "user3@mail.com";
	  params.mphone = "0805004949";
	  params.mnick = "baby";
	  
	  await this.daoMember.update(params).then(function() {
	     rsltObj = "success";
    }).catch(function(err) {
       rsltObj = err;
    });
	}
	
	async deleteGo() {
	  var rsltObj;
	  var mid = "user2";
	  await this.daoMember.delete(mid).then(function() {
	    rsltObj = "success";
	  }).catch(function(err) {
	    rsltObj = err;
	  });
	}
	
	async selectById() {
	  await this.daoMember.read().then(function() {
	
	  }).catch(function() {
	
	  });
	}
	
	
}

new ServiceCodes().deleteGo();
//module.exports = ServiceCodes;