Page({
  data: {
    title:"",
    placard:[],
    triggered: false,
    forum_id:"",
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
    this.setData({
      forum_id:options.forum_id,
      title:options.title,
    })
    var reqTask = wx.request({
      url: "https://bilibili.com",
      header: {'content-type':'application/json'},
      data:{
        forum_id:options.fourm_id,
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result);
        this.setData({
            placard:[
            {
            placard_name:"tomcat",
            placard_icon:"../../pic/未知44.jpg",
            placard_message:"<ol><li>啊实打实大苏打确定</li><li><strong>12312313123123</strong></li></ol><p class=\"ql-indent-3\">123131312313</p >",
            placard_date:"2020-3-22",
          },
          {
            placard_name:"tomcat",
            placard_icon:"../../pic/未知44.jpg",
            placard_message:"这次终于不跳票了",
            placard_date:"2020-3-22",
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
      forum_id:this.data.fourm_id,
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: (result)=>{
      this.setData({
        title:"FF6重置版要发售了",
          placard:[
          {
          placard_name:"tomcat",
          placard_icon:"../../pic/未知44.jpg",
          placard_message:"这次终于不跳票了>",
          placard_date:"2020-3-22",
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