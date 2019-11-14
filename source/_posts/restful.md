---
title: RESTful
tags:
- REST
- Fullstack
categories:
- Fullstack
date: 2019-11-14 19:06:05
---

> RESTful 是一種系統開發設計風格、原則。可視情況調整，以下參考來源 RFC5789 <https://tools.ietf.org/html/rfc5789>

## Noun

- 一般資源
通用於一律使用複數名詞
例如：/books 或 /books/123。但有部分人認為應該使用單數名詞，因為： /book/123 看似比 /books/123 合理。但想想檔案系統的目錄命名 (例如/Users或/Documents)，其實用複數也沒問題。複數可以保持API endpoint的一致性，所以一般資源建議用複數。
- 唯一資源：對 client 而言只有一份的資源
通用於單數名詞
例如：user 是指目前驗證的使用者，使用者永遠只能同時登入一個使用者

## Http Method

<table><tbody><tr><th>Method</th><th>Idempotent</th><th>Safe</th><th>CRUD</th><th>OO</th><th>生活動詞</th><th>用途</th></tr><tr><td rowspan="2">GET</td><td rowspan="2" style="text-align: center;">Y</td><td rowspan="2" style="text-align: center;">Y</td><td rowspan="2"><b>R</b>ead</td><td rowspan="2">get</td><td>get</td><td>取得資料</td></tr><tr><td>list</td><td>列出資料</td></tr><tr><td rowspan="2">POST</td><td rowspan="2"></td><td rowspan="2"></td><td rowspan="2"><b>C</b>reate</td><td rowspan="2">add</td><td>create</td><td>建立一個可以完全獨立存在的實體</td></tr><tr><td>add</td><td>增加一個必須依賴於某個實體的實體</td></tr><tr><td rowspan="2">PUT</td><td rowspan="2" style="text-align: center;">Y</td><td rowspan="2"></td><td rowspan="3"><b>U</b>pdate</td><td rowspan="3">set</td><td>replace</td><td>取代一個關係，已存在時先刪除後建立，不存在時直接建立</td></tr><tr><td>add</td><td>附加唯一關係，兩個關係實體可以互相獨立存在，且已經存在</td></tr><tr><td>PATCH</td><td></td><td></td><td>edit</td><td>編輯某個實體</td></tr><tr><td>DELETE</td><td></td><td></td><td><b>D</b>elete</td><td>remove</td><td>remove<br>delete</td><td>刪除某個實體</td></tr></tbody></table>

- Safe：該操作不會改變伺服器端的資源狀態 (而且結果可以被cache)，屬於 Safe 的操作必定屬於 Idempotent
- Idempotent (冪等性)：該操作不管做1遍或做n遍，都會得到同樣的資源狀態結果 (但不一定得到同樣的回傳值，例如第2次DELETE請求可能回傳404)，因此client端可以放心retry。

### GET

- SAFE：每次執行操作時，GET 只有讀取 Resource，不會改變到任何的 Resource (資源, 資料)
- Idempotent：每次執行操作時，GET 只有讀取 Resource，不會改變到任何的 Resource (資源, 資料)，所以任何資源的任何狀態都是一樣的

### POST

- 每次執行操作時，POST 都會建立一個 Resource (資源, 資料)
- 範例：建立使用者
執行第一次時：建立一個 name = "帥小慶" 的 user，但其 id = 1執行第二次時：建立一個 name = "帥小慶" 的 user，但其 id = 2，發送同樣的請求，可每次都是不同的 Resource
```
POST /users
Data:
  {
    "name": "帥小慶"
  }
```
- Create：建立一個可以完全獨立存在的實體
- 範例：建立使用者
建立使用者前不需要建立任何的東西，就可以建立使用者了，使用者是可以完全獨立的存在
```
POST /users
Data:
  {
    "name": "帥小慶"
  }
```
- Add：增加一個必須依賴於某個實體的實體
資料結構：1對多的關係
- 範例：Add a public key on behalf of a user 增加一個代表使用者的公鑰 (Gitea API)
增加這個公鑰之前，使用者必須存在，公鑰必須歸屬於某個使用者之下公鑰跟姓名一樣，使用相同電腦的公鑰就會相同，但不表示是同一個使用者，故公鑰也會有自己的 ID我每次增加公鑰時，都將生成不同的公鑰 ID
```
POST ​/admin​/users​/{username}​/keys
```

