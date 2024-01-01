# QQ 强制生成卡片式链接


&gt; 以前在 QQ 里面聊天的时候发现，有些链接是卡片式的链接，像知乎里那些一样，就好奇为啥我的域名没有生成卡片。  
&gt; 查了一下百度知道了大概就是 qq 没有抓取到你的网站的 xml。并在其他教程中得到了一个强制提交抓取的 url `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshareget_urlinfo?url=` 于是就有了脚本刷新的想法。简陋的写了一下。

&lt;!--more--&gt;

## 批量式刷新

```javascript 批量式刷新 js
//设置刷新前缀 url=首页地址（最好使用 https）
var base_src = &#39;https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshareget_urlinfo?url=https://lruihao.cn&#39;;
//用户地址
//var custom_src = &#34;https://lruihao.cn&#34;;
//初始化工作地址
var new_src = &#39;&#39;;
function createArrayAndOpenWindow() {
  //alert(&#34;number function&#34;);
  //定义数组存储后缀
  var numberArray = new Array(4);
  //存储后缀
  numberArray[0] = &#39;/about/&#39;;
  numberArray[1] = &#39;/categories/&#39;;
  numberArray[2] = &#39;/tags/&#39;;
  numberArray[3] = &#39;/archives/&#39;;
  //numberArray[4] = &#34;/guestbook/&#34;;

  //遍历
  for (var i = 0; i &lt; numberArray.length; i&#43;&#43;) {
    new_src = base_src &#43; numberArray[i];
    //打开该地址
    open_new();
    //清空后缀
    new_src = &#39;&#39;;
  }
}

//负责打开窗口，并关闭
function open_new() {
  var new_window = window.open(new_src, &#39;&#39;, &#39;width=400,height=200&#39;);
  setTimeout(function () {
    //开启后 200ms（单页）关闭，速度自行把握数组越大时间越多
    new_window.close();
  }, 2000);
}

window.onload = function () {
  createArrayAndOpenWindow();
  //设置定时函数，疯狂刷新直到 xml 出现内容
  var timer = setInterval(&#39;createArrayAndOpenWindow()&#39;, 2000);
};
```

## 单链接刷新

```html html
&lt;div style=&#34;text-align: center;&#34;&gt;
  &lt;input type=&#34;text&#34; id=&#34;input&#34; value=&#34;&#34; /&gt;
  &lt;input type=&#34;button&#34; value=&#34;疯狂刷新&#34; onclick=&#34;yanzheng()&#34; /&gt;
&lt;/div&gt;
```

```javascript 单链接刷新 js
//设置刷新前缀 url=首页地址（最好使用 https）https://lruihao.cn
var base_src = &#39;https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshareget_urlinfo?url=&#39;;
//用户地址
var custom_src = &#39;&#39;;
//初始化工作地址
var new_src = &#39;&#39;;

//负责打开窗口，并关闭
function open_new() {
  var new_window = window.open(new_src, &#39;&#39;, &#39;width=400,height=200&#39;);
  setTimeout(function () {
    //开启后 200ms 关闭
    new_window.close();
  }, 200);
}

// 获取验证用户输入
function yanzheng() {
  var Input = document.getElementById(&#39;input&#39;);
  var oValue = Input.value;
  custom_src = oValue;
  new_src = base_src &#43; custom_src;
  if (oValue == 0) {
    alert(&#39;请输入地址&#39;);
  } else {
    var timer = setInterval(&#39;open_new()&#39;, 200);
  }
}
```

## demo

![线上 demo 仅做参考请自行下载](images/1.png &#39;线上 demo 仅做参考请自行下载&#39;)  
![效果](images/2.png &#39;效果&#39;)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/qqxml/  

