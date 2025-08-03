# A custom web component that embeds caniuse.com browser compatibility data for a specific feature.

# `<caniuse-embed>` Element

[![npm version](https://img.shields.io/npm/v/@cell-x/caniuse-embed-element.svg)](https://www.npmjs.com/package/@cell-x/caniuse-embed-element)
[![License](https://img.shields.io/npm/l/%40cell-x%2Fcaniuse-embed-element.svg)](https://github.com/Lruihao/caniuse-embed-element/blob/main/LICENSE)

A lightweight, customizable web component that embeds [caniuse.com](https://caniuse.com) browser compatibility data for specific web features. Built with [Lit](https://lit.dev/) and designed to seamlessly integrate into any web project.

[🌟 **Live Demo**](https://lruihao.github.io/caniuse-embed-element/)

## ✨ Features

- 🎯 **Easy Integration**: Drop-in web component that works with any framework or vanilla HTML
- 🎨 **Theme Support**: Auto, light, and dark themes that adapt to your design
- 📱 **Responsive**: Automatically adjusts height based on content
- ⚡ **Lightweight**: Built with Lit for minimal bundle size
- 🛠️ **Customizable**: Configure data source, time range, and appearance
- 🔒 **Type Safe**: Full TypeScript support with comprehensive type definitions

## 🚀 Quick Start

### CDN (Recommended)

Add the script tag to your HTML:

```html
<script src="https://unpkg.com/@cell-x/caniuse-embed-element/dist/caniuse-embed-element.iife.js"></script>
```

Then use the component:

```html
<caniuse-embed feature="css-grid"></caniuse-embed>
```

### NPM Installation

```bash
npm install @cell-x/caniuse-embed-element
```

```javascript
import '@cell-x/caniuse-embed-element'
```

## 📖 Usage Examples

### Basic Usage

```html
<caniuse-embed feature="css-grid"></caniuse-embed>
```

### With Custom Configuration

```html
<caniuse-embed
  feature="flexbox"
  theme="dark"
  past="3"
  future="2"
  origin="https://caniuse.lruihao.cn"
></caniuse-embed>
```

### Framework Integration

Here's an example using Vue.js. For more framework integration examples, see [FRAMEWORK_INTEGRATION.md](FRAMEWORK_INTEGRATION.md).

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

## ⚙️ API Reference

### Attributes/Properties

| Attribute | Type                          | Default                        | Description                                                                |
| --------- | ----------------------------- | ------------------------------ | -------------------------------------------------------------------------- |
| `feature` | `string`                      | `''`                           | **Required**. The caniuse feature identifier (e.g., 'css-grid', 'flexbox') |
| `past`    | `0 - 5`                       | `2`                            | Number of past browser versions to display                                 |
| `future`  | `0 - 3`                       | `1`                            | Number of future browser versions to display                               |
| `origin`  | `string`                      | `'https://caniuse.lruihao.cn'` | Base URL of the caniuse embed service                                      |
| `theme`   | `'auto' \| 'light' \| 'dark'` | `'auto'`                       | Color theme for the embedded content                                       |
| `loading` | `'eager' \| 'lazy'`           | `'lazy'`                       | Loading strategy for the iframe (eager or lazy)                            |
| `meta`    | `string`                      | `auto-generated`               | Unique identifier for the embed instance                                   |

### Finding Feature Names

Feature names correspond to the identifiers used on [caniuse.com](https://caniuse.com). You can find them in:

- The URL path: `https://caniuse.com/css-grid` → feature name is `css-grid`
- The search results on [caniuse.lruihao.cn](https://caniuse.lruihao.cn/)
- The [caniuse-db](https://github.com/Fyrd/caniuse/tree/master/features-json) repository

### Common Feature Examples

- `css-grid` - CSS Grid Layout
- `flexbox` - Flexible Box Layout
- `arrow-functions` - Arrow Functions
- `webp` - WebP Image Format
- `css-variables` - CSS Custom Properties
- `async-functions` - Async/Await Functions
- ...

### CSS Classes

- `.ciu-embed-iframe` - The embedded iframe element
- `.ciu-embed-empty` - Empty state when no feature is specified

## 🌐 Browser Support

This web component works in all modern browsers that support:

- Custom Elements v1
- Shadow DOM v1
- ES2015+ features

<!--
For older browsers, consider using polyfills:

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/webcomponents-loader.js"></script>
```
-->

## 🔧 Development

### Prerequisites

- Node.js 20+
- pnpm 10+

### Setup

```bash
# Clone the repository
git clone https://github.com/Lruihao/caniuse-embed-element.git
cd caniuse-embed-element

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build

```bash
# Build all formats
pnpm build:all

# Build specific formats
pnpm build:lib    # ES modules and types
pnpm build:iife   # IIFE for CDN usage
pnpm build        # Demo build
```

### Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build demo
- `pnpm build:lib` - Build library (ES modules + types)
- `pnpm build:iife` - Build IIFE bundle for CDN
- `pnpm build:all` - Build all formats
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview built demo

## 📦 Distribution

The package provides multiple build formats:

- **ES Modules** (`dist/`) - For modern bundlers
- **IIFE Bundle** (`dist/caniuse-embed-element.iife.js`) - For CDN usage
- **TypeScript Definitions** (`dist/types/`) - For TypeScript projects

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [pengzhanbo/caniuse-embed](https://github.com/pengzhanbo/caniuse-embed)
- [mdn-browser-compat-data](https://github.com/mdn/browser-compat-data) - Comprehensive browser compatibility data from MDN
- [Fyrd/caniuse](https://github.com/Fyrd/caniuse) - The raw browser support data

---

Made with ❤️ by [Lruihao](https://github.com/Lruihao)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/caniuse-embed-element/  

