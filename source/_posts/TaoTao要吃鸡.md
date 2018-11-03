---
title: TaoTao要吃鸡
date: 2018-07-22 10:55:21
tags:
- 背包问题
- Nowcoder
categories:
- ACM
- 背包问题
description: 2018年全国多校算法寒假训练营练习比赛（第二场）B(0 1背包变化 特殊处理一个物品)
top:
---


链接：https://www.nowcoder.com/acm/contest/74/B
来源：牛客网

###题目描述


 Taotao的电脑带不动绝地求生，所以taotao只能去玩pc版的荒野行动了，
和绝地求生一样，游戏人物本身可以携带一定重量m的物品，装备背包
之后可以多携带h（h为0代表没有装备背包）重量的东西。玩了几天
taotao发现了一个BUG，当装备背包之后，如果可携带重量没有满，就
可以拿一个任意重的东西。（解释看样例）有一天taotao空降到了一个
奇怪的岛上，岛上有n件装备，每个装备都有重量Wi和威力值Vi,但taotao
不认识这些装备，所以他来求助你，挑选威力最大的装备，帮助他吃鸡。

###输入描述:
本题有多组输入（小于10），当n=0时结束输入。第一行输入n,m,h。n，m，h为整数，并且0<=n,m,h<=100，接下来n行，每行输入第i个物品的物品的重量Wi和威力值Vi。0<=Wi,Vi<=100.
###输出描述:
输出最大威力值，每组输出一行。

###示例1

####输入

3 3 3
2 3
3 2
2 3
0


####输出

8


###说明

可携带的总重量为6，当拿了前两件装备，此时容量为5/6，还可以再拿第三件物品。

思路：0-1背包的变形题目，h=0的时候为背包的模板，h！=0的时候枚举每一个需要特殊处理的物品再背包
```c++
#include <bits/stdc++.h>
using namespace std;

int v[105];
int w[105];
int n,m,h;
int dp[205];
int main()
{

    while(scanf("%d",&n)==1&&n!=0){

        int sum=0;

        scanf("%d%d",&m,&h);

        for(int i=1;i<=n;i++)

            scanf("%d%d",&w[i],&v[i]);

        if(h==0){

            memset(dp,0,sizeof(dp));

            for(int i=1;i<=n;i++)    //前i个物品

                for(int j=m;j>=w[i];j--)   //枚举背包重量

                dp[j]=max(dp[j],dp[j-w[i]]+v[i]);  //

               sum=dp[m];

        }

        else{
             m+=h
            for(int k=1;k<=n;k++) //枚举可以被剩下的物品
            {
                memset(dp,0,sizeof(dp));

                for(int i=1;i<=n;i++){  //前i个物品

                    if(i!=k){

                       for(int j=m;j>=w[i];j--)   //枚举背包重量

                       dp[j]=max(dp[j],dp[j-w[i]]+v[i]);

                    }

                } //留下来一个重量，即初始化威力为那个重量的威力

               for(int j=m-1;j>=m-w[k];j--)   //枚举背包重量+剩下物品

                dp[m]=max(dp[m],dp[j]+v[k]);

               // printf("%d\n",dp[m]);

               sum=max(sum,dp[m]);
            }
        }
        printf("%d\n",sum);
    }
    return 0;
}

```

