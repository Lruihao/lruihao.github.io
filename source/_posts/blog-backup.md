---
title: hexo 博客源码备份
date: 2018-11-03 12:49:28
tags:
- hexo
- 源码备份
- git
categories: hexo
password:
abstract:
message:
description:
top:
author:
permalink:
---
![](:category/blog-backup/1.png)
<!--more-->
### 备份hexo博客
```
//如果themes/next(主题文件)下面有.git，请删除这个.git文件夹。
cd hexo
git init  //初始化本地仓库
git add source themes scaffolds _config.yml package.json package-lock.json  //将必要的文件依次添加
git commit -m "blog hexo"
git branch hexo  //新建hexo分支
git checkout hexo  //切换到hexo分支上
git remote add origin git@github.com:username/username.github.io.git  //将本地与Github项目对接
git push origin hexo  //push到Github项目的hexo分支上
```
### 在其他终端克隆和更新hexo博客
> nodejs,git,hexo已经安装好,即搭建完成

#### 克隆hexo博客备份
```
git clone -b hexo git@github.com:username/username.github.io.git  //将Github中hexo分支clone到本地
cd user.github.io
npm install  //注意，这里一定要切换到刚刚clone的文件夹内执行，安装必要的所需组件，不用再init
```
这样我们的备份文件就会原封不动的拷贝到本地。

#### 写新文章并备份和部署（备用操作）

> 其实源码拷下来了，这步不做我们也知道怎么做了，完全没必要按照教程死搬硬套。灵活一点就行了。

```
//进入username.github.io文件夹,应是hexo分支
git pull origin hexo //本地和远端的融合
hexo new post "new post name"  //写新文章
git add source
git commit -m "xxx"
git push origin hexo  //备份
hexo d -g  //部署
```

[参考](https://blog.csdn.net/Monkey_LZL/article/details/60870891)