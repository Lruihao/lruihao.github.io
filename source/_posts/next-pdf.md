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

> 最新的next主题已经更新了支持PDF功能写法也和链接写法一样，可是我没有更新，我按github上那个readme试了一下好像不可以，所以用了另外一种插件的方法。

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
{% pdf /hexo/next-pdf/1.pdf %}
```
{% pdf /hexo/next-pdf/1.pdf %}