# 封装 Vue FullScreenToggler 组件


基于 [vue-fullscreen](https://github.com/mirari/vue-fullscreen) 封装一个的 Vue 全屏/退出全屏切换组件。

<!--more-->

## 简介

[vue-fullscreen](https://github.com/mirari/vue-fullscreen) 是一个用于将任意页面元素进行全屏切换的 Vue 插件，基于 [screenfull](https://github.com/sindresorhus/screenfull)。这个插件本身提供了组件、指令以及 API 三种使用方式，具体的使用方法请参考 [vue-fullscreen](https://github.com/mirari/vue-fullscreen)。

## [在线演示](https://lruihao.github.io/vue-el-demo/#/fullscreen)

## 安装

```bash
npm install vue-fullscreen@^2.6.1
# 或者
yarn add vue-fullscreen@^2.6.1
```

## 封装组件

`vue-fullscreen` 有 Vue2 和 Vue3 两个版本，本文将基于其 Vue2 版本的指令使用方式再封装一层。

这个组件会显示为一个切换按钮，通过绑定 `target` 属性来指定全屏的目标元素，通过 `bodyAgent` 属性来指定是否使用 `document.body` 代理全屏元素，目标元素则改为网页全屏，避免弹窗等元素在全屏模式下不可见的问题。

{{< admonition info >}}
`vue-fullscreen` 插件处理弹窗等元素在全屏模式下不可见问题的方案是通过 `teleport` 修饰符将目标元素移动到 `document.body` 下，从而避免层级遮挡问题。个人不太喜欢这种改变 DOM 结构的方式，所以封装的插件新增一个参数 `bodyAgent`，当设置为 `true` 时，会使用 `document.body` 代理全屏元素，目标元素则改为网页全屏，此时 `document.fullscreenElement` 为 `document.body` 而不是真实设置的 `target` 元素。
{{< /admonition >}}

```vue {title=FullScreenToggler.vue}
<!-- 全屏/退出全屏切换组件，浏览器不支持时，打开网页内全屏 -->
<script>
import { directive as fullscreen } from 'vue-fullscreen'

export default {
  name: 'FullScreenToggler',
  directives: {
    fullscreen,
  },
  props: {
    target: {
      type: String,
      default: 'document.body',
    },
    /**
     * 是否使用 document.body 代理全屏元素，目标元素则改为网页全屏
     * 避免弹窗等元素在全屏模式下不可见的问题（推荐）
     */
    bodyAgent: {
      type: Boolean,
      default: true,
    },
    fullscreenClass: {
      type: String,
      default: 'is-fullscreen',
    },
    /**
     * 不调用全屏 API，而是将当前元素撑满网页
     */
    pageOnly: {
      type: Boolean,
      default: false,
    },
    /**
     * v-fullscreen 指令修饰符 teleport 进入全屏时目标元素会被移动到 document.body 下
     * vue-fullscreen 插件处理弹窗等元素在全屏模式下不可见问题的方案（不推荐）
     */
    teleport: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isFullscreen: false,
    }
  },
  computed: {
    options() {
      return {
        target: this.bodyAgent ? 'document.body' : this.target,
        callback: (isFullscreen) => {
          this.isFullscreen = isFullscreen
          // 网页全屏
          if (this.bodyAgent && this.target !== 'document.body') {
            document.querySelector(this.target).classList.toggle('is-fullscreen-fullpage', isFullscreen)
          }
          // 触发事件传递给父组件
          this.$emit('change', isFullscreen)
        },
        fullscreenClass: this.fullscreenClass,
      }
    },
  },
  render(h) {
    return h('span', {
      class: 'full-screen-toggler',
      attrs: {
        title: this.isFullscreen ? '退出全屏' : '全屏',
      },
      directives: [
        {
          name: 'fullscreen',
          value: this.options,
          modifiers: {
            pageOnly: this.pageOnly,
            teleport: this.teleport,
          },
        },
      ],
    },
    [
      h('svg-icon', {
        props: {
          iconClass: this.isFullscreen ? 'exit-fullscreen' : 'fullscreen',
        }
      }),
    ])
  },
}
</script>

<style lang="scss" scoped>
.full-screen-toggler {
  cursor: pointer;
}
</style>

<style>
.is-fullscreen-fullpage {
  position: fixed !important;
  top: 0px;
  left: 0px;
  width: 100% !important;
  height: 100% !important;
  background: white;
  z-index: 2000;
  box-sizing: border-box;
}
</style>
```

使用方式如下：

```vue
<template>
  <div class="page-container">
    <full-screen-toggler target=".page-container" />
  </div>
</template>

<script>
import FullScreenToggler from '@/components/FullScreenToggler'

export default {
  components: {
    FullScreenToggler,
  },
}
</script>
```


---

> 作者:   
> URL: https://lruihao.cn/posts/vue-fullscreen-toggler/  

