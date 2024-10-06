# 自动获取 GitHub README 内容添加到 Hugo 文章


在这个博客中，我经常会写一些关于开源项目的文章，而这些开源项目通常都是托管在 GitHub 上的。为了方便内容同步，我希望能够自动获取 GitHub 仓库的 README 内容，然后添加到 Hugo 文章中。这样，我就不用再手动复制粘贴 README 内容了。

&lt;!--more--&gt;

## 前言

这个愿景我想了很久了，但是用 JS 通过 GitHub API 获取 README 内容的实现方式体验并不好，所以我一直没有实现。直到最近，我发现了 Hugo v0.126.0 版本新增了一个内容适配器（Content adapters）的概念。

&gt; Create content adapters to dynamically add content when building your site.
{.blockquote-center}

也就是说，我们可以在构建 Hugo 站点时，通过自定义的适配器动态添加内容。理论可行，实践开始。

## GitHub API

首先，我们需要找到 GitHub API 获取 README 内容的接口。懒得翻文档了，直接浏览器打开 `https://api.github.com`，在 API 列表中最终找到了获取 README 内容的接口：

```http
GET /repos/{owner}/{repo}/readme HTTP/1.1
Host: api.github.com
Authorization: token {your_token}
```

有些仓库会有多种语言的 README，还需要获取指定语言的 README 内容：

```http
GET /repos/{owner}/{repo}/contents/README.{lang}.md HTTP/1.1
Host: api.github.com
Authorization: token {your_token}
```

另外，GitHub API 有访问频率限制，需要在请求头中添加 `Authorization` 字段，值为 `token {your_token}`。[^1]

## Content Adapters

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

好了，现在准备工作都做完了，剩下要做的就是实现 `adapters/projects.html` 就好了。

思路：

```timeline {animation=true}
events:
  - content: 遍历 `data/projects.yml` 中的项目数据
  - content: 通过 GitHub API 获取 README 内容
  - content: README 解析为 Markdown 格式，并处理图片链接，部分字符转义
  - content: 将 README 内容添加到 Hugo 文章中
    type: success
```

具体的源码实现可以查看 [component-projects](https://github.com/hugo-fixit/component-projects/) 主题组件。

## 实现效果

- [我的开源](/projects/)
- [Theme Components ｜ FixIt](https://fixit.lruihao.cn/components/)

&lt;!-- footnote reference definition --&gt;
[^1]: 点击跳到 GitHub [生成 token](https://github.com/settings/tokens/new)，选择名为 `public_repo` 的范围以生成个人访问令牌。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/content-adapters/  

