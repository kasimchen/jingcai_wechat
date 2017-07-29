//index.js
//获取应用实例
var app = getApp()

var config = require('../../config/common.js');

var remoteData = [
  {
    "title": "明天是否会天晴？",
    "thumbnail": "http://ubmcmm.baidustatic.com/media/v1/0f00075GZiA163784H9mV6.jpg",
    "select_item": [{ "text": "是", "select_index": 1, "select": false }, { "text": "否", "select_index": 2, "select": false }],
    "select_index": 0
  },
  {
    "title": "我是标题2",
    "thumbnail": "http://ubmcmm.baidustatic.com/media/v1/0f00075GZiA163784H9mV6.jpg",
    "select_item": [{ "text": "是", "select_index": 1, "select": true }, { "text": "否", "select_index": 2, "select": false }],
    "select_index": 1
  },
  {
    "title": "我是标题2",
    "thumbnail": "http://ubmcmm.baidustatic.com/media/v1/0f00075GZiA163784H9mV6.jpg",
    "select_item": [{ "text": "是", "select_index": 1, "select": false }, { "text": "否", "select_index": 2, "select": false }],
    "select_index": 0
  }
];

Page({
  data: {
    motto: 'Hello World',
    btn_color: config.data.btn_color,
    list: []
    
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //选择按钮
  select_item:function(event){

    var item_index = event.currentTarget.dataset.item_id;
    var select_index = event.currentTarget.dataset.select_id;

    for (var i = 0; i < this.data.list[item_index].select_item.length;i++){

      if (select_index==i){
        this.data.list[item_index].select_item[i].select = true;
      }else{
        this.data.list[item_index].select_item[i].select = false;
      }
    }

    this.setData({
      list:this.data.list
    })


  },
  //点击投注按钮
  submit: function (event) {

    var item_index = event.currentTarget.dataset.item_id;
    var data = this.data.list;
    var userInfo = this.data.userInfo;
    var _this = this;
    wx.showActionSheet({
      itemList: config.data.coin_item_select,
      success: function (res) {
        if (!res.cancel) {
          
          var index = res.tapIndex;
          
          if (config.data.coin_item_select[index] > userInfo.coin_count){
            wx.showToast({
              title: '金币不足',
              image:'../../images/error.png',
              duration: 1000
            });
            return false;
          }

        //远程请求扣除金币
        if(true){
          userInfo.coin_count = userInfo.coin_count - config.data.coin_item_select[index];
        }



          for (var i = 0; i < data[item_index].select_item.length; i++) {
            if (data[item_index].select_item[i].select == true){
              data[item_index].select_index = data[item_index].select_item[i].select_index;
              }
          }
          _this.setData({
            list: data,
            userInfo: userInfo
          })

          wx.showToast({
            title: '投注完成',
            icon: 'success',
            duration: 3000
          });


        }
      },fail:function(res){
        console.log(res.errMsg);
      }
    });
  },

  onLoad: function () {

    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      
      //wxlogin.login(userInfo);
      
      
      //更新
    
      /*wx.request({
        url: config.data.api_url,
      })*/
      


      userInfo.coin_count = 1000;

      that.setData({
        userInfo: userInfo,
        list: remoteData
      })
    })
  }
})