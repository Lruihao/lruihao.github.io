# Mobile devtools component powered by vConsole and eruda.

# cmpt-mdevtools

Mobile devtools component powered by vConsole and eruda.

## Requirements

- [FixIt](https://github.com/hugo-fixit/FixIt) v0.3.9 or later.
- [eruda](https://github.com/liriliri/eruda)
- [vConsole](https://github.com/Tencent/vConsole)

## Install Component

The installation method is the same as [installing a theme](https://fixit.lruihao.cn/documentation/installation/). There are several ways to install, choose one, for example, install through Hugo Modules:

```diff
[module]
  [[module.imports]]
    path = &#34;github.com/hugo-fixit/FixIt&#34;
&#43; [[module.imports]]
&#43;   path = &#34;github.com/hugo-fixit/cmpt-mdevtools&#34;
```

## Configuration

```toml
# Mobile Devtools config
[params.mDevtools]
  enable = false
  # &#34;eruda&#34;, &#34;vConsole&#34; supported
  type = &#34;eruda&#34;
```

## Inject Partial

Inject the `cmpt-mdevtools.html` into the `custom-assets` through the custom block opened by the FixIt theme in the `layouts/partials/custom.html` file:

```go-html-template
{{- define &#34;custom-assets&#34; -}}
  {{- partial &#34;inject/cmpt-mdevtools.html&#34; . -}}
{{- end -}}
```

## References

- [Develop Theme Components | FixIt](https://fixit.lruihao.cn/contributing/components/)
- [How to Develop a Hugo Theme Component | FixIt](https://fixit.lruihao.cn/components/dev-component/)


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/cmpt-mdevtools/  
