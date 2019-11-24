---
title: 利用腾讯云为静态页面添加“动态”相册
date: 2019-11-24 10:52:34
tags:
- 腾讯云cos桶
- Frontend
categories:
- Frontend
- JavaScript
---

{% note info no-icon %}
cos桶相册，终于！！终于来了！！，思路参考自[给hexo静态博客添加动态相册功能](https://me.idealli.com/post/73ad4183.html)，修改整理了一下代码，分割功能为函数，并写了注释，更加方便[伸手党](https://github.com/Lruihao/cos-album)，当然别吝啬你的star哦！
**<span style="color: #428bca;">功能虽好，但是还是先友情提示！</span>**
开放API是一个**很危险**的操作，意味着你的cos桶里面的所有资源包括目录结构都暴露的整个世界中，所以建议不要放一些比较私密的照片，保护自己的隐私，提防不良用心之人。下面就开始吧！
{% endnote %}

<!--more-->

# 创建腾讯云cos存储桶
就创建一个COS就好了！有几点注意事项：
1. 权限设置为共有读私有写
2. policy权限设置整个桶的读操作
3. 跨域访问CORS设置，自己随意

# 上传照片
首先我这个cos相册，相册分类就是文件夹分类，所以cos桶里面先新建不同的文件夹，**文件夹名称就是相册名称**，
每个相册里面需要放置一张名称为**“封面.jpg”**的图片作为该相册的封面。
## 上传工具
- cosBrowser GUI工具,桌面/移动版 (推荐)
- coscmd 命令行工具
- PicGo 图床上传工具

*注：代码中设置了不加载根目录的图片，所以COS可以配合PicGo来搭建个人图床，当然也可以上传至指定目录，实现日常的相册上传功能。*

# 食用方式
<a href="https://github.com/Lruihao/cos-album" target="_blank" class="LinkCard">下载地址，别忘点赞哈</a>
下载源码，修改`cos-album.js`中前面的配置信息，xmlLink后不需要添加`/`。
```js config
//需要解析的騰訊云COS桶XML鏈接
let xmlLink = "https://img-xxxxx.cos.ap-chengdu.myqcloud.com";
//添加相册到指定节点下，如: ".myalbum","#myalbum"，默认"body"
let appendTo = "";
//顯示數目,整數
let showNum = 8; 
```
在你的html里面引入`cos-album.css`,`cos-album.js`,`viewport`视个人爱好添加。
hexo中使用css和js都需要做适当调整，配合加密功能使用等等，这里不再展开。
```xml demo
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>cos-album</title>
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <link rel="stylesheet" type="text/css" href="cos-album.css">
    <script type="text/javascript" src="cos-album.js" defer></script>
  </head>
  <body>
    <!-- 你的其他内容，如评论等 -->
  </body>
</html>
```
{% asset_img view.png 大屏显示 %}
{% asset_img mobile.png 手机显示 %}

# feature
- fancybox
- 加密功能
- 分页显示