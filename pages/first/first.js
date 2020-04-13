// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mes:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var reqTask = wx.request({
      url: "https://www.baidu.com",
      header: {
        'content-type': 'application/json'
      },
      data: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        console.log(result);
        this.setData({
          mes: [{title:'阿斯利康大家啊塑料袋'},{title:'阿斯利康大家啊塑料袋'}]
        })
      },
      fail: () => {
        wx.showToast({
          title: '无法打开页面',
          icon: 'none',
          duration: 1500,
        })
      },
      complete: () => {}
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

})