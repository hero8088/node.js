
const MdCodes =  require('../Dao/Model_Codes');

module.exports = {
  selectAll: function(){
    console.log('this is function');
    console.log( MdCodes.readAll );
  }
}