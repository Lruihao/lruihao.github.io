# Electron 踩坑总结


总结一下最近 electron 开发遇到的问题和一些重要知识点。

<!--more-->

## 简介

如果你可以建一个网站，你就可以建一个桌面应用程序。 [Electron](https://www.electronjs.org/) 是一个使用 JavaScript, HTML 和 CSS 等 Web 技术创建原生程序的开源框架，它负责比较难搞的部分，你只需把精力放在你的应用的核心上即可。

## 知识点

### 进程

electron 由两种进程组成，包括`主进程`和 0 个或 n 个`渲染进程`。

1. `主进程`：承担应用的生命周期（包括启动，退出，准备，正在切换到后台，正在切换到前台等，还负责与原生操作系统 API 通信）
2. `渲染进程`：做 web 页面的 ui，渲染进程之间独立在各自的单线程，渲染进程之间相互隔离，不能直接访问操作系统，需要通信到主线程，在通过主线程操作访问操作形态，一个 BrowserWindow 实例即为一个渲染进程

### 技术栈

electron 整合了 Node 和浏览器的所有能力，可以随意发挥这些技术栈的特点。由于固定浏览器内核，可以无需考虑兼容性地使用 html/js/css 新特性。

### 安装

安装 electron 时，可能因为网络问题导致下载失败，需要使用镜像仓库来下载。

```bash
# 设置 electron 镜像仓库
# https://registry.npmmirror.com/-/binary/electron
# 13.1.7 版本 下载链接可能会拼错导致 404，要设置成 https://registry.npmmirror.com/-/binary/electron/v
npm config set electron_mirror=https://npmmirror.com/mirrors/electron/
```

M1 Mac 安装较低版本 electron 时可能会报错，`Failed to find Electron v xxx for darwin-arm64`，因为这些版本的 electron 不支持 darwin-arm64 架构。Apple 针对未适配的 X64 应用提供了 Rosetta2 转换器，安装 darwin-x64 版本的 electron 在 Intel 模式下运行即可，[参考](https://www.jianshu.com/p/b1b3577fd373)。

### remote

> 不要频繁使用 remote, 更多应该手动进行和主进程之间的通信。

使用时需在窗口创建时设置 `webPreferences.enableRemoteModule` 为 `true`。

旧版本的 `electron.remote` 已经弃用，应该使用依赖 `electron/remote` 代替。

使用了旧版本的 remote 时会有控制台警告信息：

```plain
(electron) The remote module is deprecated. Use https://github.com/electron/remote instead.
```

- 获取当前窗口：`remote.getCurrentWindow()`

## 问题点

### 打开外部浏览器

electron 的 `shell` 模块，可以使用 `shell.openExternal(url)` 在默认浏览器打开链接。

### 防抖与节流

防抖：短期内大量触发事件时，只执行最后一次。

```js
function debounce(fn) {
  let timer = null;
  return function () {
    clearTimeOut(timer);
    timer = setTimeOut(() => {
      fn.applay(this, arguments);
    }, 300);
  };
}
```

节流：短期内大量触发事件时，只执行第一次。

```js
function throttle(fn) {
  let timer = null;
  return function () {
    if (timer) return;
    timer = setTimeOut(() => {
      fn.applay(this, arguments);
      timer = null;
    }, 300);
  };
}
```

### devTools

初始化窗口时设置 `webPreferences.devTools` 为 `true`，然后通过 `mainWindow.webContents.openDevTools()` 打开开发者工具。

如果只在开发环境启用开发者工具，则需要设置 `webPreferences.devTools` 为 `process.env.NODE_ENV === 'development'`

### 启动白屏

在创建窗口时设置 `show: false`，在 `ready-to-show` 事件之后执行 `mainWindow.show()`，

可见官方文档 [优雅地显示窗口](https://www.electronjs.org/zh/docs/latest/api/browser-window#优雅地显示窗口)。

#### 启动前 loading

额外创建一个 loading 窗口，该窗口可设置为透明只包含 loading 图标和文字，在 `mainWindow.show()` 后关闭。

#### 启动后 loading

如果使用了 Vue 框架，在 Vue 初始化之前窗口虽然出现了，但是内容时空白的，可以在 Vue 实例 #app 里写一个 loading, Vue 加载完后会覆盖掉。

```html
<div id="app">
  <!-- Display the loading icon and text until Vue initialization is complete -->
  <style type="text/css">
    html,
    body {
      height: 100%;
      margin: 0;
    }
    body {
      display: flex;
    }
    #app {
      margin: auto;
      display: flex;
      align-items: center;
    }
    @media (prefers-color-scheme: dark) {
      body {
        color: #fff;
        background-color: #202124;
      }
    }
  </style>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style="margin:auto;background:0 0"
    width="60"
    height="60"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    display="block"
  >
    <circle
      cx="50"
      cy="50"
      r="20"
      stroke-width="4"
      stroke="#a5a5a5"
      stroke-dasharray="31.416 31.416"
      fill="none"
      stroke-linecap="round"
      transform="rotate(67.21 50 50)"
    >
      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50" />
    </circle>
  </svg>
  <span>加载中 ...</span>
</div>
```

### 阻止窗口关闭

可以在关闭前一些事件里做拦截，比如：`onbeforeunload` 等，详见 [实例事件](https://www.electronjs.org/zh/docs/latest/api/browser-window#实例事件)。

### 手动关闭窗口

当自定义关闭时，使用 `mainWindow.destroy()` 来关闭窗口，因为使用 `mainWindow.close()` 时，windows 系统打开开发者工具时会出现无法关闭窗口的情况。

### 全局快捷键

当 electron 版本较低时，比如 `13.1.7`，会出现在 mac 系统上复制粘贴等常用快捷键失效的问题。可通过设置菜单并绑定快捷键的方式解决。

```js
const main = [
  {
    label: '',
    submenu: [
      { label: '关于', role: 'about' },
      { label: '关闭', role: 'close' },
      { label: '退出', role: 'quit' }
    ]
  },
  {
    label: '编辑',
    submenu: [
      { label: '撤销', role: 'undo' },
      { label: '恢复', role: 'redo' },
      { type: 'separator' },
      { label: '剪切', role: 'cut' },
      { label: '复制', role: 'copy' },
      { label: '粘贴', role: 'paste' },
      { type: 'separator' },
      { label: '全选', role: 'selectAll' }
    ]
  }
];
const dev = [
  {
    label: '开发者',
    submenu: [
      { label: '刷新', role: 'reload' },
      { label: '强制刷新', role: 'forcereload' },
      { type: 'separator' },
      { label: '开发者工具', role: 'toggledevtools' }
    ]
  }
];

if (process.env.NODE_ENV === 'development') {
  main.push(...dev);
}

export default main;
```

```js
import memuConfig from './menu';
import { Menu } from 'electron';

if (process.platform === 'darwin') {
  const menu = Menu.buildFromTemplate(memuConfig);
  Menu.setApplicationMenu(menu);
}
```

### electron-builder

下载时，可能因为网络问题导致下载失败，可设置 GitHub 下载镜像。

```bash
# GitHub 仓库下载地址前缀镜像
npm config set disturl=https://registry.npmmirror.com/-/binary/
```

或者去 GitHub 手动下载，然后解压到缓存目录：

- macOS: `~/Library/Caches/electron-builder/`
- linux: `~/.cache/electron-builder/`
- windows: `%LOCALAPPDATA%\electron-builder\cache\`

mac 上缓存目录如下，其他可 [参考](https://www.cnblogs.com/xueyoucd/p/8006610.html)

```plain
▸ nsis/
  ▸ nsis-resources-3.4.1/
  ▸ nsis-3.0.4.1/
▸ winCodeSign/
  ▸ winCodeSign-2.6.0/
▸ wine/
  ▸ wine-4.0.1-mac/
```

#### windows 打包

windows 系统打包配置，当没有配置签名时，`sign` 字段应删除或者配置为 `null`，否则可能导致打包时报错。

```json
{
  "win": {
    "icon": "static/icons/icon.ico",
    "verifyUpdateCodeSignature": false,
    "target": "nsis",
    "sign": null
  }
}
```

注：win11 打包在 win10 上可能运行不了，最好使用 win10 打包或者 mac 打包指定系统和位数。

#### macOS 打包

问题：mac 升级之后 electron 打包报错 `Exit code: ENOENT. spawn /usr/bin/python ENOENT`

解决：网上搜到的下载 python 2.7 是治标不治本，正确做法是升级 `electron-builder` 到 `23.0.2` 或更高版本，参考 [electron-builder#6726](https://github.com/electron-userland/electron-builder/issues/6726)

参考链接

- [Electron-Mac 应用的签名步骤说明](https://www.jianshu.com/p/2e6811ad9f68)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/electron-summary/  

