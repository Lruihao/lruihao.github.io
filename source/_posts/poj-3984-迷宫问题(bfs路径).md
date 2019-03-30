---
title: poj-3984-迷宫问题(bfs路径)
date: 2018-07-22 11:50:20
tags:
- BFS
- ACM
- POJ
- C++
- C
categories:
- ACM
- 搜索
password:
abstract:
message:
description:
top:
---

### [迷宫问题](http://poj.org/problem?id=3984)
Time Limit: 1000MS		Memory Limit: 65536K
Total Submissions: 32323		Accepted: 18471
### Description

定义一个二维数组： 

int maze[5][5] = {
	0, 1, 0, 0, 0,
	0, 1, 0, 1, 0,
	0, 0, 0, 0, 0,
	0, 1, 1, 1, 0,
	0, 0, 0, 1, 0,
};

它表示一个迷宫，其中的1表示墙壁，0表示可以走的路，只能横着走或竖着走，不能斜着走，要求编程序找出从左上角到右下角的最短路线。
### Input

一个5 × 5的二维数组，表示一个迷宫。数据保证有唯一解。
### Output

左上角到右下角的最短路径，格式如样例所示。
### Sample Input

0 1 0 0 0
0 1 0 1 0
0 0 0 0 0
0 1 1 1 0
0 0 0 1 0
### Sample Output

(0, 0)
(1, 0)
(2, 0)
(2, 1)
(2, 2)
(2, 3)
(2, 4)
(3, 4)
(4, 4)


对于新手来说，主要是bfs路径的问题有点难度，搞得晕晕的。

```c++
#include<iostream>
#include<cstring>
using namespace std;
int map[5][5];
int visited[5][5];
int dx[4]={0, 1, 0, -1};
int dy[4]={ 1, 0,-1, 0};
int head,tail;
struct node{
	int xx,yy;
	int fa;//父节点
}pre[25],way[25];

void BFS(int x,int y)
{
	int x1,y1;
	head=0,tail=1;
	visited[x][y]=1;
	pre[0].xx=x,pre[0].yy=y;

	while(tail>head)//栈空
	{
		x=pre[head].xx;
		y=pre[head].yy;
		if(x==4&&y==4)//结束标志
			return ;
		for(int i=0;i<4;i++)
		{
			x1=x+dx[i];y1=y+dy[i];
			if(x1>=0&&x1<=4&&y1>=0&&y1<=4)
				if(map[x1][y1]==0&&!visited[x1][y1])
				{
					pre[tail].xx=x1;
					pre[tail].yy=y1;
					pre[tail].fa=head;
					visited[x1][y1]=1;
					tail+=1;//入栈
				}
		}
		head++;//相当于出栈
	}
}
int main()
{
	int i,j;
	ios::sync_with_stdio(false);
	memset(map,0,sizeof(map));
	memset(visited,0,sizeof(visited));
	for(i=0;i<5;i++)
		for(j=0;j<5;j++)
			cin>>map[i][j];
	BFS(0,0);
	i=0;
	while(head)//逆序进行赋值输出就是通路
	{
		way[i].xx=pre[head].xx;
		way[i].yy=pre[head].yy;
		head=pre[head].fa;
		i++;
	}
	//画一下队列
	way[i].xx=0;way[i].yy=0;
	while(i!=-1)
	{
		cout<<"("<<way[i].xx<<", "<<way[i].yy<<")"<<endl;
		i--;
	}
	return 0;
}
```