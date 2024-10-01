# Hugo Theme Component for JSON Feed Custom Output Format.

# Hugo JSON Feed

&gt; Hugo theme component for JSON feed custom Output Format.

This component enables JSON feeds for your site.

## Demo

- [Home Feed](https://lruihao.cn/feed.json)
- [Section Feed](https://lruihao.cn/posts/feed.json)
- [Term Feed](https://lruihao.cn/collections/project/feed.json)

## Install Component

The installation method is the same as [installing a theme](https://fixit.lruihao.cn/documentation/installation/). There are several ways to install, choose one, for example, install through Hugo Modules:

```diff
[module]
  [[module.imports]]
    path = &#34;github.com/hugo-fixit/FixIt&#34;
&#43; [[module.imports]]
&#43;   path = &#34;github.com/hugo-fixit/hugo-json-feed&#34;
```

## Configuration

Add &#34;jsonfeed&#34; to all the Page Kinds for which you want to create JSON feeds:

```toml
[outputs]
  # &lt;baseURL&gt;/feed.json
  home = [&#34;html&#34;, &#34;rss&#34;, &#34;jsonfeed&#34;]
  # &lt;baseURL&gt;/posts/feed.json etc.
  section = [&#34;html&#34;, &#34;rss&#34;, &#34;jsonfeed&#34;]
  # &lt;baseURL&gt;/tags/foo/feed.json etc.
  term = [&#34;html&#34;, &#34;rss&#34;, &#34;jsonfeed&#34;]
```

If your site uses multiple theme components, you need to merge the `outputs` configuration of all theme components. For example, if your site uses both the `FixIt` and `hugo-json-feed` theme components, you need to merge the `outputs` configuration of the two theme components:

```toml
[outputs]
  _merge = &#34;shallow&#34;
  home = [&#34;html&#34;, &#34;rss&#34;, &#34;jsonfeed&#34;, &#34;archives&#34;, &#34;offline&#34;, &#34;readme&#34;, &#34;baidu_urls&#34;, &#34;search&#34;]
  page = [&#34;html&#34;, &#34;markdown&#34;]
  section = [&#34;html&#34;, &#34;rss&#34;, &#34;jsonfeed&#34;]
  taxonomy = [&#34;html&#34;]
  term = [&#34;html&#34;, &#34;rss&#34;, &#34;jsonfeed&#34;]
```

### Parameters

You can set the following parameters in your site configuration file:

```toml
[params]
  # Global Feed config for JSON feed.
  [params.feed]
    # The number of posts to include in the feed. If set to -1, all posts.
    limit = 10
    # whether to show the full text content in feed.
    fullText = true

  # Section page config (all pages in section)
  [params.section]
    # Section feed config for JSON feed.
    [params.section.feed]
      # The number of posts to include in the feed. If set to -1, all posts.
      limit = -1
      # whether to show the full text content in feed.
      fullText = false

  # Term list (category or tag) page config
  [params.list]
    # Term list feed config for JSON feed.
    [params.list.feed]
      # The number of posts to include in the feed. If set to -1, all posts.
      limit = -1
      # whether to show the full text content in feed.
      fullText = false
```

### Front Matter

You can set the following parameters in the front matter of the content file:

```yaml
---
title: &#34;Hello World&#34;
date: 2024-08-24T16:06:33&#43;08:00
hiddenFromFeed: true
feed:
  # feed.limit only invalid in section or term page(_index.md).
  limit: 10
  fullText: true
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/hugo-fixit/hugo-json-feed/  

