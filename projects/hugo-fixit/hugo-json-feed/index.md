# Hugo theme component for JSON feed custom Output Format.

# Hugo JSON Feed

中文 | [English](https://raw.githubusercontent.com/hugo-fixit/hugo-json-feed/refs/heads/main/README.en.md)

&gt; Hugo 主题组件，用于自定义 JSON feed 输出格式。

该组件为您的站点启用 JSON feeds。

## 演示

- [主页 Feed](https://lruihao.cn/feed.json)
- [分类 Feed](https://lruihao.cn/posts/feed.json)
- [标签 Feed](https://lruihao.cn/collections/project/feed.json)

## 安装组件

安装方法与[安装主题](https://fixit.lruihao.cn/documentation/installation/)相同。有几种安装方式，选择一种，例如通过 Hugo Modules 安装：

```diff
[module]
  [[module.imports]]
    path = &#34;github.com/hugo-fixit/FixIt&#34;
&#43; [[module.imports]]
&#43;   path = &#34;github.com/hugo-fixit/hugo-json-feed&#34;
```

## 配置

将 &#34;jsonfeed&#34; 添加到您希望创建 JSON feeds 的所有页面类型中：

```toml
[outputs]
  # &lt;baseURL&gt;/feed.json
  home = [&#34;html&#34;, &#34;rss&#34;, &#34;jsonfeed&#34;]
  # &lt;baseURL&gt;/posts/feed.json 等
  section = [&#34;html&#34;, &#34;rss&#34;, &#34;jsonfeed&#34;]
  # &lt;baseURL&gt;/tags/foo/feed.json 等
  term = [&#34;html&#34;, &#34;rss&#34;, &#34;jsonfeed&#34;]
```

如果您的站点使用多个主题组件，则需要合并所有主题组件的 `outputs` 配置。例如，如果您的站点同时使用 `FixIt` 和 `hugo-json-feed` 主题组件，则需要合并两个主题组件的 `outputs` 配置：

```toml
[outputs]
  _merge = &#34;shallow&#34;
  home = [&#34;html&#34;, &#34;rss&#34;, &#34;jsonfeed&#34;, &#34;archives&#34;, &#34;offline&#34;, &#34;readme&#34;, &#34;baidu_urls&#34;, &#34;search&#34;]
  page = [&#34;html&#34;, &#34;markdown&#34;]
  section = [&#34;html&#34;, &#34;rss&#34;, &#34;jsonfeed&#34;]
  taxonomy = [&#34;html&#34;]
  term = [&#34;html&#34;, &#34;rss&#34;, &#34;jsonfeed&#34;]
```

### 参数

您可以在站点配置文件中设置以下参数：

```toml
[params]
  # 全局 JSON feed 配置
  [params.feed]
    # feed 中包含的文章数量。如果设置为 -1，则包含所有文章。
    limit = 10
    # 是否在 feed 中显示全文。
    fullText = true

  # 分类页面配置（分类中的所有页面）
  [params.section]
    # 分类页面的 JSON feed 配置
    [params.section.feed]
      # feed 中包含的文章数量。如果设置为 -1，则包含所有文章。
      limit = -1
      # 是否在 feed 中显示全文。
      fullText = false

  # 标签列表（分类或标签）页面配置
  [params.list]
    # 标签列表的 JSON feed 配置
    [params.list.feed]
      # feed 中包含的文章数量。如果设置为 -1，则包含所有文章。
      limit = -1
      # 是否在 feed 中显示全文。
      fullText = false
```

### Front matter

您可以在内容文件的 front matter 中设置以下参数：

```yaml
---
title: &#34;Hello World&#34;
date: 2024-08-24T16:06:33&#43;08:00
hiddenFromFeed: true
feed:
  # feed.limit 仅在分类或标签页面（_index.md）中有效。
  limit: 10
  fullText: true
---
```


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/hugo-json-feed/  

