Page({
  data: {
    placard: [],
  },
  //回到上一个页面
  back: function () {
    wx.navigateBack({
      delta: 1
    })
  },

  //展开
  answer: function (e) {
    var ch = "placard[" + e.target.id + "].answer";
    var res = !this.data.placard[e.target.id].answer
    this.setData({
      [ch]: res,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
    var reqTask = wx.request({
      url: 'https://bilibili.com',
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        console.log(result);
        //获取值
        this.setData({
          placard: [{
              placard_question: "tomcat",
              placard_message: "这次终于不跳票了这次终于不跳票了这次终于不跳票了",
            },
            {
              placard_question: "tomcat",
              placard_message: "这次终于不跳票\n了",
            }
          ]
        });
        //增加下拉判定字段
        for (var i = 0; i < 2; i++) {
          var ch = "placard[" + i + "].answer";
          this.setData({
            [ch]: true,
          })
          console.log(ch);
        }
      },
      fail: () => {
        console.log("帖子页面出错！")
      },
      complete: () => {}
    });
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
})