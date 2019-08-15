// pages/image/image.js
Page({

  data: {
    imagePath: ""
  },
  handleAlbum() {
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        let path = res.tempFilePaths[0];

        this.setData({
          imagePath: path
        })
      },
    })
  },
  handleImageLoad() {
    console.log("加载完成");
  }

})