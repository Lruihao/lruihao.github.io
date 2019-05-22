---
title: win10,ubuntu双系统时间不一致
date: 2019-03-15 14:28:10
tags:
- windows
- linux
- ubuntu
categories: linux
password:
abstract:
message:
description:
keywords: 双系统时间不一致
top:
author:
permalink:
noreward:
notshow:
---

> 我的Ubuntu和Windows双系统是Ubuntu是第一启动项，所以总是开机忘记点下键，一进Ubuntu系统时间就不对了（总是少了8小时），回到Windows时间也是错的。知道是错的调整一下还好。忘记调了有时候真的会误事。比如说git版本控制提交会遇到问题种种等。

<!--more-->
## 原因
在安装Ubuntu和Windows双系统的情况下，Ubuntu的时间总会和Windows的时间相差8小时，原因在于widows认为BIOS时间是本地时间，Ubuntu认为BIOS时间是UTC时间，即协调世界时，(Universal Time Coordinated)英文缩写，是由国际无线电咨询委员会规定和推荐,并由国际时间局(BIH)负责保持的以秒为基础的时间标度。UTC相当于本初子午线(即经度0度)上的平均太阳时，过去曾用格林威治平均时(GMT)来表示。北京时间比UTC时间早8小时，以1999年1月1日00:00 UTC为例，UTC时间是零点，北京时间为1999年1月1日早上8点整。)，所以我们在时间上面相隔了8个小时。这个时候bios的时间和系统的时间当然是不一致，一个代表 utc 时间，一个代表cst（＋8时区），即我们常用的时间。

## 方法一
在Windows下进行如下修改：（博主win10,win7自测）
以管理员身份运行CMD（`win+x后选择Windows Powershell(管理员)`
```default windows cmd命令
Reg add HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation /v RealTimeIsUniversal /t REG_DWORD /d 1
```
重启看看时间发现ok了。

## 方法二
老版Ubuntu（Ubuntu10左右）：
修改/etc/default/rcS文件
编辑/etc/default/rcS 将UTC=yes改成UTC=no 。

新版Ubuntu（Ubuntu16.04）：
新版本的Ubuntu使用systemd启动之后，时间也改成了由timedatectl来管理，此方法就不适用了。
```default 重启完成将硬件时间UTC改为CST，双系统时间保持一致。
$sudo timedatectl set-local-rtc 1
```
先在ubuntu下更新一下时间，确保时间无误：
```default ubuntu命令
$sudo apt-get install ntpdate
$sudo ntpdate time.windows.com
```
然后将时间更新到硬件上：
```default ubuntu命令
$sudo hwclock --localtime --systohc
```
重新进入windows10，发现时间恢复正常了！
