---
title: HustOJ 基础搭建教程
date: 2019-05-17 23:08:04
tags:
- hustoj
- ACM
- ubuntu
- linux
categories:
- linux
---

{% note info no-icon %}
目前 HustOj 在 GitHUb 地址是：<https://github.com/zhblue/hustoj>
**安装时注意ubuntu版本**，没条件的可以在自己ubuntu上尝试，或者虚拟机上（关注公众号回复`ubuntu16.04`获取iso镜像文件），也可以在云实验室的云服务器上做做实验。
更多说明及ACM/NOIP题库下载见官网博客[代码的那些事|程序员回忆录](http://www.hustoj.com/)
{% endnote %}

<!--more-->
# 快速安装 OJ
下载
```bash
wget https://raw.githubusercontent.com/zhblue/hustoj/master/trunk/install/install-ubuntu16+.sh
```
安装
```bash
sudo bash install-ubuntu16+.sh
```
等待中一路回车，当提示 done！ 则表示安装成功：
{% asset_img 1.png %}

# 使用 HustOJ
打开网页/IP地址
注册admin
用 admin 作为用户名注册一个用户，将会自动成为管理员。
{% asset_img 2.png %}
注册成功，会提示：
{% asset_img 3.png %}
登录后台
登录账号，并点击右上角的管理：
{% asset_img 4.png %}
添加测试题目
在后台选择添加题目，添加成功：
{% asset_img 5.png %}
然后再提交代码测试判题机。

# 说明
安装后几个重要配置文件的位置
```
/home/judge/etc/judge.conf
/home/judge/src/web/include/db_info.inc.php
/etc/php5/fpm/php.ini 或 /etc/php7.0/fpm/php.ini
/etc/nginx/sites-enabled/default
```