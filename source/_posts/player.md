---
title: 宅音乐播放器
date: 2019-03-19 23:32:56
tags:
- 前端
- html/css
- php
categories: Web
password:
abstract:
message:
description:
keywords:
top: 10
sticky: true
author:
permalink:
noreward:
notshow:
photos:
- /Web/player/index.png
- /Web/player/login.png
- /Web/player/admin_index.png
- /Web/player/admin_player.png
- /Web/player/admin_song_sheet.png
- /Web/player/player.png
---

{% note info %}
宅音乐播放器，HTML5网页播放器，集成后台管理及API调用，目前正在开发中，敬请关注~
[原项目](https://github.com/lzx8589561/zhai-music)由[IT技术宅](https://www.ilt.me)开源，使用thinkPHP开发后台。 [fork地址](https://github.com/Lruihao/zhai-music)是我个人学习模仿的库，也是相当于备份源码。
*注： 插件修改于明月浩空免费版，仅用于学习交流，无商业价值，如发现商业传播，将禁止软件的免费使用。*
{% endnote %}

<!--more-->

## 技术栈
- 后端：thinkphp 5.1
- 前端：layui
- 数据库：mysql

## 演示站
{% note danger %}
以兼容移动端，测试账号仅供测试请勿修改密码！
{% endnote %}
```text 测试账号
test
test123
```
- https://player.ilt.me/
- https://player.lruihao.cn/

## 安装
### 视频安装教程
https://www.bilibili.com/video/av46476706
### 依赖
- composer
- php 5.6+
- mysql 5.5+

### 步骤
安装php依赖包
```
composer install
```
配置数据库，配置链接数据库名以及用户名密码
````
/config/database.php
````
创建数据库
```
字符编码：utf8 -- UTF-8 Unicode
导入数据库脚本，脚本位置extend/database
```
### 伪静态配置
#### nginx
```
  location / {
      index  index.htm index.html index.php;
      #访问路径的文件不存在则重写URL转交给ThinkPHP处理
      if (!-e $request_filename) {
         rewrite  ^/(.*)$  /index.php?s=$1  last;
         break;
      }
  }
```
#### apache
项目自带apache静态化无需配置
### 启动项目
- 添加public为web根目录
- 若为apache服务器则默认伪静态，nginx可自行配置伪静态

## 预览
{% asset_img player.png %}
### 首页
{% asset_img index.png %}
### 登陆页面
{% asset_img login.png %}
### 后台首页
{% asset_img admin_index.png %}
### 后台播放器管理页面
{% asset_img admin_player.png %}
### 后台歌单管理页面
{% asset_img admin_song_sheet.png %}
