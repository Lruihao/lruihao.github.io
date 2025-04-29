# API proxies powered by Vercel.

# [Vercel API Proxy](https://github.com/Lruihao/vercel-proxy)

API proxies powered by Vercel.

## Domains

- <https://api.lruihao.cn>
- <https://cell-api.vercel.app>

## Usages

Go to the [Vercel API Proxy](https://cell-api.vercel.app) and select the API you want to use.

- `/gravatar/avatar/(.*)` - Gravatar API.
- `/google/(.*)` - Google API.

## Examples

> Get the avatar of the email `fee47a2f4f2cc71f99a02b0a73ecfee0` by Gravatar API.

```http
GET /gravatar/avatar/fee47a2f4f2cc71f99a02b0a73ecfee0 HTTP/1.1
Host: cell-api.vercel.app
```

![Lruihao](https://cell-api.vercel.app/gravatar/avatar/fee47a2f4f2cc71f99a02b0a73ecfee0)

> Get favicons by Google API.

```http
GET /google/s2/favicons?sz=64&domain=lruihao.cn HTTP/1.1
Host: cell-api.vercel.app
```

![lruihao.cn](https://cell-api.vercel.app/google/s2/favicons?sz=64&domain=lruihao.cn)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/vercel-proxy/  

