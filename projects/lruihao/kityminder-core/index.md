# 强大的脑图可视化工具

# KityMinder Core

&gt; [!NOTE]
&gt; 由于原项目 [KityMinder Core](https://github.com/fex-team/kityminder-core) 年久失修，存在一些 bug，所以 fork 了一份，进行了一些修复，并重新发布了 npm 包 [@cell-x/kityminder-core](https://www.npmjs.com/package/@cell-x/kityminder-core)。

## 简介

KityMinder 是一款强大的脑图可视化/编辑工具，由百度 FEX 团队开发并维护。

本仓库是 KityMinder 的核心实现部分：

- 包括脑图数据的可视化展示（Json 格式）
- 包括简单的编辑功能（节点创建、编辑、删除）。更加强大编辑功能的 KityMinder 编辑器请移步 [kityminder-editor](https://github.com/fex-team/kityminder-editor)
- 不包含第三方格式（FreeMind、XMind、MindManager）的支持，可以加载 [kityminder-protocol](https://github.com/fex-team/kityminder-third-party-protocol) 来扩展第三方格式支持。
- 不包含文件存储的支持，需要自行实现存储。可参照[百度脑图](https://naotu.baidu.com)中的开源的 fio &#43; 百度网盘方案进行实现。

## 使用

可以参考 [example.html](example.html) 进行使用。

```js
&lt;div id=&#34;minder-container&#34;&gt;&lt;/div&gt;
&lt;script type=&#34;text/javascript&#34; src=&#34;kityminder.core.min.js&#34;&gt;&lt;/script&gt;
&lt;script type=&#34;text/javascript&#34;&gt;
var minder = new kityminder.Minder({
  renderTo: &#39;#minder-container&#39;
});
&lt;/script&gt;
```

更多详细的开发资料可以参考 [wiki](https://github.com/fex-team/kityminder-core/wiki)

## 兼容性

KityMinder 基于 SVG 技术实现，支持绝大多数的 HTML5 浏览器，包括：

1. Chrome
2. Firefox
3. Safari
4. Internet Explorer 10 或以上

## 开发说明

```bash
npm install
npm run dev
```

## 联系我们

问题和建议反馈：[Github Issues](https://github.com/fex-team/kityminder-core/issues)
邮件组: kity@baidu.com
QQ 讨论群: 374918234


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/kityminder-core/  

