# A Hugo theme component with caniuse shortcode.

# Hugo shortcode for CanIUse

在 Hugo 中使用 `shortcode` 方式内嵌 [CanIUse](https://caniuse.com/) 到你的文章中。

![caniuse example](https://raw.githubusercontent.com/hugo-fixit/shortcode-caniuse/refs/heads/main./preview/caniuse.webp)

![baseline example](https://raw.githubusercontent.com/hugo-fixit/shortcode-caniuse/refs/heads/main./preview/baseline.png)

## 依赖

FixIt 主题 `v0.4.0` 及以上版本。

## 安装组件

和 [安装主题](https://fixit.lruihao.cn/zh-cn/documentation/installation/) 一样，安装方式有多种，选择其一即可，例如通过 Hugo Modules 安装：

```toml
[module]

[[module.imports]]
path = "github.com/hugo-fixit/FixIt"

[[module.imports]]
path = "github.com/hugo-fixit/shortcode-caniuse"
```

## 配置

为了通过 FixIt 主题开放的 [自定义块](https://fixit.lruihao.cn/references/blocks/) 将 `shortcode-caniuse.html` 注入到 `custom-assets` 中，你需要填写以下必要配置：

```toml
[params]

[params.customPartials]
# ... other partials
assets = [ "inject/shortcode-caniuse.html" ]
# ... other partials
```

组件配置：

```toml
[params]

# CanIUse Embed Element Configuration
# See: https://github.com/Lruihao/caniuse-embed-element
[params.caniuse_embed]
# whether to show the feature support baseline, default is false
baseline = false
# show the past N versions that match the feature, range is 0 - 5, default is 2
past = 2
# show the future N versions that match the feature, range is 0 - 3, default is 1
future = 1
# the origin of the caniuse embed data source, default is "https://caniuse.lruihao.cn"
origin = "https://caniuse.lruihao.cn"
# loading strategy for the iframe (eager or lazy), default is lazy
loading = "lazy"
# only production environment effective
# e.g. https://unpkg.com/@cell-x/caniuse-embed-element/dist/caniuse-embed-element.iife.js
cdn = ""
```

## 使用 Shortcode

`caniuse` shortcode 有以下命名参数：

- **feature** _[必需]_（第一个位置参数）特性名称
- **baseline** _[可选]_（第二个位置参数）是否显示功能支持基线，默认为 `false`
- **past** _[可选]_（第三个位置参数）显示过去 N 个版本，范围是 `0 - 5`，默认为 `2`
- **future** _[可选]_（第四个位置参数）显示未来 N 个版本，范围是 `0 - 3`，默认为 `1`
- **origin** _[可选]_（第五个位置参数）caniuse embed 数据源，例如：`https://caniuse-embed-x.vercel.app`
- **loading** _[可选]_（第六个位置参数）iframe 的加载策略（`eager` 或 `lazy`），默认为 `lazy`

> 点击 `caniuse.com` 网站上功能左边 `#` 号，URL 中的 `pathname` 即为 `feature` 参数。

这是一个用法示例：

```markdown
{{?{}< caniuse feature="flexbox" >}}
或者
{{?{}< caniuse "flexbox" >}}
```

## 参考

- [The CanIUse Embed — Add support tables to your site](https://caniuse.lruihao.cn/)
- [Can I use… Support tables for HTML5, CSS3, etc](https://caniuse.com/)

## 致谢

- [Lruihao/caniuse-embed-element](https://github.com/Lruihao/caniuse-embed-element)
- [pengzhanbo/caniuse-embed](https://github.com/pengzhanbo/caniuse-embed)
- [mdn-browser-compat-data](https://github.com/mdn/browser-compat-data)
- [Fyrd/caniuse](https://github.com/Fyrd/caniuse)


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/shortcode-caniuse/  

