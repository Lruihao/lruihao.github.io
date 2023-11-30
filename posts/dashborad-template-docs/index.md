# 拖拽式仪表盘 - 布局模板文档


`Dashboard` 组件 [^1] 是一个公共模板组件，用于快速创建 Dashboard 页面。

## Basic Usage

1. 每个模块的 dashboard 页面可继承 `Dashboard` 组件，如：

    ```html
    <script>
    import Dashboard from '@/components/Dashboard'

    export default {
      name: 'Dashboard',
      extends: Dashboard,
    }
    </script>
    ```

2. 使用 `registerComponents` 函数注册组件，通用组件模板中默认已导入，模块组件需要自行导入，如：

    ```html
    <script>
    import Dashboard, { registerComponents } from '@/components/Dashboard'

    // 加载 widgets 目录下所有组件
    const requireComponents = require.context('./widgets', true, /\.vue$/)
    const components = registerComponents(requireComponents)

    export default {
      name: 'Dashboard',
      extends: Dashboard,
      created() {
        // 加载组件列表
        this.addComponents('组件分类', components)
      },
    }
    </script>
    ```

3. 设置默认布局

    ```html
    <script>
    import Dashboard, { registerComponents } from '@/components/Dashboard'

    // ...

    export default {
      name: 'Dashboard',
      extends: Dashboard,
      data() {
        return {
          // 设置默认布局
          defaultLayout: [
            { i: 1, component: 'ExampleWidget', name: '便利贴', x: 0, y: 0, w: 8, h: 8, params: { content: 'hello world!' }},
            // ...
          ],
        }
      },
      // ...
    }
    </script>
    ```

> 完整例子详见 [`@/views/dashboard/index.vue`][dashboard-usage] 页面。

## Export

- `registerComponents` (Function): 注册组件（widget.disabled 为 true 的组件不注册）
  - param `requireComponents` (Function): require.context 函数
  - return (Array) 已注册的组件列表

## Provide

提供当前 dashboard 实例给后代组件注入，用于后代组件访问容器内的属性或方法。

- `$dashboard` (Object): 当前 dashboard 容器实例

## Data Properties

- `componentsList` (Array): 组件列表 e.g. [{ category: '分类名称', components: [组件列表] }]
- `isCollapse` (Boolean): 是否折叠侧边栏
- `colNum` (Number): 栅格列数
- `rowHeight` (Number): 栅格行高
- `gaps` (Array): 栅格间隙 [水平间隙，垂直间隙] e.g. [8, 8]
- `dashboardGrid` (Element): 可接收拖放的栅格容器
- `dashboardList` (Array): 仪表盘列表
- `dashboard` (Object): 仪表盘数据
  - `id` (Number): 仪表盘 ID
  - `route` (String): 路由名称
  - `name` (String): 仪表盘名称
  - `layout` (Array): 组件布局数据
  - `aside` (String): 侧边栏位置（left 或 right）
  - `compact` (Boolean): 是否垂直压缩布局
  - `isDefault` (Boolean): 是否默认布局
- `responsive` (Boolean): 是否响应式布局
- `loading` (Boolean): 是否正在加载/保存布局数据
- `defaultLayout` (Array): 默认布局组件数据
- `hasEditPermission` (Boolean): 是否有编辑权限
- `selectedCategory` (String): 已选中的组件分类
- `menuCollapse` (Boolean): 是否折叠组件分类菜单

## Computed Properties

- `selectedDashboardId` (Number): 已选中的仪表盘 ID
- `components` (Array): 所有已注册组件，用于 dashboard 布局中的组件渲染，包含 `hidden` 为 `true` 的组件
- `componentsListAvailable` (Array): 过滤后的组件列表，用于组件列表显示，过滤 `hidden` 为 `true` 的组件，过滤组件列表为空的分类
- `componentsByCategory` (Array): 根据 selectedCategory 获取对应的组件列表

## Methods

### notify(message, type = 'success')

dashboard 显示通知

| 参数    | 类型     | 说明                                                    |
| ------- | -------- | ------------------------------------------------------- |
| message | `String` | 通知内容                                                |
| type    | `String` | 通知类型，可选值：`success`、`warning`、`info`、`error` |

### addComponents(category, components, isPrepend = false)

添加组件列表及分类

| 参数       | 类型      | 说明                   |
| ---------- | --------- | ---------------------- |
| category   | `String`  | 组件分类               |
| components | `Array`   | 组件列表               |
| isPrepend  | `Boolean` | 是否追加到组件列表开头 |

### selectCategory(category)

选中组件分类时显示对应的组件列表

| 参数     | 类型     | 说明     |
| -------- | -------- | -------- |
| category | `String` | 组件分类 |

### switchDashboard(id)

切换仪表盘

| 参数 | 类型             | 说明                 |
| ---- | ---------------- | -------------------- |
| id   | `Number/String` | 仪表盘 ID 或者 'new’ |

### handleCommand(type)

处理仪表盘操作

| 参数 | 类型     | 说明                                       |
| ---- | -------- | ------------------------------------------ |
| type | `String` | 操作类型，可选值：`copy`、`edit`、`delete` |

### guide()

打开新手引导

### refreshAllItems()

刷新容器内所有组件的数据

### clearLayout()

清空布局

### idIncrement()

生成一个自增的 id，用于组件的唯一标识 i

### sortItems()

对 layout 数据进行排序，按照 y 坐标从小到大，x 坐标从小到大的顺序

### addItem(component, widget)

添加组件到 layout 中

