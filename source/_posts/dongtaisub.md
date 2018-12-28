---
title: hexo个性化-next主题动态显示subtitle
date: 2018-08-20 16:16:40
tags:
- hexo博客
- 前端
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

{% note success no-icon %}
本文适合我这种纯小白。
目前为止，全网也就只有一个博主写到过这样动态显示subtitle的文章。[传送门](https://www.jianshu.com/p/df2c844eeabf)（关键词：js,后加载）
但是嘞，该博写的不怎么详细，17年底写的。当然更大的可能是next更新了一些文件结构，所以不适合现在使用了。以前我按原博的流程配置了一下没成功就搁在那里了，今天突然心血来潮。翻了翻原博主博客的源码，再与自己的对比了一下，发现了一些端倪。稍作调整后如下：
{% endnote %}

<!--more-->
## 修改站点配置文件，主要修改subtitle

```
subtitle: 不怕万人阻挡，只怕自己投降。W你如何回忆，决定你是一个怎样的人！W这是一个句子。W这是另一个句子。W这些句子你们不要搞一样的不然怎么叫个性签名-_-！。
```
句子与句子之间以W分割，后续需要根据该标志位去拆分句子组。
**小伙伴们博主这里只是提供一个思路，不要和我用一模一样的啊，不然撞了多尴尬呀**

## 修改themes\next\layout_partials\header下面的index.swig文件。
在最开头添加如下代码：
(这里用的原博的js)

```java
<script>
 function GetRandomNum(Min,Max)
  {
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
  }
function setSidebarMarginTop (headerOffset) {
    return $('#sidebar').css({ 'margin-top': headerOffset });
  }
 function getHeaderOffset () {
    return $('.header-inner').height() + CONFIG.sidebar.offset;
  }
  window.onload=function(){
    var subtitle = "{{config.subtitle}}";
     var mytitle = subtitle.split("W");
     var max = mytitle.length-1;
     var index = GetRandomNum(0,max);
     var text = mytitle[index];
     $("#helloTitle").html(text);
     var headOffset = getHeaderOffset();
     setSidebarMarginTop(headOffset);
     //动态subtitle设置
  }
</script>
```

## 然后修改brand.swig的部分代码

找到
```
{% if subtitle %}
  {% if theme.seo %}
    ...
  {% else %}
    ...
  {% endif %}
{% endif %}
```
把这一段，把原来的修改成以下代码即可
ps: `title`和`subtitle`的`字体`还有`颜色`也可以在这个文件修改，即使用`style`标签，按个人爱好修改也可不要。


```java
{% if subtitle %}
  {% if theme.seo %}
    <p class="site-subtitle" id="helloTitle" itemprop="description"></p>
  {% else %}
    <p id="helloTitle" class="site-subtitle"></p>
  {% endif %}
{% endif %}
```

之后部署后每次刷新就可以看到不同的subtitle了，开心😀

效果详见：<https://lruihao.cn>

## api调用（11.29更）
直接js调用api简单快速
```html
<div>
  <script type="text/javascript" src="https://api.imjad.cn/hitokoto/?cat=&charset=utf-8&length=&encode=js&fun=sync&source="></script>
  <div id="hitokoto">
    <script>hitokoto()</script>
  </div>
</div>
```
[参数详见](https://api.imjad.cn/hitokoto.md)

**效果区（刷新可见）**

---
<script type="text/javascript" src="https://api.imjad.cn/hitokoto/?cat=&charset=utf-8&length=&encode=js&fun=sync&source="></script><div id="hitokoto"><script>hitokoto()</script></div>

---