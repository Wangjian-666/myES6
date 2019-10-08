/**
 * Created by wangjian on 2019/10/8.
 */

/*
    内置对象Function 构造函数创建一个新的Function对象，在JavaScript中每个函数实际上都是一个Function对象
 */
//1Function.length 属性指明了函数行参的个数
// let fun1 = function(a,b,c) {
//     console.log(fun1.length);
// };
// fun1();//output:3

//2Function.name 属性指明了Function实例的名字
// let fun2 = function () {
//     // console.log(this.name);//output:undefined
//     console.log(fun2.name);//fun2
// };
// fun2();

//3Function.prototype Function的原型对象
// console.log(Object.getOwnPropertyDescriptors(Function.prototype));

//4Function.prototype.apply() (thisArg,[argsArray]);
// let fun3 = function () {
//     let result = 0;
//
//     for(let item of arguments) {
//         result += item;
//     }
//     this.sum = result;
//     console.log(result);
// };
// let obj = {};
// fun3.apply(obj,[1,2,3,4]);
// console.log(obj);//output:10 {sum: 10}

//5Function.prototype.bind() (thisArg,arg1,arg2,arg3)
// let fun4 = function () {
//     this.name = arguments[0];
//     this.title = arguments[1];
//     this.say = function () {
//         console.log(this.name + this.title);
//     }
// };
// let obj = {};
// let fun5 = fun4.bind(obj);
// fun5('wangjian','fe');
//
// console.log(obj,fun5);//{ name: 'wangjian', title: 'fe', say: [Function] } [Function: bound fun4]

//6Function.prototype.call() (thisArg,arg1,arg2,arg3)
// let fun6 = function (...args) {
//     this.sum = 0;
//
//     args.forEach((item) => {
//         this.sum += item;
//     })
// };
// let obj = {};
// fun6.call(obj,1,2,3,4,5);
// console.log(obj);//output:{sum:15}

//7Function.prototype.toSource()/Function.prototype.toString()