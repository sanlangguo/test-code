var fs = require('fs');
var data = '你好世界';
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data, 'UTF-8');
writeStream.end();

writeStream.on('finish',() => {
    console.log('写入完成')
})

writeStream.on('error',(err) => {
    console.log(err.stack, '')
})

writeStream.on('error',(err) => {
    console.log(err.stack, '')
})

console.log('程序执行完毕')