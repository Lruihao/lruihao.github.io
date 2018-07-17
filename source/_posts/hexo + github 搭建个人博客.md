---
title: hexo + github 搭建个人博客
date: 2018-06-01 14:34:23
tags: hexo博客
categories: hexo博客
top:
---
# 首先
[官方文档](https://hexo.io/zh-cn/docs/index.html)是我们的第一手资料，也是最好的。
安装 Hexo 相当简单。然而在安装前，您必须检查电脑中是否已安装下列应用程序：
· [Node.js](https://nodejs.org/en/)
· [Git](https://git-scm.com/)

# hexo安装
如果您的电脑中已经安装上述必备程序，那么恭喜您！接下来只需要使用 npm 即可完成 Hexo 的安装。
```bash
$ npm install -g hexo-cli
```
# 建站
安装 Hexo 完成后，请执行下列命令，Hexo 将会在指定文件夹中新建所需要的文件。
```bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```
新建完成后，指定文件夹的目录如下：
```
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```
# 安装hexo插件
全装上吧，没事。。。
```bash
$ npm install hexo-generator-index --save
$ npm install hexo-generator-archive --save
$ npm install hexo-generator-category --save
$ npm install hexo-generator-tag --save
$ npm install hexo-server --save
$ npm install hexo-deployer-git --save
$ npm install hexo-deployer-heroku --save
$ npm install hexo-deployer-rsync --save
$ npm install hexo-deployer-openshift --save
$ npm install hexo-renderer-marked@0.2 --save
$ npm install hexo-renderer-stylus@0.2 --save
$ npm install hexo-generator-feed@1 --save
$ npm install hexo-generator-sitemap@1 --save
```
# 本地查看效果
执行下面语句，执行完再登录localhost:4000查看效果（执行完不要按Ctrl+C，不然就停止了）
```bash
$ hexo g
$ hexo s
```
其他步骤在这里不赘述，参见[超详细教程](https://my.oschina.net/ryaneLee/blog/638440)
[传送门](http://hjxandhmr.github.io/2016/04/15/hello-hexo/?utm_source=qq&utm_medium=social&utm_oi=755527439601373184)

# 部署
```bash
$ hexo g -d
```
部署后我们可以浏览器搜 username.github.io 查看自己的博客效果，，比如我的[lruihao.github.io](https://lruihao.github.io/)

# 美化
[美化很好的一个博主asdfv1929](https://asdfv1929.github.io/tags/Hexo/)
[hexo官方主题集合](https://hexo.io/themes/)，我用的是aloha主题，该主题[官方文档](https://github.com/henryhuang/hexo-theme-aloha/wiki/zh_CN)
[hexo个性化教程](https://blog.csdn.net/qq_33699981/article/details/72716951)
说说我的主题遇到的一些问题，由于这个主题用的人少，所以作者优化的不是很好（next使用最多），当然也可以反过来说，所以自己美化了一点
## about页面

about页面可以用HTML写，你想怎么写都行，我用的最简单的方法，直接`hexo n page "about"`后，会生成一个md文件，也就是后面说的文章，直接写文章就行了。

## 添加搜索，评论，分享
[参考](https://blog.csdn.net/jiaqiangbandongg/article/details/77151699)
[algolia参考文件](https://blog.naaln.com/2016/07/hexo-with-algolia/)
[邱承佳学长博文](http://qiuchengjia.cn/2016/06/06/SEO/hexo做SEO%EF%BC%88添加sitemap和baidusitemap%EF%BC%89/)
让搜索引擎找到你的博客，还是看到邱承佳学长博文有写到[传送门](https://blog.csdn.net/qq_26891045/article/details/51280470)

## 添加访客数，阅读量等
评论有多说（多说好像挂了），计数有不蒜，我用的不蒜子，还有其他的。。。

###  文章阅读量
打开以下路径在你喜欢的地方添加代码，\blog\hexo\themes\主题名字\layout\_partial，找到article.ejs文件
```bash
<div align="left"><span id="busuanzi_container_page_pv">
      本文总阅读量<span id="busuanzi_value_page_pv"></span>次
    </span>
</div>
```
### 站点访问量，访客数
打开以下路径在你喜欢的地方添加代码，\blog\hexo\themes\主题名字\layout\_partial，找到footer.ejs文件
```bash
<script async src="//dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js">
</script>

<span id="busuanzi_container_page_pv">
    本站总访问量<span id="busuanzi_value_site_pv"></span>次  |  
</span>
<span id="busuanzi_container_site_uv">
	本站访客数<span id="busuanzi_value_site_uv"></span>人次
</span>
```

# 写文章
hexo文章用轻量型标签语言Markdown编写
·[markdown入门](https://sspai.com/post/25137)
·[繁体原始文件](https://markdown.tw/)
·[繁体原始文件github](https://github.com/othree/markdown-syntax-zhtw/blob/master/syntax.md)
·[简体中文文件](http://wowubuntu.com/markdown/#editor)