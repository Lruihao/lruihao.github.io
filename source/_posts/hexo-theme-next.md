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
- hexo
- 前端
- 博客日志
- hexo 主题
- hexo theme
- hexo github
- hexo next
- hexo 博客
- hexo next主题美化
top:
sticky:
author:
permalink:
noreward:
notshow:
photos:
- /posts/hexo-theme-next/next.png
---

{% note success %}
基于[hexo-theme-next 6.0+](https://github.com/theme-next/hexo-theme-next)的Pisces模板做的DIY扩展性设计（部分兼容next其他几种模板）。主要是一些custom style还有一些第三方的js。修改的地方太多也有点小乱就不提PR了。
[modified](https://github.com/Lruihao/hexo-theme-next)&emsp;官方Demo => <https://theme-next.org>
记录一下折腾过程，以后备份恢复博客也好方便自己。本文之前的美化修改请见[hexo分类](/categories/posts/)。
**主题中若有遗漏第三方插件或应用的key及id值等请修改为自己对应的值**
{% endnote %}

<!--more-->
主要的几个自定义文件
```xml 主要修改路径及文件
_config.swig					#主题配置文件 相关账户信息自己注册替换
\layout\custom\head.swig			#在头部自定义加入标签
\layout\custom\google_adsense.swig		#谷歌广告模块，内有注释暂时弃用
\layout\_layout.swig				#主布局
\layout\_macro\post.swig			#文章布局
\layout\_macro\post-copyright.swig		#文章版权
\layout\_macro\siderbar.swig			#侧栏模板
\layout\_third-party\copy-code.swig		#复制按钮
\layout\_partials\comments.swig			#评论主模板
\layout\_partials\footer.swig			#底部模板#该模块在layout.swig引入用于在body自定义标签
\layout\_third-party\custom.swig		#该模块在layout.swig引入用于在body自定义标签
\source\css\_custom\customs.styl		#主要用户自定义样式表
\source\fonts\					#引入了一些我的手写体及外部字体
\scripts\qcloudcdn.js				#腾讯云cos桶刷新缓存的脚本，不需要可删掉[^1]
\layout\_partials\footer_custom.swig		#footer自定义文件
```
[^1](https://lruihao.cn/posts/cos-hexo.html#CDN%E5%88%B7%E6%96%B0)

# 初步安装
```bash 安装整个改过的主题,然后下载相应的lib资源
cd hexo
git clone https://github.com/Lruihao/hexo-theme-next themes/next
```
{% asset_img lib.png lib资源 %}

# 更新内容
> 更多自定义详见源码

## 备案信息自定义
```xml _config.yml
# -------------------------------------------------------------
# footer_custom Settings
# ---------------------------------------------------------------
beian:
  enable: true
  gov: 湘公网安备 43030402000254号
  recordcode: 43030402000254
  icp: 湘ICP备18020535号
```
## 文字抖动特效
<div class="shaky">(づ●'◡'●)づ ❥内容区</div>

```xml 使用方法
<div class="shaky">(づ●'◡'●)づ ❥内容区</div>
```

## 左下角微信公众号
```xml 替换为自己的二维码
\source\css\_custom\customs.styl  
```

## 相关文章收纳
加入H5标签，实现可收纳功能，点击查看详情。

## Chat Services
> 共chatra,tidio,daovoice三个选项，三选一

```swig _config.swig
# Chatra Support
# See: https://chatra.io
# Dashboard: https://app.chatra.io/settings/general
chatra:
  enable: false
  async: true
  id: # visit Dashboard to get your ChatraID
  #embed: # unfinished experimental feature for developers, See: https://chatra.io/help/api/#injectto

# Tidio Support
# See: https://www.tidiochat.com
# Dashboard: https://www.tidiochat.com/panel/dashboard
tidio:
  enable: false
  key: # Public Key, get it from Dashboard, See: https://www.tidiochat.com/panel/settings/developer

#在线客服
daovoice: true
daovoice_app_id: xxxx   # http://www.daovoice.io/
```

## pdf和Mermaid解析模块
[pdf传送门](https://lruihao.cn/posts/next-pdf.html)
```swig config.swig
pdf:
  enable: false
  # Default height
  height: 500px
  pdfobject:
    cdn: //cdn.jsdelivr.net/npm/pdfobject@2/pdfobject.min.js
    #cdn: //cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js

# Mermaid tag
mermaid:
  enable: false
  # Available themes: default | dark | forest | neutral
  theme: forest
  cdn: //cdn.jsdelivr.net/npm/mermaid@8/dist/mermaid.min.js
  #cdn: //cdnjs.cloudflare.com/ajax/libs/mermaid/8.0.0/mermaid.min.js
```

## 模仿csdn转发样式
```diff post.swig主要修改
...
   <a class="post-title-link" href="{{ url_for(post.path) }}" itemprop="url">
+    {% if post.repost %}
+      <span class="repost">转</span>
+    {% endif %}
     {{ post.title | default(__('post.untitled'))}}
   </a>
 {% else -%}
+  {% if post.repost %}
+    <span class="repost">转</span>
+  {% endif %}
   {{- post.title -}}
...
```

```css css样式
.repost {
  color: #5acc79;
  border: 1px solid #e7f4df;
  border-radius: 20px;
  padding: 2px 5px;
  font-size: 15px;
  font-weight: 500;
}
```

```xml post使用
---
title: xxxx
repost: true
---
```
[预览](https://lruihao.cn/tags/他山之石/)


## 热度页面

> 打开`hexo\themes\next\layout`新建`top.swig`文件，写下如下内容保存：
其中第36行改成你自己的leancloud的appid和appkey,比如我的是在主题配置文件里面的valine配置下，所以我就写成`theme.valine.appid`。和我一样就不需要修改，其他自行配置。

```XML top.swig
{% extends '_layout.swig' %}
{% import '_macro/sidebar.swig' as sidebar_template %}

  {% block title %}{#
  #}{% set page_title_suffix = ' | ' + title %}{#

  #}{% if page.type === "categories" and not page.title %}{#
    #}{{ __('title.category') + page_title_suffix }}{#
  #}{% elif page.type === "tags" and not page.title %}{#
    #}{{ __('title.tag') + page_title_suffix }}{#

  #}{% elif page.type === "photos" and not page.title %}{#
  #}{{ __('title.photos') + page_title_suffix }}{#

  #}{% else %}{#
    #}{{ page.title + page_title_suffix }}{#
  #}{% endif %}{#
#}{% endblock %}

{% block page_class %}page-post-detail{% endblock %}

{% block content %}

  <div id="posts" class="posts-expand">
    {##################}
    {### PAGE BLOCK ###}
    {##################}
    <div class="post-block page">
      {% include '_partials/page-header.swig' %}
      {#################}
      {### PAGE BODY ###}
      {#################}

      <div id="top"></div>
      <script src="https://cdn1.lncld.net/static/js/av-core-mini-0.6.4.js"></script>
      <script>AV.initialize("{{ theme.valine.appid }}", "{{ theme.valine.appkey }}");</script>
      <script type="text/javascript">
        setTimeout(function(){
          var time=0
          var title=""
          var url=""
          var query = new AV.Query('Counter');
          query.notEqualTo('id',0);
          query.descending('time');
          query.limit({{ page.limit }}); //设置篇数
          query.find().then(function (todo) {
            for (var i=0;i<{{ page.limit }};i++){
              var result=todo[i].attributes;
              time=result.time;
              title=result.title;
              category=result.categories
              url=result.url;
              var content="<p>"+"【文章热度:"+time+"℃】"+"<a href='"+"{{ config.url }}"+""+url+"'>"+title+"</a>"+"</p>";
              document.getElementById("top").innerHTML+=content
            }
          }, function (error) {
            console.log("error");
          });
        },1000)
      </script>

      <div class="post-body{% if theme.han %} han-init-context{% endif %}{% if page.direction && page.direction.toLowerCase() === 'rtl' %} rtl{% endif %}"></div>
      
      {#####################}
      {### END PAGE BODY ###}
      {#####################}
    </div>
    {% include '_partials/breadcrumb.swig' %}
    {######################}
    {### END PAGE BLOCK ###}
    {######################}
  </div>

{% endblock %}

{% block sidebar %}
  {{ sidebar_template.render(false) }}
{% endblock %}

{% block script_extra %}
  {% include '_scripts/pages/post-details.swig' %}
{% endblock %}
```

然后`hexo n page top`新建一个页面文章配置写下如下内容，limit表示显示篇数：
```XMl top.md
---
title: 热度
layout: top
limit: 20
---
```
## 复制按钮样式

<img src="/posts/hexo-theme-next/lightbtn.png" style="float: left;width:25%;height: 130px;" /><img src="/posts/hexo-theme-next/nightbtn.png" style="float: left;width:25%;height: 130px;" /><img src="/posts/hexo-theme-next/flatbtn.png" style="float: left;width:25%;height: 130px;" /><img src="/posts/hexo-theme-next/3dbtn.png" style="float: left;width:25%;height: 130px;" />
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