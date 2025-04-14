# RESTful


> RESTful 是一种系统开发设计风格、原则。可视情况调整，以下参考来源 [RFC5789](https://www.rfc-editor.org/rfc/rfc5789)

<!--more-->

## Noun

- 一般资源
  通用于一律使用复数名词
  例如：/books 或 /books/123。但有部分人认为应该使用单数名词，因为： /book/123 看似比 /books/123 合理。但想想文件系统的目录命名（例如 /Users 或 /Documents)，其实用复数也没问题。复数可以保持 API endpoint 的一致性，所以一般资源建议用复数。
- 唯一资源：对 client 而言只有一份的资源
  通用于单数名词
  例如：user 是指目前验证的使用者，使用者永远只能同时登入一个使用者

## Http Method

<!-- markdownlint-disable MD033 -->

<table><tbody><tr><th>Method</th><th>Idempotent</th><th>Safe</th><th>CRUD</th><th>OO</th><th>生活动词</th><th>用途</th></tr><tr><td rowspan="2">GET</td><td rowspan="2" style="text-align: center;">Y</td><td rowspan="2" style="text-align: center;">Y</td><td rowspan="2"><b>R</b>ead</td><td rowspan="2">get</td><td>get</td><td>取得资料</td></tr><tr><td>list</td><td>列出资料</td></tr><tr><td rowspan="2">POST</td><td rowspan="2"></td><td rowspan="2"></td><td rowspan="2"><b>C</b>reate</td><td rowspan="2">add</td><td>create</td><td>建立一个可以完全独立存在的实体</td></tr><tr><td>add</td><td>增加一个必须依赖于某个实体的实体</td></tr><tr><td rowspan="2">PUT</td><td rowspan="2" style="text-align: center;">Y</td><td rowspan="2"></td><td rowspan="3"><b>U</b>pdate</td><td rowspan="3">set</td><td>replace</td><td>取代一个关系，已存在时先删除后建立，不存在时直接建立</td></tr><tr><td>add</td><td>附加唯一关系，两个关系实体可以互相独立存在，且已经存在</td></tr><tr><td>PATCH</td><td></td><td></td><td>edit</td><td>编辑某个实体</td></tr><tr><td>DELETE</td><td></td><td></td><td><b>D</b>elete</td><td>remove</td><td>remove<br>delete</td><td>删除某个实体</td></tr></tbody></table>

- Safe：该操作不会改变伺服器端的资源状态（而且结果可以被 cache），属于 Safe 的操作必定属于 Idempotent
- Idempotent (幂等性)：该操作不管做 1 遍或做 n 遍，都会得到同样的资源状态结果（但不一定得到同样的返回值，例如第 2 次 DELETE 请求可能回传 404），因此 client 端可以放心 retry

### GET

> Safe：每次执行操作时，GET 只有读取 Resource，不会改变到任何的 Resource（资源，资料）  
> Idempotent：每次执行操作时，GET 只有读取 Resource，不会改变到任何的 Resource（资源，资料），所以任何资源的任何状态都是一样的

### POST

> 每次执行操作时，POST 都会建立一个 Resource（资源，资料）

- Create：建立一个可以完全独立存在的实体

  范例：建立使用者

  执行第一次时：建立一个 name = "李四" 的 user，但其 id = 1，执行第二次时：建立一个 name = "李四" 的 user，但其 id = 2，发送同样的请求，可每次都是不同的 Resource

  建立使用者前不需要建立任何的东西，就可以建立使用者了，使用者是可以完全独立的存在

  ```http
  POST /users HTTP/1.1
  Host: 127.0.0.1

  {
   "name": "李四"
  }
  ```

