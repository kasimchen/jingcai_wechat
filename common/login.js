
var config = require("../config/common.js");
var request = require("../common/request.js");
var toast = require("../common/toast.js");
var cache = require("../common/cache.js");


function login(code,userInfo){

  request.request({

    url: config.data.api_url + '/api/auth/wxLogin',
    method: 'POST',
    data: {
      code: code,
      userInfo: userInfo
    },
    success:function(ret){

        if(ret.code==200){
          cache.setUserInfo(ret.data);
          toast.toastSuccess(ret.msg,1000);
        }
    }

  })


}

module.exports = {
  login: login
}