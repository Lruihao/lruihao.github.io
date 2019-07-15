---
title: php函数学习
date: 2019-07-15 11:37:33
tags:
- php
categories: php
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


{% note primary no-icon %}
练习php函数的基本使用。
注：
必选参数在可选参数的前面。
可在函数中定义函数，需要先调用外层函数才能调用内层函数。
{% endnote %}

<!--more-->

```php php函数动态创建表格
<?php
/*
创建表格
*/
function createTable($rows,$cols,$bgcolor='pink',$content='x'){
	$table = "<table border='1' bgcolor='{$bgcolor}' cellpadding='10' cellspacing='0' width='50%' >";
	for($i=1;$i<=$rows;$i++){
		$table.="<tr>";
		for($j=1;$j<=$cols;$j++){
			$table.="<td>{$content}</td>";
		}
		$table .="</tr>";
	}
	$table.="</table>";
	return $table;
}
echo createTable(5,5,'pink','hello lruihao');
?>
```
{% fi ./phpfunc/table.png,php创建表格,php创建表格 %}