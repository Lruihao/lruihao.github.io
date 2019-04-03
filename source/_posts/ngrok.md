---
title: 本地搭建网站服务器并穿透内网
date: 2019-04-03 19:29:43
tags:
- ngrok
- linux
- 总结
- 宝塔面板
- server
categories: linux
password:
abstract:
message:
description:
keywords:
- ngrok
- 内网穿透
- ubuntu
- 搭建网站
- 本地服务器
- 宝塔面板
top:
sticky:
author:
permalink:
noreward:
notshow:
repost:
---


{% note %}
一直都想在自己电脑上搭建一个网站或者把自己的电脑做成服务器，今天终于简单实现了。还有很多知识需要学习，简单记录一下。
{% endnote %}

<!--more-->

# 搭建环境
我的电脑是`ubuntu+windows`双系统的，所以我先在ubuntu上面装了一个宝塔面板，方便通过web管理电脑，宝塔安装好后安装相关的环境`mysql,php,nginx`等。我们现在只能通过本地`ip127.0.0.1:8888`访问面板。

# ngrok穿透
去ngrok注册登录，购买隧道（有免费的），然后绑定端口，绑定域名，这里我们拿端口`8888`和域名`test.lruihao.cn`做实验，也就是宝塔面板的端口，这样我们就可以透过域名远程访问本地服务器，这样是不是开始有云服务器的感觉了。然后宝塔面板设置也绑定好域名`test.lruihao.cn`,dns服务商那里做好相应的解析。
然后在ngrok那里下载sunny客户端文件，我们是ubuntu选择`linux-64bits`版本。解压后在ubuntu打开终端进入sunny文件目录，权限给到755，运行命令`./sunny clientid xxxxxxx` 后面的你的隧道订单的id。

现在就可以通过互联网访问我的ubuntu服务器了。

# 搭建网站
前面两步搞定，搭建网站就没问题了。
我们只要把网站的端口按第二步的在ngrok设置好就可以穿透了。

# 注意
访问本地网站的必要条件是你的电脑得是开机状态而且有网络。