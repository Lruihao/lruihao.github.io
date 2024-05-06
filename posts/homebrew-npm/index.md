# 安装 Homebrew 后导致系统中原有的 Npm 和 Npx 失效


{{&lt; admonition question &gt;}}
前面一段时间，安装了 Homebrew, 但是今天切换 node 版本到 system version (8.10.0) 后，发现虽然 node 版本切换成功，但是 node 版本对应的 npm 和 npx 版本不相符，下面记录一下问题排查过程。
{{&lt; /admonition &gt;}}

&lt;!--more--&gt;

## 罪魁祸首

首先定位到这次问题的根本原因是安装 Homebrew 导致的，这点可以很快也很明确地定位到，因为以前安装 Homebrew 也遇到了这个问题，但是当时的做法是卸载 Homebrew 避免冲突。

## Why

分析为啥会冲突，Homebrew 安装的工程中也会默认一部分依赖的二进制文件，npm 和 npx 也在其中，所以这导致了 Homebrew 的安装 npm 和 npx 覆盖了系统中 node 的 npm 和 npx 进而导致 node 和 npm 版本不一致，无法使用 npm 启动项目。

## Where

找一下目前 npm 和 npx 的二进制文件在哪。

```bash
nvm use system
node -v           # 8.10.0
which npm         # /opt/homebrew/bin/npm
which npx         # /opt/homebrew/bin/npx
```

## How

很明显前面的猜测是对的，那就打开这个目录看看：

```bash
open /opt/homebrew/bin
```

找到 npm 和 npx，把他们重命名为 `npm-brew` 和 `npx-brew`, 这样通过别名也保留 Homebrew 的 npm 和 npx.

修改完后，重启终端，再看看 npm 和 npx 是否生效：

```bash
nvm use system
node -v           # 8.10.0
which npm         # /usr/local/bin/npm
which npx         # /usr/local/bin/npx
npm -v
npx -v
```

一切正常了，可以用 npm 继续启动原来的项目了。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/homebrew-npm/  

