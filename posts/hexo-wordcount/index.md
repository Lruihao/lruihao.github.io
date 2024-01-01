# hexo next 主题添加字数统计（2018）


{{&lt; admonition warning &gt;}}
**2018/11/1 说明
next 主题好像更新了，现在自带的可以用了，如果可以用了，以下教程可以忽略！！！**

最近有几个小伙伴问我博客的字数统计怎么实现的，怎么网上的教程不管用啊？一开始我搭建博客的时候也遇到了类似的问题，按照 github 上 wordcount 的 readme 操作后，并没有什么用，我打开 post 相关配置文件并没有发现发现 wordcount 这个关键词，next 本身似乎也并没有在主题配置文件提供选项（或许是个人原因），所以只好自己动手加一个了。为了不重复回答问题，先做个原创记录。转载请注明出处。在此抛转引玉，如果有更好的方法请在留言区提出，我会及时更改。同时也希望小伙伴多发扬折腾精神，多专研，少提问，毕竟还是 RTFSC 大法好！(Read the fucking source code)
{{&lt; /admonition &gt;}}

&lt;!--more--&gt;

## 安装

[wordcount github](https://github.com/willin/hexo-wordcount)
如果没有安装 hexo-wordcount 插件，先安装该插件：

```
npm i --save hexo-wordcount

# Node 版本 7.6.0 之前，请安装 2.x 版本 (Node.js v7.6.0 and previous)
npm install hexo-wordcount@2 --save
```

## post 添加

打开`hexo\themes\hexo-theme-next\layout\_macro`路径下的 post.swig 文件，既然没有字数统计那么我们就加一个，简单暴力地直接在阅读数后面加上一条就好了，在文件类搜索关键词`busuanzi`, 我用的是不蒜子，如果用的了 leancloud 的搜 leancloud 就好了，其他类似。找到这段代码后

```
{% if not is_index and theme.busuanzi_count.enable and theme.busuanzi_count.post_views %}
    &lt;span class=&#34;post-meta-divider&#34;&gt;|&lt;/span&gt;
    &lt;span class=&#34;post-meta-item-icon&#34;
    {% if not theme.post_meta.item_text %} title=&#34;{{ __(&#39;post.views&#39;) }}&#34; {% endif %}&gt;
    &lt;i class=&#34;fa fa-{{ theme.busuanzi_count.post_views_icon }}&#34;&gt;&lt;/i&gt;
    {% if theme.post_meta.item_text %} {{__(&#39;post.views&#39;) &#43; __(&#39;symbol.colon&#39;) }} {% endif %}
    &lt;span class=&#34;busuanzi-value&#34; id=&#34;busuanzi_value_page_pv&#34; &gt;&lt;/span&gt;
    &lt;/span&gt;

{% endif %}
```

在`endif`上面，即本文代码块那个空行处添加以下代码

```
&lt;span class=&#34;post-meta-divider&#34;&gt;|&lt;/span&gt;
&lt;span title=&#34;{{ __(&#39;post.wordcount&#39;) }}&#34;&gt;&lt;span class=&#34;post-meta-item-icon&#34;&gt;&lt;i class=&#34;fa fa-file-word-o&#34;&gt;&lt;/i&gt;&lt;/span&gt;字数： {{ wordcount(post.content) }}&lt;/span&gt;
```

## 全站添加

打开`hexo\themes\hexo-theme-next\layout\_partials`路径下 footer.swig 文件，在你喜欢的位置添加以下代码

```
&lt;div class=&#34;theme-info&#34;&gt;
  &lt;div class=&#34;powered-by&#34;&gt;&lt;/div&gt;
  &lt;span class=&#34;post-count&#34;&gt;全站共 {{ totalcount(site) }} 字&lt;/span&gt;
&lt;/div&gt;
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/hexo-wordcount/  

