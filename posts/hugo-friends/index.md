# Hugo 友情連結模板

<!-- markdownlint-disable MD034 -->

{{< admonition question "過程" >}}
以前的 hexo 博客是自己寫的友鏈模板，換到 hugo 後想著在網上隨便找一個範本用著就好，然而並沒有自己想要的 layout, 幾乎都是使用 shortcodes 的，代碼風格有點問題且 shortcodes 作為友鏈添加的方式是真的麻煩。就只好自己寫羅。
{{< /admonition >}}

{{< link href="https://github.com/Lruihao/FixIt" content="友情鏈接模板已整合到 FixIt 主題" card=true >}}

<!--more-->

{{< link href="https://lruihao.cn/friends/" content="友情鏈接範本" card=true >}}

## 創建模板

開始之前去看了 hugo 的官網，再看了一下 go 模板的語法。

新建 `layouts/friends/single.html`

```html
{{- define "title" }}{{ .Title }} - {{ .Site.Title }}{{ end -}} {{- define "content" -}} {{- $params := .Scratch.Get "params" -}}
<div class="page single special">
  {{- /* Title */ -}}
  <h1 class="single-title animated pulse faster">{{- .Title -}}</h1>

  {{- /* Subtitle */ -}} {{- with $params.subtitle -}}
  <h2 class="single-subtitle">{{ . }}</h2>
  {{- end -}} {{- /* Friend links */ -}} {{- $loading := resources.Get "svg/loading.svg" | minify -}}
  <script src="//at.alicdn.com/t/font_578712_g26jo2kbzd5qm2t9.js"></script>
  <link rel="stylesheet" href="/friends/css/_friends.css" />
  <div class="friend-links">
    {{ range $index, $friend := .Site.Data.friends }}
    <a
      class="friend-link"
      title="{{ $friend.description }}"
      href="{{ $friend.url | safeURL }}"
      rel="external nofollow noopener noreferrer"
      target="_blank"
    >
      {{ if $friend.avatar }}
      <img class="friend-avatar lazyload" src="{{ $loading.RelPermalink }}" data-src="{{ $friend.avatar }}" alt="{{ $friend.nickname }}" />
      {{ else }}
      <svg class="friend-avatar" aria-hidden="true">
        <use xlink:href="#icon-{{ add 1 $index }}"></use>
      </svg>
      {{ end }}
      <span class="friend-nickname" title="{{ $friend.nickname }}">@{{ $friend.nickname }}</span>
    </a>
    {{ end }}
  </div>

  {{- /* Content */ -}}
  <div class="content" id="content">
    {{- dict "Content" .Content "Ruby" $params.ruby "Fraction" $params.fraction "Fontawesome" $params.fontawesome | partial "function/content.html" |
    safeHTML -}}
  </div>

  {{- /* Comment */ -}} {{- partial "comment.html" . -}}
</div>
{{- end -}}
```

## 模板樣式

新建文件 `_friends.css`

```css
/**
 * @Description: Style of layout named 'Friend links'.
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
   title: '友鏈'
   date: 2021-09-19T12:33:48+08:00
   type: 'friends'
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
  avatar: https://gravatar.loli.net/avatar/3f985efb5907ca52944a3cd7edd51606?d=wavatar&v=1.3.10
  url: https://lruihao.cn
  description: 不怕萬人阻擋，只怕自己投降
```

## 結語

> 這樣每次添加友鏈或者刪除友鏈衹要操作數據文件 `friends.yml` 就好，乾淨又衛生！  
> 友鏈頁面 `content/friends/index.md` 繼承了基礎頁面的功能，內容評論等


---

> 作者:   
> URL: https://lruihao.cn/posts/hugo-friends/  

