# Wannafly 挑战赛 20-染色


链接：https://www.nowcoder.com/acm/contest/133/A  
来源：牛客网  

### 题目描述

现在有一棵被 Samsara-Karma 染了 k 种颜色的树，每种颜色有着不同的价值，Applese 觉得 Samsara-Karma 染的太难看了，于是打算把整棵树重新染成同一种颜色，但是，由于一些奥妙重重的原因，每一次染色 Applese 可以选择两个有边相连的点，将其中一个染成另一个的颜色。而进行一次这样的操作需要付出两种颜色价值和的代价，  
现在，Applese 的钱要用来买书 (game)，所以他想要最小化代价    

### 输入描述：
输入包括若干行第一行包括一个数 n，表示这棵树有 n 个节点第二行包括 n 个数，第 i 个数表示第 i 个节点的颜色 coli  
注意：一个颜色的标号即价值接下来的 n - 1 行，每行包括两个数 u, v，表示 u 节点与 v 节点之间有一条无向边 n ≤ 100000, 1 ≤ coli ≤ 1e9，数据保证是一棵树

### 输出描述：
输出包括一行第一行包括一个数，表示最小代价

### 示例 1
#### 输入

    4  
    2 3 4 3  
    1 2  
    2 3  
    3 4  

#### 输出

    12

蒟蒻暴力枚举`-_-!`
```cpp
#include <bits/stdc++.h>

using namespace std;

const int MAXN=1e5+10;

int a[MAXN];

map<int, int >ma;

set<int>se;

int x[MAXN],y[MAXN];

int main()

{

    int n;

    scanf("%d",&n);

    for (int i = 1; i <=n ; ++i) {

        scanf("%d",&a[i]);

        se.insert(a[i]);

    }

    for (int i = 1; i <n ; ++i) {

        scanf("%d%d",&x[i],&y[i]);

    }

    long long ans=1e14,sum=0;

    set<int>::iterator it;

    for (it=se.begin(); it !=se.end() ; ++it) {

        sum=0;

        for (int j = 1; j <=n ; ++j) {

            if((*it)!=a[j]) sum+=((*it)+a[j]);

        }

        ans=min(sum,ans);

    }

    printf("%lld\n",ans);

    return 0;

}
```

最后想说这都过了什么鬼，不会数据这么弱吧？？！? 我只枚举了最小的价值颜色的情况，唉，不管了不管了。
```cpp
#include<bits/stdc++.h>
using namespace std;
int a[1000000],n,m,k=1,t,ans=0;
int main()
{
    scanf("%d",&n);
    for(int i=1;i<=n;++i)
    scanf("%d",&a[i]);
    sort(a+1,a+n+1);
    for(int i=2;i<=n;++i)
        if(a[i]!=a[1])
            ans+=a[i]+a[1];
    printf("%d",ans);
    return 0;
}
```

---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/wannafly%E6%8C%91%E6%88%98%E8%B5%9B20-%E6%9F%93%E8%89%B2/  

