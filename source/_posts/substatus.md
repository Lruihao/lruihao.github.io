---
title: Java父类子类的对象初始化过程
date: 2019-03-21 13:36:25
tags:
- java
categories: java
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
---

> 摘要: Java基本的对象初始化过程，子类的初始化，以及涉及到父类和子类的转化时可能引起混乱的情况。

<!--more-->

# 基本初始化过程
对于一个简单类的初始化过程是：
`static 修饰的模块（static变量和static 块） => 按照代码顺序依次执行。`
↓
`实例变量  及非static模块 => 按照代码顺序依次执行。`
↓
`构造函数 => 执行对应的构造函数。`

# 子类的初始化过程
`父类static修饰的模块`
↓
`子类static修饰模块`
↓
`父类实例变量和非static块`
↓
`父类对应构造函数。当子类对应构造函数中没有显示调用时调用的是父类默认的构造函数。`
↓
`子类实例变量和非static块`
↓
`子类构造函数`

```java Debug demo
package code0507;

public class Demo {
	public static void main(String[] args) {

		Sub sub = new Sub();
		System.out.println(sub);

	}
}

class Super {
	int a = 6;

	public Super() {
		test();  //被子类同名函数覆盖，优先访问子类test
	}
	int b=9;

	public void test() {
		System.out.println(a);
	}
}

class Sub extends Super {
	int a = 8;

	public Sub() {
		test();
	}

	public void test() {
		System.out.println(a);
	}
}

```
运行结果
```
0
8
```