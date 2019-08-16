// pages/wxif/wxif.js
Page({

  data: {
    isShow: false,
    hiddenShow: false
  },
  handleIfShow() {
    this.setData({
      isShow: !this.data.isShow
    });
  },
  handleHidden() {
    this.setData({
      hiddenShow: !this.data.hiddenShow
    });
  }
})