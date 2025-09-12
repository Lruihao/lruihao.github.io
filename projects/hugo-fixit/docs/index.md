# 📄 The open-source repo for fixit.lruihao.cn

# FixIt 主题文档

[![Production environment](https://img.shields.io/github/deployments/hugo-fixit/docs/Production?style=flat&label=Production&logo=vercel)](https://fixit.lruihao.cn/)
[![Preview environment](https://img.shields.io/github/deployments/hugo-fixit/docs/Preview?style=flat&label=Preview&logo=vercel)](https://pre.fixit.lruihao.cn/)
[![Hugo](https://img.shields.io/badge/Hugo-%5E0.147.7-ff4088?style=flat&logo=hugo)](https://gohugo.io/)

👉 中文 | [English](README.en.md)

[FixIt](https://github.com/hugo-fixit/FixIt) 主题文档主要分为：[文档](https://fixit.lruihao.cn/zh-cn/documentation/)、[教程](https://fixit.lruihao.cn/zh-cn/guides/) 两大板块，欢迎大家发起 PR 完善主题文档。

## 系统依赖

- [Node.js](https://nodejs.org/): >= 20.0.0
- [Go](https://go.dev/dl/)
- [Hugo](https://gohugo.io/installation/): >= 0.147.7 (extended version)

## 贡献文档

首先，点击 fork 按钮 fork 本仓库。

然后，克隆你 fork 的仓库。

```bash
git clone https://github.com/hugo-fixit/docs.git fixit-docs && cd fixit-docs
```

接着，安装开发依赖。

```bash
pnpm install
```

最后，你就可以开始了！

这里有一些有用的命令。

```bash
# 运行带有监听文件变化的本地调试服务器
pnpm run server
# 运行带有监听文件变化的本地调试服务器（生产环境）
pnpm run server:production
# 查看编辑主题部分
pnpm run server:development
```

## 参与翻译

包含 `missing-translation` shortcode 的文档表示该部分尚未翻译，点击查看 [缺失翻译的文档](https://github.com/search?q=repo%3Ahugo-fixit%2Fdocs+missing-translation+path%3A%2F%5Econtent%5C%2F%2F&type=code)。

## 编辑主题

如果你想做与文档相关的主题更改，最简单的方法是将 `fixit-docs` 和 `FixIt` 克隆为兄弟目录，然后运行：

```bash
HUGO_MODULE_WORKSPACE=hugo.work hugo server --ignoreVendorPaths "**"
```

最后，在 <https://github.com/hugo-fixit/docs/pulls> 创建一个新的 pull request 来提交你的贡献 🎉

## 感谢赞助

[translate.js](https://github.com/xnx3/translate) 赞助企业级翻译通道。


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/docs/  

