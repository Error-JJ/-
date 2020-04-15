var app = getApp();
Page({
  data: {
    mes: "",
    now:0,
    max:150,
  },

  //回到上一个页面
  back: function () {
    wx.navigateBack({
      delta: 1
    })
  },


  //输入内容
  mes_input: function (e) {
    this.setData({
      mes: e.detail.value,
      now:e.detail.cursor
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
            },
            header: {'content-type':'application/json'},
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
              console.log(result);
              //加载弹窗关闭
              wx.hideLoading();
              // 返回上一页
              wx.navigateBack({
                delta: 1
              })
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
})