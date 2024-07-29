# 现代 CSS 解决方案：CSS 四舍五入数值单位


本文将介绍另外一个非常实用的 CSS 数学函数 - `round()` 及其实际应用场景。

&lt;!--more--&gt;

## 何为 CSS round 函数

&gt; 这是一个比较新的 CSS 函数，在 [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/#funcdef-round) 规范中提出，自 2024 年 5 月起，此功能适用于最新设备和浏览器版本。此功能可能无法在较旧的设备或浏览器中使用。

CSS `round()` 函数**根据选定的舍入策略返回舍入数**。

作者应使用自定义 CSS 属性（例如 `--my-property`）作为舍入值、间隔或两者兼而有之；如果这些函数具有已知值，使用 `round()` 函数显然不太必要。

### 语法规则

`round()` 的完整语法规则还是比较复杂的。完整的介绍可以看 [MDN - round()](https://developer.mozilla.org/en-US/docs/Web/CSS/round)。

```css
&lt;round()&gt; = round( &lt;rounding-strategy&gt;?, &lt;valueToRound&gt; , &lt;roundingInterval&gt; )
```

`round(&lt;rounding-strategy&gt;, valueToRound, roundingInterval)` 函数指定可选的舍入策略、要舍入的值（或数学表达式）和舍入间隔（或数学表达式）。根据舍入策略，`valueToRound` 四舍五入到 `roundingInterval` 的最接近整数倍。

- `&lt;rounding-strategy&gt;`: 可选参数，表示舍入策略。这可能是以下值之一：
  - `up`: 相当于 JavaScript Math.ceil() 方法，将 valueToRound 向上舍入到 roundingInterval 最接近的整数倍。这相当于 JavaScript Math.ceil() 方法。
  - `down`: 将 valueToRound 向下舍入为 roundingInterval 最接近的整数倍。这相当于 JavaScript Math.floor() 方法。
  - `nearest`: 将 valueToRound 舍入为 roundingInterval 的最接近的整数倍，该倍数可以高于或低于该值。如果 valueToRound 是上方和下方舍入目标之间的一半，则会向上舍入。相当于 JavaScript Math.round()。
  - `to-zero`: 将 valueToRound 舍入为 roundingInterval 接近/接近零的最接近整数倍。这相当于 JavaScript Math.trunc() 方法。
- `&lt;valueToRound&gt;`: 需要被四舍五入的值。必须是 `&lt;number&gt;`、`&lt;dimension&gt;` 或 `&lt;percentage&gt;`，或者解析为这些值之一的数学表达式。
- `&lt;roundingInterval&gt;`: 舍入的间隔规则。这是一个 `&lt;number&gt;`、`&lt;dimension&gt;` 或 `&lt;percentage&gt;`，或者解析为这些值之一的数学表达式。

### 示例

```css
width: round(var(--width), 50px);
width: round(up, 101px, var(--interval));
width: round(down, var(--height), var(--interval));
margin: round(to-zero, -105px, 10px);
```

MDN 官方写了一个完整的例子，可以看 [Playground | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/round)。

## 有什么用

上面讲了一大堆概念，那这玩意到底有什么用勒？

好好好，那就再回想一下在此之前我们开发中遇到的痛点吧：

- 解决基于 transform 的模糊问题
- 使用 `round()` 模拟步骤缓动动画
- 解决百分比或者 `rem` 单位的四舍五入问题

前两点可以看 ChokCoco 的文章 [现代 CSS 解决方案：数学函数 Round](https://www.cnblogs.com/coco1s/p/17676226.html)，里面有详细的讲解。

而我遇到的主要问题就是第三点，也就是由于浏览器渲染机制，导致有时百分比或者 `rem` 的单位实际计算值为小数的情况引起的系列问题。

造成这个现象的主要原因有：

- 像素单位和设备像素比（DPR）
- 浏览器的子像素渲染偏差

举个例子吧：

```css
.container {
  width: 100px;
}
.child {
  width: 33.33%;
}
```

如果容器 `.container` 中有三个 `.child` 元素，那么每个 `.child` 的理论宽度应该是 `33.33px`。然而，由于不能将像素拆分，浏览器采取四舍五入方式处理，从而得到了 `33px` 或 `34px` 的结果。然而，为了保持布局的精确性，浏览器实际上以子像素的方式保存了这些值，并且在渲染时考虑了这部分差异。

但是！！！坑爹的是，不同浏览器的处理方式也会不同，还有就是子孙节点继承宽度时可能会有四舍五入导致子孙节点宽度大于父节点宽度的问题。

## 实际场景应用

在 FixIt 主题中，页面内容分为左、中、右三栏：

```scss
.wrapper main.container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-inline: 1rem;
  gap: 0.5rem;
  .page {
    width: 56%;
    #comments {
      width: 100%;
      // 评论区域 iframe
      iframe {
        width: 100%;
      }
    }
  }
}
```

例如在 `1440px` 的屏幕上，中间内容宽度应该为 `(1440 - 2 * 16) * 0.56 = 788.48px`，实际渲染结果却是是 `788.48px`。

问题来了，在内容的最后加上一个 giscus 评论区域，评论区域容器 `iframe` 和 `iframe` 里面的内容按理说应该都是 `788.48px`，但是实际渲染结果却是：

- 评论容器 `iframe`：`788.48px`
- `iframe` 内评论内容 HTML：`789px`

怎么说？无奈不，四舍五入，你舍掉其实这个场景我也就不纠结了，恰好它是符合**五入**的规则，向上 `1px` 取整了，导致的视觉上的影响就是 giscus 评论区域右侧的边框巧合不见了。—T_T—

那怎么搞勒，治标不治本的做法就是，把评论区 `#comments` 的宽度缩写一些，但是我不想这样做。

我想既然问题是小数点造成的，避免产生小数点不就好了，然后就用到了 `round()` 函数：

```css
.page {
  width: round(56%, 2px);
}
```

我希望页面中间永远是偶数，这样可以同时避免左、中、右三个部分出现小数，所以这里的 `roundingInterval` 设置为 `2px`，表示四舍五入到 `2px` 的整数倍，这样就避免了小数点的问题。

好了，问题就这样愉快地解决了……吗？

好吧，并没有。—T_T—

## 兼容性

开头说了这是一个比较新的 CSS 函数，所以兼容性肯定是个问题。尽管**截至 2024 年 7 月 29 日**，`round()` 函数覆盖了 **67.63%** 的浏览器，并且在各类浏览器中的最新几个版本都得到了完全支持（忽略 IE），但是在一些老版本的浏览器中还是不支持的，如下图。

{{&lt; caniuse &#34;mdn-css_types_round&#34; &gt;}}

那又怎么搞勒？要崩溃了，最讨厌兼容性了，也讨厌 Polyfill，但是毕竟 FixIt 主题不是我一个人在用，还是加一下 Polyfill 吧。

好家伙！没有 Polyfill 可用。真要崩溃了，前面都白折腾了？—T_T—

也不是没有办法，自己写一个，利用 `@supports` 写一些兼容性代码吧，不支持的就不用 `round()` 函数了。

上面简化后的例子兼容性可以这样写：

```scss
// 顺便提一下，大写 ROUND 是为了避免和 Sass 的 round 函数冲突，CSS 中对函数关键词大小写不敏感。
.wrapper main.container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-inline: 1rem;
  gap: 0.5rem;
  .page {
    width: ROUND(56%, 2px);

    #comments {
      width: 100%;
      // 评论区域 iframe
      iframe {
        width: 100%;
      }
    }
  }

  // 如果不支持 round() 函数，回退到设定固定值 56%
  @supports not (width: ROUND(56%, 2px)) {
    .page {
      width: 56%;
    }
  }

  /* ... */
}
```

好了，跌跌撞撞就这样了，等过两年 `round()` 函数覆盖率更高了我第一件事就是把上面的兼容性代码删掉。:joy:


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/css-round/  

