# API proxies powered by Vercel.

# [Vercel API Proxy](https://github.com/Lruihao/vercel-proxy)

> API proxies powered by Vercel.

[toc]

## Hosts

- <https://api.lruihao.cn>
- <https://cell-api.vercel.app>

## API List

Go to the [Vercel API Proxy](https://cell-api.vercel.app) and select the API you want to use.

### Gravatar

- **API**: `/gravatar/avatar/(.*)`
- **Method**: `GET/POST`

Get the avatar of the email `fee47a2f4f2cc71f99a02b0a73ecfee0` by Gravatar API.

```http
GET /gravatar/avatar/fee47a2f4f2cc71f99a02b0a73ecfee0 HTTP/1.1
Host: cell-api.vercel.app
```

![Lruihao](https://cell-api.vercel.app/gravatar/avatar/fee47a2f4f2cc71f99a02b0a73ecfee0)

### Google

- **API**: `/gravatar/avatar/(.*)`
- **Method**: `*`

Get favicons by Google API.

```http
GET /google/s2/favicons?sz=64&domain=lruihao.cn HTTP/1.1
Host: cell-api.vercel.app
```

![lruihao.cn](https://cell-api.vercel.app/google/s2/favicons?sz=64&domain=lruihao.cn)

### Netease Comment

- **API**: `/netease/comment`
- **Method**: `GET/POST`
- **Request parameter**:

    | name | Required | type   | description                                                                             |
    | :--- | :------- | :----- | :-------------------------------------------------------------------------------------- |
    | type | no       | string | Type is text, returns text, is Json, returns Json by default                            |
    | id   | no       | int    | Specify the playlist id to get the hot reviews, default is NetEase Cloud Hot Songs List |

Request example:

```http
GET /netease/comment?mid=2280569152 HTTP/1.1
Host: cell-api.vercel.app
```

Response example:

```json
{
  "code": 1,
  "data": {
    "musicId": 40915177,
    "musicName": "父亲写的散文诗",
    "musicUrl": "http://music.163.com/song/media/outer/url?id=40915177",
    "artist": "许飞",
    "picUrl": "http://p1.music.126.net/h00CveXrABOfiWmFDLzRDg==/3405187515194971.jpg",
    "content": "一首歌 一万个人的故事",
    "nickname": "Gallianoo",
    "avatarUrl": "http://p2.music.126.net/3U7kD9M39sfkrPdWVvaGog==/109951163278309929.jpg",
    "likedCount": 4743,
    "time": 1457059879799,
    "timeStr": "2016-03-04"
  }
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/vercel-proxy/  

