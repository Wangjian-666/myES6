/**
 * Created by wangjian on 2019/10/2.
 */
//内置对象Array 所有遍历的方法 -> (callback(item,index,array),thisArg)

/*
    1Array.length 是Array实例的属性，用于返回或者设置
    一个数组中的个数，该值是一个32bit整数，并且总是大于最高项下标
 */
// console.log([1,2,3].length);//output:3
// let arr = [1,2,3,4];
// arr.length = 3;
// console.log(arr);//output:[1,2,3]
// console.log(Object.getOwnPropertyDescriptor(arr,'length'));
/*
 output:
 { value: 3,
 writable: true,
 enumerable: false,
 configurable: false }
 */

/*
    2Array.prototype
    Array构造函数的原型，允许所有的Array对象添加新的属性
 */
// console.log(Object.getOwnPropertyDescriptors(Array.prototype));//output:Array.prototype.propertyDescriptors

/*
    3Array.from()
    从一个类似数组或者可以迭代对象中创建一个新的浅拷贝的数组实例
    (iterator-可迭代对象，mapFunc-遍历函数， thisArg-执行map函数时候的this对象)
 */
// let str = 'abcdefgABCDEFG';//->built-in-String is iterator
// let arr = Array.from(str,function (item) {
//     if(item.charCodeAt() < 97) {
//         return item.toLowerCase().charCodeAt() * this[2];
//     }
//     else {
//         return item.charCodeAt() + this[1];
//     }
// },[1,2,3,4]);
// console.log(arr);
// output:[ 99, 100, 101, 102, 103, 104, 105, 291, 294, 297, 300, 303, 306, 309 ]

/*
    4Array.isArray()
    方法用于判断传入的参数是否为数组对象
    以前的方法是：
    instanceof
    Object.prototype.toString.call/apply(test_obj)
    现在的方法是Array.isArray()
*/
// let arr1 = {
//     __proto__:Array.prototype
// };
// console.log(arr1 instanceof Array);//output:true
// console.log(Object.prototype.toString.call(arr1));//output:[object Object]
// console.log(Array.isArray(arr1));//output:false

/*
    Array.of()
    此方法是对new Array()实例化时参数带来的不确定的语意行为
 */
// let arr1 = new Array();//output:[]
// let arr2 = new Array(1,3,4);//output:[1,3,4]
// let arr3 = new Array(4);//output:[,,,,]
// console.log(arr1,arr2,arr3);
// let arr4 = Array.of();//output:[]
// let arr5 = Array.of(1,3,4);//output:[1,3,4]
// let arr6 = Array.of(4);//output:[4]
// console.log(arr4,arr5,arr6);

/*
    Array.prototype.concat()
    用于合并两个或多个数组，不会更改现有数组
 */
// let arr1 = [1,2,3,4];
// let arr2 = arr1.concat(4,5,6,[7],[[8,9]],'123',null,undefined,{},Symbol('symbol'));
// console.log(arr2,arr1);
/*
    output:
    [ 1, 2, 3, 4, 4, 5, 6, 7,[8,9], '123', null, undefined, {}, Symbol(symbol) ]
    [ 1, 2, 3, 4 ]

 */

/*
    Array.prototype.copyWithin()
    浅复制数组中的一部分到同一数组，并返回它，不会改变数组的长度
    (start,copyStart,copyEnd)
 */
// let arr = [1,3,4,5,6];
// let result = arr.copyWithin(0,2);
/*
    [4,5,6]->[1,3,4,5,6]
    [1,3,4,5,6]->[4,5,6,5,6]
 */
// console.log(result,arr);//output:[4,5,6,5,6],[4,5,6,5,6]

/*
    Array.prototype.entries()
    返回一个新的Array Iterator对象 该对象包含数组中每个索引的键/对
 */
// let arr = [1,2,3,4];
// let iterator = arr.entries();
// console.log(iterator);//output:Array Iterator
// for(let [index,value] of iterator) {
//     console.log(index,value);//output:0 1 1 2 2 3 3 4
// }

/*
    Array.prototype.every()
    方法测试数组中的所有元素是否通过某个指定的函数的测试它返回一个布尔值
    (callback)
 */
// let arr = [1,'1',{},null,undefined,[1],Symbol('symbol'),true];
// console.log(arr.every(item => item.hasOwnProperty('length')));//output:false

/*
    Array.prototype.fill()
    用于一个固定值填充一个数组中，从起始索引到终止索引的全部元素
    不包括终止索引，不会改变数组的length
    (fillItem,fillStart,fillEnd)
 */
