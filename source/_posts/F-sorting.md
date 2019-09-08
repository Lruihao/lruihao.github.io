---
title: F.sorting
date: 2018-06-14 22:49:27
tags:
- 2018湘潭邀请赛
- ACM
categories:
- ACM
- 2018湘潭
description:
---
![sorting.png](https://i.loli.net/2018/06/14/5b2286fcec6fc.png)
<!--more-->
**Sample Input**

2
1 1 1
1 1 2
2
1 1 2
1 1 1
3
1 3 1
2 2 1
3 1 1

**Sample Output**

2 1
1 2
1 2 3

题意：给定n个元组(a1,b1,c1),(a2,b2,c2),...,(an,bn,cn)，将其按(ai+bi)/(ai+bi+ci)的值从小到大排序，输出排序后的n个元组的原序号；
思路：编写sort里的cmp函数(形参为元组结构体元素，设为Tuple x,Tuple y)，若直接算出(x.a+x.b)*(y.a+y.b+y.c)和(y.a+y.b)*(x.a+x.b+x.c)再比较大小，这两个结果会爆unsigned long long；
可以把因式乘积展开成多项式的和，约去两式中相同的项，得到x.a*y.c+x.b*y.c和y.a*x.c+y.b*x.c，因此只需计算它俩再比较即可，结果不会爆unsigned long long 

后AC代码
```c
#include "bits/stdc++.h"
using namespace std;
struct node{
    long double a,b,c;
    int numb;
}ss[1005];

bool cmp(const node &a,const node &b){
    long double suma,sumb;
    //suma=a.a*b.c+a.b*b.c;
    //sumb=b.a*a.c+b.b*a.c;
    suma=(a.a+a.b)/(a.a+a.b+a.c);
    sumb=(b.a+b.b)/(b.a+b.b+b.c);
    if(suma!=sumb)return suma<sumb;
    return a.numb<b.numb;
}

int main(){
    int n;
    while(cin>>n){
        for(int i=0;i<n;i++){
            cin>>ss[i].a>>ss[i].b>>ss[i].c;
            ss[i].numb=i+1;
        }
        stable_sort(ss,ss+n,cmp);
        int i;
        for(i=0;i<n-1;i++)
            cout<<ss[i].numb<<" ";
        cout<<ss[i].numb<<endl;
    }
    return 0;
}
```