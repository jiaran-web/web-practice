/*
*第一种暴露方式：module.exports = value
* */

module.exports = {
    //可以暴露一个对象
    data: 'jiaran',


    test: function test() {
        console.log(this.data);
    },
    try(){
        console.log(this.test);
    }
}


//上述方式等价于：
// let obj = {
//     data: 'jiaran',
//
//
//     test: function test() {
//         console.log(this.data);
//     },
//     try(){
//         console.log(this.test);
//     }
// }
// module.exports = obj;