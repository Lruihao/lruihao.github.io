---
title: hexo next主题添加字数统计（2018）
date: 2018-08-30 13:15:50
tags:
- hexo博客
- 网页字数统计
categories:
- hexo博客
password:
abstract:
message:
description:
top:
author:
permalink:
---

{% note warning %}
**2018/11/1说明
next主题好像更新了，现在自带的可以用了，如果可以用了，以下教程可以忽略！！！**

最近有几个小伙伴问我博客的字数统计怎么实现的，怎么网上的教程不管用啊？一开始我搭建博客的时候也遇到了类似的问题，按照github上wordcount的readme操作后，并没有什么用，我打开post相关配置文件并没有发现发现wordcount这个关键词，next本身似乎也并没有在主题配置文件提供选项(或许是个人原因)，所以只好自己动手加一个了。为了不重复回答问题，先做个原创记录。转载请注明出处。在此抛转引玉，如果有更好的方法请在留言区提出，我会及时更改。同时也希望小伙伴多发扬折腾精神，多专研，少提问，毕竟还是RTFSC大法好！(Read the fucking source code){% endnote %}

<!--more-->
## 安装

[wordcount github](https://github.com/willin/hexo-wordcount)
如果没有安装 hexo-wordcount 插件，先安装该插件：
```
npm i --save hexo-wordcount

# Node 版本7.6.0之前,请安装 2.x 版本 (Node.js v7.6.0 and previous)
npm install hexo-wordcount@2 --save
```
## post添加

打开`hexo\themes\hexo-theme-next\layout\_macro`路径下的post.swig文件，既然没有字数统计那么我们就加一个，简单暴力地直接在阅读数后面加上一条就好了，在文件类搜索关键词`busuanzi`,我用的是不蒜子,如果用的了leancloud的搜leancloud就好了，其他类似。找到这段代码后
```
{% if not is_index and theme.busuanzi_count.enable and theme.busuanzi_count.post_views %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon"
    {% if not theme.post_meta.item_text %} title="{{ __('post.views') }}" {% endif %}>
    <i class="fa fa-{{ theme.busuanzi_count.post_views_icon }}"></i>
    {% if theme.post_meta.item_text %} {{__('post.views') + __('symbol.colon') }} {% endif %}
    <span class="busuanzi-value" id="busuanzi_value_page_pv" ></span>
    </span>
            
{% endif %}
```
在`endif`上面，即本文代码块那个空行处添加以下代码
```
<span class="post-meta-divider">|</span>
<span title="{{ __('post.wordcount') }}"><span class="post-meta-item-icon"><i class="fa fa-file-word-o"></i></span>字数： {{ wordcount(post.content) }}</span>
```

## 全站添加

打开`hexo\themes\hexo-theme-next\layout\_partials`路径下footer.swig文件，在你喜欢的位置添加以下代码
```
<div class="theme-info">
  <div class="powered-by"></div>
  <span class="post-count">全站共 {{ totalcount(site) }} 字</span>
</div>
```


> **教程结束，觉得不错的话可以在右上角进入github上点个star**