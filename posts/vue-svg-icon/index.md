# 在 Vue 项目中更优雅地使用 icon


## 前言

在 Web 开发中，我们经常会用到 icon，icon 的使用经历了从图片到字体，再到 svg 的演变过程，也产生出相应的 icon 库，如雪碧图、[Font Awesome](https://fontawesome.com/)、[Iconfont](https://www.iconfont.cn/) 等等。

随着前端的发展，icon 使用方案落在了 svg 上，svg 有着矢量图的优势，可以无限放大而不失真，而且 svg 本身就是一种 XML 文件，可以直接在 HTML 中使用，也可以通过 CSS 进行样式控制，但是在 Vue 项目中使用 svg 时，我们会遇到一些问题，本文将介绍如何在 Vue 项目中更优雅的使用 svg icon。

<!--more-->

## 工具

- [svg-sprite-loader](https://github.com/JetBrains/svg-sprite-loader)
- [svgo-loader](https://github.com/svg/svgo-loader)

`svg-sprite-loader`用来打包 svg 图标，`svgo-loader` 来精简我们的 svg 内容。

## 封装组件

在 `src/components` 目录下新建 `SvgIcon.vue` 组件：

```vue
<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-on="$listeners" />
  <svg v-else class="svg-icon" aria-hidden="true" v-on="$listeners">
    <use :href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    isExternal() {
      return /^(https?:\/\/|data:image)/.test(this.iconClass)
    },
    iconName() {
      return `#icon-${this.iconClass}`
    },
    styleExternalIcon() {
      return {
        mask: `url(${this.iconClass}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover!important;
  display: inline-block;
}
</style>
```

## 安装

```bash
npm install svg-sprite-loader svgo-loader -D
# 或
yarn add svg-sprite-loader svgo-loader -D
```

## 配置

统一将所有的 icon 都以 svg 的形式都放在 `src/assets/icons` 目录中。

然后在 `vue.config.js` 中添加如下配置：

```js
const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  // ...
  chainWebpack: (config) => {
    // set svg-sprite-loader
    const svgPath = resolve('src/assets/icons')
    config.module
      .rule('svg')
      .exclude.add(svgPath)
      .end()
    config.module
      .rule('svg-icon')
      .test(/.svg$/)
      .include.add(svgPath)
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
      // remove origin svg fill attr
      .use('svgo-loader')
      .loader('svgo-loader')
      .tap((options) => ({
        ...options,
        // 删除 svg 中 fill 和 fill-rule
        plugins: [{ name: 'removeAttrs', params: { attrs: 'fill|fill-rule' } }],
      }))
      .end()
  },
  // ...
})
```

## 自动引入

自动引入 `src/assets/icons` 中的 icon，需要用到 webpack 中的 [require.context](https://webpack.docschina.org/guides/dependency-management/)。

在 `src/main.js` 中引入所有的 svg 图标，之后可在文件夹自行添加或者删除图标，所以图标都会被自动导入，无需手动操作：

```js
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

// register svg component globally 
Vue.component('SvgIcon', SvgIcon)
// require all svg
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
const req = require.context('@/assets/icons', false, /\.svg$/)
requireAll(req)
```

## 使用 icon

```html
<svg-icon icon-class="fullscreen"  class='custom-class' />
```

### 颜色

`svg-icon` 默认会读取其父级的 `color fill: currentColor;`

你可以改变父级的 `color` 或者直接改变 `fill` 的颜色即可。

### 大小

图标可从 [iconfont](https://www.iconfont.cn/) 项目中下载或者由 UI 切图，同一个项目中使用的 Svg Icon 图标建议统一大小规格，比如 `128*128`。

## 示例

本文 [示例](https://lruihao.github.io/vue-el-demo/#/icons) 代码已上传至 [vue-el-demo](https://github.com/Lruihao/vue-el-demo) 项目中，可自行下载查看。

## 参考资料

- [手摸手，带你优雅的使用 icon](https://juejin.cn/post/6844903517564436493)
- [未来必热：SVG Sprites 技术介绍](https://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/)
- [SVG 精简压缩工具 svgo 简介和初体验](https://www.zhangxinxu.com/wordpress/2016/02/svg-compress-tool-svgo-experience/)
- [svg-sprite-loader](https://github.com/JetBrains/svg-sprite-loader)
- [svgo](https://github.com/svg/svgo)
- [svgo-loader](https://github.com/svg/svgo-loader)


---

> 作者:   
> URL: https://lruihao.cn/posts/vue-svg-icon/  

