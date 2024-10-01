# 一个含有网易云随机评论 shortcode 的 Hugo 主题组件。

# hugo-shortcode-mmt-netease

![preview](https://user-images.githubusercontent.com/33419593/221810055-bf78de27-8f5d-4ffa-bf02-f60c0939f169.png)

一个含有网易云随机评论 shortcode 的 Hugo 主题组件。

## Installation

将此 git 存储库克隆到您的主题文件夹中并添加为您的网站目录的子模块。

```bash
git submodule add https://github.com/Lruihao/hugo-shortcode-mmt-netease.git themes/shortcode-mmt-netease
```

接下来编辑您的项目 `config.toml` 并将此主题组件添加到您的主题中：

```bash
theme = [&#34;your-main-theme&#34;, &#34;shortcode-mmt-netease&#34;]
```

要了解 hugo 的主题组件以及如何使用它们，请查看 &lt;https://gohugo.io/hugo-modules/theme-components/&gt;。

## Usage

`mmt-netease` shortcode 有以下命名参数：

  - **mid** *[必需]*（第一个位置参数）网易云歌单 ID
  - **autoplay** *[可选]*（第二个位置参数）是否自动播放，默认：`false`
  - **fixed** *[可选]*（第三个位置参数）是否启用固定模式，默认：`false`
  - **mini** *[可选]*（第四个位置参数）是否启用迷你模式，默认：`false`
  - **volume** *[可选]*（第五个位置参数）默认音量，注意播放器会记住用户设置，用户自己设置音量后默认音量将不起作用，默认：`0.7`

这是一个用法示例：

```markdown
{{?{}&lt; mmt-netease mid=&#34;2280569152&#34; autoplay=&#34;false&#34; &gt;}}
&lt;!-- OR --&gt;
{{?{}&lt; mmt-netease &#34;2280569152&#34; false &gt;}}
```

&gt; **Warning** 同一页面只支持使用一次！

## Dependencies

- [APlayer](https://github.com/MoePlayer/APlayer)
- [MetingJS](https://github.com/metowolf/MetingJS)
- [UomgAPI](https://api.uomg.com/doc-comments.163.html)
- [MMT](https://github.com/Lruihao/MMT)


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/shortcode-mmt-netease/  

