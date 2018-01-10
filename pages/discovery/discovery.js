// pages/discovery/discovery.js
var util = require("../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab: ["推荐", "圆桌", "热门", "收藏"],
    currentNavtab:"0",
    imgUrls:[
      '../../images/24213.jpg',
      '../../images/24280.jpg',
      '../../images/1444983318907-_DSC1826.jpg'
    ],
    indicatorDots:false,
    autoplay:true,
    interval:5000,
    duration:1000,
    feed:[],
    feed_length:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("discovery_onload");
    var that = this;
    //调用实例方法获取全局数据
    this.refresh();
  },
  switchTab:function(e){
    //改变currentNavtab的值，对应改变选中的tab
    this.setData({
      currentNavtab:e.currentTarget.dataset.idx
    });
  },
  upper:function(){
    //下拉刷新
    wx.showNavigationBarLoading();
    this.refresh();
    setTimeout(function () { wx.hideNavigationBarLoading(); wx.stopPullDownRefresh(); }, 2000);
  },
  lower:function(){
    //上拉加载
    var that = this;
    setTimeout(function () { wx.hideNavigationBarLoading(); that.nextLoad(); }, 1000);
  },
  bindItemTap:function(){
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
  bindQueTap:function(){
    wx.navigateTo({
      url: '../question/question'
    })
  },
  refresh:function(){
   var feed = util.getDiscovery(); 
   var feed_data = feed.data;
   this.setData({
     feed:feed_data,
     feed_length:feed_data.length
   });
  },
  nextLoad:function(){
    var next = util.discoveryNext();
    var next_data = next.data;
    this.setData({
      feed : this.data.feed.concat(next_data),
      feed_length : this.data.feed.length + next_data.length
    });
  }
})