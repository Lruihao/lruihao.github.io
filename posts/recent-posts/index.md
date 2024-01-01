# 在搜索、文章底部、侧栏添加最近文章模块


&gt; 首先在主题配置文件添加以下关键字

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

## 侧栏

在 `next/layout/_macro/sidebar.swig` 中的 `if theme.links` 对应的 `endif` 后面。

```
{% if theme.recent_posts.enable and theme.recent_posts.sidebar %}
  &lt;div class=&#34;links-of-blogroll motion-element {{ &#34;links-of-blogroll-&#34; &#43; theme.recent_posts.layout  }}&#34;&gt;
   &lt;div class=&#34;links-of-blogroll-title&#34;&gt;
     &lt;i class=&#34;fa fa-history fa-{{ theme.recent_posts.icon | lower }}&#34; aria-hidden=&#34;true&#34;&gt;&lt;/i&gt;
     {{ theme.recent_posts.title }}
   &lt;/div&gt;
   &lt;ul class=&#34;links-of-blogroll-list&#34;&gt;
     {% set posts = site.posts.sort(&#39;-date&#39;) %}
     {% for post in posts.slice(&#39;0&#39;, &#39;3&#39;) %}
       &lt;li&gt;
         &lt;a href=&#34;{{ url_for(post.path) }}&#34; title=&#34;{{ post.title }}&#34; target=&#34;_blank&#34;&gt;{{ post.title }}&lt;/a&gt;
       &lt;/li&gt;
     {% endfor %}
   &lt;/ul&gt;
 &lt;/div&gt;
{% endif %}
```

## 搜索结果处添加

找到路径`H:\hexo\themes\hexo-theme-next\layout\_partials\search`下`localsearch.swig`文件  
把`&lt;div id=&#34;local-search-result&#34;&gt;&lt;/div&gt;`修改成以下内容（这里显示 15 篇）

```xml
&lt;div id=&#34;local-search-result&#34;&gt;
  {% if theme.recent_posts.enable and theme.recent_posts.search %}
    &lt;div style=&#34;text-align: center;padding: 3px 0 0;&#34;&gt;
     &lt;div style=&#34;margin-top: 20px;font-size: 18px;font-weight: 600;border-bottom: 1px solid #ccc;&#34;&gt;
       &lt;i class=&#34;fa fa-{{ theme.recent_posts.icon }}&#34; aria-hidden=&#34;true&#34;&gt;&lt;/i&gt;
       {{ theme.recent_posts.title }}
     &lt;/div&gt;
     &lt;ul style=&#34;margin: 0;padding: 0;list-style: none;&#34;&gt;
       {% set posts = site.posts.sort(&#39;-date&#39;) %}
       {% for post in posts.slice(&#39;0&#39;, &#39;15&#39;) %}
         &lt;li&gt;
           &lt;a href=&#34;{{ url_for(post.path) }}&#34; title=&#34;{{ post.title }}&#34; target=&#34;_blank&#34;&gt;{{ post.title }}&lt;/a&gt;
         &lt;/li&gt;
       {% endfor %}
     &lt;/ul&gt;
    &lt;/div&gt;
  {% endif %}
&lt;/div&gt;
```

## 文章尾部添加

把代码加在`H:\hexo\themes\hexo-theme-next\layout\_macro\post.swig`里的相应位置（我加在 tags 后）

```xml
{% if not is_index and theme.recent_posts.enable and theme.recent_posts.post %}
  &lt;div style=&#34;text-align: center;padding: 10px 0 0;&#34;&gt;
   &lt;div style=&#34;margin: 60px 0px 10px;font-size: 18px;border-bottom: 1px solid #eee;&#34;&gt;
     &lt;i class=&#34;fa fa-{{ theme.recent_posts.icon }}&#34; aria-hidden=&#34;true&#34;&gt;&lt;/i&gt;
     {{ theme.recent_posts.title }}
   &lt;/div&gt;
   &lt;ul style=&#34;margin: 0;padding: 0;list-style: none;font-size: 11px;&#34;&gt;
     {% set posts = site.posts.sort(&#39;-date&#39;) %}
     {% for post in posts.slice(&#39;0&#39;, &#39;5&#39;) %}
         &lt;a href=&#34;{{ url_for(post.path) }}&#34; title=&#34;{{ post.title }}&#34; target=&#34;_blank&#34;&gt;{{ post.title }}&lt;/a&gt;&amp;emsp;
     {% endfor %}
   &lt;/ul&gt;
  &lt;/div&gt;
{% endif %}
```

## 其他

可尝试将`-date`改为`-update`


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/recent-posts/  

