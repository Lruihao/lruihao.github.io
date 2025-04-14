# 拖拽式仪表盘 - 组件开发


本文介绍将如何开发一个仪表盘组件，以及组件开发的灵感来源。

<!--more-->

## 第一个组件

先通过一个简单的便利贴组件为例，介绍如何开发一个仪表盘组件。

Talk is cheap. Show you the code.

```vue {title="便利贴组件（dashboard 示例组件）"}
<template>
  <el-card>
    <span class="note-content">{{ params.content }}</span>
    <el-popover
      v-model="formVisible"
      trigger="manual"
      popper-class="form-popover"
    >
      <el-form
        ref="form"
        label-width="80px"
        label-position="top"
        :model="form"
        :rules="rules"
      >
        <el-form-item label="便利贴" prop="content">
          <el-input v-model="form.content" type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" />
        </el-form-item>
      </el-form>
      <div class="text-right">
        <el-button type="text" size="mini" @click="formVisible = false">取消</el-button>
        <el-button type="primary" size="mini" @click="save">保存</el-button>
      </div>
    </el-popover>
  </el-card>
</template>

<script>
export default {
  /**
   * 组件名称，必须且唯一
   */
  name: 'ExampleWidget',
  /**
   * 组件配置对象
   * @property {String} name 组件名称，用于在组件列表中显示组件名称
   * @property {String} [icon='el-icon-postcard'] 组件图标，用于在组件列表中显示组件图标，支持 el-icon、iconfont 和 svg-icon
   * @property {Object} [params] 组件参数，一般搭配 setting 钩子函数使用
   * @property {Boolean} [disabled] 是否禁用组件，设置为 true 则不会被注册（组件弃用时可设置为 true）
   * @property {Boolean} [hidden] 是否隐藏组件，设置为 true 则不会在组件列表中显示（组件即将弃用时可设置为 true）
   * 以下参数参考 https://jbaysolutions.github.io/vue-grid-layout/zh/guide/properties.html#griditem
   * @property {Number} w 组件宽度
   * @property {Number} h 组件高度
   * @property {Number} [minW] 组件最小宽度
   * @property {Number} [minH] 组件最小高度
   * @property {Number} [maxW] 组件最大宽度
   * @property {Number} [maxH] 组件最大高度
   * @property {Boolean} [isResizable=false] 是否可调整大小
   */
  widget: {
    name: '便利贴',
    icon: 'el-icon-postcard',
    params: {
      content: '',
    },
    disabled: false,
    hidden: false,
    w: 8,
    h: 3,
    minW: 8,
    minH: 3,
    maxW: 24,
    maxH: 6,
    isResizable: true,
  },
  inject: ['$dashboard'],
  props: {
    /**
     * 组件实例数据
     */
    item: {
      type: Object,
      default: () => ({}),
    },
    /**
     * 组件参数，用于接收用户已配置的参数，支持 `.sync` 修饰符
     */
    params: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      formVisible: false,
      form: {
        content: '',
      },
      rules: {
        content: [{ required: true, message: '请输入便利贴内容', trigger: 'change' }],
      },
    }
  },
  watch: {
    '$dashboard.isCollapse'(val) {
      // 当侧栏组件列表折叠时，关闭配置弹窗
      if (val) {
        this.formVisible = false
      }
    },
    'params.content'(val) {
      // 当用户修改了参数，更新表单中对应的参数
      this.form.content = val
    },
  },
  mounted() {
    this.form = { ...this.params }
  },
  /**
   * hook for refresh widget item
   * 点击刷新组件按钮时触发，一般用于刷新组件数据
   * @param {Object} item 组件实例数据
   */
  refresh(item) {
    // to refresh widget data
  },
  /**
   * hook for setting widget item
   * 点击配置组件按钮时触发，一般搭配 widget.params 使用
   * @param {Object} item 组件实例数据
   */
  setting(item) {
    this.formVisible = true
  },
  /**
   * hook for moving widget item
   * @param {Object} item item config data
   * @param {Number} i the item id/index
   * @param {Number} newX new x position in grid rows
   * @param {Number} newY new y position in grid columns
   */
  move(item, i, newX, newY) {
    // to do something when widget item moving
  },
  /**
   * hook for moved widget item
   * @param {Object} item item config data
   * @param {Number} i the item id/index
   * @param {Number} newX new x position in grid rows
   * @param {Number} newY new y position in grid columns
   */
  moved(item, i, newX, newY) {
    // to do something when widget item moved
  },
  /**
   * hook for resizing widget item
   * @param {Object} item item config data
   * @param {Number} i the item id/index
   * @param {Number} newH new height in grid rows
   * @param {Number} newW new width in grid columns
   * @param {String} newHPx new height in pixels
   * @param {String} newWPx new width in pixels
   */
  resize(item, i, newH, newW, newHPx, newWPx) {
    // to do something when widget item resizing
  },
  /**
   * hook for resized widget item
   * @param {Object} item item config data
   * @param {Number} i the item id/index
   * @param {Number} newH new height in grid rows
   * @param {Number} newW new width in grid columns
   * @param {String} newHPx new height in pixels
   * @param {String} newWPx new width in pixels
   */
  resized(item, i, newH, newW, newHPx, newWPx) {
    // to do something when widget item resized
  },
  /**
   * hook for container resized
   * @param {Object} item item config data
   * @param {Number} i the item id/index
   * @param {Number} newH new height in grid rows
   * @param {Number} newW new width in grid columns
   * @param {String} newHPx new height in pixels
   * @param {String} newWPx new width in pixels
   */
  containerResized(item, i, newH, newW, newHPx, newWPx) {
    // to do something when container resized
  },
  methods: {
    /**
     * 保存配置
     * 通过 update:params 事件将配置传递给父组件
     */
    save() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.formVisible = false
          this.$emit('update:params', { ...this.form })
          this.$dashboard.notify('便利贴保存成功！')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.note-content {
  white-space: pre-wrap;
  color: #606266;
  font-size: 14px;
}
::v-deep .form-popover {
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
```

