// pages/index/zhihu/zhihu.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topData: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getNewDatas();
    wx.showLoading({
      title: 'Loading...',
    })
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
    })
  }
})