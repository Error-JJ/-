
Page({
  data: {
    fourm:[],
    triggered: false,
  },
  // 回到顶部
  go_top: function (e) {
    this.setData({
      scrolltop: 0,
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
      header: {'content-type':'application/json'},
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
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var reqTask = wx.request({
      url: 'https://www.baidu.com/',
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result);
        this.setData(
          {fourm:[{
            forum_title:"标题A",
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
      fail: ()=>{console.log("社区页面出错")},
      complete: ()=>{}
    });
  },
  
})