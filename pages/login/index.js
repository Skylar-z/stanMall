// pages/login/index.js
import WxValidate from '../../utils/wx-validate.js'
const util = require('../../utils/util.js')
const request = require('../../utils/request.js')
Page({
  ...util,
  data: {
    loading: false,
    loginText: '登录',
    formData: {
      username: '',
      password: ''
    },
  },
  handleInputChange(e) {
    let formData = this.data.formData
    let param = e.target.dataset.param
    let value = e.detail.value
    formData[param] = value
    this.setData({
      formData: formData
    })
  },
  handleLogin() {
    let formData = this.data.formData
    //校验表单
    if (!this.wxValidate.checkForm(formData)) {
      const error = this.wxValidate.errorList[0]
      this.showToast(error.msg)
      return false
    }
    this.setData({
      loading: true,
      loginText: '登录中...'
    })
    setTimeout(() => {
      this.showToast('登录成功')
      this.setStorageSync('userInfo', formData)
      wx.switchTab({
        url: '/pages/index/index'
      })
    }, 1000)
  },
  initValidate() {
    const rules = {
      username: {
        required: true,
        minlength: 1
      },
      password: {
        required: true,
        minlength: 1
      }
    }
    const messages = {
      username: {
        required: '请填写手机号或邮箱',
        minlength: '请输入正确的手机号或邮箱'
      },
      password: {
        required: '请填写密码',
        minlength: '请输入正确的密码'
      }
    }
    this.wxValidate = new WxValidate(rules, messages)
  },
  onLoad: function(options) {
    this.initValidate()
  },
  wechatlogin(){
    wx.login({
      success(res) {
        if (res.code) {
          var option={
            url:"/user/wxapp/login",
            data:{
              code:res.code
            }
          }
          var success=res=>{console.log(res)};
          request.request(option,success)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})