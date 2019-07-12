---
title: WAMPServer自定义网站根目录
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

# 修改apache配置文件
打开`httpd.conf`文件搜索`documentroot`后，找到路径修改为自定义的。
{% asset_img httpd.png 修改httpd.conf文件 %}

再打开`httpd-vhost.conf`文件修改对应的路径。

# 修改wampmanager文件
在wampserver安装路径根目录知道`wampmanager.ini`和`wampmanager.tpl`两个文件。搜索`menu.left`,然后也修改为自定义的路径。
{% asset_img wampmanager-ini.png 修改wampmanager.ini文件 %}
{% asset_img wampmanager-tpl.png 修改wampmanager.tpl文件 %}

# 编写php文件测试
```php test.php
<?php
	echo "hello world";
?>
```
{% asset_img test.png 测试结果 %}
