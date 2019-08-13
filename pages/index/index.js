//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title: "欢迎来到小程序开发",
    arr: [
      { name: "koma", age: 1 },
      { name: "john", age: 2 },
      { name: "paul", age: 3 },
      { name: "enen", age: 4 }
    ],
    count: 0
  },
  // 增加
  add() {
    this.setData({
      count: this.data.count + 1
    })
  },
  // 减少
  reduce() {
    this.setData({
      count: this.data.count - 1
    })
  },
  // 重置
  reset() {
    this.setData({
      count: 0
    })
  }

})
