---
title: java正则表达式练习
date: 2019-04-18 22:04:21
tags:
- regex
- Backend
- JAVA
categories:
- Backend
- JAVA
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
repost:
---

# 邮箱

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexDemo {
    public static void main(String[] args) {
//       Pattern类 正则表达式的编译表示。
        Pattern pattern = Pattern.compile("^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$");
        String[] emails = {"admin@lruihao.cn", "lruihao.cn"};
        for (String email :
                emails) {
//Matcher 通过解释Pattern对字符序列执行匹配操作的引擎
            Matcher matcher = pattern.matcher(email);
            System.out.println(email + "匹配结果：" + matcher.matches());
        }
    }
}
```
```java 结果
admin@lruihao.cn匹配结果：true
lruihao.cn匹配结果：false
```

# 电话

```java
package base;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexTest {
	public static void main(String[] args) {
		Pattern patter=Pattern.compile("^[1][3,4,5,7,8][0-9]{9}$");
		Scanner sc=new Scanner(System.in);
		String telnum=sc.nextLine();
		sc.close();
		Matcher matcher=patter.matcher(telnum);
		System.out.println(telnum+"匹配结果： "+matcher.matches());
	}
}
```

```java
/**
 * 获取当前的httpSession
 * @return
 */
public static HttpSession getSession() {
 return getRequest().getSession();
}
/**
 * 手机号验证
 * @param str
 * @return 验证通过返回true
 */
public static boolean isMobile(final String str) {
  Pattern p = null;
  Matcher m = null;
  boolean b = false;
  p = Pattern.compile("^[1][3,4,5,7,8][0-9]{9}$"); // 验证手机号
  m = p.matcher(str);
  b = m.matches();
  return b;
}
/**
 * 电话号码验证
 * @param str
 * @return 验证通过返回true
 */
public static boolean isPhone(final String str) {
  Pattern p1 = null, p2 = null;
  Matcher m = null;
  boolean b = false;
  p1 = Pattern.compile("^[0][1-9]{2,3}-[0-9]{5,10}$"); // 验证带区号的
  p2 = Pattern.compile("^[1-9]{1}[0-9]{5,8}$");     // 验证没有区号的
  if (str.length() > 9) {
    m = p1.matcher(str);
    b = m.matches();
  } else {
    m = p2.matcher(str);
    b = m.matches();
  }
  return b;
}
```

# 身份证

```java
/* 身份证正则表达式16或18 */
   public static final String IDCARD="((11|12|13|14|15|21|22|23|31|32|33|34|35|36|37|41|42|43|44|45|46|50|51|52|53|54|61|62|63|64|65)[0-9]{4})" +
           "(([1|2][0-9]{3}[0|1][0-9][0-3][0-9][0-9]{3}" +
           "[Xx0-9])|([0-9]{2}[0|1][0-9][0-3][0-9][0-9]{3}))";
```