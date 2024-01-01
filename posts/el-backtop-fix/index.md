# 用魔法打败魔法 - ElBacktop Fix


这篇文章主要是记录一下继承 [ElBacktop](https://element.eleme.cn/#/zh-CN/component/backtop) 组件并修复了一些 bug 的过程。

&lt;!--more--&gt;

## 前言

由于某些原因，我希望在路由切换时给每个页面的总容器都加上一个共同的 class `page-container`，然后我就在布局中里面加了这么一段代码：

```vue
&lt;template&gt;
  &lt;div :class=&#34;classObj&#34; class=&#34;app-wrapper&#34;&gt;
    &lt;div class=&#34;app-container&#34;&gt;
      &lt;topbar class=&#34;header-container&#34; /&gt;
      &lt;el-container class=&#34;main-container&#34;&gt;
        &lt;sidebar class=&#34;aside-container&#34; /&gt;
        &lt;el-container class=&#34;is-vertical minor-container&#34;&gt;
          &lt;breadcrumb class=&#34;breadcrumb-container&#34; /&gt;
          &lt;!-- 这一行 --&gt;
          &lt;page-container class=&#34;page-container&#34; /&gt;
        &lt;/el-container&gt;
      &lt;/el-container&gt;
    &lt;/div&gt;

    &lt;el-backtop class=&#34;app-b2t&#34; target=&#34;.page-container&#34; :visibility-height=&#34;50&#34; /&gt;
    &lt;!-- &lt;back-to-top class=&#34;app-b2t&#34; target=&#34;.page-container&#34; :visibility-height=&#34;50&#34; /&gt; --&gt;
  &lt;/div&gt;
&lt;/template&gt;
```

```Vue {title=&#34;PageContainer.vue&#34;}
&lt;template&gt;
  &lt;transition name=&#34;fade-transform&#34; mode=&#34;out-in&#34;&gt;
    &lt;keep-alive :include=&#34;cachedViews&#34;&gt;
      &lt;router-view /&gt;
    &lt;/keep-alive&gt;
  &lt;/transition&gt;
&lt;/template&gt;
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

```Vue {title=&#34;BackToTop.vue&#34;}
&lt;script&gt;
/**
 * BackToTop 继承 el-backtop
 * 1. 修复 el-backtop 在 target 被移除后，无法重新初始化的问题
 * 2. 增加 target 的 data-target 属性，用于指定 target 的子元素作为滚动容器。例如：&lt;div data-target=&#34;.list-pane&#34;&gt;&lt;/div&gt;
 */
import { Backtop } from &#39;element-ui&#39;
import throttle from &#39;throttle-debounce/throttle&#39;

export default {
  name: &#39;BackToTop&#39;,
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
    this.container.removeEventListener(&#39;scroll&#39;, this.throttledScrollHandler)
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
          subEl &amp;&amp; (this.el = subEl)
        }
        this.container = this.el
      }
      this.throttledScrollHandler = throttle(300, this.onScroll)
      this.container.addEventListener(&#39;scroll&#39;, this.throttledScrollHandler)
    },
    /**
     * 观察 this.container 是否被移除或者新增
     * 注意 router-view 切换页面步骤：1. 新增 router-view -&gt; 2. 删除旧 router-view
     */
    observeTarget() {
      // 创建 MutationObserver 实例并传入回调函数
      this.observer = new MutationObserver((mutationsList) =&gt; {
        for (const mutation of mutationsList) {
          if (mutation.type === &#39;childList&#39;) {
            // 检测到删除节点
            if (mutation.removedNodes.length &gt; 0) {
              for (const node of mutation.removedNodes) {
                if (node === this.container) {
                  // 观察如果 this.container 从页面中被移除了，就清除事件监听
                  this.container.removeEventListener(&#39;scroll&#39;, this.throttledScrollHandler)
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
&lt;/script&gt;
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/el-backtop-fix/  

