# Hugo 添加知乎卡片式链接 Shortcodes


&lt;!-- markdownlint-disable MD034 --&gt;

{{&lt; link href=&#34;https://github.com/Lruihao/FixIt&#34; content=&#34;卡片式链接已整合到 FixIt 主题&#34; card=true &gt;}}

{{&lt; admonition quote &#34;回顧&#34; &gt;}}
之前在使用 hexo 的時候也有用到，[模仿知乎卡片式链接](/posts/linkcard/)  
 和之前的相比，優化之前是后加載，由 JS 在 瀏覽器處理，  
 使用 shortcodes 方式后，則是在 GO 構建頁面的時候處理，效能上會好很多。  
{{&lt; /admonition &gt;}}

&lt;!--more--&gt;

## 源碼

基於 LoveIt 主題的 Link Shortcodes, 主要改到以下幾個文件，[完整提交記錄](https://github.com/Lruihao/hugo-blog/commit/089c303693e806bff855ecf3fee110baa62b870b)

    assets/css/custom.scss
    assets/css/partial/cardlink.scss          # 卡片式鏈接樣式
    layouts/partials/plugin/cardlink.html     # 卡片式鏈接模板
    layouts/shortcodes/cardlink.html
    static/images/card-link-bg.jpg

## 使用

使用參數见 [FixIt 擴展 Shortcodes - Link](https://fixit.lruihao.cn/zh-cn/theme-documentation-extended-shortcodes/#2-link)

&lt;!-- markdownlint-disable MD046 --&gt;

```md
{{&lt;/* cardlink href=&#34;https://github.com/Lruihao/hugo-blog/commit/089c303693e806bff855ecf3fee110baa62b870b&#34; content=&#34;知乎卡片式链接 Git 記錄&#34; */&gt;}}
```

&gt; :bulb: 注：FixIt {{&lt; version 0.2.12 changed &gt;}} 已合併 shortcode cardlink 到 shortcode link，只需添加 `card=true`

```md
{{&lt;/* link href=&#34;https://github.com/Lruihao/FixIt&#34; content=&#34;卡片式链接已整合到 FixIt 主题&#34; card=true */&gt;}}
```

---

{{&lt; admonition info &#34;信息&#34; &gt;}}
我的博客即将同步至腾讯云 &#43; 社区，邀请大家一同入驻：  
 &lt;https://cloud.tencent.com/developer/support-plan?invite_code=3o5dmfzf0xkwk&gt;
{{&lt; /admonition &gt;}}


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/hugo-cardlink/  

