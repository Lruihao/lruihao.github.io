---
title: Wannafly挑战赛20-染色
date: 2018-07-22 11:46:25
tags:
- ACM
- Nowcoder
categories:
- ACM
password:
abstract:
message:
description:
top:
---
链接:https://www.nowcoder.com/acm/contest/133/A
来源:牛客网

### 题目描述

现在有一棵被Samsara-Karma染了k种颜色的树，每种颜色有着不同的价值,Applese觉得Samsara-Karma染的太难看了，于是打算把整棵树重新染成同一种颜色       但是，由于一些奥妙重重的原因，每一次染色Applese可以选择两个有边相连的点，将其中一个染成另一个的颜色。而进行一次这样的操作需要付出两种颜色价值和的代价，
现在，Applese的钱要用来买书(game)，所以他想要最小化代价    
### 输入描述:
输入包括若干行第一行包括一个数n，表示这棵树有n个节点第二行包括n个数，第i个数表示第i个节点的颜色coli
注意：一个颜色的标号即价值接下来的n - 1行，每行包括两个数u, v，表示u节点与v节点之间有一条无向边n ≤ 100000, 1 ≤ coli ≤ 1e9，数据保证是一棵树
### 输出描述:
输出包括一行第一行包括一个数，表示最小代价


### 示例1



#### 输入


4
2 3 4 3
1 2
2 3
3 4



#### 输出


12


蒟蒻暴力枚举`-_-!`
```c++
#include <bits/stdc++.h>

using namespace std;

const int MAXN=1e5+10;

int a[MAXN];

map<int, int >ma;

set<int>se;

int x[MAXN],y[MAXN];

int main()

{

    int n;

    scanf("%d",&n);

    for (int i = 1; i <=n ; ++i) {

        scanf("%d",&a[i]);

        se.insert(a[i]);

    }



    for (int i = 1; i <n ; ++i) {

        scanf("%d%d",&x[i],&y[i]);

    }

    long long ans=1e14,sum=0;

    set<int>::iterator it;

    for (it=se.begin(); it !=se.end() ; ++it) {

        sum=0;

        for (int j = 1; j <=n ; ++j) {

            if((*it)!=a[j]) sum+=((*it)+a[j]);

        }

        ans=min(sum,ans);

    }

    printf("%lld\n",ans);

    return 0;

}
```
最后想说这都过了什么鬼，不会数据这么弱吧？？！?我只枚举了最小的价值颜色的情况，唉，不管了不管了。
```

#include<bits/stdc++.h>
using namespace std;
int a[1000000],n,m,k=1,t,ans=0;
int main()
{
    scanf("%d",&n);
    for(int i=1;i<=n;++i)
    scanf("%d",&a[i]);
    sort(a+1,a+n+1);
    for(int i=2;i<=n;++i)
        if(a[i]!=a[1])
            ans+=a[i]+a[1];
    printf("%d",ans);
    return 0;
}


```