// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  ajaxData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this
    wx.request({
      url: 'https://i.maoyan.com/ajax/moreClassicList?sortId=1&showType=3&limit=10&offset=10&optimus_uuid=A12964E0F2F411EDABB281B19C40F2074B7D525134184D6AACA923ACCE389384&optimus_risk_level=71&optimus_code=10',
      success(res) {
        console.log(res.data);
        // 将返回的数据存放在data中
        that.setData({
          ajaxData: res.data
        });
      }
    })
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})