// components/mycom/mycom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    jump(e){
      wx.navigateTo({
        url: '/pages/tempDetail/tempDetail?id='+e.target.dataset.id,
      })
    },
    jump1(e){
      wx.navigateTo({
        url: '/pages/scanDetail/scanDetail?id='+e.currentTarget.dataset.id+"&name="+e.currentTarget.dataset.name,
      })
    }
  },
  lifetimes:{
  attached(){
    console.log(this.data.data);
  }
  }
})
