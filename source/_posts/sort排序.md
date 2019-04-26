---
title: sort排序
date: 2018-06-14 20:23:03
tags:
- C++
- 排序
- STL
- ACM
categories:
- ACM
- STL
description:
---

sort使用`#include<algorithm>`头文件，

sort(开始地址，结束地址，排序方式)，其中第三参数可以没有，则默认为升序排序。

或者简单的用
`less<参数类型>()`表示升序

`greater<参数类型>()`表示降序

也可以用一个bool型函数，比如：
```
bool cmp(int a,int b){

       return a>b;//表从大到小，即降序

}
```

假设自己定义了一个结构体node
```
typedef struct node

{

int a;

int b;

double c;

}note;
```

有一个node类型的数组node arr[100]，想对它进行排序：先按a值升序排列，如果a值相同，再按b值降序排列，如果b还相同，就按c降序排列。就可以写这样一个比较函数：

以下是代码片段：
```
bool cmp(node x,node y)

{

if(x.a!=y.a) return x.a<y.a;

if(x.b!=y.b) return x.b>y.b;

return x.c>y.c;

}
```

sort()函数是完全通用的，你可以用它来操作几乎任何数据集合，包括链表，容器和数组，数组类型可以是int,char等。

实例:先降序再升序
```c
#include<iostream>

#include<algorithm>

using namespace std;

typedef struct data{

    int a;

    double b;

}date;

bool cmp(date a,date b){

    if(a.b!=b.b) return a.b>b.b;

    return a.a<b.a;

}

int main(){

    date a[3]={{5,56.5},{4,56.5},{8,85}};

    sort(a,a+3,cmp);

    for(int i=0;i<3;i++)

        cout<<a[i].a<<"-"<<a[i].b<<endl;

    cout<<endl;

    return 0;

}​​​​
```
[传送门](https://weibo.com/ttarticle/p/show?id=2309404237869425234111&mod=zwenzhang)