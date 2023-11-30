# next 添加支持 pdf


> 最新的 next 主题已经更新了支持 PDF 功能，~~写法也和链接写法一样~~，可是我没有更新，我按 github 上那个 readme 试了一下好像不可以，所以用了另外一种插件的方法。

## iframe(推荐)

```xml
<iframe src="/posts/next-pdf/1.pdf" style="width: 100%;height: 800px;"></iframe>
```

## 模板自带

> 今天（2019.4.3）又看了一下，改了写法，写法和插件一样，我在我的模板里也更新了。（插件模板二选一即可，个人更喜欢插件）
> 但是如果安装插件后，也是优先模板的 pdf 脚本解析 pdf，所以在我的模板中把模板的 pdf 脚本先注释了。要启用去掉注释即可。

```js next\scripts\tags\pdf.swig
/*
'use strict';

function pdf(args) {
  return `<div class="pdf" target="${args[0]}" height="${args[1] || ''}"></div>`;
}

hexo.extend.tag.register('pdf', pdf, {ends: false});
*/
```

## pdf 插件 (推荐)

### 安装

```bash
npm install --save hexo-pdf
```

### 使用

```
{% pdf url %}
```

比如本文

```
{% pdf /posts/next-pdf/1.pdf %}
```

<iframe src="/posts/next-pdf/1.pdf" style="width: 100%;height: 800px;"></iframe>


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/next-pdf/  

