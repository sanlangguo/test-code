// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
// process.argv.forEach(function(val, index, array) {
//    console.log(index + ': ' + val, array);
// });

// 获取执行路径
console.log(process.execPath,process.argv);

// 平台信息
console.log(process.platform);
