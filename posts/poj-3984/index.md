# poj-3984-迷宫问题 (bfs 路径）


[迷宫问题](http://poj.org/problem?id=3984)

Time Limit: 1000MS Memory Limit: 65536K  
Total Submissions: 32323 Accepted: 18471

## Description

定义一个二维数组：

    int maze[5][5] = {
      0, 1, 0, 0, 0,
      0, 1, 0, 1, 0,
      0, 0, 0, 0, 0,
      0, 1, 1, 1, 0,
      0, 0, 0, 1, 0,
    };

它表示一个迷宫，其中的 1 表示墙壁，0 表示可以走的路，只能横着走或竖着走，不能斜着走，要求编程序找出从左上角到右下角的最短路线。

## Input

一个 5 × 5 的二维数组，表示一个迷宫。数据保证有唯一解。

## Output

左上角到右下角的最短路径，格式如样例所示。

## Sample Input

    0 1 0 0 0
    0 1 0 1 0
    0 0 0 0 0
    0 1 1 1 0
    0 0 0 1 0

## Sample Output

    (0, 0)
    (1, 0)
    (2, 0)
    (2, 1)
    (2, 2)
    (2, 3)
    (2, 4)
    (3, 4)
    (4, 4)

对于新手来说，主要是 bfs 路径的问题有点难度，搞得晕晕的。

## 题解

&lt;!-- markdownlint-disable code-block-style --&gt;

```cpp
#include&lt;iostream&gt;
#include&lt;cstring&gt;
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
  visited[x][y]=1;
  pre[0].xx=x,pre[0].yy=y;

  while(tail&gt;head)//栈空
  {
    x=pre[head].xx;
    y=pre[head].yy;
    if(x==4&amp;&amp;y==4)//结束标志
      return ;
    for(int i=0;i&lt;4;i&#43;&#43;)
    {
      x1=x&#43;dx[i];y1=y&#43;dy[i];
      if(x1&gt;=0&amp;&amp;x1&lt;=4&amp;&amp;y1&gt;=0&amp;&amp;y1&lt;=4)
        if(map[x1][y1]==0&amp;&amp;!visited[x1][y1])
        {
          pre[tail].xx=x1;
          pre[tail].yy=y1;
          pre[tail].fa=head;
          visited[x1][y1]=1;
          tail&#43;=1;//入栈
        }
    }
    head&#43;&#43;;//相当于出栈
  }
}
int main()
{
  int i,j;
  ios::sync_with_stdio(false);
  memset(map,0,sizeof(map));
  memset(visited,0,sizeof(visited));
  for(i=0;i&lt;5;i&#43;&#43;)
    for(j=0;j&lt;5;j&#43;&#43;)
      cin&gt;&gt;map[i][j];
  BFS(0,0);
  i=0;
  while(head)//逆序进行赋值输出就是通路
  {
    way[i].xx=pre[head].xx;
    way[i].yy=pre[head].yy;
    head=pre[head].fa;
    i&#43;&#43;;
  }
  //画一下队列
  way[i].xx=0;way[i].yy=0;
  while(i!=-1)
  {
    cout&lt;&lt;&#34;(&#34;&lt;&lt;way[i].xx&lt;&lt;&#34;, &#34;&lt;&lt;way[i].yy&lt;&lt;&#34;)&#34;&lt;&lt;endl;
    i--;
  }
  return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/poj-3984/  

