---
title: 简单评论模块--php表单练习
date: 2019-07-19 11:38:59
tags:
categories:
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

{% note info no-icon %}
简单模仿了一个评论模板，当然肯定是没有博客的valine这么强大的hhhh，
{% label warning@PHP表单安全性的重要提示! %}
`$_SERVER["PHP_SELF"]`变量能够被黑客利用！
如果页面中使用了`PHP_SELF`，用户能够输入下划线然后执行跨站点脚本（XSS）。
比如说注入js脚本等，valine以前的版本也有过这样的漏洞。

`跨站点脚本（Cross-site scripting，XSS）`是一种计算机安全漏洞类型，常见于 Web 应用程序。XSS 能够使攻击者向其他用户浏览的网页中输入客户端脚本。
{% endnote %}

<!--more-->
可以像valine一样在用户输入完后保留输入，还有一些正则控制输入提示等简单功能。UI就丑爆了算了。。。
```xml 完整表单
<!DOCTYPE HTML> 
<html>
<head>
<style>
.error {color: #FF0000;}
.main{
   width: 20%;
   height: 100%;
   border: 1px #000 solid;
   padding: 20px;
}
</style>
</head>
<body> 

<?php
// 定义变量并设置为空值
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    // 检查名字是否包含字母和空格
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed"; 
    }
  }

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // 检查电邮地址语法是否有效
    if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) {
      $emailErr = "Invalid email format"; 
    }
  }

  if (empty($_POST["website"])) {
    $website = "";
  } else {
    $website = test_input($_POST["website"]);
    // 检查 URL 地址语言是否有效（此正则表达式同样允许 URL 中的下划线）
    if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%
    =~_|]/i",$website)) {
      $websiteErr = "Invalid URL"; 
    }
  }

  if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
  }

  if (empty($_POST["gender"])) {
    $genderErr = "Gender is required";
  } else {
    $gender = test_input($_POST["gender"]);
  }

}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}
?>
<div class="main">
   <h2>PHP 验证实例</h2>
   <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>"> 
      姓名：<input type="text" name="name" value="<?php echo $name;?>">
      <span class="error">* <?php echo $nameErr;?></span>
      <br><br>
      性别:
      <input type="radio" name="gender" <?php if (isset($gender) && $gender=="女性") echo "checked";?> value="女性">女性
      <input type="radio" name="gender" <?php if (isset($gender) && $gender=="男性") echo "checked";?> value="男性">男性
      <span class="error">* <?php echo $genderErr;?></span>
      <br><br>
      电邮：<input type="text" name="email" value="<?php echo $email;?>">
      <span class="error">* <?php echo $emailErr;?></span>
      <br><br>
      网址：<input type="text" name="website" value="<?php echo $website;?>">
      <span class="error"><?php echo $websiteErr;?></span>
      <br><br>
      评论：<textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>
      <br><br>
      <input type="submit" name="submit" value="提交">
      <h2>你的输入是：</h2>
      <?php
         echo $name."<br/>";
         echo $gender."<br/>";
         echo $email."<br/>";
         echo $website."<br/>";
         echo $comment."<br/>";
      ?>
      <br/> 
   </form>
</div>
</body>
</html>
```
{% asset_img comment.png 实际效果 %}