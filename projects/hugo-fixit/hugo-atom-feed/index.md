# Hugo theme component for ATOM feed custom Output Format.

# Hugo ATOM Feed

中文 | [English](https://raw.githubusercontent.com/hugo-fixit/hugo-atom-feed/refs/heads/main/README.en.md)

> Hugo 主题组件，用于自定义 ATOM feed 输出格式。

该组件为您的站点启用 ATOM feeds。

## 安装组件

安装方法与[安装主题](https://fixit.lruihao.cn/documentation/installation/)相同。有几种安装方式，选择一种，例如通过 Hugo Modules 安装：

```diff
[module]

[[module.imports]]
path = "github.com/hugo-fixit/FixIt"

+ [[module.imports]]
+ path = "github.com/hugo-fixit/hugo-atom-feed"
```

## 配置

将 "atom" 添加到您希望创建 ATOM feeds 的所有页面类型中：

```toml
[outputs]
# <baseURL>/atom.xml
home = ["html", "rss", "atom"]
# <baseURL>/posts/atom.xml 等
section = ["html", "rss", "atom"]
# <baseURL>/tags/foo/atom.xml 等
term = ["html", "rss", "atom"]
```

如果您的站点使用多个主题组件，则需要合并所有主题组件的 `outputs` 配置。例如，如果您的站点同时使用 `FixIt` 和 `hugo-atom-feed` 主题组件，则需要合并两个主题组件的 `outputs` 配置：

```toml
[outputs]
_merge = "shallow"
home = ["html", "rss", "atom", "archives", "offline", "readme", "baidu_urls", "search"]
page = ["html", "markdown"]
section = ["html", "rss", "atom"]
taxonomy = ["html"]
term = ["html", "rss", "atom"]
```

### 参数

您可以在站点配置文件中设置以下参数：

```toml
[params]

# 全局 ATOM feed 配置
[params.feed]
# feed 中包含的文章数量。如果设置为 -1，则包含所有文章。
limit = 10
# 是否在 feed 中显示全文。
fullText = true

# 分类页面配置（分类中的所有页面）
[params.section]

# 分类页面的 ATOM feed 配置
[params.section.feed]
# feed 中包含的文章数量。如果设置为 -1，则包含所有文章。
limit = -1
# 是否在 feed 中显示全文。
fullText = false

# 标签列表（分类或标签）页面配置
[params.list]

# 标签列表的 ATOM feed 配置
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
title: "Hello World"
date: 2024-08-24T16:06:33+08:00
hiddenFromFeed: true
feed:
  # feed.limit 仅在分类或标签页面（_index.md）中有效。
  limit: 10
  fullText: true
---
```


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/hugo-atom-feed/  