// let arr = [1,2,3,4];
// let result = arr.fill(0,1,2);
// console.log(arr,result);//output:[ 1, 0, 3, 4 ] [ 1, 0, 3, 4 ]

/*
    Array.prototype.filter()
    创建一个新数组其包含通过所提供函数实现的测试的所有元素
    原始数组不会改变
 */
// let arr = [1,2,3,4];
// let result = arr.filter((item,index,array) => item+this[index] > 3,[1,2,3,4]);
// console.log(arr,result)
// output:[ 1, 2, 3, 4 ] [] ->arrowFunction not have this
// let result = arr.filter(function(item,index,array) {
//     return item + this[index] > 3;
// },[1,2,3,4]);
// console.log(arr,result);//output:[ 1, 2, 3, 4 ] [ 2, 3, 4 ]

/*
    Array.prototype.find()
    返回数组中满足提供函数的第一个元素的值，否则返回undefined（无返回）
    (callback(item,index,array),thisArg)
 */
// let arr = [96,97,98,99];
// let result = arr.find(function(item,index,array) {
//     return this[index].charCodeAt() === item;
// },['a','A','b','B']);
// console.log(result,arr);//output:98,[ 96, 97, 98, 99 ]

/*
    Array.prototype.findIndex()
    返回数组中满足提供函数的第一个元素的索引
    否则返回-1
    (callback(item,index,array),thisArg)
 */
// let arr = [1,2,3,4];
// let result = arr.findIndex(function(item,index,array) {
//     return item + this[index] > 10
// },[5,6,7,8]);
// console.log(result,arr);//output:4,[1,2,3,4]

/*
    Array.prototype.flat()
    按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并返回
    (callback(item,index,array),thisArg)
 */
// let _flat = function* (array) {
//       for(let item of array) {
//           if(Array.isArray(item)) {
//               yield* _flat(item)
//           }
//           else {
//               yield item
//           }
//       }
// };
// let cbArg = [6,5,4,3,2,1];
// Array.prototype.flat = function (fn,cbArg) {
//     let result = [];
//     let index = 0;
//     for(let item of _flat(this)) {
//         result[index++] = item;
//     }
//     for(let i = 0;i < result.length;i++) {
//         result[i] = fn.call(null,result[i],i,result);
//     }
//     return result;
// };
// let cbFn = function (item,index,array) {
//     return item * index;
// };
// let arr = [[1,2,3],[4,5,6]];
// let result = arr.flat(cbFn);
// console.log(result,arr);//[ 0, 2, 6, 12, 20, 30 ] [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

/*
    Array.prototype.flatMap()
    首先使用映射函数映射每一个元素，然后将结果压缩成一个新数组，它与map深度为1的flat函数
    几乎相同，但是flatMap()通常在合并一维数组效率稍高一点
 */
// let arr = [[[1,2,3]]];
// console.log(arr.flatMap(function (item,index,array) {
//     return item;
// }));

/*
    Array.prototype.forEach()
    方法对数组中对每一个元素执行一次所提供函数
    (callback(item,index,array),thisArg)
 */
// let arr = [1,2,3,4,5,6];
// let result = arr.forEach(function (item,index,array) {
//     console.log(item + array[index] + this[index]);
//     return item + array[index] + this[index];
// },[10,20,30,40,50,60]);
// console.log(result,arr);//undefined,[ 1, 2, 3, 4, 5, 6 ]

/*
    Array.prototype.includes()
    判断一个数组中是否包含一个指定对值，根据情况，如果包含则返回true，否则返回false
 */
// let arr = [1,2,3,4];
// console.log(arr.includes(4));//output:true

/*
    Array.prototype.indexOf()
    返回找到值的索引
 */
// let arr = [1,2,3,4];
// console.log(arr.indexOf(3));//output:3

/*
    Array.prototype.join()
    将一个数组或者类似数组的对象的所有元素连接成一个字符串并返回这个字符串
 */
// let arr = [[[1,2,3]]];
// console.log(arr.join(''));//outpur:'1,2,3'

/*
    Array.prototype.keys()
    类似Array.prototype.entries() 不过返回的是索引
 */
// let arr = ['a','b','c','d'];
// let result = arr.keys();
// console.log(result);//output:Object [Array Iterator] {}
// for(let key of result) {
//     console.log(key);//0,1,2,3
// }

/*
    Array.prototype.lastIndexOf()
    返回最后一个出现的位置
 */
// let arr = ['a','b','a','c'];
// console.log(arr.lastIndexOf('a'));//output:2

