# next 添加支持 pdf


&gt; 最新的 next 主题已经更新了支持 PDF 功能，~~写法也和链接写法一样~~，可是我没有更新，我按 github 上那个 readme 试了一下好像不可以，所以用了另外一种插件的方法。

## iframe(推荐)

```xml
&lt;iframe src=&#34;/posts/next-pdf/1.pdf&#34; style=&#34;width: 100%;height: 800px;&#34;&gt;&lt;/iframe&gt;
```

## 模板自带

&gt; 今天（2019.4.3）又看了一下，改了写法，写法和插件一样，我在我的模板里也更新了。（插件模板二选一即可，个人更喜欢插件）
&gt; 但是如果安装插件后，也是优先模板的 pdf 脚本解析 pdf，所以在我的模板中把模板的 pdf 脚本先注释了。要启用去掉注释即可。

```js next\scripts\tags\pdf.swig
/*
&#39;use strict&#39;;

function pdf(args) {
  return `&lt;div class=&#34;pdf&#34; target=&#34;${args[0]}&#34; height=&#34;${args[1] || &#39;&#39;}&#34;&gt;&lt;/div&gt;`;
}

hexo.extend.tag.register(&#39;pdf&#39;, pdf, {ends: false});
*/
```

## pdf 插件 (推荐)

### 安装

```bash
npm install --save hexo-pdf
```

### 使用

```
{% pdf url %}
```

比如本文

```
{% pdf /posts/next-pdf/1.pdf %}
```

&lt;iframe src=&#34;/posts/next-pdf/1.pdf&#34; style=&#34;width: 100%;height: 800px;&#34;&gt;&lt;/iframe&gt;


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/next-pdf/  

