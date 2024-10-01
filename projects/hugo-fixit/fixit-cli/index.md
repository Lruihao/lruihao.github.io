# 🛠️ A node-based tooling for FixIt site initialization.

# FixIt CLI

[![NPM version](https://img.shields.io/npm/v/fixit-cli.svg)](https://www.npmjs.com/package/fixit-cli)

👉 中文 | [English](README.en.md)

🛠️ 一个基于 Node.js 开发的用于 [FixIt](https://github.com/hugo-fixit/FixIt) 站点初始化的脚手架工具。

## 系统依赖

- [Node.js](https://nodejs.org/) (&gt;= 16.0.0)
- [Git](https://git-scm.com/)
- [Hugo](https://gohugo.io/) 扩展版

如果你使用 [Hugo 模块](https://gohugo.io/hugo-modules/) 功能加载主题，你还需要安装 [Go](https://golang.org/dl/)。

## 安装

```bash
npm install -g fixit-cli
```

## 使用

```plain
Usage: fixit &lt;command&gt; [options]

Options:
  -v, --version          output the version number
  -h, --help             display help for command

Commands:
  create &lt;project-name&gt;  create a new FixIt project from a template
  check                  check the latest version of FixIt theme
  help &lt;command&gt;         display help for a specific command
```

例如，创建一个名为 `my-blog` 的站点：

```bash
fixit create my-blog
```

## 开发

```bash
npm install
npm link
npm unlink fixit
npm run test -- -h
```

## 相关项目

- [FixIt](https://github.com/hugo-fixit/FixIt)
- [hugo-fixit-starter](https://github.com/hugo-fixit/hugo-fixit-starter)
- [hugo-fixit-starter1](https://github.com/hugo-fixit/hugo-fixit-starter1)

## 作者

[Lruihao](https://github.com/Lruihao &#34;在 GitHub 上关注我&#34;)


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/fixit-cli/  

