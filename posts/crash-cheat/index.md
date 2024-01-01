# 网页离开时改变标题“崩溃欺骗”


&gt; 从暑假到现在有好几个小伙伴问我博客的标题怎么变来变去的，不想再和每个人都说一遍了，耽误时间，索性写一下。

&lt;!--more--&gt;

## 创建一个 js 文件

我们先创建一个 js 文件，我们用记事本就好了，然后改个文件名，不妨就叫`crash-cheat.js`吧，你们可以随意！  
然后把文件放到 source 文件夹的 js 文件夹的 src 里面。（我用的 next 主题，放这里统一存放，其他主题随意）

崩溃欺骗 (Jquery 版）

```js 崩溃欺骗 (Jquery 版）
var OriginTitle = document.title;
var titleTime;
document.addEventListener(&#39;visibilitychange&#39;, function () {
  if (document.hidden) {
    $(&#39;[rel=&#34;icon&#34;]&#39;).attr(&#39;href&#39;, &#39;https://i.loli.net/2018/08/24/5b7fcb00ed9bf.png&#39;);
    document.title = &#39;怎么回事╭(°A°`)╮&#39;;
    clearTimeout(titleTime);
  } else {
    $(&#34;[rel=&#39;icon&#39;]&#34;).attr(&#39;href&#39;, &#39;https://i.loli.net/2018/09/25/5baa4f21661e7.png&#39;);
    document.title = &#39;小老弟 (ฅ&gt;ω&lt;*ฅ)&#39;;
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
      $(&#34;[rel=&#39;icon&#39;]&#34;).attr(&#39;href&#39;, &#39;/images/favicon-32x32-next.png&#39;);
    }, 2000);
  }
});
```

崩溃欺骗 (JS 版）

```js 崩溃欺骗 (JS 版）
var oldTitle = document.title;
var titleTime; //標題恢復計時器
document.addEventListener(&#39;visibilitychange&#39;, function () {
  if (document.hidden) {
    document.querySelector(&#34;[rel=&#39;icon&#39;]&#34;).setAttribute(&#39;href&#39;, &#39;/images/icons/favicon-32.png&#39;);
    document.title = &#39;網站崩潰了！&#39;;
    clearTimeout(titleTime);
  } else {
    document.title = &#39;其實並沒有！&#39;;
    document.querySelector(&#34;[rel=&#39;icon&#39;]&#34;).setAttribute(&#39;href&#39;, &#39;/images/icons/crash.png&#39;);
    titleTime = setTimeout(function () {
      document.title = oldTitle;
    }, 1000);
  }
});
```

## 使用

在`hexo\themes\hexo-theme-next\layout`文件路径找到`layout.swig`文件，其他有些主题用的是`.ejs`后缀，一样的。  
然后打开文件，在`&lt;body&gt;&lt;/body&gt;`之间加入调用刚刚的 js。

```html
&lt;script type=&#34;text/javascript&#34; src=&#34;/js/src/crash-cheat.js&#34;&gt;&lt;/script&gt;
```

重新部署博客就可以了。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/crash-cheat/  