- Add：增加一个必须依赖于某个实体的实体

  资料结构：一对多的关系

  范例：Add a public key on behalf of a user 增加一个代表使用者的公钥 ([Gitea API](https://gitea.com/api/swagger#/admin/adminCreatePublicKey))

  增加这个公钥之前，使用者必须存在，公钥必须归属于某个使用者之下，公钥跟姓名一样，使用相同电脑的公钥就会相同，但不表示是同一个使用者，故公钥也会有自己的 ID 我每次增加公钥时，都将生成不同的公钥 ID

  ```http
  POST /api/v1/admin/users/{username}/keys HTTP/1.1
  Host: gitea.com

  {
    "key": "string",
    "read_only": true,
    "title": "string"
  }
  ```

### PUT

> Idempotent：每次执行操作时，PUT 都会取代 Resource，不管操作几次，使用者获取得 Resource 结果都是一样的
>
> Replace：不论资源如何，最终的资源状态都是一样的，Resource 已存在时，或许不理会、或许先删除后建立（取代）Resource 不存在时，直接建立
>
> Add：添加唯一关系，建立这个唯一关系前，两个关连实体都必须存在。在没有建立关系前，两个关连实体都可以互相独立存在
> 资料结构：多对多，且两个关连实体的 PK，同时也是关系实体的 PK、FK

- 范例：增加使用者与角色的关系

  增加使用者跟角色的关系前，使用者跟角色都必须存在；增加使用者跟角色的关系前，使用者跟角色可以独立存在，
  使用者 12262 跟 角色 2 的关系最多只能有一条关系（使用者 12262 有 角色 2)，最少没有关系（使用者 12262 没有 角色 2 ) ，执行第二次操作时，使用者 12262 跟 角色 2 的从属关系仍然存在，也不会跑出第二条 使用者 12262 跟 角色 2 的从属关系

  ```http
  PUT user/{account}/roles HTTP/1.1
  Host: 127.0.0.1

  {
    "role_id": "2"
  }
  ```

