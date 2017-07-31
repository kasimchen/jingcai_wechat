
var toast = require('toast.js');
var cacheRepo = require('cache.js');


function request(param){

    param.fail = function(ret){
      toast.toastError("请求失败");
    }


    var success  = param.success;

    param.success = function(ret){

    if(ret.statusCode==400){
      toast.toastError("授权失败,请重新进入小程序");
      return false;
    }

      success(ret.data);

    }
    
    wx.request(param);

}

module.exports = {
  request: request
}