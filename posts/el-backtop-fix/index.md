# 用魔法打败魔法 - ElBacktop Fix


这篇文章主要是记录一下继承 [ElBacktop](https://element.eleme.cn/#/zh-CN/component/backtop) 组件并修复了一些 bug 的过程。

<!--more-->

## 前言

由于某些原因，我希望在路由切换时给每个页面的总容器都加上一个共同的 class `page-container`，然后我就在布局中里面加了这么一段代码：

```vue
<template>
  <div :class="classObj" class="app-wrapper">
    <div class="app-container">
      <topbar class="header-container" />
      <el-container class="main-container">
        <sidebar class="aside-container" />
        <el-container class="is-vertical minor-container">
          <breadcrumb class="breadcrumb-container" />
          <!-- 这一行 -->
          <page-container class="page-container" />
        </el-container>
      </el-container>
    </div>

    <el-backtop class="app-b2t" target=".page-container" :visibility-height="50" />
    <!-- <back-to-top class="app-b2t" target=".page-container" :visibility-height="50" /> -->
  </div>
</template>
```

```Vue {title="PageContainer.vue"}
<template>
  <transition name="fade-transform" mode="out-in">
    <keep-alive :include="cachedViews">
      <router-view />
    </keep-alive>
  </transition>
</template>
```

没错，相当于在 router-view 上直接加了一个 class `page-container`。

## 问题

那么问题就来了，此时 el-backtop 的 target 设置为 `.page-container`，但是当我切换路由时，`.page-container` 会被移除再添加为新的页面，此时 el-backtop 就会失效。

原意是想让 el-backtop 指向每一个包含 `.page-container` 的页面。

## 解决

RTFSC，发现 el-backtop 的 target 属性只会在 mounted 时初始化一次，所以想办法在每次路由切换时重新初始化一下 el-backtop 的 target 属性就行了。

1. 创建 MutationObserver 实例来观察 target 的父元素的子元素变化已解决上述 bug
2. 增加 target 的 data-target 属性，用于指定 target 的子元素作为滚动容器

最后代码如下：

```Vue {title="BackToTop.vue"}
<script>
/**
 * BackToTop 继承 el-backtop
 * 1. 修复 el-backtop 在 target 被移除后，无法重新初始化的问题
 * 2. 增加 target 的 data-target 属性，用于指定 target 的子元素作为滚动容器。例如：<div data-target=".list-pane"></div>
 */
import { Backtop } from 'element-ui'
import throttle from 'throttle-debounce/throttle'

export default {
  name: 'BackToTop',
  extends: Backtop,
  data() {
    return {
      el: null,
      container: null,
      visible: false,
      observer: null,
    }
  },
  mounted() {
    this.init()
    this.observeTarget()
  },
  beforeDestroy() {
    // 清除事件监听
    this.container.removeEventListener('scroll', this.throttledScrollHandler)
    // 停止观察
    this.observer.disconnect()
  },
  methods: {
    init() {
      this.container = document
      this.el = document.documentElement
      if (this.target) {
        this.el = document.querySelector(this.target)
        if (!this.el) {
          throw new Error(`target is not existed: ${this.target}`)
        }
        // 如果 this.el 有 data-target 属性，就使用 data-target 属性的值作为 target
        if (this.el.dataset.target) {
          const subEl = this.el.querySelector(this.el.dataset.target)
          subEl && (this.el = subEl)
        }
        this.container = this.el
      }
      this.throttledScrollHandler = throttle(300, this.onScroll)
      this.container.addEventListener('scroll', this.throttledScrollHandler)
    },
    /**
     * 观察 this.container 是否被移除或者新增
     * 注意 router-view 切换页面步骤：1. 新增 router-view -> 2. 删除旧 router-view
     */
    observeTarget() {
      // 创建 MutationObserver 实例并传入回调函数
      this.observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            // 检测到删除节点
            if (mutation.removedNodes.length > 0) {
              for (const node of mutation.removedNodes) {
                if (node === this.container) {
                  // 观察如果 this.container 从页面中被移除了，就清除事件监听
                  this.container.removeEventListener('scroll', this.throttledScrollHandler)
                  this.visible = false
                  break
                }
              }
              // 检测删除前是否有新增节点
              if (document.querySelector(this.target) === mutation.nextSibling) {
                // 观察如果 this.container 被删除前的下一个兄弟节点是 this.target，就重新初始化
                this.init()
              }
            }
          }
        }
      })
      // 观察 this.container 父元素的子元素变化
      this.observer.observe(document.querySelector(this.target).parentNode, {
        childList: true,
      })
    },
  },
}
</script>
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/el-backtop-fix/  

