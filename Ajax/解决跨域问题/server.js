//引入express
let express = require('express')
//建立服务对象
let app = express()
//暴露静态资源
app.use(express.static(__dirname + '/public'))

//建立路由
app.use('/jsonp',(req,res)=>{
    //接收可变的函数名
    let {callback} = req.query;
    //数据库中查询数据
    let data = [
        {name:'jia', age:24},
        {name:'guanyunjiao',age:18},
        {name:'guanyunjiao',age:18},
        {name:'guanyunjiao',age:18},
        {name:'guanyunjiao',age:18}
        ]
    //返回数据
    res.send(`${callback}(${JSON.stringify(data)})`);

})

//设置接口监听
app.listen(3000,(err)=>{
    if (err){
        console.log('服务器连接失败！');
    }else{
        console.log('服务器连接成功！');
    }
})