// components/icons/icons.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    jump(e){
      wx.navigateTo({
        url: "/pages/scanDetail/scanDetail?id="+e.target.dataset.id+"&n="+e.target.dataset.name,
      })
    }
  },
  lifetimes:{
    attached(){
     wx.request({
       url: 'https://api-v2.chuangkit.com/mobile/main/getMainMiniProgramHomeInfo.do',
       success:res=>{
         console.log(res.data.body.data.scene);
         this.setData({
           list:res.data.body.data.scene
         })
       }
     })
    }
  }
})
