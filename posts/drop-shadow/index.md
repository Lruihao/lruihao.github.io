# 现代 CSS 解决方案之异形元素怎么设置阴影？


今天记录一个 CSS 小知识点，如何给异形元素设置阴影。

<!--more-->

## 遇到的问题

之前给博客头部设置了一个 [异形元素](/images/drop.responsive.svg)，当时给它父元素设置了如下 `box-shadow`：

```css
header {
  box-shadow: 0 0 1.5rem 0 rgba(0, 0, 0, 0.1);
}
```

发现只有矩形部分有阴影，异形部分没有阴影。是因为 `box-shadow` 只能给盒子模型设置阴影，异形元素无法设置阴影的。

那怎么给异形元素设置阴影呢？

## 解决方法

可以使用 `filter` 属性的 `drop-shadow` 函数来给异形元素设置阴影。

`drop-shadow` 绘制的投影实际上是输入图像的 alpha 蒙版的一个模糊的、偏移的版本，用特定的颜色绘制并合成在图像下面。

{{< admonition note "备注" >}}
这个函数有点类似于 `box-shadow` 属性。`box-shadow` 属性在元素的整个框后面创建一个矩形阴影，而 `drop-shadow()` 过滤器则是创建一个符合图像本身形状 (alpha 通道) 的阴影。
{{< /admonition >}}

语法如下：

```css
drop-shadow(offset-x offset-y standard-deviation color)
```

可以看出，`drop-shadow` 比 `box-shadow` 少了一个阴影的扩展半径 `spread-radius` 参数（或者说尚未实现）。

回到我的问题，给异形元素设置阴影的代码如下：

```css
header {
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.1));
}
```

## 浏览器支持

{{< caniuse "mdn-css_types_filter-function_drop-shadow" >}}

## 参考链接

- [drop-shadow() - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/drop-shadow/  

