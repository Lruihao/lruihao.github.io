# 🐙 Display your GitHub projects in the FixIt theme and generate blog posts from readme.

<!-- markdownlint-disable-file MD033 MD041 -->
<h1 align="center">GitHub Projects Embed | FixIt</h1>

![apple-devices-preview](https://github.com/hugo-fixit/component-projects/assets/33419593/3f75bd94-90df-4057-bee5-cbe2a61422f1)

<div align="center" class="ignore">
  <p>在 FixIt 主题中展示你的 GitHub 项目并根据 README 自动生成博客文章。</p>
  简体中文 |
  <a href="https://fixit.lruihao.cn/zh-cn/ecosystem/hugo-fixit/component-projects/?lang=chinese_traditional">繁體中文</a> |
  <a href="https://raw.githubusercontent.com/hugo-fixit/component-projects/refs/heads/main/README.en.md">English</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/component-projects/?lang=french">Français</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/component-projects/?lang=russian">Русский язык</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/component-projects/?lang=spanish">Español</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/component-projects/?lang=hindi">हिन्दी</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/component-projects/?lang=deutsch">Deutsch</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/component-projects/?lang=korean">한국어</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/component-projects/?lang=japanese">日本語</a>
</div>

## Demo

- [生态系统 | FixIt](https://fixit.lruihao.cn/zh-cn/ecosystem/)
- [Lruihao 的开源项目](https://lruihao.cn/projects/)

## 特性

- 支持 GitHub 项目卡片展示（`layout` 或者 `shortcodes`）
- 支持根据 README 自动生成博客文章（`content adapter`）

## 要求

- [FixIt](https://github.com/hugo-fixit) v1.0.0 或更高版本

## 安装

安装方法与 [安装主题](https://fixit.lruihao.cn/docs/installation/) 相同。有几种安装方法，请选择一种。

### 安装为 Hugo 模块

首先确保你的项目本身是一个 [Hugo 模块](https://gohugo.io/hugo-modules/use-modules/#initialize-a-new-module)。

然后将此主题组件添加到你的 `hugo.toml` 配置文件中：

```toml
[module]

[[module.imports]]
path = "github.com/hugo-fixit/FixIt"

[[module.imports]]
path = "github.com/hugo-fixit/component-projects/v2"
```

在第一次启动 Hugo 时，它将下载所需的文件。

要更新到模块的最新版本，请运行：

```bash
hugo mod get -u
hugo mod tidy
```

### 安装为 Git 子模块

将 [FixIt](https://github.com/hugo-fixit/FixIt) 和此 git 存储库克隆到你的主题文件夹中，并将其添加为网站目录的子模块。

```bash
git submodule add https://github.com/hugo-fixit/FixIt.git themes/FixIt
git submodule add https://github.com/hugo-fixit/component-projects.git themes/component-projects
```

接下来编辑项目的 `hugo.toml` 并将此主题组件添加到你的主题中：

```toml
theme = ["FixIt", "component-projects"]
```

## 配置

最后，为了通过 FixIt 主题在 `layouts/_partials/custom.html` 文件中开放的 [自定义块](https://fixit.lruihao.cn/references/blocks/) 将 `component-projects.html` 注入到 `custom-head` 或 `custom-assets` 中，你需要填写以下必要配置：

```toml
[params]

[params.custom_partials]
# ... other partials
assets = [ "inject/component-projects.html" ]
# ... other partials
```

## 访问令牌（可选）

获取仓库信息依赖 GitHub 官方 API。在开始使用之前，建议在 GitHub 上生成个人访问令牌，以防止 GitHub API 使用限制。

1. 点击跳到 GitHub [生成 token](https://github.com/settings/tokens/new)，选择名为 `public_repo` 的范围以生成个人访问令牌。
2. 配置环境变量 `HUGO_PARAMS_GHTOKEN=your-person-access-token`，详细信息请参见 [os.Getenv | Hugo](https://gohugo.io/functions/os/getenv/#examples)

## 使用

### 布局

首先，创建 `projects.yml` 文件并编辑数据：

```bash
cp themes/component-projects/data/projects.yml data/projects.yml
```

> 如果你的网站是多语言的，你可以为英语创建一个 `projects.en.yml` 文件，为中文创建一个 `projects.zh-cn.yml` 文件。

接下来，使用 `projects` 布局创建一个新页面：

```bash
hugo new projects/_index.md
```

编辑新页面的标题和内容：

```yaml
---
title: My Projects
titleIcon: fa-solid fa-laptop-code
subtitle: <https://github.com/Lruihao>
sectionSlot: Some text to display in the section slot which is above the related articles list.
hidden_adapters: false
layout: projects
---

Some text to display at the start of the page.
```

### Shortcodes

在任何页面中使用 `gh-repo-card-container` 和 `gh-repo-card` 短代码来显示卡片式 GitHub 存储库：

```markdown
{{?{}< gh-repo-card-container >}}
  {{?{}< gh-repo-card repo="hugo-fixit/component-projects" >}}
  {{?{}< gh-repo-card repo="Lruihao/hugo-blog" >}}
{{?{}< /gh-repo-card-container >}}
```

### 内容适配器

:tada: 这是一个很棒的功能！它能够根据你配置的项目数据，把仓库的 README 自动生成博客文章。

在项目文件夹中创建 `_content.gotmpl`，添加以下代码：

```go-html-template
{{- partial "adapters/projects.html" . -}}
```

目录结构如下：

```plain
content/
├── projects/
│   ├── _content.gotmpl  <-- content adapter
│   └── _index.md        <-- layout: projects
data/
└── projects.yml         <-- projects data
```

然后，打开 `hugo.toml` 文件，配置的 `projects_adapters` 选项，启用内容适配器：

```toml
[params]

[params.projects_adapters]
enable = true
only_public = true
categories = []
collections = []
ignore_list = []

[params.projects_adapters.params]
hidden_from_home_page = true
# more font matter here ...
```

### 自定义块

你可以通过 `define` 来实现这些块。

| 块名称            | 描述                     |
| :---------------- | :----------------------- |
| `projects-aside`  | 显示在项目页面的侧边栏中 |
| `projects-meta`   | 显示在项目页面的开始处   |
| `projects-footer` | 显示在项目页面的底部处   |

## 定时任务

由于采用服务端渲染，所有数据是在构建时获取的，而不会在每次访问时都请求 GitHub API。为了保持数据最新，本组件提供了 `cache-projects.yml` GitHub Action 工作流模板，用于定时预缓存项目数据到 `data/caches/projects.json`，Hugo 构建时将优先读取缓存数据，大幅减少构建时间。

### 配置定时缓存

将工作流模板复制到你的站点仓库：

```bash
cp themes/component-projects/.github/workflows/cache-projects.yml .github/workflows/cache-projects.yml
```

该工作流默认每天 UTC 00:00 自动运行，也可手动触发。它会从 `data/projects*.yml` 中提取所有仓库，通过 GitHub API 获取仓库信息和 README 内容，然后写入 `data/caches/projects.json`。

> 首次运行后 `data/caches/projects.json` 会被生成并提交到仓库，后续 Hugo 构建将直接读取缓存文件，不再逐个请求 GitHub API。提交缓存文件会自动触发你的站点部署工作流，无需额外配置。

## 故障排除

本地调试时，可以在 `hugo server` 命令后加上 `--ignoreCache` 参数以清除缓存。


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/component-projects/  

