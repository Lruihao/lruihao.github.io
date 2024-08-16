# Ttf 字体压缩


HTML 网页引用中文字体，文件过大，加载缓慢的解决办法。

&lt;!--more--&gt;

## 安装 Node.js

font-spider 是 Node.js 的一个模块，所以需要安装 Node.js。

## 安装字蛛

输入命令

```bash
npm install font-spider -g
```

## 编写 HTML

![文件结构](images/24_1723796848.webp)

新建一个 HTML 文件，引用字体文件，并使用自定义字体。如下：

```html
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&#34;utf-8&#34;&gt;
    &lt;meta name=&#34;viewport&#34; content=&#34;width=device-width, initial-scale=1&#34;&gt;
    &lt;title&gt;&lt;/title&gt;
    &lt;style type=&#34;text/css&#34;&gt;
      @font-face {
        font-family: MMT;
        src: url(&#39;MMT_579767_SOAJ0.ttf&#39;);
      }
      body {
        font-family: MMT;
      }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
  这里写要压缩的文字，吧啦吧啦……
  &lt;/body&gt;
&lt;/html&gt;
```

## 压缩字体

在当前目录下执行以下命令生成新的字体库：

```bash
font-spider index.html
```

![执行结果（Mac）](images/24_1723797191.webp &#34;更新这篇文章时在 Mac 下执行的结果&#34;)

![执行结果（Windows）](images/result.webp &#34;写这篇文章时最开始在 Windows 下执行的结果&#34;)

执行完后，它会把原来的字体文件移动到 `.font-spider` 文件夹，而 CSS 中引用的字体文件会被替换为新的压缩后的字体文件，这就是我们需要部署的字体文件。

下次执行只需要往 HTML 文件中添加新的文字，然后再执行 `font-spider index.html` 命令即可。

## 参考

[font-spider](https://github.com/aui/font-spider)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/web-font/  

