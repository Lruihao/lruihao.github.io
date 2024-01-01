# 牛客练习赛 23


两题水过，暴力，找规律。

## [托米的赌球](https://www.nowcoder.com/acm/contest/156/A)

## [托米的划分](https://www.nowcoder.com/acm/contest/156/B)

&lt;!--more--&gt;

## a

```cpp
#include&lt;bits/stdc&#43;&#43;.h&gt;
using namespace std;

int main(){
    int c[13],d[13]={100,50,20,10,5,2,1,50,20,10,5,2,1};
    int i,t;
    cin&gt;&gt;t;
    int a,b;
    while(t--){
        memset(c,0,sizeof(c));
        cin&gt;&gt;a&gt;&gt;b;
        for(i=0;i&lt;7;i&#43;&#43;){
            int x=0;
        if(a&gt;c[i]){
            x=a/d[i];
            c[i]&#43;=x;
            a-=x*d[i];
        }
        for(i=7;i&lt;13;i&#43;&#43;){
            int x=0;
        if(b&gt;c[i]){
            x=b/d[i];
            c[i]&#43;=x;
            b-=x*d[i];
        }
        cout&lt;&lt;c[0];
        for(i=1;i&lt;13;i&#43;&#43;)
            cout&lt;&lt;&#34; &#34;&lt;&lt;c[i];
        cout&lt;&lt;endl;
    }
    return 0;
}
```

## b

f(n)=f(n-1)&#43;n-1;

```c
#include&lt;bits/stdc&#43;&#43;.h&gt;
using namespace std;

long long sum;

int main(){
    int n;
    int t;
    cin&gt;&gt;t;
    while(t--){
        sum=1;
        cin&gt;&gt;n;
        if(n==1) sum=0;
        for(int i=3;i&lt;=n;i&#43;&#43;)
            sum&#43;=i-1;
        cout&lt;&lt;sum&lt;&lt;endl;
    }
    return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/%E7%89%9B%E5%AE%A2%E7%BB%83%E4%B9%A0%E8%B5%9B23/  

