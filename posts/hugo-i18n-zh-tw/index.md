# Hugo I18n 添加中文繁體翻譯


> 工作上一直常用繁體，最近臨帖也都寫的繁體，所以博客的語言也想換成繁體，但是 LoveIt 主題沒有支持中文繁體。就只好自己添加了。

<!--more-->

> 更新说明：[FixIt](https://github.com/hugo-fixit/FixIt) 主题已支持中文繁體。

## 翻譯

屬於直譯，有些詞語可能並不符合現在臺灣或者香港那邊的說法。比如，`分類`好像臺灣常說`歸類`吧

新建 `i18n/zh-TW.toml`

```toml
# Translations for Traditional Chinese
# 繁體中文的翻譯
# https://gohugo.io/content-management/multilingual/#translation-of-strings

# === baseof ==
[backToTop]
other = "回到頂部"

[viewComments]
other = "查看評論"
# === baseof ==

# === Post ===
[posts]
other = "文章"
# === Post ===

# === Taxonomy ===
[allSome]
other = "所有{{ .Some }}"

[tag]
other = "標籤"

[tags]
other = "標籤"

[category]
other = "分類"

[categories]
other = "分類"

[years]
other = "年度總結"
# === Taxonomy ===

# === Pagination ===
[more]
other = "更多"
# === Pagination ===

# === partials/header.html ===
[selectLanguage]
other = "選擇語言"

[switchTheme]
other = "切換主題"
# === partials/header.html ===

# === partials/footer.html ===
[poweredBySome]
other = "由 {{ .Hugo }} 強力驅動 | 主題 - {{ .Theme }}"
# === partials/footer.html ===

# === partials/comment.html ===
[valineLang]
other = "zh-TW"

[valinePlaceholder]
other = "你的評論 ..."

[facebookLanguageCode]
other = "zh-TW"
# === partials/comment.html ===

# === partials/assets.html ===
[search]
other = "搜索"

[searchPlaceholder]
other = "搜索文章標題或內容 ..."

[clear]
other = "清空"

[cancel]
other = "取消"

[noResultsFound]
other = "沒有找到結果"

[lunrLanguageCode]
other = "zh"

[lunrLanguageLib]
other = "lib/lunr/lunr.zh.js"

[lunrSegmentitLib]
other = "lib/lunr/lunr.segmentit.js"

[copyToClipboard]
other = "複製到剪貼板"

[cookieconsentMessage]
other = "本網站使用 Cookies 來改善您的流覽體驗。"

[cookieconsentDismiss]
other = "同意"

[cookieconsentLink]
other = "瞭解更多"
# === partials/assets.html ===

# === partials/plugin/share.html ===
[shareOn]
other = "分享到"
# === partials/plugin/share.html ===

# === posts/single.html ===
[contents]
other = "目錄"

[publishedOnDate]
other = "發佈於 {{ .Date }}"

[includedInCategories]
other = "收錄於 {{ .Categories }}"

[wordCount]
other = "約 {{ .Count }} 字"

[readingTime]
other = "預計閱讀 {{ .Count }} 分鐘"

[views]
other = "次閱讀"

[author]
other = "作者"

[updatedOnDate]
other = "更新於 {{ .Date }}"

[readMarkdown]
other = "閱讀原始文檔"

[back]
other = "返回"

[home]
other = "主頁"

[readMore]
other = "閱讀全文"
# === posts/single.html ===

# === 404.html ===
[pageNotFound]
other = "頁面沒找到"

[pageNotFoundText]
other = "抱歉，您要查找的頁面不存在。"
# === 404.html ===

# === shortcodes/admonition.html ===
[note]
other = "注意"

[abstract]
other = "摘要"

[info]
other = "信息"

[tip]
other = "技巧"

[success]
other = "成功"

[question]
other = "問題"

[warning]
other = "警告"

[failure]
other = "失敗"

[danger]
other = "危險"

[bug]
other = "Bug"

[example]
other = "示例"

[quote]
other = "引用"
# === shortcodes/admonition.html ===

# === shortcodes/version.html ===
[new]
other = "新增"

[changed]
other = "更改"

[deleted]
other = "刪除"
# === shortcodes/version.html ===
```

## 配置

打開 `config.toml`

```toml
defaultContentLanguage = "zh-tw"
```


---

> 作者:   
> URL: https://lruihao.cn/posts/hugo-i18n-zh-tw/  

