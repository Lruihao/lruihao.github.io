# 利用腾讯云为静态页面添加“动态”相册


&lt;!-- markdownlint-disable MD033 --&gt;

{{&lt; admonition info &gt;}}
cos 桶相册，终于！！终于来了！！，idea 来自 [兰州小红鸡 - 给 hexo 静态博客添加动态相册功能]，  
**&lt;span style=&#34;color: #428bca;&#34;&gt;功能虽好，但是还是先友情提示！&lt;/span&gt;**  
开放 API 是一个**很危险**的操作，意味着你的 cos 桶里面的所有资源包括目录结构都暴露的整个世界中，所以建议不要放一些比较私密的照片，保护自己的隐私，提防不良用心之人。下面就开始吧！
{{&lt; /admonition &gt;}}

&lt;!--more--&gt;

## 创建腾讯云 cos 存储桶

就创建一个 COS 就好了！有几点注意事项：

1. 权限设置为共有读私有写
2. policy 权限设置整个桶的读操作
3. 跨域访问 CORS 设置，自己随意

## 上传照片

首先我这个 cos 相册，相册分类就是文件夹分类，所以 cos 桶里面先新建不同的文件夹，**文件夹名称就是相册名称**，
每个相册里面需要放置一张名称为**“封面.jpg”**的图片作为该相册的封面。

### 上传工具

- **COSBrowser** GUI 工具，桌面/移动版【官方、推荐】
- **COSCMD** 命令行工具【官方】
- **PicGo** 图床上传工具【第三方、推荐】

## 食用方式

&lt;!-- markdownlint-disable MD034 --&gt;

{{&lt; link href=&#34;http://github.com/Lruihao/cos-album&#34; content=&#34;cos album 相册源码下载地址，别忘点赞哈&#34; card=true &gt;}}

1. 首先，下载源码，引入 `cos-album.css` 和 `cos-album.js`
2. 然后，在你的 js 中 new 一个 Cosalbum 对象 ( xmlLink 后不需要添加`/`)

### Step1

```js config
&lt;link rel=&#34;stylesheet&#34; type=&#34;text/css&#34; href=&#34;cos-album.min.css?v=1.1.2&#34;&gt;
&lt;script type=&#34;text/javascript&#34; src=&#34;cos-album.min.js?v=1.1.2&#34;&gt;&lt;/script&gt;
```

### Step2

```js
&lt;script type=&#34;text/javascript&#34;&gt;
  new Cosalbum({
    &#39;xmlLink&#39;: &#39;https://img-xxxxxxxxxx.cos.ap-chengdu.myqcloud.com&#39;,
    &#39;prependTo&#39;: &#39;.cos-album&#39;,
    &#39;viewNum&#39;: 8,
    &#39;imgUrl&#39;: &#39;//img.lruihao.cn&#39;
  });
&lt;/script&gt;
```

### Params

| param     | type   | default                              | description                         |
| :-------- | :----- | :----------------------------------- | :---------------------------------- |
| xmlLink   | String |                                      | 需要解析的騰訊云 COS 桶 XML 鏈接    |
| prependTo | String | &#39;body&#39;                               | 可選解析相冊到某個節點              |
| viewNum   | Number | 4                                    | 每個相冊顯示的照片數目              |
| copyUrl   | String | href                                 | CDN 链接，雙擊複製 URL Since: 1.1.6 |
| imgType   | String | [&#39;jpg&#39;, &#39;jpeg&#39;, &#39;png&#39;, &#39;gif&#39;, &#39;svg&#39;] | 图片類型 Since: 1.1.6               |
| videoType | String | [&#39;mp4&#39;, &#39;mp3&#39;, &#39;avi&#39;, &#39;mov&#39;, &#39;qt&#39;]   | 視頻類型 Since: 1.1.6               |

`viewport` 视个人情况添加。  
hexo 中使用时 css 和 js 都需要做适当调整，配合加密功能使用等等，这里不再展开。  
**_注：代码设定不加载根目录文件，所以可以利用静态服务把源码部署在根目录，配合 PicGo、COSBrowser 上传来搭建个人图床。_**

```html demo
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&#34;UTF-8&#34; /&gt;
    &lt;title&gt;cos-album&lt;/title&gt;
    &lt;!-- &lt;meta name=&#34;viewport&#34; content=&#34;width=device-width, initial-scale=1.0&#34;&gt; --&gt;
    &lt;link rel=&#34;stylesheet&#34; type=&#34;text/css&#34; href=&#34;cos-album.css&#34; /&gt;
    &lt;script type=&#34;text/javascript&#34; src=&#34;cos-album.js&#34; defer&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script type=&#34;text/javascript&#34;&gt;
      new Cosalbum({
        xmlLink: &#39;https://img-xxxxxxxxxx.cos.ap-chengdu.myqcloud.com&#39;,
        prependTo: &#39;.cos-album&#39;,
        viewNum: 8,
        copyUrl: &#39;//img.lruihao.cn&#39;
      });
    &lt;/script&gt;
    &lt;!-- 你的其他内容，如评论等 --&gt;
  &lt;/body&gt;
&lt;/html&gt;
```

&lt;a href=&#34;https://img.lruihao.cn&#34; target=&#34;_blank&#34; class=&#34;LinkCard&#34;&gt;cos-album demo&lt;/a&gt;

![大屏显示](images/view.png)
{{&lt; style &#34;text-align: center;&#34; div &gt;}}
![手机显示](images/mobile.png)
{{&lt; /style &gt;}}

## changelog

- 2020-9-28 22:46
  1. 升級：相冊封裝成類，可以更方便 new 出來
  2. 優化：相冊圖片樣式優化
- 2019-11-24 10:52:34
  修改整理了一下代码，分割功能为函数，并写了注释，更加方便 [伸手党](https://github.com/Lruihao/cos-album)!


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/cos-album/  

