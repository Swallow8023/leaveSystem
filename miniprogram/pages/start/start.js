// pages/start/start.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 检查当前微信用户是否已注册
   */
  onLoad: function(options) {
    //检查云端数据库，判断是否已经注册，并跳到相应界面

    //已注册为学生，跳到学生界面
    //已注册为老师，跳到老师界面
    //已注册为队干部，跳到队干部界面
    //还未注册，进入当前界面进行注册

  },

  /**
   * 按钮点击事件处理函数
   */
  amStudent: function(e){
    console.log("选择人员身份：学生")
    //跳转到学生注册页面
    wx.redirectTo({
      url: '../signUp/studentSignUp/studentSignUp'
    })
  },

  amTeacher: function(e){
    console.log("选择人员身份：教员")
  },

  amTeamCadres: function(e){
    console.log("选择人员身份：队干部")
  },

})