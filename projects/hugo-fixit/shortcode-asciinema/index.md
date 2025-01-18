# A Hugo theme component with asciinema-embed shortcode.

&lt;!-- markdownlint-disable-file MD033 MD041 --&gt;
&lt;h1 align=&#34;center&#34;&gt;shortcode-asciinema | FixIt&lt;/h1&gt;

&lt;div align=&#34;center&#34; class=&#34;ignore&#34;&gt;
  &lt;p&gt;一个带有 &lt;code&gt;asciinema-embed&lt;/code&gt; shortcode 的 Hugo 主题组件。&lt;/p&gt;
  简体中文 |
  &lt;a href=&#34;https://fixit.lruihao.cn/zh-cn/ecosystem/hugo-fixit/shortcode-asciinema/?lang=chinese_traditional&#34;&gt;繁體中文&lt;/a&gt; |
  &lt;a href=&#34;https://raw.githubusercontent.com/hugo-fixit/shortcode-asciinema/refs/heads/main/README.en.md&#34;&gt;English&lt;/a&gt; |
  &lt;a href=&#34;https://fixit.lruihao.cn/ecosystem/hugo-fixit/shortcode-asciinema/?lang=french&#34;&gt;Français&lt;/a&gt; |
  &lt;a href=&#34;https://fixit.lruihao.cn/ecosystem/hugo-fixit/shortcode-asciinema/?lang=russian&#34;&gt;Русский язык&lt;/a&gt; |
  &lt;a href=&#34;https://fixit.lruihao.cn/ecosystem/hugo-fixit/shortcode-asciinema/?lang=spanish&#34;&gt;Español&lt;/a&gt; |
  &lt;a href=&#34;https://fixit.lruihao.cn/ecosystem/hugo-fixit/shortcode-asciinema/?lang=hindi&#34;&gt;हिन्दी&lt;/a&gt; |
  &lt;a href=&#34;https://fixit.lruihao.cn/ecosystem/hugo-fixit/shortcode-asciinema/?lang=german&#34;&gt;deutsch&lt;/a&gt; |
  &lt;a href=&#34;https://fixit.lruihao.cn/ecosystem/hugo-fixit/shortcode-asciinema/?lang=korean&#34;&gt;한국어&lt;/a&gt; |
  &lt;a href=&#34;https://fixit.lruihao.cn/ecosystem/hugo-fixit/shortcode-asciinema/?lang=japanese&#34;&gt;しろうと&lt;/a&gt;
&lt;/div&gt;

## Demo

[安装主题#CLI | FixIt](https://fixit.lruihao.cn/documentation/installation/#cli)

## 要求

适用于所有 Hugo 主题。

## 安装组件

安装方式与 [安装主题](https://fixit.lruihao.cn/zh-cn/documentation/installation/) 相同，有多种安装方式，任选一种即可，这里介绍两种主流方式。

### 作为 Hugo 模块安装

首先确保你的项目本身是一个 [Hugo 模块](https://gohugo.io/hugo-modules/use-modules/#initialize-a-new-module)。

然后将此主题组件添加到你的 `hugo.toml` 配置文件中：

```toml
[module]
  [[module.imports]]
    path = &#34;github.com/hugo-fixit/FixIt&#34;
  [[module.imports]]
    path = &#34;github.com/hugo-fixit/shortcode-asciinema&#34;
```

在 Hugo 的第一次启动时，它将下载所需的文件。

要更新到模块的最新版本，请运行：

```bash
hugo mod get -u
hugo mod tidy
```

### 作为 Git 子模块安装

将 [FixIt](https://github.com/hugo-fixit) 和此 git 存储库克隆到你的主题文件夹中，并将其作为网站目录的子模块添加。

```bash
git submodule add https://github.com/hugo-fixit/FixIt.git themes/FixIt
git submodule add https://github.com/hugo-fixit/shortcode-asciinema.git themes/shortcode-asciinema
```

接下来编辑项目的 `hugo.toml` 并将此主题组件添加到你的主题中：

```toml
theme = [&#34;FixIt&#34;, &#34;shortcode-asciinema&#34;]
```

## 记录终端

你可以使用 `asciinema` 命令记录终端并将其上传到 [asciinema.org](https://asciinema.org/)。

```bash
asciinema rec demo.cast
# press &lt;ctrl-d&gt; or type &#34;exit&#34; when you&#39;re done
asciinema upload demo.cast
```

## 使用 Shortcode

以下是一个使用示例：

```markdown
{{?{}&lt; asciinema-embed 697494 &gt;}}
```

呈现效果如下：

[![asciicast](https://asciinema.org/a/697494.svg)](https://asciinema.org/a/697494)

## 参考

- [开发主题组件 | FixIt](https://fixit.lruihao.cn/contributing/components/)
- [如何开发 Hugo 主题组件 | FixIt](https://fixit.lruihao.cn/components/dev-component/)


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/shortcode-asciinema/  

