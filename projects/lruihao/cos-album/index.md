# 解析腾讯云 Cos 桶 Xml 生成相册,同时也是图床的显示页面

# cos-album
[demo](https://github.com/Lruihao/cos-album-demo)

## Step1
```html
&lt;link rel=&#34;stylesheet&#34; type=&#34;text/css&#34; href=&#34;cos-album.min.css?v=1.1.6&#34;&gt;
&lt;script type=&#34;text/javascript&#34; src=&#34;cos-album.min.js?v=1.1.6&#34;&gt;&lt;/script&gt;
```

## Step2
```js
&lt;script type=&#34;text/javascript&#34;&gt;
  new Cosalbum({
    &#39;xmlLink&#39;: &#39;https://img-xxxxxxxxxx.cos.ap-chengdu.myqcloud.com&#39;,
    &#39;prependTo&#39;: &#39;.cos-album&#39;,
    &#39;viewNum&#39;: 8,
    &#39;copyUrl&#39;: &#39;//img.lruihao.cn&#39;
  });
&lt;/script&gt;
```

## Params
| param     | type   | default | description                       |
| :-------- | :----- | :------ | :-------------------------------- |
| xmlLink   | String |         | 需要解析的騰訊云COS桶XML鏈接        |
| prependTo | String | &#39;body&#39;  | 可選解析相冊到某個節點              |
| viewNum   | Number |   4     | 每個相冊顯示的照片數目              |
| copyUrl   | String |  href   | CDN 链接,雙擊複製 URL Since: 1.1.6 |
| imgType   | String | [&#39;jpg&#39;, &#39;jpeg&#39;, &#39;png&#39;, &#39;gif&#39;, &#39;svg&#39;] | 图片類型 Since: 1.1.6 |
| videoType | String | [&#39;mp4&#39;, &#39;mp3&#39;, &#39;avi&#39;, &#39;mov&#39;, &#39;qt&#39;]   | 視頻類型 Since: 1.1.6 |

&gt; [**详细说明**](https://lruihao.cn/posts/cos-album.html)  


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/cos-album/  

