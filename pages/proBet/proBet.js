// pages/proBet.js
var util = require("../../util/ball.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentBetId: null,
    isShared: false,
    balls: [{}],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showLoading({
      title: '加载中',
    })
    if (!!options.params) {
      let params = JSON.parse(decodeURIComponent(options.params))
      console.log("share params: " + JSON.stringify(params))
      this.setData({
        isShared: true,
        balls: params.balls,
        currentBetId: params.currentBetId
      })
      this.init()
    } else {
      this.setData({
        currentBetId: options.currentBetId
      })
      this.init()
      this.getRandom()
    }
    wx.hideLoading({
      success: (res) => {},
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

/**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    console.log('分享')
    let title = '看看怎么样？'
    debugger
    let params = {
      balls: this.data.balls,
      currentBetId: this.data.currentBetId
    }
    console.log("share params: " + JSON.stringify(params))
    return {
      title: title,
      path: 'pages/proBet/proBet?params=' + encodeURIComponent(JSON.stringify(params))
    }
  },


  init: function () {
    let that = this;
    switch (that.data.currentBetId) {
      case "1":
        that.setData({
          currentBet: {
            "id": 1,
            "betName": "双色球",
            "redBallNum": 6,
            "blueBallNum": 1,
            "redBallRange": 33,
            "blueBallRange": 16,
            "icon": "shuangseqiu",
            "createTime": "2022-05-01T12:12:21+08:00",
            "updateTime": "2022-05-01T12:12:21+08:00",
            "createUser": "1",
            "createUserName": "孔征",
            "updateUser": "1",
            "updateUserName": "孔征"
          }
        })
        break
      case "2":
        that.setData({
          currentBet: {
            "id": 2,
            "betName": "七乐彩",
            "redBallNum": 7,
            "blueBallNum": 0,
            "redBallRange": 30,
            "blueBallRange": 0,
            "icon": "qilecai",
            "createTime": "2022-05-01T12:12:21+08:00",
            "updateTime": "2022-05-01T12:12:21+08:00",
            "createUser": "1",
            "createUserName": "孔征",
            "updateUser": "1",
            "updateUserName": "孔征"
          }
        })
        break;
      case "3":
        that.setData({
          currentBet: {
            "id": 3,
            "betName": "3D",
            "redBallNum": 3,
            "blueBallNum": 0,
            "redBallRange": 0,
            "blueBallRange": 0,
            "icon": "3D",
            "createTime": "2022-05-01T12:12:21+08:00",
            "updateTime": "2022-05-01T12:12:21+08:00",
            "createUser": "1",
            "createUserName": "孔征",
            "updateUser": "1",
            "updateUserName": "孔征"
          }
        })
        break;
      case "4":
        that.setData({
          currentBet: {
            "id": 4,
            "betName": "大乐透",
            "redBallNum": 5,
            "blueBallNum": 2,
            "redBallRange": 35,
            "blueBallRange": 12,
            "icon": "daletou",
            "createTime": "2022-05-01T12:12:21+08:00",
            "updateTime": "2022-05-01T12:12:21+08:00",
            "createUser": "1",
            "createUserName": "孔征",
            "updateUser": "1",
            "updateUserName": "孔征"
          }
        })
        break;
      default:
        break;
    }
  },


  getRandom: function () {
    let that = this
    let temp = []
    for (let index = 0; index < 5; index++) {
      switch (that.data.currentBetId) {
        case "1":
          // 双色球
          let shuangRed = util.getRandomBalls(that.data.currentBet.redBallNum, 1, that.data.currentBet.redBallRange)
          let shuangBlue = util.getRandomBalls(that.data.currentBet.blueBallNum, 1, that.data.currentBet.blueBallRange)
          temp.push({
            red: shuangRed,
            blue: shuangBlue
          })
          break;
        case "2":
          let qiRed = util.getRandomBalls(that.data.currentBet.redBallNum, 1, that.data.currentBet.redBallRange)
          temp.push({
            red: qiRed
          })
          break;
        case "3":
          let san1 = util.getRandomBalls(1, 0, 9)
          let san2 = util.getRandomBalls(1, 0, 9)
          let san3 = util.getRandomBalls(1, 0, 9)
          temp.push({
            red: [san1, san2, san3]
          })
          break;
        case "4":
          // 大乐透
          let daletouRed = that.getRandomBalls(that.data.currentBet.redBallNum, 1, that.data.currentBet.redBallRange)
          let daletouBlue = that.getRandomBalls(that.data.currentBet.blueBallNum, 1, that.data.currentBet.blueBallRange)
          temp.push({
            red: daletouRed,
            blue: daletouBlue
          })
          break;
      }
    }
    that.setData({balls: temp})
  },
})