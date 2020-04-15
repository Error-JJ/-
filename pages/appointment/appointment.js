var app = getApp();
Page({
  data: {
    choose1:true,
    choose2:false,
    choose3:false,
    choose_index:0,
    mes0:[],
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
      });
      break;
      case 1:this.setData({
        choose1:false,
    choose2:true,
    choose3:false,
      });
      break;
      case 2:this.setData({
        choose1:false,
    choose2:false,
    choose3:true,
      });
      break;
    }
  },
  //全部
  find_all:function(){
    this.setData({
    choose_index:0,
    })
  },

  //采购中
  find_wait:function(){
    this.setData({

    choose_index:1,
    })
  },

   //完成
   find_complete:function(){
    this.setData({

    choose_index:2,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var reqTask = wx.request({
      url: 'https://www.bilibili.com/',
      data:{
        openid:app.data.openid,
      },
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result);
        this.setData({
          mes0:[{
            title:"采购中",
            mes:"猪肉5斤，牛肉3斤",
            date:"2020-3-22",
          },{
            title:"完成",
            mes:"菜心5斤 大白菜2斤",
            date:"2020-1-12",
          }],
          mes2:[{
            title:"采购中",
            mes:"菜心5斤 大白菜2斤",
            date:"2020-1-12",
          }],
          mes3:[{
            title:"完成",
            mes:"普通口罩10个 N95口罩5个",
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