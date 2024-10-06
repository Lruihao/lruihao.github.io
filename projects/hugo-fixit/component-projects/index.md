# A Hugo theme component with layout projects and shortcodes to display GitHub pinned card style repositories.

# component-projects

👉 [English README](https://raw.githubusercontent.com/hugo-fixit/component-projects/refs/heads/main//README.md) | 简体中文说明

一个包含有 `projects` 布局和 shortcode 的 Hugo 主题组件，用于显示 GitHub 固定卡片样式存储库。

![apple-devices-preview](https://github.com/hugo-fixit/component-projects/assets/33419593/3f75bd94-90df-4057-bee5-cbe2a61422f1)

## Demo

- &lt;https://fixit.lruihao.cn/zh-cn/components/&gt;
- &lt;https://lruihao.cn/projects/&gt;

## 要求

- [FixIt](https://github.com/hugo-fixit) v0.3.7 或更高版本

## 安装

安装方法与 [安装主题](https://fixit.lruihao.cn/documentation/installation/) 相同。有几种安装方法，请选择一种。

### 安装为 Hugo 模块

首先确保你的项目本身是一个 [Hugo 模块](https://gohugo.io/hugo-modules/use-modules/#initialize-a-new-module)。

然后将此主题组件添加到你的 `hugo.toml` 配置文件中：

```toml
[module]
  [[module.imports]]
    path = &#34;github.com/hugo-fixit/FixIt&#34;
  [[module.imports]]
    path = &#34;github.com/hugo-fixit/component-projects&#34;
```

在第一次启动 Hugo 时，它将下载所需的文件。

要更新到模块的最新版本，请运行：

```bash
hugo mod get -u
hugo mod tidy
```

### 安装为 Git 子模块

将 [FixIt](https://github.com/hugo-fixit) 和此 git 存储库克隆到你的主题文件夹中，并将其添加为网站目录的子模块。

```bash
git submodule add https://github.com/hugo-fixit/FixIt.git themes/FixIt
git submodule add https://github.com/hugo-fixit/component-projects.git themes/component-projects
```

接下来编辑项目的 `hugo.toml` 并将此主题组件添加到你的主题中：

```toml
theme = [&#34;FixIt&#34;, &#34;component-projects&#34;]
```

## 注入 Partial

最后，在 `layouts/partials/custom.html` 中的 `custom-head` 或 `custom-assets` 块内注入主题组件的样式：

```go-html-template
{{- define &#34;custom-assets&#34; -}}
  {{- partial &#34;inject/component-projects.html&#34; . -}}
{{- end -}}
```

## 配置（可选）

获取仓库信息依赖 GitHub 官方 API。在开始使用之前，建议在 GitHub 上生成个人访问令牌，以防止 GitHub API 使用限制。

1. 点击跳到 GitHub [生成 token](https://github.com/settings/tokens/new)，选择名为 `public_repo` 的范围以生成个人访问令牌。
2. 配置环境变量 `HUGO_PARAMS_GHTOKEN=your-person-access-token`，详细信息请参见 [os.Getenv | Hugo](https://gohugo.io/functions/os/getenv/#examples)

## 使用

### 布局

首先，创建 `projects.yml` 文件并编辑数据：

```bash
cp themes/component-projects/projects.yml.example data/projects.yml
```

&gt; 如果你的网站是多语言的，你可以为英语创建一个 `projects.en.yml` 文件，为中文创建一个 `projects.zh-cn.yml` 文件。

接下来，使用 `projects` 布局创建一个新页面：

```bash
hugo new projects/_index.md
```

编辑新页面的标题和内容：

```yaml
---
title: My Projects
titleIcon: fa-solid fa-laptop-code
subtitle: &lt;https://github.com/Lruihao&gt;
sectionSlot: Some text to display in the section slot which is above the related articles list.
layout: projects
---

Some text to display at the start of the page.
```

### Shortcodes

在任何页面中使用 `gh-repo-card-container` 和 `gh-repo-card` 短代码来显示卡片式 GitHub 存储库：

```markdown
{{?{}&lt; gh-repo-card-container &gt;}}
  {{?{}&lt; gh-repo-card repo=&#34;hugo-fixit/component-projects&#34; &gt;}}
  {{?{}&lt; gh-repo-card repo=&#34;Lruihao/hugo-blog&#34; &gt;}}
{{?{}&lt; /gh-repo-card-container &gt;}}
```

### 内容适配器

:tada: 这是一个很棒的功能！它能够根据你配置的项目数据，把仓库的 README 自动生成博客文章。

在项目文件夹中创建 `_content.gotmpl`，添加以下代码：

```go-html-template
{{- partial &#34;adapters/projects.html&#34; . -}}
```

目录结构如下：

```plain
content/
├── projects/
│   ├── _content.gotmpl  &lt;-- content adapter
│   └── _index.md        &lt;-- layout: projects
data/
└── projects.yml         &lt;-- projects data
```

然后，打开 `hugo.toml` 文件，配置的 `projectsAdapters` 选项，启用内容适配器：

```toml
[params]
  [params.projectsAdapters]
    enable = true
    onlyPublic = true
    categories = []
    collections = []
    ignoreList = []
```

### 自定义块

你可以通过 `define` 来实现这些块。

| 块名称            | 描述                     |
| :---------------- | :----------------------- |
| `projects-aside`  | 显示在项目页面的侧边栏中 |
| `projects-meta`   | 显示在项目页面的开始处   |
| `projects-footer` | 显示在项目页面的底部处   |

## 定时任务

由于采用服务端渲染，所有数据是在构建时获取的，而不会在每次访问时都请求 GitHub API。因此，我们可以使用定时任务来更新数据，从而保持其最新状态。

### 部署到 GitHub Pages

如果你的网站托管在 GitHub Pages 上，你可以使用 GitHub Actions 自动部署。

```yaml
name: Hugo build and deploy
on:
  schedule:
    # Rebuid the site every day at 00:00 UTC to update the projects data
    - cron: &#39;0 0 * * *&#39;
  push:
    branches: [ main ]
  workflow_dispatch:
jobs:
  # Your build and deploy jobs here
```

### 部署到 Vercel

如果你的网站托管在 Vercel 上，你可以使用 Vercel 的 [Deploy Hooks](https://vercel.com/docs/deployments/deploy-hooks#creating-&amp;-triggering-deploy-hooks) 功能配合 GitHub Actions 自动部署。

```yaml
name: Vercel deploy hook
on:
  schedule:
    # Rebuid the site every day at 00:00 UTC to update the projects data
    - cron: &#39;0 0 * * *&#39;
jobs:
  Vercel-Deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Vercel deploy hook
        run: |
          curl -X POST ${{ secrets.VERCEL_DEPLOY_HOOK }}
```

在 Vercel 的项目设置中，创建一个部署钩子，并在 GitHub 项目的 Secrets 中添加 `VERCEL_DEPLOY_HOOK` 变量。

## 故障排除

本地调试时，可以在 `hugo server` 命令后加上 `--ignoreCache` 参数以清除缓存。


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/component-projects/  

