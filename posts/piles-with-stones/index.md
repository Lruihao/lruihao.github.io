# Piles-With-Stones


Codeforces Round #500 (Div. 2)  
题目链接：[Piles With Stones](https://codeforces.com/contest/1013/problem/A)

<!--more-->

大致题意就是有 n 堆石头，第一天每堆有一定数目的石头，第二天石头可能被小朋友移动或者带走，求满足题意的两天的石碓；  
所以第二天的石头总数不会大于第一天的，所以是 sum1-sum2>=0 即可。  
//又只打了一道题，扣了 80 多分。

```cpp
#include<bits/stdc++.h>
using namespace std;

int x[55],y[55],n,s1=0,s2=0;

int main(){
    scanf("%d",&n);
    for(int i=0;i<n;i++){
        scanf("%d",&x[i]);
        s1+=x[i];
    }
    for(int i=0;i<n;i++){
        scanf("%d",&y[i]);
        s2+=y[i];
    }
    if((s1-s2)>=0)
        printf("Yes\n");
    else printf("No\n");
    return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/piles-with-stones/  

