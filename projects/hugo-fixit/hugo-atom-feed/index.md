# [WIP] Hugo Theme Component for ATOM Feed Custom Output Format.

# {component-xxx}

TODO description here if needed

## Demo

TODO demo here if needed

## Requirements

- FixIt v0.3.9 or later.

## Install Component

The installation method is the same as [installing a theme](https://fixit.lruihao.cn/documentation/installation/). There are several ways to install, choose one, for example, install through Hugo Modules:

```diff
[module]
  [[module.imports]]
    path = &#34;github.com/hugo-fixit/FixIt&#34;
&#43; [[module.imports]]
&#43;   path = &#34;github.com/hugo-fixit/{component-xxx}&#34;
```

## Configuration

TODO configuration here if needed

## Inject Partial

Inject the `{component-xxx}.html` into the `custom-assets` through the custom block opened by the FixIt theme in the `layouts/partials/custom.html` file:

```go-html-template
{{- define &#34;custom-assets&#34; -}}
  {{- partial &#34;inject/{component-xxx}.html&#34; . -}}
{{- end -}}
```

## Use Shortcode

Here is an example of usage:

```markdown
{{?{}&lt; shortcode-xxx &gt;}}
```

## References

- [Develop Theme Components | FixIt](https://fixit.lruihao.cn/contributing/components/)
- [How to Develop a Hugo Theme Component | FixIt](https://fixit.lruihao.cn/components/dev-component/)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/hugo-fixit/hugo-atom-feed/  

