# 给你的 Markdown 挑挑刺


会写 Markdown 的人很多，但写得好 Markdown 的人却很少。有没有什么工具能充当「秘书」，检查文件中的 Markdown 语法和风格，并且提出解决方案、自动修复问题，甚至自动补齐中英文之间的「盘古之白」呢？本文介绍的 Markdown 语法检查器就能做到。

<!--more-->

## 引言

**会写** Markdown 的人很多，但**写得好** Markdown 的人却很少。这一方面是 Markdown 生态系统自身的问题：[语法变种和实现方式](https://www.w3.org/community/markdown/wiki/MarkdownImplementations) 五花八门，互不兼容甚至相互矛盾。

另一方面，也鲜有人愿意花时间去仔细阅读 Markdown 的技术规范；大多数人都只是读了一两篇「速成」，就自我批准出师了，对于一些细节问题并未关注；如果在写作中遇到，也是凭想象和直觉随意判断。

由此，就产生了大量语法天马行空、版面张牙舞爪，让读者和排版软件都困惑不已的 Markdown 文件。

既然 JavaScript 有 ESLint，Python 有 PyLint，是不是 Markdown 也有 markdownlint 呢？答案是肯定的！

## 示例

本博客源码已引入 markdownlint 规范，可下载本博客源码查看配置。

{{< link href="http://github.com/Lruihao/hugo-blog" content="Lruihao/hugo-blog" card=true >}}

## 引入 markdownlint

markdownlint 是一个 Markdown 语法检查工具，它可以检查 Markdown 文件中的语法错误，以及一些不规范的写法，让 Markdown 干净又卫生。

markdownlint 有两个版本，分别是 [Mark Harrison](https://github.com/mivok) 基于 Ruby 的 [原版](https://github.com/markdownlint/markdownlint) 和 [David Anson](https://github.com/DavidAnson) 基于 Node.js 的 [移植版](https://github.com/DavidAnson/markdownlint)。Node.js 版在人气和活跃程度上后来居上，本文也以 Node.js 版为例。

markdownlint 可以在多个场景下使用，包括：

- [在线版](https://dlaa.me/markdownlint/)
- [VSCode 扩展](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli) 和 [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2)

本文主要的目的是介绍 markdownlint-cli2 的使用，因为它可以在项目中集成，方便团队协作。

### markdownlint cli 历史

根据 David 的博客[^1]，在大约 2015 年左右 [Igor Shubovych](https://github.com/igorshubovych) 和他探讨了开发 CLI 工具的想法，当时，David 还没做好准备，所以 Igor 独自开发了 [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli) 这个 CLI 工具。

经过两年的发展，越来越多的人开始使用 markdownlint-cli，于是 David 开始给 markdownlint-cli 项目贡献代码，添加新功能，并在之后三年里成为了主要的维护人员。直到 2020 年，David 觉得在别人的项目中，很难改变一些事情（可能涉及向后兼容性的问题），因此他重新建立了一个名叫 [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) 的项目，在 markdownlint-cli 的基础上进行了改进，使其具有更快的执行速度、更灵活的配置和更少的依赖等优点。

目前，这两个工具仍然随着 markdownlint 的更新而更新。如果已经在使用 markdownlint-cli 的旧项目，可以继续使用它，以避免出现未知的问题。而对于新引入的项目，可以考虑使用更强大的 markdownlint-cli2。

### 安装 markdownlint-cli2

```bash
npm install markdownlint-cli2 --save-dev
```

配置快捷命令：

```json
{
  "scripts": {
    "lint:md": "markdownlint-cli2 \"content/**/*.md\"",
    "fix:md": "npm run lint:md -- --fix"
  }
}
```

安装 `markdownlint-rule-search-replace` 插件[^2]：

```bash
npm install markdownlint-rule-search-replace --save-dev
```

在项目根目录下创建 `.markdownlint.jsonc` 文件，配置规则：

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

在项目根目录下再创建 `.markdownlint-cli2.jsonc` 文件，配置规则：

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

### 安装 lint-staged

```bash
npm install lint-staged --save-dev
```

配置 `.lintstagedrc.json`：

```json
{
  "content/**/*.md": "markdownlint-cli2 --fix"
}
```

### 安装 husky

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

## 引入 AutoCorrect

### 盘古之白

在很多中文社区，中英文之间要手动加空格，俗称「盘古之白」，都是不成文的风格要求。这项要求是否合理、又该如何满足，是很有价值的话题，但超出了本文的讨论范围[^3]。

这里，只简单概括通说：中英文之间加入空隙，是为了实现视觉上的区隔，更加美观和易读。理想情况下，这种「空隙」应当由排版引擎自动加入，宽度宜为 1/4 个全角空格（em）。但由于数字排版环境复杂多变，在大多数时候（包括最常见的网页环境）不能指望排版引擎有这种能力，因此只能退而求其次，手动插入一个半角空格（因其宽度**通常**接近于 1/4 em），达到类似效果。

如果想要在中英文之间手动加空格，有什么自动检查和补全的方法吗？

答案是当然有，而且选择也不止一个。

### pangu.js

其中，最著名的可能是 [pangu.js](https://github.com/vinta/pangu.js/) 项目。如果你用过一个叫做「[为什么你们就是不能加个空格呢？](https://chrome.google.com/webstore/detail/為什麼你們就是不能加個空格呢？/paphcfdffjnbcgkokihcdjliihicmbpd?hl=zh-CN)」的浏览器插件，那你也就用过 pangu.js —— 它正是出自同一位作者之手、以 pangu.js 为底层支撑的。Hugo FixIt 主题也内置了 pangu.js 以自动优化博客文章内容中西混排。

### AutoCorrect

另一个选择是 [AutoCorrect](https://github.com/huacnlee/autocorrect)。与主要关注文本内容的 pangu.js 相比，AutoCorrect 出生于 Ruby 语言的中文社区，因此从一开始就考虑到了编程代码中的中英混排场景（可以参见该项目的 [测试文件](https://github.com/huacnlee/autocorrect/tree/main/tests/fixtures)），通用性更强。

pangu.js 和 AutoCorrect 的对比：

| 项目        | 在线版                                   | VSCode 扩展                       | 命令行工具 |
| ----------- | ---------------------------------------- | --------------------------------- | ---------- |
| pangu.js    | ❌                                       | ❌                                | ✅         |
| AutoCorrect | [AutoCorrect Editor][autocorrect-editor] | [AutoCorrect][autocorrect-vscode] | ✅         |

<!-- link reference definition -->
[autocorrect-editor]: <https://huacnlee.github.io/autocorrect/editor>
[autocorrect-vscode]: <https://marketplace.visualstudio.com/items?itemName=huacnlee.autocorrect>

- pangu.js 没有官方 VSCode 插件，使用较多的是 xlthu 开发的 [Pangu-Markdown](https://marketplace.visualstudio.com/items?itemName=xlthu.Pangu-Markdown) 第三方移植版
- pangu.js 的命令行工具受限于 Node.js，需要通过 npm 安装：`npm i pangu`
- AutoCorrect 的命令行工具则可独立安装，同时也有 Rust、Node.js 等更多[语言版本](https://github.com/huacnlee/autocorrect#use-for-programming)

我在博客、VSCode、浏览器插件中都使用了 pangu.js，长期以来，就会发现很多问题，它的便捷同时也带来了“暴力”，处理规则不可控，这一直让我很头疼，所以本文尝试使用 AutoCorrect 替代 pangu.js。事实上，AutoCorrect 的效果确实更好。

### Use AutoCorrect in NPM

安装 `autocorrect-node`：

```bash
npm install autocorrect-node --save-dev
```

修改快捷命令：

```json
{
  "scripts": {
    "fix:md": "autocorrect content --fix && markdownlint-cli2 \"content/**/*.md\" --fix",
    "lint:md": "autocorrect content --lint && markdownlint-cli2 \"content/**/*.md\""
  }
}
```

修改 `.lintstagedrc.json`：

```json
{
  "content/**/*.md": [
    "autocorrect --fix",
    "markdownlint-cli2 --fix"
  ]
}
```

新增 `.autocorrectignore`：

```bash
# AutoCorrect Link ignore rules.
# https://github.com/huacnlee/autocorrect
#
# Like `.gitignore`, this file to tell AutoCorrect which files need to check, some need to ignore.
node_modules/
build/
public/
resources/
```

执行 `npx autocorrect init` 拉取默认 `.autocorrectrc` 配置，然后添加一条规则：

```yml
textRules:
  # sorted by `LC_ALL=C sort` command
  一二三,四五六.七八九: 0
```

## 总结

本文主要介绍了 markdownlint-cli2 和 AutoCorrect 两个工具，前者用于检查 Markdown 语法和风格，后者用于自动补齐中英文之间的「盘古之白」。这两个工具都可以在项目中集成，方便统一规范、团队协作。

<!-- footnote reference definition -->
[^1]: [If one is good, two must be better [markdownlint-cli2 is a new kind of command-line interface for markdownlint]](https://dlaa.me/blog/post/markdownlintcli2)
[^2]: [markdownlint-rule-search-replace](https://github.com/OnkarRuikar/markdownlint-rule-search-replace) 用于搜索和替换模式的自定义 markdownlint 规则
[^3]: 如果有进一步兴趣，请阅读知乎讨论「[中英文混排时中文与英文之间是否要有空格？](https://www.zhihu.com/question/19587406)」，W3C 标准草案《中文排版需求》[§3.2.2](https://www.w3.org/TR/clreq/#mixed_text_composition_in_horizontal_writing_mode)，以及收听《字谈字畅》播客 [第 14 期](https://www.thetype.com/typechat/ep-014/)。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/markdownlint/  

