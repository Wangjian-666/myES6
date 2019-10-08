/**
 * Created by wangjian on 2019/10/6.
 */
/*
    内置对象Generator
    ES6高级语法中就有Generator,Promise,async/await,Proxy,Reflect等
    那么何为Generator呢？
    英文翻译Generator/生产者/发电机/发生器，其实在es6中它就是一个由于generator function返回的一个可迭代对象
    那么何为可迭代对象呢？
    Iterable可迭代对象 可迭代对象遵从两个协议（协议就是大家一起约定的意思，比如大家一起约定红灯/绿灯规则等）
    可迭代协议 + 迭代器协议
    可迭代协议：就是说这个对象上必须要有一个@@iterator属性方法也就是Symbol['iterator']()
    并且这个方法必须返回一个基于迭代器协议的对象
    迭代器协议：一个对象，这个对象必须有一个next()方法
    并且next()方法返回的是一个{value:"some",done:false/true} 其中的value就是Generator中yield的值，done表示是否结束

    那么综上所述Generator就是一个生成器函数/对象（由generator function生成）它返回一个可迭代的对象
    因为生成器返回的是一个可迭代对象所有 可以使用for...of循环

 */
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}//这里实际上的意思就是 我创建了一个生成器函数 它返回一个对象{},对象里面有next()方法
// console.log(gen);//output:[GeneratorFunction: gen]
// let g = gen();
// console.log(g);//output:Object [Generator] {} 这里我获取到的就是gen这个生成器函数返回的对象

//我们可以用一个类模拟一下生成器
class _generator {
    constructor() {
        //首先用一个队列数组存储产出的值
        this.queue = [1, 2, 3, 4];
        //定义一个索引指针
        this.times = 0;

    }
    next() {
        if(this.times < this.queue.length) {
            return {value: this.queue[this.times++],done:false};
        }
        else {
            return {value: undefined,done:true};
        }
    }
    return(value = undefined) {
        this.times = this.queue.length;
        return {value,done:true}
    }
    throw() {
        
    }
}
let _g = new _generator();
console.log(_g.next(),_g.next(),_g.return('end'),_g.next());