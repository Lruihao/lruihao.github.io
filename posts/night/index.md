# 网页夜间效果


&gt; 这几天看到别人的博客有开关灯效果，就想给自己的博客也加一个，其实以前就在想了。经过谷歌百度后这样实现了。`css&#43;js`

&lt;!--more--&gt;

如何给 Web 页面增加夜间模式功能？其实所谓的夜间模式就是在页面上增加一个透明的遮罩层，但是遮罩层会挡住页面元素，解决方法是 添加 DIV，给 DIV 的 outline 属性一个很大的 outline-width 值，用 outline 的边框作为遮罩，这样既能正常点击页面元素，又能达到夜间模式的效果。

### css 部分

```css
&lt;style&gt;
.cover{
    position:fixed;
    top: 0px;
    left: 0px;
    outline:5000px solid rgba(0, 0, 0, 0);//初始亮度
    z-index: 99999;
}
&lt;/style&gt;
```

### js 部分

```js
&lt;script&gt;
var brightness;
//显示遮罩
function cover(brightness) {
    if (typeof(div) == &#39;undefined&#39;) {
        div = document.createElement(&#39;div&#39;);
        div.setAttribute(&#39;style&#39;, &#39;position:fixed;top:0;left:0;outline:5000px solid;z-index:99999;&#39;);
        document.body.appendChild(div);
    } else {
        div.style.display = &#39;&#39;;
    }
    div.style.outlineColor = &#39;rgba(0,0,0,&#39; &#43; brightness &#43; &#39;)&#39;;
}
//事件监听
window.addEventListener(&#39;keydown&#39;, function(e) {
    if (e.altKey &amp;&amp; e.keyCode == 90) {
        cover(brightness = 0.3);
    }
    if (e.altKey &amp;&amp; e.keyCode == 88) {
        cover(brightness = 0);
    }
    if (e.altKey &amp;&amp; e.keyCode == 38) {
        if (brightness - 0.05 &gt; 0.05) cover(brightness -= 0.05);
    }
    if (e.altKey &amp;&amp; e.keyCode == 40) {
        if (brightness &#43; 0.05 &lt; 0.95) cover(brightness &#43;= 0.05);
    }
}, false);
&lt;/script&gt;
```

### html 部分

```
&lt;div class=&#34;cover&#34;&gt;&lt;/div&gt;
```

### 使用

1. Alt&#43;Z: 打开夜间模式
2. Alt&#43;X: 关闭
3. Alt&#43;↑: 增加亮度
4. Alt&#43;↓: 降低亮度


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/night/  

