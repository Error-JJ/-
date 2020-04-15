//app.js
App({
  //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
  data:{
    userInof:[],
    openid:"",
    adress_all:["B-2201","E-3007"],
  },
  onLaunch: function(options){
    var that=this;
    wx.getUserInfo({
      withCredentials: 'false',
      lang: 'zh_CN',
      timeout:10000,
      success: (result)=>{
        that.setData({
          userInof:result.getUserInfo
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    wx.login({
      success: (result)=>{
        var reqTask = wx.request({
          url: "https://www.baidu.com/",
          data: {
            code:result.code,
            img:"",
            name:"",
          },
          header: {'content-type':'application/json'},
          method: 'GET',
          dataType: 'json',
          responseType: 'text',
          success: (result2)=>{
            console.log(result2);
            that.data.openid="123";
          },
          fail: ()=>{
            console.log("获取openid失败")
          },
          complete: ()=>{}
        });
      },
      fail: ()=>{
        console.log("获取code失败")
      },
      complete: ()=>{}
    });
  },
  onShow: function(options){

  },
  onHide: function(){

  },
  onError: function(msg){

  },
  //options(path,query,isEntryPage)
  onPageNotFound: function(options){

  },
});