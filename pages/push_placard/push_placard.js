var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mes: "",
    title: "",
    keyheight: "",
    input_height: "",
    input2: false,
    keyheight_value: 0,
    pic_open: false,
    time: false,
    img: [],
    max_img: 4,
    now_img: 0,
    forum_id: "",
  },
  //回到上一个页面
  back: function () {
    wx.navigateBack({
      delta: 1
    })
  },


  //聚焦内容
  focus_mes: function (e) {
    var that = this;
    var h = e.detail.height + 85;
    var h2 = 900 - e.detail.height * 2;
    this.setData({
      keyheight: "height: " + h + "px;",
      input_height: "height:" + h2 + "rpx;",
      keyheight_value: e.detail.height,
      input2: true,
      pic_open: false,
    })
  },


  //内容失焦
  repair2: function () {
    var that = this;
    this.setData({
      input2: false,
    })
    if (this.data.pic_open == false && this.data.input2 == false) {
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
    //超过单次贴图片张数
    if (this.data.now_img > this.data.max_img) {
      wx.showToast({
        title: '已达上传上限',
        icon: 'none',
        image: '',
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
          if (result.tempFilePaths.length + this.data.now_img > this.data.max_img) {
            //要上传到第几张
            var n = this.data.max_img - this.data.now_img;
            //不上传的张数
            var m = result.tempFilePaths.length - n;
            result.tempFilePaths.splice(n + 1, m)
          };
          var upTask = wx.uploadFile({
            url: 'https://bilibili.com',
            filePath:result.tempFilePaths ,
            name:"img" ,
            formData: {},
            success: (result2)=>{
              console.log(result2)
              this.setData({
                img: this.data.img.concat(result2.src),
                now_img: this.data.now_img + 1,
              })
            },
            fail: ()=>{},
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
    that.data.img.splice(e.target.id, 1);
    var reqTask = wx.request({
      url: 'https://www.baidu.com',
      data: {
        src:that.data.img[e.target.id],
      },
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        
      },
      fail: ()=>{console.log("删除照片失败")},
      complete: ()=>{}
    });
    this.setData({
      now_img: this.data.now_img - 1,
      img: this.data.img,
    })
  },
  //点击照片
  go_pic: function () {
    var that = this;
    var h = this.data.keyheight_value + 85;
    var h2 = 900 - this.data.keyheight_value * 2;
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
        image: '',
        duration: 1500,
        mask: false,
        success: (result) => {

        },
        fail: () => {},
        complete: () => {}
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
            url: 'https://www.baidu.com',
            filePath: result.tempFilePaths,
            name: 'img',
            formData: {},
            success: (result2)=>{
              console.log(result2);
              this.setData({
                img: result2.tempFilePaths,
                now_img: this.data.now_img + 1,
              })
            },
            fail: ()=>{console.log("上传拍照失败")},
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
    this.setData({
      mes: e.detail.value,
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
      content: '是否回帖',
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
              img: that.data.img,
              forum_id: that.data.forum_id,
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
                title: '回帖成功',
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
        }
        else {}
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      forum_id: options.forum_id,
    })
  },

})