# A custom web component that embeds caniuse.com browser compatibility data for a specific feature.

# `<caniuse-embed>` 元素

[![npm version](https://img.shields.io/npm/v/@cell-x/caniuse-embed-element.svg)](https://www.npmjs.com/package/@cell-x/caniuse-embed-element)
[![License](https://img.shields.io/npm/l/%40cell-x%2Fcaniuse-embed-element.svg)](https://github.com/Lruihao/caniuse-embed-element/blob/main/LICENSE)

[English](https://raw.githubusercontent.com/Lruihao/caniuse-embed-element/refs/heads/main./README.md) | 简体中文

一个轻量级、可定制的 Web 组件，用于嵌入 [caniuse.com](https://caniuse.com) 的特定 Web 功能的浏览器兼容性数据。使用 [Lit](https://lit.dev/) 构建，设计为可无缝集成到任何 Web 项目中。

[🌟 **在线演示**](https://caniuse-el.lruihao.cn)

![caniuse 示例](https://raw.githubusercontent.com/Lruihao/caniuse-embed-element/refs/heads/main./preview/caniuse.webp)

![baseline 示例](https://raw.githubusercontent.com/Lruihao/caniuse-embed-element/refs/heads/main./preview/baseline.png)

## ✨ 特性

- 🎯 **轻松集成**：即插即用的 Web 组件，适用于任何框架或原生 HTML
- 🎨 **主题支持**：自动、浅色和深色主题，适应您的设计
- 📱 **响应式**：根据内容自动调整高度
- ⚡ **轻量级**：使用 Lit 构建，最小化包体积
- 🛠️ **可定制**：配置数据源、时间范围和外观
- 🔒 **类型安全**：完整的 TypeScript 支持和全面的类型定义

## 🚀 快速开始

### CDN（推荐）

在您的 HTML 中添加脚本标签：

```html
<script src="https://unpkg.com/@cell-x/caniuse-embed-element/dist/caniuse-embed-element.iife.js"></script>
```

然后使用组件：

```html
<caniuse-embed feature="css-grid"></caniuse-embed>
```

### NPM 安装

```bash
npm install @cell-x/caniuse-embed-element
```

```javascript
import '@cell-x/caniuse-embed-element'
```

## 📖 使用示例

### 基本用法

```html
<caniuse-embed feature="css-grid"></caniuse-embed>
```

### 使用 Baseline 支持

显示功能的浏览器兼容性基线信息：

```html
<caniuse-embed feature="css-grid" baseline></caniuse-embed>
```

### 自定义配置

```html
<caniuse-embed
  feature="flexbox"
  theme="dark"
  past="3"
  future="2"
  baseline
  origin="https://caniuse.lruihao.cn"
></caniuse-embed>
```

FRAMEWORK_INTEGRATION.md

### 框架集成

以下是使用 Vue.js 的示例。更多框架集成示例，请参阅 [FRAMEWORK_INTEGRATION.md](https://raw.githubusercontent.com/Lruihao/caniuse-embed-element/refs/heads/main./FRAMEWORK_INTEGRATION.md)。

```vue
<script setup>
import '@cell-x/caniuse-embed-element'
</script>

<template>
  <div>
    <caniuse-embed
      feature="css-grid"
      theme="dark"
      :past="3"
      :future="2"
    />
  </div>
</template>
```

## ⚙️ API 参考

### 属性

| 属性       | 类型                          | 默认值                         | 描述                                                       |
| ---------- | ----------------------------- | ------------------------------ | ---------------------------------------------------------- |
| `feature`  | `string`                      | `''`                           | **必需**。caniuse 功能标识符（例如 'css-grid', 'flexbox'） |
| `past`     | `0 - 5`                       | `2`                            | 显示过去浏览器版本的数量                                   |
| `future`   | `0 - 3`                       | `1`                            | 显示未来浏览器版本的数量                                   |
| `baseline` | `boolean`                     | `false`                        | 显示基线浏览器兼容性状态（如果可用）                       |
| `origin`   | `string`                      | `'https://caniuse.lruihao.cn'` | caniuse 嵌入服务的基础 URL                                 |
| `theme`    | `'auto' \| 'light' \| 'dark'` | `'auto'`                       | 嵌入内容的颜色主题                                         |
| `loading`  | `'eager' \| 'lazy'`           | `'lazy'`                       | iframe 的加载策略（立即加载或延迟加载）                    |
| `meta`     | `string`                      | `自动生成`                     | 嵌入实例的唯一标识符                                       |

### 关于 Baseline

`baseline` 属性显示 Web 功能的 [Baseline](https://web.dev/baseline) 浏览器兼容性状态。启用后，它会显示功能是否：

- **广泛可用** - 所有主流浏览器都支持
- **新近可用** - 最近在主流浏览器中可用
- **有限可用** - 尚未在所有主流浏览器中可用

这提供了功能采用情况的快速视觉指示器，帮助开发者在使用 Web 平台功能时做出明智的决策。

### 查找功能名称

功能名称对应于 [caniuse.com](https://caniuse.com) 上使用的标识符。您可以在以下位置找到它们：

- URL 路径：`https://caniuse.com/css-grid` → 功能名称是 `css-grid`
- [caniuse.lruihao.cn](https://caniuse.lruihao.cn/) 上的搜索结果
- [caniuse-db](https://github.com/Fyrd/caniuse/tree/master/features-json) 仓库

### 常见功能示例

- `css-grid` - CSS 网格布局
- `flexbox` - 弹性盒子布局
- `arrow-functions` - 箭头函数
- `webp` - WebP 图片格式
- `css-variables` - CSS 自定义属性
- `async-functions` - Async/Await 函数
- ...

### CSS 类

- `.ciu-embed-iframe` - 嵌入的 iframe 元素
- `.ciu-embed-empty` - 未指定功能时的空状态

## 🌐 浏览器支持

此 Web 组件适用于支持以下特性的所有现代浏览器：

- Custom Elements v1
- Shadow DOM v1
- ES2015+ 特性

<!--
对于较旧的浏览器，请考虑使用 polyfills：

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/webcomponents-loader.js"></script>
```
-->

## 🔧 开发

### 前置要求

- Node.js 20+
- pnpm 10+

### 设置

```bash
# 克隆仓库
git clone https://github.com/Lruihao/caniuse-embed-element.git
cd caniuse-embed-element

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

### 构建

```bash
# 构建所有格式
pnpm build:all

# 构建特定格式
pnpm build:lib    # ES 模块和类型
pnpm build:iife   # 用于 CDN 的 IIFE 格式
pnpm build        # 演示构建
```

### 脚本

- `pnpm dev` - 启动开发服务器
- `pnpm build` - 构建演示
- `pnpm build:lib` - 构建库（ES 模块 + 类型）
- `pnpm build:iife` - 构建 CDN 的 IIFE 包
- `pnpm build:all` - 构建所有格式
- `pnpm lint` - 运行 ESLint
- `pnpm preview` - 预览构建的演示

## 📦 发行版

该包提供多种构建格式：

- **ES 模块**（`dist/`）- 用于现代打包工具
- **IIFE 包**（`dist/caniuse-embed-element.iife.js`）- 用于 CDN
- **TypeScript 定义**（`dist/types/`）- 用于 TypeScript 项目

## 🤝 贡献

欢迎贡献！请随时提交 Pull Request。对于重大更改，请先开 issue 讨论您想要更改的内容。

1. Fork 仓库
2. 创建您的功能分支（`git checkout -b feature/amazing-feature`）
3. 提交您的更改（`git commit -m 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 打开 Pull Request
LICENSE

## 📄 许可证

本项目采用 MIT 许可证。详情请参阅 [LICENSE](https://raw.githubusercontent.com/Lruihao/caniuse-embed-element/refs/heads/main./LICENSE) 文件。

## 🙏 致谢

- [pengzhanbo/caniuse-embed](https://github.com/pengzhanbo/caniuse-embed)
- [mdn-browser-compat-data](https://github.com/mdn/browser-compat-data) - 来自 MDN 的全面浏览器兼容性数据
- [Fyrd/caniuse](https://github.com/Fyrd/caniuse) - 原始浏览器支持数据

---

由 [Lruihao](https://github.com/Lruihao) 用 ❤️ 制作


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/caniuse-embed-element/  

