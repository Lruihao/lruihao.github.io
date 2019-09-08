---
title: web开发规则，代码规范
date: 2019-08-15 18:30:31
tags:
- php
- html/css
- javascript
- git
- 总结
categories:
- Web
password:
abstract:
message:
description:
keywords:
top:
sticky:
author:
permalink:
noreward:
notshow:
norelate:
repost:
---

# 精神
* 絕對不寫死程式
* 不留不要用的、垃圾程式碼
<!--more-->

# Git
* Master 的 BUG 必須最少且趨近於零，为最稳定的版本
* 每次 Commit 訊息應該確實填寫。不可模稜兩可，eg: 修复bug
* 禁止 Commit IDE 的 project data
* 禁止上传垃圾程式码
* 合并后的分支应删除


# 命名
* 命名應根據內容做有意義的命名，讓後續維護人員可以顧名思義!
* 即使不會發生錯誤，程式碼英文大小寫也需明確區分。

## 語意
|類型|命名規則|說明|
|:--|:--|:--|
|屬性 (Attribute, Property)|名詞<br/>user_name、userName||
|方法 (Method, Function)|動詞+名詞<br/>getUserName、get_user_name|常見的動詞有：get、set、update、delete、remove|

## 字母與分隔
<table style="background: #fff;"><tbody><tr><th>語言</th><th>變數 (Variable, Parameter, Argument)</th><th>常數 (Constant)</th><th>物件導向 - 類名 (Class Name)</th><th>物件導向 - 成員 (mebmer)</th></tr><tr><td>HTML、CSS</td><td>全部小寫，不同單字以「-」分隔 <br> user-id</td><td colspan="3"></td></tr><tr><td>JavaScript</td><td>首字小寫，不同單字「首字以大寫」分隔 <br> userId</td><td rowspan="2">全部大寫，不同單字以「_」分隔<br>MAX_COUNT</td><td rowspan="2">首字大寫，不同單字「首字以大寫」分隔<br>一個檔案放一個 Class<br>檔名即為 Class Name<br>User</td><td rowspan="2">公有 (public)&nbsp;: 首字小寫，不同單字「首字以大寫」分隔 <br> name, getName<br>私有 (private): _公有命名規則<br> _name, _getName</td></tr><tr><td>PHP</td><td>全部小寫，不同單字以「_」分隔 <br> user_id</td></tr><tr><td>SQL</td><td>由使用者定義的：表名、欄位名<br>全部小寫，不同單字以「_」分隔</td><td>SQL語法、函數 <br> 全部大寫 <br> SELECT、INSERT INTO</td><td colspan="2">-</td></tr></tbody></table>

# 通用
* 程式碼撰寫
* 每個函數應該註解，註解應包含函數工能說明、引數說明。
* 不必要的代碼不要寫，也禁止放到註解裡面!
* if-else 的 {} 嚴禁省略。
* {} 起始一律跟在 前一個功能的尾巴，禁止分行

## 正確寫法
```
public function test(){
  //do something
  if($a === $b){
    //do something
  }
}
```
## 錯誤寫法
```
public function test()
{
  //do something
  if($a === $b)
  {
    //do something
  }
}
```
* 程式碼排版
    * 任何程式碼應該以 2 個 space 為一個階層做好排版、不可使用 tab。
* 函數 (Function, Methd)
    * 函數宣告時需在函數上方加上函數註解，註解應包含函數說明、引數內容 (引數型態、引數英文名稱、引數說明)、 回傳值內容 (回傳值型態、回傳值說明)
* 類 (Class)
    * 一個類 (Class) 的宣告只能存在一個檔案。
    * 類 (Class) 的宣告檔，檔名必須為類名。
* 其他
    * 連結本地任何其他資源 (圖片、檔案、網站) 皆使用相對路徑，禁止使用絕對路徑，非本地資源除外。

# HTML
## 程式碼撰寫
* 禁止在 HTML 使用 `<style>`、`<script>`，一律使用外部檔案引用方式引用 CSS、JavaScript檔案。
* HTML 標籤需成雙成對，有頭有尾。
* 區塊標籤：`<tag></tag>`
* 單標籤：`<tag />`
* 禁止使用已被 HTML 捨棄的舊標籤、屬性，如：

