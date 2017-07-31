function toastSuccess(msg, duration){

  var duration = duration ? duration:3000;

  wx.showToast({
    title: msg,
    icon: 'success',
    duration: duration
  });
}

function toastError(msg, duration) {
  
  var duration = duration ? duration : 3000;


  wx.showToast({
    title: msg,
    image: '../images/error.png',
    duration: duration
  });
}

module.exports = {
  toastSuccess: toastSuccess,
  toastError: toastError
}