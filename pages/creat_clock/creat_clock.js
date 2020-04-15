var app = getApp();
Page({
  data: {
    temp: "",
    temp2:"36.0",
    out: false,
    doubt: false,
    sure: false,
    touch: false,
    close:true,
    tem1:[36,37,38,39,40,41],
    tem2:[0,1,2,3,4,5,6,7,8,9],
    unheal:[],
    unheal_all: ["无","发热","咳嗽","胸闷","腹泻乏力","其他"],
  },

    //输入温度
    bindChange:function(e){
      var ch=e.detail.value
      this.setData({
        temp2:this.data.tem1[ch[0]]+"."+this.data.tem2[ch[1]],
      })
    },
    //确认温度
    sure_tem:function(e){
      var ch=e.detail.value
      this.setData({
        temp:this.data.temp2,
        close:true,
      })
    },

  //收起拉起温度栏
  close: function (e) {
    var ch=!this.data.close;
    this.setData({
      close:ch,
    })
  },
  //回到上一个页面
  back: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  //外地
  out:function(e){
    this.setData({
      out:e.detail.value,
    })
  },

  //疑诊
  double:function(e){
    this.setData({
      doubt:e.detail.value,
    })
  },

  //确诊
  sure:function(e){
    this.setData({
      sure:e.detail.value,
    })
  },

  //接触
  touch:function(e){
    this.setData({
      touch:e.detail.value,
    })
  },
  //不适症状
  unheal:function(e){
    this.setData({
      unheal:e.detail.value,
    })
  },

  //提交
  sumbit: function () {
    var that = this;
    wx.showModal({
      title: '',
      content: '是否提交',
      confirmColor: 'rgb(255, 70, 70)',
      success: (result) => {
        //确认
        if (result.confirm) {
          //加载弹窗
          wx.showLoading({
            title: "提交中",
          });
          //请求服务器
          var reqTask = wx.request({
            url: 'https://www.bilibili.com/',
            data: {
              openid: app.data.openid,
              temp: that.data.temp,
              out: that.data.out,
              doubt: that.data.double,
              sure: that.data.sure,
              touch: that.data.touch,
              unheal: that.data.unheal,
            },
            header: {
              'content-type': 'application/json'
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: (result) => {
              console.log(result);
              //加载弹窗关闭
              wx.hideLoading();
              // 返回上一页
              wx.navigateBack({
                delta: 1
              })
              // 成功弹窗
              wx.showToast({
                title: '打卡成功',
                icon: 'sucess',
                duration: 1500,
              });
            },
            fail: () => {
              wx.showToast({
                title: '服务器繁忙',
                icon: 'none',
                duration: 1500,
              });
            },
            complete: () => {}
          });
        } else {}
      },
    });

  },
})