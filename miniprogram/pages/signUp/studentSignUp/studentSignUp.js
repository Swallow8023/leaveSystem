// pages/signUp/studentSignUp/studentSignUp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    ID: '',
    tutor: '',
    sUnit: [['一大队','二大队','三大队','四大队','五大队','六大队',], ['24队', '25队', '26队']],
    sIndex: [4, 0],

    tUnit: [["文理学院",'计算机学院','前沿交叉学科学院',"电子科学学院","智能科学学院 ","系统工程学院",
    "空天科学学院","国际关系学院","信息通信学院","电子对抗学院","气象海洋学院","军事基础教育学院",], ['计算科学系',"系所2","系所3","系所4"]],
    tIndex: [1, 0]
  },

  /**
   * 设置学号
   */
  setID: function (e){
    this.setData({
      ID: e.detail.value
    })
  },

  /**
   * 设置姓名
   */
  setName:function (e){
    this.setData({
      name: e.detail.value
    })
  },

  /**
   * 学生单位选择器
   */
  sUnitPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sIndex: e.detail.value
    })
  },

  sUnitPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      sUnit: this.data.sUnit,
      sIndex: this.data.sIndex
    };
    data.sIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.sIndex[0]) {
          case 0:
            data.sUnit[1] = ['1队', '2队', '3队', '4队','5队'];
            break;
          case 1:
            data.sUnit[1] = ['6队', '7队', '8队', '9队', '10队'];
            break;
          case 2:
            data.sUnit[1] = ['14队', '15队', '16队'];
            break;
          case 3:
            data.sUnit[1] = ['19队', '20队', '21队'];
            break;
          case 4:
            data.sUnit[1] = ['24队', '25队', '26队'];
            break;
          case 5:
            data.sUnit[1] = ['27队', '28队'];
            break;
        }
        data.sIndex[1] = 0;
        break;
    }
    console.log(data.sIndex);
    this.setData(data);
  },

  /**
   * 导师单位选择器
   */
  tUnitPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      tIndex: e.detail.value
    })
  },

  tUnitPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      tUnit: this.data.tUnit,
      tIndex: this.data.tIndex
    };
    data.tIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.tIndex[0]) {
          case 0:
            data.tUnit[1] = ["系所0","系所1","系所2","系所3","系所4"];
            break;
          case 1:
            data.tUnit[1] = ['计算科学系',"系所2","系所3","系所4"];
            break;
          case 2:
            data.tUnit[1] = ["系所0","系所1","系所2","系所3","系所4"];
            break;
          case 3:
            data.tUnit[1] = ["系所0","系所1","系所2","系所3","系所4"];
            break;
          case 4:
            data.tUnit[1] = ["系所0","系所1","系所2","系所3","系所4"];
            break;
          case 5:
            data.tUnit[1] = ["系所0","系所1","系所2","系所3","系所4"];
            break;
          case 6:
            data.tUnit[1] = ["系所0","系所1","系所2","系所3","系所4"];
            break;
          case 7:
            data.tUnit[1] = ["系所0","系所1","系所2","系所3","系所4"];
            break;
          case 8:
            data.tUnit[1] = ["系所0","系所1","系所2","系所3","系所4"];
            break;
          case 9:
            data.tUnit[1] = ["系所0","系所1","系所2","系所3","系所4"];
            break;
          case 10:
            data.tUnit[1] = ["系所0","系所1","系所2","系所3","系所4"];
            break;
          case 11:
            data.tUnit[1] = ["系所0","系所1","系所2","系所3","系所4"];
            break;
          
        }
        data.tIndex[1] = 0;
        break;
    }
    console.log(data.tIndex);
    this.setData(data);
  },

  /**
   * 绑定信息
   */
  bind: function (e){
    console.log("学生注册信息已提交，正在与微信绑定")
  }
})