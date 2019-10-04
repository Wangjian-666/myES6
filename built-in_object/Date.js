/**
 * Created by wangjian on 2019/10/3.
 */
/*
 Date 内置对象

 1，FullYear ->年份：1970后的具体年份2019
 2，month ->月份：0-11
 3，date ->日期(哪一天)：1-31(2月份最多有29)
 4，day ->星期几:0-6(0表示星期天)
 5，hours ->小时:0-59
 6，minute ->分钟:0-59
 7，seconds ->秒种:0-59
 8，milliseconds ->毫秒：1-999

 因为Date对象的方法较简单，所以后置内容注释一律用单引号
 Date对象的操作主要涵两大类：1获取时间get，2设置时间set
 另外一种有用的方式是获取相应的时间格式的字符串
 */

//1Date.prototype Date构造函数的原型
// console.log(Object.getOwnPropertyDescriptors(Date.prototype));

//2Date.now() 返回自1970年到至今的毫秒数 1000毫秒代表1秒
// console.log(Date.now()/(1000*60*60*24*365),2019-1970);//output:49.790586574169204 49

//3Date.parse() 解析一个表示某个日期的字符串，并返回1970到指定的毫秒数，无法解析返回NaN
// console.log(Date.parse('2019/10/04')/(1000*60*60*24*365));//output:49.78904109589041

//以下测试 使用单一对象 这里定义一个常量
const date_test = new Date();//2019-10-04
//4Date.prototype.getDate() 根据本地时间返回一个指定的日期对象中的某一天
// console.log(date_test.getDate());//output:4

//5Date.prototype.getDay() 根据本地时间返回一个数字表示指定日期是星期几
// console.log(date_test.getDay());//output:5

//以下get方法类似不作内容补充描述
//6Date.prototype.getFullYear()
// console.log(date_test.getFullYear());//2019

//7Date.prototype.getHours()
// console.log(date_test.getHours());//output:21

//8Date.prototype.getMilliseconds()
// console.log(date_test.getMilliseconds());//output:513

//9Date.prototype.getMinutes()
// console.log(date_test.getMinutes());//output:42

//10Date.prototype.getMonth()
// console.log(date_test.getMonth());//output:9

//11Date.prototype.getSeconds()
// console.log(date_test.getSeconds());//output:47

/*
 12Date.prototype.getTime() 格林威治时间
 13Date.prototype.getUTCDate()
 Date.prototype.getUTCDay()
 Date.prototype.getUTCFullYear()
 Date.prototype.getUTCMonth()
 ....国际标准时间
 */

//时间：1949/10/01/20:20:20:20
//14Date.prototype.setDate() ->(monthValue)
// date_test.setDate(8);
// console.log(date_test);//output:2019-10-08T13:52:31.394Z

//15Date.prototype.setFullYear() ->(yearValue,monthValue,dateValue)
// date_test.setFullYear(1949,9,1);// monthValue 会自动加1
// console.log(date_test);//output:1949-10-01T13:55:03.697Z

//16Date.prototype.setHours() ->(hoursValue,minusValue,secondsValue,millisecondsValue)
// date_test.setHours(8,10,30,567);
// console.log(date_test);//output:2019-10-04T00:10:30.567Z

//17Date.prototype.setMilliseconds() 一个0-999的数字
// date_test.setMilliseconds(888);
// console.log(date_test);//output:2019-10-04T14:00:15.888Z

//18Date.prototype.setMonth() ->(monthValue,dateValue)
// date_test.setMonth(9,8);//monthValue 会自动加1
// console.log(date_test);//output:2019-10-08T14:01:52.162Z

//19Date.setTime() -> 对应Date.getTime()

/*
 20Date.prototype.setUTCDate()
 Date.prototype.setUTCFullYear()
 Date.prototype.setMonth
 .... ->对应getUTC*
 */

//21Date.prototype.toDateString() 返回美式英语时间格式
// console.log(date_test.toDateString());//output:Fri Oct 04 2019

//22Date.prototype.toTimeString()
// console.log(date_test.toTimeString());//output:22:06:44 GMT+0800 (China Standard Time)

/*
 有关时间方面的问题
 1计算当前时间距离指定时间过去了多少个月/周 比如：当前是开学的第几周
 2按照指定的时间格式输出：比如：2019/10/04 21：34：56 星期六
 */
// let question_1 = function () {
//     let now = new Date();
//     let start = Date.parse(arguments[0]);
//     let minus = now - start;
//     let _compute = 1000*60*60*24*7;//计算周的常量
//     console.log(Math.floor(minus / _compute));
// };
// question_1('2019/9/4');//output:4

// let question_2 = function () {
//     let now = new Date();
//     let _year = now.getFullYear();
//     let _month = add_zero(now.getMonth());
//     let _date = add_zero(now.getDate());
//     let _hour = add_zero(now.getHours());
//     let _minute = add_zero(now.getMinutes());
//     let _second = add_zero(now.getSeconds());
//     let _day = formDay(now.getDay());
//     return (
//         `当前时间：
//         ${_year}/${_month}/${_date}  
//         ${_hour}:${_minute}:${_second} ${_day}`
//     );
// };
// let formDay = function(number) {
//     switch (number) {
//         case 1:
//             return '星期一';
//         case 2:
//             return '星期二';
//         case 3:
//             return '星期三';
//         case 4:
//             return '星期四';
//         case 5:
//             return '星期五';
//         case 6:
//             return '星期六';
//         default:
//             return '星期天';
//     }
// };
// let add_zero = function(num){
//     return (num < 10) ? '0' + num : num;
// };
// console.log(question_2());
/*
 output:
 当前时间：
       2019/09/04
       22:42:45 星期五
 */