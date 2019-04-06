---
title: 宝塔面板安装
date: 2019-03-18 21:31:43
tags:
- linux
- html/css
- server
- 宝塔面板
categories: linux
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

{% asset_img 1.png 宝塔面板后台 %}
极速方便的一键配置与管理，免除繁琐的命令行操作，通过Web面板一键即可操作实现。可选择安装lamp或者lnmp环境，可创建及管理网站，可创建及管理数据库，可创建及管理FTP等等。[宝塔官网介绍](https://www.bt.cn/?invite_code=MV9sYXJnZHI=)
<!--more-->
# 系统要求
> 操作系统：全新系统(支持CentOS、Ubuntu、Debian、Fedora、Deepin)，
确保是干净的操作系统，没有安装过其它环境带的Apache/Nginx/php/MySQL
宝塔Linux6.0版本是基于centos7开发的，强烈建议使用centos7.x 系统
内存要求：内存要求最低512MB，推荐768MB以上，纯面板约占系统60MB内存

# 安装方法
官方号称2分钟装好面板，一键管理服务器。
> 使用 SSH 连接工具，如宝塔远程桌面助手连接到您的 Linux 服务器后，挂载磁盘，根据系统执行相应命令开始安装（大约2分钟完成面板安装）：

```Shell Centos安装脚本
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh
```
```Shell Ubuntu/Deepin安装脚本
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh
```
```Shell Debian安装脚本
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && bash install.sh
```
```Shell Fedora安装脚本
wget -O install.sh http://download.bt.cn/install/install_6.0.sh && bash install.sh
```
{% asset_img 2.png 宝塔软件管理页面 %}

# 搭建ftp和云盘服务器

可以很傻瓜式的搭建自己的云盘，和平时用的比较多的ftp服务器。搭建静态网站也可以用ftp来上传文件。