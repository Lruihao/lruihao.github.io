# Web 开发规则，代码规范


## 精神

- 绝不写死代码，硬编码
- 不留不要用的、垃圾代码

## Git

- Master 的 BUG 必须最少且趋近于零，为最稳定的版本
- 每次 Commit 信息应该准确填写。不可模棱两可，eg: 修复 BUG、增加功能
- 禁止 Commit IDE 的 project data，e.g: .vscode
- 禁止上传垃圾代码

> 更多规则详见文档 [Commit 规范](/posts/commit-spec/)

### 分支（Branch）

- 命名规则：应以此分支主要目的命名（修复什么 BUG，新增特定功能）
- 合并后的分支应该删除

### commit

- 遵循一个功能一个 commit 的原则

## Restful

- 资源名词站在 API 的角度思考

  - 复数名词：可以复数笔数据，回传结果为 Array

    举例：GET/users 取得多笔使用者资料

    - 刪除，放在复数名词內，让 Router 保持一致性
    - 增加，放在复数名詞內，让 Router 保持一致性

  - 单数名词：仅取得单笔数据，必须指定 PK，两两一组，回传结果为 Object
    举例：GET/user/{accont} 取得单笔使用者资料，必须指定 PK

- URL 中一律不带 id 参数

```
正确范例： calendar_manager/calendar/29
错误范例： calendar_manager/calendar/29?id=29
```

> 更多规则详见文档 [RESTful](/posts/restful/)

## 命名

- 命名应根据内容做有意义的命名，让后续维护人员可以顾名思义！
- 即使不会发生错误，代码英文大小写也需明确区分。

### 语意

| 类型                       | 命名规则                               | 说明                                           |
| :------------------------- | :------------------------------------- | :--------------------------------------------- |
| 属性 (Attribute, Property) | 名词 user_name、userName               |                                                |
| 方法 (Method, Function)    | 动词 + 名词 getUserName、get_user_name | 常見的动词有：get、set、update、delete、remove |

### 字母与分隔

| 语言       | 变量 (Variable, Parameter, Argument)                         | 常量  (Constant)                                     | 面向对象 - 类名 (Class Name)                                 | 面向对象 - 成员 (mebmer)                                     |
| ---------- | ------------------------------------------------------------ | ---------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| HTML       | 全部小写，不同单词以「-」分隔<br />e.g: user-id              |                                                     |                                                              |                                                              |
| CSS、SCSS  | 全部小写，不同单词以「-」分隔，CSS 变量以「--」开头，SCSS 变量以「$」开头<br />e.g: .user-id、--header-height、$header-height |                                                      |                                                              |                                                              |
| JavaScript | 驼峰式命名法<br />首字小写，不同单字「首字以大写」分隔<br /> e.g: userId | 全部大写，不同单字以「_」分隔 MAX_COUNT              | 驼峰式命名法<br />首字大写，不同单字「首字以大写」分隔<br />一个文件放一个 Class, 文件名即为 Class Name <br />e.g: User | 驼峰式命名法<br />公有 (public) : 首字小写，不同单词「首字以大写」分隔<br />e.g: name, getName<br />私有 (private): _公有命名规则<br />e.g: _name,_getName |
| Vue        |                                                              |                                                      |                                                              |                                                              |
| Java       |                                                              |                                                      |                                                              |                                                              |
| PHP        | 全部小写，不同单词以「_」分隔<br />e.g: user_id              |                                                      |                                                              |                                                              |
| Python     |                                                              |                                                      |                                                              |                                                              |
| SQL        | 由使用者定义的：表名、字段名<br />全部小写，不同单词以「_」分隔 | SQL 语法、函数全部大写<br />e.g: SELECT、INSERT INTO |                                                              |                                                              |

## 通用

- 代码编写
- **每个函数应该使用块注释，注释应包含函数功能说明、参数说明**。规则见：JSDoc、JavaDoc
- 不必要的代码不要写，也应禁止放到注释里面！
- if-else 的 {} 严禁省略
- {} 起始一律跟在 前一个功能的尾巴，禁止分行
- 代码规范、代码排版等可通过 eslint 等工具做统一处理

### 正确写法

```js
public function test () {
  // do something
  if (a === b) {
    // do something
  }
}
```

## 错误写法

```js
public function test ()
{
  // do something
  if (a === b)
  {
    // do something
  }
}
```

- 代码排版
  - 任何代码应该以 2 个 space 为一个缩进做好排版、不可使用 tab
