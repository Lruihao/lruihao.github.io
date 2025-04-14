# 基于 fex-team/kityminder-core 和 Vue2 封装的在线脑图编辑组件

# Vue Minder Editor

基于 [kityminder-core](https://github.com/fex-team/kityminder-core) 实现的 Vue2 脑图编辑器组件。

## Install

``` bash
npm install vue-minder-editor-extended --save
```

## Usage

注册组件：

```javascript
import vueMinderEditor from 'vue-minder-editor-extended'
import Vue from 'vue'
Vue.use(vueMinderEditor)
```

使用组件：

```html
<template>
  <div>
    <minder-editor :progress-enable="false" :import-json="importJson"/>
  </div>
</template>

<script>
import minderEditor from '../../dist/static/vue-minder-editor-extended'
import vue from 'vue'
vue.use(minderEditor);
export default {
  name: 'test-plugin',
  data() {
    return {
      importJson: {
        // 节点数据
        root: {
          data: {
            // 文本内容
            text: 'vue-minder-editor-extended',
            // 标签
            resource: ['模块1'],
            // 是否禁止修改
            disable: true,
            // 默认展开或折叠，默认是展开的，collapse 可设为折叠
            // expandState: 'collapse',
            // 在 disable 为 true 的情况下，允许添加标签
            tagEnable: true,
            // 在 disable 为 true 的情况下，允许删除节点
            allowDelete: true,
            // 在 disable 为 true 的情况下，允许添加标签，优先级比 tagEnable 高
            allowDisabledTag: true,
          },
          // 子节点
          children: [
            {
              data: {
                text: 'child1',
                disable: true,
                expandState: 'collapse',
                resource: ['模块2']
              },
              children: [
                {
                  data: {
                    text: 'child11',
                    disable: true,
                    resource: ['模块2']
                  },
                },
                {
                  data: {
                    text: 'child12',
                  }
                }
              ]
            },
            {
              data: {
                text: 'child2',
              }
            }
          ]
        },
      },
      tags:  ['模块1','模块2']
    }
  }
}
</script>
```

## 国际化

```vue
// 方式一
import locale from '/src/locale/lang/en-US'
Vue.use(vueMinderEditorExtended, {
  locale
});

// 方式二
import lang from '/src/locale/lang/en-US'
import locale from '/src/locale'
locale.use(lang)
Vue.use(vueMinderEditorExtended);

// 方式三
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enLocale from 'vue-minder-editor-extended/src/locale/lang/en-US';
import zhLocale from 'vue-minder-editor-extended/src/locale/lang/zh-CN';
import vueMinderEditor from 'vue-minder-editor-extended';

const messages = {
  en: {
    message: 'hello',
    ...enLocale
  },
  zh: {
    message: '你好',
    ...zhLocale
  }
}

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

Vue.use(vueMinderEditor, {
  i18n: (key, value) => i18n.t(key, value)
});
```

## 主题

> Vue Minder Editor 组件已支持初始化时设置主题及注册主题，默认主题为 fresh-blue。

如需手动注册设置主题，允许使用的主题及其配置项可以使用 `window.kityminder.Minder.getThemeList()` 查询。

```js
// 注册主题
window.kityminder.Theme.register('my-minder-theme', minderThemeItems)
// 设置主题
window.minder.useTheme('my-minder-theme')
// 或者
window.minder.execCommand('theme', 'my-minder-theme')
```

## Props

> 以下配置部分为 kityminder-core 扩展的功能，kityminder-core 本身的 minder 对象提供了丰富的功能，使用该组件时可通过 `window.minder` 对象获取 minder 对象具体的使用方法，可以参考它的文档扩展 [kityminder-core wiki](https://github.com/fex-team/kityminder-core/wiki) 以及 [#API](#api) 章节补充。

### 基础配置

| Name          | Description                                                                                  | Type    | Default    |
| ------------- | -------------------------------------------------------------------------------------------- | ------- | ---------- |
| importJson    | 需要脑图解析的 js 对象，参数详情可参考上文 demo，或者调用 `minder.exportJson()` 查看具体参数 | Object  | null       |
| height        | 显示高度，默认 500px                                                                         | Number  | 500        |
| theme         | 设置初始化主题，可选值使用 `window.kityminder.Minder.getThemeList()` 查询                    | String  | fresh-blue |
| registerTheme | 注册主题，参数为主题配置项，如 `registerTheme: { ...minderThemeItems }`                      | Object  | null       |
| disabled      | 是否禁止编辑                                                                                 | Boolean | null       |
| defaultMold   | 外观设置中样式的默认值                                                                       | Number  | 3          |

### 启用配置

| Name           | Description          | Type    | Default |
| -------------- | -------------------- | ------- | ------- |
| sequenceEnable | 是否启用优先级功能   | Boolean | true    |
| tagEnable      | 是否启用标签功能     | Boolean | true    |
| progressEnable | 是否启用完成进度功能 | Boolean | true    |
| moveEnable     | 是否启用上移下移功能 | Boolean | true    |

### 优先级配置

| Name                  | Description                                                                                    | Type     | Default |
| --------------------- | ---------------------------------------------------------------------------------------------- | -------- | ------- |
| priorities            | 优先级选项，当该参数不为空时 `priorityCount`, `priorityStartWithZero`, `priorityPrefix` 不生效 | Array    | []      |
| priorityCount         | 优先级最大显示数量，最多支持显示 9 个级别                                                      | Number   | 4       |
| priorityStartWithZero | 优先级是否从 0 开始                                                                            | Boolean  | true    |
| priorityPrefix        | 优先级显示的前缀                                                                               | String   | 'P'     |
| priorityDisableCheck  | 优先级设置的回调函数，如果返回 `true` 则无法设置优先级                                         | Function | null    |

### 标签配置

| Name            | Description                                                               | Type     | Default |
| --------------- | ------------------------------------------------------------------------- | -------- | ------- |
| tags            | 标签选项                                                                  | Array    | []      |
| distinctTags    | 定义排他标签，比如 ['tag1','tag2'], 则 `tag1` 不能和 `tag2` 共存          | Array    | []      |
| tagDisableCheck | 菜单栏是否允许打标签的回调函数，返回 `true` 则不允许打标签                | Function | null    |
| tagEditCheck    | 打标签时的回调函数，返回 `false` 则打标签不成功，参数为当前节点的标签数组 | Function | null    |

## Slots

| Name      | Description                       |
| --------- | --------------------------------- |
| -         | 在脑图区域自定义额外内容          |
| edit-menu | 在思维导图 tab 最后自定义额外内容 |
| view-menu | 在外观样式 tab 最后自定义额外内容 |

## API

补充 [kityminder-core wiki](https://github.com/fex-team/kityminder-core/wiki) 中未说明的 API 文档。

### minder

更多请查看 `window.minder` 对象或者 `window.km` 对象

- window.minder.setTheme() 设置主题
- window.minder.useTheme() 设置主题 (同 setTheme)
- window.minder.getTheme() 获取当前主题
- window.minder.getThemeItems() 获取当前主题的所有样式
- window.minder.execCommand(command, params) 执行命令

### kityminder

更多请查看 `window.kityminder` 对象

- window.kityminder.Minder.getThemeList() 获取所有主题及主题配置项

### minderEditor

更多请查看 `window.minderEditor` 对象

### kity

更多请查看 `window.kity` 对象

### HotBox

更多请查看 `window.HotBox` 对象

## Build Setup

``` bash
# npm install -g node-gyp
# install npm dependencies
npm install

# serve with hot reload at localhost:8088
npm run dev

# build for plugin with minification
npm run build

# License
BSD-3-Clause License
```

## 参考

- [vue-minder-editor-plus](https://github.com/AgAngle/vue-minder-editor-plus)
- [vue-mindeditor](https://github.com/fudax/vue-mindeditor)
- [kityminder-editor](https://github.com/fex-team/kityminder-editor)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/vue-minder-editor-extended/  

