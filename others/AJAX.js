/**
 * Created by wangjian on 2019/10/6.
 */

/*
    AJAX 全称asynchronous javascript and XML
    AJAX 是与服务器之间交换数据并且更新部分网页的技术
    不重新载入整个网页的情况下，传统的网页如果需要更新
    内容必须重载整个页面

    AJAX的工作原理：
      Browser：
        * create an XMLHttpRequest object
        * send httpRequest

      Server:
        * process httpRequest
        * create a response and send data back to browser

      Browser:
        * process the return data using javascript
        * update page content

     AJAX 是基于现有的Internet标准 并且联合使用它们
      1，XMLHttpRequest 对象（异步的与服务器交换数据）
      2，javascript/DOM 信息交互/显示
      3，css(给定数据定义样式/DOM）
      4，xml(作为转换数据的格式）
      XMLHttpRequest对象 是AJAX的基础
 */


/*
    xmlHttpRequest对象 methods
     1，open(post/get,url,async);
     2，send(data); ->dataType is string

     let xhr = new XMLHttpRequest();
     //xhr = window.XMLHttpRequest();
     console.log(xhr);
     xhr.open('GET','url',true);
     xhr.send();

     服务器响应
     1，XMLHttpRequest.prototype.responseText;
     2,XMLHttpRequest.prototype.responseXML;
     xhr.responseText;
     xhr.responseXML;

     响应回掉 onreadystatechange()
     当readyState 发生改变时 触发onreadystatechange函数
     readyState 的值 0-4
     0 请求未响应 1 服务器连接建立 2 请求接收 3 请求处理中 4 请求完成
     status
     xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200 {
            document.getElementById('container').innerText = xhr.responseText;
        }
     };
     xhr.open(method,url,async);
     xhr.send();   
     
     与post相比get更简单也更快，并在大部分情况下都可以使用，以下情况请使用post：
     1，无法使用缓存文件（更新服务器上的文件或数据库）
     2，向服务器发送大量数据
     3，发送包含未知字符的用户输入时，post比get更稳定更可靠
     
     xhr.setRequestHeader('content-type','application/x-www-from');
     xhr.send('frame=henry&name=test_name');
     
     如果使用async=false直接表示同步，所以不用onreadystatechange函数
 */



