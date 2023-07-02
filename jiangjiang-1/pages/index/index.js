// index.js
Page({
  onTap:function(event){
    wx.redirectTo({
      url: '../post/post',
    })
  },
  jsonserver(){
    wx.request({
      url: 'http://localhost:3000/posts',
      method:"POST",
      data:{
        title:'jiang',
        author:'222'
      },
      success:(res)=>{
        console.log(res);
      }
    })
  }
})
