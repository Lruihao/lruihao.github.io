# A Christmas Easter Egg by JavaScript.

<!-- markdownlint-disable-file MD033 MD041 -->
<h1 align="center">🎄 Santa Hat | FixIt</h1>

<div align="center" class="ignore">
  <p>一个 JavaScript 实现的圣诞节小彩蛋。</p>
  简体中文 |
  <a href="https://fixit.lruihao.cn/zh-cn/ecosystem/hugo-fixit/cmpt-santa-hat/?lang=chinese_traditional">繁體中文</a> |
  <a href="https://raw.githubusercontent.com/hugo-fixit/cmpt-santa-hat/refs/heads/main/README.en.md">English</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-santa-hat/?lang=french">Français</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-santa-hat/?lang=russian">Русский язык</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-santa-hat/?lang=spanish">Español</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-santa-hat/?lang=hindi">हिन्दी</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-santa-hat/?lang=deutsch">Deutsch</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-santa-hat/?lang=korean">한국어</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-santa-hat/?lang=japanese">日本語</a>
</div>

## 特性

![santa-hat](https://github.com/user-attachments/assets/6cf191ca-1455-46ae-a939-6539a2143c4d)

- 🎅 自动在圣诞节期间（12 月 20 日至 26 日）为网站 Logo 添加圣诞帽装饰
- 🎯 自动检测当前日期，无需手动开关
- 💫 轻量级实现，不影响网站性能

## 要求

- FixIt v0.4.0 或更高版本。

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
path = "github.com/hugo-fixit/cmpt-santa-hat"
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
git submodule add https://github.com/hugo-fixit/cmpt-santa-hat.git themes/cmpt-santa-hat
```

接下来编辑项目的 `hugo.toml` 并将此主题组件添加到你的主题中：

```toml
theme = ["FixIt", "cmpt-santa-hat"]
```

## 配置

为了通过 FixIt 主题在 `layouts/_partials/custom.html` 文件中开放的 [自定义块](https://fixit.lruihao.cn/references/blocks/) 将 `santa-hat.fixit.html` 注入到 `custom-assets` 中，你需要填写以下必要配置：

```toml
[params]

[params.customPartials]
# ... other partials
assets = [
  "inject/santa-hat.fixit.html",
]
# ... other partials
```

## 样式控制

- Logo 尺寸推荐：32x32 像素。
- CSS 变量：
  - `--fi-santa-hat-offset`：控制圣诞帽相对于 Logo 的平移偏移，默认值 `8px 2px`。
  - `--fi-santa-hat-shadow`：控制帽子阴影的 RGB 值，默认值 `0, 0, 0`，暗色模式下会自动切换为 `255, 255, 255`。

<!-- 
## 参考

- [开发主题组件 | FixIt](https://fixit.lruihao.cn/contributing/components/)
- [如何开发 Hugo 主题组件 | FixIt](https://fixit.lruihao.cn/components/dev-component/)
-->


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/cmpt-santa-hat/  

