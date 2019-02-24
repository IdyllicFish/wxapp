// pages/index/zhihu/zhihu.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight, //状态栏高度
    bannerPosition: 0,
    title: '知乎日报',
    topData: null,
    transparency: 0, //导航栏透明度
    bannerHeight: 0, //轮播图高度
    titleBarHeight: app.globalData.titleBarHeight, //titlebar高度
    rpxToPx:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getBannerHeight();
    this.getNewDatas();
    wx.showLoading({
      title: 'Loading...',
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.getNewDatas();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 请求首页最新消息
   */
  getNewDatas: function() {
    var self = this;
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest',
      success(res) {
        console.log(res.data);
        self.setData({
          topData: res.data
        })
      },
      complete() {
        wx.hideLoading();
        wx.stopPullDownRefresh();
      },
      fail() {
        wx.showToast({
          title: '加载失败',
        })
      }
    });
  },

  /**
   * banner切换回调
   */
  bannerChange(e) {
    var self = this;
    console.log(e.detail.current);
  },

  /**
   * 滚动的高度回调 
   */
  onPageScroll: function(event) {
    var self = this;
    var height = (self.data.bannerHeight - self.data.statusBarHeight - self.data.titleBarHeight)
    var height = (500)
    var scrollTop = event.scrollTop;
    self.setData({
      transparency: scrollTop * self.data.rpxToPx / height
    })
  },


  getBannerHeight: function() {
    var self = this;
    
    self.setData({
      bannerHeight: 600 * 750 / wx.getSystemInfoSync().windowWidth,
      rpxToPx: 750 / wx.getSystemInfoSync().windowWidth
    })
  }
})