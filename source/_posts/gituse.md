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

### 生成ssh
这个不多说了，很常见了，前面的文章也有分多次用到
```
ssh-keygen -t rsa -C "admin@lruihao.cn"
```
### 配置ssh
复制id_rsa.pub文件内容去github或者coding配置SSH公钥（根据自己情况）

### 创建本地代码库

在本地创建一个文件夹，作为你上传代码的本地仓库，在这个文件夹内点击右键，选择Git Bash Here，首先要初始化本地仓库，输`git init`命令
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
git status可以理解为当前本地仓库的文件情况，如果输入命令后，文件名为红色说明还没有推送云端，至少还没有进入缓存区。
然后使用`git add`推送你要上传的文件，也可以用通配符表示全部推送。接下来， 输入`git commit -m "代码备注 `命令提交。
然后输入`git push origin master`命令推送到云端，origin是服务器，master是分枝。一般平时都是推送到master所以不可以简化为`git push`

