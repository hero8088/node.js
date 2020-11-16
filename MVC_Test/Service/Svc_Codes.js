
const MdCodes =  require('../Dao/Model_Codes.js');
const vDao = new MdCodes();

		var data1 =	vDao.readAll();
		console.log("service:"+data1);
	