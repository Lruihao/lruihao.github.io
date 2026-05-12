# 🛠️ A node-based tooling for FixIt site initialization.

# FixIt CLI

[![NPM version](https://img.shields.io/npm/v/fixit-cli.svg)](https://www.npmjs.com/package/fixit-cli)

👉 中文 | [English](https://raw.githubusercontent.com/hugo-fixit/fixit-cli/refs/heads/main/README.en.md)

🛠️ 一个基于 Node.js 开发的用于 [FixIt](https://github.com/hugo-fixit/FixIt) 站点初始化的脚手架工具。

[![asciicast](https://raw.githubusercontent.com/hugo-fixit/fixit-cli/refs/heads/main/fixit-cli.gif)](https://asciinema.org/a/697494)

## 系统依赖

- [Node.js](https://nodejs.org/) (>= 18)
- [Git](https://git-scm.com/)
- [Hugo](https://gohugo.io/) 扩展版

如果你使用 [Hugo 模块](https://gohugo.io/hugo-modules/) 功能加载主题，你还需要安装 [Go](https://go.dev/dl/)。

## 使用

使用 [`pnpx`](https://pnpm.io/cli/dlx) 或者 [`npx`](https://docs.npmjs.com/cli/v11/commands/npx) 直接运行 `fixit-cli`，创建一个新的 FixIt 项目会非常方便。

例如，创建一个名为 `my-blog` 的站点：

```bash
pnpx fixit-cli create my-blog
```

当然你也可以全局安装 `fixit-cli`，然后使用 `fixit` 命令。

```bash
npm install -g fixit-cli
# 或者
pnpm add -g fixit-cli
# 或者
yarn global add fixit-cli
```

### create

创建一个新的 FixIt 项目。

```bash
fixit create [project-name]
```

创建一个新的 FixIt 组件。

```bash
fixit create component [component-name]
```

### split

将 `hugo.toml` 配置文件分割到 `config/_default` 目录。

分割本地文件：

```bash
fixit split hugo.toml
```

分割远程文件：

```bash
fixit split https://raw.githubusercontent.com/hugo-fixit/FixIt/refs/heads/main/hugo.toml
# 或者
fixit split https://gitee.com/lruihao/FixIt/raw/main/hugo.toml
```

指定输出目录：

```bash
fixit split hugo.toml -o config/development
```

分割后转换为 YAML 格式：

```bash
fixit split hugo.toml -y
```

获取并拆分 FixIt 最新 release 的配置：

```bash
fixit split latest
```

获取并拆分最新 release 的配置并转换为 YAML 格式：

```bash
fixit split latest -y
```

### toml2yaml

将 TOML 配置文件转换为 YAML 格式，支持单个文件或整个目录。

转换单个文件：

```bash
fixit toml2yaml hugo.toml
```

转换整个目录：

```bash
fixit toml2yaml config/
```

转换后替换原文件（删除 TOML 文件）：

```bash
fixit toml2yaml hugo.toml -r
fixit toml2yaml config/ -r
```

### check

检查 FixIt 主题的最新版本。

```bash
fixit check
```

## 更多帮助

获取所有可用命令的帮助信息：

```bash
pnpx fixit-cli -h
```

```plain
Usage: fixit <command> [options]

=============================================

        ▄████  ▄█     ▄  ▄█    ▄▄▄▄▀
        █▀   ▀ ██ ▀▄   █ ██ ▀▀▀ █
        █▀▀    ██   █ ▀  ██     █
        █      ▐█  ▄ █   ▐█    █
         █      ▐ █   ▀▄  ▐   ▀
          ▀        ▀
              fixit-cli v1.4.0
         A cli tool for FixIt theme.

=============================================

FixIt is a clean, elegant but advanced blog theme for Hugo
built with love by Lruihao and his friends.

Complete documentation is available at https://fixit.lruihao.cn/.

Options:
  -v, --version               output the version number
  -h, --help                  display help for command

Commands:
  create|new [project-name]   create a new FixIt project/component from a template
  split [options] [file]      split hugo.toml into config/_default directory
  toml2yaml [options] [file]  convert TOML file(s) to YAML format (support directory)
  check                       check the latest version of FixIt theme
  help [command]              display help for command
```

## 开发

安装依赖项：

```bash
pnpm install
```

在开发模式下运行 CLI：

```bash
pnpm start -h
```

将包链接/取消链接到全局包目录：

```bash
pnpm link
pnpm unlink fixit-cli
```

从本地路径全局安装/卸载包：

```bash
pnpm add -g path/to/fixit-cli
pnpm remove -g fixit-cli
```

### TODO List

- [ ] `fixit create` 命令在选择模板后增加主题组件选项选择步骤

## 相关项目

本 CLI 工具是基于以下项目开发的：

- [FixIt](https://github.com/hugo-fixit/FixIt)
- [hugo-fixit-starter](https://github.com/hugo-fixit/hugo-fixit-starter)
- [hugo-fixit-starter1](https://github.com/hugo-fixit/hugo-fixit-starter1)
- [component-skeleton](https://github.com/hugo-fixit/component-skeleton)

## 作者

[Lruihao](https://github.com/Lruihao "在 GitHub 上关注我")


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/fixit-cli/  