| 参数      | 类型     | 说明                                 |
| --------- | -------- | ------------------------------------ |
| component | `String` | 组件名称，对应组件的 name 属性       |
| widget    | `Object` | 组件配置对象，对应组件的 widget 属性 |

### removeItem(i, save = true)

从 layout 中移除组件

| 参数 | 类型      | 说明                 |
| ---- | --------- | -------------------- |
| i    | `String`  | 组件的唯一标识       |
| save | `Boolean` | 是否立即保存布局数据 |

### confirmRemoveItem(i)

用户删除组件双重确认

| 参数 | 类型     | 说明           |
| ---- | -------- | -------------- |
| i    | `String` | 组件的唯一标识 |

### hasHook(component, hook)

判断组件是否有配置对应的 hook

| 参数      | 类型     | 说明                           |
| --------- | -------- | ------------------------------ |
| component | `String` | 组件名称，对应组件的 name 属性 |
| hook      | `String` | 需要判断的 hook 名称           |

### triggerHook(item, hook, args = [], save = false)

容器内的组件触发对应的 hook

| 参数 | 类型      | 说明                                           |
| ---- | --------- | ---------------------------------------------- |
| item | `Object`  | 组件实例数据，[参考文档][grid-item-properties] |
| hook | `String`  | 需要触发的 hook 名称                           |
| args | `Array`   | 传递给 hook 的其他参数                         |
| save | `Boolean` | 触发 hook 后是否立即保存布局数据               |

### mouseInGrid(x, y)

判断鼠标是否在容器内

| 参数 | 类型     | 说明        |
| ---- | -------- | ----------- |
| x    | `Number` | 鼠标 x 坐标 |
| y    | `Number` | 鼠标 y 坐标 |

### removeUnExistItems(fromLayout)

移除 layout 中不存在于所有已注册组件的组件

| 参数       | 类型     | 说明        |
| ---------- | -------- | ----------- |
| fromLayout | `Object` | layout 数据 |

### dragStart(e)

开始拖动 组件/侧栏 时，设置拖动来源

| 参数 | 类型    | 说明  |
| ---- | ------- | ----- |
| e    | `Event` | event |

### dragEnd(e)

结束拖动 组件/侧栏 时，清空拖动来源

| 参数 | 类型    | 说明  |
| ---- | ------- | ----- |
| e    | `Event` | event |

### drag(component, widget, e)

拖动组件时，记录拖动的组件信息和显示拖动轨迹

| 参数      | 类型     | 说明                                 |
| --------- | -------- | ------------------------------------ |
| component | `String` | 组件名称，对应组件的 name 属性       |
| widget    | `Object` | 组件配置对象，对应组件的 widget 属性 |
| e         | `Event`  | event                                |

### onDragoverDashboard(e)

拖动组件经过容器时，阻止默认事件

| 参数 | 类型    | 说明  |
| ---- | ------- | ----- |
| e    | `Event` | event |

### onDropDashboard(e)

拖动 组件/侧栏 放置到容器内时的拖放事件

| 参数 | 类型    | 说明  |
| ---- | ------- | ----- |
| e    | `Event` | event |

### getDashboard()

通过 route 获取 dashboard 数组（后端自动获取组织 ID）

### saveDashboard()

保存 dashboard

### addDashboard()

新增 dashboard

### updateDashboard()

更新 dashboard

### deleteDashboard()

删除 dashboard

## Appendix A: Data Dictionary

仅供参考

| 字段名          | 字段类型     | 字段说明   |
| --------------- | ------------ | ---------- |
| id              | int          | 仪表盘 ID  |
| route           | varchar(150) | 仪表盘路由 |
| layout          | longtext     | 仪表盘布局 |
| organization_id | bigint       | 组织 ID    |
| create_time     | datetime     | 创建时间   |
| update_time     | datetime     | 更新时间   |
| aside           | varchar(15)  | 侧栏位置   |
| compact         | varchar(5)   | 压缩布局   |
| name            | varchar(250) | 仪表盘名称 |

```sql {title="dashboard 表结构"}
CREATE TABLE `dashboard` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `route` varchar(150) NOT NULL DEFAULT '' COMMENT 'dashborad 名称',
  `layout` longtext COMMENT 'dashborad 布局 JSON',
  `organization_id` bigint(11) DEFAULT '0' COMMENT '组织 id',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `aside` varchar(15) DEFAULT NULL COMMENT '侧栏位置',
  `compact` varchar(5) NOT NULL DEFAULT 'false' COMMENT '压缩布局',
  `name` varchar(250) DEFAULT NULL COMMENT '仪表盘名称',
  PRIMARY KEY (`id`),
  KEY `name` (`route`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8 COMMENT='Dashboard 组件布局数据';
```

## Appendix B: API Reference

详见 [dashboard.js](https://github.com/Lruihao/vue-el-demo/blob/main/src/api/dashboard.js)

<!-- link reference definition -->
[dashboard-template]: <https://github.com/Lruihao/vue-el-demo/tree/main/src/components/Dashboard>
[dashboard-usage]: <https://github.com/Lruihao/vue-el-demo/blob/main/src/views/dashboard/index.vue>
[grid-item-properties]: <https://jbaysolutions.github.io/vue-grid-layout/zh/guide/properties.html#griditem>

<!-- footnote reference definition -->
[^1]: 基于 Vue2 和 [vue-grid-layout](https://jbaysolutions.github.io/vue-grid-layout/zh/) 开发的拖拽式 Dashboard 模板，[查看源码][dashboard-template]。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/dashborad-template-docs/  

