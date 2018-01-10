const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

var index = require("../data/data_index.js");
var index_next = require("../data/data_index_next.js");
var discovery = require("../data/data_discovery.js");
var discovery_next = require("../data/data_discovery_next.js");

function getData(url){
  return new Promise(function(resolve,reject){
    /**
     * wx.request  是腾讯微信封装好的一个request请求
    */
    wx.request({
      //请求地址
      url:url,
      //请求参数
      data:{},
      //请求头
      header:{
        //'content-type': 'application/json' // 默认值
      },
      success:function(res){
        console.log("success");
        resolve(res);
      },
      fail:function(res){
        reject(res);
        console.log("failed");
      }
    })
  });
}
function getData2(){
  return index.index;
}
function getNext(){
  console.log(index_next.next)
  return index_next.next;
}
function getDiscovery(){
  return discovery.discovery;
}
function discoveryNext(){
  return discovery_next.next;
}
module.exports.getData = getData;
module.exports.getData2 = getData2;
module.exports.getNext = getNext;
module.exports.getDiscovery = getDiscovery;
module.exports.discoveryNext = discoveryNext;