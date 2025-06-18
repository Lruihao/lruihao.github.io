# CSS @Layer：构建更高效、更可维护的样式层级


在现代前端开发中，CSS 的样式管理一直是一个令人头疼的问题。随着项目的不断扩展，样式规则的冲突、覆盖以及维护成本的增加，都给开发者带来了巨大的挑战。幸运的是，CSS 的 `@layer` 规则为我们提供了一种全新的解决方案，帮助我们更好地管理样式层级，提升代码的可维护性和可读性。本文将深入探讨 `@layer` 的背景、作用以及语法，带你一探究竟。

<!--more-->

## `@layer` 的背景

在 CSS 的发展历程中，样式的优先级规则一直是核心概念之一。默认情况下，CSS 样式按照选择器的优先级（如内联样式 > ID 选择器 > 类选择器 > 元素选择器）以及代码的书写顺序来决定最终的样式效果。然而，这种简单的优先级规则在大型项目中常常会引发问题：

1. **样式冲突**：多个样式规则可能同时作用于同一个元素，导致样式冲突，开发者需要不断调整选择器的优先级来解决问题。
2. **维护困难**：随着项目的复杂度增加，样式文件变得庞大且难以维护。开发者很难快速定位和修改特定的样式规则。
3. **组件化开发的挑战**：在组件化开发中，不同组件的样式可能会相互干扰，导致样式管理混乱。

为了解决这些问题，CSS 工作组引入了 `@layer` 规则。`@layer` 允许开发者显式地定义样式的层级关系，从而更好地组织和管理样式规则。

## `@layer` 的作用

### 定义样式层级

`@layer` 的核心作用是允许开发者显式地定义样式的层级关系。通过将样式规则分层，我们可以明确地控制样式的优先级顺序。例如，我们可以将基础样式定义在较低的层级，而将特定组件的样式定义在较高的层级，从而避免样式冲突。

```css
@layer base {
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
}
```

### 提升代码可维护性

使用 `@layer` 可以让样式文件的结构更加清晰。开发者可以按照功能或模块将样式规则分层，便于后续的修改和扩展。同时，分层的样式规则也更容易被团队成员理解和协作。

### 支持组件化开发

在组件化开发中，`@layer` 可以帮助我们更好地隔离组件的样式。每个组件可以定义自己的样式层级，从而避免组件之间的样式相互干扰。这大大提升了组件的复用性和可维护性。

例如：

```css
@layer components {
  .cell-button {
    background-color: blue;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
}
```

在业务代码中，我们可以无视组件 CSS 的优先级，直接进行重置：

```css
.cell-button {
  background-color: red; /* 覆盖组件样式 */
}
```

眼见为实：

{{< html-demo "css-at-layer" "50px" >}}

可以理解为 `@layer` 定义的层级会整体下降一个优先级，这样便于分开业务代码和组件代码的样式管理。

## `@layer` 的语法

### 基本语法

```css
@layer layer-name? {rules}
@layer layer-name;
@layer layer-name, layer-name, layer-name;
```

简而言之，`@layer` 规则可以用来**定义一个样式层级**或者**改变现有层级的优先级**。

- `@layer layer-name? {rules};` 这种形式用于定义一个新的样式层级，如果名称为空，则为匿名层级。
- `@layer` 后接一个或多个层级名称，用于指定样式层级的优先级顺序，按照前后顺序。

### 让整个 CSS 文件变成 `@layer`

如果我们希望将整个 CSS 文件作为一个层级，可以使用以下语法：

`@import` 中使用：

```css
@import (utilities.css) layer(utilities);
```

`<link>` 元素引用 (*)：

> [!WARNING]
> 该用法有待考证，在 MDN 上尚未找到明确文档。

```html
<link rel="stylesheet" href="utilities.css" layer="utilities">
<!-- 样式引入到一个匿名级联层中 -->
<link rel="stylesheet" href="utilities.css" layer>
```

### 嵌套层级

`@layer` 也支持嵌套定义，这使得我们可以在一个层级中进一步细分样式规则。例如：

```css
@layer base {
  @layer typography {
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }
}
```

在嵌套层级中，外层层级的优先级低于内层层级。

多嵌套语法下的优先级：

```css
@layer A {
  p { color: red; }
  @layer B {
    p { color: green; }
  }
}
@layer C {
  p { color: orange; }
  @layer D {
    p { color: blue; }
  }
}
```

其中的优先级大小是这样的：C > C.D > A > A.B

另外，嵌套语法还支持使用级联写法简化。

例如，普通内外嵌套写法：

```css
@layer outer {
  button {
    width: 100px;
    height: 30px;    
  }
  @layer inner {
    button {
      height: 40px;
      width: 160px;
    }    
  }
}
```

上面的内外嵌套语法还可以写成下面这样：

```css
@layer outer {
  button {
    width: 100px;
    height: 30px;    
  }
}
@layer outer.inner {
  button {
    height: 40px;
    width: 160px;
  }    
}
```

## `@layer` 的兼容性

{{< caniuse "mdn-css_at-rules_layer" >}}

## 参考

- [MDN Web Docs - @layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
- [详解日后定会大规模使用的 CSS @layer 规则](https://www.zhangxinxu.com/wordpress/2022/05/css-layer-rule/)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/at-layer/  

