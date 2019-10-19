---
title: java泛型test
date: 2019-03-16 13:56:01
tags:
- 泛型
- JAVA
categories:
- Backend
- JAVA
---

{% note warning %}
- 泛型方法，它在修饰符后，返回值类型前增加了类型参数(<>)
- 类型通配符一般使用问号`?`代替具体的类型`实`参，注意不是类型形参。
{% endnote %}
<!--more-->

# 代码
```java
package code0507;

public class WildCardTest {

	public static void main(String[] args) {
		Box<String>name=new Box<String>("hello");
		Box<Integer>age=new Box<Integer>(12);
		Box<Double>number=new Box<Double>(210.50);
		Box<Integer>point=new Box<Integer>();
		getData(name);
		getData(age);
		getData(number);
		point.printpoint(520, 1314);
		point.printpoint("me", "too");
	}
	
	public static void getData(Box<?>data){//类型通配符
		System.out.println("data:"+data.getData());
	}
}
class Box<T>{
	private T data;
	public Box() {}//构造方法重载
	public Box(T data) {
		setData(data);
	}
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}
	//定义泛型方法
	public<T1,T2>void printpoint(T1 x,T2 y){
		T1 m=x;
		T2 n=y;
		System.out.println("This point is:"+m+","+n);
	}
}
```
# 运行结果
```java
data:hello
data:12
data:210.5
This point is:520,1314
This point is:me,too
```

