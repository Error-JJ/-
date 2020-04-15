var app = getApp();
Page({
  data: {
    placard: [""],
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
// 已读操作
 read:function(e){
   var ch=this.data.placard;
   ch[e.currentTarget.id].read=true;
   this.setData({
    placard:ch,
   });
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
      data: {
        openid:app.data.openid
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        this.setData({
          placard: [{
              title: "通过审核",
              mes: "这次终于不跳票了这次终于不跳票了这次终于不跳票了这次终于不跳票了",
              date: "2020-3-22",
              read:false,
            },
            {
              title: "预约成功预约成功预约成功预约",
              mes: "这次终于不跳票了",
              date: "2020-3-22",
              read:true,
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
      data: {
        openid:app.data.openid,
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        console.log(result);
        this.setData({
          title: "FF6重置版要发售了",
          placard: [{
            title: "通过审核",
            mes: "这次终于不跳票了这次终于不跳票了这次终于不跳票了这次终于不跳票了",
            date: "2020-3-22",
            read:false,
          },]
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