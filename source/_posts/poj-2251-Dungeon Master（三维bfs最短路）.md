---
title: poj-2251-Dungeon Master（三维bfs最短路）
date: 2018-07-22 12:02:32
tags:
- BFS
- ACM
- 搜索
- POJ
categories:
- ACM
- 搜索
password:
abstract:
message:
description:
top:
---
[英文原题链接](http://poj.org/problem?id=2251)

### Description - 题目描述
你被困在一个三维的空间中,现在要寻找最短路径逃生！
空间由立方体单位构成
你每次向上下前后左右移动一个单位需要一分钟
你不能对角线移动并且四周封闭
是否存在逃出生天的可能性？如果存在，则需要多少时间？

### Input - 输入
输入第一行是一个数表示空间的数量。
每个空间的描述的第一行为L，R和C（皆不超过30）。
L表示空间的高度。R和C分别表示每层空间的行与列的大小。
随后L层地牢，每层R行，每行C个字符。
每个字符表示空间的一个单元。'#'表示不可通过单元，'.'表示空白单元。你的起始位置在'S'，出口为'E'。
每层空间后都有一个空行。L，R和C均为0时输入结束。

### Output - 输出
每个空间对应一行输出。
如果可以逃生，则输出如下
Escaped in x minute(s).

　　x为最短脱离时间。

如果无法逃生，则输出如下

Trapped!

### Sample Input - 输入样例
```
3 4 5
S....
.###.
.##..
###.#

#####
#####
##.##
##...

#####
#####
#.###
####E

1 3 3
S##
#E#
###

0 0 0
```
### Sample Output - 输出样例
Escaped in 11 minute(s).
Trapped!

类似二维四个方向的bfs最短路，改成上下东西南北就行了，三维bfs最短路
```c++
#include <iostream>
#include <stdio.h>
#include <string.h>
#include <queue>
#include <algorithm>
using namespace std;

char map[35][35][35];
int vis[35][35][35];
int k,n,m,sx,sy,sz,ex,ey,ez;
int to[6][3] = {{0,0,1},{0,0,-1},{0,1,0},{0,-1,0},{1,0,0},{-1,0,0}};//上下东西南北

struct node
{
    int x,y,z,step;
};

int check(int x,int y,int z)//检查是否可走
{
    if(x<0 || y<0 || z<0 || x>=k || y>=n || z>=m)//越界判断
        return 1;
    else if(map[x][y][z] == '#')
        return 1;
    else if(vis[x][y][z])
        return 1;
    return 0;
}

int bfs()
{
    int i;
    node a,next;
    queue<node> Q;
    a.x = sx,a.y = sy,a.z = sz;
    a.step = 0;
    vis[sx][sy][sz] = 1;
    Q.push(a);
    while(!Q.empty())
    {
        a = Q.front();
        Q.pop();
        if(a.x == ex && a.y == ey && a.z == ez)
            return a.step;
        for(i = 0; i<6; i++)
        {
            next = a;
            next.x = a.x+to[i][0];
            next.y = a.y+to[i][1];
            next.z = a.z+to[i][2];
            if(check(next.x,next.y,next.z))
                continue;
            vis[next.x][next.y][next.z] = 1;
            next.step = a.step+1;
            Q.push(next);
        }
    }
    return 0;
}

int main()
{
    int i,j,r;
    while(scanf("%d%d%d",&k,&n,&m),n+m+k)
    {
        for(i = 0; i<k; i++)
        {
            for(j = 0; j<n; j++)
            {
                scanf("%s",map[i][j]);
                for(r = 0; r<m; r++)
                {
                    if(map[i][j][r] == 'S')
                    {
                        sx = i,sy = j,sz = r;
                    }
                    else if(map[i][j][r] == 'E')
                    {
                        ex = i,ey = j,ez = r;
                    }
                }
            }
        }
        memset(vis,0,sizeof(vis));
        int ans;
        ans = bfs();
        if(ans)
            printf("Escaped in %d minute(s).\n",ans);
        else
            printf("Trapped!\n");
    }

    return 0;
}
```