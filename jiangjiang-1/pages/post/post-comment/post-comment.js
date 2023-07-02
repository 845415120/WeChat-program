// pages/post/post-comment/post-comment.js
import {DBPost} from '../../../db/DBpost'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      useKeyboardFlag:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var postId = options.id;
    this.dbPost = new DBPost(postId);
    var comments = this.dbPost.getCommentData();

    // 绑定评论数据
    this.setData({
      comments:comments
    
    });
    console.log(comments);
  },
    //预览图片
    previewImg: function (event) {
      //获取评论序号
      var commentIdx = event.currentTarget.dataset.commentIdx,
          //获取图片在图片数组中的序号
          imgIdx = event.currentTarget.dataset.imgIdx,
          //获取评论的全部图片
          imgs = this.data.comments[commentIdx].content.img;
      wx.previewImage({
          current: imgs[imgIdx], // 当前显示图片的http链接
          urls: imgs // 需要预览的图片http链接列表
      })
  },
    //切换语音和键盘输入
      switchInputType: function (event) {
        this.setData({
            useKeyboardFlag: !this.data.useKeyboardFlag
        })
    },
    // 获取用户输入
        bindCommentInput: function (event) {
          var val = event.detail.value;
          this.data.keyboardInputValue = val;
      },
      // 提交用户评论
      submitComment: function (event) {
        var imgs = this.data.chooseFiles;
        var newData = {
            username: "青石",
            avatar: "/images/avatar/avatar-3.png",
            create_time: new Date().getTime() / 1000,
            content: {
                txt: this.data.keyboardInputValue,
                img: imgs
            },
        };
        if (!newData.content.txt && imgs.length === 0) {
            return;
        }
        //保存新评论到缓存数据库中
        this.dbPost.newComment(newData);

        //显示操作结果
        this.showCommitSuccessToast();
        //重新渲染并绑定所有评论
        this.bindCommentData();
        //恢复初始状态
        this.resetAllDefaultStatus();
    },
    //评论成功
    showCommitSuccessToast: function () {
      //显示操作结果
      wx.showToast({
          title: "评论成功",
          duration: 1000,
          icon: "success"
      })
  },
  bindCommentData: function () {
    var comments = this.dbPost.getCommentData();
    // 绑定评论数据
    this.setData({
        comments: comments
    });
},
    //将所有相关的按钮状态，输入状态都回到初始化状态
    resetAllDefaultStatus: function () {
      //清空评论框
      this.setData({
          keyboardInputValue: '',
          chooseFiles: [],
          sendMoreMsgFlag: false
      });
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