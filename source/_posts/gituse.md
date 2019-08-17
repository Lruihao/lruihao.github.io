---
title: 使用Git上传代码到github,coding等仓库
date: 2018-10-26 21:11:02
tags: git
categories: git
password:
abstract:
message:
description:
top:
author:
permalink:
---

### config
```bash
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```
> 第一次使用git的时候需要设置提交者信息。
注意：
如果用了 `--global` 选项，那么更改的配置文件就是位于你用户主目录下的那个，以后你所有的项目都会默认使用这里配置的用户信息。
如果要在某个特定的项目中使用其他名字或者电邮，只要去掉 `--global` 选项重新配置即可，新的设定保存在当前项目的 `.git/config` 文件里。

### 生成ssh
由于你的本地 Git 仓库和 GitHub 仓库之间的传输是通过SSH加密的，所以我们需要配置验证信息：
使用以下命令生成 SSH Key：
```
ssh-keygen -t rsa -C "youremail@example.com"
```
> 后面的 `your_email@youremail.com` 改为你在 Github 上注册的邮箱，之后会要求确认路径和输入密码，我们这使用默认的一路回车就行。成功的话会在 `C:\Users\用户名\`或者`~/` 下生成 `.ssh`文件夹，进去，打开 `id_rsa.pub`，复制里面的 key。去github、coding等平台配置SSH公钥（根据自己情况）

### 创建本地代码库

在本地创建一个文件夹，作为你上传代码的本地仓库，在这个文件夹内点击右键，选择Git Bash Here，首先要初始化本地仓库:
```
git init
```
接下来进行远程代码库克隆（事先在coding等中建立一个项目，就是你需要链接的仓库）
```
git clone https://github.com/Lruihao/Lruihao.github.io.git
```
克隆时会出现输入账号密码的环节正确输入即可。

### 代码推送（重点）

```
git status
git add *
git commit -m "代码备注随便写"
git push origin master
```

* [Gearn Git Branching](https://learngitbranching.js.org/)