# SQL 总结


&gt; SQL 增删改查 (CRUD) 语句与常用函数总结。

&lt;!--more--&gt;

&lt;!-- markdownlint-disable --&gt;

## SQL Introduction

一般我们对数据库的操作主要分为四种，增**C**(CREATE)、删**D**(DELETE)、改**U**(UPDATE)、查**R**(READ)，所以，我就从**CRUD**这四个方面来制作查询表。

**开发规则：**

1. 尽量减少对数据库的访问次数，且不能查询无用的数据，浪费效能（例如：我只要男生的数据，你把所有人的数据都查询出来）。

2. 属于`SQL`语法的要使用大写（SELECT, WHERE, INSERT etc...）。

3. 属于使用者自己定义的要使用小写（表名、列名 etc...）。

4. 表名与列名前后使用 \` 包起来，防止与关键字冲突（例如： INSERT INTO \`user\` VALUES(&#39;a&#39;,&#39;b&#39;); ）。

5. 禁止使用 Table Join。

6. 禁止使用 Oracle Trigger。

7. 禁止使用 SELECT \* （为了加强代码可读性）。

8. 不能将查询数据库的 SQL 放在循环中查询。

## 新增（CREATE）

| 功能       | 语句                                                                                                                                                                                                                |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 创建数据库 | `CREATE DATABASE &lt;数据库名&gt;;`                                                                                                                                                                                       |
| 创建数据表 | `CREATE TABLE  &lt;表名&gt; (`&lt;br/&gt;`&lt;列名 1&gt; &lt;数据类型&gt; &lt;约束条件&gt;,`&lt;br/&gt;`&lt;列名 2&gt; &lt;数据类型&gt; &lt;约束条件&gt;,`&lt;br/&gt;`&lt;列名 3&gt; &lt;数据类型&gt; &lt;约束条件&gt;,`&lt;br/&gt;`......`&lt;br/&gt;`&lt;该表的的约束条件 1&gt;`&lt;br/&gt;`&lt;该表的的约束条件 2&gt;...);` |
| 插入数据   | `INSERT INTO &lt;表名&gt; （列名 1, 列名 2,...) VALUES （值 1, 值 2,...);`&lt;br/&gt;（每列都有数据插入时，可省略列名。但是为了代码的可读性，不建议如此操作。）                                                                 |
| 增加列     | `ALTER TABLE &lt;表名&gt; ADD &lt;列名&gt; &lt;数据类型&gt; &lt;约束条件&gt; AFTER &lt;前一列列名&gt;;`&lt;br/&gt;（默认插入到最后一列）                                                                                                                |

## 删除（DELETE）

| 功能       | 语句                                                |
| :--------- | :-------------------------------------------------- |
| 删除数据库 | `DROP DATABASE &lt;数据库名&gt;;`                         |
| 删除数据表 | `DROP TABLE &lt;表名&gt;;`                                |
| 清空表数据 | `DELETE FROM &lt;表名&gt;;` 或者 `TRUNCATE TABLE &lt;表名&gt;;` |
| 删除行数据 | `DELETE FROM &lt;表名&gt; WHERE &lt;条件&gt;;`                  |
| 删除列数据 | `ALTER TABLE &lt;表名&gt; DROP &lt;列名&gt;;`                   |

## 修改（UPDATE）

| 功能         | 语句                                                                      |
| :----------- | :------------------------------------------------------------------------ |
| 修改数据库名 | `RENAME DATABASE &lt;旧名称&gt; TO &lt;新名称&gt;;`                                   |
| 修改表名     | `RENAME TABLE &lt;旧名称&gt; TO &lt;新名称&gt;;`                                      |
| 修改数据     | `UPDATE &lt;表名&gt; SET &lt;列名 1&gt; = &lt;新值 1&gt;,&lt;列名 2&gt; = &lt;新值 2&gt; WHERE &lt;条件&gt;;` |
| 修改列名     | `ALTER TABLE &lt;表名&gt; CHANGE &lt;旧列名&gt; &lt;新列名&gt; &lt;数据类型&gt; &lt;约束条件&gt;;`      |

&gt; 注意：重命名数据库与数据表一般不推荐使用，若想测试，请先备份好自己的数据库~

## 查询（&amp;nbsp;R&amp;nbsp;E&amp;nbsp;A&amp;nbsp;D&amp;nbsp;）

| 功能                     | 语句                                                                                                                                                                    |
| :----------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 查询所有数据库           | `SHOW DATABASES;`                                                                                                                                                       |
| 查询指定数据库中所有表名 | `USE &lt;数据库名&gt;;` 然后 `SHOW TABLES;`&lt;br/&gt;或者 `SHOW TABLES FROM &lt;数据库名&gt;;`                                                                                           |
| 查询表中所有列信息       | `SHOW COLUMNS FROM &lt;表名&gt;;`                                                                                                                                             |
| 查询表中所有数据         | `SELECT &lt;列名 1&gt;,&lt;列名 2&gt;,&lt;列名 3&gt;,... FROM &lt;表名&gt;;`                                                                                                                    |
| 查询表中某个数据         | `SELECT &lt;列名&gt; FROM &lt;表名&gt;;`                                                                                                                                            |
| 查询表中指定多个数据     | `SELECT &lt;列名 1&gt;,&lt;列名 2&gt;,&lt;列名 3&gt;,... FROM &lt;表名&gt; WHERE &lt;条件&gt;;`                                                                                                       |
| 查询表中指定一个数据     | `SELECT &lt;列名&gt; FROM &lt;表名&gt; WHERE &lt;条件&gt;;`                                                                                                                               |
| 查询指定范围数据         | `SELECT &lt;列名 1&gt;,&lt;列名 2&gt;,&lt;列名 3&gt;,... FROM &lt;表名&gt; WHERE`&lt;br/&gt;`&lt;某列名&gt; BETWEEN &lt;某列名范围值-小&gt; AND &lt;某列名范围值-大&gt;;`                                              |
| 字符串模式匹配查询       | `SELECT &lt;列名&gt; FROM &lt;表名&gt; WHERE name LIKE &#39;Y%&#39;;`&lt;br/&gt;（查询以 Y 开头的，更多匹配方式自行百度哦~。）                                                                    |
| 指定多个值数据查询       | `SELECT &lt;列名 1&gt;,&lt;列名 2&gt;,&lt;列名 3&gt;,... FROM &lt;表名&gt; WHERE`&lt;br/&gt;`&lt;某列名&gt; IN (&#39;&lt;某列名值 1&gt;&#39;,&#39;&lt;某列名值 2&gt;&#39;,&#39;&lt;某列名值 3&gt;&#39;,...);`                                        |
| 查询结果排序             | `SELECT &lt;列名 1&gt;,&lt;列名 2&gt;,&lt;列名 3&gt;,... FROM &lt;表名&gt; ORDER BY &lt;某列名&gt; DESC;`&lt;br/&gt;（此处为递减排列，默认为递增`ASC`）                                                     |
| 查询指定几笔数据         | `SELECT &lt;列名 1&gt;,&lt;列名 2&gt;,&lt;列名 3&gt;,... FROM &lt;表名&gt; LIMIT n,m;`&lt;br/&gt;（从`n`到`m`笔数据）                                                                                 |
| 分群查询                 | `SELECT &lt;列名 1&gt;,&lt;列名 2&gt;,&lt;列名 3&gt;,...,&lt;函数&gt; FROM &lt;表名&gt; GROUP BY &lt;列名 1&gt;,&lt;列名 2&gt;,&lt;列名 3&gt;,...;`&lt;br/&gt;（常搭配函数有：`SUM()`、`AVG()`、`COUNT()`、`MAX()`、`MIN()`） |

