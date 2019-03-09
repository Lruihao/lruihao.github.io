---
title: next插件样式
date: 2018-11-24 16:54:09
tags:
- hexo
- 前端
categories: hexo
password:
abstract:
message:
description:
top:
author:
permalink:
---

{% note info %}
让文章写的好看又简洁又好用的插件！
{% endnote %}

<!--more-->
### hexo插件
#### hexo-filter-flowchart(流程图)
[语法](https://flowchart.js.org)
**install**
```bash
npm install --save hexo-filter-flowchart
```

**Usage**

````
```%flow #去掉%号
st=>start: Start|past:>https://lruihao.cn[blank]
e=>end: End:>https://www.lruihao.cn
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>/nextplugin.html
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```
````

```flow
st=>start: Start|past:>https://lruihao.cn[blank]
e=>end: End:>https://www.lruihao.cn
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>/nextplugin.html
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```

#### hexo-spoiler
**Install**
```bash
npm install hexo-spoiler --save
```
> If hexo can't detect this plugin automatically, you need to modify the `plugins` section of `[path_to_your_site]/_config.yml` manually, like:

```yaml
plugins:
 - hexo-spoiler
```

**Syntax**
```plain
{% spoiler [text] %}
```
>It will pixelate your text, and click to reveal. Click again to hide your text again.
>But you need to add `<br>` manually if you want line breaks after/before it.

**Preview**
When you writes:
```plain
{% spoiler text %}
{% spoiler ~~text~~ %}
{% spoiler *text* %}
{% spoiler **text** %}<br>
{% spoiler **hello welcome to 博採眾長！** %}
```
{% spoiler text %}
{% spoiler ~~text~~ %}
{% spoiler *text* %}
{% spoiler **text** %}<br>
{% spoiler **hello welcome to 博採眾長！** %}

### 选项卡

> "tab"为选项卡的名称，可以自定义，数字是几表示从第几个选项卡开始。非必须，若数值为-1则隐藏选项卡内容。
> [查看更多](https://almostover.ru/2016-01/hexo-theme-next-test)

```
{% tabs tab,2 %}
<!-- tab -->
this is tab1
<!-- endtab -->
<!-- tab -->
this is tab2
<!-- endtab -->
<!-- tab -->
this is tab3
<!-- endtab -->
{% endtabs %}
```
{% tabs tab,2 %}
<!-- tab -->
this is tab1
<!-- endtab -->
<!-- tab -->
this is tab2
<!-- endtab -->
<!-- tab -->
this is tab3
<!-- endtab -->
{% endtabs %}

> 数值为-1

{% tabs 选项,-1 %}
<!-- tab -->
**选项1**
<!-- endtab -->
<!-- tab -->
**选项2**
<!-- endtab -->
<!-- tab -->
**选项3**
<!-- endtab -->
{% endtabs %}

> 名字写在选项里面

```
{% tabs Fourth unique name %}
<!-- tab Solution 1 -->
**This is Tab 1.**
<!-- endtab -->
<!-- tab Solution 2 -->
**This is Tab 2.**
<!-- endtab -->
<!-- tab Solution 3 -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}
```

{% tabs Fourth unique name %}
<!-- tab Solution 1 -->
**This is Tab 1.**
<!-- endtab -->
<!-- tab Solution 2 -->
**This is Tab 2.**
<!-- endtab -->
<!-- tab Solution 3 -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

### note便签

> 主题配置文件搜索note,可设置风格和图标是否显示。

```
# Note tag (bs-callout).
note:
  # Note tag style values:
  #  - simple    bs-callout old alert style. Default.
  #  - modern    bs-callout new (v2-v3) alert style.
  #  - flat      flat callout style with background, like on Mozilla or StackOverflow.
  #  - disabled  disable all CSS styles import of note tag.
  style: flat
  icons: true
  border_radius: 15
  # Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6).
  # Offset also applied to label tag variables. This option can work with disabled note tag.
  light_bg_offset: 0
```
写法
```
{% note default %}default是类型还有以下几种{% endnote %}
```
{% note default %}default是类型还有以下几种{% endnote %}
{% note default %}default{% endnote %}
{% note primary %}primary{% endnote %}
{% note success %}success{% endnote %}
{% note info %}info{% endnote %}
{% note warning %}warning{% endnote %}
{% note danger %}danger{% endnote %}
{% note %}不填{% endnote %}
{% note danger no-icon %}danger no-icon{% endnote %}


### 引用(文本居中)

```
{% cq %}
**there are test words**
{% endcq %}
```

{% cq %}
**there are test words**
{% endcq %}

### [Font Awesome图标](https://www.runoob.com/font-awesome/fontawesome-tutorial.html)
> Font Awesome 是一套绝佳的图标字体库和CSS框架。
> Font Awesome 字体为您提供可缩放矢量图标,它可以被定制大小、颜色、阴影以及任何可以用CSS的样式。
> 要使用Font Awesome图标，请在HTML页面的 部分中添加以下行：

**1、国内推荐 CDN：**

```
<link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
```
**2、海外推荐 CDN**

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```

next已经引用了，可以直接用，比如：
```
<i class="fa fa-car"></i>
<i class="fa fa-car" style="font-size:48px;"></i>
<i class="fa fa-car" style="font-size:60px;color:red;"></i>
<i class="fa fa-car fa-lg"></i>
<i class="fa fa-car fa-2x"></i>
<i class="fa fa-car fa-3x"></i>
<i class="fa fa-car fa-4x"></i>
<i class="fa fa-car fa-5x"></i>
```
<i class="fa fa-car"></i> <i class="fa fa-car" style="font-size:48px;"></i> <i class="fa fa-car" style="font-size:60px;color:red;"></i> <i class="fa fa-car fa-lg"></i> <i class="fa fa-car fa-2x"></i> <i class="fa fa-car fa-3x"></i> <i class="fa fa-car fa-4x"></i> <i class="fa fa-car fa-5x"></i>

动态图标

```
<i class="fa fa-spinner fa-spin"></i>
<i class="fa fa-circle-o-notch fa-spin"></i>
<i class="fa fa-refresh fa-spin"></i>
<i class="fa fa-cog fa-spin"></i>
<i class="fa fa-spinner fa-pulse"></i>
```
<i class="fa fa-spinner fa-spin"></i> <i class="fa fa-circle-o-notch fa-spin"></i> <i class="fa fa-refresh fa-spin"></i> <i class="fa fa-cog fa-spin"></i> <i class="fa fa-spinner fa-pulse"></i>

### 代码块等

```cpp 三个点后面的参数 https://lruihao.cn lruihao.cn
[language] [title] [url] [link text]

code snippet

```

```diff diff
-  printf("Hello World!");
+  printf("Hello_World!");
```
**iframe**
在文章中插入 iframe。
```default iframe
{% iframe url [width] [height] %}
```
{% iframe https://weibo.com/liahao 100% 400 %}

### 知乎卡片链接

<script type="text/javascript" src="/js/src/linkcard.js"></script>
<a href="https://github.com/Lruihao/lruihao.github.io" target="_blank" class="LinkCard">Lruihao博客</a>

也是一种后加载，创建`linkcard.js`放到`source/js/src/`，然后在`next\layout\_macro\post.swig`中引用

```java 知乎卡片链接
  <!--知乎卡片链接-->
  <script type="text/javascript" src="/js/src/linkcard.js"></script>
```
链接写法,加上`class="LinkCard"`
```
<a href="https://github.com/Lruihao/lruihao.github.io" target="_blank" class="LinkCard">Lruihao博客</a>
```

### Todo list
- <i class="fa fa-check-square"></i> 已完成
- <i class="fa fa-square"></i> 未完成

```http Todo list
<ul>
<li><i class="fa fa-check-square"></i> 已完成</li>
<li><i class="fa fa-square"></i> 未完成</li>
</ul>

<!--或者-->

- <i class="fa fa-check-square"></i> 已完成
- <i class="fa fa-square"></i> 未完成
```

### Label
主题配置文件中打开
```
# Label tag.
label: true
```
`@`前面的是label的名字，后面的是要显示的文字
{% label default@default %} {% label primary@primary %} {% label success@success %} {% label info@info %} {% label warning@warning %} {% label danger@danger %}
```
{% label default@default %}

primary success info warning danger
```


### [其他](http://www.mykernel.cn/my-hexo-next-1.html)
> 包括小色块、左侧色条、右侧色条、上方色条、数字色块（需要自定义样式）