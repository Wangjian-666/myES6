/**
 * Created by wangjian on 2019/10/6.
 */
/*
    前端跨域解决方案和实现原理
    首先跨域是基于解决浏览器的同源策略(一种安全策略)
    同源策略：协议 + 域名 + 端口 三者必须相同
    所以就会出现以下情况：
    1，不同协议，同一域名
    2，同一域名，不同端口
    3，不同域名
    4，主域名相同，子域名不同
    5，域名和域名对应相同的ip
 */
/*
  方案1JSONP 此方法需要后台支持和后台交互，一般使用JSONP通过动态创建script标签
  请求一个带参网址实现跨域通信
 */

/*
<script>
 let script = document.createElement('script');
 script.type = 'text';
 script.src = 'http:www.domain2.com?user=admin&callback=onBack';
 let onBack = function(res) {
 console.log(JSON.stringify(res));
 };
 </script>
 */

/*
    2document.domain + iframe 跨域
    此方法仅限主域相同 子域不同的跨域场景，用来实现页面间的跨域通信
    实现原理：两个页面都通过js强制设置document.domain为基础主域
 */
/*
A：
<iframe id = 'iframe' src= 'http://child.domain.com/b.html'>
<script>
document.domain = 'domain.com';
let user = 'admin';
<script>
B:
<script>
document.domain = 'domain.com';
window.parent.user;
 */

/*
    3Location.hash + iframe 跨域
    实现原理:a欲与b跨域相互通信，通过中间页面c来实现，三个页面不同域
    之间利用iframe的location.hash传值 相同域之间直接js来访问通信
 */

/*
    4window.name + iframe 跨域
    实现原理:window.name属性的独特之处在于name值在不同的页面(甚至不同域名)
    加载后依旧存在并且可以支持非常长的name值(2MB）
 */

/*
    5postMessage跨域
    postMessage是HTML5 xmlHttpRequest Level2 中的API 且是为数不多
    可以跨域操作那的window属性之一,用于解决
    1，页面和其打开的新窗口之间的数据传递
    2，多窗口之间的消息传递
    3，页面嵌套的iframe之间的消息传递
    4，以上三个场景的跨域数据传递
 */

/*
    6跨域资源共享（cores）
 */

/*  
    7nginx 代理跨域
    跨域原理：同源策略是浏览器的安全策略，不是HTTP协议的一部分
    服务器段调用HTTP接口只是使用HTTP协议不同执行JS脚本，不需要同源策略
    也就是不存在跨域问题
    实现思路：通过nginx配置一个代理服务器，做跳板机，反向代理访问
 */

/*
    8node.js中间件代理跨域
    node中间件实现跨域代理原理大致与nginx相同，都是通过启用一个代理服务器
    实现数据的转发
 */

/*  
    9WebSocket 协议跨域
    WebSocket Protocol 是HTML5的一种新协议 实现了浏览器与服务器
    全双工通信 同时允许跨域通信 是server push技术的一种很好的实现
 */