Page({
  data: {
    mes: "",
    goods:"",
    place:"",
    img: [{src:"",show:false},{src:"",show:false},{src:"",show:false}],
  },
  //回到上一个页面
  back: function () {
    wx.navigateBack({
      delta: 1
    })
  },
 //上传照片
  pic_add: function (e) {
    //上传
    var that=this;
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album','camera'],
        success: (result) => {
          var ch= "img["+e.currentTarget.id+"].src";
          var ch2= "img["+e.currentTarget.id+"].show";
          that.setData({
            [ch]: result.tempFilePaths,
            [ch2]:true,
          })
        },
        fail: () => {},
        complete: () => {},
      }); 
  },
  //输入设备
  title_input: function (e) {
    this.setData({
      goods: e.detail.value,
    })
  },
  //输入地点
  place_input: function (e) {
    this.setData({
      place: e.detail.value,
    })
  },
  //输入内容
  mes_input: function (e) {
    this.setData({
      mes: e.detail.value,
    })
  },
  //提交数据
  sumbit: function () {
    var that = this
    //确认弹窗
    wx.showModal({
      content: '是否提交',
      confirmColor: 'rgb(255, 70, 70)',
      success: function (res) {
        //确认选项
        if (res.confirm) {
          //加载弹窗
          wx.showLoading({
            title: "提交中",
          });
          //提交数据
          var reqTask = wx.request({
            url: 'https://bilibili.com',
            data: {
              openid:"",
              mes: that.data.mes,
              goods: that.data.goods,
              place:that.data.place,
              img: that.data.img,
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
                title: '提交成功',
                icon: 'sucess',
                duration: 1500,
              });
            },
            fail: () => {
              wx.showToast({
                title: '服务器繁忙',
                icon: 'none',
                duration: 1500,
              })
            },
            complete: () => {}
          });
        } else {}
      }
    })
  },

})