---
title: 网页夜间效果
date: 2018-09-27 13:13:31
tags:
- 前端
- javascript
categories:
- javascript
password:
abstract:
message:
description:
top:
author:
permalink:
---

> 这几天看到别人的博客有开关灯效果，就想给自己的博客也加一个，其实以前就在想了。经过谷歌百度后这样实现了。`css+js`

<!--more-->

如何给Web页面增加夜间模式功能? 其实所谓的夜间模式就是在页面上增加一个透明的遮罩层，但是遮罩层会挡住页面元素， 解决方法是 添加DIV，给DIV的outline属性一个很大的outline-width值，用outline的边框作为遮罩，这样既能正常点击页面元素，又能达到夜间模式的效果。


### css部分
```
<style>
.cover{
    position:fixed;
    top: 0px;
    left: 0px;
    outline:5000px solid rgba(0, 0, 0, 0);//初始亮度
    z-index: 99999;
}
</style>
```

### js部分
```
<script>
var brightness;
//显示遮罩
function cover(brightness) {
    if (typeof(div) == 'undefined') {
        div = document.createElement('div');
        div.setAttribute('style', 'position:fixed;top:0;left:0;outline:5000px solid;z-index:99999;');
        document.body.appendChild(div);
    } else {
        div.style.display = '';
    }
    div.style.outlineColor = 'rgba(0,0,0,' + brightness + ')';
}
//事件监听
window.addEventListener('keydown', function(e) {
    if (e.altKey && e.keyCode == 90) {
        cover(brightness = 0.3);
    }
    if (e.altKey && e.keyCode == 88) {
        cover(brightness = 0);
    }
    if (e.altKey && e.keyCode == 38) {
        if (brightness - 0.05 > 0.05) cover(brightness -= 0.05);
    }
    if (e.altKey && e.keyCode == 40) {
        if (brightness + 0.05 < 0.95) cover(brightness += 0.05);
    }
}, false);
</script>
```

### html部分
```
<div class="cover"></div>
```

### 使用

1. Alt+Z:打开夜间模式
2. Alt+X:关闭
3. Alt+↑:增加亮度
4. Alt+↓:降低亮度
