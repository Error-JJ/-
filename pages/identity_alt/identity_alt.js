var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    house:[],
    home_height:[],
    home_num:[],
    name:"",
    id:"",
    adress:"门牌号",
    adress_value:[0,0,0],
    phone:"",
    close:true,
  },
  //回到上一个页面
  back: function () {
    wx.navigateBack({
      delta: 1
    })
  },
    //输入姓名
    nameChange:function(e){
      var ch=e.detail.value
      this.setData({
        name:ch,
      })
    },
    //输入身份证
    idChange:function(e){
      var ch=e.detail.value
      this.setData({
        id:ch,
      })
    },
    //输入电话
    phoneChange:function(e){
      var ch=e.detail.value
      this.setData({
        phone:ch,
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
        adress:this.data.house[ch[0]]+"-"+this.data.home_height[ch[1]]+this.data.home_num[ch[2]],
        close:true,
      })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //加载数据
    var that = this;
        //请求服务器
        var reqTask = wx.request({
          url: 'https://www.bilibili.com/',
          data: {
            openid:app.data.openid,
            adress:options.adress,
          },
          header: {'content-type':'application/json'},
          method: 'Get',
          dataType: 'json',
          responseType: 'text',
          success: (result)=>{
            console.log(result)
            that.setData({
            name:"雨宫莲",
            id:"6516984",
            adress:"B-123",
            phone:"416916196",
            })
          },
          fail: ()=>{
            wx.navigateBack({
              delta: 1
            })
            wx.showToast({
              title: '服务器繁忙',
              icon: 'none',
              duration: 1500,
            });
          },
          complete: ()=>{}
        });
      //加载门牌号
    var house=this.data.house;
    var h=this.data.home_height;
    var n=this.data.home_num;
    for(var i=0;i<=25;i++){
      house.push(String.fromCharCode((65 + i)))
    }
    for(var i=1;i<=30;i++){
      h.push(i)
    }
    for(var i=1;i<=8;i++){
      n.push(i)
    }
    this.setData({
      house:house,
      home_height:h,
      home_num:n,
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
              id:that.data.id,
              adress:this.data.adress,
              name:this.data.name,
              phone:this.data.phone,
            },
            header: {'content-type':'application/json'},
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
              console.log(result);
              //加载弹窗关闭
              wx.hideLoading();
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

  //删除验证
  sumbit_del:function(){
    var that = this;
    wx.showModal({
      title: '',
      content: '是否要删除此验证',
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
              id:that.data.id,
              adress:this.data.adress,
            },
            header: {'content-type':'application/json'},
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
              console.log(result);
              //加载弹窗关闭
              wx.hideLoading();
              wx.navigateBack({
                delta: 1
              })
              // 成功弹窗
              wx.showToast({
                title: '删除成功',
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