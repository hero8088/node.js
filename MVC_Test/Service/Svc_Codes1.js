
const MdCodes =  require('../Dao/Model_Codes');

module.exports = {
  selectAll: function(){
    console.log('this is function');
    return MdCodes.readAll;
  }
}