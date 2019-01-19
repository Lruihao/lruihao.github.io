---
title: java标识符
date: 2019-01-14 15:07:57
tags: 
- java标识符
- java
categories: java
password:
abstract:
message:
description:
top:
author:
permalink:
---
### 标识符：
给类，接口，方法或者变量起名字的符号
### 组成规则：
A:英文字母大小写
B:数字
C:\_和$
### 注意事项：
A:不能以数字开头
B:不能是Java中的关键字
C:区分大小写
	Student,student 这是两个名称
### 常见命名方式：
A:包 其实就是文件夹,用于解决相同类名问题
	全部小写
	单级：com
	多级：cn.itcast
B:类或者接口
	一个单词：首字母大写
		Student,Person,Teacher
	多个单词：每个单词的首字母大写
		HelloWorld,MyName,NameDemo
C:方法或者变量
	一个单词：全部小写
	name,age,show()
	多个单词：从第二个单词开始，每个单词首字母大写
		myName,showAllStudentNames()
D:常量
	一个单词：全部大写
		AGE
	多个单词：每个单词都大写，用_连接
		STUDENT_MAX_AGE
