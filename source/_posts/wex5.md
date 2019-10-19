---
title: WeX5在win8或者win10操作系统studio中新建.w向导或其他的编辑窗口显示不全问题
date: 2019-04-13 11:15:20
tags:
- Wex5
- Frontend
- app
categories:
- Frontend
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
repost:
---

{% note %}
win10或者win8系统在使用起步科技WeX5这款IDE工具，在新建w文件或者新建本地应用等时候，会出现不能显示完全的问题，下面是解决办法：
1. 确认是否把操作系统的字体调整为非100%了
2. 把`studio\dropins\studio-app2\plugins\plugin\lib\cef1\chromium.jar`这个jar包复制到`studio\dropins\studio-app2\plugins\plugin\lib`下，重启studio
{% endnote %}
