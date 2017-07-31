var config = require("../config/common.js");
var request = require("request.js");
var cache = require("cache.js");


function getUserInfo(){

  var userInfo = cache.getUserInfo();

  request.request({

    url: config.data.api_url + '/api/user/get_user_info',
    method: 'GET',
    header: {
      Authorization: 'Bearer ' + userInfo.token
    },
    success: function (ret) {
      cache.setUserInfo(ret.data);
    }

  })


}


module.exports = {
  getUserInfo: getUserInfo,
}