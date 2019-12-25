// var buf = new Buffer(256);
// var len = buf.write("edu.aliyun.com");
// console.log("写入字节数 : "+  len);
// console.log("读取字节数 : "+  buf.toString());

// buf = new Buffer(26);
// for (var i = 0 ; i < 26 ; i++) {
//     buf[i] = i + 97;
// }
// console.log(buf.toString('ascii'));
// // 输出: abcdefghijklmnopqrstuvwxyz
// console.log(buf.toString('ascii',0,5));
// // 输出: abcde
// console.log(buf.toString('utf8',0,5));
//  // 输出: abcde
//  console.log(buf.toString(undefined,0,5));
// 使用 'utf8' 编码, 并输出: abcde

// var buf = new Buffer('edu.aliyun.com');
// var json = buf.toJSON(buf);
// console.log(json);

// var buffer1 = new Buffer('阿里云大学 ');
// var buffer2 = new Buffer('edu.aliyun.com');
// var buffer3 = Buffer.concat([buffer1,buffer2]);
// console.log("buffer3 内容: " + buffer3.toString());

// var buffer1 = new Buffer("ABC");
// var buffer2 = new Buffer("ABCD");
// var result = buffer1.compare(buffer2);
// console.log(result, 'result')
// if (result < 0) {
//   console.log(buffer1 + " 在 " + buffer2 + "之前");
// } else if (result == 0) {
//   console.log(buffer1 + " 与 " + buffer2 + "相同");
// } else {
//   console.log(buffer1 + " 在 " + buffer2 + "之后");
// }

// var buffer1 = new Buffer('ABC');
// var buffer2 = new Buffer(3);
// buffer1.copy(buffer2);
// console.log(buffer2.toString(), 'buffer2')

var buffer1 = new Buffer('1234');
var buffer2 = buffer1.slice(0,1)
console.log(buffer1.length);