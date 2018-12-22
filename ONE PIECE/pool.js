const mysql=require('mysql');
//创建连接池对象
var pool=mysql.creatPool(
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'hz',
  connectionLimit:20
);
 module.exports=pool;
