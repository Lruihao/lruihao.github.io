---
title: Git常用指令汇总
date: 2018-10-30 18:59:56
tags: git
categories: git
password:
abstract:
message:
description:
top: 10
delicate: true
photos:
- /posts/git/relation(2).jpg
- /posts/git/relation(1).jpg
- /posts/git/github.jpg
---

先通过几张图片来大致了解一下Git的工作原理吧！
{% asset_img relation(3).jpg 关系图3 %}

# 介绍
- **工作区**：就是你在电脑里能看到的目录。
- **暂存区**：英文叫stage, 或index。一般存放在 ".git目录下" 下的index文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。
- **版本库**：工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。
<!--more-->
下面这个图展示了工作区、版本库中的暂存区和版本库之间的关系：
{% asset_img work.jpg 工作区、暂存区和版本库 %}

图中左侧为工作区，右侧为版本库。在版本库中标记为 `"index"` 的区域是暂存区（stage, index），标记为 "master" 的是 master分支所代表的目录树。
**HEAD指针: 每个git仓库有且仅有一个HEAD指针，它通常指向當前某个活動的本地分支指针(最初本地仓库master)。也可以是某个提交记录、某个tag，但这会让其处于 detached HEAD（游离头）状态，此状态下的所有提交都无效。**
图中我们可以看出此时 `"HEAD"` 实际是指向 master 分支的一个"游标"。所以图示的命令中出现 HEAD 的地方可以用 master 来替换。
图中的`objects`标识的区域为 Git 的对象库，实际位于 `".git/objects"` 目录下，里面包含了创建的各种对象及内容。
当对工作区修改（或新增）的文件执行 `"git add"` 命令时，暂存区的目录树被更新，同时工作区修改（或新增）的文件内容被写入到对象库中的一个新的对象中，而该对象的ID被记录在暂存区的文件索引中。
当执行提交操作（git commit）时，暂存区的目录树写到版本库（对象库）中，master 分支会做相应的更新。即 master 指向的目录树就是提交时暂存区的目录树。
当执行 `"git reset HEAD"` 命令时，暂存区的目录树会被重写，被 master 分支指向的目录树所替换，但是工作区不受影响。
当执行 `"git rm --cached <file>"` 命令时，会直接从暂存区删除文件，工作区则不做出改变。
当执行 `"git checkout ."` 或者 `"git checkout -- <file>"` 命令时，会用暂存区全部或指定的文件替换工作区的文件。这个操作很危险，会清除工作区中未添加到暂存区的改动。
当执行 `"git checkout HEAD ."` 或者 `"git checkout HEAD <file>"` 命令时，会用 `HEAD` 指向的 master 分支中的全部或者部分文件替换暂存区和以及工作区中的文件。这个命令也是极具危险性的，因为不但会清除工作区中未提交的改动，也会清除暂存区中未提交的改动。

# 基本常用命令
> 第一次使用git的时候，需要设置用户信息和用户邮箱，用于辨识提交者身份。

```
git config --global user.name <git用户名>
git config --global user.email <邮箱地址>
git config --list                           # 查看当前用户信息
```

## 基本操作
```
git init                    # 把当前的目录变成可以用git进行版本控制的git仓库，生成隐藏.git文件。
git add XX                  # 把xx文件添加到暂存区去。
git add –A                  # git add --all的缩写，添加全部到暂存区
git add –u                  # 把文件的删除和修改添加到暂存区（不包括新增）
git add .                   # 监控工作区的状态树，使用它会把工作时的所有变化提交到暂存区
git commit -m "message"     # 从暂存区提交到本地仓库
git commit -a -m "message"  # 相当于省略git add，但是无法提交新增的文件
git push origin master      # Git会把master分支推送到远程库对应的远程分支上
```
> "commit message"内容尽量规范！
当某一次提交后，突然想起漏提交了文件，或不小心提交了不满意的代码时，可以使用`git commit --amend -m "message"`指令。它可以在不增加一个新的commit-id的情况下将新修改的代码追加到前一次的commit-id中。提交之后message也将被本次的message覆盖，所以还需要再次添加上次的message。


## push 
```
git push origin name
git push –u origin master
git push origin --delete name     # 删除远程分支
```
> 把当前master分支推送到远程库; `-u`表示记住分支和地址，下次使用`git push`即可。

## remote
```
git remote add origin reposityUrl     # 关联一个远程库
git remote                            # 查看远程库的信息
git remote –v                         # 查看远程库的详细信息
```

## clone
```
git clone reposityUrl                   # 从远程库中克隆
git clone -b branchName reposityUrl     # 克隆指定分支
```

## pull
```
git pull
```

> 从远程仓库拉下来到本地库然后合并相当于`git fetch`+`git merge`。
一般push前先拉去最新版本，避免代码冲突，如果有冲突需要解决了冲突才能提交。

## fetch
```
git fetch               # 从远程库抓下最新版本，但是不合并
```
> fetch是从远程库到本地库，但是未在工作区，需要`git merge`

## merge
```
git merge dev           # 在当前的分支上合并dev分支
```
> 分支合并也是在本地完成，新的分支只有在合并后才允许被删除。
如果分支合并是出现冲突需要解决了冲突才能合并，使用`git status`查看冲突文件。

