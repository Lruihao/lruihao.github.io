---
title: web汇总
date: 2019-03-18 20:40:55
tags:
- Fullstack
- Frontend
- JavaScript
- Backend
categories:
- Fullstack
password:
abstract:
message:
description:
keywords:
- Fullstack
- Frontend
- JavaScript
- Backend
top: 9
author:
delicate: true
---
{% note info %}
下面一些web开发的一些总结，还有一些常用到的代码，脚本等！
{% endnote %}

<!--more-->
# front-end
## html
> - [HTML+CSS](https://lruihao.cn/posts/ms-html-css.html)

### oblique和intalic的区别
这两个都是`font-style`属性的值，这两个值都能实现倾斜的效果，但是有区别的。
- `intalic`: 这个是字体的倾斜，相当于**斜体**，字体必须有倾斜属性。
- `oblique`: 这个准确地说是让文字倾斜。相当于**斜字**，字体不一定要有倾斜属性。

### title显示换行
<a href="#" title="第一行&#10;第二行&#10;第三行">使用`&#10;`</a>或<a href="#" title="第一排&#13;第二排&#13;第三排">使用`&#13;`</a>
```
<a href="#" title="第一行&#10;第二行&#10;第三行">使用`&#10;`</a>
<a href="#" title="第一排&#13;第二排&#13;第三排">使用`&#13;`</a>
```
### 图片类型选择
{% asset_img imgType.jpg 图片类型选择 %}

## css
### flexbox
Flex布局将成为未来布局的首选方案，比如说常见的bootstrap4的版本就用flex替代了float来进行排版。
我在网上看到几个很好的教程,图文并茂，一目了然。
> - [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

实在懒癌发作，笔记本上手抄了笔记我就不写学习总结了，还有网友[Demo](http://static.vgee.cn/static/index.html)也写了。

## javascript
### keydown和keypress
- `keydown`：按下键盘键
- `keypress`：紧接着`keydown`事件触发（只有按下字符键时触发）
- 如果用户按下了一个**字符键**不放，就会重复触发`keydown`和`keypress`事件，直到用户松开该键为止。
- 如果用户按下了一个**非字符键**不放，就会重复触发`keydown`事件，直到用户松开该键为止。

[详解键盘事件(keydown，keypress，keyup)](https://www.jianshu.com/p/8f839f558319)

### textContent、innerText和innerHTML的区别
> 1. 设置标签中的文本内容,应该使用`textContent`或`innerText`（更老）属性,区别在于浏览器支援程度
2. `innerHTML`能够获得元素内的所有标签内容，也可以设置标签使之生效。（**注意防止XSS注入**）

**textContent**
{% can textcontent @ current %}
**innerText**
{% can innertext @ current %}

如果某个属性在浏览器中不支持,那么这个属性的类型是`undefined`，判断这个属性的类型是不是`undefined`，就知道浏览器是否支持。

```js 兼容代码 设置任意的标签中间的任意文本内容
<script>
  // 设置任意的标签中间的任意文本内容
  function setInnerText(element, text) {
      //判断浏览器是否支持这个属性
      if (typeof element.textContent == "undefined") {//不支持
          element.innerText = text;
      } else {//支持这个属性
          element.textContent = text;
      }
  };
</script>
```

## 图床方案

> - 自行搭建
比如使用开源图床ImgURL搭建的`img.lruihao.cn`（**需要服务器**）
使用上传工具加第三方免费空间，比如`PicGo + 腾讯云COS`（**无需服务器**）
- 使用各大图床
诸如sm.ms，腾讯云COS，阿里云OSS，七牛云，又拍云，Github，微博图床，ImgURL图床等等


## font-awesome
现在使用5的版本，可以使用`webfont+css`或`svg+js`
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
```xml
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

## jquery
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
> 更多学习内容见[学习课件](https://github.com/Lruihao/web-dev-data)  
练习作业[源码](https://github.com/Lruihao/hw)+[Demo](http://hw.lruihao.cn/)