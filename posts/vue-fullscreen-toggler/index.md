# 封装 Vue FullScreenToggler 组件


基于 [vue-fullscreen](https://github.com/mirari/vue-fullscreen) 封装一个的 Vue 全屏/退出全屏切换组件。

&lt;!--more--&gt;

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

{{&lt; admonition info &gt;}}
`vue-fullscreen` 插件处理弹窗等元素在全屏模式下不可见问题的方案是通过 `teleport` 修饰符将目标元素移动到 `document.body` 下，从而避免层级遮挡问题。个人不太喜欢这种改变 DOM 结构的方式，所以封装的插件新增一个参数 `bodyAgent`，当设置为 `true` 时，会使用 `document.body` 代理全屏元素，目标元素则改为网页全屏，此时 `document.fullscreenElement` 为 `document.body` 而不是真实设置的 `target` 元素。
{{&lt; /admonition &gt;}}

```vue {title=FullScreenToggler.vue}
&lt;!-- 全屏/退出全屏切换组件，浏览器不支持时，打开网页内全屏 --&gt;
&lt;script&gt;
import { directive as fullscreen } from &#39;vue-fullscreen&#39;

export default {
  name: &#39;FullScreenToggler&#39;,
  directives: {
    fullscreen,
  },
  props: {
    target: {
      type: String,
      default: &#39;document.body&#39;,
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
      default: &#39;is-fullscreen&#39;,
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
        target: this.bodyAgent ? &#39;document.body&#39; : this.target,
        callback: (isFullscreen) =&gt; {
          this.isFullscreen = isFullscreen
          // 网页全屏
          if (this.bodyAgent &amp;&amp; this.target !== &#39;document.body&#39;) {
            document.querySelector(this.target).classList.toggle(&#39;is-fullscreen-fullpage&#39;, isFullscreen)
          }
          // 触发事件传递给父组件
          this.$emit(&#39;change&#39;, isFullscreen)
        },
        fullscreenClass: this.fullscreenClass,
      }
    },
  },
  render(h) {
    return h(&#39;span&#39;, {
      class: &#39;full-screen-toggler&#39;,
      attrs: {
        title: this.isFullscreen ? &#39;退出全屏&#39; : &#39;全屏&#39;,
      },
      directives: [
        {
          name: &#39;fullscreen&#39;,
          value: this.options,
          modifiers: {
            pageOnly: this.pageOnly,
            teleport: this.teleport,
          },
        },
      ],
    },
    [
      h(&#39;svg-icon&#39;, {
        props: {
          iconClass: this.isFullscreen ? &#39;exit-fullscreen&#39; : &#39;fullscreen&#39;,
        }
      }),
    ])
  },
}
&lt;/script&gt;

&lt;style lang=&#34;scss&#34; scoped&gt;
.full-screen-toggler {
  cursor: pointer;
}
&lt;/style&gt;

&lt;style&gt;
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
&lt;/style&gt;
```

使用方式如下：

```vue
&lt;template&gt;
  &lt;div class=&#34;page-container&#34;&gt;
    &lt;full-screen-toggler target=&#34;.page-container&#34; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import FullScreenToggler from &#39;@/components/FullScreenToggler&#39;

export default {
  components: {
    FullScreenToggler,
  },
}
&lt;/script&gt;
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/vue-fullscreen-toggler/  

