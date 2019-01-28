---
title: Dreamoon and WiFi(组合数学)
date: 2018-08-10 17:44:47
tags:
- 组合数学
- Codeforces
- ACM
- 数学
categories:
- ACM
- 组合数学
password:
abstract:
message:
description:
top:
author:
permalink:
---

**[题目链接](https://codeforces.com/contest/476/problem/B)**

### 题目大意
就是给定两个字符串，第一个字符串由"+","-"组成，第二个字符串由"+","-","?"组成，“+”代表加1，"-"代表减一，“?"代表可取正也可取负，问第二个字符串的位置和第一个字符串相等的概率是多少。

我一开始的想法是把（+1，-1）^n 看成和二项式定理一样的展开始式，只不过把乘法改为加法，然后得到公式
`c(n,0)(n+(-1)0)+c(n,1)(n-1+(-1)1)+c(n,i)(n-i+(-1)i)+...+c(n,n)(n-n+(-1)n)`
化简一下可知通项为`c(n,i)(n-2*i)`
然后我对第一个串求出位置sum,第二个串先求出已知位置sum1，然后记录下？的个数，然后遍历找出展开式中某一项n-2i+sum1==sum，这样x的系数就是可能出现位置相等的所有情况，用(n-2i)/系数和就是概率了啊，可是为什么不对呢，本地调试，数据没问题，可是交到cf上第二组都过不了，烦亏我还觉得想到一个独辟的方法呢，过不了。。。
```
//cf错误报告，思前恐后不晓得why,wtf???先码着吧
Test: #2, time: 0 ms., memory: 0 KB, exit code: 0, checker exit code: 1, verdict: WRONG_ANSWER
Input
+-+-
+-??
Output
-0.000000000000
Answer
0.500000000000
Checker Log
wrong answer 1st numbers differ - expected: '0.5000000', found: '-0.0000000', error = '0.5000000'
```
### 错误代码
```c
#include<bits/stdc++.h>
using namespace std;


int main(){
    int i,j,cnt=0;
    long long c[11][11],sum=0,sum1=0;
    for(i = 0; i < 11; i++){//杨辉三角
        c[i][0] = 1;
        c[i][i] = 1;
        for(j = 1; j < i; j++)
            c[i][j] = c[i-1][j] + c[i-1][j-1];
    }
    string a,b;
    cin>>a>>b;
    //cout<<a<<endl<<b<<endl;
    int len=a.length();
    for(i=0;i<len;i++)
        if(a[i]=='+') sum+=1;
        else sum-=1;
    for(i=0;i<b.length();i++){
        if(b[i]=='+') sum1+=1;
        else if(b[i]=='-')sum1-=1;
        if(b[i]=='?') cnt++;
    }
    if(sum==sum1&&cnt==0){
        printf("1.000000000000\n");
        return 0;
    }
    int flag=0;
    int x=0;
    for(j=0;j<=cnt;j++)
        x+=c[cnt][j];
        //cout<<x<<endl;
    for(i=0;i<=cnt;i++)
        if(cnt-2*i+sum1==sum){
            flag=1;
            long double y=c[cnt][i]*1.0/x;
            printf("%.12llf\n",y);
        }
    if(!flag)printf("0.000000000000\n");
	return 0;
}
```


想不通，没办法只好换思路。。。。

我先分别记下a,b串的'+','-','?'个数，然后后我们很容易知道，如要a,b位置相等,则加号和减号的数目，两串要相等，且a中的加号要比b中已知的加号要多，减号也要比b中已知的要多，否则打死都不会相等的，仔细比划一下就知道了。然后有z个‘?’，相当于有z个坑，让我们去填使得a,b相等。只能填+或-，设加号差等于x-p,所以概率就等于c(z,x-p)/2^z。

### AC代码
```c
#include<bits/stdc++.h>
using namespace std;


int main(){
    string a,b;
    int  x,y,z,p,q,c[11][11],i,j;
    for(i = 0; i < 11; i++){
        c[i][0] = 1;
        c[i][i] = 1;
        for(j = 1; j < i; j++)
            c[i][j] = c[i-1][j] + c[i-1][j-1];
    }

    cin>>a;
    cin>>b;
    x=y=z=p=q=0;
    for(i=0;i<a.length();i++)
        if(a[i]=='+') x++;
        else y++;
    for(i=0;i<b.length();i++){
        if(b[i]=='+') p++;
        else if(b[i]=='-') q++;
        else z++;
    }
    if(x==p&&z==0){
        printf("1.000000000000\n");
        return 0;
    }
    if(x-p<0||y-q<0) {
        printf("0.000000000000\n");
        return 0;
    }
    x=x-p;
    printf("%0.12f",c[z][x]*1.0/(2<<(z-1)));
    return 0;
}
```
几分钟写完后面的代码，心中一万头草泥马在奔腾。。。。