### PUT

- Idempotent：每次執行操作時，PUT 都會取代 Resource，不管操作幾次，使用者獲取得 Resource 結果都是一樣的
- Replace：不論資源如何，最終的資源狀態都是一樣的
Resource 已存在時，或許不理會、或許先刪除後建立 (取代)Resource 不存在時，直接建立
- Add：添加唯一關係，建立這個唯一關係前，兩個關連實體都必須存在。在沒有建立關係前，兩個關連實體都可以互相獨立存在
- 資料結構應為：多對多，且兩個關連實體的 PK，同時也是關係實體的 PK、FK
- 範例：增加使用者與角色的關係
增加使用者跟角色的關係前，使用者跟角色都必須存在；增加使用者跟角色的關係前，使用者跟角色可以獨立存在使用者 23240，跟角色 2，的關係最多只能有一條關係 (使用者 23240 有角色 2 )，最少沒有關係 (使用者 23240 沒有角色 2 )執行第二次操作時，使用者 23240 跟角色 2 的從屬關係仍然存在，也不會跑出第二條使用者 23240 跟角色 2 的從屬關係
```
PUT user/{account}/roles
Data
  {
    "role_id": "2"
  }
```
- 範例：Follow a user 關注一個使用者 (Gitea)
增加關注關係時，關注者與被關注者 (都是使用者) 都必須存在；增加關注關係時，關注者與被關注者 (都是使用者) 都必須存在關注者使用者 23240，跟被關注者使用者 F3860056，的關係最多只能有一條關係 (23240 關注 F3860056)，最少沒有關係 (23240 不關注 F3860056)執行第二次操作時，關注者 23240 跟被關注者 F3860056 的關注關係仍然存在，也不會跑出第二條關注者 23240 跟被關注者 F3860056 的關注關係
```
PUT  ​/user​/following​/{username}
```

### PATCH

- Edit：編輯可獨立存在、且已經存在的實體，也就是產生新版本的實體，可能會影響其他 Resource
- 範例：編輯使用者
編輯使用者，使用者已經存在，且我們可能有紀錄編輯時間、編輯人、編輯IP，所以每次的編輯都會造成不一樣的結果
第一次編輯使用者，更新時間變為 08:00，編輯人 23240，IP 10.151.110.165第二次編輯使用者，更新時間變為 09:00，編輯人 23241，IP 10.151.110.144
```
PATCH /users/{account}
```

### DELETE
- Idempotent：每次執行操作時，DELETE 都會刪除相同的東西
- 範例：刪除使用者
第一次刪除使用者23240，刪除使用者23240第二次刪除使用者23240，還是刪除使用者23240，只不過使用者 23240 不存在了。
```
DELETE /users/{account}
```

## HTTP Status Code

HTTP状态码（HTTP Status Code）是用以表示网页服务器HTTP响应状态的3位数字代码。所有状态码的第一个数字代表了响应的五种状态之一。 除非另有说明，状态码是HTTP / 1.1标准（RFC 7231）的一部分。

而关于 RESTful API 的请求状态，通常有以下两种设计方案：
- 方案一：使用 HTTP 状态码来表示请求状态，200 时返回的内容就是数据；
- 方案二：所有接口都返回 200 ，在响应内容里约定 错误码 或 錯誤信息；

在實際應用中，應據具體情景及需要進行選擇與調整。
<table><tbody><tr><th>方案</th><th colspan="2">優劣比較</th></tr><tr><td rowspan="2">方案一</td><td>優點</td><td>對服務端來說較為簡單方便</td></tr><tr><td>缺點</td><td>客戶端難以根據狀態碼處理複雜問題</td></tr><tr><td rowspan="2">方案二</td><td>優點</td><td>方便對返回資料進行統一處理和細細微性的控制</td></tr><tr><td>缺點</td><td>相當於放棄了HTTP狀態碼的語義</td></tr></tbody></table>

