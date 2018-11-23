---
title: 通过bat批处理文件自动提交博客代码
date: 2018-11-17 14:25:49
tags:
- 批处理
- 脚本
- bat
categories: 通用
password:
abstract:
message:
description:
top:
author:
permalink:
---

> 前面我有文章提到怎么提交本地文件到github,coding等远程仓库。每次可以分为三个步骤
> - git add * (添加需要提交的文件，这里全选)
> - git commit -m "提交信息"
> - git push
>
> 但是这样感觉很麻烦每次都要重复输入提交命令和提示信息。
> 这个时候可以用到windows批处理bat文件(linux的话可以用shell脚本)。用完发现好用到不行!

<!--more-->
### 新建文本文档
```bat
@echo off
title Commit
git add .
set /p m=Message:
git commit -m "%m%"
git push
```
然后另存为`commit.bat`文件，只要后缀是`bat`就行了。

### 使用
把文件放到你原本需要提交代码的本地文件夹。双击运行，输入提交信息回车即可。

### hexo博客新姿势
hexo提交也很麻烦，当然也要批处理一下呀
```bat
hexo clean&&hexo g -d
```

### 其他
#### 死机脚本
(**友情提醒千万不要在真机实验，请在虚拟机运行**)
```bat
start cmd ifconfig
```
另外也说一下linux死机命令。fork炸弹。
死机无非是耗尽系统资源
```
_(){ _ | _ & }; _
```
这个&指后台运行的意思。
#### 统计文件名
```bat
dir \\?\%1 /a:-d /b /o /p /w >Filelist.txt
```
将需要统计的文件夹拖到bat文件上。