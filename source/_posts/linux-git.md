---
title: linux/centos 下的安装git
date: 2018-09-22 22:28:45
tags:
- Git
- linux
categories:
- Git
---

### 下载git
```
wget https://github.com/git/git/archive/v2.14.1.zip
```
### 安装依赖
```
sudo yum -y install zlib-devel openssl-devel cpio expat-devel gettext-devel curl-devel perl-ExtUtils-CBuilder perl-ExtUtils-MakeMaker
```
### 解压git
```
unzip v2.14.1.zip
```
注：
unzip命令用不了，具体步骤如下：
```
#yum list | grep zip/unzip 
#yum install zip
#yum install unzip
```
基本完成，如果在编译的时候出现错误：`gcc : error trying to exec 'cc1plus': execvp : No sunch file or directory`
可以用`gcc -v/g++ -v` 来查看gcc 版本，会发现没有安装。安装如下：

```
#yum list | grep gcc
#yum install gcc-c++
#yum install unzip
```
### 将git安装到/usr/local上
先进入git文件夹
编译
安装
```
cd git-2.14.1
make prefix=/usr/local all
make prefix=/usr/local install
```
### 验证是否安装完成
```
git --version
```

...
