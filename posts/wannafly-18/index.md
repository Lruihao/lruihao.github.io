# Wannafly 挑战赛 18-序列


时间限制：C/C&#43;&#43; 1 秒，其他语言 2 秒  
空间限制：C/C&#43;&#43; 262144K，其他语言 524288K  
64bit IO Format: %lld

## 题目描述

有一个长度为 n 的序列 a，已知 a[1]=a[n]=1，且对于 2 &lt;= x &lt;= n，a[x] / a[x-1] 是以下三个数字之一 [ 1，-2，0.5 ], 问有多少种不同的序列满足题意。  
两个序列不同当且仅当它们有至少一个位置上的数字不同，序列 a 可以为任何实数。

## 输入描述

一个整数 表示 n (1&lt;= n &lt;= 1e3)

## 输出描述

一个整数 表示答案模 109&#43;7

## 示例 1

输入

`5`
输出

`7`

&gt; 解题思路：  
&gt; 整体来看，a[x] = a[x-1] _[1, -2, 0.5]，那么等于从 n-1 个 [1,-2,0.5] 中选出 n-1 个数值相乘（a[x-1]=a[x-2]_ [1,-2,0.5] 同理化简式子），  
&gt; 最后答案要是 1，所以 -2 就必须有偶数个，同理 0.5 的个数要等于 -2. 顺序无关。
&gt; 那所有的转换中，就只要保证有若干组 (-2,-2,0.5,0.5) 存在

![表达式](https://img-blog.csdn.net/20180717145303103?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5NTIwNDE3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70) 表示偶数个 2 的个数与偶数个 0.5 的个数组合；组合数用二项式系数，杨辉三角来求。

```cpp
#include &lt;bits/stdc&#43;&#43;.h&gt;
using namespace std;

const int maxn = 1e3 &#43; 5;
const int mod = 1e9 &#43; 7;
long long c[maxn][maxn];

int main(){
    for(int i = 0; i &lt; maxn; i&#43;&#43;){//杨辉三角
        c[i][0] = 1;
        c[i][i] = 1;
        for(int j = 1; j &lt; i; j&#43;&#43;)
            c[i][j] = (c[i-1][j] &#43; c[i-1][j-1]) % mod;
    }
    int n;
    while(~scanf(&#34;%d&#34;, &amp;n)){
        n--;
        long long ans = 0;
        for(int i = 0; i*2 &lt;= n; i &#43;= 2){
            ans = (ans%mod &#43; (c[n][i]*c[n-i][i])%mod)%mod;
        }
        printf(&#34;%lld\n&#34;, ans);
    }
    return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/wannafly-18/  

