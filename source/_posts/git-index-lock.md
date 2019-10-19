---
title: git index.lock
date: 2018-08-14 19:21:23
tags:
- Git
categories:
- Git
password:
abstract:
message:
description:
top:
author:
permalink:
---

在git没有运行完成之前强制关闭，下次提交的时候会产以下生错误，或者类似的。
```bash
fatal: Unable to create '/xxx/xx/.git/index.lock': File exists.

If no other git process is currently running, this probably means a
git process crashed in this repository earlier. Make sure no other git
process is running and remove the file manually to continue.
```
原因是在你进行某些比较费时的git操作时自动生成，操作结束后自动删除，相当于一个锁定文件，目的在于防止对一个目录同时进行多个操作。
有时强制关闭进行中的git操作，这个文件没有被自动删除，之后你就无法进行其他操作，必须手动删除，进入.git文件中删除，打开显示隐藏文件。如果没有看见.git文件夹，可以直接用命令` rm -f ./.git/index.lock`。之后就可以正常使用。