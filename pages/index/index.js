const util = require('../../utils/util.js')
const request = require('../../utils/request.js')
const app = getApp()
Page({
  data: {
    swipers: [
      { pic: 'https://gd4.alicdn.com/imgextra/i3/3076702445/O1CN01cYXd0z1TvquDWnayk_!!3076702445.jpg' },
      { pic: 'https://gd2.alicdn.com/imgextra/i1/3076702445/O1CN01O3wnaY1TvquJa9f7E_!!3076702445.jpg' }
    ],
    menus: [
    //   { title: '猫粮系列',  url: 'https://gd2.alicdn.com/imgextra/i2/3076702445/TB24ZbZi5qAXuNjy1XdXXaYcVXa_!!3076702445.jpg'},
    //   { title: '猫冻干',  url: 'https://gd3.alicdn.com/imgextra/i3/3076702445/O1CN011TvqqHvZQ4nYRCu_!!3076702445.jpg', },
    //   { title: '狗粮系列', url: 'https://gd3.alicdn.com/imgextra/i3/3076702445/TB2z5dFotFopuFjSZFHXXbSlXXa_!!3076702445.jpg'},
    //   { title: '狗冻干',  url: 'https://gd1.alicdn.com/imgextra/i1/3076702445/O1CN011TvqqIVYLwWcYxP_!!3076702445.jpg'}
    // 
    ],
    goods: []
  },
  onLoad(){
    // const userInfo = util.getStorageSync('userInfo')
    // if(util.isEmpty(userInfo)){
    //   wx.redirectTo({
    //     url: '/pages/login/index'
    //   })
    // }

    var option = {
      url: 'shop/goods/list'
    };

    var success = (res) => {
      if (res.code == 0) {
        this.setData({ goods: res.data })
      }
    }

    request.request(option, success)

    var optionCategory = {
      url:"shop/goods/category/all"
    }
    var successCategory = (res=>{
      if(res.code == 0 ){
        this.setData({menus:res.data})
        console.log(this.data.menus)
      }
    })
    request.request(optionCategory, successCategory)
  },
  showDesc(event){
    console.log(event)
    var id = event.target.dataset.id
    wx.navigateTo({
      url: '../descript/descript?id='+id,
    })
  },
  toClassify(event){
    console.log(event)
    var categoryId = event.target.dataset.categoryId;
    wx.navigateTo({
      url: '../classify/classify?id='+categoryId,
    })
  }
})
