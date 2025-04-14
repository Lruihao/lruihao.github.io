# Vue2 + Tailwindcss 初始化


## 新建 Vue2 项目

通过 `vue-cli` 创建一个叫 `v2-tailwind` 的项目：

```bash
vue create vue2-tailwind
```

根据需要选择其他的功能插件，例如：`Babel, Router, Vuex, CSS Pre-processors, Linter`。

<details>
  <summary>关于 ESLint</summary>
  当在 Vue 创建项目时，你可以根据自己的需求选择不同的 ESLint 配置。以下是一些常见的选项及其优缺点和注意事项：

  1. **ESLint with error prevention only**:
     - 优点：这个配置只会帮助你防止代码中的错误，它的规则相对宽松。适用于刚开始使用 ESLint 或者希望避免太多约束的开发者。
     - 缺点：由于规则相对宽松，可能无法完全确保代码风格的一致性。
     - 注意事项：如果你想要更严格的代码检查，可以考虑其他配置。

  2. **ESLint + Airbnb config**:
     - 优点：Airbnb 的配置非常严格，能够帮助你遵循最佳实践和编写高质量的代码。此外，它也包含了许多 ES6+ 的规则。
     - 缺点：由于其严格性，初学者可能需要花费更多时间来解决 ESLint 报告的问题。
     - 注意事项：在使用此配置时，请确保你理解并接受 Airbnb 的代码规范。

  3. **ESLint + Standard config**:
     - 优点：Standard 的配置旨在提供一个相对简单、一致的代码风格，适合那些喜欢“零配置”的开发者。
     - 缺点：这个配置可能不适用于所有项目，因为它有自己的代码风格要求。
     - 注意事项：如果你的团队或项目已经有自己的编码规范，使用 Standard 配置可能会导致不一致。

  4. **ESLint + Prettier**:
     - 优点：Prettier 是一个自动格式化工具，可以与 ESLint 结合使用，以确保代码风格的一致性。这可以提高代码可读性，并减少在代码审查过程中关注格式问题的时间。
     - 缺点：Prettier 可能会覆盖某些 ESLint 规则，所以需要花一些时间确保配置正确。
     - 注意事项：为了避免冲突，请确保 ESLint 和 Prettier 的规则正确配置。

  总之，在选择 ESLint 配置时，需要根据你的团队、项目需求和个人偏好来权衡。选择适当的配置可以帮助你提高代码质量并保持一致的代码风格。
</details>

## 安装 tailwindcss

打开项目，安装 `tailwindcss`：

```bash
cd vue2-tailwind
# 安装 tailwindcss 低版本及相关插件
npm install tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

然后创建配置文件：

```bash
# 创建 postcss.config.js, tailwind.config.js
npx tailwindcss init -p
```

```js {title="postcss.config.js"}
module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
}
```

```js {title="tailwind.config.js"}
module.exports = {
  purge: [
    "./src/App.vue",
    "./src/views/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit', // 是否开启 jit 模式，开启以后编译会更快，当然，tailwindcss 版本需要在 2.1 以上
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

最后在 `main.js` 中引入 `tailwindcss`

```js
import "tailwindcss/tailwind.css"
```

## 启动项目

启动项目，修改模板中的 class 进行测试。

```bash
npm run serve
```

```vue {title="src/App.vue"}
<template>
  <div id="app">
    <div class="bg-gray-100">
      <div class="container mx-auto">
        <div class="flex justify-center items-center h-screen">
          <div class="text-4xl text-gray-700">Hello Vue2 + tailwindcss</div>
        </div>
      </div>
    </div>
  </div>
</template>
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/v2-tailwind/  

