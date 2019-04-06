---
title: 档案
date: 2018-04-05 12:13:23
comments: false
description: <span id="busuanzi_container_page_pv" title="访问量"><i class="fa fa-fw fa-rocket"></i> <span id="busuanzi_value_page_pv"></span></span>
---

<a class="gh-btn" id="gh-btn" href="https://github.com/Lruihao/Lruihao.github.io/" target="_blank" aria-label="Star on GitHub"><span class="gh-ico" aria-hidden="true"></span><span class="gh-text" id="gh-text"></span></a>
<iframe align="right" style="margin-left: 2px; margin-bottom:-5px;" frameborder="0" scrolling="0" width="100px" height="30px" src="https://ghbtns.com/github-btn.html?user=Lruihao&amp;repo=Lruihao.github.io&amp;type=star&amp;count=true">
</iframe>

## 简介

<img src="https://i.loli.net/2018/06/15/5b23baf794e4a.png" width="400" height="200" align="left">代码托管在coding 和github上，实现国内走coding(**后托管于腾讯云cos桶**)，国外走github路线。你可以通过以下方式访问：
* https://www.lruihao.cn
* https://lruihao.cn
* https://lruihao.github.io
* https://liruihao.coding.me
<div style="clear: both;"></div>
---
如果你在浏览博客的时候觉得颜色太亮，可以尝试调节网站亮度

|开关|调节|
|:-:|:-:|
|<li>Alt+Z: 打开夜间模式</li><li>Alt+X: 关闭夜间模式</li>|<li>Alt+↑: 增加亮度</li><li>Alt+↓: 降低亮度</li>|
---
**[RUI豪小栈](https://www.lruihao.cn)**

为了区别于博客，我重新在搭了一个静态站点用来放一些实验性尝试，里面放了一些小游戏，自己搭的平时用来上机用的网盘，还有自己写的字体等等。
* [博採眾長app](/通用/fas-app.html)
* [个人网盘](https://pan.lruihao.cn)
* [游戏馆](https://www.lruihao.cn/games)
* 留影册    
...

## 博客日志
<li>2019.03.21 \-\- `pan.lruihao.cn`已退役，根据github开源宅音乐搭建了[宅音乐](https://player.lruihao.cn)播放器插件</li>
<li>2019.01.22 \-\- 更换腾讯云对象存储</li>
可能存储方式的不同，每个目录的访问必须以`/`结尾。比如`lruihao.cn/about`是无法访问的，得访问`lruihao.cn/about/`
<li>2019.01.12 \-\- 博客UV过万</li>
<img src="index/uv10k.png" align="left" />
<div style="clear: both;"></div>
<li>2018.10.29 \-\- 网站ICP和公安备案完成</li>
<li>2018.08.28 \-\- 第一次收到[france](https://postgres.fun)支持 [赞助记录](/donators.html)</li>
<li>2018.09.05 \-\- 博客一百天，PV过万</li>
<img src="/posts/day-100/100.png" align="left" />
<div style="clear: both;"></div>
<li>2018.06 ~ 2018.09 \-\- 接入百度站长，seo优化，加入评论、客服、访客统计等 创建[RUI豪小栈](https://www.lruihao.cn)</li>
<li>2018.05.28 20:01:01 \-\- 博客诞生 [博客搭建及美化教程](/categories/hexo/)</li>

---
## BUGs
> 日常BUG记录，欢迎大家找出其他bug!

### CPU占用过高
前两天收到网友的反馈，说我的网站打开CPU占用80%多，我以前都没想过这些性能问题，突然出现就慌了，一开始怀疑是js的原因，后来又有人反馈截图说他的电脑上正常，不过在win10的电脑上就很高，后来在浏览器中吧js加载关掉就正常了，说明就是js造成的，虽然不懂js，不过为了解决这个致命的问题还是硬着头皮，在翻next源码中，自己用过的js,翻了一整天没找出结果，期间还麻烦晓剑帮我找了。知道今天又找了一上午才找到，罪魁祸首，是next提供的动态壁纸，后来测试了一下，那些动态壁纸都会让CPU飚起来，不知道是我改了什么源码的原因，还是静态壁纸和动态壁纸不能一起用的原因。不过总之这个问题吧已经解决，开心。
![浏览器web工具性能分析](https://i.loli.net/2018/08/28/5b850620bd736.png)
![解决](https://i.loli.net/2018/08/28/5b850620c4b2c.png)

### 杂七杂八
* 使用hexo-all-minifier压缩博文，导致打赏button失效；原因：压缩倒是button那块div，有一个叫`'QR'`的id,压缩后变成小写`' qr'`
解决方法：
	1. 取消html或js压缩；或者取消压缩打赏文件reward.swig（未测试）；
	2. 打开reward.swig把第三行中的`document.getElementById('QR');`改为`document.getElementById(&quot;QR&quot;);`；

### 评论

* gitalk评论插件，由于我没有对文章标题id进行md5等转码，所以在较长标题博客下可能造成github登录失败等原因以至于无法评论，所以评论不太友好，大佬略过，~~这个bug目前我不打算修复~~(我换了gitment评论)，懒！然后如果实在有啥问题可以在右边栏的在线客服那里在线联系我，也可以加上面的联系方式联系我！（我也是小白哈哈哈哈哈！）

* gitment bug，解决gitalk大部分问题，但是还是存在以下问题：
 * 手机浏览器无法登陆的问题，目测手机浏览器对文章标题转码导致。解决方案：去一篇标题短的文章下面登陆再回来评论。
 * 文章标题还是不能太长，我并没有将id做转码缩短处理，只是对github中文lable简单地处理了一下。

* gitment在我双线部署后，被我抛弃了，其实我挺喜欢gitment的Markdown语法功能的，但是比较适合github.io这种域名的，主要是登陆问题，我觉得是返回值啥的，gitment的仓库在github上。就这样吧，用来必力评论吧，虽然是韩国的，加载会慢点，不过没关系，反正没人评论，都是我自己记录，足够了！！！

### 彩蛋 

* ~~[www.lruihao.cn](https://www.lruihao.cn)和[lruihao.cn](https://lruihao.cn)的评论是不一样的~~
* ~~在留言页面地址后面加/index.html  ,这个的隐藏评论区hhhh，同样有第一种的区别~~
* 无论哪个域名，在主页后加“ /love/ ”,可以看到我和女票的一些小故事当然有密码的hhhh
* 由于入口隐藏，所以比较隐蔽，算彩蛋也算bug吧，有时候利用这些bug写写东西也不错，就这样吧！
* 按下F12打开浏览器调试工具，在console可以看到一些“有趣”的东西- _ -!
* 网站背景亮度调节
	1. Alt+Z: 打开夜间模式
	2. Alt+X: 关闭
	3. Alt+↑: 增加亮度
	4. Alt+↓: 降低亮度

> 还有好多好多bug，有bug就有bug吧，不改了，越改越多::> _ <::