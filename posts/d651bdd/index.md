# 临时决定再写一个小工具 - 网站预览图生成器


开发完 [CoverView](https://github.com/Lruihao/CoverView)之后，在调整博客文章封面图的时候，我发现首页的多端缩略图还是只能自己 P 图诶，于是我又决定再写一个小工具，用来生成网站预览图。。

&lt;!--more--&gt;

## 在线体验

- [vue-el-demo#apple-devices-preview](https://lruihao.github.io/vue-el-demo/#/apple-devices-preview)
- [源码](https://github.com/Lruihao/vue-el-demo/blob/main/src/views/apple-devices-preview.vue)

## 实现原理

实现原理很简单，就是先写好布局，然后每个设备里面套一个 iframe，然后通过 iframe 的 `src` 属性来加载网页。

## 卡壳点

- iframe 存在跨域问题。
- 在将 DOM 转图片的时候，iframe 里面的内容无法转换，尝试了 `html2canvas` 和 `dom-to-image-more` 都不行，放弃了，改为用浏览器插件 `Fireshot` 截图。

一个未尝试的思路，如果跨域问题得以解决，转换图片的步骤可以分解为：

1. 拿到每个 iframe 里的 body 内容，转为图片，然后将图片相对定位到对应的设备 iframe 里
2. 隐藏原来的 iframe
3. 最后将父容器的 DOM 转为图片

## 效果图

输入不同设备的 URL，选择背景颜色，点击预览，然后自行截图即可，比如用 `Fireshot` 插件捕获可见区域。

![screenshot](images/screenshot.webp)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/d651bdd/  

