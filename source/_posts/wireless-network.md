---
title: wireless network-POJ-2236(并查集)
date: 2018-07-31 11:10:54
tags:
- 并查集
- ACM
- POJ
- C++
- C
categories:
- ACM
- 并查集
password:
abstract:
message:
description:
top:
---

## 题目链接：[wireless network](http://poj.org/problem?id=2236)
## 翻译：
<!--more-->

南亚发生了一次地震。ACM (Asia Cooperated Medical 亚洲联合医疗队) 已经为膝上型电脑搭建了一个无线网络，但受到了一次不可预知的余震攻击，因此网络中的所有电脑都被破坏了。电脑被逐台修复，网络逐步恢复了工作。由于受到硬件的约束，每台电脑只能与距离它不超过 d 米的其它电脑直接通信。但每台电脑可被看作其它两台电脑的通信中转点，也就是说，如果电脑 A 和电脑 B 可以直接通信，或存在一台电脑 C 既可与 A 也可与 B 通信，那么电脑 A 和电脑 B 之间就能够通信。 

在处理网络修复的过程中，工作人员们在任何一个时刻，可以执行两种操作：维修一台电脑，或测试两台电脑是否能够通信。请您找出全部的测试操作。 
### 输入
第一行包含了两个整数 N 和 d (1 <= N <= 1001, 0 <= d <= 20000)。此处 N 是电脑的数目，编号从 1 到 N；同时，D 是两台电脑之间能够直接通信的最大距离。接下来的 N 行，每行包含两个整数 xi, yi (0 <= xi, yi <= 10000)，表示 N 台电脑的坐标。从第 (N+1) 行到输入结束，是逐一执行的操作，每行包含一个操作，格式是以下两者之一： 
1. "O p" (1 <= p <= N)，表示维护电脑 p 。 
2. "S p q" (1 <= p, q <= N)，表示测试电脑 p 和 q 是否能够通信。 

输入不超过 300000 行。 
### 输出
对于每个测试操作，如果两台电脑能够通信，则打印 "SUCCESS"；否则，打印 "FAIL"。
### 示例输入
4 1
0 1
0 2
0 3
0 4
O 1
O 2
O 4
S 1 4
O 3
S 1 4
### 示例输出
FAIL
SUCCESS

### AC代码：
```c
#include "iostream"
#include "cstring"
using namespace std;
int pre[1005];
int x[1005],y[1005],use[1005];

int findd(int root){
    int son,t;
    son=root;
    while(root!=pre[root])
        root=pre[root];
    while(son!=root){
        t=pre[son];
        pre[son]=root;
        son=t;
    }
    return root;
}

void join(int x,int y){
    int fx=findd(x),fy=findd(y);
    if(fx!=fy)
        pre[fx]=fy;
}

int dis(int i,int num,int d){
    d=d*d;
    int xx=x[i]-x[num];
    int yy=y[i]-y[num];
    if((xx*xx+yy*yy)<=d)
        return 1;
    return 0;
}

int main(){
    int n,d;
    char s;
    memset(use,0,sizeof(use));
    cin>>n>>d;
    for(int i=0;i<=n;i++)
        pre[i]=i;
    for(int i=1;i<=n;i++)
        cin>>x[i]>>y[i];
    while(cin>>s){
        if(s=='O'){
            int num;
            cin>>num;
            use[num]=1;
            findd(num);//路径压缩
            for(int i=1;i<=n;i++)
                if(i!=num&&use[i]==1&&dis(i,num,d))//修好了，且可以被合并（自己除外）
                    join(i,num);
        }
        else if(s=='S'){
            int q,p;
            cin>>q>>p;
            if(findd(q)==findd(p))
                cout<<"SUCCESS"<<endl;
            else cout<<"FAIL"<<endl;
        }
    }
    return 0;
}
```