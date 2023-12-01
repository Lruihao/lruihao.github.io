# How Many Answers Are Wrong-hdu3038（带权并查集）


题目链接：[How Many Answers Are Wrong](http://acm.hdu.edu.cn/showproblem.php?pid=3038)  
思路参考：[本题直接参考](https://blog.csdn.net/duan_1998/article/details/70196576),[图文解释](https://blog.csdn.net/dextrad_ihacker/article/details/51016017)

<!--more-->

```cpp
#include<bits/stdc++.h>
using namespace std;

typedef long long LL;
int pre[200010],ranks[200010];

int find(int root){
    if(pre[root] != root)
    {
        int f = pre[root];
        pre[root] = find(pre[root]);//递归路径压缩
        ranks[root] += ranks[f];
        /*精髓假如一开始没关系，那么用 rank 数组来表示 a，b 各自到各自祖先的距离。
        那么在把 a 的祖先给 b 的祖先当父亲之后，那么 b 到祖先的距离也就是 rank[b] 就要再加上 b 原本的祖先到 a 的祖先的距离，更新一下，
        其中 find 函数（找根节点的函数）里 rank[x]+=rank[pre[x]]（这里 pre 数组存的是对应数的父节点）*/
    }
    return pre[root];
}

int main(){
    int n,m;
    while(~scanf("%d%d",&n,&m)){
        int ans=0;
        for(int i=1; i<=n; i++)
            pre[i]=i;
        memset(ranks,0,sizeof(ranks));
        while(m--){
            int a,b,c;
            scanf("%d%d%d",&a,&b,&c);
            a--;//[a,b]~~(a--,b]
            int fa=find(a);
            int fb=find(b);
            if(fa!=fb){
                pre[fb]=fa;//注意合并顺序，反过来下面的也要改
                ranks[fb]=ranks[a]-ranks[b]+c;//更新距离
            }
            else {
                if(ranks[b]-ranks[a]!=c)
                    ans++;
            }
        }
        printf("%d\n",ans);
    }
    return 0;
}

```


---

> 作者:   
> URL: https://lruihao.cn/posts/hdu3038/  

