//app.js

var wxlogin = require('common/login.js');
var userRepo = require('common/user.js');
var cacheRepo = require('common/cache.js');

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);

    this.getUserInfo();

  },
  getUserInfo: function (cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function (res) {
                 var code = res.code;
          wx.getUserInfo({
            success: function (res) {
              /*
              that.globalData.userInfo = res.userInfo;
              console.log(res.userInfo);
              typeof cb == "function" && cb(that.globalData.userInfo);
              */

              wxlogin.login(code, res.userInfo);
              var userInfo = cacheRepo.getUserInfo();
              that.globalData.userInfo = userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo);

            }
          })
        }
      });
    }
  },
  globalData: {
    userInfo: null
  }
})