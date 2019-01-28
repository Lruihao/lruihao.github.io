---
title: java继承test
date: 2019-01-24 15:07:50
tags:
- java
- 继承
categories: java
password:
abstract:
message:
description:
top:
author:
permalink:
noreward:
notshow:
---

{% note info %}
继承的好处：
1. 提高了代码的复用性
2. 提高了代码的维护性
3. 让类与类之间产生了关系，是多态的前提

继承的弊端：类的耦合性很强

设计原则：低耦合，高内聚。
- 耦合：类与类的关系。
- 内聚：自己完成事情的能力。
{% endnote %}

<!--more-->
### java中的继承特点
> Java只支持单继承，不支持多继承。Java支持多层继承(继承体系)

```java
class A {
}

class B extends A {
}
/*
class C extends A,B {
}
*/

class C extends B {
}

class ExtendsDemo {
	public static void main(String[] args) {
		
	}
}
```

### java中的继承注意事项
1. 子类只能继承父类所有非私有的成员(成员方法和成员变量)
2. 子类不能继承父类的构造方法，但是可以通过super关键字去访问父类构造方法。
3. 不要为了部分功能而去继承


那么，我们什么时候考虑使用继承呢?
	继承中类之间体现的是：”is a”的关系。
	如果两个类满足这个关系：xxx is a yyy，那么他们就可以使用继承。
```
Student,Person  对
Dog,Animal  对
Dog,Pig  错
```

### 继承
 
> 继承间的构造方法关系: 创建子类对象，会先去访问父类的构造方法。对父类的数据进行初始化。

```java
package jicheng;

class Fu{
	public int num = 10;
	public Fu(){
		System.out.println("父类");
	}
}
class Zi extends Fu{
	public int num = 20;
	public Zi(){
		System.out.println("子类");
	}
	public void show(){
		int num = 30;
		System.out.println(num);//30
		System.out.println(this.num);//20
		System.out.println(super.num);//10
	}
}

public class test {
	public static void main(String[] args) {
		Zi z = new Zi();  
		z.show();
	}
}
```
程序运行结果

```
父类
子类
30
20
10
```

### 代码块
> 代码块的执行顺序： 静态代码块 --> 构造代码块 --> 构造方法
代码的执行特点: 静态代码块只执行一次，构造代码块每次调用构造方法都执行。

```java
package jicheng;

class Fu {
	static {
		System.out.println("父类静态代码块");
	}

	{
		System.out.println("父类构造代码块");
	}

	public Fu() {
		System.out.println("父类构造方法");
	}
}

class Zi extends Fu {
	static {
		System.out.println("子类静态代码块");
	}

	{
		System.out.println("子类构造代码块");
	}

	public Zi() {
		System.out.println("子类构造方法");
	}
}


public class test {
	public static void main(String[] args) {
		Zi z = new Zi();
		Zi z2 = new Zi();
	}
}
```
程序运行结果：

```
父类静态代码块
子类静态代码块
父类构造代码块
父类构造方法
子类构造代码块
子类构造方法
父类构造代码块
父类构造方法
子类构造代码块
子类构造方法
```

### 继承间的成员关系
- 成员方法
不同名称： 非常简单，一看就知道调用谁
相同名称： 先在子类找，再在父类找
...
找不到就报错。

- 成员变量：
名字不同： 非常的简单，一看就知道使用的是谁。
名字相同： 就近原则。
> 使用变量的时候，会先找局部范围。
如果想直接使用成员变量，加关键字：this即可。
如果想直接使用父类的成员变量，加关键字：super即可。

### 注意事项
**子类中所有的构造方法默认都会访问父类中空参数的构造方法。为什么呢?因为子类会继承父类中的数据，可能还会使用父类的数据。所以，子类初始化之前，一定要先完成父类数据的初始化。**
