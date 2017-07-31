function setToken(token){

  try {
    wx.setStorageSync('token', token);
  } catch (e) {
    console.log(e.msg);
  }
}

function getToken() {

  try {


    var value = wx.getStorageSync('token')
    return value;

  } catch (e) {
    console.log(e);
  }

}

function setUserInfo(userInfo){

  var userInfo_str = JSON.stringify(userInfo); 
  wx.setStorage({
    key: "user_info",
    data: userInfo_str
  })

  var user = getUserInfo();
  console.log(user);

}

function getUserInfo(){

  try {
    var value = wx.getStorageSync('user_info')
    if (value) {
      return JSON.parse(value);
      //return value.parseJSON();
    }
  } catch (e) {
    // Do something when catch error
  }

}


module.exports = {
  setToken: setToken,
  getToken: getToken,
  setUserInfo: setUserInfo,
  getUserInfo: getUserInfo
}