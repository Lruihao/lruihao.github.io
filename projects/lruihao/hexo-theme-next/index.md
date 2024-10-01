# Elegant and Powerful Theme for Hexo.

&lt;h1 align=center&gt;hexo-theme-next&lt;/h1&gt;

&gt; **如无必要，不再更新！（2019.09.13）**  
今晚我做出了一个慎重的决定，由于博主时间精力有限，需要更多的时间来工作和学习。所以我将**放弃对next的主题的自定义修改**，next主题官方已经更新到了7.0&#43;的版本，喜欢next主题风格的朋友可以在github更新。  
我这也算是上古版本了，版本差距实在过大，所以我也将放弃博客使用主题的更新。  
以下仍为当前博客使用主题，lib资源已打包github。

&gt; 基于[hexo-theme-next 6.0&#43;](https://github.com/theme-next/hexo-theme-next)的Pisces模板做的DIY扩展性设计。主要是一些custom stlye还有一些第三方的js。修改的地方太多也有点小乱就不提PR了。&amp;emsp;官方Demo =&gt; &lt;https://theme-next.org&gt;    
记录一下折腾过程，修改内容以[博採眾長](https://lruihao.cn/posts/hexo-theme-next.html)为准，以后备份恢复博客也好方便自己。本文之前的美化修改请见[hexo分类](https://lruihao.cn/categories/hexo/)。
**主题中若有遗漏第三方插件或应用的key及id值等请修改为自己对应的值**

&lt;!--more--&gt;
主要的几个自定义文件
```xml 主要修改路径及文件
_config.swig                                 #主题配置文件 相关账户信息自己注册替换
\layout\custom\head.swig                     #在头部自定义加入标签
\layout\custom\google_adsense.swig           #谷歌广告模块，内有注释暂时弃用
\layout\_layout.swig                         #主布局
\layout\_macro\post.swig                     #文章布局
\layout\_macro\post-copyright.swig           #文章版权
\layout\_macro\siderbar.swig                 #侧栏模板
\layout\_third-party\copy-code.swig          #复制按钮
\layout\_partials\comments.swig              #评论主模板
\layout\_partials\footer.swig                #底部模板#该模块在layout.swig引入，用于在body自定义标签
\layout\_partials\footer_custom.swig         #footer自定义文件
\layout\_third-party\custom.swig             #该模块在layout.swig引入用于在body自定义标签
\source\css\_custom\customs.styl             #主要用户自定义样式表
\source\fonts\                               #引入了一些我的手写体及外部字体
\scripts\qcloudcdn.js                        #腾讯云cos桶刷新缓存的脚本，不需要可删掉[^1]       
```
[^1](https://lruihao.cn/posts/cos-hexo.html#CDN%E5%88%B7%E6%96%B0)

# 初步安装
&gt; 安装整个改过的主题,然后下载相应的[lib资源](https://github.com/Lruihao/hexo-theme-next/releases/tag/v6.9.1)

```bash
cd hexo
git clone https://github.com/Lruihao/hexo-theme-next themes/next

```
![lib.png](https://i.loli.net/2019/04/03/5ca471ec93167.png)

# 更新内容
&gt; 更多自定义详见源码

## links模板
&gt; 自定义友链模板，打开`hexo\themes\next\layout\`新建`links.swig`文件，写下[links.swig](https://github.com/Lruihao/hexo-theme-next/blob/master/layout/links.swig)内容后保存。
- **若未使用懒加载请将模板中的`data-original`属性改为`src`**  
- **若懒加载无法加载预览图请手动添加`src=&#34;/images/loading.gif&#34;`**
- **若fancybox显示alt内容请更换fancybox2或者将alt属值删除**

然后`hexo n page links`新建一个页面文章配置写下如下内容：
```XMl top.md
---
title: 友情链接
layout: links
---
```
然后在`links`页面文件夹下面新建文件夹`_data`，再在里面新建`links.yml`，内容如下
```xml links.yml
- nickname: 博採眾長      
  avatar: http://lruihao.cn/images/avatar.png
  site: http://lruihao.cn 
  info: 一个菜鸟的博客
- nickname:                 #友链名称
  avatar:                   #友链头像
  site:                     #友链地址
  info:                     #友链说明
```

## 备案信息自定义
```xml _config.yml
# -------------------------------------------------------------
# footer_custom Settings
# -------------------------------------------------------------
beian:
  enable: true
  gov: 湘公网安备 43030402000254号
  recordcode: 43030402000254
  icp: 湘ICP备18020535号
```
## 文字抖动特效
```xml 使用方法
&lt;div class=&#34;shaky&#34;&gt;(づ●&#39;◡&#39;●)づ ❥内容区&lt;/div&gt;
```

## 左下角微信公众号
```
\source\css\_custom\customs.styl  
```

## 相关文章收纳
加入H5标签，实现可收纳功能，点击查看详情。

## Chat Services
&gt; 共chatra,tidio,daovoice三个选项，三选一

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
[pdf传送门](https://lruihao.cn/hexo/next-pdf.html)
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
   &lt;a class=&#34;post-title-link&#34; href=&#34;{{ url_for(post.path) }}&#34; itemprop=&#34;url&#34;&gt;
&#43;    {% if post.repost %}
&#43;      &lt;span class=&#34;repost&#34;&gt;转&lt;/span&gt;
&#43;    {% endif %}
     {{ post.title | default(__(&#39;post.untitled&#39;))}}
   &lt;/a&gt;
 {% else -%}
&#43;  {% if post.repost %}
&#43;    &lt;span class=&#34;repost&#34;&gt;转&lt;/span&gt;
&#43;  {% endif %}
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

&gt; 打开`hexo\themes\next\layout`新建[top.swig](https://github.com/Lruihao/hexo-theme-next/blob/master/layout/top.swig)文件，写下如下内容保存：
其中第36行改成你自己的leancloud的appid和appkey,比如我的是在主题配置文件里面的valine配置下，所以我就写成`theme.valine.appid`。和我一样就不需要修改，其他自行配置。

然后`hexo n page top`新建一个页面文章配置写下如下内容，limit表示显示篇数：
```XMl top.md
---
title: 热度
layout: top
limit: 20
---
```

## 复制按钮样式

![lightbtn.png](https://i.loli.net/2019/03/21/5c939bb23853d.png)
![nightbtn.png](https://i.loli.net/2019/03/21/5c939bb229bad.png)
![flatbtn.png](https://i.loli.net/2019/03/21/5c939bb2385c5.png)
![3dbtn.png](https://i.loli.net/2019/03/21/5c939bb238db9.png)

&gt; 本来只想简单美化一下变成night样式的，后来写完发现3dbtn也挺喜欢的。

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
    # Style: &#39;light,night,flat,3dbtn&#39; is currently available, leave it empty or light is default theme
    style: night
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/hexo-theme-next/  

