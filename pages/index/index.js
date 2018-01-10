//index.js
//获取应用实例
var util = require("../../utils/util.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feed : [],
    feed_length : 0
  },
  /**
   * 事件处理函数
  */
  bindItemTab:function(){
    /**
     * 点击问题icon时，页面的跳转
    */
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
  bindQueTab:function(){
    wx.navigateTo({
      url: '../question/question'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("加载");
    var that = this;
    //调用应用实例的方法获取全局数据
    this.refresh();
  },
  upper:function(){
    //设置在导航条上显示Loading加载状态,对应的hide是隐藏
    wx.showNavigationBarLoading();
    this.refresh();
    console.log("upper");
    setTimeout(function(){
      //隐藏导航条的loading加载状态
      wx.hideNavigationBarLoading();
      //停止下拉刷新
      wx.stopPullDownRefresh();
    },2000);
  },
  lower:function(e){
    wx.showNavigationBarLoading();
    var that = this;//因为settimeout后this的指向就不对了，所以在此保存
    setTimeout(function(){
      wx.hideNavigationBarLoading();
      that.nextLoad();
      console.log("lower");
    },1000);
  },
  refresh0:function(){
    var index_api = "";
    util.getData(index_api).then(function(data){
      console.log(data);
    })
  },
  refresh:function(){
    //使用本地fake数据实现刷新效果
    var feed = util.getData2();
    console.log("loaddata");
    var feed_data = feed.data;
    this.setData({
      feed:feed_data,
      feed_length:feed_data.length
    });
  },
  nextLoad:function(){
    //使用本地fake数据实现继续加载效果
    var next = util.getNext();
    console.log("continueloaded");
    var next_data = next.data;
    this.setData({
      feed:this.data.feed.concat(next_data),
      feed_length:this.data.feed_length + next_data.length

    });
  }
})

