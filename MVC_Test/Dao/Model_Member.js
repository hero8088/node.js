const PgPromise = require('pg-promise')();

class Model_Codes {

  constructor() {
    this.db = PgPromise('postgres://hero8088:8088@localhost:5432/mydb');
  }

  create(param) {
    let mid = param.mid;
    let mpass = param.mpass;
    let mname = param.mname;
    let memail = param.memail;
    let mphone = param.mphone;
    let mnick = param.mnick;
    console.log(param);  
    return this.db.none('INSERT INTO MEMBER (MID, MPASS, MNAME, MEMAIL, MPHONE, MNICK) VALUES($1, $2, $3, $4, $5, $6)', [mid, mpass, mname, memail, mphone, mnick]);
  }

  readAll() {
    let obj = this.db.any('SELECT * FROM MEMBER');
    console.log('dao: ' + obj);
    return obj;
  }
  
  read(mid) {
    return this.db.any('SELECT * FROM MEMBER WHERE Mid = $1', [mid]);
  }

  update(param) {
    let mid = param.mid;
    let mpass = param.mpass;
    let mname = param.mname;
    let memail = param.memail;
    let mphone = param.mphone;
    let mnick = param.mnick;
    console.log(param);
    return this.db.any('UPDATE MEMBER SET MPASS = $1, MNAME = $2, MEMAIL = $3, MPHONE = $4, MNICK = $5 WHERE MID = $6', [ mpass, mname, memail, mphone, mnick, mid]);
  }

  delete(mid) {
    return this.db.none('DELETE FROM MEMBER WHERE MID = $1', [mid]);
  }

}
module.exports = Model_Codes;