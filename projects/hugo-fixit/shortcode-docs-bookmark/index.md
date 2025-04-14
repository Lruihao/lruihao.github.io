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
    path = "github.com/hugo-fixit/FixIt"
+ [[module.imports]]
+   path = "github.com/hugo-fixit/shortcode-docs-bookmark"
```

## Inject Partial

Inject the `fixit-docs-bookmark.html` into the `custom-head` through the custom block opened by the FixIt theme in the `layouts/partials/custom.html` file:

```go-html-template
{{- define "custom-head" -}}
  {{- partial "inject/fixit-docs-bookmark.html" . -}}
{{- end -}}
```

## Use Shortcode

Here is an example of usage:

```markdown
{{?{}< fixit-docs-bookmark >}}
```


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/shortcode-docs-bookmark/  

