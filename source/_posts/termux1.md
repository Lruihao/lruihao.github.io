---
title: termux基本使用教程
date: 2018-10-23 22:16:02
tags:
- termux
categories:
- termux
password:
abstract:
message:
description:
top:
author:
permalink:
---

前面有一篇文章写到一些[传送门](https://lruihao.cn/termux.html)

### 初始化
下载并初始化termux
#### 安装vim
安装编辑器vim
```
pkg install vim
```
#### 解决中文乱码问题
在home目录下, 新建.vimrc文件
```
vim .vimrc
```
添加内容如下:
```
set fileencodings=utf-8,gb2312,gb18030,gbk,ucs-bom,cp936,latin1
set enc=utf8
set fencs=utf8,gbk,gb2312,gb18030
```
然后source下变量:
```
source .vimrc
```
#### 修改启动问候语
```
vim $PREFIX/etc/motd
```
按i然后编辑，比如
```
		www.lruihao.cn
		    李瑞豪
```
Esc然后：wq退出


#### 管理员权限
手机已经 root,安装tsu, 这是一个su的 termux 版本, 用来在 termux 上替代su:
```
pkg install tsu
```
然后终端下面输入:
```
tsu
```
即可切换root用户, 这个时候会弹出root授权提示。在管理员身份下，输入exit可回到普通用户身份。

### 美化
[Termux-ohmyzsh](https://github.com/Cabbagec/termux-ohmyzsh)

作用 ： 美化之外，主要使用了zsh来替代bash作为默认shell。使用一键安装脚本来安装, 一步到位, 顺便启动了外置存储, 可以直接访问 SD 卡下的目录，创建软文件夹。

#### 使用
```
sh -c "$(curl -fsSL https://github.com/Cabbagec/termux-ohmyzsh/raw/master/install.sh)"
```
#### 设置色彩样式：
运行chcolor更换色彩样式，或者：
```
~/.termux/colors.sh
```
#### 设置字体
运行chfont更换字体，或者：
```
~/.termux/fonts.sh
```
#### 需要软件包：
 * curl

### 访问外置存储
执行过上面的zsh一键配置脚本后, 并且授予文件访问权限的话, 会在家目录生成storage目录，并且生成若干目录，软连接都指向外置存储卡的相应目录
可以让从外置储存复制文件进system分区

#### 创建 QQ 文件夹软连接
```
ln -s /data/data/com.termux/files/home/storage/shared/tencent/QQfile_recv QQ
```

#### 创建blog2文件夹软连接备份文件
```
ln -s /data/data/com.termux/files/home/storage/shared/blog2 blog2
```


### 安装hexo

#### 安装准备
```
pkg install nodejs
pkg install git
npm install hexo-cli -g
npm install hexo-deployer-git --save
pkg install openssh
```
#### 初始化hexo
```
hexo init blog
cd blog
hexo g
hexo s
```
浏览器输入`127.0.0.1:4000`查看效果

#### 链接github,coding,gitee等远程仓库
```
ssh-keygen -t rsa -C "your_email@example.com"
#这将按照你提供的邮箱地址，创建一对密钥(个人喜欢一路回车)
```
找到`~/.ssh/id_rsa.pub`这个文件复制里面的内容，到对应的平台生成SSH公钥

#### 设置用户信息
```
git config --global user.name "lruihao"
git config --global user.email  "1074627678@qq.com"
```
#### 测试链接
```
ssh -T git@github.com  #github
ssh -T git@coding.net   #coding
ssh -T git@gitee.com   #gitee
```
**注意#注释部分不要的**

#### 站点配置文件

打开站点配置文件填写代码库

例如我的
```
deploy:
- type: git
  repository:
    github: git@github.com:Lruihao/Lruihao.github.io.git,master
    coding: git@git.coding.net:liruihao/liruihao.git,master
  #message: "日常更新"
```

#### 部署
```
hexo clean
hexo g -d
```
没出错就可以正常通过相应域名访问了。
<https://lruihao.github.io>
<https://liruihao.coding.me>
<https://lruihao.gitee.io> **//手机hexo效果展示**


### ssh连接电脑或者服务器
```
ssh root@118.24.217.167
```
会提示输入密码，linux下输入密码是看不到的，大家都知道，小心点别输入错误。
之后就可以手机操作服务器了。

### 解决 npm 安装报错（未验证）
```
vim $PREFIX/lib/node_modules/npm/node_modules/worker-farm/lib/farm.js
```
把里面的 length改成4，我默认的是1。

### nyancat 彩虹猫
彩虹貓（英语：Nyan Cat）是在 2011 年 4 月上传在 Youtube 的视频，并且迅速爆红于网络，並在 2011 年 YouTube 浏览量最高的视频中排名第五.
```
pkg install nyancat
nyancat
```

> 还有更多姿势这里就不写了，只写一下日常用到的，就这样OK睡觉！