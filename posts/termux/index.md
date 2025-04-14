# 在 Android 上搭建 Hexo 博客


> 暑假刚开始的时候放假回家没带电脑，只能玩手机，想折腾一下博客都没有条件，在一个发现一个 app, 卧槽 😱，termux 真的强大！（初始化需要科学上网）安卓手机上的 linux 简直了，在手机就可以搭了一个 hexo 博客，只要在 github 上实现分支管理就可以多终端同步更新了。恕我学疏才浅，还只想到这些！一开始想回校后，折腾一下 hexo-admin 实现类似动态博客一样的多终端管理（手动滑稽），现在发现 termux 这样子的操作也不错嘛，挺装哔 hhhhhh**[部署后的效果](https://lruihao.gitee.io)**

<!--more-->

## 准备

- Termux
- 文件管理器（RE,MT 文件管理器等高级一点的）

## 开始

打开 Termux，输入$`pkg install nodejs`安装 Nodejs，在输入`pkg install git`安装 Git。  
过程会出现一个提示，输入 y 回车确认即可。  
按照 Hexo 官网提示安装 Hexo。

```bash
npm install hexo-cli -g
hexo init blog
cd blog
```

**注意 ssh 配置先安装：**`pkg install openssh`  
然后按照基本操作配置 Hexo，GitHub 或者 gitee,coding 等连上，部署测试一次。  
安装部署插件`npm install hexo-deployer-git --save`，部署`hexo d -g`  
没有问题的话进行下一步。

## 编辑

写文章的话创建 md 文件命令和电脑上一样，文件管理器打开`/data/data/com.termux/files/home/i/source/_posts/` 编辑文章 md 文件。这种方式需要 Root。  
没有 Root 的话可以使用 Vim，网上很多教程。但是这种方式相对来说更麻烦。

## 参考

- [termux 高级终端安装使用配置教程](https://www.sqlsec.com/2018/05/termux.html?yyue=a21bo.50862.201879)
- [使用 Termux 在手机上运行 linux 黑科技](https://www.oyohyee.com/post/Note/Termux)
- [hexo 搭建过程](https://lruihao.cn/hexo%20+%20github%20%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2.html)
- [超详细教程](https://my.oschina.net/ryaneLee/blog/638440)

## 效果图（未连接 github，coding 等）

[效果图 1](https://wx1.sinaimg.cn/mw690/006vSs63gy1ft2a0jo3hmj30u01hcguh.jpg)  
[效果图 2](https://wx4.sinaimg.cn/mw690/006vSs63gy1ft2a0kmm5xj30u01hcn2a.jpg)
[效果图 3](https://wx3.sinaimg.cn/mw690/006vSs63gy1ft2a0lqt61j30u01hctla.jpg)  
[效果图 4](https://wx2.sinaimg.cn/mw690/006vSs63gy1ft2a0mgkm6j30u01hc78l.jpg)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/termux/  

