---
title: POJ-3278-Catch That Cow(bfs)
date: 2018-07-22 12:10:32
tags:
- BFS
- ACM
- 搜索
- POJ
categories:
- ACM
- 搜索
---

Farmer John has been informed of the location of a fugitive cow and wants to catch her immediately. He starts at a point N (0 ≤ N ≤ 100,000) on a number line and the cow is at a point K (0 ≤ K ≤ 100,000) on the same number line. Farmer John has two modes of transportation: walking and teleporting.

* Walking: FJ can move from any point X to the points X - 1 or X + 1 in a single minute
* Teleporting: FJ can move from any point X to the point 2 × X in a single minute.

If the cow, unaware of its pursuit, does not move at all, how long does it take for Farmer John to retrieve it?

###Input
Line 1: Two space-separated integers: N and K
###Output
Line 1: The least amount of time, in minutes, it takes for Farmer John to catch the fugitive cow.
###Sample Input
5 17
###Sample Output
4
###Hint
The fastest way for Farmer John to reach the fugitive cow is to move along the following path: 5-10-9-18-17, which takes 4 minutes.

###题意：
农场主的牛不见了，主人和牛在一条直线上，且牛没有新的目标，它不会走动，主人的位置是你n，牛的位置是k，主人可以有三种走路的方法，右左（距离+-1），闪现（距离+x,x为当前位置），每走一步，一分钟，问几分钟主人能找到牛。bfs搜索方向即为三个“方向”。搜索所有走法；

```
#include"iostream"
#include<queue>
#include"string.h"
using namespace std;

int n,k;
bool sign[200007];

struct node{
    int x,step;
};

bool check(int a)
{
    if(!sign[a]&&a>=0&&a<110000)
        return true;
    return false;
}

void bfs()
{
    node u,v;
    queue<node> q;
    v.x=n;//初始化起点
    v.step=0;
    q.push(v);
    sign[v.x]=true;
    while(!q.empty()){
        u=q.front();
        q.pop();
        if(u.x==k){
            cout<<u.step<<endl;
            return ;
        }

        //三种前进方向，左右和闪现
        v=u;
        v.x++;
        v.step++;
        if(check(v.x)){
            sign[v.x]=true;
            q.push(v);
        }

        v=u;
        v.x--;
        v.step++;
        if(check(v.x)){
            sign[v.x]=true;
            q.push(v);
        }

        v=u;
        v.x=2*v.x;
        v.step++;
        if(check(v.x)){
            sign[v.x]=true;
            q.push(v);
        }
    }
}

int main()
{
    cin>>n>>k;
    memset(sign,0,sizeof(sign));
    bfs();
    return 0;
}
```