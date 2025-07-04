# Mobile devtools component powered by vConsole and eruda.

# cmpt-mdevtools

Mobile devtools component powered by vConsole and eruda.

## Requirements

- [FixIt](https://github.com/hugo-fixit/FixIt) v0.4.0 or later.
- [eruda](https://github.com/liriliri/eruda)
- [vConsole](https://github.com/Tencent/vConsole)

## Install Component

The installation method is the same as [installing a theme](https://fixit.lruihao.cn/documentation/installation/). There are several ways to install, choose one, for example, install through Hugo Modules:

```diff
[module]
  [[module.imports]]
    path = "github.com/hugo-fixit/FixIt"
+ [[module.imports]]
+   path = "github.com/hugo-fixit/cmpt-mdevtools"
```

## Configuration

```toml
# Mobile Devtools config
[params.mDevtools]
  enable = false
  # "eruda", "vConsole" supported
  type = "eruda"
```

## Inject Partial

In order to Inject the partial `cmpt-mdevtools.html` into the `custom-assets` through the [custom block](https://fixit.lruihao.cn/references/blocks/) opened by the FixIt theme in the `layouts/_partials/custom.html` file, you need to fill in the following necessary configurations:

```toml
[params]
  [params.customPartials]
    # ... other partials
    head = [ "inject/cmpt-mdevtools.html" ]
    # ... other partials
```

## References

- [Develop Theme Components | FixIt](https://fixit.lruihao.cn/contributing/components/)
- [How to Develop a Hugo Theme Component | FixIt](https://fixit.lruihao.cn/components/dev-component/)


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/cmpt-mdevtools/  

