# 如何让 Element UI 表头、表尾、横向滚动条吸顶吸底固定？


本文将介绍如何通过自定义指令的方式实现 Element UI 表格的表头吸顶、表尾吸底、滚动条吸底以及高度自适应功能。

<!--more-->

## 背景

Element UI 的表格组件在使用时，如果表格内容过多，表格会出现滚动条，但是表头不会吸顶，表尾合计行也不会吸底，这样在表格内容过多时，表头和表尾合计行就会被遮挡，如果有横向滚动条，每次想滚动必须滑动到最底下，这一系列痛点，非常影响用户体验。

**Element UI 的解决办法**：通过设置 `max-height` 或者 `height` 属性来实现上述需求。

**Element UI 的解决不足点**：高度值只支持设置数字型，在实际开发中往往需要借助 JS 来计算。

为了解决以上痛点/需求，减少开发和维护成本，于是我开发了 [el-table-sticky](https://github.com/Lruihao/el-table-sticky) 插件，[在线示例](https://lruihao.github.io/el-table-sticky/)。

<!-- markdownlint-disable-next-line no-bare-urls -->
{{< link href="https://github.com/Lruihao/el-table-sticky" content="el-table-stick" card=true >}}

> *如果你觉得这个插件还不错，赏个 star 吧 😛，如果你有更好的实现方案，欢迎提 issue 或者 PR。*

## 解决思路

el-table-sticky 插件从两个不同的角度解决问题：

1. 通过 `position: sticky` 属性，让 el-table 的表头等元素固定

2. 沿用 Element UI 的 `max-height` 和 `height` 属性，通过自定义指令的方式，让 el-table 的表格内容高度自适应

插件包含 4 个指令：

- `v-sticky-header`：表头吸顶
- `v-sticky-footer`：表尾吸底
- `v-sticky-scroller`：横向滚动条吸底
- `v-height-adaptive`：高度自适应

目前 4 个指令在 1.x 版本都已开发完成，已发布到 npm 上，可通过以下命令安装：

```bash
npm install @cell-x/el-table-sticky
```

具体使用方式，本文不做赘述，详见 README.md。

接下来，我们来看看如何实现这些功能。

### 表头吸顶&表尾吸底

表头吸顶是我最迫切想要解决的问题，所以在 0.x 版本开发完，我就马上发布并在公司老项目中引入了。

思路拆解：

1. 找到 el-table__header 并赋予 sticky top 特性
2. Debug 发现如果 el-table-column 设置了 fixed 值，Element UI 使用的是 fixed 定位，并将 el-table__header 对应的栏位隐藏
3. el-table__header sticky 后为了让固定栏位保持和 Element UI 一样的效果，需要找到这些栏位，设置为 sticky，然后按左右方向堆叠位置

实现表头吸顶后，再看表尾合并行吸底效果也就是依葫芦画瓢，思路一样，于是为了复用代码，我抽离出来一个 [Sticky Class](https://github.com/Lruihao/el-table-sticky/blob/main/src/utils/sticky.js#L9)。

### 高度自适应

> 沿用 Element UI 的 `max-height` 和 `height` 属性，所以 el-table 初始化时必须设置高度。

这个就比较简单了，监听 el-table 元素的 resize，然后 JS 计算出表格的可用高度，最后调用 `$table.layout.setHeight` 设置高度即可。

### 横向滚动条吸底

这个指令的实现我放在最后，主要的难点在于如何创建自定义滚动条代替原生滚动条的问题，以下是我的开发过程：

1. 最开始看到了一个插件 [el-table-horizontal-scroll](https://github.com/mizuka-wu/el-table-horizontal-scroll)，它的做法是手动给 el-table 加上一个 el-scrollbar 并绑定事件处理，于是决定使用它的方案，但是看了源码，它使用的 fixed 定位和我预想有差距，而且手动绑定事件，可能有很多细节遗漏，维护起来或有诸多不便。
2. 然后，我想能不能通过 render 函数直接渲染一个 el-scrollbar，我就去看 el-scrollbar 的源码，打开源码有惊喜，第一行注释找到了[gemini-scrollbar](https://github.com/noeldelgado/gemini-scrollbar) 这个插件，打开 Github 看了一下，能够实现预期效果。
3. 开造思路：
   1. 在 el-table 中创建一个空元素当作 scroller，宽度保持和表格内容宽度一致
   2. 为 scroller 创建自定义滚动条，并赋予 sticky bottom 特性
   3. 同步 el-table 横向滚动的行为到 scroller
   4. 同步 scroller 横向滚动的行为到 el-table

A few moments later...

经过一番 code，实现了横向滚动条的吸底固定效果，但是基于 [gemini-scrollbar](https://github.com/noeldelgado/gemini-scrollbar) 实现，存在以下已知问题：

- [ ] safari 浏览器存在兼容性[^1]

- [x] 当禁用原生滚动条时，gemini-scrollbar 计算滑块偏移距离时存在误差，[详见](https://github.com/Lruihao/el-table-sticky/blob/5c80091e21841fdb78264cde52ab1588b7991e02/src/utils/scroller.js#L75-L83)

最后为了简化使用，将 `v-sticky-scroller` 的功能内置到了 `v-sticky-header` 和 `v-sticky-footer` 指令中，使用时无需重复使用。

## 总结

一念对开源蠢蠢欲动，一念对维护犹豫不决，一念成就开源，一念成就自己。

{{< center-quote >}}
Non sunt multiplicanda entia sine necessitate

若无必要，勿增实体
{{< /center-quote >}}

不到迫不得已，不要轻易造轮子，要善于发现和利用已有的轮子、最理想的状态就是永远站在巨人的肩膀上。

但是通过造轮子，可以更好的学习和理解技术，也能体会到很多写业务代码不能感受到的快乐。

学而不思则罔，思而不学则殆。

<!-- footnote reference definition -->
[^1]: *如有必要，以后版本需要替换 gemini-scrollbar 实现自定义滚动条的功能。*


---

> 作者:   
> URL: https://lruihao.cn/projects/el-table-sticky/  

