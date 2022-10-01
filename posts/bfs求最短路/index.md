# BFS 求最短路


假设有一个 n 行 m 列的迷宫，每个单位要么是空地（用 1 表示）要么是障碍物（用 0 表示）.  
如和找到从起点到终点的最短路径？利用 BFS 搜索，逐步计算出每个节点到起点的最短距离，  
以及最短路径每个节点的前一个节点。最终将生成一颗以起点为根的 BFS 树。此时 BFS 可以求出任意一点到起点的距离。  

<!--more-->

## 图

    1 3  0 21 23
    2 0 17 20 22
    4 0 14  0  0
    5 0 12 15 18
    6 8 10  0 19
    7 9 11 13 16

## 输入

    6 5
    1 1 0 1 1
    1 0 1 1 1
    1 0 1 0 0
    1 0 1 1 1
    1 1 1 0 1
    1 1 1 1 1

## 输出

    1 2 4 5 6 8 10 12 14 17 20 21 23
    12//最短距离

## 代码
```cpp
#include<iostream>
#include<queue>
#include<cstdio>
#include<cstring>
#include<vector>
using namespace std;
const int maxn=100+5;

int G[maxn][maxn];   //存图的 d=id
int path[maxn];      //存每个节点的父节点，即路径
int n,m;             //n 行   m 列
int k=1;//记录编号
int end_num;
int vx[5] = {-1,1,0,0};   //vx  vy 用来计算一个节点周围上下左右 4 个节点
int vy[5] = {0,0,-1,1};
bool vis[maxn][maxn];     //判断某节点是否已经被访问过

struct node
{
    int x;
    int y;
    int id;
    int parent=0;
    node(int a,int b,int c)
    {
        x=a;
        y=b;
        id=c;
    }
};

int main()
{
    //freopen("in.txt","r",stdin);
    memset(G,0,sizeof(G));
    memset(vis,0,sizeof(vis));
    memset(path,0,sizeof(path));
    cin>>n>>m;
    for(int i=1; i<=n; i++)
        for(int j=1; j<=m; j++)
        {
            cin>>G[i][j];
        }
    queue<node> q;
    node v=node(1,1,1);
    q.push(v);
    vis[1][1]=1;
    while(!q.empty())
    {
        node u=q.front();
        q.pop();
        path[u.id]=u.parent;//记录每个点的父节点
        for(int i=0; i<4; i++)
        {
            int tx=u.x+vx[i];
            int ty=u.y+vy[i];
            if(G[tx][ty]&&!vis[tx][ty])//有路可走且未访问
            {
                vis[tx][ty]=1;
                //cout<<tx<<ty<<endl;
                node v=node(tx,ty,++k);
                end_num=k;
                v.parent=u.id;
                q.push(v);
            }
        }
    }
    vector<int> ans;
    //cout<<end_num<<endl;
    while(end_num)//从后面开始找父亲节点
    {
        ans.push_back(end_num);
        end_num=path[end_num];
    }
    int s=0;
    while(!ans.empty())
    {
        s++;
        cout<<*(ans.end()-1)<<' ';//ans 最后一个元素是 0
        ans.pop_back();
    }
    cout<<endl<<s-1;
    return 0;
}
```

---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/bfs%E6%B1%82%E6%9C%80%E7%9F%AD%E8%B7%AF/  

