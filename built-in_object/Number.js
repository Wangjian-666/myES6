/**
 * Created by wangjian on 2019/10/2.
 */
//内置对象Number
// console.log(Number('23a'));//output:NaN

//Number.isFinite()
// console.log(Number.isFinite(123445667772232242344));//output:true
// console.log(Number.isFinite(Infinity));//output:true

//Number.isInteger()
// console.log(Number.isInteger(123.2));//output:false
// console.log(Number.isInteger(132));//output:true

//Number.isNaN
// console.log(Number.isNaN(NaN));//output:true
// console.log(Number.isNaN(null));//output:false

//Number.isSafeInteger()
// console.log(Number.isSafeInteger(12356));//output:true
// console.log(Number.isSafeInteger(7891234567891234123));//output:false

//Number.parseFloat()
// console.log(Number.parseFloat('123.3c4'));//output:123.3
// console.log(typeof Number.parseFloat('123.3c4'));//output:number

//Number.parseInt()
// console.log(Number.parseInt('123.3c4'));//output:123

// Number.prototype.toExponential()
// console.log(1234.5678.toExponential());//output:1.2345678e+3
// console.log((1234567890).toExponential());//output:1.23456789e+9

//Number.prototype.toFixed()
// console.log(12334.4567.toFixed(0));//output:12334

//Number.prototype.toLocalString()
// console.log(123.45.toLocaleString());//output:123.45

//Number.prototype.toPrecision()
// console.log(123.456.toPrecision(2));//output:1.2e+2
// console.log(123.456.toPrecision(4));//output:123.5

//Number.prototype.toString()
// console.log((122).toString());//output:122
// console.log(typeof (123).toString());//output:string

//Number.prototype.valueOf()
// console.log(123.456.valueOf());//output:123.456
// console.log(typeof 123.456.valueOf());//output:number