# Hugo I18n 添加中文繁體翻譯


&gt; 工作上一直常用繁體，最近臨帖也都寫的繁體，所以博客的語言也想換成繁體，但是 LoveIt 主題沒有支持中文繁體。就只好自己添加了。

&lt;!--more--&gt;

&gt; 更新说明：[FixIt](https://github.com/hugo-fixit/FixIt) 主题已支持中文繁體。

## 翻譯

屬於直譯，有些詞語可能並不符合現在臺灣或者香港那邊的說法。比如，`分類`好像臺灣常說`歸類`吧

新建 `i18n/zh-TW.toml`

```toml
# Translations for Traditional Chinese
# 繁體中文的翻譯
# https://gohugo.io/content-management/multilingual/#translation-of-strings

# === baseof ==
[backToTop]
other = &#34;回到頂部&#34;

[viewComments]
other = &#34;查看評論&#34;
# === baseof ==

# === Post ===
[posts]
other = &#34;文章&#34;
# === Post ===

# === Taxonomy ===
[allSome]
other = &#34;所有{{ .Some }}&#34;

[tag]
other = &#34;標籤&#34;

[tags]
other = &#34;標籤&#34;

[category]
other = &#34;分類&#34;

[categories]
other = &#34;分類&#34;

[years]
other = &#34;年度總結&#34;
# === Taxonomy ===

# === Pagination ===
[more]
other = &#34;更多&#34;
# === Pagination ===

# === partials/header.html ===
[selectLanguage]
other = &#34;選擇語言&#34;

[switchTheme]
other = &#34;切換主題&#34;
# === partials/header.html ===

# === partials/footer.html ===
[poweredBySome]
other = &#34;由 {{ .Hugo }} 強力驅動 | 主題 - {{ .Theme }}&#34;
# === partials/footer.html ===

# === partials/comment.html ===
[valineLang]
other = &#34;zh-TW&#34;

[valinePlaceholder]
other = &#34;你的評論 ...&#34;

[facebookLanguageCode]
other = &#34;zh-TW&#34;
# === partials/comment.html ===

# === partials/assets.html ===
[search]
other = &#34;搜索&#34;

[searchPlaceholder]
other = &#34;搜索文章標題或內容 ...&#34;

[clear]
other = &#34;清空&#34;

[cancel]
other = &#34;取消&#34;

[noResultsFound]
other = &#34;沒有找到結果&#34;

[lunrLanguageCode]
other = &#34;zh&#34;

[lunrLanguageLib]
other = &#34;lib/lunr/lunr.zh.js&#34;

[lunrSegmentitLib]
other = &#34;lib/lunr/lunr.segmentit.js&#34;

[copyToClipboard]
other = &#34;複製到剪貼板&#34;

[cookieconsentMessage]
other = &#34;本網站使用 Cookies 來改善您的流覽體驗。&#34;

[cookieconsentDismiss]
other = &#34;同意&#34;

[cookieconsentLink]
other = &#34;瞭解更多&#34;
# === partials/assets.html ===

# === partials/plugin/share.html ===
[shareOn]
other = &#34;分享到&#34;
# === partials/plugin/share.html ===

# === posts/single.html ===
[contents]
other = &#34;目錄&#34;

[publishedOnDate]
other = &#34;發佈於 {{ .Date }}&#34;

[includedInCategories]
other = &#34;收錄於 {{ .Categories }}&#34;

[wordCount]
other = &#34;約 {{ .Count }} 字&#34;

[readingTime]
other = &#34;預計閱讀 {{ .Count }} 分鐘&#34;

[views]
other = &#34;次閱讀&#34;

[author]
other = &#34;作者&#34;

[updatedOnDate]
other = &#34;更新於 {{ .Date }}&#34;

[readMarkdown]
other = &#34;閱讀原始文檔&#34;

[back]
other = &#34;返回&#34;

[home]
other = &#34;主頁&#34;

[readMore]
other = &#34;閱讀全文&#34;
# === posts/single.html ===

# === 404.html ===
[pageNotFound]
other = &#34;頁面沒找到&#34;

[pageNotFoundText]
other = &#34;抱歉，您要查找的頁面不存在。&#34;
# === 404.html ===

# === shortcodes/admonition.html ===
[note]
other = &#34;注意&#34;

[abstract]
other = &#34;摘要&#34;

[info]
other = &#34;信息&#34;

[tip]
other = &#34;技巧&#34;

[success]
other = &#34;成功&#34;

[question]
other = &#34;問題&#34;

[warning]
other = &#34;警告&#34;

[failure]
other = &#34;失敗&#34;

[danger]
other = &#34;危險&#34;

[bug]
other = &#34;Bug&#34;

[example]
other = &#34;示例&#34;

[quote]
other = &#34;引用&#34;
# === shortcodes/admonition.html ===

# === shortcodes/version.html ===
[new]
other = &#34;新增&#34;

[changed]
other = &#34;更改&#34;

[deleted]
other = &#34;刪除&#34;
# === shortcodes/version.html ===
```

## 配置

打開 `config.toml`

```toml
defaultContentLanguage = &#34;zh-tw&#34;
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/hugo-i18n-zh-tw/  

