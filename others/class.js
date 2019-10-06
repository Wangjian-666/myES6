/**
 * Created by wangjian on 2019/10/5.
 */

/*
    1,class
    2,constructor
    3,static
    4,extends
    5,new.target
    6,super

 */
/*
ES通过class关键字定义类 extends关键字定义继承
 */
// class Parent {
//     constructor(name) {
//         this.name = name;
//     }
//     parent() {
//         console.log(this.name);
//     }
// }
// class Child extends Parent {
//     constructor(name) {
//         super(name);
//         this.name = 'change';
//     }
// }
// let child = new Child('child');
// child.parent();
/*
    子类必须在constructor中调用super()方法 否则无法新建实例
    原因是因为当使用extends关键子后 子类的constructor是继承了父类的this对象
    在其对象上进行加工
    在ES5中则是先创建子类实例的this,再由父类进行加工
 */
class Parent1 {
    constructor(name,title) {
        this.name = name;
        this.title = title;
    }
    toString() {
        console.log(this.name + this.title);
    }
}
class Child1 extends Parent1 {
    constructor() {
        // befor
        // this.name = 'Child1_name';
        // this.title = 'Child1_title';//Error
        super();
        //after
        this.name = 'Child1_name';
        this.title = 'Child1_title';//Success

    }
}
// let child1 = new Child1();//this 对象必须在super()方法后调用，因为此时的子类还没有this
// child1.toString();//output:Child1_nameChild1_title
// console.log(child1 instanceof Child1,child1 instanceof Parent1);//output:true true
// console.log(Object.getPrototypeOf(Child1) === Parent1);//output:true

/*
 super()作为方法使用
    当super()用作子类的构造函数中时候
    super() ->相当于Parent.prototype.constructor.call(this);
    new.target 返回当前new关键字后的 构造函数 也就是通过new调用的构造函数
    且super()作为方法只能作用在子类的constructor()中
 */
class Parent2 {
    constructor() {
        console.log(new.target.name);
    }
}
class Child2 extends Parent2 {
    constructor() {
        super();
    }
}
// new Parent2();//output:Parent2
// new Child2();//output:Child2

/*
  super作为对象使用
    在普通方法中super指向的是Parent.prototype
    ES6规定，通过super调用父类的方法时,super会绑定子类的this
    super 作为对象用在静态方法中时 super指向父类

 */
class Parent3  {
    constructor() {
        this.inner = function () {
            console.log('inner function');
        }
    }
    parentM() {
        return 'parent3';
    }
}
class Child3 extends Parent3 {
    constructor() {
        super();
        // this.inner();//output:inner function
        // super.inner();//Error inner not function
        console.log(super.parentM());
        // console.log(this.parentM());
    }
}
// let child3 = new Child3();//output:parent3

class Parent4 {
    constructor() {
        this.name = 'parent4';
    }
    say() {
        console.log(this.name);
    }
}
class Child4 extends Parent4 {
    constructor() {
        super();
        this.name = 'child4';
    }
    childM() {
        super.say();
        // super.say.call(this);
        // Parent4.prototype.say.call(this);
    }
}
let child4 = new Child4();
// child4.childM();//output:child4

class Parent5 {
    constructor() {
        this.name = 'parent5';
    }
}
Parent5.prototype.name = 'prototype.name';
class Child5 extends Parent5 {
    constructor() {
        super();
        console.log(this.name);
        this.name = 'child5';
        console.log(this.name);
        super.name = 'super change name';
        console.log(this.name,super.name);
    }
}
// let child5 = new Child5();
/*
 output:
 parent5
 child5
 super change name prototype.name
 */
class Parent6 {
    constructor() {
        this.name = '_parent6'
    }
    static pM() {
        console.log(this.name);
    }
    pM() {
        console.log(this.name);
    }
}
class Child6 extends Parent6 {
    constructor() {
        super();
        this.name = '_child6';
    }
    static childM() {
        super.pM();
    }
    childM() {
        super.pM();
    }
}
// Child6.childM();//output:Child6 ->Child6.name
// let child6 = new Child6();
// child6.childM();


/*
    类的prototype属性和__proto__属性
    子类的__proto__属性表示构造函数的继承，总是指向父类
    子类的prototype.__proto__ 属性表示方法的继承，总是指向父类的prototype

 */
class Parent7 {
    constructor() {

    }
}
class Child7 extends Parent7 {

}
// console.log(Child7.__proto__ === Parent7,Child7.prototype.__proto__ === Parent7.prototype);
//output:true true
let _parent = class {

};
let _child = class {

};
// Object.setPrototypeOf(_child,_parent);
// Object.setPrototypeOf(_child.prototype,_parent.prototype);
// console.log(_child.__proto__ === _parent,_child.prototype.__proto__ === _parent.prototype);
//output:true true

