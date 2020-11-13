const PgPromise = require('pg-promise')();

class Model_Codes {
  
  constructor() {
    this.db = PgPromise('postgres://hero8088:8088@localhost:5432/mydb');
  }
  
  async create(param) {
    let cd = param.cd;
    let cddsc = param.cddsc; 
    return this.db.any('INSERT INTO CODES VALUES($1, $2)', [cd, cddsc]);
  }
  
   readAll() {
    this.db.any('SELECT * FROM CODES').then(function(result){
      console.log(result);
      return result;
    }).catch(function(err){
      return next(err);
    });
  }
  
  async read(cd) {
    return this.db.any('SELECT * FROM CODES WHERE CD = $1', [cd]);
  }
  
  async update(param) {
    let cd = param.cd;
    let cddsc = param.cddsc;
    return this.db.any('UPDATE CODES SET CDDSC = $1 WHERE CD = $2', [cddsc, cd]);
  }
  
  async delete(id) {
    return this.db.any('DELETE FROM CODES WHERE ID = $1', [id]);
  }
  
}
module.exports = Model_Codes;