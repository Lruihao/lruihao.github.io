# 最大公约数（二进制算法）


&gt; 二进制最大公约数算法避免了欧几里得算法（辗转相除法）的大量取模操作，有效减少了时间消耗，且更为方便。

&lt;!--more--&gt;

## 原理

本算法基于以下事实：

&gt; 对于两个数的最大公约数 gcd(m, n)，有
&gt; m&lt;n 时，gcd(m, n)=gcd(n, m)
&gt; m 偶 n 偶时，gcd(m, n)=2\*gcd(m/2, n/2)
&gt; m 偶 n 奇时，gcd(m, n)=gcd(m/2, n)
&gt; m 奇 n 偶时，gcd(m, n)=gcd(m, n/2)
&gt; m 奇 n 奇时，gcd(m, n)=gcd(n, m-n)

采用递归即可。

## 实现

```cpp 最大公约数
inline int GCD(int x,int y)
{
        int i,j;
        if(x==0) return y;
        if(y==0) return x;
        for(i=0;0==(x&amp;1);&#43;&#43;i)x&gt;&gt;=1;   // 去掉所有的 2
        for(j=0;0==(y&amp;1);&#43;&#43;j)y&gt;&gt;=1;   // 去掉所有的 2
        if(j&lt;i) i=j;
        while(1){
                if(x&lt;y)x^=y,y^=x,x^=y;   // 若 x &lt; y 交换 x, y
                if(0==(x-=y)) return y&lt;&lt;i;  // 若 x == y，gcd == x == y（就是在辗转减，while(1) 控制）
                while(0==(x&amp;1))x&gt;&gt;=1; // 去掉所有的 2
        }
}
```

```cpp 最小公倍数
int get_lcm(int a,int b)///获得最小公倍数
{
    int x=a;
    int y=b;
    while(b)
    {
        int t=a;
        a=b;
        b=t%b;
    }
    return x/a*y;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/gcd-bit/  

