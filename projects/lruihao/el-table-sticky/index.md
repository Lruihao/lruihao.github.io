# A plugin includes a set of directives to make the header, footer and horizontal scrollbar sticky or make highly adaptive of Element UI (Vue 2) tables.

# el-table-sticky

[在线示例](https://lruihao.github.io/el-table-sticky/)

> 一个用于实现 Element UI (Vue 2) 表格的表头吸顶、表尾吸底、滚动条吸底以及高度自适应功能的指令集插件。

## 背景

Element UI 的表格组件在使用时，如果表格内容过多，表格会出现滚动条，但是表头不会吸顶，表尾合计行也不会吸底，这样在表格内容过多时，表头和表尾合计行就会被遮挡，如果有横向滚动条，每次想滚动必须滑动到最底下，这一系列痛点，非常影响用户体验。

**Element UI 的解决办法**：通过设置 `max-height` 或者 `height` 属性来实现上述需求。

**Element UI 的解决不足点**：高度值只支持设置数字型，在实际开发中往往需要借助 JS 来计算。

为了解决以上痛点/需求，减少开发和维护成本，于是就有了这个插件，详见 [思路分析](http://lruihao.cn/projects/el-table-sticky/)。

## 特性

`v-sticky-*` 指令依赖于 `position: sticky` 属性，不支持 IE 浏览器。

- [x] 支持表头吸顶 (v-sticky-header)
- [x] 支持表尾合计行吸底 (v-sticky-footer)
- [x] 支持横向滚动条吸底 (v-sticky-scroller)
- [x] 支持高度自适应 (v-height-adaptive)

## 安装

```bash
npm install @cell-x/el-table-sticky
```

## 注册指令

全局注册指令：

```js
import elTableSticky from '@cell-x/el-table-sticky'

Vue.use(elTableSticky)

// 或者

Vue.use(elTableSticky, {
  StickyHeader: {
    // 吸顶偏移量，可以是 CSS 支持的距离值，如 `0px`、`10%`、`calc(100vh - 1rem)` 等
    offsetTop: 0,
    // 滚动条吸底偏移量，可以是 CSS 支持的距离值，如 `0px`、`10%`、`calc(100vh - 1rem)` 等
    offsetBottom: 0,
  },
  StickyFooter: {
    // 吸底偏移量，可以是 CSS 支持的距离值，如 `0px`、`10%`、`calc(100vh - 1rem)` 等
    offsetBottom: 0,
  },
  StickyScroller: {
    // 吸底偏移量，可以是 CSS 支持的距离值，如 `0px`、`10%`、`calc(100vh - 1rem)` 等
    offsetBottom: 0,
  },
  HeightAdaptive: {
    // 底部偏移量，只能是数字型
    offsetBottom: 0,
  }
})
```

局部注册指令：

```js
import {
  StickyHeader,
  StickyFooter,
  StickyScroller,
  HeightAdaptive,
} from '@cell-x/el-table-sticky'

export default {
  directives: {
    StickyHeader: new StickyHeader({ offsetTop: 0, offsetBottom: 0 }).init(),
    StickyFooter: new StickyFooter({ offsetBottom: 0 }).init(),
    StickyScroller: new StickyScroller({ offsetBottom: 0 }).init(),
    HeightAdaptive: new HeightAdaptive({ offsetBottom: 0 }).init(),
  }
}
```

## 使用

```html
<el-table v-sticky-header>...</el-table>
<el-table v-sticky-footer>...</el-table>
<el-table v-sticky-scroller>...</el-table>
<el-table v-height-adaptive>...</el-table>
```

## 指令参数

| 指令                | 说明               | 修饰符    | 类型                     | 默认值                        |
| ------------------- | ------------------ | --------- | ------------------------ | ----------------------------- |
| `v-sticky-header`   | 表头吸顶指令       | `.always` | `Object{Number, String}` | offsetTop: 0, offsetBottom: 0 |
| `v-sticky-footer`   | 表尾合计行吸底指令 | `.always` | `Object{Number, String}` | offsetBottom: 0               |
| `v-sticky-scroller` | 横向滚动条吸底指令 | `.always` | `Object{Number, String}` | offsetBottom: 0               |
| `v-height-adaptive` | 高度自适应指令     | -         | `Object{Number}`         | offsetBottom: 0               |

## 注意事项

- `v-sticky-header` 和 `v-sticky-footer` 已内置滚动条吸底功能，无需重复使用 `v-sticky-scroller` 指令
- 当 `v-sticky-header` 和 `v-sticky-footer` 同时使用时，滚动条 `offsetBottom` 以 `v-sticky-footer` 为准
- 横向滚动条默认显示方式为 `hover`，可通过设置修饰符 `.always` 改为一直显示
- `v-height-adaptive` 指令不依赖于 `position: sticky` 属性，可单独使用

## Project setup

```bash
yarn install
# Compiles and hot-reloads for development
yarn serve
# Compiles and minifies for production
yarn build
# Compiles and minifies for production with demo
yarn build:demo
# Lints and fixes files
yarn lint
```

Customize configuration see [Configuration Reference](https://cli.vuejs.org/config/).


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/el-table-sticky/  

