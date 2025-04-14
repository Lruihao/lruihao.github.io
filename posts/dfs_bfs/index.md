# 深搜广搜


### 广度优先搜索（BFS）

广度优先搜索在进一步遍历图中顶点之前，先访问当前顶点的所有邻接结点。访问了就入队。

### 深度优先搜索（DFS）

深度优先搜索在搜索过程中访问某个顶点后，需要递归地访问此顶点的所有未访问过的相邻顶点。

```cpp
#include <bits/stdc++.h>
#define N 5
using namespace std;
int maze[N][N] = {//无权有向图邻接矩阵
     { 0, 1, 0, 1, 0 },
     { 0, 0, 1, 0, 0 },
     { 0, 0, 0, 0, 1 },
     { 0, 0, 1, 0, 0 },
     { 0, 0, 0, 0, 0 }
 };
 int visited[N];
 void DFS(int start)
 {
     cout << start<< " ";
     visited[start] = 1;
     for (int i = 0; i < N; i++)
     {
         if (!visited[i] && maze[start][i] == 1)//没访问过且为邻居节点
             DFS(i);
     }
 }
 void BFS(int start){
     queue<int> Q;//队列
     Q.push(start);
     visited[start] = 1;
     while (!Q.empty())
     {
         int front = Q.front();//头
         cout << front << " ";
         Q.pop();
         for (int i = 0; i <N; i++)
         {
             if (!visited[i] && maze[front][i] == 1)
             {
                 visited[i] = 1;
                 Q.push(i);
             }
         }
     }
 }

 int main()
 {
     memset(visited,0,sizeof(visited));
     for (int i = 0; i < N; i++)//不连通的情况
     {
         if (visited[i] == 1)//访问过
             continue;
         DFS(i);
     }
     cout<<endl;
     memset(visited,0,sizeof(visited));
     for (int i = 0; i < N; i++)//不连通的情况
     {
         if (visited[i] == 1)//访问过
             continue;
         BFS(i);
     }
     return 0;
 }
```

[传送门](https://blog.csdn.net/wumingkeqi/article/details/70940978)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/dfs_bfs/  

