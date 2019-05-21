// pages/cart/index.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [],
    totalPrice: 0,
    selected:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    //从store取出加购信息
    var cart = app.store.$state.cart;
    cart.forEach(item=>{
      item.checked = true;
    })


    this.setData({
      goods: cart
    })
    this.total()
    console.log(this.data.goods)
  },
  valuechange(event) {
    //这个value只要计算总价格，不需要回馈到购物车

  
    this.total()
  },
  total() {
    //是否选中商品


    //修改num的时候总价也要跟着改

    var total = 0;
    this.data.selected.forEach(item => {
      total += (item.basicInfo.minPrice * item.value) * 100
    })

    this.setData({
      totalPrice: total
    })
  },
  checkboxChange(e){
    //只计算总金额。提交订单时才获取所有选中数据发送。
    //维护一个selected数组，保存选中的产品
    //选中的产品是个对象，selected是数组。
    //选中产品的对象被转成了string。
    // console.log(event)
    // this.data.selected.push(event.detail.value);
    // this.data.selected.push({a:"123",b:"345"});
    // console.log(this.data.selected)
  //   console.log(e)

  // var goods2 = this.data.goods.forEach(item=>{
  //  return item.checked = true
  // })
  // console.log(goods2)
  // this.setData({goods: goods2})

  //   var index = parseInt(e.currentTarget.dataset.index);
  //   var checked = this.data.goods[index].checked;
  //   var goods = this.data.goods;
  //   goods[index].checked = !goods;
  //   this.setData({
  //     goods: goods
  //   });

  //拿到index,  将该下标的商品的check设置为！
  console.log(e)
  console.log(e.detail.value)
  var index = e.detail.value
  //展示初始图标,goods为复制的商品列表
  var checked = this.data.goods[index].checked;
  var goods = this.data.goods;
  goods[index].checked = !checked;
  this.setData({goods:goods})

  }
})