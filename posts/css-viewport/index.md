# 震惊！CSS 竟然能获取视口尺寸？


在这篇文章中，我们将探讨如何使用 CSS 获取视口尺寸，并展示一个简单的实现示例。

<!--more-->

## 效果

<!-- markdownlint-disable-next-line no-inline-html -->
> <span class="viewport-size"></span>
{.blockquote-center}

调整浏览器窗口大小，你会发现视口的宽度和高度会实时更新（旧浏览器可能不支持）。

> 重要的是，这个效果是纯 CSS 实现的，不需要 JavaScript，真的震惊了！

## 实现原理

1. 定义 CSS 自定义属性（`@property`） `--vw` 和 `--vh`，分别表示视口的宽度和高度。
2. 使用 `tan()` 和 `atan2()` 函数计算视口的宽度和高度。
3. 使用 `counter` 和 `counter-reset` 属性将计算结果显示在页面上。

### 计算视口尺寸

我们可以使用 `vw` 和 `vh` 获取浏览器视口尺寸，但是这是相对单位，所以需要转换为 `px` 才行。我们先利用自定义属性把相对单位转成 `px`，然后最关键的一步是巧妙地利用了三角函数 $tan(arctan(a)) = a$ 来实现这个转换。

### 三角函数

在三角函数中，$tan(θ)$ 表示一个角度 $θ$ 的正切值，它等于对边（opposite）与邻边（adjacent）的比值。反过来，$arctan(a)$ 表示一个数值 $a$ 的反正切值，它返回一个角度 $θ$，使得 $tan(θ) = a$，因此得到公式：

$$ tan(arctan(a)) = a $$

CSS 中的 `tan()` 和 `atan2()` 函数可以用来计算正切值和反正切值。

`tan()` 函数的语法如下：

```css
/* 单个 <angle> 值 */
width: calc(100px * tan(45deg));
width: calc(100px * tan(0.125turn));
width: calc(100px * tan(0.785398163rad));

/* 单个 <number> 值 */
width: calc(100px * tan(0.5773502));
width: calc(100px * tan(1.732 – 1));

/* 其他值 */
width: calc(100px * tan(pi / 3));
width: calc(100px * tan(e));
```

`atan2()` 函数接受两个参数，对于所给两值 `x` 和 `y`，函数 `atan2(y, x)` 计算并返回正半横轴与从原点到点 `(x, y)` 的射线的夹角。函数的语法如下：

```css
/* 两个 <number> 值 */
transform: rotate(atan2(3, 2));

/* 两个 <dimension> 值 */
transform: rotate(atan2(1rem, -0.5rem));

/* 两个 <percentage> 值 */
transform: rotate(atan2(20%, -30%));

/* 其他值 */
transform: rotate(atan2(pi, 45));
transform: rotate(atan2(e, 30));
```

## 代码示例

以下是完整的 HTML 和 CSS 代码，你也可以在我的 [html-demo](https://lruihao.github.io/html-demo/css-viewport.html) 中查看。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Viewport Size</title>
  <style>
    /* 自定义属性是为了把 vw 和 vh 转成 px */
    @property --vw {
      syntax: '<length>';
      inherits: true;
      initial-value: 100vw;
    }
    @property --vh {
      syntax: '<length>';
      inherits: true;
      initial-value: 100vh;
    }
    /*
      核心公式：
      tan(θ) = opposite / adjacent
      θ = arctan(opposite / adjacent)
      tan(arctan(a)) = a
    */
    :root {
      --width: tan(atan2(var(--vw), 1px));
      --height: tan(atan2(var(--vh), 1px));
    }
    body::before {
      content: counter(width) ' X ' counter(height);
      counter-reset: width var(--width) height var(--height);
      display: block;
      font-size: 150px;
      font-weight: 900;
      position: fixed;
      width: fit-content;
      height: fit-content;
      inset: 0;
      margin: auto;
    }
  </style>
</head>
<body>
</body>
</html>
```

## 兼容性

主要是 `counter` 和 `counter-reset` 属性的兼容性问题，看漫山红遍，层林尽染。

{{< caniuse "css-at-counter-style" >}}

{{< caniuse "mdn-css_properties_counter-reset_reset_does_not_affect_siblings" >}}


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/css-viewport/  

