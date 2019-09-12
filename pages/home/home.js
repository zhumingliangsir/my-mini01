// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from "../../service/home.js"

const types = ['pop', 'new', 'sell']
Page({

  data: {
    banners: null,
    recommends: null,
    titles: ['流行', '新款', '精选'],
    goods: {
      pop: {
        page: 0,
        list: []
      },
      new: {
        page: 0,
        list: []
      },
      sell: {
        page: 0,
        list: []
      }
    },
    currentType: "pop"
  },
  onLoad: function (options) {

    this._getMultiData();
    this._getGoodsData('pop');
    this._getGoodsData('new');
    this._getGoodsData('sell');
  },
  // --------------------------------------------------请求网络函数-----------------------------------------------------
  _getMultiData() {
    //请求轮播图、以及推荐数据
    getMultiData()
      .then(res => {
        // console.log(res);
        const banners = res.data.data.banner.list;
        const recommends = res.data.data.recommend.list
        this.setData({
          banners,
          recommends
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  _getGoodsData(type) {
    // 1、请求页码
    const page = this.data.goods[type].page + 1;
    // 2、请求网络数据
    getGoodsData(type, page)
      .then(res => {
        // console.log(res);
        const list = res.data.data.list;

        const oldList = this.data.goods[type].list;
        oldList.push(...list);
        const typeKey = `goods.${type}.list`;
        const pageKey = `goods.${type}.page`
        this.setData({
          [typeKey]: oldList,
          [pageKey]: page
        })

      })
  },
  // --------------------------------------------------事件监听函数-----------------------------------------------------
  handleTabClick(event) {
    // 取出index
    const index = event.detail.index;
    // console.log(index);
    this.setData({
      currentType: types[index]
    })
  },
  onReachBottom() {
    // 页面滚动到底部时，加载更多数据
    this._getGoodsData(this.data.currentType)

  }

})