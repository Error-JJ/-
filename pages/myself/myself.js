// pages/myself/myself.js
Page({
  date:{
    userinfo:{}
  },
  load(e){
    console.log(e);
    const userinfo=e.detail;
    this.setData({userinfo})
  },
  
})