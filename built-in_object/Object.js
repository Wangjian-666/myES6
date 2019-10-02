/**
 * Created by wangjian on 2019/9/21.
 */
const obj = {name:'objName',1:'objNumber',[Symbol('symbol')]:'symbol'};
const {log} = console;

// 1Object.prototype -> 属性特性：writable,enumerable,configurable

//2Object.prototype.constructor  创建对象对自身对引用

//3Object.assign()
let test_obj = {firstProperty:'first'};
// log(Object.assign(test_obj,obj));
// obj.name = 'changeName';
// log(test_obj.name);

//4Object.create()
// test_obj = Object.create(Array.prototype,{
//     name: {
//         value:'name_test',
//         writable:true,
//         configurable:true,
//         enumerable:true
//     }
// });
// test_obj.push(2,3);
// log(test_obj);//output:Array { '0': 2, '1': 3, name: 'name_test', length: 2 }


//5Object.defineProperty()
// Object.defineProperty(test_obj,'name',{
//     value:'name'
// });
// log(Object.getOwnPropertyDescriptor(test_obj,'name'));
/*
 { value: 'name',
 writable: false,
 enumerable: false,
 configurable: false }
 */
// log(Object.keys(test_obj));

//6Object.defineProperties()
// Object.defineProperties(test_obj,{
//    name: {
//        value: 'name',
//        writable: false,
//        enumerable: false,
//        configurable: false
//    },
//    title: {
//        value: 'title',
//        writable: true,
//        enumerable: true,
//        configurable: true
//    },
//     age: {
//         get() {
//             log('you get myAge');
//         },
//         set(value) {
//             if(typeof value === 'number') return value * 3;
//         }
//     }
// });
// log(test_obj);
// test_obj.age = 56;
// log(Object.getOwnPropertyDescriptors(test_obj));
/*
 { firstProperty:
 { value: 'first',
 writable: true,
 enumerable: true,
 configurable: true },
 name:
 { value: 'name',
 writable: false,
 enumerable: false,
 configurable: false },
 title:
 { value: 'title',
 writable: true,
 enumerable: true,
 configurable: true },
 age:
 { get: [Function: get],
 set: [Function: set],
 enumerable: false,
 configurable: false } }
 */

//7Object.entries()
// for(let item of Object.entries(obj)) {
//     log(item);
// }

//8Object.freeze()
// log(Object.freeze(test_obj));
// test_obj.firstProperty = 'second';
// log(test_obj);
// log(Object.getOwnPropertyDescriptors(test_obj));
// Object.defineProperty(test_obj,'firstProperty',{
//    configurable:true
// });// Error:Cannot redefine property
// test_obj.firstProperty = 'third';
// log(test_obj);

//9Object.fromEntries()
// log(Object.fromEntries([['key1','value1']]));//Object.entries()的逆向操作
// log(Object.entries(obj));//[ [ '1', 'objNumber' ], [ 'name', 'objName' ] ]


//10Object.getOwnPropertyDescriptor()
// log(Object.getOwnPropertyDescriptor(test_obj,'firstProperty'));

//11Object.getOwnPropertyDescriptors()
// log(Object.getOwnPropertyDescriptors(test_obj));
/*
 { firstProperty:
 { value: 'first',
 writable: true,
 enumerable: true,
 configurable: true } }
 */

//12Object.getOwnPropertyNames()
// let arr_test = [1,2,3];
// arr_test[Symbol(3)] = 678;
// Array.prototype._concat = function () {
//
// };
// for(let item in arr_test) {
//     log(item);
// }
// log(Object.keys(arr_test));
// log(Object.getOwnPropertyNames(arr_test));
// log(Reflect.ownKeys(arr_test));
// log(Object.getOwnPropertySymbols(arr_test));

//13Object.getOwnPropertySymbols()

//14Object.getPrototypeOf()
// log(Object.getPrototypeOf(Object.prototype) === null);//[Boolean: false]
//Error:Cannot convert undefined or null to object

//15Object.is()
// log(Object.is(NaN,NaN),NaN === NaN,Object.is(-0,+0),-0 === +0);//true false false true

//16Object.isExtensible()
// log(Object.isExtensible(test_obj));//true
// Object.freeze(test_obj);
// Object.preventExtensions(test_obj);
// log(Object.isExtensible(test_obj));
// log(Object.isFrozen(test_obj));

//17Object.isFrozen()
// log(Object.isFrozen(test_obj));

//18Object.isSealed()
// Object.freeze(test_obj);
// Object.preventExtensions(test_obj);
// Object.seal(test_obj);
// log(Object.isSealed(test_obj));
// log(Object.isExtensible(test_obj));
// log(Object.isFrozen(test_obj));

// 19Object.keys()
// log(Object.keys(test_obj));

//20Object.preventExtensions()
// log(Object.preventExtensions(test_obj));//永远不能添加新的属性
// Object.seal(test_obj);//configurable -> false
// Object.freeze(test_obj);//configurable -> false,writable -> false
// test_obj.add = 'newAdd';
// log(Object.getOwnPropertyDescriptors(test_obj));

//21Object.prototype.hasOwnProperty()
// log(Object.keys(test_obj));// => Array
// log(Object.getOwnPropertyNames(test_obj));//=> Array
// for ... in ...
// log(Reflect.ownKeys(test_obj));// => Array
// log(Object.getOwnPropertySymbols(test_obj)); //=> Array
// log(test_obj.hasOwnProperty('name'));// => boolean

//22Object.prototype.isPrototypeOf()
// log(Array.prototype.isPrototypeOf([]));//检测一个对象是否在其原型指针上

//23Object.prototype.propertyIsEnumerable()
// log(test_obj.propertyIsEnumerable('firstProperty'));

//24Object.prototype.toLocaleString()
// log(test_obj.toLocaleString());

//25Object.prototype.toString()
// log(test_obj.toString());//output:[object Object]


//26Object.prototype.valueOf()
// log(test_obj.valueOf());

//27Object.seal()
// Object.seal(test_obj);
// log(Object.getOwnPropertyDescriptors(test_obj));// -> configurable false

//28Object.setPrototypeOf() 操控 __proto__

//29Object.values()
// for(let item of Object.values(test_obj)) {
//     log(item);
// }













