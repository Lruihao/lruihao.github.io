---
title: 在搜索.文章底部.侧栏添加最近文章模块
date: 2019-01-16 17:50:52
tags: hexo
categories: hexo
password:
abstract:
message:
description:
top:
author:
permalink:
noreward:
notshow:
---

> 首先在主题配置文件添加以下关键字

```
recent_posts_icon: history
recent_posts_title: 近期文章
recent_posts_layout: block
recent_posts: true
```

### 搜索结果处添加
找到路径`H:\hexo\themes\hexo-theme-next\layout\_partials\search`下`localsearch.swig`文件
把`<div id="local-search-result"></div>`修改成以下内容（这里显示15篇）
```
<div id="local-search-result">
    {% if theme.recent_posts %}
      <div class="links-of-blogroll motion-element {{ "links-of-blogroll-" + theme.recent_posts_layout  }}">
       <div class="links-of-blogroll-title">
         <i class="fa fa-{{ theme.recent_posts_icon }}" aria-hidden="true"></i>
         {{ theme.recent_posts_title }}
       </div>
       <ul class="links-of-blogroll-list">
         {% set posts = site.posts.sort('-date') %}
         {% for post in posts.slice('0', '15') %}
           <li>
             <a href="{{ url_for(post.path) }}" title="{{ post.title }}" target="_blank">{{ post.title }}</a>
           </li>
         {% endfor %}
       </ul>
      </div>
    {% endif %}
  </div>
```

### 文章尾部添加
把代码加在`H:\hexo\themes\hexo-theme-next\layout\_macro\post.swig`里的相应位置（我加在tags后）
```
{% if theme.recent_posts not is_index %}
      <div class="links-of-blogroll motion-element {{ "links-of-blogroll-" + theme.recent_posts_layout  }}">
       <div class="links-of-blogroll-title">
         <i class="fa fa-{{ theme.recent_posts_icon }}" aria-hidden="true"></i>
         {{ theme.recent_posts_title }}
       </div>
       <ul class="links-of-blogroll-list">
         {% set posts = site.posts.sort('-date') %}
         {% for post in posts.slice('0', '10') %}
             <a href="{{ url_for(post.path) }}" title="{{ post.title }}" target="_blank">{{ post.title }}</a>
         {% endfor %}
       </ul>
      </div>
    {% endif %}
```

### 侧栏
[参考链接](https://postgres.fun/20190116150800.html)

> 相应的还可以按更新日期排序update等。