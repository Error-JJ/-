var app = getApp();
Page({
  data: {
    mes:[
    {
    adress:"",
    water_pay:"",
    water_num:"",
    electricity_num:"",
    electricity_pay:"",
    manage_pay:"",
    date:"",
    scrolltop:"0",
    }
    ]
  },

  //回到上一个页面
  back: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  
    // 回到顶部
    go_top: function (e) {
      this.setData({
        scrolltop: 0,
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var reqTask = wx.request({
      url: 'https://www.baidu.com/',
      //header: {'content-type':'application/json'},
      data:{openid:app.data.openid},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result);
        this.setData({
          mes:[
            {
            adress:"B-2203",
            water_pay:"331.2",
            water_num:"23.4",
            electricity_num:"20",
            electricity_pay:"7",
            manage_pay:"1",
            date:"2020-10"
            },
            {
              adress:"B-2203",
              water_pay:"1.2",
              water_num:"2453.4",
              electricity_num:"20",
              electricity_pay:"7",
              manage_pay:"1",
              date:"2020-3"
              }
            ]
        })
      },
      fail: ()=>{
        wx.navigateBack({
          delta: 1
        })
        wx.showToast({
          title: '无法打开报修页面',
          icon: 'none',
          duration: 1500,
        })
      },
      complete: ()=>{}
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

})