---
title: poj-1321 棋盘问题（dfs）
date: 2018-07-22 11:58:14
tags:
- DFS
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
Time Limit: 1000MS

Memory Limit: 10000K
Total Submissions: 63659

Accepted: 30423
### Description
在一个给定形状的棋盘（形状可能是不规则的）上面摆放棋子，棋子没有区别。要求摆放时任意的两个棋子不能放在棋盘中的同一行或者同一列，请编程求解对于给定形状和大小的棋盘，摆放k个棋子的所有可行的摆放方案C。
### Input
输入含有多组测试数据。 
每组数据的第一行是两个正整数，n k，用一个空格隔开，表示了将在一个n * n的矩阵内描述棋盘，以及摆放棋子的数目。 n <= 8 , k <= n 
当为-1 -1时表示输入结束。 
随后的n行描述了棋盘的形状：每行有n个字符，其中 # 表示棋盘区域， . 表示空白区域（数据保证不出现多余的空白行或者空白列）。 
### Output
对于每一组数据，给出一行输出，输出摆放的方案数目C （数据保证C<2^31）。
### Sample Input
```
2 1
#.
.#
4 4
...#
..#.
.#..
#...
-1 -1
```
### Sample Output
```
2
1
```
### Source
蔡错@pku
### 思路

* 下子方案数就相当于遍历图的不同遍历数，用dfs变形。
* 理解以下数据还有样例应该差不多了

`3 2`
`#..`
`.#.`
`..#`
`3`

`3 2`
`#..`
`.##`
`..#`
`4`

### AC代码
```c++
#include<iostream>
#include<cstdio>
#include<cstring>
#include<algorithm>
using namespace std;
char mp[8][8];
int v[8];
int n,k,w,r;//状态计数器r
void dfs(int x)//逐行深搜，x为当前搜索行
{
    if(w==k)//下子数w
    {
        r++;return;
    }
    if(x==n)return;
    for(int i=0;i<n;i++)
    {
        if(v[i]!=1&&mp[x][i]=='#')
        {
            v[i]=1;
            w++;
            dfs(x+1);
            w--;
            v[i]=0;
        }
    }
    dfs(x+1);//搜索下一行
}

int main()
{
    while(cin>>n>>k)
    {
        if(n==-1&&k==-1)
            return 0;
        memset(mp,0,sizeof(mp));
        memset(v,0,sizeof(v));
        for(int i=0;i<n;i++)
            cin>>mp[i];
        w=0;r=0;
        dfs(0);
        cout<<r<<endl;
    }
}

```
[传送门](https://blog.csdn.net/hurmishine/article/details/49835913)