## 常用函数

| 函数名                                                   | 用途                                     |
| :------------------------------------------------------- | :--------------------------------------- |
| `ABS`（数值）                                            | ABS 函数（求绝对值）                     |
| `MOD`（被除数，除数）                                    | MOD 函数（求余）                         |
| `ROUND`（对象数值，保留小数的位数）                      | ROUND 函数（四舍五入）                   |
| 字符串 1 &amp;Iota;&amp;Iota; 字符串 2                           | &amp;Iota;&amp;Iota; 函数（拼接）                |
| `LENGTH`（字符串）                                       | LENGTH 函数（求字符串长度）              |
| `LOWER`（字符串）                                        | LOWER 函数（小写转换）                   |
| `UPPER`（字符串）                                        | UPPER 函数（大写转换）                   |
| `REPLACE`（对象字符串，替换前的字符串，替换后的字符串）  | REPLACE 函数（字符串的替换）             |
| `SUBSTRING` （对象字符串，截取的起始位置，截取的字符数） | SUBSTRING 函数（字符串的截取）           |
| `CURRENT_DATE`                                           | CURRENT_DATE 函数（当前日期）            |
| `CURRENT_TIME`                                           | CURRENT_TIME 函数（当前时间）            |
| `CURRENT_TIMESTAMP`                                      | CURRENT_TIMESTAMP 函数（当前日期和时间） |
| `EXTRACT`（日期元素 FROM 日期）                          | EXTRACT 函数（截取日期元素）             |
| `CAST`（转换前的值 AS 想要转换的数据类型）               | CAST 函数（类型转换）                    |
| `COALESCE`（数据 1, 数据 2, 数据 3....)                  | COALESCE 函数（将 NULL 转换为其他值）    |

补充：CASE 表达式。

```
CASE WHEN &lt;求值表达式&gt; THEN &lt;表达式&gt;
     WHEN &lt;求值表达式&gt; THEN &lt;表达式&gt;
     WHEN &lt;求值表达式&gt; THEN &lt;表达式&gt;
     ......
     ELSE &lt;表达式&gt;
 END
```

## 其他知识

### 常见数据类型

![data_type](images/data_type1.png)
![data_type](images/data_type2.png)

### 别名

给表设置别名，让 SQL 更简洁。例如：

`SELECT &lt;col-1&gt;,&lt;col-2&gt;,&lt;col-3&gt;,... FROM &lt;table1&gt; &lt;alias-a&gt;,&lt;table2&gt; &lt;alias-b&gt; WHERE &lt;alias-a&gt;.&lt;id&gt; = &lt;alias-b&gt;.&lt;id&gt;;`

列名也可以设置别名。例如：

`SELECT &lt;col-1&gt; &lt;alias-a&gt;,&lt;col-2&gt; &lt;alias-b&gt;,&lt;col-3&gt; &lt;alias-c&gt;,... FROM &lt;table&gt;;`  
或者  
`SELECT &lt;col-1&gt; AS &lt;alias-a&gt;,&lt;col-2&gt; AS &lt;alias-b&gt;,&lt;col-3&gt; AS &lt;alias-c&gt;,... FROM &lt;table&gt;;`

## 总结

以上整理的内容均为基础内容，更多进阶知识还需各位自行 Google。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/sql/  

