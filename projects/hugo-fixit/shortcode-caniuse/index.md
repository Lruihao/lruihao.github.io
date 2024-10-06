# 一个含有 caniuse shortcode 的 Hugo 主题组件。

# Hugo shortcode for CanIUse

在 Hugo 中使用 `shortcode` 方式内嵌 [CanIUse](https://caniuse.com/) 到你的文章中。

![shortcode-caniuse-preview](https://github.com/hugo-fixit/shortcode-caniuse/assets/33419593/3722adc9-0759-4f9c-b381-7f0e6e1c101b)

## 依赖

FixIt 主题 `v0.3.9` 及以上版本。

## 安装组件

和 [安装主题](https://fixit.lruihao.cn/zh-cn/documentation/installation/) 一样，安装方式有多种，选择其一即可，例如通过 Hugo Modules 安装：

```diff {title=&#34;hugo.toml&#34;}
[module]
  [[module.imports]]
    path = &#34;github.com/hugo-fixit/FixIt&#34;
&#43; [[module.imports]]
&#43;   path = &#34;github.com/hugo-fixit/shortcode-caniuse&#34;
```

## 注入 Partial

通过 FixIt 主题开放的自定义块，在 `layouts/partials/custom.html` 文件将 `shortcode-caniuse.html` 注入到 `custom-assets` 中：

```go-html-template
{{- define &#34;custom-assets&#34; -}}
  {{- partial &#34;inject/shortcode-caniuse.html&#34; . -}}
{{- end -}}
```

## 使用 Shortcode

`caniuse` shortcode 有以下命名参数：

- **feature** _[必需]_（第一个位置参数）特性名称
- **past** _[可选]_（第二个位置参数）显示过去 N 个版本，范围是 `0 - 5`，默认为 `2`
- **future** _[可选]_（第三个位置参数）显示未来 N 个版本，范围是 `0 - 3`，默认为 `1`

&gt; 点击 `caniuse.com` 网站上功能左边 `#` 号，URL 中的 `pathname` 即为 `feature` 参数。

这是一个用法示例：

```markdown
{{?{}&lt; caniuse feature=&#34;flexbox&#34; &gt;}}
或者
{{?{}&lt; caniuse &#34;flexbox&#34; &gt;}}
```

## 参考

- [Can I use… Support tables for HTML5, CSS3, etc](https://caniuse.com/)
- [The CanIUse Embed — Add support tables to your site](https://caniuse-embed.vercel.app/)
- [贡献指南 / 开发组件](https://fixit.lruihao.cn/zh-cn/contributing/components/)

## 致谢

- [mdn-browser-compat-data](https://github.com/mdn/browser-compat-data)
- [Fyrd/caniuse](https://github.com/Fyrd/caniuse)
- [pengzhanbo/caniuse-embed](https://github.com/pengzhanbo/caniuse-embed)


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/shortcode-caniuse/  
