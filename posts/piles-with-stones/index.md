# Piles-with-stones


Codeforces Round #500 (Div. 2)  
题目链接：[Piles With Stones](https://codeforces.com/contest/1013/problem/A)

&lt;!--more--&gt;

大致题意就是有 n 堆石头，第一天每堆有一定数目的石头，第二天石头可能被小朋友移动或者带走，求满足题意的两天的石碓；  
所以第二天的石头总数不会大于第一天的，所以是 sum1-sum2&gt;=0 即可。  
//又只打了一道题，扣了 80 多分。

```cpp
#include&lt;bits/stdc&#43;&#43;.h&gt;
using namespace std;

int x[55],y[55],n,s1=0,s2=0;

int main(){
    scanf(&#34;%d&#34;,&amp;n);
    for(int i=0;i&lt;n;i&#43;&#43;){
        scanf(&#34;%d&#34;,&amp;x[i]);
        s1&#43;=x[i];
    }
    for(int i=0;i&lt;n;i&#43;&#43;){
        scanf(&#34;%d&#34;,&amp;y[i]);
        s2&#43;=y[i];
    }
    if((s1-s2)&gt;=0)
        printf(&#34;Yes\n&#34;);
    else printf(&#34;No\n&#34;);
    return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/piles-with-stones/  

