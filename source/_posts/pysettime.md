---
title: python设置程序每天8点定时执行任务
date: 2019-05-09 23:26:54
tags:
- Python
- 定时任务
categories:
- Backend
- Python
password:
abstract:
message:
description:
keywords:
- python
- python定时任务
- python定时器
- python定时执行
- python定时发送请求脚本
- python定时获取数据
- python定时任务每天执行一次
top:
sticky:
author:
permalink:
noreward:
notshow:
norelate:
repost:
---


{% note %}
第一次运行根据程序执行时间，判断程序休眠的时间，尽最大可能休眠，节省系统资源。
第二次运行后直接休眠一天，到每天早上8点执行任务。
（该程序需要一直挂着，保持网络不断）
{% endnote %}


<!--more-->

```py
import time
while True:
    now_hour = time.strftime("%H", time.localtime())
    now_min = time.strftime("%M", time.localtime())
    if now_hour < "08":
        rest = 8 - int(now_hour)
        sleeptime = (rest-1)*3600 + (60-int(now_min))*60
        print("启动时北京时间为："+time.strftime("%H:%M", time.localtime()),"\t软件将在",rest-1,"小时",int((sleeptime-(rest-1)*3600)/60),"分钟后发送数据")
        time.sleep(sleeptime)
    elif now_hour > "08":
        rest = 8 - int(now_hour) + 24
        sleeptime = (rest-1)*3600 + (60-int(now_min))*60
        print("启动时北京时间为："+time.strftime("%H:%M", time.localtime()),"\t软件将在",rest-1,"小时",int((sleeptime-(rest-1)*3600)/60),"分钟后发送数据")
        time.sleep(sleeptime)
    elif now_hour == "08":
        print("启动时北京时间为：" + time.strftime("%H:%M", time.localtime()), "\t软件将在每天8点发送数据！")
        # 以下为定时任务
        print("数据")
        time.sleep(86400-int(now_min)*60)
```