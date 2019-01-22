// pages/index/zhihu/zhihu.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topData: {
      date: "20140523",
      stories: [
        {
          title: "中国古代家具发展到今天有两个高峰，一个两宋一个明末（多图）",
          ga_prefix: "052321",
          images: [
            "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
          ],
          type: 0,
          id: 3930445
        },
      ],
      top_stories: [
        {
          title: "商场和很多人家里，竹制家具越来越多（多图）",
          image: "http://p2.zhimg.com/9a/15/9a1570bb9e5fa53ae9fb9269a56ee019.jpg",
          ga_prefix: "052315",
          type: 0,
          id: 3930883
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      method :"GET",
      url: 'https://news-at.zhihu.com/api/4/news/latest',
      success(res) {
        this.topData = res.data;
      }
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

  }
})