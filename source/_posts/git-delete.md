---
title: git删除文件方法及常用指令
date: 2018-10-30 18:59:56
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

### git删除远端仓库的文件方法
```
git rm 文件名  #删除文件
git rm –r 文件夹# 删除文件夹 –r 表示递归所有子目录
git commit –m "提交信息" #提交信息
git push origin master #推送到远程仓库 master分支
```
比如删除photos文件，本地删除后，远程仓库还会有，所以
```
git rm -r photos
git commit -m "删除相册"
git push
```
### 基本常用命令
```
   git branch     查看当前所有的分支
   git branch –r  查看远程所有分支
   git branch –a  查看本地远程分支
   git tag        查看版本打的Tag
   git checkout [name]     切换到name分支
   git branch –d [name]    删除name分支
   git checkout –b [name]  创建name分支 并切换到name分支上

   git init       把当前的目录变成可以管理的git仓库，生成隐藏.git文件。
   git add XX     把xx文件添加到暂存区去。
   git add –A  （git add --all的缩写）
   git add .      监控工作区的状态树，使用它会把工作时的所有变化提交到暂存区
   git remote add origin 仓库地址   (关联一个远程库)
   git push –u(第一次要用-u 以后不需要) origin master (把当前master分支推送到远程库)


   git clone        仓库地址  (从远程库中克隆)
   git status       查看仓库状态
   git diff  XX     查看XX文件修改了那些内容
   git reflog       查看历史记录的版本号id
   git merge dev    在当前的分支上合并dev分支
   git remote       查看远程库的信息
   git remote –v    查看远程库的详细信息
   git stash        把当前的工作隐藏起来 等以后恢复现场后继续工作
   git stash list   查看所有被隐藏的文件列表
   git push origin master  Git会把master分支推送到远程库对应的远程分支上
   git reset  –hard HEAD^ 或者 git reset  –hard HEAD~ 回退到上一个版本
                        (如果想回退到100个版本，使用git reset –hard HEAD~100 )
```