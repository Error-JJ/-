// pages/placard/placard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"FF6重置版要发售了",
    placard:[
      {
        placard_name:"tomcat",
        placard_icon:"../../pic/未知44.jpg",
        placard_message:"这次终于不跳票了",
        placard_date:"2020-3-22",
      },
      {
        placard_name:"tomcat",
        placard_icon:"../../pic/未知44.jpg",
        placard_message:"这次终于不跳票了",
        placard_date:"2020-3-22",
      }
    ]
  },
  //回到上一个页面
  back:function(){ 
  wx.navigateBack({
  delta: 1
})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData(
      {title: options.title}
    )
    var reqTask = wx.request({
      url: '?forum_id='+options.fourm_id,
      //header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        this.setData(
          {placard:[]}
        )
      },
      fail: ()=>{
        console.log("帖子页面出错！")
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