# 🔖 Embed bookmark of FixIt Docs.

# fixit-docs-bookmark

🔖 Embed bookmark of FixIt Docs.

![preview](https://lruihao.cn/posts/fixit-docs-bookmark/images/featured-image.webp)

## Requirements

- FixIt v0.3.9 or later.

## Install Component

The installation method is the same as [installing a theme](https://fixit.lruihao.cn/documentation/installation/). There are several ways to install, choose one, for example, install through Hugo Modules:

```diff
[module]
  [[module.imports]]
    path = &#34;github.com/hugo-fixit/FixIt&#34;
&#43; [[module.imports]]
&#43;   path = &#34;github.com/hugo-fixit/shortcode-docs-bookmark&#34;
```

## Inject Partial

Inject the `fixit-docs-bookmark.html` into the `custom-head` through the custom block opened by the FixIt theme in the `layouts/partials/custom.html` file:

```go-html-template
{{- define &#34;custom-head&#34; -}}
  {{- partial &#34;inject/fixit-docs-bookmark.html&#34; . -}}
{{- end -}}
```

## Use Shortcode

Here is an example of usage:

```markdown
{{?{}&lt; fixit-docs-bookmark &gt;}}
```


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/shortcode-docs-bookmark/  

