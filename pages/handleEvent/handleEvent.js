// pages/handleEvent/handleEvent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleBindTap() {
    console.log("handleBindTap")
  },
  bindtouchstart() {
    console.log("bindtouchstart")
  },
  touchmove() {
    console.log("touchmove")
  },
  touchcancel() {
    console.log("touchcancel")
  },
  touchend() {
    console.log("touchend")
  },
  longpress() {
    console.log("longpress")
  },
  longtap() {
    console.log("longtap")
  },
  touchforcechange() {
    console.log("touchforcechange")
  }
})