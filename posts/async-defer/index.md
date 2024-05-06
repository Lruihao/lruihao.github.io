# Script 的三种加载方式 (Async, Defer)


{{&lt; admonition note &gt;}}
JS 的加载分为两个部分：下载和执行。  
浏览器在执行 HTML 的时候如果遇到`&lt;script&gt;`时会停止页面的渲染，去下载和执行 js 的文件直接遇见`&lt;/scirpt&gt;`会继续渲染页面。故浏览器在执行 js 文件的时候浏览器表现为一片空白，为了解决这个问题 ECMAScript 定义了 defer 和 async 两个属性用于控制 JS 的下载和执行。
{{&lt; /admonition &gt;}}

&lt;!--more--&gt;

## 不带任何属性

&gt; 同步模式，又称阻塞模式，我们平时使用的最多的一种方式。当浏览器解析到`&lt;script&gt;`标签时，浏览器会停止解析其后的内容，而优先下载脚本文件，并执行其中的代码，是个同步阻塞的过程。  
&gt; 一般建议把`&lt;script&gt;`标签放在`&lt;body&gt;`结尾处，这样尽可能减少页面阻塞。  
&gt; 而如果想要异步执行 script，则可以给其加上 async 或 defer 属性。

```html
&lt;script&gt;
```

## defer

&gt; defer 属性在 HTML 解析期间异步下载文件，并且只在 HTML 解析完成后才执行它。对于 defer，我们可以理解是将外链的 js 放在了页面底部。js 的加载不会阻塞页面的渲染和资源的加载。不过 defer 会按照原本的 js 的顺序执行，**所以如果前后有依赖关系的 js 可以放心使用。**

```html
&lt;script defer&gt;
```

## async

&gt; async 属性会在 HTML 解析期间异步下载文件，并在完成下载后立即暂停 HTML 解析器去执行 script 中的代码。在执行过程中浏览器处于阻塞状态，响应不了任何需求。**如果 js 前后有依赖性，用 async，就很有可能出错。**

```html
&lt;script async&gt;
```

## 区别

### 相同点

1. 加载文件时不阻塞页面渲染
2. 对于 inline 的 script 无效（只适用有`src`的外部 js）
3. 使用这两个属性的脚本中不能调用 document.write 方法
4. 有脚本的 onload 的事件回调

### 区别点

1. html4.0 中定义了 defer；html5.0 中定义了 async
2. 浏览器支持不同
3. 每一个 async 属性的脚本都在它下载结束之后立刻执行，同时会在 window 的 load 事件之前执行。所以就有可能出现脚本执行顺序被打乱的情况；每一个 defer 属性的脚本都是在页面解析完毕之后，按照原本的顺序执行，同时会在 document 的 DOMContentLoaded 之前执行。

## 那么这三种方式各在什么情况下使用呢？

通常来说，尽可能使用`async`，然后是`defer`，最后不使用属性。
并遵循以下规则：

- 如果脚本是模块化的，并且不依赖于任何脚本，则使用`async`。
- 如果脚本依赖于或依赖于另一个脚本，则使用`defer`。
- 如果脚本很小并且有`async`脚本依赖该脚本，则不加属性。

## 兼容性

1. Internet Explorer 10、Firefox、Opera、Chrome 和 Safari 支持 async 属性。
2. 所有主流浏览器都支持 defer 属性。

## 参考

- &lt;https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html&gt;
- &lt;https://www.jianshu.com/p/17dc82bf08f1&gt;


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/async-defer/  

