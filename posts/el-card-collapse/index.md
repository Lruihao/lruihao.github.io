# 给 El-Card 添加折叠功能


{{< admonition question "出发点" >}}
虽然 Element 也有 [el-collapse](https://element.eleme.cn/#/zh-CN/component/collapse) 组件，但是当我只想写一个折叠面板时，它的写法就略显繁琐了，[el-card](https://element.eleme.cn/#/zh-CN/component/card) 组件的样式也更符合我的需求，所以我就想着给 el-card 添加折叠功能。
{{< /admonition >}}

<!--more-->

## 效果

在线演示：<https://lruihao.github.io/vue-el-demo/#/card-collapse>

## 实现过程

一开始想着使用 Vue 的自定义指令功能来实现，但是动手之前还是习惯性地先看 el-card 的源码，如下所示：

```Vue
<template>
  <div class="el-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div class="el-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="el-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ElCard',
    props: {
      header: {},
      bodyStyle: {},
      shadow: {
        type: String
      }
    }
  };
</script>
```

这一看源码这么简单，直接改得了，还用啥自定义指令，开干！

## 实现方式

1. 通过继承 el-card 组件来实现，这样就不用改 el-card 的源码了，也不用担心升级 Element 时会被覆盖掉。
2. 然后在继承的组件中添加一个 `isCollapse` 属性来控制折叠状态。

继承也很简单，这样简单几行就完整继承了原来 el-card 的所有功能了：

```Vue
<script>
import { Card } from 'element-ui'
export default {
  name: 'ElCardCollapse',
  extends: Card,
}
</script>
```

然后，把 el-card template 中的代码先原封不动地复制过来，再在需要的地方添加折叠按钮和相关逻辑就行了：

```Vue {title="ElCardCollapse.vue"}
<template>
  <div class="el-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div
      v-if="$slots.header || header"
      class="el-card__header"
      :class="isCollapseSelf ? 'collapse-icon-right' : 'collapse-icon-down'"
      @click="isCollapseSelf = !isCollapseSelf"
    >
      <slot name="header">{{ header }}</slot>
    </div>
    <div
      class="el-card__body"
      :style="bodyStyle"
      :class="{'is-collapse': isCollapseSelf}"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { Card } from 'element-ui'
export default {
  name: 'ElCardCollapse',
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
</script>
<style lang="scss" scoped>
.el-card__header {
  cursor: pointer;
  position: relative;

  &::after {
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

  &.collapse-icon-right::after {
    content: '\e6e0';
  }
  &.collapse-icon-down::after {
    content: '\e6df';
  }
}
.is-collapse {
  display: none;
}
</style>
```

## 使用方法

在 `main.js` 中引入：

```js
import ElCardCollapse from '@/components/ElCardCollapse.vue'
Vue.component('ElCardCollapse', ElCardCollapse)
```

写法和 el-card 一样，只是多了一个 `is-collapse` 属性，使用 `el-card-collapse` 代替 `el-card` 即可：

```Vue
<template>
  <div>
    <el-card-collapse class="box-card" :is-collapse="isCollapse">
      <div slot="header" class="flex-between">
        <span>卡片名称</span>
        <el-button style="padding: 3px 0; margin-right: 10px;" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
    </el-card-collapse>
  </div>
</template>

<script>
export default {
  name: 'CardCollapse',
  data() {
    return {
      isCollapse: true,
    }
  },
}
</script>

<style lang="scss" scoped>
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
</style>
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/el-card-collapse/  

