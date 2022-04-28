import myrequest from "../../utils/myrequest";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    navList:[],
    louList:[]

  },


  //获取banner数据
  async getBnr(){
    let {data} = await myrequest({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
    this.setData({
      list:data.message
    })
  },
  //获取导航栏数据
  async getNav(){
    let {data} = await myrequest({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"})
    this.setData({
      navList:data.message
    })
  },

    //获取楼层数据
    async getLou(){
      let {data} = await myrequest({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"})
      console.log(data.message);
      this.setData({
        louList:data.message
      })
    },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBnr()
    this.getNav()
    this.getLou()
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
    
  }
})