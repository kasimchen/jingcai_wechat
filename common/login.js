
var config = require("../config/common.js");
var request = require("../common/request.js");


function login(code,userInfo){

  request.request({
  
    url: config.data.api_url + '/api/auth/wxLogin',
    method: 'POST',
    data: {
      code: code,
      userInfo: userInfo
    },function(ret){

    }

  })


}

module.exports = {
  login: login
}