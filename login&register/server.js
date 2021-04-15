
//引入express框架
const express = require('express');
//创建服务对象
const app = express();

//引入配置好的路由器
const UIRouter = require('./router/UIRouter')
const loginRegisterRouter = require('./router/loginRegisterRouter')

//禁止服务器返回X-Powered-By,为了安全
app.disable('x-powered-by');
//使用内置中间件暴露静态资源
app.use(express.static(__dirname + '/public'));

//引入db文件，用来连接数据库
const db = require('./db/db');

//使用内置中间件用于解析post请求的urlencoded参数
app.use(express.urlencoded({extended:true}));

//逻辑：如果数据库连接成功，随后立即启动服务器，在整个过程中，无论多少次请求，数据库只连接一次。
db(()=>{
    //使用配置好的路由器
    app.use(UIRouter());
    app.use(loginRegisterRouter());



    //指定服务器运行端口号（绑定端口监听）
    app.listen(3000, (err)=>{
        if(!err) console.log('服务器启动成功！');
        else console.log(err);
    })
},(err)=>{
    console.log('数据库连接失败');
})




