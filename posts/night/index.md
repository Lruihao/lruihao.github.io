# 网页夜间效果


> 这几天看到别人的博客有开关灯效果，就想给自己的博客也加一个，其实以前就在想了。经过谷歌百度后这样实现了。`css+js`

<!--more-->

如何给 Web 页面增加夜间模式功能？其实所谓的夜间模式就是在页面上增加一个透明的遮罩层，但是遮罩层会挡住页面元素，解决方法是 添加 DIV，给 DIV 的 outline 属性一个很大的 outline-width 值，用 outline 的边框作为遮罩，这样既能正常点击页面元素，又能达到夜间模式的效果。

### css 部分

```css
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

### js 部分

```js
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

### html 部分

```
<div class="cover"></div>
```

### 使用

1. Alt+Z: 打开夜间模式
2. Alt+X: 关闭
3. Alt+↑: 增加亮度
4. Alt+↓: 降低亮度


---

> 作者:   
> URL: https://lruihao.cn/posts/night/  

