---
title: 大数乘法
date: 2019-03-28 22:50:43
tags:
- 数学
- 大数运算
- ACM
- C
- 算法
categories:
- ACM
- 算法
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
---

> 大数乘法c版(基础写法)

<!--more-->

```cpp
#include<stdio.h>

#include<string.h>

#define N 202

int main() {

  int a[N] = {0}, b[N] = {0}, c[404] = {0}, la, lb, i, j,k, d = 0, n1, n2;

  int get(int *p);

  void change(int *a, int *b, int n);

  la = get(a);

  lb = get(b);

  n1 = la > lb ? la : lb;

  n2 = la < lb ? la : lb;

  if (la < lb)

    change(a, b, lb);

  for (i = 0; i < n2; i++) {

    for (j = 0; j < n1; j++) {

        c[j + i] += (b[i] * a[j] + d)%10;

        d = (b[i] * a[j] + d) / 10;

        if (c[j+i]>9){

        d++;

            c[j+i]%=10;

        }

        if (a[j+1]==0&&d!=0){

        k=j+i+1;

            c[k]=d;

        }

    }

    d=0;

  }

  k=k>(j+i-2)?k:j+i-2;

  for (i = k; i >= 0; i--)

    printf("%d", c[i]);

  return 0;

}


int get(int *p) {

  char x[N];

  int l, i, ex = 0;

  scanf("%s", x);

  l = strlen(x);

  while (x[ex] == '0')

    ex++;

  for (i = ex; i < l; i++)

    *(p + l - i - 1) = x[i] - '0';

  return l - ex;

}


void change(int *a, int *b, int n) {

  int i, t;

  for (i = 0; i < n; i++) {

    t = a[i];

    a[i] = b[i];

    b[i] = t;

  }

}
```

程序运行结果
```
1234567890123456789
98765432109876543210
121932631124517831023715309991126352690
Process returned 0 (0x0)   execution time : 25.318 s
Press any key to continue.
```