// app.js
App({
// 使用Storage初始化本地数据库
onLaunch:function(){
  // 同步设置缓存
  // wx.setStorageSync(  'postList',dataObj.postList  );
  // 判断的仅当缓存不存在是执行
  var strorageData = wx.getStorageSync('postList')
  if(!strorageData){
    // 不存在
    var dataObj = require("data/data.js")
    wx.clearStorage();
    wx.setStorageSync(  'postList',dataObj.postList  );
  }
}
})
