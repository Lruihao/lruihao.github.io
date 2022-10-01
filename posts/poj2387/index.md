# Til the Cows Come Home-poj2387(dijkstra 判断重边）


[题目链接](http://poj.org/problem?id=2387)

题目大意：  
说的是，一只奶牛位于 N 号节点，输入 N 个节点和 T 对双向的边，求出由 N 到 1 的最短的距离，其实就是问的单源最短路问题。

两个点可能有多条路，选择最短的。
```cpp
#include<stdio.h>
#include<string.h>
#include<algorithm>
using namespace std;

const int INF=99999999;                    //设为无穷大
int maps[1005][1005],v[1005],d[1005];  //v 表示是否已经过遍历 d 表示从源到点当前最短路
int n;

void Dijkstra(int s,int t)
{
    int i,j,k,mini;
    for(i=1;i<=n;i++)
        d[i]=INF;                      //除源点设为 0 距离外 其他先设为无穷大
    d[s]=0;
    for(i=1;i<=n;i++)         //n 点循环 n 次 , 找出 n 个 k, 找 n 个点
    {
        mini=INF;
        k=-1;
        for(j=1;j<=n;j++)              //在所有未标记点中 选 d 值最小的点
            if(!v[j] && d[j]<mini)
                mini=d[k=j];

        v[k]=1;                         //标记节点
        if(k==t)
        {
            printf("%d\n",d[t]);
            return;
        }
        for(j=1;j<=n;j++)
            if(!v[j] && (d[k]+maps[k][j])<d[j])   //表示从 k 出发的点，对于所有边，更新相连点
                d[j]=d[k]+maps[k][j];
    }
}

int main()
{
    int T,i,j,x,y,D;
    while(scanf("%d %d",&T,&n)!=EOF)
    {
        memset(v,0,sizeof(v));            //清除标记
        for(i=1;i<=n;i++)
            for(j=1;j<=n;j++)
                maps[i][j]=INF;

        for(i=1;i<=T;i++){
            scanf("%d%d%d",&x,&y,&D);
            if(maps[x][y]>D)               //可能有多条路，只记录最短的
                maps[x][y]=D,maps[y][x]=D;
        }
        Dijkstra(1,n);
    }
    return 0;
}
```

---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/poj2387/  

