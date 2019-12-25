// 阻塞实例
// var fs = require('fs');
// var data = fs.readFileSync('./input.txt');
// console.log(data.toString())
// console.log('2')

// 非阻塞代码
// var fs = require("fs");
// fs.readFile("./input.txt", (err, res) => {
//   if (err) return console.log(err);
//   console.log(res.toString(), "res");
// });

// 引入 events 模块
var events = require("events");
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter(); // 创建事件处理程序
var connectHandler = function connected() {
  console.log("连接成功。");

  // 触发 data_received 事件
  eventEmitter.emit("data_received");
};
// 绑定 connection 事件处理程序
eventEmitter.on("connection", connectHandler);
// 使用匿名函数绑定 data_received 事件
eventEmitter.on("data_received", function() {
  console.log("数据接收成功。");
});
// 触发 connection 事件
eventEmitter.emit("connection");
console.log("程序执行完毕。");
