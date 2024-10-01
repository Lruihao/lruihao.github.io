# 🆕 A quick-start template base on Git submodule to create a Hugo FixIt site.

# Hugo FixIt 博客模板（Git）

👉 中文 | [English](README.en.md)

这是一个用于 Hugo 主题 [FixIt](https://github.com/hugo-fixit/FixIt) 的快速入门模板。它使用 [Git 子模块](https://git-scm.com/book/en/v2/Git-Tools-Submodules) 功能来加载主题。

它提供了基本的主题结构和配置。已经设置了 GitHub Actions，可以自动部署博客到 GitHub Pages。此外，还有一个定时任务，每天自动更新主题。

## 目录结构

```bash
▸ .github/       # GitHub configuration
▸ archetypes/    # page archetypes (like scaffolds of archetypes)
▸ assets/        # css, js, third-party libraries etc.
▸ config/        # configuration files
▸ content/       # markdown files for hugo project
▸ data/          # blog data (allow: yaml, json, toml), e.g. friends.yml
▸ public/        # build directory
▸ static/        # static files, e.g. favicon.ico
▸ themes/        # theme submodules
```

## 快速入门

完整的快速入门请参阅此 [页面](https://fixit.lruihao.cn/documentation/getting-started/)。

### 准备

[Hugo](https://gohugo.io/installation/): &gt;= 0.132.0 (extended version)

### 使用此模板

1. 点击 [**Use this template**](https://github.com/hugo-fixit/hugo-fixit-starter1/generate)，在 GitHub 上创建你的仓库。

    &lt;img width=&#34;913&#34; alt=&#34;image&#34; src=&#34;https://github.com/hugo-fixit/hugo-fixit-starter1/assets/33419593/d5fbd940-3ffd-4750-b1e6-4e87b50b0696&#34;&gt;

2. 仓库创建后，只需克隆并开始使用！

    ```bash
    # 使用你自己的仓库 URL 进行克隆
    git clone --recursive https://github.com/&lt;your_name&gt;/&lt;your_blog_repo&gt;.git
    ```

### 启动站点

```bash
# 开发环境
hugo server
# 生产环境
hugo server -e production
```

### 构建站点

当你的站点准备部署时，运行以下命令：

```bash
hugo
```

### 更新主题

之后，你可以使用以下命令升级主题：

```bash
# 手动更新主题
git submodule update --remote --merge themes/FixIt
```

&lt;details&gt;
  &lt;summary&gt;通过 NPM 脚本启动&lt;/summary&gt;

  ```bash
  npm install
  # 构建博客
  npm run build
  # 运行带有监视的本地调试服务器
  npm run server
  # 在生产环境中运行本地调试服务器
  npm run server:production
  # 更新主题子模块
  npm run update:theme
  ```

&lt;/details&gt;

## 故障排除

&lt;details&gt;
  &lt;summary&gt;remote: Permission to git denied to github-actions[bot].&lt;/summary&gt;
  转到 Setting =&gt; Actions =&gt; General =&gt; Workflow permissions =&gt; 选中 &#34;Read and write permissions&#34;。
&lt;/details&gt;

&lt;!-- 该项目是使用 [hugo-fixit-starter1](https://github.com/hugo-fixit/hugo-fixit-starter1) 生成的。 --&gt;


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/hugo-fixit-starter1/  

