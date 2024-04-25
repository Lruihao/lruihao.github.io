# 拖拽式仪表盘 - 模板使用


本文将通过一个简单的例子，介绍如何使用仪表盘模板。

&lt;!--more--&gt;

Talk is cheap. Show you the code.

## 代码

```vue
&lt;!-- 首页 dashboard 页面布局 --&gt;
&lt;script&gt;
import Dashboard, { registerComponents } from &#39;@/components/Dashboard&#39;

// 加载测试跟踪 widgets 目录下所有组件
const requireTrackingComponents = require.context(&#39;@/views/tracking/dashboard/widgets&#39;, true, /\.vue$/)
const trackingComponents = registerComponents(requireTrackingComponents)

// 加载接口测试 widgets 目录下所有组件
const requireInterfaceComponents = require.context(&#39;@/views/interface/dashboard/widgets&#39;, true, /\.vue$/)
const interfaceComponents = registerComponents(requireInterfaceComponents)

// 加载 WebUI 测试 widgets 目录下所有组件
const requireWebUIComponents = require.context(&#39;@/views/webui/dashboard/widgets&#39;, true, /\.vue$/)
const webuiComponents = registerComponents(requireWebUIComponents)

// 加载 App 测试 widgets 目录下所有组件
const requireAppComponents = require.context(&#39;@/views/app/dashboard/widgets&#39;, true, /\.vue$/)
const appComponents = registerComponents(requireAppComponents)

export default {
  name: &#39;HomeDashboard&#39;,
  extends: Dashboard,
  data() {
    return {
      // 设置默认布局
      defaultLayout: [
        { i: 1, component: &#39;TrackingCountsWidget&#39;, name: &#39;总数统计&#39;, x: 0, y: 0, w: 6, h: 2, params: { type: &#39;product&#39; }},
        { i: 2, component: &#39;TrackingCountsWidget&#39;, name: &#39;总数统计&#39;, x: 6, y: 0, w: 6, h: 2, params: { type: &#39;case&#39; }},
        { i: 3, component: &#39;TrackingCountsWidget&#39;, name: &#39;总数统计&#39;, x: 12, y: 0, w: 6, h: 2, params: { type: &#39;testplan&#39; }},
        { i: 4, component: &#39;TrackingCountsWidget&#39;, name: &#39;总数统计&#39;, x: 18, y: 0, w: 6, h: 2, params: { type: &#39;report&#39; }},
        { i: 5, component: &#39;InterfaceCountsWidget&#39;, name: &#39;总数统计&#39;, x: 0, y: 2, w: 6, h: 2, params: { type: &#39;task&#39; }},
        { i: 6, component: &#39;InterfaceCountsWidget&#39;, name: &#39;总数统计&#39;, x: 6, y: 2, w: 6, h: 2, params: { type: &#39;api&#39; }},
        { i: 7, component: &#39;InterfaceCountsWidget&#39;, name: &#39;总数统计&#39;, x: 12, y: 2, w: 6, h: 2, params: { type: &#39;case&#39; }},
        { i: 8, component: &#39;InterfaceCountsWidget&#39;, name: &#39;总数统计&#39;, x: 18, y: 2, w: 6, h: 2, params: { type: &#39;device&#39; }},
        { i: 9, component: &#39;MyTestplan&#39;, name: &#39;我的测试计划&#39;, x: 0, y: 4, w: 12, h: 6, minW: 8, minH: 6, maxW: 24, maxH: 6, isResizable: true, params: { type: &#39;myAttend&#39; }},
        { i: 10, component: &#39;MyInterfaceTask&#39;, name: &#39;我创建的测试&#39;, x: 12, y: 4, w: 12, h: 6, minW: 12, minH: 6, maxW: 24, maxH: 6, isResizable: true },
      ],
    }
  },
  created() {
    // 加载组件列表
    this.addComponents(&#39;测试跟踪&#39;, trackingComponents)
    this.addComponents(&#39;接口测试&#39;, interfaceComponents)
    this.addComponents(&#39;WebUI 测试&#39;, webuiComponents)
    this.addComponents(&#39;App 测试&#39;, appComponents)

    // 设置权限
    this.hasEditPermission = this.checkPermission([&#39;admin&#39;]) || !this.dashboard.isDefault
  },
}
&lt;/script&gt;
```

## 效果

![工作台仪表盘动画](images/dashboard-demo.gif &#34;画质感人，将就看吧～&#34;)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/dashborad-template-usage/  

