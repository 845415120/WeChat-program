// pages/movie1/movie1.js
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
    const that =this
    wx.request({
      url: 'https://show.maoyan.com/maoyansh/myshow/ajax/ranks?optimus_risk_level=71&optimus_code=10&uuid=yulg4jyd8ms2pcv6rshg1qw3fizmeph8j0akopwiqwju84qrswnn5dzc3jnao3yq&sellChannel=13&cityId=10&lng=0&lat=0',
      success(res){
        that.setData({
          ajaxData : res.data
        })
        console.log(res);
      },


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