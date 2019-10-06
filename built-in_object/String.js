/**
 * Created by wangjian on 2019/10/2.
 */
/*
    内置对象String
    与Array方法名相同的有
    1，concat
    2，includes
    3，indexOf
    4，lastIndexOf
    5，slice
    6，valueOf,toString
*/

/*1String.prototype 表示String对象的原型对象 writable:false,enumerable:false,configurable:false
  String.prototype.constructor String.prototype.length
*/
// console.log(String.prototype);//output:[String: '']

//2String.fromCharCode() 返回指定的UTF-16代码单元序列创建的字符串
// console.log(String.fromCharCode('a'));

//3String.fromCodePoint()返回使用指定代码浮点所创建的字符串

//4String.prototype.charAt()返回指定的字符，参数长度0-length
// console.log('abcdefghij'.charAt(4));//output:e

//5String.prototype.charCodeAt() 方法返回0-65535之间的整数
// let str = 'abcdefg';
// for(let item of str) {//iterator
//     console.log(item.charCodeAt());
// }//output:97 98 99 100 101 102 103

//6String.prototype.codePointAt() 返回一个Unicode编码点的整数
// console.log('a'.codePointAt());//97

//7String.prototype.concat() 方法将一个或者多个字符串与原字符串合并并返回新的字符串
// let str1 = 'abcd';
// let str2 = '1234';
// console.log(str1.concat(str2,'efgh'),str1);//abcd1234efgh abcd

//8String.prototype.endWith() ('endStr',str.length);
// let str = 'wangjian';
// console.log(str.endsWith('jian',8));//output:true

//9String.prototype.includes() (searchStr,startPosition)返回判断一个字符串中是否包含参数字符
// let str = 'sometest';
// console.log(str.includes('e',6));//output:false

//10String.prototype.indexOf() 返回指定对象第一次出现参数字符的位置/-1（searchStr,startIndex)
// let str= 'people_name';
// console.log(str.indexOf('_',7));//output: -1/correct(6)

//11String.prototype.lastIndexOf() 返回指定对象最后一个出现参数字符的位置/-1（searchStr,startIndex）
// let str = 'people_name';
// console.log(str.lastIndexOf('p'));//output:3

//12String.prototype.match() 方法检索返回一个字符串的正则表达式结果
// let str = 'a1b2c3d4&name=wangjian';
// console.log(str.match(/name/));

//13String.prototype.matchAll() 方法返回一个包含所有正则表达式所匹配的迭代器

//14String.prototype.padEnd()方法用一个字符串填充当前字符串(targetLength,padStr)
// let str = 'abc';
// console.log('abc'.padEnd(10,'pad'));//output:abcpadpadp

//15String.prototype.padStart() 方法和padEnd方法类似


//16String.prototype.repeat() 构造并返回一个新的字符串该字符串包含被连接在一个的指定次数的副本
// let str = 'repeat';
// console.log(str.repeat(3),str);//output:repeatrepeatrepeat repeat

//17String.prototype.replace()放回返回一个由替换值可以替换函数返回的结果(regexp/str,newSubStr/function)
// let str = 'wangjian_test';
// let replace_fn = function(str) {
//     let result = '';
//     for(let i of str) {
//         result += i.toUpperCase();
//     }
//     return result;
// };
// let result = str.replace('test',replace_fn('test'));
// console.log(result);//wangjian_TEST

//18String.prototype.search() 执行正则表达式/字符串 返回索引indexOf()接收字符串作参数
// console.log('abc'.search('a'));output:0

//19String.prototype.slice() 返回提取某个字符串的一部分，并返回一个新的字符串，且不会改变原有字符串
// let str = 'wangjian_String';
// console.log(str.slice(0,8),str);//output:wangjian wangjian_String

//20String.prototype.split()方法使用指定的字符分隔字符串中的每一个字符 并返回分隔后的数组对象
// let str = 'split_method';
// console.log(str.split('_'));//output:[ 'split', 'method' ]

//21String.prototype.startsWith() 方法和endWith类似 (startsStr,startPosition)
// console.log('abcd'.startsWith('a',0));//output:true

//22String.prototype.subString()方法返回开始位置到结束位置的一个子集/slice方法不会自动识别参数
// console.log('abcd'.substring(3,2));//output:c

//23String.prototype.toLowerCase()方法将字母字符转换为小写形式
// console.log('abcDeF'.toLowerCase());//output:abcdef

//24String.prototype.toString()  方法返回指定对象的字符串形式
// console.log('abcd'.toString());//output:abcd

//25String.prototype.toUpperCase() 方法和toLowerCase类似
// console.log('abcdef'.toUpperCase());//output:ABCDEF

//26String.prototype.trim()方法将一个字符串首尾两端的空白字符串去掉
// console.log(' ab cd '.trim());//output:ab cd

//27String.prototype.trimLeft() 开头空白字符去除
// console.log('h'+' ab cd '.trimLeft() +'e');//output:hab cd e

//28String.prototype.trimRight() 结尾空白字符去除
// console.log('h'+ ' ab cd '.trimRight() + 'e');//output:h ab cde

//29String.prototype.valueOf() 返回string原始值

//30String.prototype[@@iterator] string的遍历器对象函数
// console.log(String.prototype[Symbol['iterator']]);[Function: [Symbol.iterator]]