import myrequest from "../../utils/myrequest";

// pages/fenlei/fenlei.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        ceList:[],
        children:[],
        title:[],
        h:0,
        show:false,
        date:null,
        dat:null
    },
      //获取侧边栏数据
  async getCe(){
    let {data} = await myrequest({url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"})
    this.setData({
      ceList:data.message,
    })
    console.log(data.message[0].children[0].children);
  },
  onchange(event){
    //切换导航 右边的回到起点
    // console.log(event);
    let index = event.detail
    this.setData({
        title:this.data.ceList[index].cat_name,
        children:this.data.ceList[index].children[index].children
    })
},
async getdat(){
  let {data} = await myrequest({
    url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"
  })
  console.log(data);
  this.setData({
    date:data.message,
    title:data.message[0].cat_name,
    children:data.message[0].children[0].children
  })
},
tttfn(){
  wx.navigateTo({
    url: '/pages/search/search'
  })
},


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getCe()
        this.getdat()
        this.onchange()
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