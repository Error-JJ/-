Page({
  data: {
    placard: [],
    triggered: false,
    forum_id: "",
    _freshing: false,
  },
  // 回到顶部
  go_top: function (e) {
    this.setData({
      scrolltop: 0,
    })
  },
  //回到上一个页面
  back: function () {
    wx.navigateBack({
      delta: 1
    })
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
          placard: [{
              placard_name: "通过审核",
              placard_message: "这次终于不跳票了这次终于不跳票了这次终于不跳票了这次终于不跳票了",
              placard_date: "2020-3-22",
            },
            {
              placard_name: "预约成功",
              placard_message: "这次终于不跳票了",
              placard_date: "2020-3-22",
            }
          ]
        })
      },
      fail: () => {
        wx.navigateBack({
          delta: 1
        })
        wx.showToast({
          title: '无法打开页面',
          icon: 'none',
          duration: 1500,
        })
      },
      complete: () => {}
    });
  },
  //刷新
  onRefresh() {
    if (this._freshing) return
    this._freshing = true
    setTimeout(() => {
      this.setData({
        triggered: false,
      })
      this._freshing = false
    }, 1000)
    // 刷新请求
    var reqTask = wx.request({
      url: 'https://www.bilibili.com/',
      //header: {'content-type':'application/json'},
      data: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        this.setData({
          title: "FF6重置版要发售了",
          placard: [{
            placard_name: "tomcat",
            placard_message: "这次终于不跳票了",
            placard_date: "2020-3-22",
          }]
        })
      },
      fail: () => {
        wx.navigateBack({
          delta: 1
        })
        wx.showToast({
          title: '无法打开页面',
          icon: 'none',
          duration: 1500,
        })
      },
      complete: () => {}
    });
  },

})