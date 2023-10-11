# Leading and Trailing-lightoj1282（快速幂+对数运算）


## [题目链接](https://vjudge.net/contest/238979#problem/E)

## 题目大意

给定两个数 n,k 求 n^k 的前三位和最后三位。

## 分析

求后三位的话：直接快速幂，对 1000 取模就好了。  
求前三位，对于给定的一个数 n, 它可以写成 n=10^a, 其中这个 a 为浮点数，则`t=n^k=(10^a)^k=10^a*k=(10^x)*(10^y);`其中 x,y 分别是`a*k`的整数部分和小数部分，对于 t=n^k 这个数，它的位数由 (10^x) 决定，它的位数上的值则有 (10^y) 决定，因此我们要求 t 的前三位，只需要将 10^y 求出，在乘以 100，就得到了它的前三位。  
分析完，我们再整体看，设 n^k=10^z; 那么`z=k*log10(n)`  
`fmod(z,1)`可以求出 x 的小数部分。

<!--more-->

```c
//再一次吐槽 lightoj 的头文件，让我不能用万能头<bits/stdc++.h>
#include<stdio.h>
#include<math.h>

typedef long long LL;

int quickpow (int m, int n, int k)
{
    int b = 1;
    while (n > 0)
    {
        if (n & 1)
            b = (b * m) % k;
        n >>= 1;
        m = (m * m) % k;
    }
    return b%k;
}

int main ()
{
    int t, flag = 1;
    scanf ("%d", &t);

    while (t--)
    {
        LL n, k;
        scanf ("%lld %lld", &n, &k);

        int first = pow (10.0, 2.0 + fmod (k*log10(n*1.0), 1));
        int last = quickpow (n%1000, k, 1000);

        printf ("Case %d: %d %03d\n", flag++, first, last);
    }
    return 0;
}
```

## 注

C 库函数 - fmod()  
C 库函数 double fmod(double x, double y) 返回 x 除以 y 的余数。

- x -- 代表分子的浮点值。
- y -- 代表分母的浮点值。
  该函数返回 x/y 的余数。

下面的实例演示了 fmod() 函数的用法。

```c
#include <stdio.h>
#include <math.h>

int main ()
{
   float a, b;
   int c;
   a = 9.2;
   b = 3.7;
   c = 2;
   printf("%f / %d 的余数是 %lf\n", a, c, fmod(a,c));
   printf("%f / %f 的余数是 %lf\n", a, b, fmod(a,b));

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

