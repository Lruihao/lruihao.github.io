# Command line tool for generating a changelog from git tags and commit history

# auto-changelog-plus

中文 | [English](https://raw.githubusercontent.com/Lruihao/auto-changelog-plus/refs/heads/main./README.en.md)

从 git 提交历史自动生成 changelog 的命令行工具。

> 基于 [auto-changelog](https://github.com/CookPete/auto-changelog) 和 [约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 规范。

[![npm version](https://img.shields.io/npm/v/auto-changelog-plus.svg)](https://www.npmjs.com/package/auto-changelog-plus)

## 📦 安装

```bash
npm install -g auto-changelog-plus
```

## 🚀 用法

在 git 仓库根目录运行 `auto-changelog-plus` 或者 `acp`。工具会在后台运行 `git log` 来解析提交历史。

```bash
Usage: auto-changelog-plus [options]

Options:
  -o, --output [file]                 # output file, default: CHANGELOG.md
  -c, --config [file]                 # config file location, default: .auto-changelog
  -t, --template [template]           # specify template to use [compact, keepachangelog, json], default: compact
  -r, --remote [remote]               # specify git remote to use for links, default: origin
  -p, --package                       # use version from package.json as latest release
  -v, --latest-version [version]      # use specified version as latest release
  -u, --unreleased                    # include section for unreleased changes
  -l, --commit-limit [count]          # number of commits to display per release, default: 3
  -b, --backfill-limit [count]        # number of commits to backfill empty releases with, default: 3
      --commit-url [url]              # override url for commits, use {id} for commit id
      --issue-url [url]               # override url for issues, use {id} for issue id
      --merge-url [url]               # override url for merges, use {id} for merge id
      --compare-url [url]             # override url for compares, use {from} and {to} for tags
      --issue-pattern [regex]         # override regex pattern for issues in commit messages
      --breaking-pattern [regex]      # regex pattern for breaking change commits
      --merge-pattern [regex]         # add custom regex pattern for merge commits
      --commit-pattern [regex]        # pattern to include when parsing commits
      --ignore-commit-pattern [regex] # pattern to ignore when parsing commits
      --tag-pattern [regex]           # override regex pattern for version tags
      --tag-prefix [prefix]           # prefix used in version tags, default: v
      --starting-version [tag]        # specify earliest version to include in changelog
      --starting-date [yyyy-mm-dd]    # specify earliest date to include in changelog
      --ending-version [tag]          # specify latest version to include in changelog
      --sort-commits [property]       # sort commits by property [relevance, date, date-desc, subject, subject-desc], default: relevance
      --release-summary               # display tagged commit message body as release summary
      --unreleased-only               # only output unreleased changes
      --hide-empty-releases           # hide empty releases
      --hide-credit                   # hide auto-changelog credit
      --handlebars-setup [file]       # handlebars setup file
      --append-git-log [string]       # string to append to git log command
      --append-git-tag [string]       # string to append to git tag command
      --prepend                       # prepend changelog to output file
      --stdout                        # output changelog to stdout
  -V, --version                       # output the version number
  -h, --help                          # output usage information
```

以下是一些常见的使用示例：

```bash
# 在当前目录写入日志到 CHANGELOG.md
auto-changelog-plus

# 使用 keepachangelog 模板写入日志到 HISTORY.md
auto-changelog-plus --output HISTORY.md --template keepachangelog

# 禁用提交限制，渲染每个发布的所有提交
auto-changelog-plus --commit-limit false
```

> 执行 `auto-changelog-plus -h` 获取帮助或者参考 [auto-changelog](https://github.com/cookpete/auto-changelog) 文档。

## 📝 约定式提交

基于 [约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 规范，支持以下类型的提交：

- `feat:` 新功能
- `fix:` 修复问题
- `perf:` 性能优化
- `refactor:` 代码重构
- `docs:` 文档变更
- `test:` 测试相关
- `style:` 代码格式调整
- `chore:` 构建过程或辅助工具的变动
- `build:` 构建系统变动
- `ci:` 持续集成配置变动
- `revert:` 代码回滚
- 支持 scope：`feat(api):`, `fix(ui):` 等
- 支持 emoji：`:sparkles: feat:`, `✨ feat:` 等
- 支持 Breaking Changes：`feat!:`, `feat(scope)!:`, `BREAKING CHANGE:` 等格式
- 自动忽略 WIP 提交：`wip:`, `Wip:` 等临时提交不会包含在变更日志中

## ⚙️ 自动化使用

将 `auto-changelog-plus` 安装到开发依赖：

```bash
npm install auto-changelog-plus --save-dev
# 或
yarn add auto-changelog-plus --dev
# 或
pnpm add -D auto-changelog-plus
```

在你的 `package.json` 的 `version` 脚本中添加 `auto-changelog-plus -p && git add CHANGELOG.md`：

```json
{
  "name": "my-awesome-package",
  "version": "1.0.0",
  "devDependencies": {
    "auto-changelog-plus": "*"
  },
  "scripts": {
    "version": "auto-changelog-plus -p && git add CHANGELOG.md"
  }
}
```

使用 `-p` 或 `--package` 将 `package.json` 中的 `version` 用作最新发布，这样以前发布和现在之间的所有提交都成为该发布的一部分。基本上任何通常被解析为 `Unreleased` 的内容现在都会出现在 `package.json` 的 `version` 下。

现在每次运行 [npm version](https://docs.npmjs.com/cli/version) 时，changelog 将自动更新并成为版本提交的一部分。在不是 NPM 包的项目中，可以使用 `npx` 或 `pnpx` 来运行 `auto-changelog-plus`，例如：

```bash
npx auto-changelog-plus
# 或
pnpx auto-changelog-plus
```

在 GitHub Actions 中，你可以使用以下工作流来自动生成发布说明：

```yaml
name: Release for new tag

on:
  push:
    tags:
      - 'v*.*.*'
  workflow_dispatch:

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v5
        with:
          fetch-depth: 0 # Fetch all history for generating release notes

      - name: Setup Node.js
        uses: actions/setup-node@v5
        with:
          node-version: 'lts/*'

      - name: Generate release notes
        run: |
          npx auto-changelog-plus --starting-version ${{ github.ref_name }}
          sed -i '1,4d' CHANGELOG.md

      - name: GitHub Release
        uses: softprops/action-gh-release@v2
        with:
          draft: true
          body_path: CHANGELOG.md
```

## 👤 配置作者映射（可选）

在 `package.json` 中的 `auto-changelog-plus` 字段中配置 `authorMap`，可以将 git 提交的作者名称映射到 GitHub 用户名。这在生成包含 GitHub 链接的 Changelog 时非常有用。

```json
{
  "name": "my-awesome-package",
  "version": "1.0.0",
  "auto-changelog-plus": {
    "authorMap": {
      "提交作者名": "GitHub 用户名",
      "Cell": "Lruihao"
    }
  }
}
```

## 🔄 和 auto-changelog 的区别

`auto-changelog-plus` 是 `auto-changelog` 的上层封装，完全兼容 `auto-changelog` 的所有用法和配置。

主要改进：

- **优化默认模板**：更好地适配 **约定式提交** 规范
- **调整默认配置**：提供更合理的开箱即用体验
- **扩展模板功能**：提供额外的模板辅助函数

如果你正在使用 `auto-changelog`，可以直接替换为 `auto-changelog-plus`，无需修改任何配置。

## 📄 许可证

MIT


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/auto-changelog-plus/  

