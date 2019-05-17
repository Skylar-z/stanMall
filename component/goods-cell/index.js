// 商品卡片
const config = require('../libs/config.js')
const default_data = {
  swiperCurrent: 0
}
const default_properties = {
  //商品标题
  name: {
    type: String,
    value: ''
  },
  //商品图片
  pic: {
    type: String,
    value: ''
  },
  //商品原价
  originalPrice: {
    type: String,
    value: ''
  },
  //商品售价
  minPrice: {
    type: String,
    value: ''
  },
  // 商品售价价格 default, primary, ghost, info, success, warning, error
  priceColor:{
    type: String,
    value: 'error'
  },
  //商品标签
  characteristic: {
    type: String,
    value: ''
  },
  //商品销量
  numberOrders: {
    type: String,
    value: ''
  },
  //原价显示
  primeCostVisible: {
    type: null,
    value: ''
  },
  //底部标签、销量显示
  footerVisible:{
    type: null,
    value: ''
  }
}
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    ...default_properties
  },
  data: {
    colors: {
      ...config.colors
    }
  }
})
