---
title: js判断用户设备类型及平台
date: 2018-11-03 23:35:44
tags:
- Frontend
- JavaScript
- 他山之石
categories:
- Frontend
- JavaScript
password:
abstract:
message:
description:
top:
author:
permalink:
repost: true
---
> 转自 https://www.cnblogs.com/coober/p/6594379.html

前端开发经常遇到需要判断用户的浏览设备，是pc端还是移动端，移动端使用的是什么手机系统？android、ios、ipad、windows phone等等，有时候还需要知道用户浏览页面是在微信中打开还是在移动端浏览器中打开，等等一系列判断做一些相应的处理。

<!--more-->
### 首先判断pc端还是移动端
```
function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
```
### 判断用户移动端使用的系统平台
```
var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        //安卓手机
    } else if (u.indexOf('iPhone') > -1) {
        //苹果手机
    } else if (u.indexOf('Windows Phone') > -1) {
        //winphone手机
    }
```
### 判断用户是否在微信中打开
```
function isWeiXin(){ 
        var ua = navigator.userAgent.toLowerCase(); 
        if(ua.indexOf('micromessenger') != -1) { 
            return true; 
        } else { 
            return false; 
        } 
    }
```

### 实际运用

根据pc或者移动端控制飘花数目，降低cpu消耗，减少卡顿。[demo](https://www.lruihao.cn)
```
  <script>
    function sakuraInit() {
        $(document).snowfall('clear');
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            $(document).snowfall({image:"images/1.png", flakeCount:5, minSpeed:1, minSize:8, maxSize:15,});
            $(document).snowfall({image:"images/2.png", flakeCount:5, minSpeed:1, minSize:8, maxSize:15,});
            $(document).snowfall({image:"images/3.png", flakeCount:5, minSpeed:1, minSize:8, maxSize:15,});
            $(document).snowfall({image:"images/4.png", flakeCount:5, minSpeed:1, minSize:8, maxSize:15,});
        } else {
            $(document).snowfall({image:"images/1.png", flakeCount:2, minSpeed:1, minSize:8, maxSize:15,});
            $(document).snowfall({image:"images/2.png", flakeCount:2, minSpeed:1, minSize:8, maxSize:15,});
            $(document).snowfall({image:"images/3.png", flakeCount:2, minSpeed:1, minSize:8, maxSize:15,});
            $(document).snowfall({image:"images/4.png", flakeCount:2, minSpeed:1, minSize:8, maxSize:15,});
        }
    }
    window.onload = sakuraInit();
  </script>
```