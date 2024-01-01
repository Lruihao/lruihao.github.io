# hexo&#43;github 搭建个人博客及美化


**[更多关于 hexo](/categories/hexo/)**

## 首先

[官方文档](https://hexo.io/zh-cn/docs/index.html) 是我们的第一手资料，也是最好的。
安装 Hexo 相当简单。然而在安装前，你必须检查电脑中是否已安装下列应用程序：

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

## hexo 安装

如果你的电脑中已经安装上述必备程序，那么恭喜你！接下来只需要使用 npm 即可完成 Hexo 的安装。

```bash
npm install -g hexo-cli
```

## 建站

安装 Hexo 完成后，请执行下列命令，Hexo 将会在指定文件夹中新建所需要的文件。

```bash
hexo init &lt;folder&gt;
cd &lt;folder&gt;
npm install
```

&lt;folder&gt;为一个文件夹的名字
新建完成后，指定文件夹的目录如下：

```
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

## 安装 hexo 插件

全装上吧，没事。

```bash
npm install hexo-generator-index --save
npm install hexo-generator-archive --save
npm install hexo-generator-category --save
npm install hexo-generator-tag --save
npm install hexo-server --save
npm install hexo-deployer-git --save
npm install hexo-deployer-heroku --save
npm install hexo-deployer-rsync --save
npm install hexo-deployer-openshift --save
npm install hexo-renderer-marked@0.2 --save
npm install hexo-renderer-stylus@0.2 --save
npm install hexo-generator-feed@1 --save
npm install hexo-generator-sitemap@1 --save
```

## 本地查看效果

执行下面语句，执行完再登录 localhost:4000 查看效果（执行完不要按 Ctrl&#43;C，不然就停止了）

```bash
hexo g
hexo s
```

**其他步骤在这里不赘述，参见 [超详细教程](https://my.oschina.net/ryaneLee/blog/638440)**
**[安卓上搭建 hexo 博客](https://lruihao.cn/posts/termux/)**

## 部署

```bash
hexo g -d
```

部署后我们可以浏览器搜 username.github.io 查看自己的博客效果，比如我的 [lruihao.github.io](https://lruihao.github.io/)

## 美化

**这些美化都写的很详细，我建议你们自己好好看看吧，我也是在这里看到的，如果问我和这里说的是一样的。**

- [hexo 个性化教程](/categories/hexo/)
- [valine 特别鸣谢赵俊 👍](http://www.zhaojun.im)
- [asdfv1929](https://asdfv1929.github.io/tags/Hexo/)
- [hexo 官方主题集合](https://hexo.io/themes/)，~~我用的是 aloha 主题~~，该主题 [官方文档](https://github.com/henryhuang/hexo-theme-aloha/wiki/zh_CN)，**后改用 next 主题 [next 主题](https://theme-next.iissnan.com/)**
- [hexo 官方插件](https://hexo.io/plugins)
  ~~说说我的主题遇到的一些问题，由于这个主题用的人少，所以作者优化的不是很好（next 使用最多），当然也可以反过来说，所以自己美化了一点~~

### 博文置顶

修改 `hero-generator-index` 插件，把文件：`node_modules/hexo-generator-index/lib/generator.js` 内的代码替换为：

```java
&#39;use strict&#39;;
var pagination = require(&#39;hexo-pagination&#39;);
module.exports = function(locals){
  var config = this.config;
  var posts = locals.posts;
    posts.data = posts.data.sort(function(a, b) {
        if(a.top &amp;&amp; b.top) { // 两篇文章 top 都有定义
            if(a.top == b.top) return b.date - a.date; // 若 top 值一样则按照文章日期降序排
            else return b.top - a.top; // 否则按照 top 值降序排
        }
        else if(a.top &amp;&amp; !b.top) { // 以下是只有一篇文章 top 有定义，那么将有 top 的排在前面（这里用异或操作居然不行 233）
            return -1;
        }
        else if(!a.top &amp;&amp; b.top) {
            return 1;
        }
        else return b.date - a.date; // 都没定义按照文章日期降序排
    });
  var paginationDir = config.pagination_dir || &#39;page&#39;;
  return pagination(&#39;&#39;, posts, {
    perPage: config.index_generator.per_page,
    layout: [&#39;index&#39;, &#39;archive&#39;],
    format: paginationDir &#43; &#39;/%d/&#39;,
    data: {
      __index: true
    }
  });
};
```

### about 页面

about 页面可以用 HTML 写，你想怎么写都行，我用的最简单的方法，直接`hexo n page &#34;about&#34;`后，会生成一个 md 文件，也就是后面说的文章，直接写文章就行了。

### 添加搜索，评论，分享

搜索功能真心好用，当文章多起来的时候，标签提供的作用已经很少了，只能简单索引，搜索却能精确查找，这里我用的依旧是最简单的本地站内搜索。
安装`hexo-generator-searchdb`

在站点的根目录下执行以下命令：

```bash
npm install hexo-generator-searchdb --save
```

配置站点配置文件
新增以下内容到任意位置：

```
search:
  path: search.xml
  field: post
  format: html
  limit: 10000
```

配置主题配置文件

```
## Local search
local_search:
  enable: true
```

[algolia 参考文件](https://blog.naaln.com/2016/07/hexo-with-algolia/)  
让搜索引擎找到你的博客，还是看到邱承佳学长博文有写到 [传送门](https://blog.csdn.net/qq_26891045/article/details/51280470)

### 添加访客数，阅读量等

评论有多说（多说好像挂了），计数有不蒜，我用的不蒜子，还有其他的。

#### 文章阅读量

&gt; 以下适合非 next 主题的部分主题，next 主题已经自带，到主题配置文件修改就好了。

打开以下路径在你喜欢的地方添加代码，`\blog\hexo\themes\主题名字、layout\_partial`，找到 `article.ejs`文件

```html
&lt;div align=&#34;left&#34;&gt;
  &lt;span id=&#34;busuanzi_container_page_pv&#34;&gt; 本文总阅读量&lt;span id=&#34;busuanzi_value_page_pv&#34;&gt;&lt;/span&gt;次 &lt;/span&gt;
&lt;/div&gt;
```

#### 站点访问量，访客数

打开以下路径在你喜欢的地方添加代码，`\blog\hexo\themes\主题名字、layout\_partial`，找到 `footer.ejs`文件

```html
&lt;script src=&#34;//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js&#34; async defer&gt;&lt;/script&gt;

&lt;span id=&#34;busuanzi_container_page_pv&#34;&gt; 本站总访问量&lt;span id=&#34;busuanzi_value_site_pv&#34;&gt;&lt;/span&gt;次 | &lt;/span&gt;
&lt;span id=&#34;busuanzi_container_site_uv&#34;&gt; 本站访客数&lt;span id=&#34;busuanzi_value_site_uv&#34;&gt;&lt;/span&gt;人次 &lt;/span&gt;
```

**2018.10.08 更新
不蒜子官网说七牛强制过期域名~~dn-lbstatics.qbox.me~~, 所以 js 文件位置发生改变，改为`busuanzi.ibruce.info`**

## 写文章

hexo 文章用轻量型标签语言 Markdown 编写

- [markdown 入门](https://sspai.com/post/25137)
- [繁体原始文件](https://markdown.tw/)
- [繁体原始文件 github](https://github.com/othree/markdown-syntax-zhtw/blob/master/syntax.md)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/hexobuild/  

