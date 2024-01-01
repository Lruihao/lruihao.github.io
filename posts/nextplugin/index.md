# hexo 插件及 next 内置样式集


&gt; 2021/10/2 更新  
&gt; 博客已迁移至 Hugo, 插件演示不适用，已删除。  
&gt; 让文章写的好看又简洁又好用的插件！[hexo 完整的标签列表](https://hexo.io/zh-cn/docs/tag-plugins.html)，[next 插件列表](https://theme-next.org/docs/tag-plugins/)

&lt;!--more--&gt;

## hexo 插件

### [hexo-lazyload-image](https://github.com/Troy-Yang/hexo-lazyload-image)

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

### hexo-ruby-marks

&gt; 不支持`ruby`新标签的浏览器将显示`rp`中的内容。

```xml HTML5 写法
&lt;ruby&gt;博採眾長&lt;rp&gt;（&lt;/rp&gt; &lt;rt&gt;lruihao.cn&lt;/rt&gt;&lt;rp&gt;）&lt;/rp&gt;&lt;/ruby&gt;
```
&lt;!-- markdownlint-disable MD033 --&gt;

&lt;ruby&gt;博採眾長&lt;rp&gt;（&lt;/rp&gt; &lt;rt&gt;lruihao.cn&lt;/rt&gt;&lt;rp&gt;）&lt;/rp&gt;&lt;/ruby&gt;

插件使用

```bash 安装
npm i hexo-ruby-marks
```

```xml 使用
{% ruby _**base**_|_**top text**_ %}
```

### [hexo-pwa](https://github.com/lavas-project/hexo-pwa)

```ball 安装
npm install --save hexo-pwa
```

&gt; You can configure this plugin in `_config.yml`.（配置完即可使用不许单独设置`manifest.json`文件及配置，插件生成）

```配置
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
      theme_color: &#39;#ffffff&#39;
      background_color: &#39;#ffffff&#39;
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

### hexo-tag-dplayer

[hexo-tag-dplayer](https://github.com/MoePlayer/hexo-tag-dplayer)

```bash install
npm install hexo-tag-dplayer --save
```

```xml Usage
{% dplayer key=value ... %}
```

key can be

```plain
dplayer options:
    &#39;autoplay&#39;, &#39;loop&#39;, &#39;screenshot&#39;, &#39;hotkey&#39;, &#39;mutex&#39;, &#39;dmunlimited&#39; : bool options, use &#34;yes&#34; &#34;y&#34; &#34;true&#34; &#34;1&#34; &#34;on&#34; or just without value to enable
    &#39;preload&#39;, &#39;theme&#39;, &#39;lang&#39;, &#39;logo&#39;, &#39;url&#39;, &#39;pic&#39;, &#39;thumbnails&#39;, &#39;vidtype&#39;, &#39;suburl&#39;, &#39;subtype&#39;, &#39;subbottom&#39;, &#39;subcolor&#39;, &#39;subcolor&#39;, &#39;id&#39;, &#39;api&#39;, &#39;token&#39;, &#39;addition&#39;, &#39;dmuser&#39; : string arguments
    &#39;volume&#39;, &#39;maximum&#39; : number arguments
container options:
    &#39;width&#39;, &#39;height&#39; : string, used in container element style
other:
    &#39;code&#39; : value of this key will be append to script tag
```

```xml example
{% dplayer &#34;url=https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.mp4&#34; &#34;addition=https://dplayer.daoapp.io/bilibili?aid=4157142&#34; &#34;api=https://api.prprpr.me/dplayer/&#34; &#34;pic=https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.jpg&#34; &#34;id=9E2E3368B56CDBB4&#34; &#34;loop=yes&#34; &#34;theme=#FADFA3&#34; &#34;autoplay=false&#34; &#34;token=tokendemo&#34; %}
```

### hexo-tag-aplayer

[more](https://github.com/MoePlayer/hexo-tag-aplayer)

```bash 安装
npm install --save hexo-tag-aplayer
```

```xml 使用
{% aplayer title author url [picture_url, narrow, autoplay, width:xxx, lrc:xxx] %}
```

标签参数

- `title` : 曲目标题
- `author`: 曲目作者
- `url`: 音乐文件 URL 地址
- `picture_url`: （可选）音乐对应的图片地址
- `narrow`: （可选）播放器袖珍风格
- `autoplay`: （可选）自动播放，移动端浏览器暂时不支持此功能
- `width:xxx`: （可选）播放器宽度（默认：100%)
- `lrc:xxx`: （可选）歌词文件 URL 地址

当开启 Hexo 的 [文章资源文件夹](https://hexo.io/zh-cn/docs/asset-folders.html#%E6%96%87%E7%AB%A0%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6%E5%A4%B9) 功能时，可以将图片、音乐文件、歌词文件放入与文章对应的资源文件夹中，然后直接引用：

```md
{% aplayer &#34;Caffeine&#34; &#34;Jeff Williams&#34; &#34;caffeine.mp3&#34; &#34;picture.jpg&#34; &#34;lrc:caffeine.txt&#34; %}

{% aplayer &#34;你离开了南京，从此没人和我说话&#34; &#34;李志&#34; &#34;https://cdn-1256932288.cos.ap-chengdu.myqcloud.com/files/nanjing.mp3&#34; &#34;https://p2.music.126.net/UuSe-Vc6rS7JtRJSQgDU2g==/2323268069553116.jpg?param=300x300&#34; %}
```

&lt;!-- markdownlint-disable MD034 --&gt;

{{&lt; music url=&#34;https://cdn-1256932288.cos.ap-chengdu.myqcloud.com/files/nanjing.mp3&#34; name=&#34;李志&#34; artist=&#34;你离开了南京，从此没人和我说话&#34; cover=&#34;https://p2.music.126.net/UuSe-Vc6rS7JtRJSQgDU2g==/2323268069553116.jpg?param=300x300&#34; &gt;}}

### hexo-pdf

[pdf 传送门](https://lruihao.cn/posts/next-pdf/)

### hexo-filter-flowchart（流程图）

[语法](https://flowchart.js.org)

```bash install
npm install --save hexo-filter-flowchart
```

````xml Usage
```%flow #去掉%号
st=&gt;start: Start|past:&gt;https://lruihao.cn[blank]
e=&gt;end: End:&gt;https://www.lruihao.cn[blank]
op1=&gt;operation: My Operation|past
op2=&gt;operation: Stuff|current
sub1=&gt;subroutine: My Subroutine|invalid
cond=&gt;condition: Yes
or No?|approved:&gt;/hexo/nextplugin.html
c2=&gt;condition: Good idea|rejected
io=&gt;inputoutput: catch something...|request

st-&gt;op1(right)-&gt;cond
cond(yes, right)-&gt;c2
cond(no)-&gt;sub1(left)-&gt;op1
c2(yes)-&gt;io-&gt;e
c2(no)-&gt;op2-&gt;e
```
````

### hexo-spoiler

```bash Install
npm install hexo-spoiler --save
```

&gt; If hexo can&#39;t detect this plugin automatically, you need to modify the `plugins` section of `[path_to_your_site]/_config.yml` manually, like:

```yaml
plugins:
  - hexo-spoiler
```

```plain Syntax
{% spoiler [text] %}
```

&gt; It will pixelate your text, and click to reveal. Click again to hide your text again.
&gt; But you need to add `&lt;br&gt;` manually if you want line breaks after/before it.

When you writes:

```plain Preview
{% spoiler text %}
{% spoiler ~~text~~ %}
{% spoiler *text* %}
{% spoiler **text** %}&lt;br&gt;
{% spoiler **hello welcome to 博採眾長！** %}
```

## 宅音乐侧栏播放器插件

[~~体验~~](https://player.lruihao.cn) [源码](https://github.com/Lruihao/zhai-music)

&gt; 目前在 next 中可能引起部分 css 冲突，建议在 next 中使用在单个页面中。  
&gt; 依赖于 jQuery，一行 js 可以引入播放器插件。

## caniuse

### 使用

```md
{% caniuse feature @ periods %}
&lt;!-- Tag Alias --&gt;
{% can feature @ periods %}

feature : Search for the feature you want on https://caniuse.com, then click on the hash sign to the left of the search result heading and you will get the unique name of this feature.
periods : Select the browser versions to display. Supported values: past_1, past_2, past_3, past_4, past_5, current, future_3, future_2, future_1. If this value is empty, the default value &#39;current&#39; will be used.

```

### 栗子

Caniuse without periods

```md
{% caniuse fetch %}
```

Caniuse with current period

```md
{% can sharedarraybuffer @ current %}
```

Caniuse with future periods

```md
{% caniuse loading-lazy-attr @ future_3,future_2,future_1 %}
```

Caniuse with past periods

```md
{% caniuse link-rel-modulepreload @ past_1,past_2,past_3,past_4,past_5 %}
```

## Include Raw

This tag include any raw content into your posts. Path is relative to your site source directory.

```md
{% include_raw &#39;_data/path/to/file.html&#39; %}
```

Let&#39;s create include-raw.html file in `_data` directory under site root directory with following content:

```md
Any &lt;strong&gt;raw content&lt;/strong&gt; may be included with this tag.
```

Then in any post we can use this content with include_raw tag:

```md
{% include_raw &#39;_data/path/to/include-raw.html&#39; %}
```

Any **raw content** may be included with this tag.

## button

[more info](https://theme-next.org/docs/tag-plugins/button)

```md
{% button url, text, icon [class], [title] %}
&lt;!-- Tag Alias --&gt;
{% btn url, text, icon [class], [title] %}

url     : Absolute or relative path to URL.
text    : Button text. Required if no icon specified.
icon    : FontAwesome icon name (without &#39;fa-&#39; at the begining). Required if no text specified.
[class] : FontAwesome class(es): fa-fw | fa-lg | fa-2x | fa-3x | fa-4x | fa-5x
          Optional parameter.
[title] : Tooltip at mouseover.
          Optional parameter.
```

```md
{% btn #, Text &amp; Large Icon &amp; Title, home fa-fw fa-lg, Title %}
```

## Mermaid

[more info](https://theme-next.org/docs/tag-plugins/mermaid)

example

```md
{% mermaid gitGraph: %}
options
{
    &#34;nodeSpacing&#34;: 150,
    &#34;nodeRadius&#34;: 10
}
end
commit
branch newbranch
checkout newbranch
commit
checkout master
commit
merge newbranch
{% endmermaid %}
```

## video

### Usage

```xml video.js
{% video url %}
```

### Examples

```md
{% video https://example.com/sample.mp4 %}
{% video /path/to/your/video.mp4 %}
```

## tab 选项卡

&gt; &#34;tab&#34;为选项卡的名称，可以自定义，数字是几表示从第几个选项卡开始。非必须，若数值为 -1 则隐藏选项卡内容。
&gt; [查看更多](https://theme-next.org/docs/tag-plugins/tabs)

```md
{% tabs Unique name, [index] %}
&lt;!-- tab [Tab caption] [@icon] --&gt;
Any content (support inline tags too).
&lt;!-- endtab --&gt;
{% endtabs %}

Unique name   : Unique name of tabs block tag without comma.
                Will be used in #id&#39;s as prefix for each tab with their index numbers.
                If there are whitespaces in name, for generate #id all whitespaces will replaced by dashes.
                Only for current url of post/page must be unique!
[index]       : Index number of active tab.
                If not specified, first tab (1) will be selected.
                If index is -1, no tab will be selected. It&#39;s will be something like spoiler.
                Optional parameter.
[Tab caption] : Caption of current tab.
                If not caption specified, unique name with tab index suffix will be used as caption of tab.
                If not caption specified, but specified icon, caption will empty.
                Optional parameter.
[@icon]       : FontAwesome icon name (without &#39;fa-&#39; at the begining).
                Can be specified with or without space; e.g. &#39;Tab caption @icon&#39; similar to &#39;Tab caption@icon&#39;.
                Optional parameter.
```

```md
{% tabs tab,2 %}
&lt;!-- tab --&gt;
this is tab1
&lt;!-- endtab --&gt;
&lt;!-- tab --&gt;
this is tab2
&lt;!-- endtab --&gt;
&lt;!-- tab --&gt;
this is tab3
&lt;!-- endtab --&gt;
{% endtabs %}
```

&gt; 数值为 -1

```md
{% tabs 选项，-1 %}
&lt;!-- tab --&gt;
**选项 1**
&lt;!-- endtab --&gt;
&lt;!-- tab --&gt;
**选项 2**
&lt;!-- endtab --&gt;
&lt;!-- tab --&gt;
**选项 3**
&lt;!-- endtab --&gt;
{% endtabs %}
```

&gt; 名字写在选项里面

```md
{% tabs Fourth unique name %}
&lt;!-- tab Solution 1 --&gt;
**This is Tab 1.**
&lt;!-- endtab --&gt;
&lt;!-- tab Solution 2 --&gt;
**This is Tab 2.**
&lt;!-- endtab --&gt;
&lt;!-- tab Solution 3 --&gt;
**This is Tab 3.**
&lt;!-- endtab --&gt;
{% endtabs %}
```

## note 便签

&gt; 主题配置文件搜索 note, 可设置风格和图标是否显示。

```md
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

{% note default %}

### default

类型还有以下几种

{% endnote %}
{% note primary %}

### primary

内容
{% endnote %}
{% note success %}

### success

内容
{% endnote %}
{% note info %}

### info

内容
{% endnote %}
{% note warning %}

### warning

内容
{% endnote %}
{% note danger %}

### danger

内容
{% endnote %}
{% note %}

### 不填

内容
{% endnote %}
{% note danger no-icon %}

### danger no-icon

内容
{% endnote %}

## 引用（文本居中）

```md
{% cq %}
**there are test words**
{% endcq %}

```

## [Font Awesome 图标](https://www.runoob.com/font-awesome/fontawesome-tutorial.html)

&gt; Font Awesome 是一套绝佳的图标字体库和 CSS 框架。
&gt; Font Awesome 字体为你提供可缩放矢量图标，它可以被定制大小、颜色、阴影以及任何可以用 CSS 的样式。
&gt; 要使用 Font Awesome 图标，请在 HTML 页面的 部分中添加以下行：

### 1、国内推荐 CDN

```md
&lt;link rel=&#34;stylesheet&#34; href=&#34;https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css&#34;&gt;
```

### 2、海外推荐 CDN

```md
&lt;link rel=&#34;stylesheet&#34; href=&#34;https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css&#34;&gt;
```

next 已经引用了，可以直接用，比如：

```html
&lt;i class=&#34;fa fa-car&#34;&gt;&lt;/i&gt;
&lt;i class=&#34;fa fa-car&#34; style=&#34;font-size:48px;&#34;&gt;&lt;/i&gt;
&lt;i class=&#34;fa fa-car&#34; style=&#34;font-size:60px;color:red;&#34;&gt;&lt;/i&gt;
&lt;i class=&#34;fa fa-car fa-lg&#34;&gt;&lt;/i&gt;
&lt;i class=&#34;fa fa-car fa-2x&#34;&gt;&lt;/i&gt;
&lt;i class=&#34;fa fa-car fa-3x&#34;&gt;&lt;/i&gt;
&lt;i class=&#34;fa fa-car fa-4x&#34;&gt;&lt;/i&gt;
&lt;i class=&#34;fa fa-car fa-5x&#34;&gt;&lt;/i&gt;
```

&lt;i class=&#34;fa fa-car&#34;&gt;&lt;/i&gt; &lt;i class=&#34;fa fa-car&#34; style=&#34;font-size:48px;&#34;&gt;&lt;/i&gt; &lt;i class=&#34;fa fa-car&#34; style=&#34;font-size:60px;color:red;&#34;&gt;&lt;/i&gt; &lt;i class=&#34;fa fa-car fa-lg&#34;&gt;&lt;/i&gt; &lt;i class=&#34;fa fa-car fa-2x&#34;&gt;&lt;/i&gt; &lt;i class=&#34;fa fa-car fa-3x&#34;&gt;&lt;/i&gt; &lt;i class=&#34;fa fa-car fa-4x&#34;&gt;&lt;/i&gt; &lt;i class=&#34;fa fa-car fa-5x&#34;&gt;&lt;/i&gt;

动态图标

```html
&lt;i class=&#34;fa fa-spinner fa-spin&#34;&gt;&lt;/i&gt;
&lt;i class=&#34;fa fa-circle-o-notch fa-spin&#34;&gt;&lt;/i&gt;
&lt;i class=&#34;fa fa-refresh fa-spin&#34;&gt;&lt;/i&gt;
&lt;i class=&#34;fa fa-cog fa-spin&#34;&gt;&lt;/i&gt;
&lt;i class=&#34;fa fa-spinner fa-pulse&#34;&gt;&lt;/i&gt;
```

&lt;i class=&#34;fa fa-spinner fa-spin&#34;&gt;&lt;/i&gt; &lt;i class=&#34;fa fa-circle-o-notch fa-spin&#34;&gt;&lt;/i&gt; &lt;i class=&#34;fa fa-refresh fa-spin&#34;&gt;&lt;/i&gt; &lt;i class=&#34;fa fa-cog fa-spin&#34;&gt;&lt;/i&gt; &lt;i class=&#34;fa fa-spinner fa-pulse&#34;&gt;&lt;/i&gt;

## 代码块等

```cpp 三个点后面的参数 https://lruihao.cn lruihao.cn
[language] [title] [url] [link text]

code snippet

```

```diff diff
-  printf(&#34;Hello World!&#34;);
&#43;  printf(&#34;Hello_World!&#34;);
```

**iframe**
在文章中插入 iframe。

```default iframe
{% iframe url [width] [height] %}
```

## Todo list

- &lt;i class=&#34;fa fa-check-square&#34;&gt;&lt;/i&gt; 已完成
- &lt;i class=&#34;fa fa-square&#34;&gt;&lt;/i&gt; 未完成

```http Todo list
&lt;ul&gt;
&lt;li&gt;&lt;i class=&#34;fa fa-check-square&#34;&gt;&lt;/i&gt; 已完成&lt;/li&gt;
&lt;li&gt;&lt;i class=&#34;fa fa-square&#34;&gt;&lt;/i&gt; 未完成&lt;/li&gt;
&lt;/ul&gt;

&lt;!--或者--&gt;

- &lt;i class=&#34;fa fa-check-square&#34;&gt;&lt;/i&gt; 已完成
- &lt;i class=&#34;fa fa-square&#34;&gt;&lt;/i&gt; 未完成
```

## Label

主题配置文件中打开

```md
# Label tag.
label: true
```

`@`前面的是 label 的名字，后面的是要显示的文字

```md
{% label default@default %}

primary success info warning danger
```

## [其他](http://www.mykernel.cn/my-hexo-next-1.html)

&gt; 包括小色块、左侧色条、右侧色条、上方色条、数字色块（需要自定义样式）


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/nextplugin/  

