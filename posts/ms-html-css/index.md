# 前端面试题 - HTML&#43;CSS


&gt; [原文链接](https://github.com/ltadpoles/web-document/tree/master/Other)  
&gt; “卓越班”到了大三突然掀起一股毕业慌，一部分人投身于考研的热潮中，一部分人选择了培训机构学习技术。而我出于种种原因既不考研也不培训，选择自学 java 和 web 相关的知识，也希望因此能在以后谋得一份心仪的工作。

如果文章中有出现纰漏、错误之处，还请看到的小伙伴多多指教，先行谢过

&lt;!--more--&gt;

## HTML

### 1. Doctype 作用，HTML5 为什么只需要写 &lt;!DOCTYPE HTML&gt;

&gt; doctype 是一种标准通用标记语言的文档类型声明，目的是告诉标准通用标记语言解析器要使用什么样的文档类型定义（DTD）来解析文档。`&lt;!DOCTYPE&gt;`声明必须是 HTML 文档的第一行，位于 html 标签之前

&gt; HTML5 不基于 SGML，所以不需要引用 DTD。在 HTML5 中&lt;!DOCTYPE&gt;只有一种

&gt; SGML: 标准通用标记语言，是现时常用的超文本格式的最高层次标准

### 2. 行内元素有哪些，块级元素有哪些，空 (void) 元素有那些

行内元素：`a` `span` `i` `img` `input` `select` `b` 等

块级元素：`div` `ul` `ol` `li` `h1~h6` `p` `table` 等

空元素：`br` `hr` `link` 等

### 3. 简述一下你对 HTML 语义化的理解

简单来说，就是合适的标签做合适的事情，这样具有以下好处：

- 有助于构架良好的 HTML 结构，有利于搜索引擎的建立索引、抓取，利于 SEO
- 有利于不同设备的解析
- 有利于构建清晰的机构，有利于团队的开发、维护

### 4. 常见的浏览器内核有哪些，介绍一下你对浏览器内核的理解&lt;/h5&gt;

&gt; Trident 内核：IE

&gt; Gecko 内核：NETSCAPE6 及以上版本，火狐

&gt; Presto 内核：Opera7 及以上。[Opera 内核原为：Presto，现为：Blink;]

&gt; Webkit 内核：Safari，Chrome 等。[Chrome 的：Blink（WebKit 的分支）]

浏览器内核又可以分成两部分：**渲染引擎和 JS 引擎。** 渲染引擎主要负责取得网页的内容、整理讯息、计算网页的显示方式等，JS 引擎则是解析 Javascript 语言，执行 javascript 语言来实现网页的动态效果。

### 5. html5 有哪些新特性

- 语义化标签：`header` `footer` `nav` `section` `article` `aside` 等
- 增强型表单：`date`（从一个日期选择器选择一个日期） `email`（包含 e-mail 地址的输入域） `number`（数值的输入域） `range`（一定范围内数字值的输入域） `search`（用于搜索域） `tel`（定义输入电话号码字段）等
- 视频和音频：`audio` `video`
- Canvas 绘图 SVG 绘图
- 地理定位：`Geolocation`
- 拖放 API：`drag`
- web worker：是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能
- web storage: `localStorage` `sessionStorage`
- WebSocket: HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议

### 6. 描述一下 cookie，sessionStorage 和 localStorage 的区别

| 特性         | Cookie                                                               | localStorage                                       | sessionStorage                                       |
| :----------- | :------------------------------------------------------------------- | :------------------------------------------------- | :--------------------------------------------------- |
| 生命周期     | 可设置失效时间，没有设置的话，默认是关闭浏览器后失效                 | 除非被手动清除，否则将会永久保存                   | 仅在当前网页会话下有效，关闭页面或浏览器后就会被清除 |
| 存放数据大小 | 4KB 左右                                                             | 可以保存 5MB 的信息                                | 可以保存 5MB 的信息                                  |
| http 请求    | 每次都会携带在 HTTP 头中，如果使用 cookie 保存过多数据会带来性能问题 | 仅在客户端（即浏览器）中保存，不参与和服务器的通信 | 仅在客户端（即浏览器）中保存，不参与和服务器的通信   |

### 7. 如何实现浏览器内多个标签页之间的通信

- 使用 localStorage: `localStorage.setItem(key,value)`、`localStorage.getItem(key)`
- websocket 协议
- webworker

[多个标签页之间的通信](https://juejin.im/post/5acdba01f265da23826e5633)

### 8. HTML5 的离线存储怎么使用，解释一下工作原理

[HTML5 的离线存储](https://segmentfault.com/a/1190000006984353)

### 9. src 与 href 的区别

区别：src 用于替代这个元素，而 href 用于建立这个标签与外部资源之间的关系

`&lt;link href=&#34;style.css&#34; rel=&#34;stylesheet&#34; /&gt;`浏览器加载到这里的时候，html 的渲染和解析不会暂停，css 文件的加载是同时进行的

`&lt;script src=&#34;script.js&#34;&gt;&lt;/script&gt;`当浏览器解析到这句代码时，页面的加载和解析都会暂停直到浏览器拿到并执行完这个 js 文件

### 10. 表单提交中 Get 和 Post 方式的区别

- Get 一般用于从服务器上获取数据，Post 向服务器传送数据
- Get 传输的数据是拼接在 Url 之后的，对用户是可见的；Post 的传输数据对用户是不可见的
- Get 传送的数据量较小，不能大于 2KB。Post 传送的数据量较大，一般被默认为不受限制
- Get 安全性非常低，Post 安全性较高
- 在 FORM 提交的时候，如果不指定 Method，则默认为 Get 请求

## CSS

### 1. css 盒子模型，box-sizing 属性的理解

css 的盒模型由 content（内容）、padding（内边距）、border（边框）、margin（外边距）组成。但盒子的大小由 content&#43;padding&#43;border 这几部分决定

box-sizing 是一个 CSS3 属性，与盒子模型有着密切联系。即决定元素的宽高如何计算，box-sizing 有三个属性：

```css
box-sizing: content-box|border-box|inherit:
```

- content-box 使得元素的宽高即为内容区的宽高（默认模式）
- border-box: 计算方式 content &#43; padding &#43; border = 本身元素大小，即缩小了 content 大小
- inherit 指定 box-sizing 属性的值，应该从父元素继承

### 2. 清除浮动，什么时候需要清除浮动，清除浮动都有哪些方法

浮动的元素是脱离文档标准流的，如果我们不清楚浮动，那么就会造成**父元素高度塌陷**，影响页面布局。

清除浮动的方式：

- 为父元素设置高度
- 为父元素添加`overflow:hidden`
- 伪元素

```css
.fix::after {
  content: &#39;&#39;;
  display: block;
  clear: both;
}
```

使用伪元素的好处：不增加冗余的 DOM 节点，符合语义化

&gt; overflow:hidden 可以触发 BFC 机制。BFC：块级格式化上下文，创建了 BFC 的元素就是一个独立的盒子，它规定了内部如何布局，并且与这个独立盒子里的布局不受外部影响，当然它也不会影响到外面的元素，**计算 BFC 的高度时，浮动元素也参与计算**

### 3. 如何让一个不定宽高的盒子水平垂直居中

&gt; 定位的方式

```css
.father {
  position: relative;
}
.son {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
```

&gt; css3 属性

```css
.father {
  position: relative;
}
.son {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

&gt; flex 布局

```css
.father {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 4. px 和 em 和 rem 的区别

&gt; `px`: 像素，相对长度单位。像素`px`是相对于显示器屏幕分辨率而言的

&gt; `em`的值并不是固定的，会继承父级元素的字体大小，代表倍数

&gt; `rem`的值并不是固定的，始终是基于根元素 `&lt;html&gt;` 的，也代表倍数

### 5. position 的值有哪些

&gt; static：默认值。没有定位，元素出现在正常的流中

&gt; relative（相对定位）：生成相对定位的元素，相对于其正常（原先本身）位置进行定位

&gt; absolute（绝对定位）：生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位

&gt; fixed（固定定位）：生成绝对定位的元素，相对于浏览器窗口进行定位

### 6. display:none 与 visibility：hidden 的区别

| 区别           | display:none                                                                 | visibility：hidden 的                                                           |
| -------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 是否占据空间   | 不占据任何空间，在文档渲染时，该元素如同不存在（但依然存在文档对象模型树中） | 该元素空间依旧存在                                                              |
| 是否渲染       | 会触发 reflow（回流），进行渲染                                              | 只会触发 repaint（重绘），因为没有发现位置变化，不进行渲染                      |
| 是否是继承属性 | 不是继承属性，元素及其子元素都会消失                                         | 是继承属性，若子元素使用了 visibility:visible，则不继承，这个子孙元素又会显现出 |

### 7. CSS 中 link 和@import 的区别

&gt; link 属于 XHTML 标签，@import 完全是 CSS 提供的一种方式，只能加载 CSS

&gt; 加载顺序的差别，当一个页面被加载的时候，link 引用的 CSS 会同时被加载，而@import 引用的 CSS 会等到页面全部被下载完再被加载

&gt; 兼容性的差别。由于@import 是 CSS2.1 提出的所以老的浏览器不支持，而 link 标签无此问题

&gt; 当使用 javascript 控制 dom 去改变样式的时候，只能使用 link 标签，因为@import 不是 dom 可以控制的

### 8. 什么是响应式设计，响应式设计的基本原理是什么

&gt; 响应式网站设计是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理

### 9. 为什么要初始化 CSS 样式

&gt; 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对 CSS 初始化往往会出现浏览器之间的页面显示差异

&gt; 初始化样式会对 SEO 有一定的影响

### 10. CSS3 有哪些新特性

- 实现圆角`border-radius`，阴影`box-shadow`，边框图片`border-image`
- 对文字加特效`text-shadow`，强制文本换行`word-wrap`，线性渐变`linear-gradient`
- 实现旋转`transform:rotate(90deg)`, 缩放`scale(0.85,0.90)`,`translate(0px,-30px)`定位，倾斜`skew(-9deg,0deg)`;
- 增加了更多的 CSS 选择器、多背景、`rgba()`
- 唯一引入的伪元素是`::selection`；
- 实现媒体查询`@media`，多栏布局`flex`
- 过渡`transition` 动画`animation`

### 11. ::before 和 :after 中双冒号和单冒号有什么区别？解释一下这 2 个伪元素的作用

&gt; 单冒号 (:) 用于 CSS3 伪类，双冒号 (::) 用于 CSS3 伪元素。（伪元素由双冒号和伪元素名称组成）, 双冒号是在当前规范中引入的，用于区分伪类和伪元素

### 12. CSS 优化、提高性能的方法有哪些

- 移除空的 css 规则（Remove empty rules）
- 正确使用 display 的属性
- 不滥用浮动、web 字体
- 不声明过多的 font-size
- 不在选择符中使用 ID 标识符
- 遵守盒模型规则
- 尽量减少页面重排、重绘
- 抽象提取公共样式，减少代码量

### 13. 重绘和回流

[重绘和回流](https://juejin.im/post/5a9923e9518825558251c96a)

### 14. flex 布局

[flex 布局教程--阮一峰](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

### 15. css 预处理器

提供了一种 css 的书写方式，常见的就是 [SAAS 文档](http://sass.bootcss.com/docs/sass-reference/) 和 [LESS 文档](https://less.bootcss.com/)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/ms-html-css/  

