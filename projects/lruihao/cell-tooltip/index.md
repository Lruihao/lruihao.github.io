# 一个轻量化 Tooltip 组件。

# cell-tooltip

一个基于 TypeScript + Vite 的轻量化 Tooltip 组件，交互模型参考 Bootstrap `tooltip.js`，保留常用能力并尽量减少体积与依赖。

## 特性

- 支持触发方式：`hover` / `focus` / `click` / `manual`
- 支持位置：`top` / `bottom` / `left` / `right` / `auto`
- 支持延迟配置（`show` / `hide`）
- 支持 `data-ct-*` 属性初始化
- 支持实例方法：`show` / `hide` / `toggle` / `update` / `dispose`
- 内置箭头与基础样式，无第三方依赖

## 本地运行

```bash
pnpm install
pnpm dev
```

构建库产物：

```bash
pnpm build
```

构建 Demo：

```bash
pnpm build:demo
```

预览 Demo：

```bash
pnpm preview
```

`build` 会输出库产物到 `dist/`，`build:demo` 会输出示例站点到 `dist-demo/`。

## 快速使用

### 1) HTML

```html
<button
  id="btn"
  data-ct-title="Hello tooltip"
  data-ct-placement="top"
>
  Hover me
</button>
```

### 2) TS

```ts
import { Tooltip } from './src'

const element = document.querySelector<HTMLElement>('#btn')

if (element) {
  Tooltip.getOrCreateInstance(element)
}

// 批量初始化
Tooltip.initAll('[data-ct-title]')
```

## 配置项

```ts
type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right' | 'auto'
type TooltipTrigger = 'hover' | 'focus' | 'click' | 'manual'
type TooltipTheme = 'light' | 'dark' | 'auto'

interface TooltipOptions {
  title?: string | (() => string)
  placement?: TooltipPlacement
  trigger?: string
  theme?: TooltipTheme
  container?: HTMLElement
  offset?: number
  html?: boolean
  delay?: number | { show?: number; hide?: number }
}
```

- `title`：提示内容；可传字符串或函数
- `placement`：位置；`auto` 会按可用空间自动选择
- `trigger`：触发方式，支持空格组合（例如 `"hover focus"`）
- `theme`：主题；支持 `light` / `dark` / `auto`，默认 `dark`
- `container`：tooltip 挂载容器，默认 `document.body`
- `offset`：目标元素与 tooltip 的间距（像素）
- `html`：是否按 HTML 渲染 `title`
- `delay`：显示/隐藏延迟（毫秒）

## data 属性

- `data-ct-title`
- `data-ct-placement`
- `data-ct-trigger`
- `data-ct-theme`

示例：

```html
<button
  data-ct-title="Click tooltip"
  data-ct-trigger="click"
  data-ct-placement="right"
  data-ct-theme="light"
>
  Click
</button>
```

## 实例方法

```ts
const tooltip = Tooltip.getOrCreateInstance(element, {
  title: 'Manual tooltip',
  trigger: 'manual',
})

tooltip.show()
tooltip.hide()
tooltip.toggle()
tooltip.update()
tooltip.dispose()

// 批量初始化（返回 Tooltip 实例数组）
const tooltips = Tooltip.initAll('.demo-btn[data-ct-title]')
```

## 目录

- `src/tooltip.ts`：组件核心实现
- `src/index.ts`：导出入口
- `src/main.ts`：示例页面初始化
- `src/style.css`：演示与 tooltip 样式


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/cell-tooltip/  

