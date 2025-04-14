# 🛠️ A node-based tooling for FixIt site initialization.

# FixIt CLI

[![NPM version](https://img.shields.io/npm/v/fixit-cli.svg)](https://www.npmjs.com/package/fixit-cli)

👉 中文 | [English](README.en.md)

🛠️ 一个基于 Node.js 开发的用于 [FixIt](https://github.com/hugo-fixit/FixIt) 站点初始化的脚手架工具。

[![asciicast](fixit-cli.gif)](https://asciinema.org/a/697494)

## 系统依赖

- [Node.js](https://nodejs.org/) (>= 18)
- [Git](https://git-scm.com/)
- [Hugo](https://gohugo.io/) 扩展版

如果你使用 [Hugo 模块](https://gohugo.io/hugo-modules/) 功能加载主题，你还需要安装 [Go](https://golang.org/dl/)。

## 使用

使用 [`pnpx`](https://pnpm.io/cli/dlx) 或者 [`npx`](https://docs.npmjs.com/cli/v11/commands/npx) 直接运行 `fixit-cli`，创建一个新的 FixIt 项目会非常方便，当然你也可以全局安装 `fixit-cli`，然后使用 `fixit` 命令。

例如，创建一个名为 `my-blog` 的站点：

```bash
pnpx fixit-cli create my-blog
```

更多用法请参考下面的帮助信息：

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
              fixit-cli v1.2.1
         A cli tool for FixIt theme.

=============================================

FixIt is a clean, elegant but advanced blog theme for Hugo
built with love by Lruihao and his friends.

Complete documentation is available at https://fixit.lruihao.cn/.

Options:
  -v, --version              output the version number
  -h, --help                 display help for command

Commands:
  create|new [project-name]  create a new FixIt project/component from a template
  check                      check the latest version of FixIt theme
  help [command]             display help for command
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

- [ ] 检查是否安装 Hugo，没有安装，可通过 Node 包安装 `hugo-bin`/`hugo-extended`
- [ ] 执行 `fixit check` 命令后，获取到新版本后，提示是否更新
- [ ] 新增 `fixit add` 命令，用于添加新的 FixIt 主题组件（`fixit create` 命令增加主题组件选项）

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