- 范例：Follow a user 关注一个使用者 ([Gitea API](https://gitea.com/api/swagger#/user/userCurrentPutFollow))

  增加关注关系时，关注者与被关注者（都是使用者）都必须存在；关注者 12262 跟被关注者 12231 的关系最多只能有一条关系（12262 关注 12231），最少没有关系（12262 不关注 12231），执行第二次操作时，关注者 12262 跟被关注者 12231 的关注关系仍然存在，也不会跑出第二条关注者 12262 跟被关注者 12231 的关注关系

  ```http
  PUT /api/v1/user/following/{username} HTTP/1.1
  Host: gitea.com
  ```

### PATCH

> Edit：编辑可独立存在、且已经存在的实体，也就是产生新版本的实体，可能会影响其他 Resource

- 范例：编辑使用者

  编辑使用者，使用者已经存在，且我们可能有纪录编辑时间、编辑人、编辑 IP，所以每次的编辑都会造成不一样的结果
  第一次编辑使用者，更新时间变为 08:00，编辑人 12262，IP 172.18.0.66 第二次编辑使用者，更新时间变为 09:00，编辑人 12263，IP 172.18.0.67

  ```http
  PATCH /users/{account} HTTP/1.1
  Host: 127.0.0.1

  {
    "username": "李四",
    "age": "18",
    "gender": "male"
  }
  ```

### DELETE

> Idempotent：每次执行操作时，DELETE 都会删除相同的东西

- 范例：删除使用者

  第一次删除使用者 12262，删除使用者 12262, 第二次删除使用者 12262，还是删除使用者 12262，只不过使用者 12262 不存在了

  ```http
  DELETE /users/{account} HTTP/1.1
  Host: 127.0.0.1
  ```

## HTTP Status Code

HTTP 状态码（HTTP Status Code）是用以表示网页服务器 HTTP 响应状态的 3 位数字代码。所有状态码的第一个数字代表了响应的五种状态之一。除非另有说明，状态码是 **HTTP/1.1 标准**（[RFC 7231](https://www.rfc-editor.org/rfc/rfc7231)）的一部分。

而关于 RESTful API 的请求状态，通常有以下两种设计方案：

- 方案一：使用 HTTP 状态码来表示请求状态，200 时返回的内容就是数据
- 方案二：所有接口都返回 200，在响应内容里约定错误码或错误信息

在实际应用中，应据具体情景及需要进行选择与调整。

<table><tbody><tr><th>方案</th><th colspan="2">优劣比较</th></tr><tr><td rowspan="2">方案一</td><td>优点</td><td>对服务端来说较为简单方便</td></tr><tr><td>缺点</td><td>客户端难以根据状态码处理复杂问题</td></tr><tr><td rowspan="2">方案二</td><td>优点</td><td>方便对返回资料进行统一处理和细微性的控制</td></tr><tr><td>缺点</td><td>相当于放弃了 HTTP 状态码的语义</td></tr></tbody></table>

### 常用 HTTP 状态码

| Code | Message                    | 用途                                                                               |
| ---- | -------------------------- | ---------------------------------------------------------------------------------- |
| 1XX  | Informational response     | 此类状态码通常代表的响应都是信息性的，告诉客户端可以进行下一步操作。               |
| 100  | Continue                   | 表示服务端已接收到请求头，客户端可以继续发送请求体（如 POST 请求）。               |
| 101  | Switching Protocols        | 表示服务端支持更优协议，让客户端在服务端更换协议后重新访问。                       |
| 2XX  | Successful                 | 此类状态码通常代表请求已成功被服务端接收、理解并接受。                             |
| 200  | OK                         | 表示请求成功。                                                                     |
| 201  | Created                    | 表示请求已被实现，通常是在成功创建了某个资源。                                     |
| 202  | Accepted                   | 表示请求已被服务端接收，但尚未进行处理。                                           |
| 204  | No Content                 | 表示请求成功，但不会返回任何内容。                                                 |
| 205  | Reset Content              | 表示请求成功，但不会返回任何内容，并且要求客户端重置表单。                         |
| 3XX  | Redirect                   | 此类状态码通常代表本次请求需要客户端采取进一步操作才能完成。通常用于重定向。       |
| 300  | Multiple Choices           | 表示请求的资源有多个供可选择，客户端可自行选择一个进行请求的重定向。               |
| 301  | Moved Permanently          | 表示请求的资源已经永久地移动到了新位置，并且将在 Location 域中携带该资源新的 URI。 |
| 304  | Not Modified               | 表示请求的资源无发生修改，将不会返回任何资源。                                     |
| 4XX  | Client Error               | 此类状态码通常代表客户端可能出现了错误。                                           |
| 400  | Bad Request                | 表示客户端发出的请求有误（格式、大小、无效的...)，服务端不能/ 不会处理该请求。     |
| 401  | Unauthorized               | 表示客户端未能提供必要的验证，服务端拒绝提供资源。                                 |
| 403  | Forbidden                  | 表示服务端理解了该请求，但客户端没有足够权限以访问，遂拒绝提供该资源。             |
| 404  | Not Found                  | 表示服务端无法找到请求的资源，其可能已经暂时（永久）失效。                         |
| 408  | Request Timeout            | 表示请求超时。                                                                     |
| 409  | Conflict                   | 表示请求的资源发送了冲突，通常是 PUT 请求。                                        |
| 410  | Gone                       | 表示请求的资源已经永久失效，客户端不应再次请求。                                   |
| 411  | Length Required            | 表示服务端拒绝在没有定义 Content-Length 头的情况下接收该请求。                     |
| 5XX  | Server Error               | 此类状态码通常代表由于服务端的原因，导致无法完成请求。                             |
| 500  | Internal Server Error      | 表示由于服务端遇到意料之外的变故，导致无法完成请求。                               |
| 501  | Not Implemented            | 表示服务端不支持完成请求所需的功能，导致无法完成请求。                             |
| 502  | Bad Gateway                | 表示作为网关或代理的服务段在执行请求时，从上游服务器获得了无效的响应。             |
| 503  | Service Unavailable        | 表示由于某些原因（服务器超载或系统维护等），导致暂时无法完成请求。                 |
| 504  | Gatewy Timeout             | 表示作为网关或代理的服务段在执行请求时，未能及时从上游服务器获得响应。             |
| 505  | HTTP Version Not Supported | 表示服务端不支持请求的 HTTP 协议版本，导致无法完成请求。                           |

> 以上内容参考自<https://zh.wikipedia.org/zh-cn/HTTP 状态码>，
> 需要查看完整 HTTP 状态码请点击 <https://www.rfc-editor.org/rfc/rfc9110.html#name-status-codes>


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/restful/  

