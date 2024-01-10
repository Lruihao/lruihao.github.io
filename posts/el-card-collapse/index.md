# 给 el-card 添加折叠功能


{{&lt; admonition question &#34;出发点&#34; &gt;}}
虽然 Element 也有 [el-collapse](https://element.eleme.cn/#/zh-CN/component/collapse) 组件，但是当我只想写一个折叠面板时，它的写法就略显繁琐了，[el-card](https://element.eleme.cn/#/zh-CN/component/card) 组件的样式也更符合我的需求，所以我就想着给 el-card 添加折叠功能。
{{&lt; /admonition &gt;}}

&lt;!--more--&gt;

## 效果

在线演示：&lt;https://lruihao.github.io/vue-el-demo/#/card-collapse&gt;

## 实现过程

一开始想着使用 Vue 的自定义指令功能来实现，但是动手之前还是习惯性地先看 el-card 的源码，如下所示：

```Vue
&lt;template&gt;
  &lt;div class=&#34;el-card&#34; :class=&#34;shadow ? &#39;is-&#39; &#43; shadow &#43; &#39;-shadow&#39; : &#39;is-always-shadow&#39;&#34;&gt;
    &lt;div class=&#34;el-card__header&#34; v-if=&#34;$slots.header || header&#34;&gt;
      &lt;slot name=&#34;header&#34;&gt;{{ header }}&lt;/slot&gt;
    &lt;/div&gt;
    &lt;div class=&#34;el-card__body&#34; :style=&#34;bodyStyle&#34;&gt;
      &lt;slot&gt;&lt;/slot&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    name: &#39;ElCard&#39;,
    props: {
      header: {},
      bodyStyle: {},
      shadow: {
        type: String
      }
    }
  };
&lt;/script&gt;
```

这一看源码这么简单，直接改得了，还用啥自定义指令，开干！

## 实现方式

1. 通过继承 el-card 组件来实现，这样就不用改 el-card 的源码了，也不用担心升级 Element 时会被覆盖掉。
2. 然后在继承的组件中添加一个 `isCollapse` 属性来控制折叠状态。

继承也很简单，这样简单几行就完整继承了原来 el-card 的所有功能了：

```Vue
&lt;script&gt;
import { Card } from &#39;element-ui&#39;
export default {
  name: &#39;ElCardCollapse&#39;,
  extends: Card,
}
&lt;/script&gt;
```

然后，把 el-card template 中的代码先原封不动地复制过来，再在需要的地方添加折叠按钮和相关逻辑就行了：

```Vue {title=&#34;ElCardCollapse.vue&#34;}
&lt;template&gt;
  &lt;div class=&#34;el-card&#34; :class=&#34;shadow ? &#39;is-&#39; &#43; shadow &#43; &#39;-shadow&#39; : &#39;is-always-shadow&#39;&#34;&gt;
    &lt;div
      v-if=&#34;$slots.header || header&#34;
      class=&#34;el-card__header&#34;
      :class=&#34;isCollapseSelf ? &#39;collapse-icon-right&#39; : &#39;collapse-icon-down&#39;&#34;
      @click=&#34;isCollapseSelf = !isCollapseSelf&#34;
    &gt;
      &lt;slot name=&#34;header&#34;&gt;{{ header }}&lt;/slot&gt;
    &lt;/div&gt;
    &lt;div
      class=&#34;el-card__body&#34;
      :style=&#34;bodyStyle&#34;
      :class=&#34;{&#39;is-collapse&#39;: isCollapseSelf}&#34;
    &gt;
      &lt;slot /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { Card } from &#39;element-ui&#39;
export default {
  name: &#39;ElCardCollapse&#39;,
  extends: Card,
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isCollapseSelf: this.isCollapse,
    }
  },
}
&lt;/script&gt;
&lt;style lang=&#34;scss&#34; scoped&gt;
.el-card__header {
  cursor: pointer;
  position: relative;

  &amp;::after {
    font-family: element-icons !important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  &amp;.collapse-icon-right::after {
    content: &#39;\e6e0&#39;;
  }
  &amp;.collapse-icon-down::after {
    content: &#39;\e6df&#39;;
  }
}
.is-collapse {
  display: none;
}
&lt;/style&gt;
```

## 使用方法

在 `main.js` 中引入：

```js
import ElCardCollapse from &#39;@/components/ElCardCollapse.vue&#39;
Vue.component(&#39;ElCardCollapse&#39;, ElCardCollapse)
```

写法和 el-card 一样，只是多了一个 `is-collapse` 属性，使用 `el-card-collapse` 代替 `el-card` 即可：

```Vue
&lt;template&gt;
  &lt;div&gt;
    &lt;el-card-collapse class=&#34;box-card&#34; :is-collapse=&#34;isCollapse&#34;&gt;
      &lt;div slot=&#34;header&#34; class=&#34;flex-between&#34;&gt;
        &lt;span&gt;卡片名称&lt;/span&gt;
        &lt;el-button style=&#34;padding: 3px 0; margin-right: 10px;&#34; type=&#34;text&#34;&gt;操作按钮&lt;/el-button&gt;
      &lt;/div&gt;
      &lt;div v-for=&#34;o in 4&#34; :key=&#34;o&#34; class=&#34;text item&#34;&gt;
        {{ &#39;列表内容 &#39; &#43; o }}
      &lt;/div&gt;
    &lt;/el-card-collapse&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: &#39;CardCollapse&#39;,
  data() {
    return {
      isCollapse: true,
    }
  },
}
&lt;/script&gt;

&lt;style lang=&#34;scss&#34; scoped&gt;
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-card {
  width: 480px;
}
&lt;/style&gt;
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/el-card-collapse/  

