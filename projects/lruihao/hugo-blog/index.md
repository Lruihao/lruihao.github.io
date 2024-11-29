# 一个前端 CV 程序猿的博客😉

# 菠菜眾長

[![Hugo](https://img.shields.io/badge/Hugo-%5E0.134.1-ff4088?style=flat&amp;logo=hugo)](https://gohugo.io/)
[![Hugo build and deploy](https://github.com/Lruihao/hugo-blog/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/Lruihao/hugo-blog/actions/workflows/deploy.yml)
[![GitHub commit activity (main)](https://img.shields.io/github/commit-activity/m/Lruihao/hugo-blog/main?style=flat)](https://github.com/Lruihao/hugo-blog/commits/main)

&gt; 站名“菠菜眾長”，取“兼收並蓄，博採眾長”之意。

博客基于 [Hugo](https://github.com/gohugoio/hugo) 和 [FixIt](https://github.com/Lruihao/FixIt) 搭建，建站的初衷不是为了炫耀所知，而是记录无知。

博客内容主要以 Web 前端开发方向为主，分享一些有趣程序、技巧、开发教程、心情和学习记录等。

你可以通过我的[微信公众号](https://lruihao.cn/images/qr-wx-mp.webp &#34;关注「菠菜眾長」公众号&#34;)、[GitHub](https://github.com/Lruihao/hugo-blog &#34;Watch on GitHub&#34;) 或 [RSS](http://lruihao.cn/index.xml) 来订阅本博客。

![blog-preview](https://raw.githubusercontent.com/Lruihao/hugo-blog/refs/heads/main/assets/images/apple-devices-preview.webp)

## Content

- [归档](https://lruihao.cn/archives/)
- [分类](https://lruihao.cn/categories/)
- [合集](https://lruihao.cn/collections/)
- [标签](https://lruihao.cn/tags/)
  
## Source

博客相关源码：

- [HTML-CSS-JavaScript 相关](https://github.com/Lruihao/html-demo)
- [Vue2 相关](https://github.com/Lruihao/vue-el-demo)
- [Hugo FixIt 相关](https://github.com/hugo-fixit)
- [更多](https://github.com/Lruihao?tab=repositories)

## [Roadmap](https://github.com/users/Lruihao/projects/1)

## Project setup

本博客已部署到 [Vercel](https://blog-lruihao.vercel.app/) 和 [GitHub Pages](https://github.com/Lruihao/lruihao.github.io)，工作流如下图所示：

![blog-flow](https://raw.githubusercontent.com/Lruihao/hugo-blog/refs/heads/main/assets/images/blog-flow.png)

```bash
▸ .github/       # GitHub configuration
▸ .scripts/      # custom scripts
▸ .shell/        # shell commands for hugo project, entrance: hugo_main.sh
▸ archetypes/    # page archetypes (like scaffolds of archetypes)
▸ assets/        # css, js, third-party libraries etc.
▸ config/        # configuration files
▸ content/       # markdown files for hugo project
  ▸ private/     # private submodule for encrypted content
▸ data/          # blog data (allow: yaml, json, toml), e.g. friends.yml
▸ public/        # build directory
▸ static/        # static files, e.g. favicon.ico
▸ themes/        # theme submodules
```

### System requirements

- [Node.js](https://nodejs.org/): &gt;= 18.0.0
- [Go](https://go.dev/dl/)
- [Hugo](https://gohugo.io/installation/): &gt;= 0.134.1 (extended version)

### Clone

首先点上 Star 😜，然后下载源码：

```bash
git clone --recursive git@github.com:Lruihao/hugo-blog.git &amp;&amp; cd hugo-blog
```

下载源码后，有两种方法可以启动这个博客。

### NPM

```bash
npm install
# build the blog
npm run build
# run a local debugging server with watch
npm run server
# run a local debugging server in production environment
npm run server:production
# update theme submodules
npm run update:theme
```

&lt;details&gt;
&lt;summary&gt;如果没有全局安装 Hugo，甚至可以通过 hugo-bin 在 Node.js 环境下使用 Hugo。&lt;/summary&gt;

参考：[hugo-bin](https://github.com/fenneclab/hugo-bin)

```bash
npm install hugo-bin --save-dev
```

`package.json` 需配置 `extended` 版本：

```json
{
  ...
  &#34;hugo-bin&#34;: {
    &#34;buildTags&#34;: &#34;extended&#34;
  }
}
```

再通过 `npx hugo` 启动。
&lt;/details&gt;

### Hugo

```bash
# Development environment
hugo server --disableFastRender --navigateToChanged --bind 0.0.0.0
# Production environment
hugo server --disableFastRender --navigateToChanged --environment production --bind 0.0.0.0
```

&lt;details&gt;
&lt;summary&gt;此外，还可以运行 shell 脚本来选择常用的 Hugo 命令。&lt;/summary&gt;

```bash
cd .shell &amp;&amp; sh hugo_main.sh
```

```text
--------------Hugo Admin--------------
Please enter the serial number to work
--------------------------------------
1. post
2. server
3. server:production
4. build
5. submodule-sync
6. push
--------------------------------------
Press Ctrl&#43;C to stop
```

&lt;/details&gt;

## License

[![Content License](https://img.shields.io/badge/license-CC_BY--NC--SA_4.0-blue?style=flat)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![License](https://img.shields.io/github/license/Lruihao/hugo-blog?style=flat)](https://github.com/Lruihao/hugo-blog/blob/main/LICENSE)

- 此存储库中的文本、图像和视频等内容采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可
- 此存储库中的代码采用 [MIT](https://github.com/Lruihao/hugo-blog/blob/main/LICENSE) 许可
- _`content/private` 目录不在任何许可范围内_

## Author

[Lruihao](https://github.com/Lruihao &#34;在 GitHub 上关注我&#34;)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/hugo-blog/  

