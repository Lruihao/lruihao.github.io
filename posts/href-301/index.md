# 使用 js 准确获取当前页面 url 网址信息及 301 重定向实战


### 获取链接（转）

[传送门](https://www.cnblogs.com/zhabayi/p/6419938.html)  
在 WEB 开发中，时常会用到 javascript 来获取当前页面的 url 网址信息，在这里是我的一些获取 url 信息的小总结。

下面我们举例一个 URL，然后获得它的各个组成部分：`http://i.cnblogs.com/EditPosts.aspx?opt=1`

#### window.location.href（设置或获取整个 URL 为字符串）

```
var test = window.location.href;
alert(test);
```

返回：`http://i.cnblogs.com/EditPosts.aspx?opt=1`

#### window.location.protocol（设置或获取 URL 的协议部分）

```
var test = window.location.protocol;
alert(test);
```

返回：`http:`

#### window.location.host（设置或获取 URL 的主机部分）

```
var test = window.location.host;
alert(test);
```

返回：`i.cnblogs.com`

#### window.location.port（设置或获取与 URL 关联的端口号码）

```
var test = window.location.port;
alert(test);
```

返回：空字符（如果采用默认的 80 端口 (update: 即使添加了：80)，那么返回值并不是默认的 80 而是空字符）

#### window.location.pathname（设置或获取与 URL 的路径部分（就是文件地址）)

```
var test = window.location.pathname;
alert(test);
```

返回：`/EditPosts.aspx`

#### window.location.search（设置或获取 href 属性中跟在问号后面的部分）

```
var test = window.location.search;
alert(test);
```

返回：`?opt=1`

PS：获得查询（参数）部分，除了给动态语言赋值以外，我们同样可以给静态页面，并使用 javascript 来获得相信应的参数值。

#### window.location.hash（设置或获取 href 属性中在井号“#”后面的分段）

```
var test = window.location.hash;
alert(test);
```

返回：空字符（因为 url 中没有）

#### js 获取 url 中的参数值

##### 正则法

```java
function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
// 这样调用：
alert(GetQueryString("参数名 1"));

alert(GetQueryString("参数名 2"));

alert(GetQueryString("参数名 3"));
```

##### split 拆分法

```java
function GetRequest() {
  var url = location.search; //获取 url 中"?"符后的字串
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for(var i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}
var Request = new Object();
Request = GetRequest();<br>// var id=Request["id"];
// var 参数 1, 参数 2, 参数 3, 参数 N;
// 参数 1 = Request['参数 1'];
// 参数 2 = Request['参数 2'];
// 参数 3 = Request['参数 3'];
// 参数 N = Request['参数 N'];
```

##### 指定取

比如说一个 url：`http://i.cnblogs.com/?j=js`, 我们想得到参数 j 的值，可以通过以下函数调用。

```java
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg); //获取 url 中"?"符后的字符串并正则匹配
  var context = "";
  if (r != null)
     context = r[2];
  reg = null;
  r = null;
  return context == null || context == "" || context == "undefined" ? "" : context;
}
alert(GetQueryString("j"));
```

### 301 重定向（实践）

由于之前把 blog 和网站主页分开在两个仓库所以要想在 blog 中 menu 里跳转到站外链接就要做一些处理。以前一直百度不到。
其实想法早就有了，只要在 blog 首页或者网站首页检测到`https://lruihao.cn/home`这个链接，或者检测到 home 字段就自动跳转。想法很简单。可是对 js 真的一点都不了解，以前百度也找不到实际的效果案例。所以还是自己写吧！附上蹩脚代码。

```java
var path = window.location.href;
    //alert(path);
    if (path=='https://lruihao.cn/home/') {
      window.location.replace("https://www.lruihao.cn");
    }
```

或者

```java
var path = window.location.pathname;
    //alert(path);
    if (path=='/home/') {
      window.location.replace("https://www.lruihao.cn");
    }
```

http 强制重定向 https

```java
<script>
  var targetProtocol = "https:";
  var host = "lruihao.cn"; //域名判断，因为 localhost 仅支持 http
  if (window.location.host == host && window.location.protocol != targetProtocol){
    window.location.href = targetProtocol +
      window.location.href.substring(window.location.protocol.length);
    }
</script>
```


---

> 作者:   
> URL: https://lruihao.cn/posts/href-301/  