- 函数 (Function, Methd)
  - 函数声明时需在函数上方加上函数注释，注释应包含函数说明、参数内容（参数类型、参数英文名称、参数说明）、返回值内容（返回值类型、返回值说明）
- 类 (Class)
  - 一个类（Class）的声明只能存在一个文件
  - 类（Class）的声明文件，文件名必须为类名
- 其他
  - 连接本地任何其他资源（图片、文件、网站）皆使用相对路径，禁止使用绝对路径，非本地资源除外

## HTML

### 代码编写

- 禁止在 HTML 使用 `<style>`、`<script>`，一律使用外部档案引用方式引用 CSS、JavaScript 文件
- HTML 标签需成双成对，有头有尾
- 块级标签：`<tag></tag>`
- 单标签：`<tag />`
- 禁止使用已被 HTML 舍弃的旧标签、属性，如：

```html
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

## CSS

> CSS 的定义应该独立一个 CSS 文件，禁止使用 `<style>` 或 `style` 属性直接在 HTML 中定义样式。

## JavaScript

> 禁止使用 HTML 字串，一律使用 Dom 产生 HTML, e.g: `document.createDocumentFragment()`

### 注释

JavaScript 注释应该遵循 JSDoc 的标准撰写

#### 全局变量 (Global)

```js
/* global ZT */
```

#### 常量 (Constant)

```js
/**
 * 常量說明
 * @type {常量类型}
 */
```

**Example**

```js
/**
 * 请求地址
 * @type {String}
 */
const REQUEST_URL = 'http://localhost:8080';
```

#### 函數、方法 (Function, Method)

```js
/**
 * 函数用途说明
 * @param {参数类型} 参数名称参数说明
 * @param {参数类型} [选择性参数名称] 参数说明
 * @param {参数类型} [选择性参数名称=参数预设值] 参数说明
 * @returns {返回值类型} 返回值说明
 */
```

**Example**

```js
/**
 * 取得使用者
 * @param {Int} userId 使用者 ID
 * @param {Object} [options] 其他选项
 * @param {String} [options.query='a'] 查询关键词 默认为 'a'
 * @returns {Object} 使用者资料
 */
function getUser (userId, options){
  // do something
  return user;
};
```

## Vue

- [ ] 待补充

## Java

Java 注释应该遵循 JavaDoc 的标准撰写

- [ ] 待补充

## PHP

### 前端参数取得

参数取得需通过 filter_input 函数取得，不得使用 _GET 、_POST

### 输出到前台

参数命名必须为：全部小写，不同单字以「_」分隔

### 注解

PHP 注解应该遵循 PHPDoc 的标准撰写

### 成员变量 (Member)

成员变量只的是 Class 内的成员变数，我们都会要求替成员变量增加注解说明。通常 Function 的变量除非太特别否则都不需要特别注解说明。

```php
/**
 * 成员变量說明
 * @type {类型}
 */
```

**Example**

```php
/**
 * 使用者 ID
 * @type {String}
 */
$userId = 'Hello';
```

### 函数、方法 (Function, Method)

```php
/**
 * 函数用途说明
 * @param 参数型态 参数名称 参数说明
 * @option 参数选项类型 参数选项名称 参数选项说明
 * @uses 全局变量 全域变数说明
 * @returns 返回值类型 返回值说明
 */
```

**Example**

```php
/**
 * 取得使用者
 * @param int userId 使用者 ID
 * @param object options 其他选项
 * @option string options['query'] 查询关键字
 * @uses $_POST['role_id'] 从前端以 POST 取得角色 ID
 * @returns object 使用者资料
 */
function getUser ($userId, $options) {
  // do something
  return $user;
};
```

## Python

- [ ] 待补充

## Database

- 禁止使用 Table Join。
- 禁止使用 Oracle Trigger。
- 禁止将查询数据库的 SQL 放在循环中查询

### SQL 撰写

- 属于 SQL 语法使用大写（SELECT，WHERE，INSERT etc..）
- 属于使用者自己定义的使用小写（表名 table name，字段名 column name etc..）
- 表名、字段名前后需加上 `

**Example**

```sql
INSERT INTO `user` VALUES('a', 'b');
```

## 统一用词

> 系统中常用词，例如弹出框按钮、搜索框等，仅为举例，不限与此。

| 用词                       | 统一 |
| :------------------------- | :--- |
| 最后、最终                 | 最后 |
| 关闭、Cancel、取消         | 取消 |
| 存储、保存、修改、OK、确定 | 确定 |
| 搜寻、查询、查找、搜索     | 搜索 |


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/dev-rules/  

