// pages/scanDetail/scanDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    keyword:"",
    list:[],
    arr:["最热","最新","使用最多","做多收藏","筛选"],
    page:1,
    index:"最新",
    curl:"",
    imgList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id,
      keyword:options.n
    })
    this.getlist(),
    this.getlist2()
  },
   getlist(){
     wx.request({
       url: 'https://api.chuangkit.com/home/getDesignType.do?_dataType=json&_dataClientType=3&client_type=40&second_kind_id='+this.data.id+"&n="+this.data.keyword,
       success:res=>{
         console.log(res);
         this.setData({
           list:res.data.body.secondKindInfo
         })
         console.log(this.data.list,"123");
         this.getlist2()
       }
       
     })
   },
   getlist2(){
     wx.request({
       url: "https://api.chuangkit.com/designtemplate/getWxAppTemplateByKindId.do?_dataType=json&page_no="+this.data.page+"&sid="+this.data.id+"&is_new=1&price_type="+this.data.index+"&sort_type=0&name="+this.data.keyword,
       success:res=>{
         console.log(res,"000");
         this.setData({
          curl:res.data.body.cacheUrl,
         })
         this.getimg()
       }
     })
   },
   getimg(){
     wx.request({
       url: 'https:'+this.data.curl,
       success:res=>{
         this.setData({
          imgList:res.data.body.templates
         })
         console.log(this.data.imgList,"ok");
       }
     })
   },
   sort(e){
     console.log(e,"1233211");
     this.setData({
       index:e.currentTarget.dataset.sort
     })
     this.getlist()
     this.getlist2()
   },
   jump(e){
    wx.navigateTo({
      url: '/pages/tempDetail/tempDetail?id='+e.target.dataset.id,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },
  observers:{
    "**":function(){
      console.log("有变化");
      this.getlist()
      this.getlist2()
    }
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

})