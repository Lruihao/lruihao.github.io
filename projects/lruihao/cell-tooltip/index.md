# 一个轻量化 Tooltip 组件。

# cell-tooltip

一个基于 TypeScript + Vite 的轻量化 Tooltip 组件，交互模型参考 Bootstrap `tooltip.js`，保留常用能力并尽量减少体积与依赖。

## 特性

- 支持触发方式：`hover` / `focus` / `click` / `manual`
- 支持位置：`top` / `bottom` / `left` / `right` / `auto`
- 支持延迟配置（`show` / `hide`）
- 支持 `data-ct-*` 属性初始化
- 支持实例方法：`show` / `hide` / `toggle` / `update` / `dispose`
- 支持动画：`scale` / `fade` / `shift-away` / `none`
- 支持交互式 tooltip（`interactive`）
- 支持自动清理（`autoDispose`）
- 支持事件回调（`onShow` / `onHide`）
- 支持 Escape 键关闭和点击外部关闭
- 支持 CSS 自定义属性（`--tooltip-duration`）
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
import CellTooltip from 'cell-tooltip'

const element = document.querySelector<HTMLElement>('#btn')

if (element) {
  CellTooltip.getOrCreateInstance(element)
}

// 批量初始化
CellTooltip.initAll('[data-ct-title]')
```

### 3) 浏览器直引（UMD / IIFE）

```html
<script src="./dist/cell-tooltip.umd.js"></script>
<script>
  CellTooltip.initAll('[data-ct-title]')
</script>
```

## 配置项

```ts
type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right' | 'auto'
type TooltipTrigger = 'hover' | 'focus' | 'click' | 'manual'
type TooltipTheme = 'light' | 'dark' | 'auto'
type TooltipAnimation = 'fade' | 'scale' | 'shift-away' | 'none'

interface TooltipOptions {
  title?: string | ((element: HTMLElement) => string)
  placement?: TooltipPlacement
  trigger?: string
  theme?: TooltipTheme
  container?: HTMLElement
  offset?: number
  html?: boolean
  delay?: number | { show?: number; hide?: number }
  customClass?: string
  animation?: TooltipAnimation
  template?: string
  boundary?: HTMLElement | 'viewport'
  showOnCreate?: boolean
  interactive?: boolean
  autoDispose?: boolean
  onShow?: (tooltip: Tooltip) => void
  onHide?: (tooltip: Tooltip) => void
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
- `customClass`：自定义 CSS 类名
- `animation`：动画类型；`scale`（默认）/ `fade` / `shift-away` / `none`
- `template`：自定义 tooltip HTML 结构（需包含 `.cell-tooltip-arrow` 和 `.cell-tooltip-inner`）
- `boundary`：边界元素，auto placement 时参考，默认 `'viewport'`
- `showOnCreate`：创建时立即显示
- `interactive`：允许鼠标悬停在 tooltip 上（适用于链接等交互内容）
- `autoDispose`：触发元素从 DOM 移除时自动清理，默认 `true`
- `onShow`：显示时回调
- `onHide`：隐藏时回调

## data 属性

- `data-ct-title`
- `data-ct-placement`
- `data-ct-trigger`
- `data-ct-theme`
- `data-ct-html`
- `data-ct-offset`
- `data-ct-delay`
- `data-ct-custom-class`
- `data-ct-animation`
- `data-ct-show-on-create`
- `data-ct-interactive`

示例：

```html
<button
  data-ct-title="<strong>HTML</strong> 内容"
  data-ct-trigger="click"
  data-ct-placement="right"
  data-ct-theme="light"
  data-ct-html="true"
  data-ct-animation="fade"
>
  Click
</button>
```

## 实例方法

```ts
import Tooltip from 'cell-tooltip'

const tooltip = Tooltip.getOrCreateInstance(element, {
  title: 'Manual tooltip',
  trigger: 'manual',
})

tooltip.show()
tooltip.hide()
tooltip.toggle()
tooltip.update()
tooltip.refresh()
tooltip.setTitle('New title')
tooltip.getContent()   // 获取当前内容
tooltip.getConfig()    // 获取当前配置
tooltip.dispose()

// 静态方法
Tooltip.getInstance(element)          // 获取已有实例或 null
Tooltip.getOrCreateInstance(element)   // 获取或创建实例
Tooltip.initAll('.selector')          // 批量初始化
Tooltip.observe('.selector')          // 观察 DOM 变化自动初始化（返回 MutationObserver）
```

## CSS 自定义属性

可通过 CSS 自定义属性覆盖默认样式：

```css
.cell-tooltip {
  --tooltip-bg: #111827;
  --tooltip-color: #f8fafc;
  --tooltip-arrow-size: 8px;
  --tooltip-duration: 0.12s;
}
```

## 目录

- `src/tooltip.ts`：组件核心实现
- `src/index.ts`：导出入口
- `src/main.ts`：示例页面初始化
- `src/tooltip.css`：tooltip 核心样式
- `src/style.css`：演示页面样式


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/cell-tooltip/  

