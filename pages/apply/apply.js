var app = getApp();
Page({
  data: {
    mes:"",
    state_num:0, 
    date:"",
    adress_all:app.data.adress_all,
    adress_value:"0",
    close:true,
    adress:"门牌号"
  },

  //回到上一个页面
  back: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  //输入内容
  input:function(e){
    this.setDate({
      mes:e.detail.value,
    })
  },
  //展开下拉栏
  show:function(){
    this.setData({
      close:false,
    })
  },
  //关闭下拉栏
  close:function(){
    this.setData({
      close:true,
    })
  },
    //输入地址
    bindChange:function(e){
      var ch=e.detail.value
      this.setData({
        adress_value:ch,
      })
    },
      //确定地址
      sure_tem:function(){
        var ch=this.data.adress_value;
        this.setData({
          adress:this.data.adress_all[ch[0]],
          close:true,
        })
      },
  //提交
  sumbit:function(){
    var that = this;
    wx.showModal({
      title: '',
      content: '是否提交',
      confirmColor: 'rgb(255, 70, 70)',
      success: (result) => {
        //确认
        if(result.confirm){
          //加载弹窗
        wx.showLoading({
          title: "提交中",
        });
        //请求服务器
          var reqTask = wx.request({
            url: 'https://www.bilibili.com/',
            data: {
              openid:app.data.openid,
              message:this.data.mes,
              adress:this.data.adress,
            },
            header: {'content-type':'application/json'},
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
              console.log(result);
              that.setData({
                state_num:1,
              });
              //加载弹窗关闭
              wx.hideLoading();
              // 成功弹窗
              wx.showToast({
                title: '提交成功',
                icon: 'sucess',
                duration: 1500,
              });
            },
            fail: ()=>{
              wx.showToast({
                title: '服务器繁忙',
                icon: 'none',
                duration: 1500,
              });
            },
            complete: ()=>{}
          });
        }
        else{}
      },
    });
   
  },

  //提交2
  sumbit2:function(){
    var that = this;
    wx.showModal({
      title: '',
      content: '是否申请',
      confirmColor: 'rgb(255, 70, 70)',
      success: (result) => {
        //确认
        if(result.confirm){
          //加载弹窗
        wx.showLoading({
          title: "提交中",
        });
        //请求服务器
          var reqTask = wx.request({
            url: 'https://www.baidu.com/',
            data: {
              openid:"",
              dizhi:"",
            },
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
              that.setData({
                state_num:0,
              });
              //加载弹窗关闭
              wx.hideLoading();
              // 成功弹窗
              wx.showToast({
                title: '申请成功',
                icon: 'sucess',
                duration: 1500,
              });
            },
            fail: ()=>{
              wx.showToast({
                title: '服务器繁忙',
                icon: 'none',
                duration: 1500,
              });
            },
            complete: ()=>{}
          });
        }
        else{}
      },
    });
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    var reqTask = wx.request({
      url: 'https://www.bilibili.com',
      data: {
        openid:"",
        dizhi:"",
      },
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(options);
        this.setData({
          state_num:0,
        })
      },
      fail: ()=>{
        wx.navigateBack({
          delta: 1
        })
        wx.showToast({
          title: '无法页面',
          icon: 'none',
          duration: 1500,
        })
      },
      complete: ()=>{}
    });
  },

})