var app = getApp();
Page({
  data: {
    mes: "",
    title: "",
    keyheight: "",
    input_height: "",
    input1: false,
    input2: false,
    keyheight_value: 0,
    pic_open: false,
    time: false,
    img: [],
    max_img: 4,
    now_img: 0,
  },
  //回到上一个页面
  back: function () {
    wx.navigateBack({
      delta: 1
    })
  },

  //聚焦标题
  focus_title: function (e) {
    var that = this;
    var h = e.detail.height + 40;
    var h2 = 980 - e.detail.height * 2;
    this.setData({
      keyheight: "height: " + h + "px;",
      input_height: "height:" + h2 + "rpx;",
      keyheight_value: e.detail.height,
      input1: true,
      pic_open: false,
    })

  },

  //聚焦内容
  focus_mes: function (e) {
    var that = this;
    var h = e.detail.height + 40;
    var h2 = 980 - e.detail.height * 2;
    this.setData({
      keyheight: "height: " + h + "px;",
      input_height: "height:" + h2 + "rpx;",
      input2: true,
      pic_open: false,
    })
  },

  //标题失焦
  repair1: function () {
    var that = this;
    that.setData({
      input1: false,
    })
    if (that.data.pic_open == false && that.data.input1 == false && that.data.input2 == false) {
      that.setData({
        keyheight: "",
        input_height: ""
      })
    } else {
      that.setData({
        pic_open: false,
      })
    }

  },

  //内容失焦
  repair2: function () {
    var that = this;
    this.setData({
      input2: false,
    })
    if (this.data.pic_open == false && this.data.input1 == false && this.data.input2 == false) {
      this.setData({
        keyheight: "",
        input_height: ""
      })
    } else {
      this.setData({
        pic_open: false,
      })
    }
  },
  //上传照片
  pic_add: function () {
    var that=this;
    //超过上传图片张数
    if (this.data.now_img > this.data.max_img) {
      wx.showToast({
        title: '已达上传上限',
        icon: 'none',
        duration: 1500,
        mask: false,
      });
    }
    //上传
    else {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album'],
        success: (result) => {
          //单次上传超过可上传张数  
          if (result.tempFilePaths.length + that.data.now_img > this.data.max_img) {
            //要上传到第几张
            var n = that.data.max_img - that.data.now_img;
            //不上传的张数
            var m = result.tempFilePaths.length - n;
            result.tempFilePaths.splice(n + 1, m)
          }
          var upTask = wx.uploadFile({
            url: "https://www.baidu.com",
            filePath:result.tempFilePaths ,
            name:'img' ,
            formData: {},
            success: (result2)=>{
              console.log(result2);
              that.setData({
                //改成后端传来的地址
                img: that.data.img.concat(result2.src),
                now_img: that.data.now_img + 1,
              })
            },
            fail: ()=>{console.log("无法上传照片")},
            complete: ()=>{}
          });
        },
        fail: () => {},
        complete: () => {},
      });
    }
  },

  //删除照片
  img_del: function (e) {
    var that = this;
    console.log(e);
    that.data.img.splice(e.target.id, 1);
    this.setData({
      now_img: this.data.now_img - 1,
      img: this.data.img,
    })
    var reqTask = wx.request({
      url: 'https://www.baidu.com',
      data: {
        src:e.src,
      },
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        
      },
      fail: ()=>{console.log("无法完成删除图片")},
      complete: ()=>{}
    });
  },
  //点击照片
  go_pic: function () {
    var that = this;
    var h = this.data.keyheight_value + 40;
    var h2 = 980 - this.data.keyheight_value * 2;
    this.setData({
      pic_open: true,
      keyheight: "height: " + h + "px;",
      input_height: "height:" + h2 + "rpx;",
    })
  },

  //相机
  go_camera: function () {
    this.setData({
      bottom: "true"
    })
    //超过单次贴图片张数
    if (this.data.now_img > this.data.max_img) {
      wx.showToast({
        title: '已达上传上限',
        icon: 'none',
        duration: 1500,
        mask: false,
      });
    }
    //拍照
    else {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['camera'],
        success: (result) => {
          var upTask = wx.uploadFile({
            url: 'https://bilibili.com',
            filePath:result.tempFilePaths ,
            name:'img' ,
            formData: {},
            success: (result2)=>{
              console.log(result2)
              this.setData({
                // 换成后台地址
                img: this.data.img.concat(result2.tempFilePaths),
                now_img: this.data.now_img + 1,
              })
            },
            fail: ()=>{console.log("拍照上传失败")},
            complete: ()=>{}
          }); 
        },
        fail: () => {},
        complete: () => {}
      });
    }
  },

  //输入标题
  title_input: function (e) {
    this.setData({
      title: e.detail.value,
    })
  },
  //输入内容
  mes_input: function (e) {
    console.log(e);
    this.setData({
      mes: e.detail.text,
    })
  },
  //提交数据
  sumbit: function () {
    var that = this
    that.setData({
      pic_open: true,
    })
    //确认弹窗
    wx.showModal({
      title: '',
      content: '是否发帖',
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
              openid:app.data.openid,
              mes: that.data.mes,
              title: that.data.mes,
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
                title: '发帖成功',
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