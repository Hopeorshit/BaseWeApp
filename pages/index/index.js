let app = getApp();
import {
  Index
} from '../../model/index.js';
var index = new Index;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    index.room(10,(res)=>{
      console.log(res) //这里对请求的回来数据进行处理
    })
  },

 

})