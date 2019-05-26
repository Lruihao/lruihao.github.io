---
title: 判断三角形的黑盒测试
date: 2019-05-26 18:50:53
tags:
- 黑盒测试
- C
categories:
- others
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


{% note %}
黑盒测试着重测试软件功能，它并不涉及程序的内部结构和内容特性，主要根据规格说明，只依靠被测试程序的输入和输出之间关系或程序的功能来设计测试用例。
白盒测试则清楚程序内部的结构以及是如何运作的，因此白盒测试需要对系统内部的结构和工作原理有一个清楚的了解。
{% endnote %}

<!--more-->
# 程序

```cpp
#include<stdio.h>
#include<stdlib.h>
#define N 2<<25

int a=N,b=N,c=N,d=N;
void shuru();
void panduan(int a1,int b1,int c1);
int main()
{
    char se;
    shuru();
    panduan(a,b,c);
    while(1)
    {
        printf("是否要继续y or n :");
        scanf("%c",&se);
        if(se=='\n') scanf("%c",&se);
        switch(se)
        {
        case 'y':
        shuru();
    	  panduan(a,b,c);
        break;
        case 'n':
        return 0;
        }
    }
}
void shuru()
{
    printf("Please enter 三角形三边 (a,b,c)\n");
    while(!scanf("%d,%d,%d,%d",&a,&b,&c,&d)){//判断非数字字符
        fflush(stdin);//清理缓存
        a=N;b=N;c=N;d=N;
    	 printf("输入错误\n");
    }
    fflush(stdin);
    while((a<1||a>100)||(b<1||b>100)||(c<1||c>100)||d!=N)
    {
        if(b==N||c==N||d!=N) printf("输入错误\n");//边数为1、2、4条
        else if(a==0||b==0||c==0) printf("边长不能为0\n");
        else if(a<0||b<0||c<0) printf("边长不能为负\n");
        else printf("Please enter 1-100之间的整数\n");
        a=N;b=N;c=N;d=N;
        while(!scanf("%d,%d,%d,%d",&a,&b,&c,&d)){//判断非数字字符
            fflush(stdin);//清理缓存
            a=N;b=N;c=N;d=N;
            printf("输入错误\n");
        }
        fflush(stdin);
    }
}
void panduan(int a1,int b1,int c1)
{
    if(a1+b1>c1&&b1+c1>a1&&a1+c1>b1)
    {
        if(a1==b1&&a1==c1)
            printf("等边三角形\n");
        else if(a1==b1||a1==c1||b1==c1)
            printf("等腰三角形\n");
        else
            printf("一般三角形\n");
    }
    else
        printf("非三角形\n");
}
```

# 测试

{% asset_img 1.png %}
{% asset_img 2.png %}
{% asset_img 3.png %}