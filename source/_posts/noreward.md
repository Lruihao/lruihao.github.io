---
title: 设置单篇文章不打赏、首页不显示文章
date: 2018-11-06 13:06:29
tags:
- hexo
categories: hexo
password:
abstract:
message:
description:
top:
author:
permalink:
noreward: true
---

## 不打赏
> 出于一些特殊的原因，可能会希望hexo博客某篇单独的文章不打赏，其他文章还是可以打赏的。我是这样做的。
{% note %}
原理：

因为默认的变量值为false,!post.noreward就是true了，所以其他的已经写了的文章而仍然想保留打赏的，就不需要修改了，省去了麻烦，只需要把要改的改成true，取反后就是false,就不会显示了打赏模块了。
{% endnote%}
### 修改post模板
打开以下路径文件
```
H:\hexo\themes\hexo-theme-next\layout\_macro\post.swig
```
查找reward关键词，大概在378行，并添加内容。

![图片](:category/noreward/1.png)

### 文章内使用
在头部加上关键词`noreward: true`，比如本文头部。

```
---
title: 设置单篇文章不打赏
date: 2018-11-06 13:06:29
tags:
- hexo博客
categories: hexo博客
noreward: true
notshow: false
---
```

### 其他
**本地调试时修改完后记得重启hexo,只要是修改了布局文件就要重新`hexo s`,修改文章内容等就可以不需要重启，效果如本文**
ps: 小声bb,如果有打赏的冲动换一篇文章就是了，嘘！

#### 其他
顺手改了一下tags的位置，知道tags那一块移到喜欢的位置就好了。

## 首页不显示文章
同理可得找到主题布局文件layout/index.swig

找到一个for循环，在for循环里面加一个判断就行了。
```
    {% for post in page.posts %}
    	{% if !post.notshow %}
    		{{ post_template.render(post, true) }}
    	{% endif %}
    {% endfor %}
```
使用同理，`notshow: true`
在归档可以看到文章。