# 给博客类项目添加 markdownlint 语法检查


[markdownlint](https://github.com/DavidAnson/markdownlint) 是一个 Markdown 语法检查工具，它可以检查 Markdown 文件中的语法错误，以及一些不规范的写法。

<!--more-->

## markdownlint cli 历史

根据 markdownlint 作者 [David Anson](https://github.com/DavidAnson) 博客[^1]得知，大概在 2015 年左右 [Igor Shubovych](https://github.com/igorshubovych) 和他探讨了开发 CLI 工具的想法，当时作者还没做好准备，于是 Igor 独自开发了 [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli) 这个 CLI 工具，然后经过两年的发展有了越来越多的人开始使用 markdownlint-cli，于是 David 开始给 markdownlint-cli 项目贡献代码添加新功能，并在之后三年里成为了主要的维护人员，直到2020年，David 觉得在别人的项目中，很多事情不太好改变（可能向后兼容的问题），于是他自己重新建立了一个名叫 [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) 的项目，在 markdownlint-cli 的优秀之上又做了新的改进，使其拥有更快的执行速度、更灵活的配置、更少的依赖等优点。

目前两个工具都依然随着 markdownlint 的更新而更新，个人觉得旧项目如果使用的 markdownlint-cli 则无需更改以避免出现未知的问题，新引入的项目，可以考虑使用更强大的 markdownlint-cli2。

## 示例

本博客源码已引入 markdownlint-cli2，可下载本博客源码查看配置。

{{< link href="http://github.com/Lruihao/hugo-blog" content="Lruihao/hugo-blog" card=true >}}

## 安装 markdownlint-cli2

vscode 中可以直接安装 [markdownlint 扩展](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)，本文主要讲在项目中如何安装使用。

```bash
npm install markdownlint-cli2 --save-dev
```

配置快捷命令

```json
{
  "scripts": {
    "lint:md": "markdownlint-cli2 \"./content/**/*.md\"",
    "fix:md": "npm run lint:md -- --fix"
  }
}
```

安装 `markdownlint-rule-search-replace` 插件[^2]

```bash
npm install markdownlint-rule-search-replace --save-dev
```

在项目根目录下创建 `.markdownlint.jsonc` 文件，配置规则。

```json
// This file defines our configuration for Markdownlint. See
// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md
// for more details on each rule.
{
  "default": true,
  "ul-style": {
    "style": "dash"
  },
  "ul-indent": {
    "indent": 2
  },
  "no-hard-tabs": {
    "spaces_per_tab": 2
  },
  "line-length": false,
  "no-duplicate-header": {
    "allow_different_nesting": true
  },
  "single-title": {
    "front_matter_title": "^\\s*title\\s*[:=]"
  },
  "no-trailing-punctuation": {
    "punctuation": ".,;:"
  },
  // Consecutive Notes/Callouts currently don't conform with this rule
  "no-blanks-blockquote": false,
  // Force ordered numbering to catch accidental list ending from indenting
  "ol-prefix": {
    "style": "ordered"
  },
  "no-inline-html": {
    "allowed_elements": [
      "br",
      "code",
      "details",
      "div",
      "img",
      "kbd",
      "p",
      "pre",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "tr",
      "ul",
      "ol",
      "var",
      "ruby",
      "rp",
      "rt",
      "i"
    ]
  },
  "no-bare-urls": false,
  // Produces too many false positives
  "fenced-code-language": false,
  "code-block-style": {
    "style": "fenced"
  },
  "no-space-in-code": false,
  "emphasis-style": {
    "style": "underscore"
  },
  "strong-style": {
    "style": "asterisk"
  },
  // https://github.com/OnkarRuikar/markdownlint-rule-search-replace
  "search-replace": {
    "rules": [
      {
        "name": "nbsp",
        "message": "Don't use no-break spaces",
        "searchPattern": "/ /g",
        "replace": " ",
        "searchScope": "all"
      },
      {
        // zh-cn/zh-tw prefers double em-dash instead
        "name": "em-dash",
        "message": "Don't use '--'. Use em-dash (—) instead",
        "search": " -- ",
        "replace": " — ",
        "searchScope": "text"
      },
      {
        "name": "trailing-spaces",
        "message": "Avoid trailing spaces",
        "searchPattern": "/  +$/gm",
        "replace": "",
        "searchScope": "all"
      },
      {
        "name": "double-spaces",
        "message": "Avoid double spaces",
        "searchPattern": "/([^\\s>])  ([^\\s|])/g",
        "replace": "$1 $2",
        "searchScope": "text"
      },
      {
        "name": "stuck-definition",
        "message": "Character is stuck to definition description marker",
        "searchPattern": "/- :(\\w)/g",
        "replace": "- : $1",
        "searchScope": "text"
      },
      {
        "name": "localhost-links",
        "message": "Don't use localhost for links",
        "searchPattern": "/\\]\\(https?:\\/\\/localhost:\\d+\\//g",
        "replace": "](/",
        "searchScope": "text"
      },
      // zh-cn prefers rules
      {
        "name": "double-em-dash",
        "message": "Don't use '--'. Use double em-dash (——) instead",
        "search": " -- ",
        "replace": "——",
        "searchScope": "text"
      },
      {
        "name": "force-pronoun",
        "message": "Consider using '你' instead of '您'",
        "searchPattern": "/您/g",
        "searchScope": "text"
      }
    ]
  }
}
```

在项目根目录下再创建 `.markdownlint-cli2.jsonc` 文件，配置规则。

```json
{
  "config": {
    "extends": "./.markdownlint.jsonc"
  },
  "customRules": ["markdownlint-rule-search-replace"],
  "ignores": [
    "node_modules",
    ".git",
    ".github",
    "**/conflicting/**",
    "**/orphaned/**"
  ]
}
```

## 安装 lint-staged

```bash
npm install lint-staged --save-dev
```

配置 `.lintstagedrc.json`

```json
{
  "./content/**/*.md": "markdownlint-cli2 --fix"
}
```

## 安装 husky

```bash
npx husky-init && npm install
```

配置 `.husky/pre-commit`

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

这样每次提交代码时，就会自动检查并修复 content 目录下的所有 markdown 文件中的语法错误。

<!-- footnote reference definition -->
[^1]: [If one is good, two must be better [markdownlint-cli2 is a new kind of command-line interface for markdownlint]](https://dlaa.me/blog/post/markdownlintcli2)
[^2]: [markdownlint-rule-search-replace](https://github.com/OnkarRuikar/markdownlint-rule-search-replace) 用于搜索和替换模式的自定义 markdownlint 规则


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/markdownlint/  

