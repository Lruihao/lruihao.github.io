---
title: java水仙花数（循环）
date: 2019-01-14 17:30:24
tags:
- 水仙花数
- 循环语句
- java
categories: java
password:
abstract:
message:
description:
top:
author:
permalink:
---

> 水仙花数（Narcissistic number）也被称为超完全数字不变数（pluperfect digital invariant, PPDI）、自恋数、自幂数、阿姆斯壮数或阿姆斯特朗数（Armstrong number），水仙花数是指一个 3 位数，它的每个位上的数字的 3次幂之和等于它本身（例如：1^3 + 5^3+ 3^3 = 153）。

<!--more-->
### 定义
水仙花数只是自幂数的一种，严格来说3位数的3次幂数才称为水仙花数。
附：其他位数的自幂数名字
一位自幂数：独身数
两位自幂数：没有
三位自幂数：水仙花数
四位自幂数：四叶玫瑰数
五位自幂数：五角星数
六位自幂数：六合数
七位自幂数：北斗七星数
八位自幂数：八仙数
九位自幂数：九九重阳数
十位自幂数：十全十美数

```java
package xunhuan;

import java.util.Scanner;

public class shuixianhua {

	public static void main(String[] agrs) {
        System.out.print("指定最大位数N:");
        Scanner input = new Scanner(System.in);
        int N = input.nextInt();
        input.close();
        for (int i = 3; i <= N; i++) {
            int a[] = new int[i];
            int num = (int) Math.pow(10, i - 1) + 1;
            System.out.print(i + "位的水仙花数有：\t");
            while (num <= Math.pow(10, i)) {
                int sum = 0;
                for (int j = 0; j < i; j++)
                    a[j] = (int) (num / Math.pow(10, j) % 10);//取各个位的数
                for (int j = 0; j < i; j++) 
                    sum = sum + (int) Math.pow(a[j], i);
                if (num == sum)
                    System.out.print(num + "\t");
                num++;
            }
            System.out.print("\n");
        }
    }

}
```

由于int精度限制，最多算到9位，而且使用常规算法，算到8，9位的时候就特别慢了。
```
指定最大位数N:10
3位的水仙花数有：	153	370	371	407	
4位的水仙花数有：	1634	8208	9474	
5位的水仙花数有：	54748	92727	93084	
6位的水仙花数有：	548834	
7位的水仙花数有：	1741725	4210818	9800817	9926315	
8位的水仙花数有：	24678050	24678051	88593477	
9位的水仙花数有：	146511208
```