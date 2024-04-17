# 利用 Vercel 反代 Gravatar 实现镜像加速


在开发和部署网站时，经常会遇到加载外部资源较慢的问题。其中之一就是加载 Gravatar 头像图片时可能会受到网络延迟的影响。为了解决这个问题，我们可以利用 Vercel 平台的反向代理功能来实现镜像加速。

&lt;!--more--&gt;

## 思路

1. 解析请求的 URL，并将其 host 修改为我们要代理的目标域名（这里是 `www.gravatar.com`）。
2. 获取原始请求的方法、头部信息，并创建一个新的请求头部对象。
3. 将新请求头部对象中的 Host 字段设置为目标域名，并将 Referer 字段设置为原始请求的 URL。
4. 使用修改后的 URL、方法和头部信息发送请求到目标域名。
5. 获取原始响应的状态码、头部信息和响应体，并克隆原始响应对象。
6. 检查请求的 Referer 来源域名是否合法，如果不合法则返回一个 403 Forbidden 的响应。
7. 设置新的响应头部信息，包括允许的请求方法、请求头部和缓存控制策略。
8. 构造最终的响应对象，其中响应体为原始响应的内容，状态码和头部信息为修改后的值。
9. 返回最终的响应对象。

安装上面的思路，理论上我们可以反代任何一个网站，并且支持设置 CORS 策略。GitHub 上也有类似的项目，比如 &lt;https://github.com/gaowanlu/google&gt;.

&gt; 当然，网络不是非法之地，不要滥用这个功能反代一些不合法的网站哦。

## 实现

&lt;img alt=&#34;Lruihao gravatar&#34; src=&#34;https://gravatar.lruihao.cn/avatar/fee47a2f4f2cc71f99a02b0a73ecfee0?s=128&#34; /&gt;

⬆️ `https://gravatar.lruihao.cn/avatar/fee47a2f4f2cc71f99a02b0a73ecfee0?s=64`

实现 API 代码：

```js {title=&#34;api/gravatar.js&#34;}
const allowedReferrers = [
  &#34;lruihao.cn&#34;,
  &#34;gravatar-x.vercel.app&#34;,
  &#34;-lrh-dev.vercel.app&#34;,
  &#34;-cell-x.vercel.app&#34;,
  &#34;localhost&#34;,
];

const upstream = &#34;www.gravatar.com&#34;;

/**
 * whether the hostname is allowed
 * @param {String} hostname 
 * @returns 
 */
function isAllowedHost(hostname) {
  const regExp = new RegExp(allowedReferrers.join(&#34;|&#34;), &#34;g&#34;);
  // if hostname matches allowed referrers
  if (!hostname || regExp.test(hostname)) {
    return true
  }
  for (const referrer of allowedReferrers) {
    // if hostname ends with allowed referrers
    if (hostname.endsWith(referrer)) {
      return true
    }
  }
  return false
}

async function fetchAndApply(request) {
  let response = null;
  let url = new URL(request.url);

  url.host = upstream;
  let method = request.method;
  let request_headers = request.headers;
  let new_request_headers = new Headers(request_headers);
  new_request_headers.set(&#34;Host&#34;, upstream);
  new_request_headers.set(&#34;Referer&#34;, url.href);
  let original_response = await fetch(url.href, {
    method: method,
    headers: new_request_headers,
  });

  let original_response_clone = original_response.clone();
  let original_text = null;
  let response_headers = original_response.headers;
  let new_response_headers = new Headers(response_headers);
  let status = original_response.status;

  const hostname = (() =&gt; {
    try {
      return new URL(request.headers.get(&#34;Referer&#34;)).hostname;
    } catch (e) {
      return &#34;&#34;;
    }
  })();
  if (!isAllowedHost(hostname)) {
    return new Response(`403 Forbidden: ${hostname}`, {
      headers: { &#34;Content-Type&#34;: &#34;text/html&#34; },
      status: 403,
      statusText: &#34;Forbidden&#34;,
    });
  }

  // new_response_headers.set(&#34;access-control-allow-origin&#34;, &#34;https://lruihao.cn&#34;);
  new_response_headers.set(&#34;Access-Control-Allow-Methods&#34;, &#34;GET, POST, OPTIONS&#34;);
  new_response_headers.set(&#34;Access-Control-Allow-Headers&#34;, &#34;Content-Type&#34;);
  new_response_headers.set(
    &#34;Cache-Control&#34;,
    &#34;max-age=600, s-maxage=2592000, stale-while-revalidate&#34;
  );
  new_response_headers.delete(&#34;link&#34;);

  original_text = original_response_clone.body;

  response = new Response(original_text, {
    status,
    headers: new_response_headers,
  });

  return response;
}

export const config = {
  runtime: &#34;experimental-edge&#34;,
};

export default function (req) {
  return fetchAndApply(req);
}
```

配置 `vercel.json` 文件：

```json {title=&#34;vercel.json&#34;}
{
  &#34;rewrites&#34;: [
    { &#34;source&#34;: &#34;/avatar/(.*)&#34;, &#34;destination&#34;: &#34;api/gravatar&#34; }
  ]
}
```

完整代码可以在 [GitHub](https://github.com/Lruihao/vercel-gravatar) 上查看。

最后部署到 Vercel 平台即可。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/3fd72ec/  

