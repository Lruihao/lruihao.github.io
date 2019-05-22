---
title: 宝塔面板安装ImgURL图床
date: 2019-05-16 20:31:33
tags:
- 开源图床
- imgurl
- 宝塔面板
- html/css
- 他山之石
categories: Web
password:
abstract:
message:
description:
keywords:
- ImgURL图床
- 开源图床
- 图床
- imgurl
- 宝塔面板
- html/css
- img.lruihao.cn
top:
sticky:
author:
permalink:
noreward:
notshow:
norelate:
repost: true
---
{% asset_img 1.png %}
{% note success no-icon %}
ImgURL是一个开源、免费的图床程序，ImgURL 2.x之后对环境要求更高，尤其是ImageMagick组件的支持，很多朋友不清楚怎样安装这个组件，这篇文章分享宝塔面板安装ImgURL 2.x图床的过程（包括ImgURL 2.x需要的各种组件）
[图床预览](https://img.lruihao.cn)  [阅读原文](https://www.xiaoz.me/archives/12081)
{% endnote %}

<!--more-->

# 准备工作
1. 已经安装宝塔面板
2. 在宝塔后台创建一个站点
3. 下载[ImgURL 2.x](https://github.com/helloxz/imgurl)上传到站点根目录并解压

# 设置伪静态
如果您宝塔面板安装的Apache则不需要再设置伪静态，直接跳过这个步骤，如果使用的Nginx环境，请继续往下看。

找到对应的站点 - 点击后面设置按钮 - 伪静态 - 添加下面的伪静态规则
```php 伪静态规则
location / {
try_files $uri $uri/ /index.php?$query_string;
}
location ~* \.(db3|json)$ {
  deny all;
}
location ~* ^/(temp|upload|imgs|data|application|static|system)/.*.(php|php5)$ {
    return 403;
}
```
{% asset_img 2.png %}

# 安装fileinfo & imagemagick
在宝塔后台 - 软件管理 - 找到您站点对应的PHP版本 - 设置PHP - 安装扩展 - 勾选`fileinfo`和`imagemagick`，如下截图。
{% asset_img 3.png %}

# 安装ImgURL 2.x
其它所需扩展宝塔默认已经支持，重点是安装`fileinfo`和`imagemagick`，扩展安装完毕后就可以访问您自己的域名安装ImgURL了，如果正常会看到ImgURL安装界面。
{% asset_img 4.png %}
{% asset_img 5.png %}

# 其它说明
- 如果安装遇到任何问题，请留言反馈或到[3T官方社区](https://ttt.sh/category/6/imgurl%E5%9B%BE%E5%BA%8A)进行反馈
- ImgURL更多使用说明请参考帮助文档：<https://dwz.ovh/imgurldoc>


