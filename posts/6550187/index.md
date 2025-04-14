# Git Submodule: Already Exists in the Index


Git 报错 "git submodule: already exists in the index" 的解决方法。

<!--more-->

## 问题

在 [hugo-fixit/docs](https://github.com/hugo-fixit/docs.git)，里我增通过软连接的方式引入了 [hugo-fixit/FixIt](https://github.com/hugo-fixit/FixIt.git)，位于 `themes/FixIt` 目录下。

然后为了把主题开发和主题文档分离（[#404](https://github.com/hugo-fixit/FixIt/issues/404)），我想通过 `git submodule` 的方式引入主题，于是我先把 `themes/FixIt` 目录删除，然后执行：

```bash
git submodule add https://github.com/hugo-fixit/FixIt.git themes/FixIt
```

结果报错：

```bash
fatal: 'themes/FixIt' already exists in the index
```

## 解决方法

```bash
git rm -r --cached themes/FixIt
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/6550187/  

