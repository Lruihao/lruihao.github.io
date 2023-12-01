# 中文翻译的常见问题


> 以下内容截取自 [针对 MDN 文档的本地化指南](https://github.com/mdn/translated-content/blob/main/docs/zh-cn/translation-guide.md) 的中文翻译的常见问题小节。
>
> 其中翻译的规范也是中文写作的规范，更多详见之前写的 [中文技术文档的写作规范](/posts/document-style-guide/)。

为保证简体中文文档格式的一致性，翻译指南列出了部分规范。

<!--more-->

## 标点符号

除了代码中使用的符号以及一些特殊情况外，请将英文（半角）符号替换成中文（大部分为全角）符号。

> 但请注意，请不要使用**全角数字**（特殊情况除外）。

示例如下：

- 正确：`我们可以学习 JavaScript——一种很酷的语言`
- 错误：`我们可以学习 JavaScript--一种很酷的语言`
- 正确：`以下示例是“可交互的”`
- 错误：`以下示例是"可交互的"`

另外，请注意并列的词语间应使用顿号而非逗号：

- 原文：`a, b, and c`
- 宜：`a、b 和 c`
- 不宜：`a，b，和 c`

### 常见中/英文标点

<!-- markdownlint-disable search-replace -->

| 名称   | 中文 | 英文    |
| ------ | ---- | ------- |
| 括号   | （） | ()      |
| 冒号   | ：   | :       |
| 引号   | “”   | ""      |
| 破折号 | ——   | -- 、 — |

<!-- markdownlint-enable search-replace -->

简体中文标点符号参考资源：

- [教育部《标点符号用法》](https://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113091548267.pdf)
- [维基百科：标点符号](https://zh.wikipedia.org/zh-cn/标点符号)

## 中文和拉丁语系文字间加空格

对于简体中文文档，请在中文和拉丁语系文字之间保留**一个空格**，但在拉丁语系文字和中文标点之间，则无需保留空格。

示例如下：

- 正确：`学习 Web 开发`
- 错误：`学习Web开发`
- 正确：`学习 JavaScript、HTML、CSS 等`
- 错误：`学习 JavaScript、 HTML、 CSS 等`
- 正确：`应用程序接口（API）`
- 错误：`应用程序接口（ API ）`

对于链接文字和非链接文字部分，同样适用此规则：

- 正确：`它指向一个[示例](#示例)`
- 错误：`它指向一个 [示例](#示例)`
- 正确：`指向 [MDN 开发者文档](https://developer.mozilla.org/)的链接`
- 错误：`指向[MDN开发者文档](https://developer.mozilla.org/)的链接`

请注意，数字与中文之间也请保留空格：

- 正确：`需 10 个小时完成`
- 错误：`需10个小时完成`

## 排版

英文文档中，对于较长的段落，会通过断行的形式截断，以方便维护文档。但在 Markdown 中，断行会引入空格，在简体中文翻译中，我们有如下约定：

- 在段落不是特别长的情况下（200 个字符以内），请不要断行。
- 若段落过长，也请在中文与拉丁语系文字、数字之间，或是句子末尾断行。

例如：

```md
This is an example.
We usually write a paragraph into multiple lines.
Like this.
```

而在中文文档中，应该使它们在同一行内：

```md
这是一个示例。我们不应该断行写这一段话。就像这样。
```

## 词语翻译

## 代名词

<!-- markdownlint-disable search-replace -->

我们无需将“you”翻译为“您”，在文档正文部分的翻译中，请统一使用“你”。

<!-- markdownlint-enable search-replace -->

## 复数形式

英文文档中，为了使语句的语法正确，会使用大量的复数形式。在中文翻译中，则无需保留这些复数的形式（未翻译的英文名词也同理）。

- 原文：`Application Programming Interfaces (APIs)`
- 宜：`应用程序接口（API）`
- 不宜：`应用程序接口（APIs）`
- 不宜：`应用程序接口们（APIs）`

## 术语表

我们在仓库中维护了一个[术语表](https://github.com/mdn/translated-content/blob/main/docs/zh-cn/glossary.md)，旨在统一目前还未有明确中文翻译的术语。在翻译文档时，请尽量使用术语表中的术语，以保证文档的一致性。

## 常用标题

英文文档中使用了一些常见标题，为了保持简体中文文档的一致性，请在翻译时参考术语表中的[标题和表格的翻译](https://github.com/mdn/translated-content/blob/main/docs/zh-cn/glossary.md#标题表格)。


---

> 作者:   
> URL: https://lruihao.cn/posts/translation-guide/  
> 转载 URL: https://github.com/mdn/translated-content/blob/main/docs/zh-cn/translation-guide.md
