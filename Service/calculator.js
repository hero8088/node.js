
const valueDao =  require('../Dao/valueSet');

class MyCalculator {
	
	constructor() {
		this.vDao = new valueDao();
	}
	
	add() {
		return this.vDao.value1() + this.vDao.value2();
	}
	
	sub() {
		return this.vDao.value1() - this.vDao.value2();
	}
	
	stringReturn() {
		return this.vDao.value3();
	}
	
}

module.exports = MyCalculator;