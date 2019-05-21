Component({
  properties: {
    value:{
      type:Number,
      value:1,
    }
  },
  methods: {
    add() {
      this.setData({
        value: this.properties.value + 1
      })
    },
    dec() {
      this.setData({
        value: this.properties.value - 1
      })
    },
  },
  observers:{
    value:function(val){
      this.triggerEvent("valueChange",val)
    }
  }
})