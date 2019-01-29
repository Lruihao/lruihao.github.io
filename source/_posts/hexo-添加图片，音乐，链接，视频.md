---
title: hexo 添加图片，音乐，链接，视频
date: 2018-05-31 23:19:22
tags: hexo
top:
categories: hexo
---
{% cq %}**如果实在搞得头晕直接去[简书](https://www.jianshu.com/)写文章，再把简书生成的md文章复制过来就好了（简书是个不错的Markdown在线编辑器），还可以去[马克飞象，专为印象笔记打造的 Markdown 编辑器](https://maxiang.io/)，[typora 也是不错的](https://www.typora.io/#)，突然发现[csdn](https://www.csdn.net/)也支持Markdown编译器了**
{% endcq %}
<!--more-->

# 1.首先

刚刚搭博客，很多都不懂，就连插入图片的路径问题都把我整的要命。。。（我用的Sublime Text 3编译器）
下面讲讲：
## 1.1 设置站点配置_config.yml
```
post_asset_folder: true
```
## 1.2 安装插件
```bash
npm install https://github.com/CodeFalling/hexo-asset-image -- save
```
## 1.3 下次再运行hexo n "xxxx"来生成md博文时，下路径
```
/source/_posts
```
文件夹内除了xxxx.md文件还有一个同名的文件夹，在xxxx.md中想引入图片时，先把图片复制到xxxx这个文件夹中，然后只需要在xxxx.md中按照markdown的格式引入图片。

# 2.添加图片
首先大家可以查看hexo官方文档[资源文件夹章节](https://hexo.io/zh-cn/docs/asset-folders.html)
## 2.1 markdown添加
相对路径添加（我被这个相对路径搞得要死，前面各种出错，大家可以对照我的来插入图片...）
```
#直接写图片名就好了，图片实例见下
![kyrie irving](294136.jpg)

#如果改了Permalink就要加上文章名，即同名文件夹名
![kyrie irving](hexo-添加图片，音乐，链接，视频/294136.jpg)
#代码压缩后前面还要加一个/
![kyrie irving](/hexo-添加图片，音乐，链接，视频/294136.jpg)

```
![kyrie irving](:category/hexo-添加图片，音乐，链接，视频/294136.jpg)

## 2.2 插件添加
[传送门](https://mr-houzi.github.io/2017/10/24/Hexo-asset-img/
)
这种方式被很多人诟病，但有时候也不失一种好方式，简单快捷。
还有图片名字显示，不错的。
```
{% asset_img 297787.jpg kyrie irving %}
```
{% asset_img 297787.jpg kyrie irving %}

# 3.音乐
大家可以看[网易云音乐](https://music.163.com)的官网，播放音乐可以生成外链，直接拿来用就行了。iframe插件可以在代码中设置宽高等参数，auto为自动播放。flash不可以自己设置参数。看喜好，随便你。
其他音乐，把插件中的链接替换成要播放的链接就可以了
```
#iframe插件

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=505820138&auto=0&height=66">
</iframe>
```
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=505820138&auto=0&height=66">
</iframe>

```
#flash插件

<embed src="//music.163.com/style/swf/widget.swf?sid=40249713&type=2&auto=0&width=320&height=66" width="340" height="86"  allowNetworking="all">
</embed>
```
<embed src="//music.163.com/style/swf/widget.swf?sid=40249713&type=2&auto=0&width=320&height=66" width="340" height="86"  allowNetworking="all">
</embed>

# 4.添加链接

```
[我的微博](https://weibo.com/liahao)
```
[我的微博](https://weibo.com/liahao)

# 5.添加视频
视频链接最好是打开就是视频的链接（支持youku，YouTube）
可以把视频上传到优酷，腾讯视频，生成外链再拿来用。（上传需要注册和实名认证）
[参考资料](https://www.jianshu.com/p/26a7fc7cc185)

```bash
#我自己拍的一个视频，微博上也有
<iframe 
	height=498 width=510 
	src="https://player.youku.com/embed/XMzY0MzgxNDMyOA==" 
	frameborder=0 allowfullscreen>
</iframe>
```
自拍手写视频，一开始上传到微博上，再链接过来发现不行，视频打开的是那篇微博，还有点一下才可以播放，后来上传到优酷上了，如下。
<iframe 
	height=498 width=510 
	src="https://player.youku.com/embed/XMzY0MzgxNDMyOA==" 
	frameborder=0 allowfullscreen>
</iframe>

# 工具集合
[马克飞象](https://maxiang.io/)
[简书](https://www.jianshu.com/)
**图床**
[图床神器](http://mpic.lzhaofu.cn)
[cloudapp是英文的](https://www.getcloudapp.com/)
[极简图床](http://jiantuku.com/#/)
[SM.MS很不错](https://sm.ms/)
[嗯，图片就交给他了](https://sspai.com/post/40499)（该文写的很清楚）