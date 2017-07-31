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


function putFormId(id){

  var userInfo = cache.getUserInfo();
  request.request({

    url: config.data.api_url + '/api/user/collect_form_id',
    method: 'POST',
    data: { form_id:id},
    header: {
      Authorization: 'Bearer ' + userInfo.token
    },
    success: function (ret) {
    }
  })
}


module.exports = {
  getUserInfo: getUserInfo,
  putFormId: putFormId
}