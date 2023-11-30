# 浏览器 IMG 图片原生懒加载 loading="lazy"


记录使用 HTML 原生方案实现图片的懒加载。

<!--more-->

## 语法规范

HTML `loading` 属性适用于 `img` 和 `iframe`，语法规范见 [HTML Standard - Lazy loading attributes](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-loading-attributes)。

| 关键词  | 状态  | 描述                                 |
| :-----: | :----: | ------------------------------------ |
| `lazy`  | 懒惰的 | 用于延迟获取资源，直到满足某些条件。 |
| `eager` | 渴望的 | 用于立即获取资源；默认状态。         |

属性的 _[缺失值默认值](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#missing-value-default)_ 和 _[无效值默认值](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#invalid-value-default)_ 都是 [Eager](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-loading-eager-state)状态。

## 实际应用

基于 [FixIt 主题](https://github.com/hugo-fixit/FixIt) 版本大于 v0.2.18 的博客网站使用就是原生的懒加载方案，大致如下：

```html
<img
  loading="lazy"
  src="./example.jpg"
  data-title="title text"
  data-alt="alt text"
  onload="this.title=this.dataset.title;this.alt=this.dataset.alt;for(const a of ['data-title','data-alt','onerror','onload']){this.removeAttribute(a);}this.dataset.lazyloaded='';"
  onerror="this.title=this.dataset.title;this.alt=this.dataset.alt;for(const a of ['data-title','data-alt','onerror','onload']){this.removeAttribute(a);}"
/>
```

为了达到 loading 的效果，以上代码中在 `onload` 后会给图片加上一个 `data-lazyloaded` 属性，所以我们可以这样来写 css 以达到显示 loading 图标的效果：

```css
img[loading='lazy']:not([data-lazyloaded]) {
  background: url(loading.svg) no-repeat center;
}
```

设置 `data-title` 和 `data-alt` 是因为移动浏览器大多数只要有 `title` 或 `alt` 就会显示图片的替代字符，所以等到图片加载完或加载失败后再回填。

## 懒加载特性的研究

> 以下结论来自 [浏览器 IMG 图片原生懒加载 loading=”lazy”实践指南 « 张鑫旭 - 鑫空间 - 鑫生活](https://www.zhangxinxu.com/wordpress/2019/09/native-img-loading-lazy/) 总结部分。

1. Lazy loading 加载数量与屏幕高度有关，高度越小加载数量越少，但并不是线性关系。
2. Lazy loading 加载数量与网速有关，网速越慢，加载数量越多，但并不是线性关系。
3. Lazy loading 加载没有缓冲，滚动即会触发新的图片资源加载。
4. Lazy loading 加载在窗口 resize 尺寸变化时候也会触发，例如屏幕高度从小变大的时候。
5. Lazy loading 加载也有可能会先加载后面的图片资源，例如页面加载时滚动高度很高的时候。

## 参考链接

- [Lazy loading - Web 性能 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/Performance/Lazy_loading)
- [Lazy loading via attribute for images & iframes 兼容性](https://caniuse.com/loading-lazy-attr)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/native-img-loading-lazy/  

