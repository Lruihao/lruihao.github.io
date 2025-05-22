# 🐟 A canvas implemented animation effect of small fish swimming.

# Fly Fish

👉 简体中文说明 | [English README](https://raw.githubusercontent.com/hugo-fixit/cmpt-flyfish/refs/heads/main/README.en.md)

一个 canvas 实现的小鱼游动动画效果。

## Demo

<https://lruihao.cn>

## 要求

- FixIt v0.3.12 或更高版本。

## 安装组件

安装方法与 [安装主题](https://fixit.lruihao.cn/zh-cn/documentation/installation/) 相同。有几种安装方式，请选择一种，例如，通过 Hugo 模块安装：

### 作为 Hugo 模块安装

首先确保你的项目本身是一个 [Hugo 模块](https://gohugo.io/hugo-modules/use-modules/#initialize-a-new-module)。

然后将此主题组件添加到你的 `hugo.toml` 配置文件中：

```toml
[module]
  [[module.imports]]
    path = "github.com/hugo-fixit/FixIt"
  [[module.imports]]
    path = "github.com/hugo-fixit/cmpt-flyfish"
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
git submodule add https://github.com/hugo-fixit/cmpt-flyfish.git themes/cmpt-flyfish
```

接下来编辑项目的 `hugo.toml` 并将此主题组件添加到你的主题中：

```toml
theme = ["FixIt", "cmpt-flyfish"]
```

## 配置

为了通过 FixIt 主题在 `layouts/partials/custom.html` 文件中开放的 [自定义块](https://fixit.lruihao.cn/references/blocks/) 将 `cmpt-flyfish.html` 注入到 `custom-assets` 中，你需要填写以下必要配置：

```toml
[params]
  [params.customPartials]
    # ... other partials
    assets = [ "inject/cmpt-flyfish.html" ]
    # ... other partials
```

配置小鱼主题色，并启用动画：

```toml
[params]
  [params.flyfish]
    enable = true
    light = "rgb(0 119 190 / 10%)"
    dark = "rgb(255 255 255 / 10%)"
```

## 参考

- [开发主题组件 | FixIt](https://fixit.lruihao.cn/contributing/components/)
- [如何开发 Hugo 主题组件 | FixIt](https://fixit.lruihao.cn/components/dev-component/)


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/cmpt-flyfish/  

