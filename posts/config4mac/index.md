# Mac 上的开发配置总结


记录一下使用 Mac 作为生产工具开发的一些基本配置和经验。

<!--more-->

## 配置文件

Mac 上有很多配置文件都可以用来保存环境变量等配置，根据自己的理解记录了四个文件的用途：

```bash
# etc/profile        系统配置文件
# etc/.bash_profile  系统环境变量配置
# ~/.bash_profile    个人环境变量配置
# ~/.zshrc           zsh 的配置文件
# $ZSH_CUSTOM/*.zsh  自定义 zsh 脚本，在 zsh 启动时会自动执行
```

编辑最多的应该是 `~/.bash_profile` 和 `~/.zshrc`, 基本上建议所有的个人配置都放在 `~/.bash_profile` 中，然后在 `~/.zshrc` 最后执行 `source ~/.bash_profile`, 这样也方便将自己的个人环境变量配置备份。

> [!note]
> `pnpm setup` 会自动在 `~/.zshrc` 中添加一些配置，如下：

```bash
# pnpm
export PNPM_HOME="/Users/liruihao/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end
```

## 常用命令

```bash
# 安装/卸载 homebrew install.sh/uninstall.sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# 注意：安装 Homebrew 会下载 node, 请做好 node 环境被破坏的准备

# 显示隐藏文件 true/false or cmd+shift+.
defaults write com.apple.finder AppleShowAllFiles -boolean true ; killall Finder

# 释放端口
lsof -i:$your_port  # 1. 查看使用端口进程
kill -9 $your_PID   # 2. 释放进程
```

## Node

```bash
# 设置阿里镜像
npm config set registry=https://registry.npmmirror.com
# npm config set registry https://registry.npmjs.org

# GitHub 仓库下载地址前缀镜像
npm config set disturl=https://registry.npmmirror.com/-/binary/

# 全局安装的依赖
npm install -g npm@8.13.1
npm install -g cnpm
npm install -g @vue/cli
npm install -g nvm
npm install -g nrm
npm install -g yarn
npm install -g yrm

# npm 参数
--ignore-scripts  # 忽略脚本错误
--force  # 会无视冲突，并强制获取远端 npm 库资源，即使本地有资源也会覆盖掉
--legacy-peer-deps  # 安装时忽略所有 peerDependencies，忽视依赖冲突，采用 npm 版本 4 到版本 6 的样式去安装依赖，已有的依赖不会覆盖

# 清除缓存
npm cache clean --force
rm -rf node_modules
rm -rf package-lock.json
npm install

# nvm
nvm alias default [node_version]  # 设置默认版本

# 检查过时依赖
npm outdated

# 安全更新
npm update

# ncu 更新检查工具
# https://blog.51cto.com/u_13028258/5115637?b=totalstatistic
npm install -g npm-check-updates
## 检查
ncu
ncu vue
## 更新
ncu -u
ncu -u vue
```

electron 相关配置

```bash
# 设置 electron 镜像仓库
# https://registry.npmmirror.com/-/binary/electron
# 13.1.7 版本 下载链接可能会拼错导致 404，要设置成 https://registry.npmmirror.com/-/binary/electron/v
npm config set electron_mirror=https://npmmirror.com/mirrors/electron/
```

## SourceTree

Custom actions

- Script target: `/bin/bash`
- Parameters: `/Users/liruihao/workspace/.shell/sync_tags.sh`

{{< admonition tip >}}
根据不同的 shell 程序选择不同的文件后缀名，并给文件增加可执行权限：

- zsh: `.zsh`
- bash: `.sh`

{{< /admonition >}}

```bash sync_tags.sh
#! /bin/bash
# 同步远程仓库标签分支脚本
git tag -l | xargs git tag -d
# git fetch origin --prune
# git fetch origin --tags
git fetch origin --prune --prune-tags
```

```bash sync_submodules.ssh
#! /bin/bash
# 同步所有子模组
git submodule update --remote --merge
```

```bash ssh.zsh
#! /bin/zsh
# ssh 配置但无法连接时
ssh-agent -s
ssh-add ~/.ssh/Lruihao-Github  # 私钥路径
```

