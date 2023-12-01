# 拖拽式仪表盘 - 组件配置文档


本文将对 Dashboard 组件的使用方法进行介绍。

<!--more-->

## A note on terminology

“Widget（小部件）”和“Component（组件）”都是计算机科学中常见的术语，用于描述可重复使用的用户界面元素。Widget 通常更简单，具有预定义的样式和功能，而 Component 可以更灵活、可定制，并具有更丰富的行为和交互性。Widget 更倾向于描述独立的、自包含的小型组件，而 Component 则更倾向于描述较大规模的、可组合的用户界面元素。

Vue 项目通常选用 Component，与之相比仪表盘组件功能更加局限，使用 Widget 来描述显然更符合实际情况。

## Widget Example

完整例子详见 [`@/components/Dashboard/widgets/example.vue`][widget-example] 组件。

## Inject

dashboard 组件及其后代组件可以通过注入 `$dashboard` 访问容器中的属性或方法。

- `$dashboard` (Object): 当前 dashboard 容器实例

例如：

```html
<script>
export default {
  name: 'ExampleWidget',
  widget: { /* ... */ },
  inject: ['$dashboard'],
  mounted() {
    // 组件通过 this.$dashboard 访问容器中的属性或方法
    this.$dashboard.notify('example widget mounted')
  },
  /* ... */
}
</script>
```

## Props

容器中的组件可以接收一些上层传递的参数，如下：

| 参数         | 类型      | 说明                                                    |
| ------------ | --------- | ------------------------------------------------------- |
| `item`       | `Object`  | 组件实例数据                                            |
| `params`     | `Object`  | 组件参数，用于接收用户已配置的参数，支持 `.sync` 修饰符 |

## Widget Properties

| 属性     | 类型     | 必填 | 说明                                            |
| -------- | -------- | :--: | ----------------------------------------------- |
| `name`   | `String` | `Y`  | 组件名称，必须且唯一（同 Vue 组件 `name` 属性） |
| `widget` | `Object` | `Y`  | 组件配置信息，[参考文档][grid-item-properties]  |

`widget` 配置如下：

| 属性          | 类型      | 必填 | 说明                                                                                |
| ------------- | --------- | :--: | ----------------------------------------------------------------------------------- |
| `name`        | `String`  | `Y`  | 组件名称，用于在组件列表中显示组件名称                                              |
| `icon`        | `String`  | `Y`  | 组件图标，用于在组件列表中显示组件图标，支持 `el-icon`、`iconfont` 和 `svg-icon`    |
| `params`      | `Object`  | `N`  | 组件参数，一般搭配 `setting` 钩子函数使用                                           |
| `disabled`    | `Boolean` | `N`  | 是否禁用组件，设置为 `true` 则不会被注册（组件弃用时可设置为 `true`）               |
| `hidden`      | `Boolean` | `N`  | 是否隐藏组件，设置为 `true` 则不会在组件列表中显示（组件即将弃用时可设置为 `true`） |
| `w`           | `Number`  | `Y`  | 组件宽度                                                                            |
| `h`           | `Number`  | `Y`  | 组件高度                                                                            |
| `minW`        | `Number`  | `N`  | 组件最小宽度                                                                        |
| `minH`        | `Number`  | `N`  | 组件最小高度                                                                        |
| `maxW`        | `Number`  | `N`  | 组件最大宽度                                                                        |
| `maxH`        | `Number`  | `N`  | 组件最大高度                                                                        |
| `isResizable` | `Boolean` | `N`  | 是否可调整大小                                                                      |

## Widget Events

| 事件名             | 类型       | 说明                            | 回调参数      |
| ------------------ | ---------- | ------------------------------- | ------------- |
| `refresh`          | `Function` | hook for refresh widget item    | item          |
| `setting`          | `Function` | hook for setting widget item    | item          |
| `move`             | `Function` | hook for moving widget item     | item, ...args |
| `moved`            | `Function` | hook for moved widget item      | item, ...args |
| `resize`           | `Function` | hook for resizing widget item   | item, ...args |
| `resized`          | `Function` | hook for resized widget item    | item, ...args |
| `containerResized` | `Function` | hook for resized grid container | item, ...args |

> 参数说明：
>
> - item：`Object`，组件实例数据，[参考文档][grid-item-properties]
> - args：`Array`，传递给事件的其他参数，[参考文档][grid-item-events]

## Widget Styles

组件默认含有 `box-shadow`、`background-color` 等样式，可在组件根节点通过以下样式调整或根据实际情况自行覆盖。

| 名称              | 类型    | 说明                                                           |
| ----------------- | ------- | -------------------------------------------------------------- |
| `shadow`          | `prop`  | 组件阴影，可选值：`always`、`hover`、`never`，默认值：`always` |
| `.bg-transparent` | `class` | 组件背景透明                                                   |

## Widget Directory

dashboard 组件统一存放目录：

- 通用组件：`@/components/Dashboard/widgets/`
- 模块组件：`@/views/{module_name}/widgets/`

<!-- link reference definition -->
[widget-example]: <https://github.com/Lruihao/vue-el-demo/blob/main/src/components/Dashboard/widgets/example.vue>
[grid-item-properties]: <https://jbaysolutions.github.io/vue-grid-layout/zh/guide/properties.html#griditem>
[grid-item-events]: <https://jbaysolutions.github.io/vue-grid-layout/zh/guide/events.html#griditem>


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/dashborad-widget-docs/  

