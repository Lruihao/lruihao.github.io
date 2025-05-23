# 怎么生成暗黑模式和明亮模式的 SVG 图片？


在做博客顶部栏下落奶油图的时候，就在想怎么适配暗黑模式和明亮模式呢？本文将记录两个思路。

<!--more-->

## 方案一：通过模板生成两张图片

这是最容易想到的，也是我最初的想法，通过两张图片来实现暗黑模式和明亮模式的切换。

假设我们已经有了两张图片，`drop.min.svg` 和 `drop-dark.min.svg`，那么我们可以通过 CSS 来实现切换：

```scss
#header-desktop {
  &::after {
    background-image: url(/images/drop.min.svg);
  }
  [data-theme='dark'] & {
    background-image: url(/images/drop-dark.min.svg);
  }
}
```

再创建一个模板文件 `drop.template.svg`：

```go-html-template
{{- $color := cond .isDark "#252627" "#e6e5f8" -}}
<svg viewBox="0 0 778.95 302.64" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m28 14.56h778.71c-8.44 1.45-18.8 3-29.06 5-13.35 2.63-25.55 8.28-37.25 15-9.4 5.44-15.62 13.66-19.51 23.52-8.79 22.33-10 45.36-6 68.89 2.21 13.09 4.06 26.26 5.47 39.45a36.37 36.37 0 0 1 -1.59 13.5c-1.76 6.12-6.65 9.46-12 9.4s-9.52-3.32-11.77-9.32c-3.27-8.7-3.39-17.75-2-26.7 3-18.85 5.71-37.7 4.73-56.86a46.33 46.33 0 0 0 -1.6-9.56c-1.36-5.06-3.63-9.74-9.74-10s-10.86 2.71-13.77 8.06c-5 9.18-5.52 19.16-4.79 29.32.76 10.6 2 21.21 2 31.81 0 5.9-1.82 11.95-3.68 17.65s-6.11 8.1-11.52 7.92c-5-.17-8.76-3.08-10.72-8.53-2.42-6.69-1.42-13.44 0-20.13 2.61-12 5.78-23.85 7.89-35.92 2.43-13.92 3.11-27.94-2.19-41.55-4.23-10.85-14.09-12.81-21.12-3.56a61.82 61.82 0 0 1 -18.93 16.39c-3.95 2.27-7.46 5.32-11.13 8.07-7.31 5.46-13.69 4.33-18.88-3.22-5.52-8-9-16.89-11.55-26.27a56.4 56.4 0 0 0 -4.49-12c-3.1-5.81-9.92-6.05-12.45-.07a62 62 0 0 0 -4.39 18.75c-1.64 19.65 3.05 38.79 5.56 58.1.68 5.24.44 10.61.49 15.92a10.44 10.44 0 0 1 -.83 3.43c-1.68 4.76-5.19 7.58-9 7.29s-7.57-4-7.63-9.07c-.09-7.8.77-15.61 1-23.42s.69-15.38.32-23c-.19-3.87-1.42-8.17-6.18-9.32a8.82 8.82 0 0 0 -10.4 5.05c-3 6.5-6.06 13.34-7.05 20.33-3.34 23.67-2.93 47.47-.37 71.23 2.06 19.08 4.48 38.13 6.07 57.25 1.1 13.29.43 26.63-3.49 39.55a30.52 30.52 0 0 1 -3.69 8c-4.75 7.12-13 7.49-18.15.65a28.17 28.17 0 0 1 -4.42-9.55c-4.22-15.75-3.16-31.62-.46-47.48 4.92-29 11.36-57.79 9.32-87.49-.87-12.69-3.56-24.86-11.22-35.45-5.59-7.73-12.08-10.24-20.8-6.34-8 3.55-15.42 4.52-24 2.25-8.4-2.23-16.74 3.72-20.65 13.16-4.89 11.8-4.15 24-2.15 36.22 1.35 8.29 3.32 16.52 1.46 25-1.65 7.55-5.75 12.08-11.15 11.76s-9.66-5.63-9-13.27c.81-9.36 2.87-18.62 4.68-27.87 2-10.34 4.32-20.77 2-31.18-1.3-5.86-4.33-11.49-7.4-16.74-1.31-2.25-4.51-3.84-7.19-4.76-6.55-2.24-11.76 1.36-11.86 8.29-.07 4.84.91 9.68 1.25 14.54a73 73 0 0 1 .33 11.91c-.55 5.75-4.3 9.55-9.36 10.42-4.85.83-10.69-2-12.48-7.22a27 27 0 0 1 -1.22-12c1.62-11.68 4.51-23.21 5.7-34.92.64-6.26-.52-13-2.12-19.14-1.86-7.18-9.18-10.05-16-7a53.2 53.2 0 0 0 -8.63 5.33c-2.77 2-5.25 4.35-8 6.35-7 5.13-11.33 4.93-18.63.1-3.4-2.25-7.09-4.61-11-5.49-14.83-3.34-25.13 5.83-25.77 22.26-.71 18.29.73 36.32 5.61 54 1.64 6 .52 11.74-2.34 17.18-3.89 7.4-9.56 10.74-15.92 9.39-5.95-1.27-11.29-7.9-11-15.5.35-9 2-17.87 2.82-26.83.58-6.59 1.46-13.31.8-19.83-1-10.3-8.28-14.9-18.33-12.24-14.63 3.87-24.42 11.86-27.78 28-4.53 21.8-3.6 43.53-2.49 65.36 1.36 26.85 9.17 52.61 13.89 78.9 2.22 12.38 3.17 25.1-1.34 37.26-1.46 3.94-4.1 8.12-7.4 10.58-10 7.42-22.1 2.86-23.9-9.4a110.27 110.27 0 0 1 -.57-30c3.9-29.74 9.37-59.37 8-89.47-1-22.07-1.74-44.34-8.78-65.68-3.29-10-8.3-18.25-18-23.72-5.32-3-9.91-7.88-13.77-12.76-4-5.1-8.66-8-15-7.87a52.19 52.19 0 0 0 -11 1c-14 3.26-23.37-3.18-30.62-14.24-2.06-3.41-3.85-7.19-6.43-10.41-15-18.79-35-29.58-58.16-34.93-1.69-.39-3.39-.76-5.08-1.13z"
    transform="translate(-27.76 -14.56)"
  />
</svg>
```