可以看出仪表盘组件和一个普通的 Vue 组件并没有太大区别，只是多了一个 `widget` 配置对象和一些钩子函数。

`widget` 配置对象用于在组件列表中显示组件名称和图标，以及配置组件的默认参数、宽高等信息。代码中备注已经写得很清楚了，这里就不再赘述。

钩子函数，会在组件移动、调整大小、刷新、配置等操作时触发，这些钩子函数可以用于组件的数据更新、保存等操作。

组件中注入了 `$dashboard` 对象，用于在组件中调用仪表盘的方法。

最后，通过 `update:params` 事件将用户配置的参数传递给仪表盘，仪表盘会将参数保存到数据库中，下次加载仪表盘时会将参数回传给组件。

## 万物皆组件

系统中的仪表盘，除了承载业务组件外，还可以承载一些系统级别的组件，发挥想象力，将任何 idea 开发成为仪表盘的组件，比如：

- 时钟
- 天气
- 便利贴
- 倒计时
- ……

等等，只要你想得到，就可以开发成为仪表盘的组件，灵感可以来自于手机平板桌面、浏览器网址导航等。

又例如，我在 [iTab 新标签页](https://itab.link/) 网址导航中，看到了一个“一言组件”觉得很有意思。

于是乎，我也开发了一个“一言组件”，[在线 demo](https://lruihao.github.io/vue-el-demo/#/dashboard/index)，[组件源码 `hitokoto.vue`](https://github.com/Lruihao/vue-el-demo/blob/main/src/views/dashboard/widgets/daily/hitokoto.vue)，功能如下：

- 点击左键复制，右键切换
- 支持自定义一言类型、长度
- 一键百度搜索当前一言内容

效果如下：

![hitokoto widget](images/hitokoto.gif "一言组件局部动画")


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/dashborad-widget-usage/  

