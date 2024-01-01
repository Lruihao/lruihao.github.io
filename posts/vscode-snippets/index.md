# VSCode 添加用户代码片段，自定义用户代码片段


在使用 VScode 开发中经常会有一些重复使用的代码块，复制粘贴也很麻烦，这时可以在 VScode 中添加用户代码片段，输入简写即可快捷输入。

&lt;!--more--&gt;

## 新建代码片段

在 VScode 主界面-&gt;点击左下角设置图标-&gt;点击用户代码片段，可以建立全局代码片段，也可以建立单个项目的代码片段，也可以设置语言类型的代码片段。

![create-snippets](images/23_1694658794.png)

## 代码片段格式

代码片段格式如下：

```json
{
  // Example:
  // 在这里放置你的 JavaScript 代码片段。每个代码片段都有一个名称、前缀、代码块和描述。前缀用于触发代码片段，代码块将被展开并插入。可能使用的变量有：
  // $1、$2 表示标签停止点，$0 表示最终光标位置，${1:label}、${2:another} 表示占位符。具有相同 id 的占位符是相互关联的。
  // 示例：
  // &#34;Print to console&#34;: {
  //  &#34;prefix&#34;: &#34;log&#34;,
  //  &#34;body&#34;: [
  //   &#34;console.log(&#39;$1&#39;);&#34;,
  //   &#34;$2&#34;
  //  ],
  //  &#34;description&#34;: &#34;Log output to console&#34;
  // }
}
```

可以使用工具 [snippet-generator](https://snippet-generator.app/) 生成代码片段。

## 常用代码片段

### JavaScript

```json {title=javascript.json}
{
  &#34;Print to console&#34;: {
    &#34;prefix&#34;: &#34;cl&#34;,
    &#34;body&#34;: [
      &#34;console.log(&#39;$1&#39;);&#34;,
    ],
    &#34;description&#34;: &#34;Log output to console&#34;
  }
}
```

### Markdown

```json {title=markdown.json}
{
  &#34;Font Matter&#34;: {
    &#34;prefix&#34;: &#34;fm&#34;,
    &#34;body&#34;: [
      &#34;---&#34;,
      &#34;title: $1&#34;,
      &#34;date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE$T$CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND&#43;08:00&#34;,
      &#34;draft: true&#34;,
      &#34;categories: $2&#34;,
      &#34;tags: $3&#34;,
      &#34;description: $4&#34;,
      &#34;keywords: $5&#34;,
      &#34;---&#34;
    ],
    &#34;description&#34;: &#34;Font Matter&#34;
  },
  &#34;Markdown Table&#34;: {
    &#34;prefix&#34;: &#34;table&#34;,
    &#34;body&#34;: [
      &#34;| $1 | $2 |&#34;,
      &#34;| --- | --- |&#34;,
      &#34;| $3 | $4 |&#34;
    ],
    &#34;description&#34;: &#34;Markdown Table&#34;
  },
  &#34;FixIt Shortcode TypeIt&#34;: {
    &#34;prefix&#34;: &#34;typeit&#34;,
    &#34;body&#34;: [
      &#34;{{&lt;/* typeit */&gt;}}&#34;,
      &#34;$1&#34;,
      &#34;{{&lt;/* /typeit */&gt;}}&#34;
    ],
    &#34;description&#34;: &#34;FixIt Shortcode TypeIt&#34;
  },
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/vscode-snippets/  

