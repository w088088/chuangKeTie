// components/theme/theme.js
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

  },
  lifetimes:{
    attached(){
      wx.request({
        url: 'https://api-v2.chuangkit.com/solutionSubject/theme.do?_dataType=json&_dataClientType=3&_dataClientType=3&client_type=40&solutionSubjectId=1&pageNum=1&pageSize=6&templatePageSize=6&type=3&device=2',
        success:res=>{
          console.log(res);
          this.setData({
            list:res.data.body.data.themes
          })
        }
      })
    }
  }
})
