# JS 实现全屏和退出全屏


## 背景

在 Web 开发中，全屏模式可以提供更沉浸式的体验，特别适用于视频播放、游戏展示和演示等场景。通过 JavaScript 的 Fullscreen API，我们可以以编程方式控制元素的全屏状态。

Fullscreen API 是一组用于控制全屏显示的方法和属性，它们允许我们将网页内容以全屏的方式展示给用户，并提供了相应的事件来监听全屏模式的变化。

在本文中，我们将介绍如何判断浏览器是否支持全屏功能，如何实现进入全屏和退出全屏的功能，以及如何获取当前全屏元素和监听全屏模式的变化。

> 注意：Fullscreen API 在不同浏览器之间可能存在差异，请在使用时进行兼容性测试和处理。

## 全屏是否可用

在使用 Fullscreen API 之前，我们需要先判断当前浏览器是否支持全屏功能。可以通过 `document.fullscreenEnabled` 属性来检查。

以下是一个示例：

```javascript
if (document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled) {
  console.log('浏览器支持全屏功能');
} else {
  console.log('浏览器不支持全屏功能');
}
```

详细的 API 说明可以参考 [Fullscreen API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)。

## 实现全屏

要实现全屏，我们可以使用 `requestFullscreen()` 方法。该方法可用于 DOM 元素，使其进入全屏模式。

以下是一个示例：

```javascript
const element = document.getElementById('my-element');
if (element.requestFullscreen) {
  element.requestFullscreen();
} else if (element.mozRequestFullScreen) { // Firefox
  element.mozRequestFullScreen();
} else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
  element.webkitRequestFullscreen();
} else if (element.msRequestFullscreen) { // Internet Explorer and Edge
  element.msRequestFullscreen();
}
```

详细的 API 说明可以参考 [Element.requestFullscreen() - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen)。

## 退出全屏

当我们需要退出全屏时，可以使用 `exitFullscreen()` 方法。该方法可用于当前处于全屏状态的元素。

以下是一个示例：

```javascript
if (document.exitFullscreen) {
  document.exitFullscreen();
} else if (document.mozCancelFullScreen) { // Firefox
  document.mozCancelFullScreen();
} else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
  document.webkitExitFullscreen();
} else if (document.msExitFullscreen) { // Internet Explorer and Edge
  document.msExitFullscreen();
}
```

详细的 API 说明可以参考 [Document.exitFullscreen() - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen)。

## 获取全屏元素

在全屏模式下，我们可能需要获取当前处于全屏状态的元素。可以使用`document.fullscreenElement`属性来获取。

以下是一个示例：

```javascript
const fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;

if (fullscreenElement) {
  console.log('当前全屏元素：', fullscreenElement);
} else {
  console.log('没有全屏元素');
}
```

详细的 API 说明可以参考 [Document.fullscreenElement - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenElement)。

## 监听全屏模式变化

如果我们希望在全屏模式发生变化时得到通知，可以使用 Fullscreen API 提供的事件。

以下是一个示例：

```javascript
document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('mozfullscreenchange', handleFullscreenChange); // Firefox
document.addEventListener('webkitfullscreenchange', handleFullscreenChange); // Chrome, Safari and Opera
document.addEventListener('MSFullscreenChange', handleFullscreenChange); // Internet Explorer and Edge

function handleFullscreenChange() {
  if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
    console.log('进入全屏模式');
  } else {
    console.log('退出全屏模式');
  }
}
```

通过添加相应的事件监听器，可以在全屏模式变化时执行自定义的处理函数。

## 相关插件

了解以上 API 后本来已经准备开始写插件了，不过秉承不重复造轮子的思想，找到了以下两个库，基本满足开发需求了。

- [screenfull](https://github.com/sindresorhus/screenfull)
- [vue-fullscreen](https://github.com/mirari/vue-fullscreen)

## 小插曲

`document.fullscreen`、`document.fullscreenElement`、`document.fullscreenEnabled` 的 MDN 文档中文翻译已过时，然后顺手提了一个 PR [mdn/translated-content#15859](https://github.com/mdn/translated-content/pull/15859)

## 参考链接

- [Fullscreen API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
- [Element.requestFullscreen() - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen)
- [Document.exitFullscreen() - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen)
- [Document.fullscreenElement - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenElement)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/js-fullscreen/  

