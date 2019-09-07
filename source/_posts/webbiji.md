---
title: web笔记
date: 2019-03-18 20:40:55
tags:
- html/css
- 前端
categories: Web
password:
abstract:
message:
description:
keywords:
- html/css
- 前端
- 后端
top:
sticky:
author:
permalink:
noreward:
notshow:
---

{% note info %}
下面一些web设计等常用到的代码，脚本等！
{% endnote %}

<!--more-->

# front-end
> - [HTML+CSS](https://lruihao.cn/posts/ms-html-css.html)

## 图床方案

> - 自行搭建
比如使用开源图床ImgURL搭建的`img.lruihao.cn`（**需要服务器**）
使用上传工具加第三方免费空间，比如`PicGo + 腾讯云COS`（**无需服务器**）
- 使用各大图床
诸如sm.ms，腾讯云COS，阿里云OSS，七牛云，又拍云，Github，微博图床，ImgURL图床等等


## font-awesome
```xml font-awesome
<link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
 ```
其他的图标js
```
<script src="//at.alicdn.com/t/font_578712_g26jo2kbzd5qm2t9.js"></script>
<svg class="card-avatar" aria-hidden="true">
  <use xlink:href="#icon-{{n+1}}"></use>                <!--n为一个数字-->
</svg>
```

## 响应式（自适应）

```xml bootstrap
<link rel="stylesheet" href="https://apps.bdimg.com/libs/bootstrap/3.3.4/css/bootstrap.min.css">
<script src="https://apps.bdimg.com/libs/bootstrap/3.3.4/js/bootstrap.min.js">
```
```xml 不引入js
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=0">
```

> - .col-xs- 超小屏幕 手机 <768px
- .col-sm- 小屏幕 平板  >=768px
- .col-md- 中等屏幕  >=992px
- .col-lg- 大屏幕  >1200px

```css css3写法@media (宽度具体调整)
/* 手机等小屏幕手持设备 */
@media screen and (min-width: 320px) and (max-width: 480px) {

	/*手机端css样式表*/

}
/* 平板之类的宽度 1024 以下设备 */
@media only screen and (min-width: 321px) and (max-width: 1024px) {

	/*电脑端css样式表*/

}
```
```xml link引入不同css
<!--手机端-->
<link rel="stylesheet" type="text/css" href="style_phone.css" media="screen and (max-width: 960px)"/>
<!--电脑端-->
<link rel="stylesheet" type="text/css" href="style_PC.css" media="screen and (min-width: 960px)"/>
```

## jquery源
```xml jquery
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

<script src="https://lib.sinaapp.com/js/jquery/2.0.2/jquery-2.0.2.min.js"></script>

<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>

<script src="http://cdn.bootcss.com/jquery/1.11.0/jquery.min.js"></script>
//还有其他的源...
```

## QQ推广链接
> [QQ推广](https://shang.qq.com/v3/widget.html) [QQ群](https://qun.qq.com/join.html)

```
<a target="_blank" href="https://wpa.qq.com/msgrd?v=3&uin=1074627678&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:1074627678:51" alt="点击这里给我发消息" title="点击这里给我发消息"/></a>
```
<a target="_blank" href="https://wpa.qq.com/msgrd?v=3&uin=1074627678&site=qq&menu=yes"><img border="0" src="https://wpa.qq.com/pa?p=2:1074627678:51" alt="点击这里给我发消息" title="点击这里给我发消息"/></a>

## Google fonts
```diff
https://fonts.google.com/
一般选用国内源镜像替代（待补充...）
+ https://fonts.loli.net
+ //fonts.lug.ustc.edu.cn
```

## fancybox
[github介绍](https://github.com/fancyapps/fancybox)&emsp;[fancybox源](https://www.bootcdn.cn/fancybox/)
```xml fancybox源
<link href="https://cdn.bootcss.com/fancybox/3.5.7/jquery.fancybox.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/fancybox/3.5.7/jquery.fancybox.min.js"></script>
```

# back-end
