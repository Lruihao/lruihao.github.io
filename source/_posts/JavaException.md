---
title: 模拟借书系统（java异常练习）
date: 2019-05-01 16:52:21
tags:
- Backend
- JAVA
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
norelate:
repost:
---

{% asset_img 1.png 问题描述 %}

<!--more-->

# 实现代码

> 这里的异常主要是`InputMismatchException`,可以直接捕获该异常，我直接捕获了父类异常。。。

```java ExceptionDemo.java
package cn.lruihao.Exception;

import java.util.Scanner;

/**
 * @author 李瑞豪
 *	借书系统(异常练习)
 */

public class ExceptionDemo {
	private final Book[] books = {
		new Book("数据结构"),
		new Book("Java"),
		new Book("php"),
		new Book("c")
	};
	
	public static void main(String[] args) {
		System.out.println("欢迎来到借书系统！");
		ExceptionDemo jieshu= new ExceptionDemo();
		jieshu.menu();
	}
	
	public void menu() {
		System.out.println("输入命令：1.书名查找；\t2.序号查找；");
		 //初始化并捕获用户输入
		Scanner sc = new Scanner(System.in);
//		捕获异常
		try {
			int id =sc.nextInt();
			if(id==1||id==2) {
				inquire(id);
			}else {
				System.out.println("输入错误！请根据提示输入~~");//输入非1，2的数字情况
				menu();
			}
		}catch (Exception e) {//输入字符为非数字
			e.printStackTrace();
			System.out.println("输入错误，请输入数字命令~~");
			menu();
		}finally{
			sc.close();
		}
	}

	private void inquire(int id) {
		Scanner sc = new Scanner(System.in);
		
		if(id==1) {
			System.out.println("请输入要查找的书名！");
			String name=sc.nextLine();
			int num=FindName(name);
			if(num==0?false:true) {//验证书名是否存在 存在则打印
				System.out.println("book："+name+"\t序号："+num);
				//menu();//回到访问起点 也可以去掉终止程序
			}else{
	            System.out.println("图书不存在");
	            menu();
	        }
			sc.close();
		}else if(id == 2) {
			System.out.println("请输入您要查找的序号：");
			int id2=sc.nextInt();
			FindNum(id2);
			sc.close();
		}
		
	}

	private void FindNum(int num) {
		try {
			if(num>=0&&num<books.length) {
				 System.out.println(books[num].getName());
				 //menu();//回到访问起点 也可以去掉终止程序
			}else{
	            System.out.println("图书不存在");
	            menu();
	        }
		}catch (Exception e) {
			e.printStackTrace();
			System.out.println("输入有误！~~");
		}
		
	}

	private int FindName(String name) {
		int num=0;
		for(Book i:books) {
			String name1=i.getName();
			if(name1.equals(name)) {
				return num;
			}
			num++;
		}
		return 0;
	}
}
```

```java Book.java
package cn.lruihao.Exception;

public class Book {
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Book(String name) {
		this.name = name;
	}
	
}
```

# 大致运行效果
{% asset_img 2.png 部分运行 %}