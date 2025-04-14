# 如何实现 VSCode 编辑器窗口边界拖拽类似功能


边界拖拽调整窗口大小功能是一个很常见的功能，比如浏览器、编辑器等很多场景都有应用，这种功能不仅提高了用户体验，也增强了应用的灵活性。

<!--more-->

## 效果演示

[vue-el-demo/#/aside-toggle-drag](https://lruihao.github.io/vue-el-demo/#/aside-toggle-drag)

## 实现代码

[@/components/AsideToggler](https://github.com/Lruihao/vue-el-demo/blob/main/src/components/AsideToggler/index.vue)

## 实现思路

怎么说呢，写这篇文章就是想记录一下思路，本来想画个图说明一下的，但是懒得画了，随便说几句吧。

实现边界拖拽调整窗口大小功能，主要是通过鼠标按下、移动、松开事件来实现的，主要思路如下：

1. 在 `mousedown` 事件中，我们记录下鼠标的初始位置和元素的初始宽度。
2. 在 `mousemove` 事件中，我们根据鼠标的新位置计算出新的宽度，并使用 `clamp()` 函数将其限制在最小宽度和最大宽度之间。
3. 同时，我们还需要根据鼠标位置的变化，动态更新鼠标样式，以提示用户当前的拖拽状态。
4. 在 `mouseup` 事件中，我们清除之前设置的事件监听器，并恢复鼠标样式。

实现过程中，有两个比较巧妙的点：

- 计算宽度的时候，没有使用 JS 计算，而是直接使用了 CSS 的 `clamp()` 函数，一目了然。
- 为了鼠标移动到可拖拽边界时显示一条蓝色的线，但是又不想改变元素的宽度，所以 `resize-bar` 元素的使用了 `position: absolute`，并且设置了 `translateX(-50%)` 来让其居中显示。当鼠标移入时，通过线性渐变的背景色巧妙地来实现蓝色线条的效果。

正是因为第二点的实现方式，使得在边界线左右两侧都能拖拽，这一点是优于 VSCode 的，因为 VSCode 只能在左侧拖拽 😂。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/aside-toggle-drag/  

