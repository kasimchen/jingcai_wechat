

var config = require("../config/common.js");
var request = require("../common/request.js");
var cacheRepo = require("../common/cache.js");


function getGuessList(callback){

  var userInfo = cacheRepo.getUserInfo();
  var header = {};
  if (userInfo !=undefined) {
    header = { 'Authorization': 'Bearer' + userInfo.token };
  }

  request.request({

    url: config.data.api_url + '/api/guess/index',
    method: 'get',
    header: header,
    data: {
    },
    success: function (ret) {

      if (ret.code == 200) {
          callback(ret.data);
      }
    }

  })
}


function createOrder(guess_id, coin_count, select_index, callback){

  var userInfo = cacheRepo.getUserInfo();
  var header = { 'Authorization': 'Bearer' + userInfo.token };

  request.request({

    url: config.data.api_url + '/api/order/create',
    method: 'POST',
    header: header,
    data: {
      guess_id: guess_id,
      coin_count: coin_count,
      select_index: select_index

    },
    success: function (ret) {

      callback(ret);

    }

  })

}

module.exports = {
  getGuessList: getGuessList,
  createOrder: createOrder
}