## branch,checkout
```
git branch            # 查看当前所有的分支
git branch name       # 创建分支
git branch –r         # 看远程所有分支
git branch –a         # 查看本地远程分支
git branch –d name    # 删除分支
git checkout name     # 切换分支
git checkout –b name  # 创建并切换到name分支上
git checkout -- file
```
> `git checkout -- file`相当于取消对文档的修改，将最新的本地版本库的本文件复制覆盖它。（比较危险！）

## reflog,log
```
git log               # 显示所有提交过的版本信息：commit id，提交者，日期
git reflog            # 查看历史记录的commit id
```
{% note info %}
想看到自己的操作记录，则可以使用log与reflog，它两个的区别如下:
1. `git log`命令可以显示所有提交过的版本信息；
如果感觉太繁琐，可以加上参数`--pretty=oneline`，只会显示版本号和提交时的备注信息。
2. `git reflog`可以查看所有分支的所有操作记录。（包括已经被删除的commit记录和reset的操作）
{% endnote %}

## reset
```
git reset --hard HEAD^        
git reset --hard HEAD~        # 回退到上一个版本
git reset --hard HEAD~100     # 回退到100个版本

git reset head -- file        # 不加file则全部退回  
git reset file                # 将本地仓库的当前版本退回至暂存区，相当于取消暂存
```
版本退回是从本地仓库到暂存区，如果已经提交远程库，此时的版本是低于最新的版本的会拒绝提交，
需要用`git push -f origin master`强制提交。

## status
```
git status
```
> 查看你的文件在暂存区和工作目录的状态，默认是较为详细的显示，并提示你可以用何种命令完成你接下来可能要做的事情。

```
git status -s
```
较为简单的输出当前的状态，如：
```
$ git status -s
M  README.md
 D hello.rb
?? world.java
```
> 你可以看到，在简短输出中，有两栏。第一栏是暂存区的，第二栏则是工作目录的。这里表示：
- `README.md` 在暂存区中的状态是 `modify`
- `hello.rd` 在工作目录中的状态是 `delete`
- `world.java` 还未添加到版本控制。

## diff
```
git diff XX         # 查看XX文件修改了哪些内容

git diff            # 工作目录和暂存区
git diff --cached   # 暂存区和本地仓库
git diff HEAD 	    # 工作目录和本地仓库
git diff --stat     # 显示信息摘要
```

## rm, mv
```
git rm                           # 将文件从暂存区和工作目录删除，-f 为强制删除
git rm filename                  # 删除文件
git rm –r dirname                # 删除文件夹 –r 表示递归所有子目录
git rm --cached <path>           # 将文件从暂存区中删除
git mv <old_path> <new_path>
```
> `git rm`用来删除文件、目录。`git mv`命令用于移动或重命名一个文件、目录。

比如删除photos文件，本地删除后，远程仓库还会有，所以
```
git rm -r photos
git commit -m "删除相册"
git push
```

## submodule
```
git submodule add         # 添加子模组

git submodule init        # 子模组初始化
git submodule update      # 子模组更新
```
{% note primary %}
当一个远程库有子模组时，直接clone子模组只是一个空文件夹，需要进入子模组的空文件夹`init`和`update`才行。
或者使用递归克隆`git clone --recursive 远程库`  
子模组更新后，父模组必须更新，因为需要更新commit id。
{% endnote %}

## tag
```
git tag -a v1.0                   # 给最新一次提交打标签
git tag -a <tagname> -m "标签"    # 指定标签信息命令
git tag                           # 查看版本打的Tag
```
{% note success %}
当你执行`git tag -a`命令时，Git会打开你的编辑器，让你写一句标签注解，就像你给提交写注解一样。
如果我们忘了给某个提交打标签，又将它发布了，我们可以给它追加标签。
{% endnote %}
例如，假设我们发布了提交85fc7e7(最后一行)，但是那时候忘了给它打标签。 我们现在也可以：
```
$ git tag -a v0.9 85fc7e7
$ git log --oneline --decorate --graph
*   d5e9fc2 (HEAD -> master) Merge branch 'change_site'
|\  
| * 7774248 (change_site) changed the runoob.php
* | c68142b 修改代码
|/  
* c1501a2 removed test.txt、add runoob.php
* 3e92c19 add test.txt
* 3b58100 (tag: v0.9) 第一次版本提交
```

## stash
```
git stash               # 把当前的工作隐藏起来，等以后恢复现场后继续工作
git stash list          # 查看所有被隐藏的文件列表
```

## gitk
```
gitk                    # git自带GUI
gitk --all
```
# github,gitea等平台issue的常用标签
- {% label danger@bug %} 描述的问题是一个bug
- {% label warning@enhancement %} 功能增强，没有feature也可以指 New feature or request
- {% label success@feature %} 新功能
- {% label default@duplicate %} 问题重复
- {% label @invalid %} 可用的，不是bug
- {% label primary@question %} 疑问，需要进一步的信息
- {% label info@wontfix %} 不会修复此问题
- {% label success@help-wanted %} 需要帮助
- {% label primary@good first issue %} Good for newcomers
- [更多标签](https://www.jianshu.com/p/48b935e36000)

# 其他
* [Gearn Git Branching](https://learngitbranching.js.org/)