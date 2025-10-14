# A custom element for viewing and interacting with JSON data.

# &lt;json-viewer&gt; Element

> 🌈 一个轻量、现代的 JSON 可视化与交互 Web 组件

## 功能特性

- 🌟 **Web 组件**：原生，无框架依赖
- 🎨 **主题**：支持明暗模式
- 📦 **盒装**：可选边框与内边距
- 📋 **可复制**：一键复制 JSON
- 🔑 **排序**：支持键排序
- 🔍 **展开深度**：可控初始展开层级
- 🧩 **自定义复制按钮**：slot 插槽支持
- 🧬 **类型高亮**：丰富多彩的类型高亮
- 🛠️ **自定义事件**：支持 copy/toggle 事件监听

## 使用方法

### 安装

```bash
npm install json-viewer-element
```

### 引入

#### 作为模块

```js
import 'json-viewer-element'
```

#### UMD (CDN)

```html
<script src="https://unpkg.com/json-viewer-element/dist/json-viewer-element.umd.js"></script>
```

### 基本用法

手动绑定 value：

```html
<json-viewer id="viewer" boxed copyable sort expand-depth="2" theme="dark"></json-viewer>
<script>
  document.getElementById('viewer').value = { hello: "world", arr: [1,2,3] };
</script>
```

直接在标签上绑定 value：

```html
<json-viewer value='{"hello":"world","arr":[1,2,3]}' boxed copyable sort expand-depth="2" theme="dark"></json-viewer>
```

> [!TIP]
> 在 Vue 等框架中使用时，value 和 copyable 对象的值需要转成字符串传入。

```vue
<template>
  <json-viewer :value="JSON.stringify(json)" boxed copyable sort expand-depth="2" theme="dark"></json-viewer>
</template>

<script>
export default {
  data() {
    return {
      json: { hello: "world", arr: [1,2,3] },
    }
  },
}
</script>
```

## 属性

| 属性         | 类型                      | 默认值  | 说明                                       |
| :----------- | :------------------------ | :------ | :----------------------------------------- |
| value        | any                       |         | JSON 数据                                  |
| expand-depth | number                    | 1       | 初始展开层级                               |
| copyable     | boolean / CopyableOptions | false   | 启用复制按钮或自定义复制按钮配置（见下表） |
| sort         | boolean                   | false   | 是否对对象键排序                           |
| boxed        | boolean                   | false   | 是否显示边框和内边距                       |
| theme        | 'light' / 'dark'          | 'light' | 主题                                       |
| parse        | boolean                   | true    | 字符串值是否自动解析为 JSON                |

### CopyableOptions

| 属性        | 类型              | 默认值    | 说明                       |
| :---------- | :---------------- | :-------- | :------------------------- |
| copyText    | string            | Copy      | 复制按钮显示的文本         |
| copiedText  | string            | Copied    | 复制成功后显示的文本       |
| timeout     | number            | 2000      | 显示 copiedText 的时长 (ms) |
| align       | 'left' / 'right'  | right     | 复制按钮对齐方式           |

## 事件

| 事件         | 说明                |
| :----------- | :------------------ |
| copy-success | 复制成功后触发      |
| copy-error   | 复制失败后触发      |
| toggle       | 节点折叠/展开时触发 |

## 插槽

自定义复制按钮：

```html
<json-viewer copyable>
  <button slot="copy-button">复制 JSON</button>
</json-viewer>
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2025-present [Lruihao](https://github.com/Lruihao)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/json-viewer-element/  

