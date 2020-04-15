var app = getApp();
Page({
  data: {
    user_address:[],
    triggered: false,
    _freshing:false,
  },
    // 回到顶部
    go_top: function (e) {
      this.setData({
        scrolltop: 0,
      })
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
    var reqTask = wx.request({
      url: "https://bilibili.com",
      header: {'content-type':'application/json'},
      data:{
        openid:app.data.openid,
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result);
        this.setData({
          user_address:[
            {
            user_name:"雨宫莲",
            adress:"B-2030",
            state:"审核中",
          },
          {
            user_name:"雨宫莲",
            adress:"B-2030",
            state:"通过",
          }]
        }
        )
      },
      fail: ()=>{
        wx.navigateBack({
          delta: 1
        })
        wx.showToast({
          title: '无法打开此帖',
          icon: 'none',
          duration: 1500,
        })
      },
      complete: ()=>{}
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
    data:{
      openid:app.data.openid,
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: (result)=>{
      this.setData({
        user_address:[
          {
          user_name:"雨宫莲",
          adress:"咖啡屋",
          state:"通过",
        }]
      })
    },
    fail: ()=>{
      wx.navigateBack({
        delta: 1
      })
      wx.showToast({
        title: '无法打开此帖',
        icon: 'none',
        duration: 1500,
      })
    },
    complete: ()=>{}
  });
},
 
})