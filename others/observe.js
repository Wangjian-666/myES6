/**
 * Created by wangjian on 2019/10/7.
 */
/*************** 观察者模式 **************/

// 观察的主题（目标对象），相当于发布者
class Subject1 {
    constructor() {
        this.subs = [];//收集依赖
    }
    addSub(sub) {//添加依赖
        this.subs.push(sub);
        console.log(this.subs)
    }
    removeSub(sub) {
        const idx = this.subs.findIndex(i => i === sub);
        if (idx === -1) {
            console.log('不存在该观察者');
            return;
        }
        this.subs.splice(idx, 1);
    }
    notify() {
        this.subs.forEach(sub => {//中介依次通知到各个订阅者用户
            sub.update();// 与观察者原型方法update对应！
        });
    }
}

// 观察人，相当于订阅者
class Observer1 {//构造订阅者对象
    update() {
        console.log('update');
    }
}

// 测试代码
const subject1 = new Subject1();//中介
const ob1 = new Observer1();//订阅者1号
const ob2 = new Observer1();//订阅者2号
ob2.update = function () { //修改订阅者2号到update方法，实现不同逻辑
    console.log('private update');
};

//目标添加观察者了
subject1.addSub(ob1);//中介开始收集用户1的需求信息
subject1.addSub(ob2);//中介开始收集用户2的需求信息

//目标发布消息调用观察者的更新方法了
subject1.notify();
// update
// private update

subject1.removeSub(ob2);  //移除之后就不触发ob2的update了，不再打印`private update` 将客户1从依赖名单删除
subject1.notify();
// update

const test = new Observer1();//没有关系的用户方 不存在通知
subject1.removeSub(test);//
// 不存在该观察者

/*
2、根据内部状态自动触发更新

手动触发有啥用？肯定要根据内部状态更改触发才有用！
增加内部状态变量state并增加对应的getter/setter
*/
/*************** 观察者模式 **************/

// 观察的主题（目标对象），相当于发布者
class Subject2 {
    constructor() {
        this.subs = [];
        this.state = "张三";//触发更新的状态
    }
    //新增两个对于name的操作 获取/更新
    getState() {
        return state;
    }
    setState(state) {
        if (this.state === state) {
            console.log('不能设为之前的name，无效');
            return;
        }
        this.state = state;
        this.notify(); // 有更新，触发通知！【原本手动触发通知的，现在根据数据变化来触发】
    }
    addSub(sub) {
        this.subs.push(sub);
        console.log(this.subs)
    }
    removeSub(sub) {
        const idx = this.subs.findIndex(i => i === sub);
        if (idx === -1) {
            console.log('不存在该观察者');
            return;
        }
        this.subs.splice(idx, 1);
    }
    notify() {
        this.subs.forEach(sub => {
            sub.update();// 与观察者原型方法update对应！
        });
    }
}

// 观察人，相当于订阅者
class Observer2 {
    update() {
        console.log('update');
    }
}

// 测试代码
const subject2 = new Subject2();
const ob3 = new Observer2();
const ob4 = new Observer2();
ob3.update = function () { //修改update方法，实现不同逻辑
    console.log('private update');
};

//目标添加观察者了
subject2.addSub(ob3);
subject2.addSub(ob4);

//目标发布消息调用观察者的更新方法了
// subject.notify(); // 不使用手动触发，通过内部状态的设置来触发
subject2.setState('user1');
// update
// private update

subject2.setState('user2');
