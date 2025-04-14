# 用五天时间给自己制作一个封面图生成工具


{{< admonition success "Cool! " >}}
苦封面图久矣，今日终有所成。
{{< /admonition >}}

<!--more-->

## 心路历程

写博客一直都懒得配图，主要是除了截图一直懒得找素材，然后还得考虑压缩等，直到心血来潮写文档时加上了封面图，发现效果还不错，就开始思考如何快速地搞定封面图，经历了以下几个阶段：

1. **Google 搜图**：最开始的时候，直接 Google 搜图，然而很难找到合适的图片。
2. **手动制作**：然后开始用 [Excalidraw](https://excalidraw.com/) 制作，但是每篇文章都要重新画，太麻烦了。
3. **稿定**: FixIt 主题群群友推荐了 [稿定](https://www.gaoding.com/)，可以快速生成封面图，但是要付费啊，受不了一点。
4. **原 CoverView**：最后还是 FixIt 主题群群友又推荐了 [CoverView](https://github.com/rutikwankhade/CoverView)，哎！这个可以，但是样式有点跑版，还有图片无法下载等诸多 BUG，主要还无法适配 Hugo FixIt 主题的封面尺寸。
5. **自己写**：既然 CoverView 是开源的，那就先克隆一份，自己改改啰。

为什么封面图片比你想象的更重要？
: 每天约有 700 万篇博文被发表。随着新时代博客工具的兴起，这个数字还会持续上升。一个好的封面图片比随机的库存图片能带来更高的转化率。

## 项目介绍

该项目基于原项目 CoverView 修改而成，感谢原作者 Rutik Wankhade 的优秀作品，我又连夜花了五天时间，做了如下改动和优化：

- 修复了带有图案背景的图片无法下载的问题
- 修复了无法下载和上传 SVG 格式图标的问题
- 修复了移动端样式混乱的问题
- 修复了重置所有按钮功能异常的问题
- 添加了 ESLint 支持
- 添加了 I18n 支持
- 增强了 Unsplash 图片搜索功能
- 添加了下载图片格式选择（PNG/JPEG），并支持 JPEG 图片质量调整
- 优化了图片下载速度
- 优化了 Devicons 以多色 SVG 图标显示
- 添加了更多字体和平台支持
- 统一了不同主题下载图片的大小
- 以及更多 ...

至此已经足以让我感到满足和使用了，当然还有一些正在开发或者尝试开发的需求：

- 支持复制到剪切板和从剪切板上传截图 [#8](https://github.com/Lruihao/CoverView/issues/8)
- 尝试实现拖拽文本或者图标 [#9](https://github.com/Lruihao/CoverView/issues/9)
- 设置自定义平台封面图片的宽高比、适配常用尺寸宽高比 [#10](https://github.com/Lruihao/CoverView/issues/10)

现在 demo 版本已经上线，Unsplash API 的 `production` 版本还在审核中，最后传承开源精神开源出来，并保留了原作者 commit 记录聊表敬意。

{{< link href="https://github.com/Lruihao/CoverView" content="🛠 Create awesome cover images for your blog posts quickly." card=true >}}

## 如何使用

可以看到，本文的封面图就是它生成的，很快啊！我当时大意了！没有闪！（玩个梗😂）

在线使用地址：

- <https://coverview.lruihao.cn>
- <https://coverview-x.vercel.app>

1. 添加博客文章的标题和作者
2. 自定义颜色、字体、图标等
3. 从不同的主题中选择
4. 点击下载按钮，即可下载封面图

有了简单、快速、易用的 CoverView，为博客创建封面图片现在变得非常容易，这样大家就可以专注于撰写博客，而不必担心封面图片了。

## 图片压缩

关于图片压缩问题，当时在开发之初 [#9](https://github.com/Lruihao/CoverView/issues/9)，是准备增加下载为 WebP 格式的功能，但是由于没找到合适的实现库，所以很遗憾没有实现，可手动通过 [Cwebp](https://developers.google.com/speed/webp/docs/cwebp) 工具转换。

例如：

```bash
cwebp -q 50 cover_*.jpeg -o cover.webp 
cwebp -q 50 -lossless cover_*.png -o cover_lossless.webp 
```

幸运的是，我增加了下载为 JPEG 格式的功能，可以在下载时调整图片质量，以减少图片大小。

![cover_279101.jpeg](images/cover_279101.jpeg)

比如上面这张图片，选择 JPEG 格式，图片质量选择 50%，下载下来的体积仅仅 `70kb`，wow! 太棒了！只需要简单输入，然后轻轻一点。

当然啦，可以找压缩工具进行压缩，例如：[TinyPNG](https://tinify.cn/)，它可以帮助你快速压缩图片，减少图片大小，提高网站加载速度。

## 收获

为了这个完善开发这个工具，先顺手学了一下 React，发现其实入门上手也很简单。

就这样，我又多了一个得心应手的工具 🛠️。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/coverview/  

