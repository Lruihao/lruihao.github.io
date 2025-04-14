# 利用 Vercel 反代 Gravatar 实现镜像加速


在开发和部署网站时，经常会遇到加载外部资源较慢的问题。其中之一就是加载 Gravatar 头像图片时可能会受到网络延迟的影响。为了解决这个问题，我们可以利用 Vercel 平台的反向代理功能来实现镜像加速。

<!--more-->

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

安装上面的思路，理论上我们可以反代任何一个网站，并且支持设置 CORS 策略。GitHub 上也有类似的项目，比如 <https://github.com/gaowanlu/google>.

> 当然，网络不是非法之地，不要滥用这个功能反代一些不合法的网站哦。

## 实现

<img alt="Lruihao gravatar" src="https://gravatar.lruihao.cn/avatar/fee47a2f4f2cc71f99a02b0a73ecfee0?s=128" />

⬆️ `https://gravatar.lruihao.cn/avatar/fee47a2f4f2cc71f99a02b0a73ecfee0?s=64`

实现 API 代码：

```js {title="api/gravatar.js"}
const allowedReferrers = [
  "lruihao.cn",
  "gravatar-x.vercel.app",
  "-lrh-dev.vercel.app",
  "-cell-x.vercel.app",
  "localhost",
];

const upstream = "www.gravatar.com";

/**
 * whether the hostname is allowed
 * @param {String} hostname 
 * @returns 
 */
function isAllowedHost(hostname) {
  const regExp = new RegExp(allowedReferrers.join("|"), "g");
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
  new_request_headers.set("Host", upstream);
  new_request_headers.set("Referer", url.href);
  let original_response = await fetch(url.href, {
    method: method,
    headers: new_request_headers,
  });

  let original_response_clone = original_response.clone();
  let original_text = null;
  let response_headers = original_response.headers;
  let new_response_headers = new Headers(response_headers);
  let status = original_response.status;

  const hostname = (() => {
    try {
      return new URL(request.headers.get("Referer")).hostname;
    } catch (e) {
      return "";
    }
  })();
  if (!isAllowedHost(hostname)) {
    return new Response(`403 Forbidden: ${hostname}`, {
      headers: { "Content-Type": "text/html" },
      status: 403,
      statusText: "Forbidden",
    });
  }

  // new_response_headers.set("access-control-allow-origin", "https://lruihao.cn");
  new_response_headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  new_response_headers.set("Access-Control-Allow-Headers", "Content-Type");
  new_response_headers.set(
    "Cache-Control",
    "max-age=600, s-maxage=2592000, stale-while-revalidate"
  );
  new_response_headers.delete("link");

  original_text = original_response_clone.body;

  response = new Response(original_text, {
    status,
    headers: new_response_headers,
  });

  return response;
}

export const config = {
  runtime: "experimental-edge",
};

export default function (req) {
  return fetchAndApply(req);
}
```

配置 `vercel.json` 文件：

```json {title="vercel.json"}
{
  "rewrites": [
    { "source": "/avatar/(.*)", "destination": "api/gravatar" }
  ]
}
```

最后部署到 Vercel 平台即可。

## 源码

{{< gh-repo-card-container >}}
  {{< gh-repo-card repo="Lruihao/vercel-gravatar" >}}
{{< /gh-repo-card-container >}}


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/vercel-gravatar/  

