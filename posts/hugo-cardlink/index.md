# Hugo 添加知乎卡片式链接 Shortcodes


<!-- markdownlint-disable MD034 -->

{{< link href="https://github.com/Lruihao/FixIt" content="卡片式链接已整合到 FixIt 主题" card=true >}}

{{< admonition quote "回顧" >}}
之前在使用 hexo 的時候也有用到，[模仿知乎卡片式链接](/posts/linkcard/)  
 和之前的相比，優化之前是后加載，由 JS 在 瀏覽器處理，  
 使用 shortcodes 方式后，則是在 GO 構建頁面的時候處理，效能上會好很多。  
{{< /admonition >}}

<!--more-->

## 源碼

基於 LoveIt 主題的 Link Shortcodes, 主要改到以下幾個文件，[完整提交記錄](https://github.com/Lruihao/hugo-blog/commit/089c303693e806bff855ecf3fee110baa62b870b)

    assets/css/custom.scss
    assets/css/partial/cardlink.scss          # 卡片式鏈接樣式
    layouts/partials/plugin/cardlink.html     # 卡片式鏈接模板
    layouts/shortcodes/cardlink.html
    static/images/card-link-bg.jpg

## 使用

使用參數见 [FixIt 擴展 Shortcodes - Link](https://fixit.lruihao.cn/zh-cn/theme-documentation-extended-shortcodes/#2-link)

<!-- markdownlint-disable MD046 -->

```md
{{</* cardlink href="https://github.com/Lruihao/hugo-blog/commit/089c303693e806bff855ecf3fee110baa62b870b" content="知乎卡片式链接 Git 記錄" */>}}
```

> :bulb: 注：FixIt {{< version 0.2.12 changed >}} 已合併 shortcode cardlink 到 shortcode link，只需添加 `card=true`

```md
{{</* link href="https://github.com/Lruihao/FixIt" content="卡片式链接已整合到 FixIt 主题" card=true */>}}
```

---

{{< admonition info "信息" >}}
我的博客即将同步至腾讯云+社区，邀请大家一同入驻：  
 <https://cloud.tencent.com/developer/support-plan?invite_code=3o5dmfzf0xkwk>
{{< /admonition >}}


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/hugo-cardlink/  