/*
    Array.prototype.map()
    和forEach()方法类似不过返回数组
    (callback(item,index,array),thisArg)
 */
// let arr = [1,2,3,4];
// let result = arr.map(function (item,index,array) {
//     return item * array[index] * this[index];
// },[1,2,3,4]);
// console.log(result);//[ 1, 8, 27, 64 ]

/*
    Array.prototype.pop()
    返回删除数组的最后一个元素，如果为空返回undefined
    改变数组的长度
 */
// let arr = [1,2,3,4];
// console.log(arr.pop(),arr);//output:4,[ 1, 2, 3 ]

/*
    Array.prototype.push()
    方法将一个或者多个元素追加到数组中,返回新数组的长度
    改变数组的长度
 */
// let arr = [1,2,3,4];
// console.log(arr.push('1',[2],null,undefined,true,{}),arr);

/*
    Array.prototype.reduce()
    方法对数组中的每一个元素执行一个提供的函数，并将其结果汇总为单个值返回
    (callback(acc,item,index,array),acc)
 */
// let arr = [1,2,3,4];
// let result = arr.reduce(function (acc,item,index,array) {
//     return acc + item + index + array[index];
// },100);
// console.log(result);//output:126

/*
    Array.prototype.reduceRight()
    方法和reduce类似,遍历顺序为从右往左
    (callback(acc,item,index,array),acc)
 */
// let arr = [1,2,3,4];
// let result = arr.reduceRight(function(acc,item,index,array) {
//     console.log(index);
//     return acc + item + index +  array[index];
// },100);
// console.log(result);//3 2 1 0 126

/*
    Array.prototype.reverse()
    反转数组
    改变原有数组
 */
// let arr = [1,2,3,4];
// console.log(arr.reverse(),arr);//output:[ 4, 3, 2, 1 ] [ 4, 3, 2, 1 ]

/*
    Array.prototype.shift()
    方法和pop()方法类似 返回删除数组的第一个数组
    改变数组
 */
// let arr = [1,2,3,4];
// console.log(arr.shift(),arr);//output:1,[2,3,4]

/*
    Array.prototype.slice()
    返回截取的数组的浅拷贝
 */
// let arr = [{name:'name'},1,2,[1,2,3]];
// let result = arr.slice(0,1);
// arr[0].name = 'changeName';
// console.log(result,arr);//output:[ { name: 'changeName' } ] [ { name: 'changeName' }, 1, 2, [ 1, 2, 3 ] ]

/*
    Array.prototype.some()
    方法测试数组中的元素是否有满足给定函数的值
    返回true/false
    (callback(item,index,array),thisArg)
 */
// let arr = [1,2,3,4];
// console.log(arr.some(function (item,index,array) {
//     return ((item + array[index] + this[index]) % 2 === 0);
// },[1,2,3,4]));//output:true

/*
    Array.prototype.sort()
    基于原地算法对数组进行排序
    改变数组
 */
// let arr = [10,9,8,7];
// console.log(arr.sort(),arr);//output:[ 10, 7, 8, 9 ] [ 10, 7, 8, 9 ]
// console.log(arr.sort((a,b) => a - b));//output:[ 7, 8, 9, 10 ]

/*
    Array.prototype.splice()
    通过删除或者添加元素,删除元素返回删除的元素,否则返回空数组
    改变数组
    (start,deleteNumber,insertItem)
 */
// let arr = [1,2,3,4,5];
// console.log(arr.splice(0,0,1),arr);

/*
    Array.prototype.toLocaleString()
    返回一个字符串表示数组中的元素
 */
// let arr = [1,2,3,null,undefined,{},true];
// console.log(arr.toLocaleString());//output:1,2,3,,,[object Object],true

/*
    Array.prototype.toString()
    返回一个字符串表示指定的数组及元素
 */
// let arr = [12,'34',null,undefined,{},true];
// console.log(arr.toString() === arr.toLocaleString());//output:true

/*
    Array.prototype.unshift()
    和push方法类似
    返回新数组长度
    改变数组
 */
// let arr = [1,2,3];
// console.log(arr.unshift(0,null),arr);//output:5,[ 0, null, 1, 2, 3 ]

/*
    Array.prototype.values()
    和keys() entries()方法类似 ->返回的是索引对应的值
 */
// let arr = ['a','b','c'];
// console.log(arr.values());//output:Object [Array Iterator] {}
// for(let item of arr.values()) {
//     console.log(item);//output:'a b c'
// }
