//app.js
import Store from 'wxministore';
let store = new Store({
  state: {
    cart: [{
      basicInfo: {
        categoryId: 36906,
        commission: 0,
        commissionType: 0,
        dateAdd: "2019-05-18 21:25:10",
        dateUpdate: "2019-05-21 11:30:55",
        gotScore: 0,
        gotScoreType: 0,
        id: 136549,
        kanjia: false,
        kanjiaPrice: 0,
        logisticsId: 0,
        minPrice: 108,
        minScore: 0,
        name: "爱立方冻干狗粮自制狗粮泰迪萨摩耶金毛中小型犬粮幼犬成犬200g",
        numberFav: 0,
        numberGoodReputation: 0,
        numberOrders: 234,
        numberSells: 344,
        originalPrice: 138,
        paixu: 0,
        pic: "https://cdn.it120.cc/apifactory/2019/05/15/354b787b-0c2f-41ab-b6d5-078cf8451279.jpg",
        pingtuan: false,
        pingtuanPrice: 0,
        recommendStatus: 0,
        recommendStatusStr: "普通",
        shopId: 0,
        status: 0,
        statusStr: "上架",
        stores: 0,
        tags: "",
        userId: 15528,
        views: 33
      },
      value:1}],
  }
})
console.log(store.$state.msg);
App({
  store: store,
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
  },

})