// pages/mine/index.js
const util = require('../../utils/util.js')
const common = require('../../utils/common.js')
const app = getApp()

Page({
  ...util,
  ...common,
  data: {
    modules: [{
        icon: 'http://aliyun121.icjs.ink/resource/iwhale-ui/address.png',
        title: '我的地址'
      },
      {
        icon: 'http://aliyun121.icjs.ink/resource/iwhale-ui/order.png',
        title: '我的订单'
      },
      {
        icon: 'http://aliyun121.icjs.ink/resource/iwhale-ui/about-us.png',
        title: '关于我们'
      }
    ],
    userInfo: {},
    hasUserInfo: false
  },
  handleLogout() {
    this.setData({
      userInfo: {}
    })
    this.setStorageSync('userInfo', {})
    wx.navigateTo({
      url: '/pages/login/index'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShow() {
    this.setData({
      userInfo: this.getStorageSync('userInfo')
    })
   
  }
})