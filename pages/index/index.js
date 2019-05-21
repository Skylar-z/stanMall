const util = require('../../utils/util.js')
const request = require('../../utils/request.js')
const app = getApp()
Page({
  data: {
    swipers: [{
        pic: 'https://img.alicdn.com/imgextra/i4/3076702445/O1CN01vTNR5G1TvquHhjt1Z_!!3076702445.jpg'
      },
      {
        pic: 'https://gd2.alicdn.com/imgextra/i1/3076702445/O1CN01O3wnaY1TvquJa9f7E_!!3076702445.jpg'
      }
    ],
    menus: [],
    goods: []
  },
  onLoad() {
    // const userInfo = util.getStorageSync('userInfo')
    // if(util.isEmpty(userInfo)){
    //   wx.redirectTo({
    //     url: '/pages/login/index'
    //   })
    // }

    //获取商品列表
    var option = {
      url: 'shop/goods/list'
    };
    var success = (res) => {
      if (res.code == 0) {
        this.setData({
          goods: res.data
        })
        console.log(1, this.data.goods)
      }
    }
    request.request(option, success)

    //获取分类信息
    var optionCategory = {
      url: "shop/goods/category/all"
    }
    var successCategory = (res => {
      if (res.code == 0) {
        this.setData({
          menus: res.data
        })
        console.log(this.data.menus)
      }
    })
    request.request(optionCategory, successCategory)
  },
  //商品详情跳转
  showDesc(event) {
    console.log(event)
    var id = event.target.dataset.id
    wx.navigateTo({
      url: '../descript/descript?id=' + id,
    })
  },
  //分类页面跳转
  //to do list
  toClassify(event) {
    console.log(event)
    var categoryId = event.target.dataset.categoryId;
    wx.navigateTo({
      url: '../classify/classify?id=' + categoryId,
    })
  }
})