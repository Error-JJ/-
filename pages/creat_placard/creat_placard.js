// pages/creat_placard/creat_placard.js
Page({

  /**
   * 页面的初始数据
   */
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
    img:[],
    max_img:4,
    now_img:0,
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
    var h = e.detail.height + 85;
    var h2 = 900 - e.detail.height * 2;
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
    var h = e.detail.height + 85;
    var h2 = 900 - e.detail.height * 2;
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
    setTimeout(function () {

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
    }, 80)
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
  pic_add:function(){ 
    //超过单次贴图片张数
    if(this.data.now_img>this.data.max_img)
    {
      wx.showToast({
        title: '已经超过可上次图片张数',
        icon: 'none',
        image: '',
        duration: 1500,
        mask: false,
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    }
    else{
    wx.chooseImage({
      count: 5,
      sizeType: ['original','compressed'],
      sourceType: ['album'],
      success: (result)=>{     
        //单次上传超过可上传张数  
        if(result.tempFilePaths.length+this.data.now_img>this.data.max_img){
          var n=this.data.max_img-this.data.now_img;
          var m=result.tempFilePaths.length-n;
          result.tempFilePaths.splice(n+1,m)
        }       
        this.setData({
          img:this.data.img.concat(result.tempFilePaths),
          now_img:this.data.now_img+result.tempFilePaths.length,
        })
      },
      fail: ()=>{},
      complete: ()=>{},
    });
    }
  },

  //删除照片
  img_del:function(e){
    var that=this;
    that.data.img.splice(e.target.id,1);
    this.setData({
      now_img:this.data.now_img-1,
      img:this.data.img,
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
    if(this.data.now_img>this.data.max_img)
    {
      wx.showToast({
        title: '已经超过可上次图片张数',
        icon: 'none',
        image: '',
        duration: 1500,
        mask: false,
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    }
    else{  
    wx.chooseImage({
      count: 5,
      sizeType: ['original', 'compressed'],
      sourceType: ['camera'],
      success: (result) => {
        this.setData({
          img:this.data.img.concat(result.tempFilePaths),
          now_img:this.data.now_img+1,
        })
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
  sumbita: function () {
    console.log(this.data.title + this.data.mes)
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