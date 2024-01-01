# Leading and Trailing-lightoj1282（快速幂 &#43; 对数运算）


## [题目链接](https://vjudge.net/contest/238979#problem/E)

## 题目大意

给定两个数 n,k 求 n^k 的前三位和最后三位。

## 分析

求后三位的话：直接快速幂，对 1000 取模就好了。  
求前三位，对于给定的一个数 n, 它可以写成 n=10^a, 其中这个 a 为浮点数，则`t=n^k=(10^a)^k=10^a*k=(10^x)*(10^y);`其中 x,y 分别是`a*k`的整数部分和小数部分，对于 t=n^k 这个数，它的位数由 (10^x) 决定，它的位数上的值则有 (10^y) 决定，因此我们要求 t 的前三位，只需要将 10^y 求出，在乘以 100，就得到了它的前三位。  
分析完，我们再整体看，设 n^k=10^z; 那么`z=k*log10(n)`  
`fmod(z,1)`可以求出 x 的小数部分。

&lt;!--more--&gt;

```c
//再一次吐槽 lightoj 的头文件，让我不能用万能头&lt;bits/stdc&#43;&#43;.h&gt;
#include&lt;stdio.h&gt;
#include&lt;math.h&gt;

typedef long long LL;

int quickpow (int m, int n, int k)
{
    int b = 1;
    while (n &gt; 0)
    {
        if (n &amp; 1)
            b = (b * m) % k;
        n &gt;&gt;= 1;
        m = (m * m) % k;
    }
    return b%k;
}

int main ()
{
    int t, flag = 1;
    scanf (&#34;%d&#34;, &amp;t);

    while (t--)
    {
        LL n, k;
        scanf (&#34;%lld %lld&#34;, &amp;n, &amp;k);

        int first = pow (10.0, 2.0 &#43; fmod (k*log10(n*1.0), 1));
        int last = quickpow (n%1000, k, 1000);

        printf (&#34;Case %d: %d %03d\n&#34;, flag&#43;&#43;, first, last);
    }
    return 0;
}
```

## 注

C 库函数 - fmod()  
C 库函数 double fmod(double x, double y) 返回 x 除以 y 的余数。

- x — 代表分子的浮点值。
- y — 代表分母的浮点值。
  该函数返回 x/y 的余数。

下面的实例演示了 fmod() 函数的用法。

```c
#include &lt;stdio.h&gt;
#include &lt;math.h&gt;

int main ()
{
   float a, b;
   int c;
   a = 9.2;
   b = 3.7;
   c = 2;
   printf(&#34;%f / %d 的余数是 %lf\n&#34;, a, c, fmod(a,c));
   printf(&#34;%f / %f 的余数是 %lf\n&#34;, a, b, fmod(a,b));

   return(0);
}
```

结果：

```plain
9.200000 / 2 的余数是 1.200000
9.200000 / 3.700000 的余数是 1.800000
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/lightoj1282/  

