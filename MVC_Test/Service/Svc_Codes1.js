
const MdCodes =  require('../Dao/Model_Codes.js');

module.exports = {
  selectAll: function(){
    console.log('this is function');
    console.log( MdCodes.readAll );
  }
}