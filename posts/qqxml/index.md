# QQ 强制生成卡片式链接


> 以前在 QQ 里面聊天的时候发现，有些链接是卡片式的链接，像知乎里那些一样，就好奇为啥我的域名没有生成卡片。  
> 查了一下百度知道了大概就是 qq 没有抓取到你的网站的 xml。并在其他教程中得到了一个强制提交抓取的 url `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshareget_urlinfo?url=` 于是就有了脚本刷新的想法。简陋的写了一下。

<!--more-->

## 批量式刷新

```javascript 批量式刷新 js
//设置刷新前缀 url=首页地址（最好使用 https）
var base_src = 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshareget_urlinfo?url=https://lruihao.cn';
//用户地址
//var custom_src = "https://lruihao.cn";
//初始化工作地址
var new_src = '';
function createArrayAndOpenWindow() {
  //alert("number function");
  //定义数组存储后缀
  var numberArray = new Array(4);
  //存储后缀
  numberArray[0] = '/about/';
  numberArray[1] = '/categories/';
  numberArray[2] = '/tags/';
  numberArray[3] = '/archives/';
  //numberArray[4] = "/guestbook/";

  //遍历
  for (var i = 0; i < numberArray.length; i++) {
    new_src = base_src + numberArray[i];
    //打开该地址
    open_new();
    //清空后缀
    new_src = '';
  }
}

//负责打开窗口，并关闭
function open_new() {
  var new_window = window.open(new_src, '', 'width=400,height=200');
  setTimeout(function () {
    //开启后 200ms（单页）关闭，速度自行把握数组越大时间越多
    new_window.close();
  }, 2000);
}

window.onload = function () {
  createArrayAndOpenWindow();
  //设置定时函数，疯狂刷新直到 xml 出现内容
  var timer = setInterval('createArrayAndOpenWindow()', 2000);
};
```

## 单链接刷新

```html html
<div style="text-align: center;">
  <input type="text" id="input" value="" />
  <input type="button" value="疯狂刷新" onclick="yanzheng()" />
</div>
```

```javascript 单链接刷新 js
//设置刷新前缀 url=首页地址（最好使用 https）https://lruihao.cn
var base_src = 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshareget_urlinfo?url=';
//用户地址
var custom_src = '';
//初始化工作地址
var new_src = '';

//负责打开窗口，并关闭
function open_new() {
  var new_window = window.open(new_src, '', 'width=400,height=200');
  setTimeout(function () {
    //开启后 200ms 关闭
    new_window.close();
  }, 200);
}

// 获取验证用户输入
function yanzheng() {
  var Input = document.getElementById('input');
  var oValue = Input.value;
  custom_src = oValue;
  new_src = base_src + custom_src;
  if (oValue == 0) {
    alert('请输入地址');
  } else {
    var timer = setInterval('open_new()', 200);
  }
}
```

## demo

![线上 demo 仅做参考请自行下载](images/1.png '线上 demo 仅做参考请自行下载')  
![效果](images/2.png '效果')


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/qqxml/  

