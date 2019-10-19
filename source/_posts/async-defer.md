---
title: script的三种加载方式（async、defer）
date: 2019-09-08 11:47:50
tags:
- async
- defer
- Frontend
- JavaScript
categories:
- Frontend
- JavaScript
---

{% note info no-icon %}
JS的加载分为两个部分：下载和执行。
浏览器在执行HTML的时候如果遇到`<script>`时会停止页面的渲染,去下载和执行js的文件直接遇见`</scirpt>`会继续渲染页面。故浏览器在执行js文件的时候浏览器表现为一片空白,为了解决这个问题ECMAScript定义了defer和async两个属性用于控制JS的下载和执行。
{% endnote %}

<!--more-->
{% asset_img async_vs_defer.svg 三种加载模式 %}

# 不带任何属性
> 同步模式，又称阻塞模式，我们平时使用的最多的一种方式。当浏览器解析到`<script>`标签时，浏览器会停止解析其后的内容，而优先下载脚本文件，并执行其中的代码，是个同步阻塞的过程。
一般建议把`<script>`标签放在`<body>`结尾处，这样尽可能减少页面阻塞。
而如果想要异步执行script，则可以给其加上async或defer属性。

```
<script>
```
# defer
> defer属性在HTML解析期间异步下载文件，并且只在HTML解析完成后才执行它。对于defer，我们可以理解是将外链的js放在了页面底部。js的加载不会阻塞页面的渲染和资源的加载。不过defer会按照原本的js的顺序执行，**所以如果前后有依赖关系的js可以放心使用。**

```
<script defer>
```

# async
> async属性会在HTML解析期间异步下载文件，并在完成下载后立即暂停HTML解析器去执行script中的代码。在执行过程中浏览器处于阻塞状态，响应不了任何需求。**如果js前后有依赖性，用async，就很有可能出错。**

```
<script async>
```

# 区别
**相同点：**
1. 加载文件时不阻塞页面渲染
2. 对于inline的script无效（只适用有`src`的外部js）
3. 使用这两个属性的脚本中不能调用document.write方法
3. 有脚本的onload的事件回调

**区别点：**
1. html4.0中定义了defer；html5.0中定义了async
2. 浏览器支持不同
3. 每一个async属性的脚本都在它下载结束之后立刻执行，同时会在window的load事件之前执行。所以就有可能出现脚本执行顺序被打乱的情况；每一个defer属性的脚本都是在页面解析完毕之后，按照原本的顺序执行，同时会在document的DOMContentLoaded之前执行。

# 那么这三种方式各在什么情况下使用呢？
通常来说，尽可能使用`async`，然后是`defer`，最后不使用属性。
并遵循以下规则：
- 如果脚本是模块化的，并且不依赖于任何脚本，则使用`async`。
- 如果脚本依赖于或依赖于另一个脚本，则使用`defer`。
- 如果脚本很小并且有`async`脚本依赖该脚本，则不加属性。

# 兼容性
1. Internet Explorer 10、Firefox、Opera、Chrome 和 Safari 支持 async 属性。
2. 所有主流浏览器都支持defer属性。

# 参考
- <https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html>
- <https://www.jianshu.com/p/17dc82bf08f1>