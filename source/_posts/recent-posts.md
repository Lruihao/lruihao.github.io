---
title: 在搜索.文章底部.侧栏添加最近文章模块
date: 2019-01-16 17:50:52
tags: hexo
categories: hexo
---

> 首先在主题配置文件添加以下关键字

```
recent_posts:
  enable: true
  search: true
  post: false
  sidebar: false
  icon: history
  title: 近期文章
  layout: block
```

### 侧栏
在 `next/layout/_macro/sidebar.swig` 中的 `if theme.links` 对应的 `endif` 后面。
```
{% if theme.recent_posts.enable and theme.recent_posts.sidebar %}
  <div class="links-of-blogroll motion-element {{ "links-of-blogroll-" + theme.recent_posts.layout  }}">
   <div class="links-of-blogroll-title">
     <i class="fa fa-history fa-{{ theme.recent_posts.icon | lower }}" aria-hidden="true"></i>
     {{ theme.recent_posts.title }}
   </div>
   <ul class="links-of-blogroll-list">
     {% set posts = site.posts.sort('-date') %}
     {% for post in posts.slice('0', '3') %}
       <li>
         <a href="{{ url_for(post.path) }}" title="{{ post.title }}" target="_blank">{{ post.title }}</a>
       </li>
     {% endfor %}
   </ul>
 </div>
{% endif %}
```

### 搜索结果处添加
找到路径`H:\hexo\themes\hexo-theme-next\layout\_partials\search`下`localsearch.swig`文件
把`<div id="local-search-result"></div>`修改成以下内容（这里显示15篇）
```xml
<div id="local-search-result">
  {% if theme.recent_posts.enable and theme.recent_posts.search %}
    <div style="text-align: center;padding: 3px 0 0;">
     <div style="margin-top: 20px;font-size: 18px;font-weight: 600;border-bottom: 1px solid #ccc;">
       <i class="fa fa-{{ theme.recent_posts.icon }}" aria-hidden="true"></i>
       {{ theme.recent_posts.title }}
     </div>
     <ul style="margin: 0;padding: 0;list-style: none;">
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
```xml
{% if not is_index and theme.recent_posts.enable and theme.recent_posts.post %}
  <div style="text-align: center;padding: 10px 0 0;">
   <div style="margin: 60px 0px 10px;font-size: 18px;border-bottom: 1px solid #eee;">
     <i class="fa fa-{{ theme.recent_posts.icon }}" aria-hidden="true"></i>
     {{ theme.recent_posts.title }}
   </div>
   <ul style="margin: 0;padding: 0;list-style: none;font-size: 11px;">
     {% set posts = site.posts.sort('-date') %}
     {% for post in posts.slice('0', '5') %}
         <a href="{{ url_for(post.path) }}" title="{{ post.title }}" target="_blank">{{ post.title }}</a>&emsp;
     {% endfor %}
   </ul>
  </div>
{% endif %}
```

# 其他
可尝试将`-date`改为`-update`