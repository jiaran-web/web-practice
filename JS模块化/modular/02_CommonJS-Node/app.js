/*
* 将所有模块汇总的文件
* */


//引入模块
//自定义的模块引用时要用路径名
let module1 = require('./modules/module1');
let module2 = require('./modules/module2');
let module3 = require('./modules/module3');
let module4 = require('./modules/module4');
//第三方模块引用时直接用模块名
let uniq = require('uniq');


//模块的使用
//如何使用一个模块取决于：模块暴露的是什么（对象、函数。数组。。。）
console.log(module1.data);
//用第二种暴露方式暴露的模块，引用时根据暴露时定义的名字引用
module2.jiaran();
console.log(module3.shuzu);
//用第一种暴露方式暴露的模块，引用时可根据暴露的内容直接引用
module4();
console.log(uniq([1, 1, 2, 3, 3, 3, 4, 5, 2, 435, 43, 234,]));
