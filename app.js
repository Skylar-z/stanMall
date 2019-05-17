//app.js
App({

  onLaunch: function() {

    // // 登录
    // wx.login({

    //   success: res => {
    //     var code = res.code
    //     console.log(res.code)
    //     wx.request({
    //       url: 'https://api.it120.cc/stan/user/wxapp/login',
    //       data: res.code,
    //       method: 'post',
    //       success: function(res) {
    //         console.log(res)
    //       },
    //       fail: function(res) {},
    //       complete: function(res) {},
    //     })
    //   }
    // })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res.authSetting);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
             
              wx.setStorageSync('userInfo', res.userInfo)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } 
      }
    })
  },
  globalData: {
    userInfo: ""
  }
})