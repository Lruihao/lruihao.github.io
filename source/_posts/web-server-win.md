---
title: windows上搭建web服务器
date: 2018-10-26 21:56:18
tags:
- server
- windows
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

> 我用的 win10

### 打开控制面板
选择并进入“程序”，双击“启用或关闭Windows服务”，在弹出的窗口中选择“Internet Information Services”下面所有地选项，点击确定后，开始更新服务。
{% asset_img 1.png %}

### 查看
更新完成后，打开浏览器，输入`http://localhost`或者`127.0.0.1`回车，如果此时出现IIS7欢迎界面，说明Web服务器已经搭建成功。 
{% asset_img 2.png %}

### 网站设置
当web服务器搭建成功后，我们下一步所要做的就是把我们开发的网站安装到Web服务器的目录中。一般情况下，当Web服务器安装完成后，会创建路径`%系统根目录%inetpub/wwwroot`，将我们开发的网站COPY到该路径下。即可实现本地访问该网站。
{% asset_img 3.png %}
也可以更改根目录，搜索IIS，点击网站，Default Web Site，基本设置修改物理路径（**默认站点名称不要改**）
我这里改到了hexo的public相当于hexo部署在本地服务器`58.45.227.225`
{% asset_img 5.png %}
{% asset_img 6.png %}
{% asset_img 7.png %}
### 设置防火墙
让局域网当其它计算机也能访问本地网站资源。具体方法：打开控制面板，选择“系统和安全”，点击“允许程序通过Windows防火墙”，在弹出的对话框中勾选“万维网服务HTTP”右侧的两个复选框，最后点击确定退出。
{% asset_img 4.png %}

在局域网中其它计算机上，打开浏览器就可以通过你电脑的ip地址访问了（手机也可以）
本地ip可以通过cmd用ipconfig查看