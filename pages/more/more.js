// pages/more/more.js
var util = require("../../utils/util.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto:"yh",
    userInfo : {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.getUserInfo(function (userInfo){
      that.setData({
        userInfo:userInfo
      })
    });
  },
  bindViewTap:function(){
    wx.navigateTo({
      url: ''
    })
  }

  
})