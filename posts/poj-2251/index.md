# poj-2251-Dungeon Master（三维 bfs 最短路）


[英文原题链接](http://poj.org/problem?id=2251)

## Description - 题目描述

你被困在一个三维的空间中，现在要寻找最短路径逃生！  
空间由立方体单位构成  
你每次向上下前后左右移动一个单位需要一分钟  
你不能对角线移动并且四周封闭  
是否存在逃出生天的可能性？如果存在，则需要多少时间？

## Input - 输入

输入第一行是一个数表示空间的数量。  
每个空间的描述的第一行为 L，R 和 C（皆不超过 30）。  
L 表示空间的高度。R 和 C 分别表示每层空间的行与列的大小。  
随后 L 层地牢，每层 R 行，每行 C 个字符。  
每个字符表示空间的一个单元。&#39;#&#39;表示不可通过单元，&#39;.&#39;表示空白单元。你的起始位置在&#39;S&#39;，出口为&#39;E&#39;。  
每层空间后都有一个空行。L，R 和 C 均为 0 时输入结束。

## Output - 输出

每个空间对应一行输出。  
如果可以逃生，则输出如下  
Escaped in x minute(s).

x 为最短脱离时间。

如果无法逃生，则输出如下

Trapped!

## Sample Input - 输入样例

    3 4 5
    S....
    .###.
    .##..
    ###.#

    #####
    ##.##
    ##...

    #####
    #.###
    ####E

    1 3 3
    S##
    #E#
    ###

    0 0 0

## Sample Output - 输出样例

    Escaped in 11 minute(s).
    Trapped!

类似二维四个方向的 bfs 最短路，改成上下东西南北就行了，三维 bfs 最短路

&lt;!-- markdownlint-disable MD046 --&gt;

```cpp
#include &lt;iostream&gt;
#include &lt;stdio.h&gt;
#include &lt;string.h&gt;
#include &lt;queue&gt;
#include &lt;algorithm&gt;
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
    if(x&lt;0 || y&lt;0 || z&lt;0 || x&gt;=k || y&gt;=n || z&gt;=m)//越界判断
        return 1;
    else if(map[x][y][z] == &#39;#&#39;)
        return 1;
    else if(vis[x][y][z])
        return 1;
    return 0;
}

int bfs()
{
    int i;
    node a,next;
    queue&lt;node&gt; Q;
    a.x = sx,a.y = sy,a.z = sz;
    a.step = 0;
    vis[sx][sy][sz] = 1;
    Q.push(a);
    while(!Q.empty())
    {
        a = Q.front();
        Q.pop();
        if(a.x == ex &amp;&amp; a.y == ey &amp;&amp; a.z == ez)
            return a.step;
        for(i = 0; i&lt;6; i&#43;&#43;)
        {
            next = a;
            next.x = a.x&#43;to[i][0];
            next.y = a.y&#43;to[i][1];
            next.z = a.z&#43;to[i][2];
            if(check(next.x,next.y,next.z))
                continue;
            vis[next.x][next.y][next.z] = 1;
            next.step = a.step&#43;1;
            Q.push(next);
        }
    }
    return 0;
}

int main()
{
    int i,j,r;
    while(scanf(&#34;%d%d%d&#34;,&amp;k,&amp;n,&amp;m),n&#43;m&#43;k)
    {
        for(i = 0; i&lt;k; i&#43;&#43;)
        {
            for(j = 0; j&lt;n; j&#43;&#43;)
            {
                scanf(&#34;%s&#34;,map[i][j]);
                for(r = 0; r&lt;m; r&#43;&#43;)
                {
                    if(map[i][j][r] == &#39;S&#39;)
                    {
                        sx = i,sy = j,sz = r;
                    }
                    else if(map[i][j][r] == &#39;E&#39;)
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
            printf(&#34;Escaped in %d minute(s).\n&#34;,ans);
        else
            printf(&#34;Trapped!\n&#34;);
    }

    return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/poj-2251/  

