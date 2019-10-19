---
title: 模仿知乎卡片式链接
date: 2019-03-15 15:21:39
tags:
- Frontend
- JavaScript
- hexo
categories:
- Frontend
- JavaScript
password:
abstract:
message:
description:
keywords: 知乎卡片式链接
---


{% note info %}
模仿知乎的卡片式链接。改自[兰州小红鸡](https://me.idealli.com/post/a714f04b.html)
我为了每次少写一行js引用略作修改。
{% endnote %}

<!--more-->

这是一种后加载，创建`linkcard.js`放到`source/js/src/`，然后在`next\layout\_macro\post.swig`中引用

```java 知乎卡片链接
  <!--知乎卡片链接-->
  <script type="text/javascript" src="/js/src/linkcard.js"></script>
```
html链接写法,a标签加上`class="LinkCard"`
```
<a href="https://github.com/Lruihao/lruihao.github.io" target="_blank" class="LinkCard">Lruihao博客</a>
```

<a href="https://github.com/Lruihao/lruihao.github.io" target="_blank" class="LinkCard">Lruihao博客</a>