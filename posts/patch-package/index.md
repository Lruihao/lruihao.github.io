# 如何给 npm 包打补丁？


## 背景

今天鬼事神差想起去年写的一段 dirty hack 代码，当时是在 [vue-minder-editor-extended](https://github.com/Lruihao/vue-minder-editor-extended) 这个项目为了解决百度开源的 [@7polo/kityminder-core](https://github.com/fex-team/kityminder-core) npm 包的 bug，但是百度早在 17-18 年就停止更新了，我又不想自己 fork 一份源码然后重新发包，于是当时直接从 node_modules 里面复制出了打包后的源码进行修改，然后放到了项目中 `src/script/patch/kityminder.core.js`，并因修改了引入：

```diff
- require('@7polo/kityminder-core');
+ require('./script/patch/kityminder.core');
```

但是今天刷抖音看到类似的问题，回想起来这种做法真的是太蠢了，于是就想着有没有更好的办法，于是就一番搜索有了这篇文章。

## 安装 patch-package

```bash
npm i patch-package --save-dev
```

## 修改源码

在 `node_modules` 目录下找到需要打补丁的包，然后修改源码，比如我这里修改了 `node_modules/@7polo/kityminder-core/dist/kityminder.core.js`，修改后直接保存。

## 生成补丁

```bash
npx patch-package @7polo/kityminder-core
```

此时在根目录下会得到如下文件：

```bash
├── patches
│   └── @7polo-kityminder-core+1.4.53.patch
└── package.json
```

想看看这个补丁文件里面是什么东西，打开 `patches/@7polo-kityminder-core+1.4.53.patch`，内容如下：

```diff
diff --git a/node_modules/@7polo/kityminder-core/.DS_Store b/node_modules/@7polo/kityminder-core/.DS_Store
new file mode 100644
index 0000000..c88a062
Binary files /dev/null and b/node_modules/@7polo/kityminder-core/.DS_Store differ
diff --git a/node_modules/@7polo/kityminder-core/dist/kityminder.core.js b/node_modules/@7polo/kityminder-core/dist/kityminder.core.js
index 78dfbaf..32f276d 100644
--- a/node_modules/@7polo/kityminder-core/dist/kityminder.core.js
+++ b/node_modules/@7polo/kityminder-core/dist/kityminder.core.js
@@ -513,6 +513,8 @@ _p[9] = {
          *
          * @param {string} name 要执行的命令名称
          * @param {argument} args 要传递给命令的其它参数
+         * 
+         * @patch 2022.10.19 @Lruihao 修复缺少 afterExecCommand hook
          */
             execCommand: function(name) {
                 if (!name) return null;
@@ -547,6 +549,8 @@ _p[9] = {
                         this._interactChange();
                     }
                 }
+                // Fix: afterExecCommand hook
+                this._fire(new MinderEvent("afterExecCommand", eventParams, false));
                 return result === undefined ? null : result;
             }
         });
@@ -1254,6 +1258,22 @@ _p[13] = {
                 });
                 return this;
             },
+            /**
+             * @patch 2022.10.26 @Lruihao 修复缺少 once 侦听指定事件一次
+             * @param {String} name 
+             * @param {Function} callback 
+             */
+            once: function(name, callback) {
+                var km = this;
+                name.split(/\s+/).forEach(function(n) {
+                    const tmpCallback = (e) => {
+                      callback(e);
+                      km.off(n.toLowerCase(), tmpCallback)
+                    };
+                    km._listen(n.toLowerCase(), tmpCallback);
+                });
+                return this;
+            },
             off: function(name, callback) {
                 var types = name.split(/\s+/);
                 var i, j, callbacks, removeIndex;
```

发现其实就是一个 diff 文件，这个文件里面记录了修改的内容，以及修改的位置，这样就可以在安装依赖的时候自动执行补丁了。

## 使用补丁

在 `package.json` 中添加如下内容：

```json
{
  "scripts": {
    "postinstall": "patch-package"
  }
}
```

## 提交补丁

```bash
git add .
git commit -m "Chore: patch @7polo/kityminder-core"
git push
```

## 测试

执行一次完整的依赖安装 => 构建发布，一切符合预期，大功告成~


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/patch-package/  

