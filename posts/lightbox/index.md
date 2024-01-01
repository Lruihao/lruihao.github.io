# Lightbox


## 簡介

Lightbox（燈箱），用来放大显示图片覆盖于当前页面之上。其是用 CSS 来定义图片容器，用一幅半透明的 png 图片实现渐变阴暗的效果。

一般的網頁，圖片是使用 img 標籤寫在 HTML 頁面中，圖片點擊并不會放大，想放大看圖片要麼方法整個網頁，要麼複製圖片鏈接新開窗口，操作繁瑣，而使用 Lightbox 的網站可以点击缩略图浮层显示大图，放大後可点击键盘 ←、→ 键切换图片，也可以鼠标点击左右箭头切换。按下键盘 Esc 键或者点击关闭按钮可輕鬆關閉圖層，圖片流覽的體驗度是遠遠大於未使用的 Lightbox 的網站。

## 實現思路

大概思路就在每个图片的点击事件中添加图层与图片副本。

```js
/**
 * @author github.com@flymysql
 */
let container = document.documentElement || document.body;
let img, div, src, btnleft, btnright;
var imgid = 0;
let x, y, w, h, tx, ty, tw, th, ww, wh;
let closeMove = function () {
  if (div == undefined) {
    return false;
  }
  div.style.opacity = 0;
  img.style.height = h &#43; &#39;px&#39;;
  img.style.width = w &#43; &#39;px&#39;;
  img.style.left = x &#43; &#39;px&#39;;
  img.style.top = y - container.scrollTop &#43; &#39;px&#39;;
  // 延迟移除 dom
  setTimeout(function () {
    div.remove();
    img.remove();
    btnright.remove();
    btnleft.remove();
  }, 100);
};

let closeFade = function () {
  if (div == undefined) {
    return false;
  }
  div.style.opacity = 0;
  img.style.opacity = 0;
  // 延迟移除 dom
  setTimeout(function () {
    div.remove();
    img.remove();
    btnright.remove();
    btnleft.remove();
  }, 100);
};

let style = function () {
  btnleft.style.cssText = `
    position:fixed;
    border-radius: 50%;;
    left:${x - 20}px;
    top:${y - container.scrollTop &#43; h / 2}px;
    width:50px;
    height:50px;
    border: 0px;
    background-color: rgba(200,200,200,0.8);
    font-size: 20px;
    z-index: 999999999;
    transition:all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
`;
  btnright.style.cssText = `
    position:fixed;
    border-radius: 50%;
    left:${x &#43; w &#43; 20}px;
    top:${y - container.scrollTop &#43; h / 2}px;
    width:50px;
    border: 0px;
    height:50px;
    font-size: 20px;
    background-color: rgba(200,200,200,0.8);
    z-index: 999999999;
    transition:all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
`;
  btnleft.innerText = &#39;&lt;&#39;;
  btnright.innerText = &#39;&gt;&#39;;

  img.style.cssText = `
    position:fixed;
    border-radius: 12px;
    left:${x}px;
    top:${y - container.scrollTop}px;
    width:${w}px;
    height:${h}px;
    z-index: 999999999;
    transition:all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
    opacity:0;
`;
};

// 监听滚动关闭层
document.addEventListener(&#39;scroll&#39;, function () {
  closeFade();
});
document.querySelectorAll(&#39;img&#39;).forEach((v) =&gt; {
  if (v.parentNode.localName != &#39;a&#39;) {
    v.id = imgid;
    imgid&#43;&#43;;
    v.addEventListener(&#39;click&#39;, function (e) {
      // 注册事件
      // 记录小图的位置个大小
      x = e.target.offsetLeft;
      y = e.target.offsetTop;
      w = e.target.offsetWidth;
      h = e.target.offsetHeight;
      src = e.target.src;
      id = e.target.id;
      // 创建遮罩层
      div = document.createElement(&#39;div&#39;);
      div.style.cssText = `
              position:fixed;
              left:0;
              top:0;
              bottom:0;
              right:0;
              background-color: rgba(25,25,25,0.8);
              z-index:99999999;
              transition:all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
          `;
      document.body.appendChild(div);
      setTimeout(function () {
        div.style.opacity = 1;
      }, 0);
      // （此处可以加 loading)

      // 创建副本
      img = new Image();
      btnright = document.createElement(&#39;button&#39;);
      btnleft = document.createElement(&#39;button&#39;);
      img.src = src;
      style();

      btnleft.onclick = function () {
        if (id === 0) {
          alert(&#39;已经是第一张了！&#39;);
          return;
        }
        var left = document.getElementById(id - 1);
        img.src = left.src;
        x = left.offsetLeft;
        y = left.offsetTop;
        w = left.offsetWidth;
        h = left.offsetHeight;
        style();
        id--;
      };
      btnright.onclick = function () {
        id&#43;&#43;;
        if (id &gt;= imgid) {
          alert(&#39;已经是最后一张了！&#39;);
          return;
        }
        var right = document.getElementById(id);
        img.src = right.src;
        x = right.offsetLeft;
        y = right.offsetTop;
        w = right.offsetWidth;
        h = right.offsetHeight;
        style();
      };
      img.onload = function () {
        document.body.appendChild(img);
        document.body.appendChild(btnright);
        document.body.appendChild(btnleft);

        // 浏览器宽高
        wh = window.innerHeight;
        ww = window.innerWidth;

        // 目标宽高和坐标
        if (w / h &lt; ww / wh) {
          th = wh - 80;
          tw = ((w / h) * th) &gt;&gt; 0;
          tx = (ww - tw) / 2;
          ty = 40;
        } else {
          tw = ww * 0.8;
          th = ((h / w) * tw) &gt;&gt; 0;
          tx = ww * 0.1;
          ty = (wh - th) / 2;
        }

        // 延迟写入否则不会有动画
        setTimeout(function () {
          img.style.opacity = 1;
          img.style.height = th &#43; &#39;px&#39;;
          img.style.width = tw &#43; &#39;px&#39;;
          img.style.left = tx &#43; &#39;px&#39;;
          img.style.top = ty &#43; &#39;px&#39;;
          btnleft.style.left = tx - 90 &#43; &#39;px&#39;;
          btnleft.style.top = ty &#43; th / 2 &#43; &#39;px&#39;;
          btnright.style.left = tx &#43; tw &#43; 40 &#43; &#39;px&#39;;
          btnright.style.top = ty &#43; th / 2 &#43; &#39;px&#39;;
          // 点击隐藏
          div.onclick = img.onclick = closeMove;
        }, 10);
      };
    }); //end event
  }
}); //end forEach
```

## fancybox

[fancybox](https://github.com/fancyapps/fancybox) 是一個完善的 lightbox 插件  
jQuery lightbox script for displaying images, videos and more. Touch enabled, responsive and fully customizable.

### Quick start

1. Add latest jQuery and fancyBox files

```html
&lt;script src=&#34;https://code.jquery.com/jquery-3.3.1.min.js&#34;&gt;&lt;/script&gt;

&lt;link href=&#34;/path/to/jquery.fancybox.min.css&#34; rel=&#34;stylesheet&#34; /&gt;
&lt;script src=&#34;/path/to/jquery.fancybox.min.js&#34;&gt;&lt;/script&gt;
```

2. Create links

```html
&lt;a data-fancybox=&#34;gallery&#34; href=&#34;big_1.jpg&#34;&gt;
  &lt;img src=&#34;small_1.jpg&#34; /&gt;
&lt;/a&gt;

&lt;a data-fancybox=&#34;gallery&#34; href=&#34;big_2.jpg&#34;&gt;
  &lt;img src=&#34;small_2.jpg&#34; /&gt;
&lt;/a&gt;
```

3. Enjoy!


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/lightbox/  

