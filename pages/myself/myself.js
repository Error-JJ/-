var app = getApp();
Page({
  data:{
    notic:false,
  },
  
  onShow:function(){
    var reqTask = wx.request({
      url: 'https://www.baidu.com',
      data: {
        openid:app.data.openid,
      },
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result);
        this.setData({
          notic:false,
        })
        //查看是否有未读信息
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
})