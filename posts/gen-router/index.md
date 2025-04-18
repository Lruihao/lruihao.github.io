# 使用 Node.js 自动创建 Vue 的路由


最近在写一个 Vue 插件，需要在项目中创建一些测试页面，由于都是些静态路由，就想到之前看到过的一个项目就是用 Node.js 来自动生成路由的，于是就借鉴过来改了一下。

<!--more-->

## 源码

> Gist: <https://gist.github.com/Lruihao/d8f2984525dc9e78dd6a49e15f49cf38>

```js {title="gen-router.js"}
const fs = require('fs')
const os = require('os')

const vueDir = './src/views/'
const routerFile = './src/router.js'

fs.readdir(vueDir, function (err, files) {
  if (err) {
    console.error('❌ Could not list the directory.', err)
    return
  }
  const routes = []
  for (const filename of files) {
    if (filename.indexOf('.') < 0) {
      continue
    }
    const [name, ext] = filename.split('.')
    if (ext !== 'vue') {
      continue
    }
    const routeName = name.replace(/-([a-z])/g, (_, match) => match.toUpperCase())
    let routeDescription = ''
    const contentFull = fs.readFileSync(`${vueDir}${filename}`, 'utf-8')
    // get route description from first line comment
    const match = /<!--\s*(.*)\s*-->/g.exec(contentFull.split(os.EOL)[0])
    if (match) {
      routeDescription = match[1].trim()
    }
    routes.push(`  {
    path: '/${name === 'home' ? '' : name}',
    name: '${routeName}',${routeDescription ? `\n    meta: { description: '${routeDescription}' },` : ''}
    component: () => import(/* webpackChunkName: "${routeName}" */ '@/views/${filename}'),
  },`)
  }
  const result =
`// This file is automatically generated by gen-router.js, please do not modify it manually！
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
${routes.join(os.EOL)}
]

const router = new VueRouter({
  mode: 'hash',
  routes,
})

export default router
`
  fs.writeFile(routerFile, result, 'utf-8', (err) => {
    if (err) throw err
    console.log(`✅ Router generated successfully in ${routerFile}`)
  })
})
```

生成效果如下：

```js {title="router.js"}
// This file is automatically generated by gen-router.js, please do not modify it manually！
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { description: 'Home' },
    component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes,
})

export default router
```

## 参考

[sunzsh/vue-el-demo](https://github.com/sunzsh/vue-el-demo/blob/f5e9a2a9934c7040f4fa72663eb8c24b1e3b20c1/gen-router.js)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/gen-router/  

