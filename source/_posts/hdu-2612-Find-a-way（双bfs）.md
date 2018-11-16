---
title: hdu-2612-Find a way（双bfs）
date: 2018-07-23 12:34:42
tags:
- HDU
- ACM
- 搜索
categories:
- ACM
- 搜索
password:
abstract:
message:
description:
top:
---

### [Find a way](http://acm.hdu.edu.cn/showproblem.php?pid=2612)

圣诞节要到了，坤神和瑞瑞这对基佬想一起去召唤师大峡谷开开车。百度地图一下，发现周围的召唤师大峡谷还不少，这对基佬纠结着，该去哪一个。。。坤神：我要去左边的这个（因为离自己比较近 哈哈~）。。瑞瑞：我要去右边的这个（因为离自己比较近 嘿嘿~） ........这对基佬闹矛盾了，开车有危险了！  为了不让他们去召唤师大峡谷坑人，riot决定让他们去X召唤师大峡谷，保证他俩所走的路程和最短。每走一个点需要花费11分钟，输出他们一共花费多少时间（最短时间噢）
### Input
多组测试数据

每组数据，开始一行n，m (2<=n,m<=200)

接下来是个n x m的矩阵

'Y' 表示坤神所在的初始位置

'M' 表示瑞瑞所在的初始位置

'#' 该点禁止通行

'.' 该点可通行

'@' 召唤师大峡谷

### Output
每组测试数据，输出坤神和瑞瑞到达同一个召唤师大峡谷所花费的最短时间。

### Sample Input
4 4
Y.#@
....
.#..
@..M
4 4
Y.#@
....
.#..
@#.M
5 5
Y..@.
.#...
.#...
@..M.
`#...#`
### Sample Output
66
88
66
### Hint
对于第一组样例，坤神和瑞瑞去矩阵（4,1） 这个召唤师大峡谷，耗费的时间为 3 * 11 + 3 * 11 = 66， 去矩阵（1,4）这个召唤师大峡谷，耗费的时间为 5 * 11 + 3 * 11 = 88 。所以，最终答案：66。[思路参考](https://blog.csdn.net/ld_1090815922/article/details/72448569)


`写代码总是好粗心！！`
```c++
#include <bits/stdc++.h>
#define inf 0x3f3f3f3f     //acm中“无穷大”的一般定义
using namespace std;

const int M=202;
char mp[M][M];            //地图
int a[M][M],b[M][M];
bool vis[M][M];           //标记数组
int n,m;
int ans;
struct node
{
    int x,y,step;
};

void init()              //初始化函数
{
    ans=inf;
    for(int i=0; i<n; i++)
        for(int j=0; j<m; j++)
        {
            a[i][j]=inf;
            b[i][j]=inf;
        }
}

void bfs(int x,int y,bool flag){
    int dir[4][2]={-1,0,1,0,0,1,0,-1};
    node u,v;
    queue<node> q;  //初始化队列第一个元素
    u.x=x;
    u.y=y;
    u.step=0;
    vis[x][y]=true;
    q.push(u);
    while(!q.empty()){
        u=q.front();
        q.pop();
        if(mp[u.x][u.y]=='@'){
            if(!flag) a[u.x][u.y]=u.step;
            else b[u.x][u.y]=u.step;
        }
        for(int i=0;i<4;i++){
            int tx=u.x+dir[i][0];
            int ty=u.y+dir[i][1];
            if(tx>=0&&ty>=0&&tx<n&&ty<m&&!vis[tx][ty]&&mp[tx][ty]!='#'){//注意@和M，Y也是可以走的。
                v.x=tx;                                          //每次写搜索都忘记vis!!!!
                v.y=ty;
                vis[tx][ty]=true;  //我总是忘记。。。
                v.step=u.step+1;
                q.push(v);
            }
        }
    }
}

int main()
{
    while(~scanf("%d%d",&n,&m))
    {
        init();
        for(int i=0; i<n; i++)
            scanf("%s",mp[i]);
        for(int i=0; i<n; i++)
            for(int j=0; j<m; j++)
            {
                if(mp[i][j]=='Y')
                {
                    memset(vis,false,sizeof(vis));
                    bfs(i,j,false);
                }
                if(mp[i][j]=='M')
                {
                    memset(vis,false,sizeof(vis));  //记得再次初始化标记数组
                    bfs(i,j,true);
                }
            }
        for(int i=0; i<n; i++)
            for(int j=0; j<m; j++)
                if(mp[i][j]=='@')
                    ans=min(ans,a[i][j]+b[i][j]);
        printf("%d\n",ans*11);
    }
    return 0;
}

```