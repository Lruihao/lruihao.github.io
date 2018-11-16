---
title: 动态title-网站标题崩溃欺骗
date: 2018-09-26 16:36:08
tags:
- hexo博客
- 前端
- js
categories:
- hexo博客
password:
abstract:
message:
description:
top:
author:
permalink:
---

> 从暑假到现在有好几个小伙伴问我博客的标题怎么变来变去的，前面我和每个人都说一遍，现在觉得好耽误时间，索性写一下。其实看我博客比较仔细的，会发现这个js也是我我在别人博客看到的，在我的那篇搭建博客的教程里写了链接。


<!--more-->
## 创建一个js文件
我们先创建一个js文件，我们用记事本就好了，然后改个文件名，不妨就叫`crash_cheat.js`吧，你们可以随意！
然后把文件放到source文件夹的js文件夹的src里面。（我用的next主题，放这里统一存放，其他主题随意）
```
<!--崩溃欺骗-->
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
## 使用

在`hexo\themes\hexo-theme-next\layout`文件路径找到`layout.swig`文件，其他有些主题用的是`.ejs`后缀，一样的。
然后打开文件，在`<body></body>`之间加入调用刚刚的js,在`<head></head>`也可以的，区别自行百度！

```
<script type="text/javascript" src="/js/src/crash_cheat.js"></script>
```
重新部署博客就可以了。