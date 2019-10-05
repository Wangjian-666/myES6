/**
 * Created by wangjian on 2019/10/3.
 */
/*
 Math 内置对象 具有数学常数和函数的属性方法 不是一个函数对象
 以下是常用的属性和方法
 Math的所有方法对：'纯字符串数字'同样有效
 所有无法完成转换的方法都返回NaN

 */
//1Math.PI -> 圆周长和直径的比值 也就是圆周率
// console.log(Math.PI);//output:3.141592653589793

//2Math.abs() ->返回传入参数的绝对值
// console.log(Math.abs('-3.14'));//output:3.14

//3Math.cbrt() -> 返回传入参数的立方根
// console.log(Math.cbrt(27));//output:3

//4Math.ceil() -> 向上取整
// console.log(Math.ceil(3.14));//output:4

//5Math.hypot() ->返回传入参数的平方和的平方根
// console.log(Math.hypot(3,4));//output:5

//6Math.max() ->返回传入参数的最大值
// let arr = [1,2,3,4,5,8];
// console.log(Math.max.apply(null,arr));//output:8
// console.log(Math.max(...arr));//output:8

//7Math.min() ->返回传入参数的最小值
// let arr = [1,3,4,'a','b'];
// console.log(Math.min(...arr));//output:NaN

//8Math.pow(a,b) ->返回a的b次方
// console.log(Math.pow(2,4),2**4);//output:16,16

//9Math.random() ->返回随机数 [0,1)
// console.log(Math.random());//output:0.0794168531368693

//10Math.round() ->四舍五入数字
// console.log(Math.round(4.567));//output:5
// let _round = function (number) {
//     let interget = Math.trunc(number);
//     let mutiply = Math.trunc(number*10);
//     let di = mutiply - interget*10;
//     return di < 5 ? interget : interget + 1;
// };
// console.log(_round(4.3));

//11Math.sign() -> 返回数字的符号
// let arr = [-1,0,1,-0,'s',null,undefined,true];
// arr.forEach(item => {
//     console.log(Math.sign(item));
// });
/*output:-1
 0
 1
 -0
 NaN
 0
 NaN
 1
 */
//12Math.sqrt() -> 返回一个数字的平方根
// console.log(Math.sqrt(9));//output:3

//13Math.trunc() -> 返回一个数字的整数部分
// console.log(Math.trunc(1.24));//output:1