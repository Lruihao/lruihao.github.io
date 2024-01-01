# Node.js &#43; GitHub Actions 自动刷新 CDN


{{&lt; admonition question &gt;}}
腾讯云云函数从 2022 年 6 月 1 日开始收费了，差不多每个月 12 块，对于可能几个月都用不上一次云函数刷新缓存的人来说，有点太贵了。
使用 Node.js 和 GitHub Actions 刷新 CDN 的方式，可以节省不少钱。
{{&lt; /admonition &gt;}}

&lt;!--more--&gt;

## 安装依赖

```bash
npm install qcloud-cdn-node-sdk
```

## 编写脚本

```bash
vim .scripts/qcloudcdn.js
```

```javascript
/**
 * Refresh Qcloud CDN cache
 * @command `node qcloudcdn.js $SECRET_ID $SECRET_KEY`
 */
const qcloudSDK = require(&#39;qcloud-cdn-node-sdk&#39;);

// Get the config from https://console.qcloud.com/capi
qcloudSDK.config({
  secretId: process?.argv[2],
  secretKey: process?.argv[3]
});

qcloudSDK.request(
  &#39;RefreshCdnDir&#39;,
  {
    // See https://cloud.tencent.com/document/api/228/3947
    &#39;dirs.0&#39;: &#39;https://lruihao.cn/&#39;
  },
  (res) =&gt; {
    res.code &amp;&amp; console.log(res);
  }
);
```

## 增加快捷指令

打开 `package.json` 增加 `scripts`:

```json
{
  &#34;scripts&#34;: {
    &#34;qcloudcdn&#34;: &#34;node .scripts/qcloudcdn.js $SECRET_ID $SECRET_KEY&#34;
  }
}
```

运行方式：

```bash
SECRET_ID=&lt;secretId&gt; SECRET_KEY=&lt;secretKey&gt; npm run qcloudcdn
```

{{&lt; details &#34;Mac OS 环境变量配置（可选）&#34; &gt;}}

```bash
vim ~/.bash_profile
```

```bash
# Qcloud secret key-value
export SECRET_ID=&lt;secretId&gt;
export SECRET_KEY=&lt;secretKey&gt;
```

```bash
source ~/.bash_profile
```

然后，在本地可简化指令为 `npm run qcloudcdn` 或者 `yarn qcloudcdn`。  
等同于 `SECRET_ID=$SECRET_ID SECRET_KEY=$SECRET_KEY npm run qcloudcdn`
{{&lt; /details &gt;}}

## 配置 GitHub Actions

在原有 GitHub Actions 中部署后增加一个步骤：

```yaml
- name: Refresh Qcloud CDN cache
  env:
    SECRET_ID: ${{ secrets.SECRET_ID }}
    SECRET_KEY: ${{ secrets.SECRET_KEY }}
  run: npm run qcloudcdn
```

在仓库 Settings &gt; Secrets &gt; Actions 中增加两个 Secret: `SECRET_ID` 和 `SECRET_KEY`，原来有配置过的就不用了，比如，我原来的叫 `COS_SECRET_ID` 和 `COS_SECRET_ID`，那修改上面配置 env 中的变量名即可。

最后上传代码，以后更新仓库时就会自动刷新 CDN 缓存了。

## 参考资料

- [Qcloud_CDN_API/nodejs](https://github.com/QCloudCDN/CDN_API_DEMO/tree/master/Qcloud_CDN_API/nodejs)

&gt; 本方案使用的旧的 API 请求方式，如果失效，可以参考新的 API，见 [SDK 中心](https://cloud.tencent.com/document/sdk)。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/qcloudcdn/  

