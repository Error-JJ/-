//app.js
App({
  //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
  onLaunch: function(options){
    wx.login({
      success: (result)=>{
        var reqTask = wx.request({
          url: "",
          data: {code:result.code},
          header: {'content-type':'application/json'},
          method: 'GET',
          dataType: 'json',
          responseType: 'text',
          success: (result)=>{
            console.log(result.data.openid)
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