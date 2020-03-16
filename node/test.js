var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});


import Sequelize from 'sequelize';
let sequelize = new Sequelize('database', 'username', 'password', {
 host: 'localhost',
 port: 3306,
 dialect: 'mysql',
 dialectOptions: {
  socketPath: '/tmp/mysql.sock' // 指定套接字文件路径
 },
 pool: {
  max: 5,
  min: 0,
  idle: 10000
 }
});
