function toastSuccess(msg){
  wx.showToast({
    title: msg,
    icon: 'success',
    duration: 3000
  });
}

function toastError(msg) {
  wx.showToast({
    title: msg,
    image: '../images/error.png',
    duration: 3000
  });
}

module.exports = {
  toastSuccess: toastSuccess,
  toastError: toastError
}