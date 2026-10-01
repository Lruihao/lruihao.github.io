# 🎶 A Hugo theme component with a NetEase Cloud random comment shortcode.

# shortcode-mmt-netease

![preview](https://user-images.githubusercontent.com/33419593/221810055-bf78de27-8f5d-4ffa-bf02-f60c0939f169.png)

一个含有网易云随机评论 shortcode 的 Hugo 主题组件。

## Demo

<https://lruihao.cn/guestbook/>

## 安装

> [!TIP]
> 本组件适用于所有 Hugo 主题，但你必须有一个主体主题来使用它，以下以 [FixIt](https://github.com/hugo-fixit/FixIt) 主题为例。

安装方法与 [安装主题](https://fixit.lruihao.cn/documentation/installation/) 相同。有几种安装方法，请选择一种。

### 安装为 Hugo 模块

首先确保你的项目本身是一个 [Hugo 模块](https://gohugo.io/hugo-modules/use-modules/#initialize-a-new-module)。

然后将此主题组件添加到你的 `hugo.toml` 配置文件中：

```toml
[module]

[[module.imports]]
path = "github.com/hugo-fixit/FixIt"

[[module.imports]]
path = "github.com/hugo-fixit/shortcode-mmt-netease"
```

在第一次启动 Hugo 时，它将下载所需的文件。

要更新到模块的最新版本，请运行：

```bash
hugo mod get -u
hugo mod tidy
```

### 安装为 Git 子模块

将 [FixIt](https://github.com/hugo-fixit/FixIt) 和此 git 存储库克隆到你的主题文件夹中，并将其添加为网站目录的子模块。

```bash
git submodule add https://github.com/hugo-fixit/FixIt.git themes/FixIt
git submodule add https://github.com/hugo-fixit/shortcode-mmt-netease.git themes/shortcode-mmt-netease
```

接下来编辑项目的 `hugo.toml` 并将此主题组件添加到你的主题中：

```toml
theme = ["FixIt", "shortcode-mmt-netease"]
```

## 使用

`mmt-netease` shortcode 有以下命名参数：

- **mid** _[必需]_（第一个位置参数）网易云歌单 ID
- **autoplay** _[可选]_（第二个位置参数）是否自动播放，默认：`false`
- **fixed** _[可选]_（第三个位置参数）是否启用固定模式，默认：`false`
- **mini** _[可选]_（第四个位置参数）是否启用迷你模式，默认：`false`
- **volume** _[可选]_（第五个位置参数）默认音量，注意播放器会记住用户设置，用户自己设置音量后默认音量将不起作用，默认：`0.7`
- **current** _[可选]_（第六个位置参数）是否播放当前评论的音乐，默认：`false`

这是一个用法示例：

```markdown
{{?{}< mmt-netease mid="2280569152" autoplay="false" >}}
<!-- OR -->
{{?{}< mmt-netease "2280569152" false >}}
```

## Dependencies

- [APlayer](https://github.com/MoePlayer/APlayer)
- [MetingJS](https://github.com/metowolf/MetingJS)
- [mmt-webfont](https://github.com/Lruihao/mmt-webfont)
- [vercel-proxy](https://github.com/Lruihao/vercel-proxy?#netease-comment)


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/shortcode-mmt-netease/  

