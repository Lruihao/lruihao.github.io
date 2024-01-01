# 用 Node.js 开发一个轻量脚手架


本文将介绍如何用 Node.js 开发一个轻量脚手架，以 [fixit-cli](https://github.com/hugo-fixit/fixit-cli) 为例。

&lt;!--more--&gt;

## 前言

在维护 [FixIt](https://github.com/hugo-fixit/FixIt) 这个项目时，很多新人可能第一次接触 Hugo，第一次使用 FixIt 主题，可能觉得无从下手。在之前的工作中，为了避免这个问题，我新增了两个模板项目：

- [hugo-fixit-blog-git](https://github.com/hugo-fixit/hugo-fixit-blog-git)
- [hugo-fixit-blog-go](https://github.com/hugo-fixit/hugo-fixit-blog-go)

然并卵哈哈哈🤣，大家似乎都有种惰性，不愿意认真地读一遍 README，即使只需简单几步就能通过 GitHub template 创建一个拥有完整主题配置、自动化部署完善的博客。

懒惰是人类进步的源泉，想到 Vue CLI、Create React App 这些脚手架，我决定开发一个轻量级的脚手架 [fixit-cli](https://github.com/hugo-fixit/fixit-cli)，让大家能够快速地上手 FixIt 主题。

## 思路

fixit-cli 的思路很简单，就是通过命令行交互，让用户输入一些信息，然后根据这些信息生成一个完整的博客项目。

- `fixit create my-blog` 创建一个名为 `my-blog` 的项目
- `fixit check` 检查 FixIt 主题的最新版本

## 开发

### 初始化项目

```bash
mkdir fixit-cli
cd fixit-cli
npm init -y
```

然后在 `package.json` 中写点项目信息。

### 安装依赖

```bash
npm install commander inquirer chalk simple-git ora --save
```

主要依赖：

| 依赖                                                   | 用途                                                   |
| ------------------------------------------------------ | ------------------------------------------------------ |
| [commander](https://www.npmjs.com/package/commander)   | 完整的 Node.js 命令行解决方案                          |
| [inquirer](https://www.npmjs.com/package/inquirer)     | 常见交互式命令行用户界面的集合                         |
| [chalk](https://www.npmjs.com/package/chalk)           | 命令行输出样式                                         |
| [simple-git](https://www.npmjs.com/package/simple-git) | 用于在任何 Node.js 应用程序中运行 Git 命令的轻量级接口 |
| [ora](https://www.npmjs.com/package/ora)               | 命令行 loading 效果                                    |

如果需要使用简单的 `git clone` 下载模板，可以使用 [download-git-repo](https://www.npmjs.com/package/download-git-repo) 替代 `simple-git`。

### 定义一个 CLI

在 `package.json` 中添加 `bin` 字段，指定 CLI 的入口文件。

```json
{
  &#34;bin&#34;: {
    &#34;fixit&#34;: &#34;bin/cli.js&#34;
  }
}
```

然后在 `bin` 目录下创建 `cli.js` 文件，写入以下内容：

```js
#!/usr/bin/env node

console.log(&#39;Hello, FixIt!&#39;)
```

代码顶部的 `#!/usr/bin/env node` 是告诉终端，这个文件要使用 `node` 去执行，等同于 `node bin/cli.js`。

如果我们想要在终端执行 `fixit` 命令，可以使用 `npm link` 将 `fixit` 命令链接到全局。

```bash
npm link
# 卸载本地包
npm unlink fixit
```

或者也可以使用 `npm install -g` 全局安装。

```bash
npm install -g fixit-cli /Users/cell/workspace/fixit-cli/
```

### 命令行交互

先把要实现的命令和选项列出来：

```js {title=&#34;bin/cli.js&#34;}
#!/usr/bin/env node
import { Command } from &#39;commander&#39;

// ...

// define commands
program
  .command(&#39;create &lt;project-name&gt;&#39;)
  .description(&#39;create a new FixIt project from a template&#39;)
  .action(createAction)
program
  .command(&#39;check&#39;)
  .description(&#39;check the latest version of FixIt theme&#39;)
  .action(checkAction)
program
  .command(&#39;help &lt;command&gt;&#39;)
  .description(&#39;display help for a specific command&#39;)
  .action(helpAction)

// define cli
program
  .usage(&#39;&lt;command&gt; [options]&#39;)
  .description(description)
  .version(`${pkg.name} v${pkg.version}`, &#39;-v, --version&#39;)
  .showHelpAfterError()
  .parse(process.argv)
```

然后再去实现这些命令所执行的动作：`createAction`、`checkAction`、`helpAction` 和完善一下 logo 和 description 等细节。

```plain {title=&#34;fixit --help&#34;}
Usage: fixit &lt;command&gt; [options]

=============================================

        ▄████  ▄█     ▄  ▄█    ▄▄▄▄▀ 
        █▀   ▀ ██ ▀▄   █ ██ ▀▀▀ █    
        █▀▀    ██   █ ▀  ██     █    
        █      ▐█  ▄ █   ▐█    █     
         █      ▐ █   ▀▄  ▐   ▀      
          ▀        ▀                
              fixit-cli v1.0.2
         A cli tool for FixIt theme.

=============================================

FixIt is a clean, elegant but advanced blog theme for Hugo
built with love by Lruihao and his friends.

Complete documentation is available at https://fixit.lruihao.cn/.

Options:
  -v, --version          output the version number
  -h, --help             display help for command

Commands:
  create &lt;project-name&gt;  create a new FixIt project from a template
  check                  check the latest version of FixIt theme
  help &lt;command&gt;         display help for a specific command
```

最后发布到 npm 上就完活了。

```bash
npm login
npm publish
```

发布后，就可以通过 `npm install -g fixit-cli` 全局安装了。

安装后，例如，创建一个名为 my-blog 的站点：

```bash
fixit create my-blog
```

## 源码

命令动作的具体实现详见 FixIt CLI 源码。

{{&lt; link href=&#34;https://github.com/hugo-fixit/fixit-cli&#34; content=&#34;FixIt CLI&#34; card=true &gt;}}


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/fixit-cli/  