### 常用HTTP狀態碼
<table><tbody><tr><th>Code</th><th>Message</th><th>用途</th></tr><tr><th>1XX</th><th>Informational response</th><th>此類狀態碼通常代表的響應都是信息性的，告訴客戶端可以進行下一步操作。</th></tr><tr><td>100</td><td>Continue</td><td>表示服務端已接收到請求頭，客戶端可以繼續發送請求體(如POST請求)。</td></tr><tr><td>101</td><td>Switching Protocols</td><td>表示服務端支持更優協議，讓客戶端在服務端更換協議後重新訪問。</td></tr><tr><th>2XX</th><th>Successful</th><th>此類狀態碼通常代表請求已成功被服務端接收、理解并接受。</th></tr><tr><td>200</td><td>OK</td><td>表示請求成功。</td></tr><tr><td>201</td><td>Created</td><td>表示請求已被實現，通常是在成功創建了某個資源。</td></tr><tr><td>202</td><td>Accepted</td><td>表示請求已被服務端接收，但尚未進行處理。</td></tr><tr><td>204</td><td>No Content</td><td>表示請求成功，但不會返回任何內容。</td></tr><tr><td>205</td><td>Reset Content</td><td>表示請求成功，但不會返回任何內容，並且要求客戶端重置表單。</td></tr><tr><th>3XX</th><th>Redirect</th><th>此類狀態碼通常代表本次請求需要客戶端採取進一步操作才能完成。通常用於重定向。</th></tr><tr><td>300</td><td>Multiple Choices</td><td>表示請求的資源有多個供可選擇，客戶端可自行選擇一個進行請求的重定向。</td></tr><tr><td>301</td><td>Moved Permanently</td><td>表示請求的資源已經永久地移動到了新位置，並且將在Location域中攜帶該資源新的URI。</td></tr><tr><td>304</td><td>Not Modified</td><td>表示請求的資源無發生修改，將不會返回任何資源。</td></tr><tr><th>4XX</th><th>Client Error</th><th>此類狀態碼通常代表客戶端可能出現了錯誤。</th></tr><tr><td>400</td><td>Bad Request</td><td>表示客戶端發出的請求有誤(格式、大小、無效的...)，服務端不能/不會處理該請求。</td></tr><tr><td>401</td><td>Unauthorized</td><td>表示客戶端未能提供必要的驗證，服務端拒絕提供資源。</td></tr><tr><td>403</td><td>Forbidden</td><td>表示服務端理解了該請求，但客戶端沒有足夠權限以訪問，遂拒絕提供該資源。</td></tr><tr><td>404</td><td>Not Found</td><td>表示服務端無法找到請求的資源，其可能已經暫時(永久)失效。</td></tr><tr><td>408</td><td>Request Timeout</td><td>表示請求超時。</td></tr><tr><td>409</td><td>Conflict</td><td>表示請求的資源發送了衝突，通常是PUT請求。</td></tr><tr><td>410</td><td>Gone</td><td>表示請求的資源已經永久失效，客戶端不應再次請求。</td></tr><tr><td>411</td><td>Length Required</td><td>表示服務端拒絕在沒有定義Content-Length頭的情況下接收該請求。</td></tr><tr><th>5XX</th><th>Server Error</th><th>此類狀態碼通常代表由於服務端的原因，導致無法完成請求。</th></tr><tr><td>500</td><td>Internal Server Error</td><td>表示由於服務端遇到意料之外的變故，導致無法完成請求。</td></tr><tr><td>501</td><td>Not Implemented</td><td>表示服務端不支持完成請求所需的功能，導致無法完成請求。</td></tr><tr><td>502</td><td>Bad Gateway</td><td>表示作為網関或代理的服務段在執行請求時，從上游服務器獲得了無效的響應。</td></tr><tr><td>503</td><td>Service Unavailable</td><td>表示由於某些原因(服務器超載或系統維護等)，導致暫時無法完成請求。</td></tr><tr><td>504</td><td>Gatewy Timeout</td><td>表示作為網関或代理的服務段在執行請求時，未能及時從上游服務器獲得響應。</td></tr><tr><td>505</td><td>HTTP Version Not Supported</td><td>表示服務端不支持請求的HTTP協議版本，導致無法完成請求。</td></tr></tbody></table>

> 以上內容參考自<https://zh.wikipedia.org/zh-tw/HTTP%E7%8A%B6%E6%80%81%E7%A0%81>，
需要查看完整HTTP狀態碼請點擊<https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html>