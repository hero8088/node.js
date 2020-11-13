
const MdCodes =  require('../Dao/Model_Codes.js');

module.exports = {
  selectAll: function(){
    var codeModel = new MdCodes();
    console.log( codeModel.readAll );
  }
}