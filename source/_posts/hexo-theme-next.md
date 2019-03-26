---
title: hexo-theme-next @modified LRH
date: 2019-03-21 16:43:19
tags:
- hexo
- 前端
- 博客日志
categories: hexo
password:
abstract:
message:
description:
keywords:
top: 9
sticky:
author:
permalink:
noreward:
notshow:
---

{% note success %}
基于[hexo-theme-next 6.0+](https://github.com/theme-next/hexo-theme-next)的Pisces模板做的DIY扩展性设计。主要是一些custom stlye还有一些第三方的js。修改的地方太多也有点小乱就不提PR了。&emsp;[modified](https://github.com/Lruihao/hexo-theme-next)&emsp;官方Demo => <https://theme-next.org>
记录一下折腾过程，以后备份恢复博客也好方便自己。本文之前的美化修改请见[hexo分类](/categories/hexo/)。
{% endnote %}

<!--more-->
# 初步安装
主要的几个自定义文件
```
config.swig					#主题配置文件 相关账户信息自己注册替换
\layout\custom\head.swig			#在头部自定义加入标签
\layout\custom\google_adsense.swig		#谷歌广告模块，内有注释暂时弃用
\layout\_layout.swig				#主布局
\layout\_macro\post.swig			#文章布局
\layout\_macro\post-copyright.swig		#文章版权
\layout\_macro\siderbar.swig			#侧栏模板
\layout\_third-party\copy-code.swig		#复制按钮
\layout\_partials\comments.swig			#评论主模板
\layout\_partials\footer.swig			#底部模板
\layout\_scripts\custom.swig			#该模块在layout.swig引入用于在body自定义标签
\source\css\_custom\customs.styl		#主要用户自定义样式表
\source\fonts\					#引入了一些我的手写体及外部字体
```

```bash 安装整个改过的主题
cd hexo
git clone https://github.com/Lruihao/hexo-theme-next themes/next
```
# DIY更新

## 复制按钮样式 2019.03.21

<img src="/hexo/hexo-theme-next/lightbtn.png" style="float: left;width:25%;height: 130px;" /><img src="/hexo/hexo-theme-next/nightbtn.png" style="float: left;width:25%;height: 130px;" /><img src="/hexo/hexo-theme-next/flatbtn.png" style="float: left;width:25%;height: 130px;" /><img src="/hexo/hexo-theme-next/3dbtn.png" style="float: left;width:25%;height: 130px;" />
<div style="clear: both;"></div>

> 本来只想简单美化一下变成night样式的，后来写完发现3dbtn也挺喜欢的。

```java config配置
codeblock:
  # Manual define the border radius in codeblock
  # Leave it empty for the default 1
  border_radius: 5
  # Add copy button on codeblock
  copy_button:
    enable: true
    # Show text copy result
    show_result: true
    # Style: 'light,night,flat,3dbtn' is currently available, leave it empty or light is default theme
    style: night
```