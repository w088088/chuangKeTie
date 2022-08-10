// index.js
Page({
  data: {
   list:[],
   page:1,
   pageCont:4
  },  
  onLoad:function(){
   this.getList()
  },
  getList(){
    wx.request({
      url: 'https://api-v2.chuangkit.com/mobile/main/getSceneDetail.do?page_no='+this.data.page,
      success:res=>{
        console.log(res.data.body.data.sceneDetail);
        this.setData({
          list:this.data.list.concat(...res.data.body.data.sceneDetail)
        })
      }
    })
  },
  onReachBottom(){
    if(this.data.page<4){
      this.setData({
        page:this.data.page+1
      })
      this.getList()
    }
  }
})
