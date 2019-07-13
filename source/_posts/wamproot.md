---
title: WAMPServer自定义网站根目录等设置
date: 2019-07-12 18:44:36
tags:
- WAMPServer
- php
- windows
- server
categories: php
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


{% note info no-icon %}
使用WAMPServer时自定义网站根目录。
{% endnote %}

<!--more-->

# WAMPServer自定义网站根目录

## 修改apache配置文件
打开`httpd.conf`文件搜索`documentroot`后，找到路径修改为自定义的。
{% asset_img httpd.png 修改httpd.conf文件 %}

再打开`httpd-vhost.conf`文件修改对应的路径。
`修改完配置文件需要重启所有服务！`

## 修改wampmanager文件
在wampserver安装路径根目录知道`wampmanager.ini`和`wampmanager.tpl`两个文件。搜索`menu.left`,然后也修改为自定义的路径。
`然后退出，重启软件！`
{% asset_img wampmanager-ini.png 修改wampmanager.ini文件 %}
{% asset_img wampmanager-tpl.png 修改wampmanager.tpl文件 %}

## 编写php文件测试
```php test.php
<?php
	echo "hello world";
?>
```
{% asset_img test.png 测试结果 %}

# WAMPServer多站点配置
打开`httpd-vhost.conf`文件，复制原有的几行配置文件，粘贴修改路径和域名等配置。比如
```
# Virtual Hosts
#
<VirtualHost *:80>
  ServerName localhost
  ServerAlias localhost
  DocumentRoot "g:/Demo"
  <Directory "g:/Demo">
    Options +Indexes +Includes +FollowSymLinks +MultiViews
    AllowOverride All
    Require local
  </Directory>
</VirtualHost>

<VirtualHost *:80>
  ServerName test01.com
  DocumentRoot "g:/Demo/test01"
</VirtualHost>

<VirtualHost *:80>
  ServerName test02.com
  DocumentRoot "g:/Demo/test02"
</VirtualHost>
```
再打开`C:\Windows\System32\drivers\etc\hosts`文件,在文件最后添加类似于云服务器的域名解析，进行本地域名解析，当输入域名时优先从本地申请资源。
```
...

# For example:
#
# 102.54.94.97 rhino.acme.com # source server
# 38.25.63.10 x.acme.com # x client host
# localhost name resolution is handled within DNS itself.
#	127.0.0.1 localhost
#	::1 localhost
127.0.0.1 steamcommunity.com
192.168.28.1 windows10.microdone.cn
127.0.0.1 localhost
::1 localhost
127.0.0.1 test01.com
127.0.0.1 test02.com
```

# WAMPServer自拟定端口
WAMP服务我安装了好几次，每次因为修改配置文件搞崩了。。第一次装的时候发现80端口被占用了，因为以前玩了一下Windows的IIS，暂停IIS的网站，再使用命令或者直接在控制面板关掉就好了。

1. 如果不使用80多为默认端口，比如修改为8080，还是在`httpd.conf`文件里修改。搜索`80`都改成`8080`然后，Ctrl+S保存，重新启动WampServer
在浏览器地址栏输入`localhost:8000`
```
#监听端口
Listen 0.0.0.0:8080
Listen [::0]:8080
ServerName localhost:8080
```

2. 使用Notepad++打开 C:\wamp 目录下的wampmanager.ini和wampmanager.tpl 
Ctrl+F查找 `localhost`
将其全部替换为`localhost:8000`
然后，Ctrl+S保存，重新启动WampServer
