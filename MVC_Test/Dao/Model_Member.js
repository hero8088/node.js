const PgPromise = require('pg-promise')();

class Model_Codes {

  constructor() {
    this.db = PgPromise('postgres://hero8088:8088@localhost:5432/mydb');
  }

  async create(param) {
    let mid = param.mid;
    let mpass = param.mpass;
    let mname = param.mname;
    let memail = param.memail;
    let mphone = param.mphone;
    let mnick = param.mnick;
    
    return this.db.any('INSERT INTO MEMBER (MID, MPASS, MANME, MEMAIL, MPHONE, MNICK) VALUES($1, $2, $3, $4, $5, $6)', [mid, mpass, mname, memail, mphoe, mnick]);
  }

  readAll() {
    let obj = this.db.any('SELECT * FROM MEMBER');
    console.log('dao: ' + obj);
    return obj;
  }
  
  async read(mid) {
    return this.db.any('SELECT * FROM MEMBER WHERE CD = $1', [mid]);
  }

  async update(param) {
    let mid = param.mid;
    let mpass = param.mpass;
    let mname = param.mname;
    let memail = param.memail;
    let mphone = param.mphone;
    let mnick = param.mnick;
    return this.db.any('UPDATE MEMBER SET MPASS = $1, MNAME = $2, MEMAIL = $3, MPHONE = $4, MNICK $5 WHERE CD = $6', [ mpass, mname, memail, mphoe, mnick, mid]);
  }

  async delete(mid) {
    return this.db.any('DELETE FROM MEMBER WHERE MID = $1', [mid]);
  }

}
module.exports = Model_Codes;