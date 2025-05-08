# A Hugo theme component with asciinema-embed shortcode.

<!-- markdownlint-disable-file MD033 MD041 -->
<h1 align="center">shortcode-asciinema | FixIt</h1>

<div align="center" class="ignore">
  <p>一个带有 <code>asciinema-embed</code> shortcode 的 Hugo 主题组件。</p>
  简体中文 |
  <a href="https://fixit.lruihao.cn/zh-cn/ecosystem/hugo-fixit/shortcode-asciinema/?lang=chinese_traditional">繁體中文</a> |
  <a href="https://raw.githubusercontent.com/hugo-fixit/shortcode-asciinema/refs/heads/main/README.en.md">English</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/shortcode-asciinema/?lang=french">Français</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/shortcode-asciinema/?lang=russian">Русский язык</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/shortcode-asciinema/?lang=spanish">Español</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/shortcode-asciinema/?lang=hindi">हिन्दी</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/shortcode-asciinema/?lang=german">deutsch</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/shortcode-asciinema/?lang=korean">한국어</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/shortcode-asciinema/?lang=japanese">しろうと</a>
</div>

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
    path = "github.com/hugo-fixit/FixIt"
  [[module.imports]]
    path = "github.com/hugo-fixit/shortcode-asciinema"
```

在 Hugo 的第一次启动时，它将下载所需的文件。

要更新到模块的最新版本，请运行：

```bash
hugo mod get -u
hugo mod tidy
```

### 作为 Git 子模块安装

将 [FixIt](https://github.com/hugo-fixit/FixIt) 和此 git 存储库克隆到你的主题文件夹中，并将其作为网站目录的子模块添加。

```bash
git submodule add https://github.com/hugo-fixit/FixIt.git themes/FixIt
git submodule add https://github.com/hugo-fixit/shortcode-asciinema.git themes/shortcode-asciinema
```

接下来编辑项目的 `hugo.toml` 并将此主题组件添加到你的主题中：

```toml
theme = ["FixIt", "shortcode-asciinema"]
```

## 记录终端

你可以使用 `asciinema` 命令记录终端并将其上传到 [asciinema.org](https://asciinema.org/)。

```bash
asciinema rec demo.cast
# press <ctrl-d> or type "exit" when you're done
asciinema upload demo.cast
```

## 使用 Shortcode

以下是一个使用示例：

```markdown
{{?{}< asciinema-embed 697494 >}}
```

呈现效果如下：

[![asciicast](https://asciinema.org/a/697494.svg)](https://asciinema.org/a/697494)

## 参考

- [开发主题组件 | FixIt](https://fixit.lruihao.cn/contributing/components/)
- [如何开发 Hugo 主题组件 | FixIt](https://fixit.lruihao.cn/components/dev-component/)


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/shortcode-asciinema/  

