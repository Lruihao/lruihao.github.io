# CSS 实现网格背景效果


本文将介绍如何使用 `linear-gradient` 、`background-size` 等属性来实现网格背景效果。

## 前言

最近在开发一个拖拽式仪表盘时，需要在拖拽组件时添加网格辅助标线来帮助布局和对齐元素。

最先想到的是使用 CSS 来实现这个效果，经过一番尝试，发现可以通过使用 CSS 的一些技术点，轻松实现不同类型的网格背景效果，包括实线网格和虚线网格。

## 前驱知识

在开始之前，我们需要了解一些必要的 CSS 属性和知识点。

- [`linear-gradient`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/linear-gradient)：CSS **`linear-gradient()`** 函数用于创建一个表示两种或多种颜色线性渐变的图片。其结果属于[`&lt;gradient&gt;`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient)数据类型，是一种特别的[`&lt;image&gt;`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/image)数据类型。
- [`radial-gradient`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/radial-gradient)：**`radial-gradient()`** [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) [函数](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Functions)创建一个图像，该图像由从原点辐射的两种或多种颜色之间的渐进过渡组成。它的形状可以是圆形或椭圆形。函数的结果是 [`&lt;gradient&gt;`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient) 数据类型的对象。这是一种特别的 [`&lt;image&gt;`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/image)。
- `background-size`
- `background-repeat`
- `background-position`
- `::before` 和 `::after` 伪元素

## 实线网格

这个效果，我最初是在刷掘金的时候发现的，掘金文章内容区的背景一个实线网格，呈现出的效果类似一页学生时代的记事本，当时觉得很有意思，于是扒下来当作了现在博客文章内容的背景。

实线网格的实现思路是使用 `linear-gradient` 来绘制横向和纵向的网格线，然后通过 `background-size` 来控制网格线的间距。

具体代码如下：

```css
.grid {
  background-image: linear-gradient(to right, rgba(60, 10, 30, 0.04) 1px, transparent 0),
    linear-gradient(to bottom, rgba(60, 10, 30, 0.04) 1px, transparent 0);
  background-size: 20px 20px;
}
```

上面的代码中，`background-image` 属性使用了两个 `linear-gradient`，通过渐变颜色从 `rgba(60, 10, 30, 0.04)` 到 `transparent` 实现了横向和纵向的网格线。通过指定 `background-size` 为 `20px 20px`，设置了背景大小为 20px，由于 `background-repeat` 默认为 `repeat`，所以就实现了 20px 间距的网格线。

## 虚线网格

虚线网格的实现思路需要借助 `::before` 和 `::after` 伪元素，然后还是通过类似实线的思路实现网格线，然后两个伪元素叠加在一起，从而实现虚线网格。

&gt; 未做实例

## 点阵网格

这里把渐变修改为径向渐变就实现点点背景了，原理和前面说的都是一样的。

```css
.grid {
  background-image: radial-gradient(circle , #5a5a5a .5px, transparent .5px);
  background-size: 20px 20px;
}
```

## 总结

最后为了实现我在实际开发中的需求，我还需要控制网格宽度为容器的 1/24，这里就需要使用 `calc()` 函数来计算了。

```css
/* 背景显示网格辅助线（宽：1/24 高：40&#43;8px） */
background-image: linear-gradient(90deg, rgba(60, 10, 30, 0.04) 1px, transparent 0),
  linear-gradient(1turn, rgba(60, 10, 30, 0.04) 1px, transparent 0);
background-size: calc((100% - 8px) / 24) 48px;
background-position: 4px 4px;
```

```css
/* 或者点阵网格辅助线（宽：1/24 高：40&#43;8px） */
background-image: radial-gradient(circle , #5a5a5a .5px, transparent .5px);
background-size: calc((100% - 8px) / 24) 48px;
background-position: 24px 24px;
```

## 参考

- [CSS&#43;HTML&lt;网格背景效果&gt;](https://zhuanlan.zhihu.com/p/345973110)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/grid-bg-image/  

