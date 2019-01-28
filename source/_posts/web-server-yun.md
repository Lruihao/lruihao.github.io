---
title: 云服务器CentOS系统搭建web服务（转）
date: 2018-10-29 09:15:58
tags:
- 他山之石
- web server
- 云服务器
- 通用
categories: 通用
password:
abstract:
message:
description:
top:
author:
permalink:
---

### 搭建Apache web服务

1.安装Apache超文本传输协议(HTTP)服务器的主程序
```
[root@VM_0_6_centos /]# yum install -y httpd
```
注意安装目录，可通过cd 命令切换。

2.启动HTTP服务
```
[root@VM_0_6_centos /]# systemctl start httpd.service 
```
如果启动失败，可通过systemctl status httpd.service查看错误原因。
启动成功，证明http服务已经可以使用，发现还需要把本地文件传到服务器。
默认根目录`/var/www/html/`

### 使用SSH连接服务器

尝试了两种方式：PuTTY和Xshell（推荐）
#### Xshell方式
官网下载安装Xshell打开，输入ip账号密码连接主机。

使用lrzsz方式上传下载文件
步骤1：在服务器安装lrzsz
```
[root@VM_0_6_centos /]# yum -y install lrzsz
```
步骤2：输入命令`rz`打开上传窗口(可以选择多个文件。)
使用`sz`文件名命令可打开从服务器下载文件的保存窗口。

### 修改HTTP配置
1.VIM编辑器打开配置文件
```
[root@VM_0_6_centos /]# vim /etc/httpd/conf/httpd.conf
```
2.按`I`键进入编辑模式

3.找到并修改以下内容
```
ServerAdmin 管理员邮箱，用于浏览器请求报错时展示
DocumentRoot 访问根目录（默认：/var/www/html），如项目存放在其他地方，可修改为项目存放位置
<Directory "/var/www/html"> 同DocumentRoot 配置
ServerName 服务器IP或 域名 
```
4.按下ESC键输入`:wq`保存退出

5.重启服务`service httpd restart`

6.打开浏览器，输入地址访问
如:我的项目索引html路径为love/index.html，输入
http://IP地址或域名/love/index.html

7.访问不成功，先检查网络，再查看http服务是否开启，最后检查配置；
访问成功，配置完成。

链接：https://www.jianshu.com/p/0b67c6c5d21d