```xml
<!-- html tag -->
<center>
<font>
<basefont>
<s>
<strike>
<u>
<listing>
<plaintext>
<xmp>
<!-- html attribute -->
align
bgcolor
color
```
## 資安禁止：
> 禁止使用 readonly 做為參數傳遞
## 其他
> 連結本地任何其他資源 (圖片、檔案、網站) 皆使用相對路徑，禁止使用絕對路徑，非本地資源除外。

# CSS
## 程式碼撰寫
> CSS 的定義應該獨立一個 CSS 檔案，禁止使用 `<style>` 或 `style` 屬性直接在 HTML 中定義樣式。

# JavaScript
## 程式碼撰寫
* 禁止使用 HTML 字串，一律使用 Dom 產生 HTML
* 禁止省略箭頭函數 (Arrow function) 的括弧

正確
```
a = (a, b) => {
  c;
}
```
錯誤 (這是允許的，但造成程式碼閱讀困難，故禁止)
```
a  => c;
```

## 註解
JavaScript 註解應該遵循 JSDoc 的標準撰寫
### 全域變數 (Global)
```
/* global $t, Tiger */
```
### 常數 (Constant)
```
/**
 * 常數說明
 * @type {常數型態}
 */
```
**Example**
```
/**
 * 使用者ID
 * @type {String}
 */
var userId = 'Hello';
```
### 函數、方法 (Function, Method)
```
/**
 * 函數用途說明
 * @param {引數型態} 引數名稱 引數說明
 * @param {引數型態} [選擇性引數名稱] 引數說明
 * @param {引數型態} [選擇性引數名稱=引數預設值] 引數說明
 * @returns {回傳值型態} 回傳值說明
 */
```
**Example**
```
/**
 * 取得使用者
 * @param {Int} userId 使用者ID
 * @param {Object} [options] 其他選項
 * @param {String} [options.query='a'] 查詢關鍵字 預設為 a
 * @returns {Object} 使用者資料
 */
var getUser = function(userId, options){
  //do something
  return user;
};
```

# PHP
## 前端參數取得
參數取得需透過 filter_input 函數取得，不得使用 $_GET、 $_POST
## 輸出到前台
參數命名必須為：全部小寫，不同單字以「_」分隔
## 註解
PHP 註解應該遵循 PHPDoc 的標準撰寫
## 成員變數 (Member)
成員變數只的是 Class 內的成員變數，我們都會要求替成員變數增加註解說明。通常 Function 的變數除非太特別否則都不需要特別註解說明。
```
/**
 * 成員變數說明
 * @type {型態}
 */
```
**Example**
```
/**
 * 使用者ID
 * @type {String}
 */
$userId = 'Hello';
```
## 函數、方法 (Function, Method)
```
/**
 * 函數用途說明
 * @param 引數型態 引數名稱 引數說明
 * @option 引數選項型態 引數選項名稱 引數選項說明
 * @uses 全域變數 全域變數說明
 * @returns 回傳值型態 回傳值說明
 */
```
**Example**
```
/**
 * 取得使用者
 * @param int userId 使用者ID
 * @param object options 其他選項
 * @option string options['query'] 查詢關鍵字
 * @uses $_POST['role_id'] 從前端以POST取得角色ID
 * @returns object 使用者資料
 */
function getUser($userId, $options){
  //do something
  return $user;
};
```

# Database
* 禁止使用 Table Join。
* 禁止使用 Oracle Trigger。
* 禁止將查詢資料庫的 SQL 放在迴圈中查詢
## SQL 撰寫
* 屬於 SQL 語法使用大寫 (SELECT, WHERE, INSERT etc..)
* 屬於使用者自己定義的使用小寫 (表名 table name, 欄位名 column name etc..)
* 表名、欄位名前後需加上 \`

**Example**
```
INSERT INTO `user` VALUES('a', 'b');
```

# 統一用詞
> 僅為舉例，不限與此。

|用詞|統一|
|:-|:-|
|最后|最後|
|關閉|取消|
|存儲<br/>保存<br/>修改|儲存|
|搜尋|查詢|
