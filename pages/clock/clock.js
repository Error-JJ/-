// pages/clock/clock.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    speciallist: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var reqTask = wx.request({
      url: "https://bilibili.com",
      data: {
        openid:"",
      },
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result);
        this.setData({
          speciallist: [
             { date: '2020-05-13', background: 'yellow', text:'文字1',color:'' },
             { date: '2020-04-14', background: 'red', text: '文字2'  },
             { date: '2020-04-15', background: 'bule', text: '文字' },
             { date: '2020-04-16', background: 'orange', text: '文字' },
             { date: '2020-04-17', background: 'white', text: '文字' },
           ],
         })
      },
      fail: ()=>{
        wx.showToast({
          title: '无法查询打卡记录',
          icon: 'none',
          duration: 1500,
        })
      },
      complete: ()=>{}
    });
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