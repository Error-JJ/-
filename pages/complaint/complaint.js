// pages/creat_placard/creat_placard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mes: "",
    now:0,
    max:150,
  },
  //回到上一个页面
  back: function () {
    wx.navigateBack({
      delta: 1
    })
  },


  //输入内容
  mes_input: function (e) {
    this.setData({
      mes: e.detail.value,
      now:e.detail.cursor
    })
  },
  sumbit:function(){
    var reqTask = wx.request({
      url: 'https://www.bilibili.com/',
      data: {
        openid:"",
        message:this.data.mes,
      },
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        wx.showToast({
          title: '已经收到您的投诉',
          icon: 'none',
          image: '',
          duration: 1500,
          mask: false,
          success: (result)=>{
            
          },
          fail: ()=>{},
          complete: ()=>{}
        });
        setTimeout(() => {
          wx.navigateBack({
            delta: 1
          });
        }, 700); 
      },
      fail: ()=>{
        wx.showToast({
          title: '服务器繁忙，请稍后再试',
          icon: 'none',
          image: '',
          duration: 1500,
          mask: false,
          success: (result)=>{
            
          },
          fail: ()=>{},
          complete: ()=>{}
        });
      },
      complete: ()=>{}
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})