# Bear and Five Cards-Codeforces680A


题目链接：[Bear and Five Cards](https://codeforces.com/problemset/problem/680/A)

大致题意就是小熊有 5 张卡片，每张卡片有对应的分数，他可以选择丢弃 2 张相同的或者 3 张相同的卡片，没有相同的就无法丢弃，问小熊剩下的分数最少是多少。

&lt;!--more--&gt;

没有想得那么复杂，由于分数最大才 100，所以直接暴力就好了。

```cpp
#include&lt;bits/stdc&#43;&#43;.h&gt;
using namespace std;

int main(){
    int a[5],b[107],i,j,sum=0,sum1=0;
    for(i=0;i&lt;5;i&#43;&#43;){
        cin&gt;&gt;a[i];
        sum&#43;=a[i];
    }
    sort(a,a&#43;5);
    memset(b,0,sizeof(b));
    for(i=0;i&lt;5;i&#43;&#43;)
        b[a[i]]&#43;&#43;;
    for(i=0;i&lt;107;i&#43;&#43;){
        if(b[i]==2)
            sum1=max(2*i,sum1);
        if(b[i]&gt;=3) {sum1=max(3*i,sum1);/*cout&lt;&lt;3*i&lt;&lt;&#34; &#34;&lt;&lt;sum1&lt;&lt;endl;*/}
    }
    cout&lt;&lt;sum-sum1&lt;&lt;endl;
    return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/codeforces680a/  