然后，我们可以通过 Hugo 的模板引擎来生成两张图片：

```go-html-template
{{- $template := resources.Get "images/drop.template.svg" -}}
{{- $resource := ($template | resources.ExecuteAsTemplate "images/drop.svg" (dict "isDark" false) | minify).RelPermalink -}}
{{- $resourceDark := ($template | resources.ExecuteAsTemplate "images/drop-dark.svg" (dict "isDark" true) | minify).RelPermalink -}}
```

这样，我们就得到了暗黑模式和明亮模式的两张图片，正如现在博客所看到的一样。

## 方案二：通过 CSS 实现响应式

然后，我在想这两张图除了背景色，其他都一毛一样，能不能通过 CSS 来实现呢？

一番尝试过后，答案是肯定的。

假设我们只有一张图片，`drop.responsive.svg`，还是通过 CSS 来实现切换：

```scss
#header-desktop {
  &::after {
    background-image: url(/images/drop.responsive.svg);
  }
  [data-theme='dark'] & {
    background-image: url(/images/drop.responsive.svg#drop-dark-only);
  }
}
```

再创建一个 SVG 文件 `drop.responsive.svg`：

```svg
<svg id="drop-dark-only" viewBox="0 0 778.95 302.64" xmlns="http://www.w3.org/2000/svg">
  <style>
    #header-drop {
      fill: #e6e5f8;
    }
    #drop-dark-only:target #header-drop {
      fill: #252627;
    }
  </style>
  <path
    id="header-drop"
    d="m28 14.56h778.71c-8.44 1.45-18.8 3-29.06 5-13.35 2.63-25.55 8.28-37.25 15-9.4 5.44-15.62 13.66-19.51 23.52-8.79 22.33-10 45.36-6 68.89 2.21 13.09 4.06 26.26 5.47 39.45a36.37 36.37 0 0 1 -1.59 13.5c-1.76 6.12-6.65 9.46-12 9.4s-9.52-3.32-11.77-9.32c-3.27-8.7-3.39-17.75-2-26.7 3-18.85 5.71-37.7 4.73-56.86a46.33 46.33 0 0 0 -1.6-9.56c-1.36-5.06-3.63-9.74-9.74-10s-10.86 2.71-13.77 8.06c-5 9.18-5.52 19.16-4.79 29.32.76 10.6 2 21.21 2 31.81 0 5.9-1.82 11.95-3.68 17.65s-6.11 8.1-11.52 7.92c-5-.17-8.76-3.08-10.72-8.53-2.42-6.69-1.42-13.44 0-20.13 2.61-12 5.78-23.85 7.89-35.92 2.43-13.92 3.11-27.94-2.19-41.55-4.23-10.85-14.09-12.81-21.12-3.56a61.82 61.82 0 0 1 -18.93 16.39c-3.95 2.27-7.46 5.32-11.13 8.07-7.31 5.46-13.69 4.33-18.88-3.22-5.52-8-9-16.89-11.55-26.27a56.4 56.4 0 0 0 -4.49-12c-3.1-5.81-9.92-6.05-12.45-.07a62 62 0 0 0 -4.39 18.75c-1.64 19.65 3.05 38.79 5.56 58.1.68 5.24.44 10.61.49 15.92a10.44 10.44 0 0 1 -.83 3.43c-1.68 4.76-5.19 7.58-9 7.29s-7.57-4-7.63-9.07c-.09-7.8.77-15.61 1-23.42s.69-15.38.32-23c-.19-3.87-1.42-8.17-6.18-9.32a8.82 8.82 0 0 0 -10.4 5.05c-3 6.5-6.06 13.34-7.05 20.33-3.34 23.67-2.93 47.47-.37 71.23 2.06 19.08 4.48 38.13 6.07 57.25 1.1 13.29.43 26.63-3.49 39.55a30.52 30.52 0 0 1 -3.69 8c-4.75 7.12-13 7.49-18.15.65a28.17 28.17 0 0 1 -4.42-9.55c-4.22-15.75-3.16-31.62-.46-47.48 4.92-29 11.36-57.79 9.32-87.49-.87-12.69-3.56-24.86-11.22-35.45-5.59-7.73-12.08-10.24-20.8-6.34-8 3.55-15.42 4.52-24 2.25-8.4-2.23-16.74 3.72-20.65 13.16-4.89 11.8-4.15 24-2.15 36.22 1.35 8.29 3.32 16.52 1.46 25-1.65 7.55-5.75 12.08-11.15 11.76s-9.66-5.63-9-13.27c.81-9.36 2.87-18.62 4.68-27.87 2-10.34 4.32-20.77 2-31.18-1.3-5.86-4.33-11.49-7.4-16.74-1.31-2.25-4.51-3.84-7.19-4.76-6.55-2.24-11.76 1.36-11.86 8.29-.07 4.84.91 9.68 1.25 14.54a73 73 0 0 1 .33 11.91c-.55 5.75-4.3 9.55-9.36 10.42-4.85.83-10.69-2-12.48-7.22a27 27 0 0 1 -1.22-12c1.62-11.68 4.51-23.21 5.7-34.92.64-6.26-.52-13-2.12-19.14-1.86-7.18-9.18-10.05-16-7a53.2 53.2 0 0 0 -8.63 5.33c-2.77 2-5.25 4.35-8 6.35-7 5.13-11.33 4.93-18.63.1-3.4-2.25-7.09-4.61-11-5.49-14.83-3.34-25.13 5.83-25.77 22.26-.71 18.29.73 36.32 5.61 54 1.64 6 .52 11.74-2.34 17.18-3.89 7.4-9.56 10.74-15.92 9.39-5.95-1.27-11.29-7.9-11-15.5.35-9 2-17.87 2.82-26.83.58-6.59 1.46-13.31.8-19.83-1-10.3-8.28-14.9-18.33-12.24-14.63 3.87-24.42 11.86-27.78 28-4.53 21.8-3.6 43.53-2.49 65.36 1.36 26.85 9.17 52.61 13.89 78.9 2.22 12.38 3.17 25.1-1.34 37.26-1.46 3.94-4.1 8.12-7.4 10.58-10 7.42-22.1 2.86-23.9-9.4a110.27 110.27 0 0 1 -.57-30c3.9-29.74 9.37-59.37 8-89.47-1-22.07-1.74-44.34-8.78-65.68-3.29-10-8.3-18.25-18-23.72-5.32-3-9.91-7.88-13.77-12.76-4-5.1-8.66-8-15-7.87a52.19 52.19 0 0 0 -11 1c-14 3.26-23.37-3.18-30.62-14.24-2.06-3.41-3.85-7.19-6.43-10.41-15-18.79-35-29.58-58.16-34.93-1.69-.39-3.39-.76-5.08-1.13z"
    transform="translate(-27.76 -14.56)"
  />
</svg>
```

注意，这个图片没有任何模板执行的内容，只是一个 SVG 图片，那我们就可以拿来直接使用了，例如：

| 主题 | 图片                                                     |
| :--: | :------------------------------------------------------: |
| 明亮 | [light image](/images/drop.responsive.svg)               |
| 暗黑 | [dark image](/images/drop.responsive.svg#drop-dark-only) |

但是！这个方案有一个缺点，在 Safari 浏览器下，切换时会出现卡顿，不够丝滑。

唉，真实遗憾，所以还是继续使用方案一了。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/svg-dark-light/  

