// pages/comm/comm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fourm:[],
    triggered: false,
  },
  // 回到顶部
  go_top: function () {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },
  // 滚动监听
  onPageScroll(){
    this.setData({
      hidden:"inherit",
    }
    )
    setTimeout(() => {
      this.setData({
        hidden: "hidden",
      })
    }, 3000)
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
    var reqTask = wx.request({
      url: 'https://www.bilibili.com/',
      //header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        this.setData(
          {fourm:[{
            forum_title:"标题A",
            forum_name:"DDDD",
            forum_sum:40,
            forum_id:0,
            fourm_date:"2-5",
          },
          {
            forum_title:"标题B",
            forum_name:"DDDD",
            forum_sum:40,
            forum_id:0,
            fourm_date:"2-5",
          },
          {
            forum_title:"标题C",
            forum_name:"DDDD",
            forum_sum:40,
            forum_id:0,
            fourm_date:"2-5",
          },
          {
            forum_title:"标题B",
            forum_name:"DDDD",
            forum_sum:40,
            forum_id:0,
            fourm_date:"2-5",
          },
          {
            forum_title:"标题C",
            forum_name:"DDDD",
            forum_sum:40,
            forum_id:0,
            fourm_date:"2-5",
          },
          {
            forum_title:"标题B",
            forum_name:"DDDD",
            forum_sum:40,
            forum_id:0,
            fourm_date:"2-5",
          },
          {
            forum_title:"标题C",
            forum_name:"DDDD",
            forum_sum:40,
            forum_id:0,
            fourm_date:"2-5",
          },
          {
            forum_title:"标题B",
            forum_name:"DDDD",
            forum_sum:40,
            forum_id:0,
            fourm_date:"2-5",
          },
          {
            forum_title:"标题C",
            forum_name:"DDDD",
            forum_sum:40,
            forum_id:0,
            fourm_date:"2-5",
          },
          {
            forum_title:"标题D",
            forum_name:"TAB",
            forum_sum:323,
            forum_id:2,
            fourm_date:"12-31",
          }
        ]}
        )
      },
      fail: ()=>{console.log("社区页面出错!")},
      complete: ()=>{}
    });
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

  },
  onPulling() {
    console.log("下拉")
  },

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
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        this.setData(
          {fourm:[{
            forum_title:"标题A",
            forum_name:"DDDD",
            forum_sum:40,
            forum_id:0,
            fourm_date:"2-5",
          },
          {
            forum_title:"标题A",
            forum_name:"DDDD",
            forum_sum:40,
            forum_id:0,
            fourm_date:"2-5",
          },
          {
            forum_title:"标题A",
            forum_name:"DDDD",
            forum_sum:40,
            forum_id:0,
            fourm_date:"2-5",
          }
        ]
        
      }
        )
      },
      fail: ()=>{console.log("社区页面出错!")},
      complete: ()=>{}
    });
    
  },

  onRestore() {
    console.log("复位")
  },

  onAbort() {
    console.log("终止")
  },
})