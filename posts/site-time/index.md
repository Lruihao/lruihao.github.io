# 设置网站运行时间


&gt; 使用`javascript`计算博客等网站的运行时间。

&lt;!--more--&gt;

&gt; 话不多说，直接贴码！

```js 网站运行时间计算 JS 和 HTML
function createTime() {
  var now = new Date();
  var run = new Date(&#39;05/28/2018 20:01:01&#39;);
  //總的秒數
  var runTime = (now - run) / 1000,
    days = Math.floor(runTime / 60 / 60 / 24),
    hours = Math.floor(runTime / 60 / 60 - 24 * days),
    minutes = Math.floor(runTime / 60 - 24 * 60 * days - 60 * hours),
    seconds = Math.floor((now - run) / 1000 - 24 * 60 * 60 * days - 60 * 60 * hours - 60 * minutes);
  //前置零
  if (String(hours).length === 1) {
    hours = &#39;0&#39; &#43; hours;
  }
  if (String(minutes).length === 1) {
    minutes = &#39;0&#39; &#43; minutes;
  }
  if (String(seconds).length === 1) {
    seconds = &#39;0&#39; &#43; seconds;
  }
  /*document.querySelector(&#34;.run-times&#34;).innerHTML = days &#43; &#34;&amp;thinsp; 天&amp;thinsp;&#34; &#43; hours
          &#43; &#34;&amp;thinsp; 时&amp;thinsp;&#34; &#43; minutes &#43; &#34;&amp;thinsp; 分&amp;thinsp;&#34; &#43; seconds &#43; &#34;&amp;thinsp; 秒&#34;;
  */
  document.querySelector(&#39;.run-times&#39;).innerHTML = &#39;RunTime: &#39; &#43; days &#43; &#39;,&#39; &#43; hours &#43; &#39;:&#39; &#43; minutes &#43; &#39;:&#39; &#43; seconds &#43; &#39;&#39;;
}

//setInterval(&#34;createTime()&#34;, 500);
if (!document.hidden) {
  var siteTime = setInterval(&#39;createTime()&#39;, 500);
} else {
  clearInterval(siteTime);
}

/**
 * HTML 写法
&lt;span class=&#34;run-times&#34; title=&#34;网站运行时间&#34;&gt;载入时分秒 ...&lt;/span&gt;
&lt;p class=&#34;run-times&#34; title=&#34;主頁运行时间&#34;&gt;RunTime Loading...&lt;/p&gt;
*/
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/site-time/  

