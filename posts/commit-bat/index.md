# 通过 bat 批处理文件自动提交博客代码


&gt; 前面我有文章提到怎么提交本地文件到 github,coding 等远程仓库。每次可以分为三个步骤
&gt;
&gt; - git add \* （添加需要提交的文件，这里全选）
&gt; - git commit -m &#34;提交信息&#34;
&gt; - git push
&gt;
&gt; 但是这样感觉很麻烦每次都要重复输入提交命令和提示信息。
&gt; 这个时候可以用到 windows 批处理 bat 文件 (linux 的话可以用 shell 脚本）。用完发现好用到不行！

&lt;!--more--&gt;

### 新建文本文档

```bat
@echo off
title Commit
git add .
set /p m=Message:
git commit -m &#34;%m%&#34;
git push
```

然后另存为`commit.bat`文件，只要后缀是`bat`就行了。

### 使用

把文件放到你原本需要提交代码的本地文件夹。双击运行，输入提交信息回车即可。

### hexo 博客新姿势

hexo 提交也很麻烦，当然也要批处理一下呀

```bat
hexo clean&amp;&amp;hexo g -d
```

### 其他

#### 死机脚本

(**友情提醒千万不要在真机实验，请在虚拟机运行**)

```bat
start cmd ifconfig
```

另外也说一下 linux 死机命令。fork 炸弹。  
死机无非是耗尽系统资源

```
_(){ _ | _ &amp; }; _
```

这个&amp;指后台运行的意思。

#### 统计文件名

```bat
dir \\?\%1 /a:-d /b /o /p /w &gt;Filelist.txt
```

将需要统计的文件夹拖到 bat 文件上。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/commit-bat/  

