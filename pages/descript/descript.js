const request = require('../../utils/request.js')
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    swipers: [
      // { url: 'https://gd4.alicdn.com/imgextra/i3/3076702445/O1CN01cYXd0z1TvquDWnayk_!!3076702445.jpg' },
      // { url: 'https://gd2.alicdn.com/imgextra/i1/3076702445/O1CN01O3wnaY1TvquJa9f7E_!!3076702445.jpg' }
    ],
    good: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var option = {
      url: "shop/goods/detail",
      data: {
        id: options.id
      }
    }
    var success = (res => {
      if (res.code == 0) {
        this.setData({
          good: res.data
        });
        console.log(res.data)
        console.log(this.data.good)
        var article = this.data.good.content;

    /**
     * WxParse.wxParse(bindName , type, data, target,imagePadding)
     * 1.bindName绑定的数据名(必填)
     * 2.type可以为html或者md(必填)
     * 3.data为传入的具体数据(必填)
     * 4.target为Page对象,一般为this(必填)
     * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
     */

        WxParse.wxParse('article', 'html', article, this, 5);
      }
    })

    request.request(option, success)

  },
  addtocar(){
    
  }
})