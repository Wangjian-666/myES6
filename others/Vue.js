/**
 * Created by wangjian on 2019/10/7.
 */
//vue 响应式原理解析
/*
 1，数据代理/数据劫持
 2，依赖收集
 3，订阅发布模式
 */
// 方式1 Object.defineProperty(obj,key,desc)

function render(para) {
    console.log('function render is call newValue is ' + para);
}
let obj = {name:{name:'wangjian',title:'fe'},age:2019};

function observe(obj) {
    if(!obj || typeof obj !=='object') return;
    Object.keys(obj).forEach(key => {
        definedReactive(obj,key,obj[key])
    });
}
function definedReactive(obj,key,value) {
    observe(value);//value 是对象继续递归监听
    Object.defineProperty(obj,key,{
        configurable:true,
        enumerable:true,
        get:function () {
            console.log('get:' + value);
            return value;
        },
        set:function(newValue) {
            if(typeof newValue === 'object') {
                observe(newValue);//继续递归监听
            }
            if(value !== newValue) {
                console.log('set:'+key);
                render(newValue);
                value = newValue
            }
        }
    })
}
// observe(obj);
// obj.name = {
//     name:'es6',
//     title:'title'
// };
// obj.name.name = 'newName';
// let result = obj.name.name;
/*
 上述代码无法检测对象属性的删除或添加,这是因为Vue通过Object.defineProperty
 来将对象上的属性都设置为getter/setter的形式来追踪变化,但是getter/setter的形式
 只能追踪一个数据是否被修改了，无法追踪到新增的属性和删除的属性,如果是删除属性
 可以利用vm.$delete实现,新增属性可以
 1，vue.set方法向嵌套的对象添加响应的属性
 2，也可以对其重新赋值，用新的值覆盖掉以前的值
 3，Object.defineProperty不能监听数组的变化,需要进行数组方法的重写
 */
let obj2 = [1,2,3];
let methods = ['shift','unshift','pop','push','reverse','splice','sort'];//这些方法都会改变调用数组
let arrProto = Array.prototype;
// let proto = Object.create(Array.prototype);
let proto = Object.create(arrProto);
methods.forEach(meth => {
    proto[meth] = function() {
        // Array.prototype[meth].call(this,...arguments);
        arrProto[meth].call(this,...arguments);
        render('array');
    }
});
function observe2(obj) {
    if(Array.isArray(obj)) {
        obj.__proto__ = proto;//引用Array.prototype
        //let arr = [],-> arr = new Array() -> arr.__proto__ = Array.prototype;
        return;
    }
    else if(typeof obj === 'object') {
        for(let key in obj) {
            defineReactive2(obj,key,obj[key]);//设置监听器
        }
        return;
    }
}
function defineReactive2(obj,key,value) {
    observe2(value);//obj的protorype为array,递归监听
    Object.defineProperty(obj,key,{
        enumerable:true,
        configurable:true,
        get:function () {
            return value;
        },
        set:function (newValue) {//设置监听器
            observe2(newValue);//设置的值为数组或者对象,递归监听
            if(newValue !== value) {
                render(newValue);
                value = newValue;
            }
        }
    })
}
observe2(obj2);//对obj2进行数据劫持/数据监听
obj2.push(1,2,3);
console.log(obj2);
/*
 这种方法将数组的常用方法进行重写,
 进而覆盖掉原生的数组方法,重写之后的数组方法也需要能够被拦截
 但是有些属性Vue拦截不到的 比如：obj.length--,obj[0] = 1;
 */

//方式2 利用ES6中的proxy代理对象 实现对 对象进行代理
//Proxy代理的是整个对象，而不是对象的某个属性,此外Proxy支持代理数组的变化

function render3() {
    console.log('模拟视图更新');
}
let obj3 = {
    name:'fe',
    age:{age:2019},
    arr:[1,2,3]
};
let handler = {
    get:function (target,key) {
        if(typeof target[key] === 'object') {
            return new Proxy(target[key],handler);//递归代理
        }
        return Reflect.get(target,key);
    },
    set:function (target,key,value) {
        if(key === 'length') return true;
        render3();
        return Reflect.set(target,key,value);
    }
};
// let proxy = new Proxy(obj3,handler);
// proxy.age.name = 'age_name';
// console.log(proxy.age.name,obj3.age.name);
// proxy.arr[0] = 8;

/*
 收集依赖，需要为依赖找一个存储依赖的地方，创建一个Dep类，用它来收集依赖
 主要作用是用来存放Watcher观察者对象的，可以把Watcher理解成一个中介的角色
 数据发生变化时通知它，然后它通知其他地方
 */
//dep类的简单实现
class Dep {
    constructor() {
        this.subs = [];//任务队列
    }
    addSub (sub) {
        this.subs.push(sub);
    }
    notify() {
        this.subs.forEach((sub) => {//遍历任务队列执行
            sub.update();
        })
    }
}
//test
let dp = new Dep();
dp.addSub({update:() => {
    console.log('emit here');
}});
// dp.notify();
/*
 依赖收集的目的是将观察者Watcher对象存放到当前的闭包中的订阅者Dep的subs中
 */
class Wather {
    constructor(obj,key,cb) {
        Dep.target = this;
        this.cb = cb;
        this.key = key;
        this.obj = obj;
        this.value = obj[key];
        Dep.target = null;
    }
    update() {
        this.value = this.obj[this.key];
        this.cb(this.value);//视图更新
    }
    cb(value) {
        console.log(value + 'is update');
    }
}

function observe4(obj) {
    if(!obj || typeof obj !=='object') {
        return
    }
    else {
        Object.keys(obj).forEach(key => {
            observe4(obj);
            let dp = new Dep();
            Object.defineProperty(obj, key, {
                enumerable: true,
                configurable: true,
                get() {
                    console.log('get');
                    if (Dep.target) {
                        dp.addSub(Dep.target);
                    }
                    return value;
                },
                set(newValue) {
                    observe4(obj);
                    if (value !== newValue) {
                        console.log('set');
                        render3();
                        value = newValue;
                        dp.notify();
                    }
                }
            })
        })
    }
}
class Vue {
    constructor(options){
        this._data = options.data;
        observe4(this._data);
        new Wather();
        console.log('模拟视图更新');
    }
}
/*
 1数据劫持/数据代理
 2依赖收集
 3发布/订阅模式
 */
//首先利用Object.defineProperty进行数据代理
const obj_test = {info:{name:'wangjian',age:25},title:'test',arr:[1,2,3,4]};
const methods = ['pop','push','shift','sort','splice','unshift','reverse'];
let proto = Object.create(Array.prototype);
methods.forEach(item => {
    proto[item] = function () {
        Array.prototype.call(this,...arguments);
        render();
    }
});
function render() {
    console.log('视图更新了');
}
function observe(obj) {
    if(typeof obj !== 'object') return 'not obj';
    if(Array.isArray(obj)) {
        obj = Object.create(proto);
        render();
    }
    Object.keys(obj).forEach(key => {
        defineObj(obj,key,obj[key]);
    })
}
function defineObj(obj,key,value) {
    if(typeof value === 'object') {
        observe(value);
    }
    Object.defineProperty(obj,key,{
        enumerable:true,
        configurable:true,
        get() {
            console.log('you get '+ key);
            return value;
        },
        set(newValue) {
            if(typeof newValue ==='object') {
                observe(newValue);
            }
            if(value !== newValue) {
                console.log('you set new '+ key);
                render();
                value = newValue;
            }
        }
    })
}
observe(obj_test);
obj_test.info.name = 'wangjian';
obj_test.arr.push(100);
log(obj_test.arr);


