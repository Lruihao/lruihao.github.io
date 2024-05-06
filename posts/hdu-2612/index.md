# Hdu-2612-Find a Way（双 Bfs）


[Find a way](http://acm.hdu.edu.cn/showproblem.php?pid=2612)

圣诞节要到了，坤神和瑞瑞这对基佬想一起去召唤师大峡谷开开车。百度地图一下，发现周围的召唤师大峡谷还不少，这对基佬纠结着，该去哪一个。坤神：我要去左边的这个（因为离自己比较近 哈哈~）。瑞瑞：我要去右边的这个（因为离自己比较近 嘿嘿~） ........ 这对基佬闹矛盾了，开车有危险了！为了不让他们去召唤师大峡谷坑人，riot 决定让他们去 X 召唤师大峡谷，保证他俩所走的路程和最短。每走一个点需要花费 11 分钟，输出他们一共花费多少时间（最短时间噢）

## Input

多组测试数据

每组数据，开始一行 n，m (2&lt;=n,m&lt;=200)

接下来是个 n x m 的矩阵

&#39;Y&#39; 表示坤神所在的初始位置

&#39;M&#39; 表示瑞瑞所在的初始位置

&#39;#&#39; 该点禁止通行

&#39;.&#39; 该点可通行

&#39;@&#39; 召唤师大峡谷

## Output

每组测试数据，输出坤神和瑞瑞到达同一个召唤师大峡谷所花费的最短时间。

## Sample Input

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
    @..M.
    `#...#`

## Sample Output

    66
    88
    66

## Hint

对于第一组样例，坤神和瑞瑞去矩阵（4,1）这个召唤师大峡谷，耗费的时间为 3 ✖️ 11 &#43; 3 ✖️ 11 = 66，去矩阵（1,4）这个召唤师大峡谷，耗费的时间为 5 ✖️ 11 &#43; 3 ✖️ 11 = 88。所以，最终答案：66。[思路参考](https://blog.csdn.net/ld_1090815922/article/details/72448569)

`写代码总是好粗心！！`

&lt;!-- markdownlint-disable MD046 --&gt;

```c&#43;&#43;
#include &lt;bits/stdc&#43;&#43;.h&gt;
#define inf 0x3f3f3f3f     //acm 中“无穷大”的一般定义
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
    for(int i=0; i&lt;n; i&#43;&#43;)
        for(int j=0; j&lt;m; j&#43;&#43;)
        {
            a[i][j]=inf;
            b[i][j]=inf;
        }
}

void bfs(int x,int y,bool flag){
    int dir[4][2]={-1,0,1,0,0,1,0,-1};
    node u,v;
    queue&lt;node&gt; q;  //初始化队列第一个元素
    u.x=x;
    u.y=y;
    u.step=0;
    vis[x][y]=true;
    q.push(u);
    while(!q.empty()){
        u=q.front();
        q.pop();
        if(mp[u.x][u.y]==&#39;@&#39;){
            if(!flag) a[u.x][u.y]=u.step;
            else b[u.x][u.y]=u.step;
        }
        for(int i=0;i&lt;4;i&#43;&#43;){
            int tx=u.x&#43;dir[i][0];
            int ty=u.y&#43;dir[i][1];
            if(tx&gt;=0&amp;&amp;ty&gt;=0&amp;&amp;tx&lt;n&amp;&amp;ty&lt;m&amp;&amp;!vis[tx][ty]&amp;&amp;mp[tx][ty]!=&#39;#&#39;){//注意@和 M，Y 也是可以走的。
                v.x=tx;                                          //每次写搜索都忘记 vis!!!!
                v.y=ty;
                vis[tx][ty]=true;  //我总是忘记。
                v.step=u.step&#43;1;
                q.push(v);
            }
        }
    }
}

int main()
{
    while(~scanf(&#34;%d%d&#34;,&amp;n,&amp;m))
    {
        init();
        for(int i=0; i&lt;n; i&#43;&#43;)
            scanf(&#34;%s&#34;,mp[i]);
        for(int i=0; i&lt;n; i&#43;&#43;)
            for(int j=0; j&lt;m; j&#43;&#43;)
            {
                if(mp[i][j]==&#39;Y&#39;)
                {
                    memset(vis,false,sizeof(vis));
                    bfs(i,j,false);
                }
                if(mp[i][j]==&#39;M&#39;)
                {
                    memset(vis,false,sizeof(vis));  //记得再次初始化标记数组
                    bfs(i,j,true);
                }
            }
        for(int i=0; i&lt;n; i&#43;&#43;)
            for(int j=0; j&lt;m; j&#43;&#43;)
                if(mp[i][j]==&#39;@&#39;)
                    ans=min(ans,a[i][j]&#43;b[i][j]);
        printf(&#34;%d\n&#34;,ans*11);
    }
    return 0;
}

```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/hdu-2612/  

