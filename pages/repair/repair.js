// pages/repair/repair.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choose1:true,
    choose2:false,
    choose3:false,
    choose4:false,
    choose_index:0,
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

  }
})