---
title: next添加支持pdf
date: 2018-11-09 12:51:48
tags:
- hexo
- pdf
categories: hexo
password:
abstract:
message:
description:
top:
author:
permalink:
---

> 最新的next主题已经更新了支持PDF功能，~写法也和链接写法一样~，可是我没有更新，我按github上那个readme试了一下好像不可以，所以用了另外一种插件的方法。


## 模板自带
> 今天（2019.4.3）又看了一下，改了写法，写法和插件一样，我在我的模板里也更新了。（插件模板二选一即可,个人更喜欢插件）
但是如果安装插件后，也是优先模板的pdf脚本解析pdf,所以在我的模板中把模板的pdf脚本先注释了。要启用去掉注释即可。

```js next\scripts\tags\pdf.swig
/*
'use strict';

function pdf(args) {
  return `<div class="pdf" target="${args[0]}" height="${args[1] || ''}"></div>`;
}

hexo.extend.tag.register('pdf', pdf, {ends: false});
*/
```

## pdf插件

### 安装
```bash
npm install --save hexo-pdf
```

### 使用
```
{% pdf url %}
```
比如本文
```
{% pdf /posts/next-pdf/1.pdf %}
```
{% pdf /posts/next-pdf/1.pdf %}