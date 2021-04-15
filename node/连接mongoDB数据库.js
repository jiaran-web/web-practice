//引入mongoose
let mongoose = require('mongoose');

//1、连接数据库
mongoose.connect('mongodb://localhost:27017/test',{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

//2、绑定数据库链接的监听
mongoose.connection.on('open',function (err){
    if(err){
        console.log('连接数据库失败！！！',err);
    }else{
        console.log('连接数据库成功！！！');
        console.log('操作数据库');
    }
})