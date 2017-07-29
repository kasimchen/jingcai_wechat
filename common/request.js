
var toast = require('toast.js');

function request(param){

param.fail = function(ret){
  toast.toastError("请求失败");
}

}

module.exports = {
  request: request
}