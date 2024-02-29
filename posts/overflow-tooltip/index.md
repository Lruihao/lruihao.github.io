# 实现类似于 Element UI 表格的溢出文本提示功能


在 Element UI 的表格组件中，当表格列的内容过长时，设置 `show-overflow-tooltip` 会自动显示一个 tooltip 来展示完整的内容。这个功能在实际项目中也是非常常见的，那么我们该如何实现这个功能呢？

&lt;!--more--&gt;

## Demo

先来看一下效果：[demo](http://lruihao.github.io/vue-el-demo/#/overflow-tooltip)

## 实现代码

直接贴上完整的代码，通过一个自定义指定 `v-overflow-tooltip` 来实现：

```js
const plugin = {
  install(Vue) {
    Vue.directive(&#39;overflow-tooltip&#39;, {
      inserted: (el, binding, vnode) =&gt; {
        // 设置内容
        if (el.innerText === &#39;&#39;) {
          el.innerText = binding.value
        }
        // 设置元素样式
        Object.assign(el.style, {
          overflow: &#39;hidden&#39;,
          textOverflow: &#39;ellipsis&#39;,
          whiteSpace: &#39;nowrap&#39;,
        })

        const elComputed = document.defaultView.getComputedStyle(el, &#39;&#39;)
        const padding = parseInt(elComputed.paddingLeft.replace(&#39;px&#39;, &#39;&#39;)) &#43; parseInt(elComputed.paddingRight.replace(&#39;px&#39;, &#39;&#39;))
        const range = document.createRange()
        range.setStart(el, 0)
        range.setEnd(el, el.childNodes.length)
        const rangeWidth = range.getBoundingClientRect().width

        if (rangeWidth &#43; padding &gt; el.offsetWidth || el.scrollWidth &gt; el.offsetWidth) {
          // 鼠标移入时，将浮沉元素插入到 body 中
          el.onmouseenter = function (e) {
            // 创建浮层元素并设置样式
            const vcTooltipDom = document.createElement(&#39;div&#39;)
            Object.assign(vcTooltipDom.style, {
              position: &#39;absolute&#39;,
              background: &#39;#303133&#39;,
              color: &#39;#fff&#39;,
              fontSize: &#39;12px&#39;,
              zIndex: &#39;2000&#39;,
              padding: &#39;10px&#39;,
              borderRadius: &#39;4px&#39;,
              lineHeight: 1.2,
              minHeight: &#39;10px&#39;,
              wordWrap: &#39;break-word&#39;,
            })
            // 设置 id 方便寻找
            vcTooltipDom.setAttribute(&#39;id&#39;, &#39;vc-tooltip&#39;)
            // 将浮层插入到 body 中
            document.body.appendChild(vcTooltipDom)
            // 浮层中的文字 通过属性值传递动态的显示文案
            document.getElementById(&#39;vc-tooltip&#39;).innerHTML = binding.value
          }
          // 鼠标移动时，动态修改浮沉的位置属性
          el.onmousemove = function (e) {
            const vcTooltipDom = document.getElementById(&#39;vc-tooltip&#39;)
            vcTooltipDom.style.top = e.clientY &#43; 15 &#43; &#39;px&#39;
            vcTooltipDom.style.left = e.clientX &#43; 15 &#43; &#39;px&#39;
          }
          // 鼠标移出时将浮层元素销毁
          el.onmouseleave = function () {
            // 找到浮层元素并移出
            const vcTooltipDom = document.getElementById(&#39;vc-tooltip&#39;)
            vcTooltipDom &amp;&amp; document.body.removeChild(vcTooltipDom)
          }
        }
      }
    })
  }
}


let GlobalVue = null
if (typeof window !== &#39;undefined&#39;) {
  GlobalVue = window.Vue
} else if (typeof global !== &#39;undefined&#39;) {
  GlobalVue = global.Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default plugin
```

使用很简单，导入并注册之后，就可以在需要的地方使用 `v-overflow-tooltip` 指令了：

```js
import overflowTooltip from &#39;@/directives/overflow-tooltip&#39;
Vue.use(overflowTooltip)
```

比如说：

```html
&lt;span v-overflow-tooltip=&#34;content&#34; style=&#34;display: inline-block; width: 100px;&#34; /&gt;
```

## 实现原理

1. 通过 `getComputedStyle` 获取元素的 `padding` 值，然后通过 `createRange` 获取元素的宽度。
2. 如果元素的内容宽度大于元素的宽度，那么就显示 tooltip。
3. 鼠标移入时，将浮沉元素插入到 `body` 中，鼠标移动时，动态修改浮沉的位置属性，鼠标移出时将浮层元素销毁。

其中最关键的一段代码是：

```js
const range = document.createRange()
range.setStart(el, 0)
range.setEnd(el, el.childNodes.length)
const rangeWidth = range.getBoundingClientRect().width
```

这段代码是通过 `createRange` 设置元素的范围，然后通过 `getBoundingClientRect` 获取元素的宽度。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/overflow-tooltip/  

