# 【CSS 奇技淫巧】CSS 实现时间轴、背景图 Loading 和渐变边框


本文将通过一个实际应用场景，展示如何使用 CSS 实现时间轴、背景图 loading 效果、渐变边框等效果。

&lt;!--more--&gt;

## 背景

最近在调整 FixIt 主题的官方文档，调整过程中总觉得首页空荡荡的少了些内容，然后就在脑海里构思了如本文封面图所示的效果，希望引导用户阅读文档。

需求分析：

1. 整体布局：左右两栏，左侧为主题文档大纲，右侧为网站预览图
2. 左侧需要显示时间轴，时间轴带有跑马灯动画效果（暗指文档阅读顺序）
3. 右侧加载网站预览图时，需要有 loading 效果
4. 整体边框需要渐变效果

第一点很简单，一个 `flex` 布局就能搞定了，这里不再展开。

接下来我们重点看看如何实现时间轴、背景图 loading 效果和渐变边框。

## 时间轴

先睹为快，效果如下：

![时间轴动画](images/demo-outline.gif &#34;从上到下依次点亮时间轴&#34;)

我不希望时间轴的实现和其他 UI 框架一样拥有复杂的 DOM 结构，所以使用最简单的 `ul` 和 `li` 即可，关键代码如下：

```html
&lt;ul class=&#34;docs-outline&#34;&gt;
  &lt;li&gt;&lt;a href=&#34;{{ $page1.Permalink }}&#34; title=&#34;{{ $page1.Description }}&#34;&gt;{{ $page1.LinkTitle }}&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&#34;{{ $page2.Permalink }}&#34; title=&#34;{{ $page2.Description }}&#34;&gt;{{ $page2.LinkTitle }}&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&#34;{{ $page3.Permalink }}&#34; title=&#34;{{ $page3.Description }}&#34;&gt;{{ $page3.LinkTitle }}&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&#34;{{ $page4.Permalink }}&#34; title=&#34;{{ $page4.Description }}&#34;&gt;{{ $page4.LinkTitle }}&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
```

DOM 结构就这么简单，重点在于 CSS 的实现，实现思路如下：

- 先把 `ul` 设置 `list-style: none`，去掉默认的 `li` 样式
- 利用 `::before` 和 `::after` 伪元素实现时间轴的小圆点和连接线
- 动画效果：四个小圆点默认和连接线一样灰色，然后依次点亮，可以使用 `animation-delay` 属性实现

动画效果关键帧代码如下：

```scss
li::before {
  border: var(--timeline-width) solid var(--timeline-color);
  animation-name: border-color-fade;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: calc(var(--timeline-index) * 0.3s);

  @keyframes border-color-fade {
    0% {
      border-color: var(--timeline-color);
    }
    50% {
      border-color: var(--timeline-cyclic-color);
    }
    100% {
      border-color: var(--timeline-color);
    }
  }
}
```

通过 `nth-child` 选择器来设置 `--timeline-index` 来线性增加每个小圆点的动画延迟时间，从而在视觉上出现依次点亮的效果。

如果使用 SCSS 可以简化代码，如下：

```scss
@for $i from 1 through 4 {
  li:nth-child(#{$i}) {
    --timeline-index: #{$i};

    &amp;::before {
      content: &#39;#{$i}&#39;;
    }
  }
}
```

如果需要在小圆点的内部显示序号，可以像设置 `--timeline-index` 一样依次设置 `content`。

然后在小圆点点亮动画过程中同时转变 `color: transparent` 到具体的颜色即可。

## 背景图 loading 效果

![背景图 loading 效果](images/demo-loading.gif &#34;先加载 loading 图再加重预览图&#34;)

如果只是想实现图片的 loading 效果其实很简单，之前在「[浏览器 IMG 图片原生懒加载 Loading=&#34;lazy&#34;](/posts/native-img-loading-lazy/)」中有介绍过，但是这次我是把图片当作背景图片使用的，那问题来了，不通过 JS 背景图片的 loading 效果怎么实现呢？

还是可以利用 `::before` 和 `::after` 伪元素，一个伪元素用来显示 loading 图，另一个伪元素用来显示背景图片。

原理：利用两张图片加载的时间差，由于 loading 图片很小，所以加载很快，而背景图片加载较慢，然后默认不设置 `z-index` 的情况下，后面的元素会在上层，所以在背景图片加载完成前，loading 图片会一直显示。

关键代码如下：

```scss
.docs-preview {
  &amp;::before,
  &amp;::after {
    content: &#39;&#39;;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  &amp;::before {
    background-color: rgba(204, 204, 204, 0.1);
    background-image: url(/images/loading.min.svg);
    background-size: 60px;

    [data-theme=&#39;dark&#39;] &amp; {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  &amp;::after {
    background-image: url(/images/apple-devices-preview.webp);
    background-size: 130%;
  }
}
```

## 渐变边框

最后一个效果是渐变边框，这个效果其实很简单，利用线性渐变 `linear-gradient` 分别设置 `padding-box` 和 `border-box` 的背景即可实现。

```scss
.docs-navigation {
  background: linear-gradient($global-background-color, $global-background-color) padding-box, linear-gradient(45deg, #42d392, #FF7359) border-box;
}
```

## 最后的效果

为了方便使用 FixIt 主题的用户在自己的笔记内插入 FixIt 官方文档的书签，我把这个效果封装成了一个独立的组件，你可以在 [hugo-fixit/shortcode-docs-bookmark](https://github.com/hugo-fixit/shortcode-docs-bookmark) 中找到完整代码及食用方法。

{{&lt; fixit-docs-bookmark &gt;}}

## 总结

很多时候都感觉写 CSS 就像在写诗，相同的效果 CSS 实现往往会比 JS 更加优雅。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/fixit-docs-bookmark/  

