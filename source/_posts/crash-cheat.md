---
title: 网页离开时改变标题“崩溃欺骗”
date: 2018-09-26 16:36:08
tags:
- hexo
- 前端
- javascript
categories:
- javascript
top:
author:
permalink:
---

> 从暑假到现在有好几个小伙伴问我博客的标题怎么变来变去的，不想再和每个人都说一遍了，耽误时间，索性写一下。

<!--more-->
## 创建一个js文件
我们先创建一个js文件，我们用记事本就好了，然后改个文件名，不妨就叫`crash-cheat.js`吧，你们可以随意！
然后把文件放到source文件夹的js文件夹的src里面。（我用的next主题，放这里统一存放，其他主题随意）
```js 崩溃欺骗(Jquery版)
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    $('[rel="icon"]').attr('href', "https://i.loli.net/2018/08/24/5b7fcb00ed9bf.png");
    document.title = '怎么回事╭(°A°`)╮';
    clearTimeout(titleTime);
  }
  else {
    $('[rel="icon"]').attr('href', "https://i.loli.net/2018/09/25/5baa4f21661e7.png");
    document.title = '小老弟(ฅ>ω<*ฅ)';
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
      $('[rel="icon"]').attr('href', "/images/favicon-32x32-next.png");
   }, 2000);
  }
});
```
```js 崩溃欺骗(JS版)
var oldTitle = document.title;
var titleTime; //標題恢復計時器
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.querySelector('[rel="icon"]').setAttribute("href", "/images/crash.png");
    document.title = "網站崩潰了！";
    clearTimeout(titleTime);
  } else {
    document.title = "其實並沒有！";
    document.querySelector('[rel="icon"]').setAttribute("href", "/images/favicon-32x32-next.png");
    titleTime = setTimeout(function () {
      document.title = oldTitle;
    }, 1000);
  }
});
```
## 使用

在`hexo\themes\hexo-theme-next\layout`文件路径找到`layout.swig`文件，其他有些主题用的是`.ejs`后缀，一样的。
然后打开文件，在`<body></body>`之间加入调用刚刚的js。

```
<script type="text/javascript" src="/js/src/crash-cheat.js"></script>
```
重新部署博客就可以了。