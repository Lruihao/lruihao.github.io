---
title: 用记事本编写第一个java程序
date: 2019-04-19 19:49:54
tags:
- Backend
- JAVA
- HelloWorld
categories:
- Backend
- JAVA
password:
abstract:
message:
description:
keywords:
top:
sticky:
author:
permalink:
noreward:
notshow:
repost:
---


{% note info %}
之所以用记事本来写不是为了装X或者什么的。反而恰恰是返璞归真，因为在用java语言进行程序开发时，首先是以纯文本的方式编写所有的java源程序，并保存成以`.java`为后缀的文件；然后将这些源程序用`javac`编译成`.class`后缀名的字节代码文件；字节代码不是被本地处理器执行的代码，而是能够被java虚拟机（JVM）执行的代码。最后用java运行工具在JVM执行java应用程序。
由于JVM可以运行在不同的操作系统上，因此同一个字节代码文件可以跨平台运行。
- javac
- java
{% endnote %}

<!--more-->

{% asset_img 2.png %}

# 编写java
用记事本编辑java文件，并且把后缀改成`.java`，文件名和类名要一样。

```java
public class HelloWorld{
	public static void main(String[] args){
		System.out.println("Hello World!");
	}
}
```
# 打开cmd
{% asset_img 1.png %}