const express = require('express');
const app = express();

//引入中间件使response.body能够生效
app.use(express.urlencoded({extended: true}));
//暴露静态资源
app.use(express.static(__dirname + '/public'));

// app.use('/',(req,res)=>{
//     res.send('ok')
// })
app.use('/ajax_get',(req,res)=>{
    console.log(req.query);
    res.send('get');
});
app.use('/ajax_post',(req,res)=>{
    console.log(req.body);
    res.send('post');
});

app.listen(3000,(err)=>{
    if(!err){
        console.log('成功连接js原生ajax请求服务器');
        console.log('点击链接跳转到get请求界面: http://localhost:3000/ajax_get.html ' );
        console.log('点击链接跳转到post请求界面: http://localhost:3000/ajax_post.html ' );

    }else{
        console.log('连接失败');
    }
});