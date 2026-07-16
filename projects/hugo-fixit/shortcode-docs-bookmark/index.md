# 🔖 Embed bookmark of FixIt Docs.

# fixit-docs-bookmark

🔖 Embed bookmark of FixIt Docs.

![preview](https://lruihao.cn/posts/fixit-docs-bookmark/images/featured-image.webp)

## Requirements

- v2 requires FixIt v1.x
- v1 requires FixIt v0.4.x

## Install Component

The installation method is the same as [installing a theme](https://fixit.lruihao.cn/docs/installation/). There are several ways to install, choose one, for example, install through Hugo Modules:

```diff
[module]
  [[module.imports]]
    path = "github.com/hugo-fixit/FixIt"
+ [[module.imports]]
+   path = "github.com/hugo-fixit/shortcode-docs-bookmark/v2"
```

## Configuration

In order to Inject the partial `fixit-docs-bookmark.html` into the `custom-head` through the [custom block](https://fixit.lruihao.cn/references/blocks/) opened by the FixIt theme in the `layouts/_partials/custom.html` file, you need to fill in the following necessary configurations:

```toml
[params]
  [params.custom_partials]
    # ... other partials
    head = [ "inject/fixit-docs-bookmark.html" ]
    # ... other partials
```

## Use Shortcode

Here is an example of usage:

```markdown
{{?{}< fixit-docs-bookmark >}}
```


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/shortcode-docs-bookmark/  

