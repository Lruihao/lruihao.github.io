# Web 汇总


&gt; 下面一些 web 开发的一些总结，还有一些常用到的代码，脚本等！

&lt;!--more--&gt;

## front-end

### html

&gt; - [HTML&#43;CSS](https://lruihao.cn/posts/ms-html-css.html)

#### oblique 和 intalic 的区别

这两个都是`font-style`属性的值，这两个值都能实现倾斜的效果，但是有区别的。

- `intalic`: 这个是字体的倾斜，相当于**斜体**，字体必须有倾斜属性。
- `oblique`: 这个准确地说是让文字倾斜。相当于**斜字**，字体不一定要有倾斜属性。

#### title 显示换行

&lt;a href=&#34;#&#34; title=&#34;第一行&amp;#10; 第二行&amp;#10; 第三行&#34;&gt;使用`&amp;#10;`&lt;/a&gt;或&lt;a href=&#34;#&#34; title=&#34;第一排&amp;#13; 第二排&amp;#13; 第三排&#34;&gt;使用`&amp;#13;`&lt;/a&gt;

```
&lt;a href=&#34;#&#34; title=&#34;第一行&amp;#10; 第二行&amp;#10; 第三行&#34;&gt;使用`&amp;#10;`&lt;/a&gt;
&lt;a href=&#34;#&#34; title=&#34;第一排&amp;#13; 第二排&amp;#13; 第三排&#34;&gt;使用`&amp;#13;`&lt;/a&gt;
```

#### 图片类型选择

![图片类型选择](images/imgType.jpg &#39;图片类型选择&#39;)

### css

#### flexbox

Flex 布局将成为未来布局的首选方案，比如说常见的 bootstrap4 的版本就用 flex 替代了 float 来进行排版。  
我在网上看到几个很好的教程，图文并茂，一目了然。

&gt; - [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

实在懒癌发作，笔记本上手抄了笔记我就不写学习总结了，还有网友 [Demo](http://static.vgee.cn/static/index.html) 也写了。

### javascript

#### keydown 和 keypress

- `keydown`：按下键盘键
- `keypress`：紧接着`keydown`事件触发（只有按下字符键时触发）
- 如果用户按下了一个**字符键**不放，就会重复触发`keydown`和`keypress`事件，直到用户松开该键为止。
- 如果用户按下了一个**非字符键**不放，就会重复触发`keydown`事件，直到用户松开该键为止。

[详解键盘事件 (keydown，keypress，keyup)](https://www.jianshu.com/p/8f839f558319)

#### textContent、innerText 和 innerHTML 的区别

&gt; 1. 设置标签中的文本内容，应该使用`textContent`或`innerText`（更老）属性，区别在于浏览器支援程度
&gt; 2. `innerHTML`能够获得元素内的所有标签内容，也可以设置标签使之生效。（**注意防止 XSS 注入**）

如果某个属性在浏览器中不支持，那么这个属性的类型是`undefined`，判断这个属性的类型是不是`undefined`，就知道浏览器是否支持。

```js 兼容代码 设置任意的标签中间的任意文本内容
&lt;script&gt;
  // 设置任意的标签中间的任意文本内容
  function setInnerText(element, text) {
      //判断浏览器是否支持这个属性
      if (typeof element.textContent == &#34;undefined&#34;) {//不支持
          element.innerText = text;
      } else {//支持这个属性
          element.textContent = text;
      }
  };
&lt;/script&gt;
```

### 图床方案

&gt; - 自行搭建
&gt;   比如使用开源图床 ImgURL 搭建的`img.lruihao.cn`（**需要服务器**）  
&gt;   使用上传工具加第三方免费空间，比如`PicGo &#43; 腾讯云 COS`（**无需服务器**）

- 使用各大图床  
  诸如 sm.ms，腾讯云 COS，阿里云 OSS，七牛云，又拍云，Github，微博图床，ImgURL 图床等等

### font-awesome

现在使用 5 的版本，可以使用`webfont&#43;css`或`svg&#43;js`

```xml font-awesome
&lt;link rel=&#34;stylesheet&#34; href=&#34;https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css&#34;&gt;
```

其他的图标 js

```
&lt;script src=&#34;//at.alicdn.com/t/font_578712_g26jo2kbzd5qm2t9.js&#34;&gt;&lt;/script&gt;
&lt;svg class=&#34;card-avatar&#34; aria-hidden=&#34;true&#34;&gt;
  &lt;use xlink:href=&#34;#icon-{{n&#43;1}}&#34;&gt;&lt;/use&gt;                &lt;!--n 为一个数字--&gt;
&lt;/svg&gt;
```

### 响应式（自适应）

```xml bootstrap
&lt;link rel=&#34;stylesheet&#34; href=&#34;https://apps.bdimg.com/libs/bootstrap/3.3.4/css/bootstrap.min.css&#34;&gt;
&lt;script src=&#34;https://apps.bdimg.com/libs/bootstrap/3.3.4/js/bootstrap.min.js&#34;&gt;
```

```xml
&lt;meta name=&#34;viewport&#34; content=&#34;width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=0&#34;&gt;
```

&gt; - .col-xs- 超小屏幕 手机 &lt;768px
&gt; - .col-sm- 小屏幕 平板 &gt;=768px
&gt; - .col-md- 中等屏幕 &gt;=992px
&gt; - .col-lg- 大屏幕 &gt;1200px

css3 写法 @media（宽度具体调整）

```css css3 写法@media （宽度具体调整）
/* 手机等小屏幕手持设备 */
@media screen and (min-width: 320px) and (max-width: 480px) {
  /*手机端 css 样式表*/
}
/* 平板之类的宽度 1024 以下设备 */
@media only screen and (min-width: 321px) and (max-width: 1024px) {
  /*电脑端 css 样式表*/
}
```

link 引入不同 css

```xml link 引入不同 css
&lt;!--手机端--&gt;
&lt;link rel=&#34;stylesheet&#34; type=&#34;text/css&#34; href=&#34;style_phone.css&#34; media=&#34;screen and (max-width: 960px)&#34;/&gt;
&lt;!--电脑端--&gt;
&lt;link rel=&#34;stylesheet&#34; type=&#34;text/css&#34; href=&#34;style_PC.css&#34; media=&#34;screen and (min-width: 960px)&#34;/&gt;
```

### jquery

```xml jquery
&lt;script src=&#34;https://code.jquery.com/jquery-3.3.1.min.js&#34;&gt;&lt;/script&gt;

&lt;script src=&#34;https://lib.sinaapp.com/js/jquery/2.0.2/jquery-2.0.2.min.js&#34;&gt;&lt;/script&gt;

&lt;script src=&#34;https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js&#34;&gt;&lt;/script&gt;

&lt;script src=&#34;http://cdn.bootcss.com/jquery/1.11.0/jquery.min.js&#34;&gt;&lt;/script&gt;
//还有其他的源 ...
```

### QQ 推广链接

&gt; [QQ 推广](https://shang.qq.com/v3/widget.html) [QQ 群](https://qun.qq.com/join.html)

```
&lt;a target=&#34;_blank&#34; href=&#34;https://wpa.qq.com/msgrd?v=3&amp;uin=1074627678&amp;site=qq&amp;menu=yes&#34;&gt;&lt;img border=&#34;0&#34; src=&#34;http://wpa.qq.com/pa?p=2:1074627678:51&#34; alt=&#34;点击这里给我发消息&#34; title=&#34;点击这里给我发消息&#34;/&gt;&lt;/a&gt;
```

&lt;a target=&#34;_blank&#34; href=&#34;https://wpa.qq.com/msgrd?v=3&amp;uin=1074627678&amp;site=qq&amp;menu=yes&#34;&gt;&lt;img border=&#34;0&#34; src=&#34;https://wpa.qq.com/pa?p=2:1074627678:51&#34; alt=&#34;点击这里给我发消息&#34; title=&#34;点击这里给我发消息&#34;/&gt;&lt;/a&gt;

### Google fonts

```diff
https://fonts.google.com/
一般选用国内源镜像替代（待补充 ...）
&#43; https://fonts.loli.net
&#43; //fonts.lug.ustc.edu.cn
```

### fancybox

[github 介绍](https://github.com/fancyapps/fancybox)&amp;emsp;[fancybox 源](https://www.bootcdn.cn/fancybox/)

```xml fancybox 源
&lt;link href=&#34;https://cdn.bootcss.com/fancybox/3.5.7/jquery.fancybox.min.css&#34; rel=&#34;stylesheet&#34;&gt;
&lt;script src=&#34;https://cdn.bootcss.com/fancybox/3.5.7/jquery.fancybox.min.js&#34;&gt;&lt;/script&gt;
```

## back-end

&gt; 更多学习内容见 [学习课件](https://github.com/Lruihao/web-dev-data)  
&gt; 练习作业 [源码](https://github.com/Lruihao/hw)&#43;[Demo](http://hw.lruihao.cn/)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/webbiji/  

