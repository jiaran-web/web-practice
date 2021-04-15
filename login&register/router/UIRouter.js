//引入Router构造函数
const {Router} = require('express');
//创建一个Router实例
const  router = new Router();


//引入path模块
let path = require('path')


//用于展示登录界面的路由，无其他任何逻辑 ----- UI路由
router.get('/login',(req,res)=>{
    let url = path(__dirname,'../public/login.html')
    res.sendFile(url)
})

//用于展示注册界面的路由，无其他任何逻辑 ----- UI路由
router.get('/register',(req,res)=>{
    let url = path(__dirname,"../public/register.html")
    res.sendFile(url)
})

module.exports = function () {
    return router;
}