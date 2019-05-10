---
title: 文件加密解密（字节流）
date: 2019-05-02 23:04:32
tags:
- java
- java字节流
categories:
- java
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


{% note info %}
基本功能： 给定一个密钥，读取文件内容，加密后，输出到另外一个文件。

这里使用文件输入流读取文件内容，然后每个字节和密码进行异或简单加密。加密完成，使用文件输出流写入另一个文件中。解密和加密方法一样。利用的是对同一个数异或两遍其值不变的性质。因此一个程序可以完成加密和解密功能。只需修改文件名即可。
{% endnote %}


<!--more-->

# 文件加密解密

```java
package cn.lruihao.base;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class EncryptFile {

	public static void main(String[] args) throws IOException {
		byte pwd=123;//加密/解密密码
		FileInputStream f=new FileInputStream("src/cn/lruihao/base/EncryptFile.java");//待加密文件
		FileOutputStream fout=new FileOutputStream("encrypted.txt");//已加密文件
		System.out.println("开始加密。。。");
		int n=f.available()/5;
		byte[] b=new byte[n];//以一个字节数组的长度读取和复制
		int count=0;
		while((count=f.read(b,0,n))!=-1) {
			//写入之前先加密/解密
			for(int i=0;i<count;i++) {
				b[i]=(byte)(b[i]^pwd);//
			}
			fout.write(b,0,count);
		}
		System.out.println("完成加密");
		f.close();
		fout.close();
//		f=new FileInputStream("encrypted.txt");
//		fout=new FileOutputStream("unencrypted.txt");
//		System.out.println("开始解密。。。");
//		n=f.available()/5;
//		b=new byte[n];//以一个字节数组的长度读取和复制
//		count=0;
//		while((count=f.read(b,0,n))!=-1) {
//			//写入之前先加密/解密
//			for(int i=0;i<count;i++) {
//				b[i]=(byte)(b[i]^pwd);
//			}
//			fout.write(b,0,count);
//		}
//		System.out.println("完成解密");
//		f.close();
//		fout.close();
	}

}
```

# 文件复制
```java
package cn.lruihao.base;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class FileStreamCopy {

	public static void main(String[] args) throws IOException {
		int size;
		FileInputStream f=new FileInputStream("src/cn/lruihao/base/FileStreamCopy.java");
		FileOutputStream fout=new FileOutputStream("copy-of-file.txt");
		System.out.println("总长度："+(size=f.available()));
		int n=size/10;
		System.out.print("使用单字节方法读取后：");
		for(int i=0;i<n;i++) {
			fout.write(f.read());
		}
		System.out.println("剩余长度："+f.available());
		System.out.println("读取一个字节数组后：");
		byte b[]=new byte[n];
		f.read(b);
		fout.write(b);
		System.out.println("剩余长度："+f.available());
		System.out.println("读取余下数据：");
		int count=0;
		while((count=f.read(b,0,n))!=-1) {
			//System.out.println(count);
			fout.write(b,0,count);
		}
		System.out.println("剩余长度："+f.available());
		f.close();
		fout.flush();
		fout.close();
	}

}
```

```java
package cn.lruihao.base;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class BufferedStreamCopy {

	public static void main(String[] args) throws IOException {
		FileInputStream f=new FileInputStream("src/cn/lruihao/base/BufferedStreamCopy.java");
		FileOutputStream fout=new FileOutputStream("copy-of-file.txt");
		BufferedInputStream bis=new BufferedInputStream(f);
		BufferedOutputStream bos=new BufferedOutputStream(fout);
		System.out.println("开始复制。。。");
		int n=f.available()/5;
		byte[] b=new byte[n];
		int count=0;
		while((count=bis.read(b,0,n))!=-1) {
			bos.write(b,0,count);
		}
		System.out.println("复制完成");
		bis.close();
		bos.flush();
		bos.close();
		f.close();
		fout.flush();
		fout.close();
	}

}
```