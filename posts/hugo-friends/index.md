# Hugo 友情連結模板

&lt;!-- markdownlint-disable MD034 --&gt;

{{&lt; admonition question &#34;過程&#34; &gt;}}
以前的 hexo 博客是自己寫的友鏈模板，換到 hugo 後想著在網上隨便找一個範本用著就好，然而並沒有自己想要的 layout, 幾乎都是使用 shortcodes 的，代碼風格有點問題且 shortcodes 作為友鏈添加的方式是真的麻煩。就只好自己寫羅。
{{&lt; /admonition &gt;}}

{{&lt; link href=&#34;https://github.com/Lruihao/FixIt&#34; content=&#34;友情鏈接模板已整合到 FixIt 主題&#34; card=true &gt;}}

&lt;!--more--&gt;

{{&lt; link href=&#34;https://lruihao.cn/friends/&#34; content=&#34;友情鏈接範本&#34; card=true &gt;}}

## 創建模板

開始之前去看了 hugo 的官網，再看了一下 go 模板的語法。

新建 `layouts/friends/single.html`

```html
{{- define &#34;title&#34; }}{{ .Title }} - {{ .Site.Title }}{{ end -}} {{- define &#34;content&#34; -}} {{- $params := .Scratch.Get &#34;params&#34; -}}
&lt;div class=&#34;page single special&#34;&gt;
  {{- /* Title */ -}}
  &lt;h1 class=&#34;single-title animated pulse faster&#34;&gt;{{- .Title -}}&lt;/h1&gt;

  {{- /* Subtitle */ -}} {{- with $params.subtitle -}}
  &lt;h2 class=&#34;single-subtitle&#34;&gt;{{ . }}&lt;/h2&gt;
  {{- end -}} {{- /* Friend links */ -}} {{- $loading := resources.Get &#34;svg/loading.svg&#34; | minify -}}
  &lt;script src=&#34;//at.alicdn.com/t/font_578712_g26jo2kbzd5qm2t9.js&#34;&gt;&lt;/script&gt;
  &lt;link rel=&#34;stylesheet&#34; href=&#34;/friends/css/_friends.css&#34; /&gt;
  &lt;div class=&#34;friend-links&#34;&gt;
    {{ range $index, $friend := .Site.Data.friends }}
    &lt;a
      class=&#34;friend-link&#34;
      title=&#34;{{ $friend.description }}&#34;
      href=&#34;{{ $friend.url | safeURL }}&#34;
      rel=&#34;external nofollow noopener noreferrer&#34;
      target=&#34;_blank&#34;
    &gt;
      {{ if $friend.avatar }}
      &lt;img class=&#34;friend-avatar lazyload&#34; src=&#34;{{ $loading.RelPermalink }}&#34; data-src=&#34;{{ $friend.avatar }}&#34; alt=&#34;{{ $friend.nickname }}&#34; /&gt;
      {{ else }}
      &lt;svg class=&#34;friend-avatar&#34; aria-hidden=&#34;true&#34;&gt;
        &lt;use xlink:href=&#34;#icon-{{ add 1 $index }}&#34;&gt;&lt;/use&gt;
      &lt;/svg&gt;
      {{ end }}
      &lt;span class=&#34;friend-nickname&#34; title=&#34;{{ $friend.nickname }}&#34;&gt;@{{ $friend.nickname }}&lt;/span&gt;
    &lt;/a&gt;
    {{ end }}
  &lt;/div&gt;

  {{- /* Content */ -}}
  &lt;div class=&#34;content&#34; id=&#34;content&#34;&gt;
    {{- dict &#34;Content&#34; .Content &#34;Ruby&#34; $params.ruby &#34;Fraction&#34; $params.fraction &#34;Fontawesome&#34; $params.fontawesome | partial &#34;function/content.html&#34; |
    safeHTML -}}
  &lt;/div&gt;

  {{- /* Comment */ -}} {{- partial &#34;comment.html&#34; . -}}
&lt;/div&gt;
{{- end -}}
```

## 模板樣式

新建文件 `_friends.css`

```css
/**
 * @Description: Style of layout named &#39;Friend links&#39;.
 * @Author: lruihao.cn
 * @Updated:  2021/9/20 19:26
 */

.friend-links {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media (max-width: 576px) {
  .friend-links {
    justify-content: space-around;
  }
}
.friend-link {
  width: 150px;
  height: 200px;
  font-size: 1rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 3px 3px 5px #aaa;
  border-radius: 5px;
  border: none;
  transition-duration: 0.3s;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.friend-link:hover {
  background: #fff;
  transform: scale(1.03);
  box-shadow: 0 0 3px #aaa;
}
.friend-avatar {
  object-fit: cover;
  object-position: center;
  width: 100% !important;
  height: 150px !important;
  border-radius: 5px;
  margin: 0;
  padding: 0;
}
.friend-nickname {
  display: block;
  position: relative;
  color: #2bbc8a;
  font-weight: bold;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 18px;
  margin-bottom: 1rem;
}
.friend-nickname:hover {
  color: #d480aa;
}
```

## 友鏈頁面

```bash
hugo new friends/index.md
```

1. 將 `_friends.css` 放到 `content/friends/css/`
2. 打開友鏈頁面 `content/friends/index.md`

   ```md
   ---
   title: &#39;友鏈&#39;
   date: 2021-09-19T12:33:48&#43;08:00
   type: &#39;friends&#39;
   ---
   ```

## 數據

新建數據文件 `data/friends.yml`, 數據格式為：

```yaml
# - nickname: 标题
#   avatar: 头像
#   url: 站点
#   description: 描述
- nickname: Lruihao
  avatar: https://gravatar.loli.net/avatar/3f985efb5907ca52944a3cd7edd51606?d=wavatar&amp;v=1.3.10
  url: https://lruihao.cn
  description: 不怕萬人阻擋，只怕自己投降
```

## 結語

&gt; 這樣每次添加友鏈或者刪除友鏈衹要操作數據文件 `friends.yml` 就好，乾淨又衛生！  
&gt; 友鏈頁面 `content/friends/index.md` 繼承了基礎頁面的功能，內容評論等


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/hugo-friends/  

