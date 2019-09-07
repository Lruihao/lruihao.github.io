---
title: hexo插件及next内置样式集
date: 2018-11-24 16:54:09
tags:
- hexo
- 前端
- pdf
categories: hexo
password:
abstract:
message:
description:
top:
author:
permalink:
---

{% note info %}
让文章写的好看又简洁又好用的插件！[hexo完整的标签列表](https://hexo.io/zh-cn/docs/tag-plugins.html)，[next插件列表](https://theme-next.org/docs/tag-plugins/)
{% endnote %}

<!--more-->
### hexo插件

#### [hexo-lazyload-image](https://github.com/Troy-Yang/hexo-lazyload-image)
```bash 安装
npm install hexo-lazyload-image --save
```
First add configuration in `_config.yml` from your hexo project.
```xml 使用
lazyload:
  enable: true 
  onlypost: false
  loadingImg: # eg ./images/loading.gif
```
#### hexo-ruby-marks
> 不支持`ruby`新标签的浏览器将显示`rp`中的内容。

```xml HTML5写法
<ruby>博採眾長<rp>（</rp> <rt>lruihao.cn</rt><rp>）</rp></ruby>
```
<ruby>博採眾長<rp>（</rp> <rt>lruihao.cn</rt><rp>）</rp></ruby>

**插件使用**
```bash 安装
npm i hexo-ruby-marks
```
```xml 使用
{% ruby _**base**_|_**top text**_ %}
```
{% ruby 博採眾長|lruihao.cn %}

#### [hexo-pwa](https://github.com/lavas-project/hexo-pwa)
```ball 安装
npm install --save hexo-pwa
```
> You can configure this plugin in `_config.yml`.(配置完即可使用不许单独设置`manifest.json`文件及配置，插件生成)

``` 配置
pwa:
  manifest:
    path: /manifest.json
    body:
      name: hexo
      short_name: hexo
      icons:
        - src: /images/android-chrome-192x192.png
          sizes: 192x192
          type: image/png
        - src: /images/android-chrome-512x512.png
          sizes: 512x512
          type: image/png
      start_url: /index.html
      theme_color: '#ffffff'
      background_color: '#ffffff'
      display: standalone
  serviceWorker:
    path: /sw.js
    preload:
      urls:
        - /
      posts: 5
    opts:
      networkTimeoutSeconds: 5
    routes:
      - pattern: !!js/regexp /hm.baidu.com/
        strategy: networkOnly
      - pattern: !!js/regexp /.*\.(js|css|jpg|jpeg|png|gif)$/
        strategy: cacheFirst
      - pattern: !!js/regexp /\//
        strategy: networkFirst
  priority: 5
```
#### hexo-tag-dplayer
[hexo-tag-dplayer](https://github.com/MoePlayer/hexo-tag-dplayer)

```bash install
npm install hexo-tag-dplayer --save
```
```xml Usage
{% dplayer key=value ... %}
```
key can be 
```
dplayer options:
    'autoplay', 'loop', 'screenshot', 'hotkey', 'mutex', 'dmunlimited' : bool options, use "yes" "y" "true" "1" "on" or just without value to enable
    'preload', 'theme', 'lang', 'logo', 'url', 'pic', 'thumbnails', 'vidtype', 'suburl', 'subtype', 'subbottom', 'subcolor', 'subcolor', 'id', 'api', 'token', 'addition', 'dmuser' : string arguments
    'volume', 'maximum' : number arguments
container options:
    'width', 'height' : string, used in container element style
other:
    'code' : value of this key will be append to script tag
```

```xml example
{% dplayer "url=https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.mp4" "addition=https://dplayer.daoapp.io/bilibili?aid=4157142" "api=https://api.prprpr.me/dplayer/" "pic=https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.jpg" "id=9E2E3368B56CDBB4" "loop=yes" "theme=#FADFA3" "autoplay=false" "token=tokendemo" %}
```
{% dplayer url="https://ziyuan.lruihao.cn/public/hey.mp4" width="100%" height="400px" %}

#### hexo-tag-aplayer
[more](https://github.com/MoePlayer/hexo-tag-aplayer)
```bash 安装
npm install --save hexo-tag-aplayer
```
```xml 使用
{% aplayer title author url [picture_url, narrow, autoplay, width:xxx, lrc:xxx] %}
```

**标签参数**

- `title` : 曲目标题
- `author`: 曲目作者
- `url`: 音乐文件 URL 地址
- `picture_url`: (可选) 音乐对应的图片地址
- `narrow`: （可选）播放器袖珍风格
- `autoplay`:  (可选) 自动播放，移动端浏览器暂时不支持此功能
- `width:xxx`: (可选) 播放器宽度 (默认: 100%)
- `lrc:xxx`: （可选）歌词文件 URL 地址

当开启 Hexo 的 [文章资源文件夹](https://hexo.io/zh-cn/docs/asset-folders.html#%E6%96%87%E7%AB%A0%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6%E5%A4%B9) 功能时，可以将图片、音乐文件、歌词文件放入与文章对应的资源文件夹中，然后直接引用：

```
{% aplayer "Caffeine" "Jeff Williams" "caffeine.mp3" "picture.jpg" "lrc:caffeine.txt" %}

{% aplayer "你离开了南京，从此没人和我说话" "李志" "https://ziyuan.lruihao.cn/public/nanjing.mp3" "https://p2.music.126.net/UuSe-Vc6rS7JtRJSQgDU2g==/2323268069553116.jpg?param=300x300" %}
```

{% aplayer "你离开了南京，从此没人和我说话" "李志" "https://ziyuan.lruihao.cn/public/nanjing.mp3" "https://p2.music.126.net/UuSe-Vc6rS7JtRJSQgDU2g==/2323268069553116.jpg?param=300x300" %}

#### hexo-pdf
[pdf传送门](https://lruihao.cn/posts/next-pdf.html)

#### hexo-filter-flowchart(流程图)
[语法](https://flowchart.js.org)
```bash install
npm install --save hexo-filter-flowchart
```

````xml Usage
```%flow #去掉%号
st=>start: Start|past:>https://lruihao.cn[blank]
e=>end: End:>https://www.lruihao.cn[blank]
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>/hexo/nextplugin.html
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```
````

```flow
st=>start: Start|past:>https://lruihao.cn[blank]
e=>end: End:>https://www.lruihao.cn[blank]
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>/hexo/nextplugin.html
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```

#### hexo-spoiler

```bash Install
npm install hexo-spoiler --save
```
> If hexo can't detect this plugin automatically, you need to modify the `plugins` section of `[path_to_your_site]/_config.yml` manually, like:

```yaml
plugins:
 - hexo-spoiler
```

```plain Syntax
{% spoiler [text] %}
```
>It will pixelate your text, and click to reveal. Click again to hide your text again.
>But you need to add `<br>` manually if you want line breaks after/before it.

When you writes:
```plain Preview
{% spoiler text %}
{% spoiler ~~text~~ %}
{% spoiler *text* %}
{% spoiler **text** %}<br>
{% spoiler **hello welcome to 博採眾長！** %}
```
{% spoiler text %}
{% spoiler ~~text~~ %}
{% spoiler *text* %}
{% spoiler **text** %}<br>
{% spoiler **hello welcome to 博採眾長！** %}


### 宅音乐侧栏播放器插件
[体验](https://player.lruihao.cn)
> 目前在next中可能引起部分css冲突，建议在next中使用在单个页面中。
依赖于jQuery，一行js可以引入播放器插件。

### button
[more info](https://theme-next.org/docs/tag-plugins/button)
```
{% button url, text, icon [class], [title] %}
<!-- Tag Alias -->
{% btn url, text, icon [class], [title] %}

url     : Absolute or relative path to URL.
text    : Button text. Required if no icon specified.
icon    : FontAwesome icon name (without 'fa-' at the begining). Required if no text specified.
[class] : FontAwesome class(es): fa-fw | fa-lg | fa-2x | fa-3x | fa-4x | fa-5x
          Optional parameter.
[title] : Tooltip at mouseover.
          Optional parameter.
```
```
<div class="text-center">{% btn #, Text & Large Icon & Title, home fa-fw fa-lg, Title %}</div>
```
<div class="text-center">{% btn #, Text & Large Icon & Title, home fa-fw fa-lg, Title %}</div>

### Mermaid
[more info](https://theme-next.org/docs/tag-plugins/mermaid)

example
```
{% mermaid gitGraph: %}
options
{
    "nodeSpacing": 150,
    "nodeRadius": 10
}
end
commit
branch newbranch
checkout newbranch
commit
commit
checkout master
commit
commit
merge newbranch
{% endmermaid %}
```
{% mermaid gitGraph: %}
options
{
    "nodeSpacing": 150,
    "nodeRadius": 10
}
end
commit
branch newbranch
checkout newbranch
commit
commit
checkout master
commit
commit
merge newbranch
{% endmermaid %}

### video
#### Usage
```xml video.js
{% video url %}
```
#### Examples
```
{% video https://example.com/sample.mp4 %}
{% video /path/to/your/video.mp4 %}
```

### tab选项卡

> "tab"为选项卡的名称，可以自定义，数字是几表示从第几个选项卡开始。非必须，若数值为-1则隐藏选项卡内容。
> [查看更多](https://theme-next.org/docs/tag-plugins/tabs)

```
{% tabs Unique name, [index] %}
<!-- tab [Tab caption] [@icon] -->
Any content (support inline tags too).
<!-- endtab -->
{% endtabs %}

Unique name   : Unique name of tabs block tag without comma.
                Will be used in #id's as prefix for each tab with their index numbers.
                If there are whitespaces in name, for generate #id all whitespaces will replaced by dashes.
                Only for current url of post/page must be unique!
[index]       : Index number of active tab.
                If not specified, first tab (1) will be selected.
                If index is -1, no tab will be selected. It's will be something like spoiler.
                Optional parameter.
[Tab caption] : Caption of current tab.
                If not caption specified, unique name with tab index suffix will be used as caption of tab.
                If not caption specified, but specified icon, caption will empty.
                Optional parameter.
[@icon]       : FontAwesome icon name (without 'fa-' at the begining).
                Can be specified with or without space; e.g. 'Tab caption @icon' similar to 'Tab caption@icon'.
                Optional parameter.
```
```
{% tabs tab,2 %}
<!-- tab -->
this is tab1
<!-- endtab -->
<!-- tab -->
this is tab2
<!-- endtab -->
<!-- tab -->
this is tab3
<!-- endtab -->
{% endtabs %}
```
{% tabs tab,2 %}
<!-- tab -->
this is tab1
<!-- endtab -->
<!-- tab -->
this is tab2
<!-- endtab -->
<!-- tab -->
this is tab3
<!-- endtab -->
{% endtabs %}

> 数值为-1

{% tabs 选项,-1 %}
<!-- tab -->
**选项1**
<!-- endtab -->
<!-- tab -->
**选项2**
<!-- endtab -->
<!-- tab -->
**选项3**
<!-- endtab -->
{% endtabs %}

> 名字写在选项里面

```
{% tabs Fourth unique name %}
<!-- tab Solution 1 -->
**This is Tab 1.**
<!-- endtab -->
<!-- tab Solution 2 -->
**This is Tab 2.**
<!-- endtab -->
<!-- tab Solution 3 -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}
```

{% tabs Fourth unique name %}
<!-- tab Solution 1 -->
**This is Tab 1.**
<!-- endtab -->
<!-- tab Solution 2 -->
**This is Tab 2.**
<!-- endtab -->
<!-- tab Solution 3 -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

### note便签

> 主题配置文件搜索note,可设置风格和图标是否显示。

```
# Note tag (bs-callout).
note:
  # Note tag style values:
  #  - simple    bs-callout old alert style. Default.
  #  - modern    bs-callout new (v2-v3) alert style.
  #  - flat      flat callout style with background, like on Mozilla or StackOverflow.
  #  - disabled  disable all CSS styles import of note tag.
  style: flat
  icons: true
  border_radius: 15
  # Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6).
  # Offset also applied to label tag variables. This option can work with disabled note tag.
  light_bg_offset: 0
```
写法
```
{% note default %}default是类型还有以下几种{% endnote %}
```
{% note default %}default是类型还有以下几种{% endnote %}
{% note default %}default{% endnote %}
{% note primary %}primary{% endnote %}
{% note success %}success{% endnote %}
{% note info %}info{% endnote %}
{% note warning %}warning{% endnote %}
{% note danger %}danger{% endnote %}
{% note %}不填{% endnote %}
{% note danger no-icon %}danger no-icon{% endnote %}


### 引用(文本居中)

```
{% cq %}
**there are test words**
{% endcq %}
```

{% cq %}
**there are test words**
{% endcq %}

### [Font Awesome图标](https://www.runoob.com/font-awesome/fontawesome-tutorial.html)
> Font Awesome 是一套绝佳的图标字体库和CSS框架。
> Font Awesome 字体为您提供可缩放矢量图标,它可以被定制大小、颜色、阴影以及任何可以用CSS的样式。
> 要使用Font Awesome图标，请在HTML页面的 部分中添加以下行：

#### 1、国内推荐 CDN

```
<link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
```
#### 2、海外推荐 CDN

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```

next已经引用了，可以直接用，比如：
```
<i class="fa fa-car"></i>
<i class="fa fa-car" style="font-size:48px;"></i>
<i class="fa fa-car" style="font-size:60px;color:red;"></i>
<i class="fa fa-car fa-lg"></i>
<i class="fa fa-car fa-2x"></i>
<i class="fa fa-car fa-3x"></i>
<i class="fa fa-car fa-4x"></i>
<i class="fa fa-car fa-5x"></i>
```
<i class="fa fa-car"></i> <i class="fa fa-car" style="font-size:48px;"></i> <i class="fa fa-car" style="font-size:60px;color:red;"></i> <i class="fa fa-car fa-lg"></i> <i class="fa fa-car fa-2x"></i> <i class="fa fa-car fa-3x"></i> <i class="fa fa-car fa-4x"></i> <i class="fa fa-car fa-5x"></i>

动态图标

```
<i class="fa fa-spinner fa-spin"></i>
<i class="fa fa-circle-o-notch fa-spin"></i>
<i class="fa fa-refresh fa-spin"></i>
<i class="fa fa-cog fa-spin"></i>
<i class="fa fa-spinner fa-pulse"></i>
```
<i class="fa fa-spinner fa-spin"></i> <i class="fa fa-circle-o-notch fa-spin"></i> <i class="fa fa-refresh fa-spin"></i> <i class="fa fa-cog fa-spin"></i> <i class="fa fa-spinner fa-pulse"></i>

### 代码块等

```cpp 三个点后面的参数 https://lruihao.cn lruihao.cn
[language] [title] [url] [link text]

code snippet

```

```diff diff
-  printf("Hello World!");
+  printf("Hello_World!");
```
**iframe**
在文章中插入 iframe。
```default iframe
{% iframe url [width] [height] %}
```
{% iframe https://weibo.com/liahao 100% 400 %}

### Todo list
- <i class="fa fa-check-square"></i> 已完成
- <i class="fa fa-square"></i> 未完成

```http Todo list
<ul>
<li><i class="fa fa-check-square"></i> 已完成</li>
<li><i class="fa fa-square"></i> 未完成</li>
</ul>

<!--或者-->

- <i class="fa fa-check-square"></i> 已完成
- <i class="fa fa-square"></i> 未完成
```

### Label
主题配置文件中打开
```
# Label tag.
label: true
```
`@`前面的是label的名字，后面的是要显示的文字
{% label default@default %} {% label primary@primary %} {% label success@success %} {% label info@info %} {% label warning@warning %} {% label danger@danger %}
```
{% label default@default %}

primary success info warning danger
```


### [其他](http://www.mykernel.cn/my-hexo-next-1.html)
> 包括小色块、左侧色条、右侧色条、上方色条、数字色块（需要自定义样式）