{{< admonition tip >}}
开机启动时系统会去自动读取 `id_rsa` 的私钥来启动 SSH 链接，若不是默认命令就会失败需要手动执行上诉命令启动，可添加到[开机自启动](#startup)。
{{< /admonition >}}

{{< admonition tip "SourceTree 相关文章" >}}

- [解决 SourceTree 提交时候 husky 命令失败问题](/posts/sourcetree-husky/)
{{< /admonition >}}

## Terminal

- Terminal: 系统自带
- Shell: zsh
- 美化：[ohmyzsh](https://github.com/ohmyzsh/ohmyzsh)

修改启动语

```bash
vim $PREFIX/etc/motd
```

## sublime-text 3

```bash
# Terminal 启用 sublime 别名 subl
## 1.设置软链（推荐）
sudo ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl
## 2.设置别名
vim ~/.bash_profile
alias subl="'/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl'"
source ~/.bash_profile # 每打开一个命令窗口，需要先让命令生效
```

## 开机自启动 {#startup}

1. 系统偏好设置 -> 用户与群组 -> 登录项 -> 增删可执行文件 (需配置默认启动软件)
2. 将 shell 命令添加到 `/System/Library/StartupItems/` 或 `/Library/StartupItems/` 文件夹（测试无效）

## 备份

```bash {title="~/.bash_profile"}
# -------------------------------------
# This configuration is for Lruihao.
# https://lruihao.cn/posts/config4mac/
# -------------------------------------

export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8

# workspace
export WORKSPACE="$HOME/workspace"

# alias
alias subl="'/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl'"
alias mysql=/usr/local/mysql/bin/mysql
alias mysqladmin=/usr/local/mysql/bin/mysqladmin
alias incr="source $WORKSPACE/.shell/incr*.zsh"
alias typora="open -a typora"

# maven
export M2_HOME=$HOME/Applications/apache-maven-3.8.5
export PATH=$PATH:$M2_HOME/bin

# jenv
export PATH="$HOME/.jenv/bin:$PATH"
eval "$(jenv init -)"

# java
export JAVA_8_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_321.jdk/Contents/Home
export JAVA_17_HOME=/Library/Java/JavaVirtualMachines/jdk-17.0.2.jdk/Contents/Home
export JAVA_HOME=$JAVA_8_HOME  # 设置一个中间变量，为了方便多个 JDK 版本时更换 JAVA_HOME
export PATH=$JAVA_HOME/bin:$PATH:.  # 冒号前代表 JDK 目录下的 bin 目录，冒号后代表当前目录
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

# jmeter
export JMETER_HOME=$HOME/jmeter/apache-jmeter-5.4.1
export PATH=$JAVA_HOME/bin:$PATH:.:$JMETER_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JMETER_HOME/lib/ext/ApacheJMeter_core.jar:$JMETER_HOME/lib/jorphan.jar:$JMETER_HOME/lib/logkit-2.0.jar

# platform-tools of Android SDK
export PATH=$PATH:$HOME/Applications/platform-tools

# Electron-Mac app development
export CSC_LINK=$WORKSPACE/mac_app_dev/Mac.p12
export CSC_KEY_PASSWORD=xxxxxxxxx

# yarn
export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

# zsh custom plugin
# https://mimosa-pudica.net/zsh-incremental.html
# source $WORKSPACE/.shell/incr*.zsh

# Qcloud secret key-value
export SECRET_ID=""
export SECRET_KEY=""

# golang
export GOROOT=/usr/local/go
export GOBIN=$GOROOT/bin
export PATH=$PATH:$GOBIN
export GOPATH=$HOME/go
export GOPROXY=https://goproxy.cn
# Go work bin
export PATH=$PATH:$GOPATH/bin

# sass_embedded
export PATH=$PATH:$HOME/Applications/sass_embedded
```

```zsh {title="$ZSH_CUSTOM/nvm_custom.zsh"}
# https://github.com/nvm-sh/nvm#manual-install
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# https://github.com/nvm-sh/nvm#deeper-shell-integration
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi

  # fix husky hook
  # ref: https://github.com/typicode/husky/issues/390#issuecomment-762213421
  echo "export PATH=\"$(dirname $(which node)):\$PATH\"" > ~/.huskyrc
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc

# https://github.com/nvm-sh/nvm#use-a-mirror-of-node-binaries
export NVM_NODEJS_ORG_MIRROR=https://mirrors.ustc.edu.cn/node/
```

> 先添加一些基础配置 [basic.vim](https://github.com/amix/vimrc/blob/master/vimrcs/basic.vim)

```bash {title="~/.vimrc"}
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Custom config for Lruihao
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Enable mouse
set mouse=a
" Enable line-number
set number
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/config4mac/  

