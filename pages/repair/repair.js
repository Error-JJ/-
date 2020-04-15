var app = getApp();
Page({
  data: {
    choose1:true,
    choose2:false,
    choose3:false,
    choose4:false,
    choose_index:0,
    mes0:[],
    mes1:[],
    mes2:[],
    mes3:[],
  },

  //回到上一个页面
  back: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  
  //滑动界面
  change:function(e){
    this.setData({
      choose_index:e.detail.current
    });
    switch(this.data.choose_index){
      case 0:this.setData({
        choose1:true,
    choose2:false,
    choose3:false,
    choose4:false,
      });
      break;
      case 1:this.setData({
        choose1:false,
    choose2:true,
    choose3:false,
    choose4:false,
      });
      break;
      case 2:this.setData({
        choose1:false,
    choose2:false,
    choose3:true,
    choose4:false,
      });
      break;
      case 3:this.setData({
        choose1:false,
    choose2:false,
    choose3:false,
    choose4:true,
      });
      break;
    }
  },
  //全部报修
  find_all:function(){
    this.setData({
    choose_index:0,
    })
  },

  //待处理报修
  find_wait:function(){
    this.setData({

    choose_index:1,
    })
  },

   //抢修中报修
   find_doing:function(){
    this.setData({

    choose_index:2,
    })
  },

   //已完成报修
   find_complete:function(){
    this.setData({

    choose_index:3,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var reqTask = wx.request({
      url: 'https://www.bilibili.com/',
      header: {'content-type':'application/json'},
      data:{openid:app.data.openid},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result);
        this.setData({
          mes0:[{
            title:"全部",
            mes:"爆水管加停电",
            date:"2020-3-22",
          }],
          mes1:[{
            title:"2222",
            mes:"two two two",
            date:"2020-4-14",
          }],
          mes2:[{
            title:"抢救中",
            mes:"不见了",
            date:"2020-1-12",
          }],
          mes3:[{
            title:"已完成",
            mes:"看见了",
            date:"2020-11-2",
          }]
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