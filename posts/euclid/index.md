# The Equation-SGU106（扩展欧几里得）


## 题意

给出 a,b,c,x1,x2,y1,y2，求满足 ax&#43;by&#43;c=0，且 x∈[x1,x2],y∈[y1,y2] 的整数解个数。

## 分析

对于解二元一次不定方程，容易想到利用扩展欧几里得求出一组可行解后找到通解，下面来介绍一下欧几里得以及扩展欧几里得。

### 欧几里得

又名辗转相除法，是用来计算两个数的最大公约数，其中就是利用 gcd(a,b)=gcd(b,a mod b) 来求解。下证 gcd(a,b)=gcd(b,a mod b) 的正确性：

设 a,b 的一个公约数为 d

设 a mod b=r，则 a=kb&#43;r(k 为整数），r=a-kb

因为 d|a,d|b

所以 d|a-kb, 即 d|r，而 r=a mod b

所以 d 为 b,a mod b 的公约数

又因为 d 也为 a,b 的公约数，所以（a,b) 和 (b,a mod b) 的公约数一样，所以最大公约数必然一样，得证。

代码描述：

```c
int gcd(int a,int b)
{
    if (b==0) return a;
    return gcd(b,a%b);
}
```

### 扩展欧几里得

顾名思义，为上述欧几里得算法的扩展。欧几里得是用来求 a,b 的最大公约数，那么扩展欧几里得不仅能求出 a,b 的最大公约数，还能求出满足 ax&#43;by=gcd(a,b) 的一组可行解。  
求解过程中，扩展欧几里得比欧几里得多了一个赋值过程，具体证明如下：

设 ax1&#43;by1=gcd(a,b),bx2&#43;(a mod b)y2=gcd(b,a mod b)

因为由欧几里得算法可知，gcd(a,b)=gcd(b,a mod b)

所以 ax1&#43;by1=bx2&#43;(a mod b)y2

因为`a mod b=a-(a div b)*b（div 为整除`

所以有`ax1&#43;by1=bx2&#43;(a-(a div b)*b)y2`

将右边移项，展开得：

```plain
ax1&#43;by1=ay2&#43;bx2-(a div b)*b*y2
       =ay2&#43;b[x2-(a div b)]y2
```

所以可得：
`x1=y2`
`y1=x2-(a div b)*y2`

将得到的的 x1,y1 递归操作求解 x2,y2，如此循环往复，将会像欧几里得一样得到 b=0 的情况，此时递归结束，返回 x=1,y=0，回溯得解。

代码描述：

此函数返回的是 a,b 的最大公约数，同时也求解出满足 ax&#43;by=gcd(a,b) 的一组可行的 (x,y)

```c
int exgcd(int a,int b,int &amp;x,int &amp;y)
{
    if (b==0) {x=1;y=0;return a;}
    int t=exgcd(b,a%b,x,y);
    int x0=x,y0=y;
    x=y0;y=x0-(a/b)*y0;
    return t;
}
```

### 关于求解二元一次不定方程 ax&#43;by=c

首先，如果 c 不是 gcd(a,b) 的倍数，方程显然无解。

扩展欧几里得求解的是 ax&#43;by=gcd(a,b)=1 的可行解，但是题目中并没有说 c 与 a,b 互质之类的条件，所以需要在开始时两边同时除以 gcd(a,b)。

设 d=gcd(a,b)

设 a&#39;=a/d,b&#39;=b/d,c&#39;=c/d,

则下面需要求解 a&#39;x&#43;b&#39;y=c&#39;的整数解，而 gcd(a&#39;,b&#39;)=1，

则我们只需求 a&#39;x&#43;b&#39;y=1 的可行解

直接使用扩展欧几里得，得到 (x&#39;,y&#39;), 则最终解为`x&#39;*c&#39;,y&#39;*c&#39;`设为 (x0,y0)。

现在得到了一组可行解，但是如何得到通解呢？

将 (x0,y0) 代入 ax&#43;by=c，则有

`a*(x0)&#43;b*(y0)=c`

通过拆添项，可有：

```plain
a*(x0&#43;1*b)&#43;b*(y0-1*a)=c

a*(x0&#43;2*b)&#43;b*(y0-2*a)=c

a*(x0&#43;3*b)&#43;b*(y0-3*a)=c

……
```

`a*(x0&#43;k*b)&#43;b*(y0-k*a)=c (k∈Z)`

至此，我们得到了通解的方程

`x=x0&#43;k*b`
`y=y0-k*a (k∈Z)`

这样，所有满足 ax&#43;by=c 的可行解都可求出。

## 具体实现

有了主体算法，下面要谈到具体实现了。

### 先处理一下无解的情况

1. 当 a=0 并且 b=0，而 c≠0 时，显然无解；  
   当 a=0,b=0，而 c=0 时，[x1,x2],[y1,y2] 都为可行解，根据乘法原理，可行解的个数为`(x2-x1&#43;1)*(y2-y1&#43;1)`;

2. 当 a=0 b≠0 时：  
   此时即为求解 by=c，则 y=c/b，  
   如果 c/b 不是整数或 c/b 不在 [y1,y2] 的范围内，无解  
   否则 [x1,x2] 内全部整数都为可行解。
3. 当 b=0,a≠0 时，同上。

4. 若 c 不是 gcd(a,b) 的个数，方程显然无解。

### 处理完了一些繁琐的细节后，下面是具体的求解过程

1. 扩展欧几里得求解的是 ax&#43;by=c，而本题是 ax&#43;by&#43;c=0，需将 c 移项。

2. 对于本道题，首先要注意的是，对于负数的模运算在此算法中无法得到正确解，所以要处理一下 a,b,c 的正负情况。
   如果 a 为负数，只需将 a 取相反数后，再处理一下 x∈[x1,x2] 的范围。当 a 取了相反数，相当于把 x 也取反，则需要把 x 的范围由 [x1,x2] 转变成 [-x2,-x1], 类似于把数轴反了过来。b 同理。

3. 利用扩展欧几里得解二元一次不定方程，得到一组可行解 (x0,y0)。

4. 因为题目中对 x,y 有条件约束，而有 x=x0&#43;kb,y=y0-kb，我们可以求出满足 x∈[x1,x2],y∈[y1,y2] 的 k 的取值范围，
   即为求解 x1&lt;=x0&#43;kb&lt;=x2,y1&lt;=y0-kb&lt;=y2 的整数 k 的个数
   但是在求解这两个一次函数的过程中，会有除不尽的现象，该如何取整呢？

举个例子

当出现 2.5&lt;=k&lt;=5.5 时，我们需要的可行的 k 为 3,4,5，所以需要将 2.5 向上取整得到 3，5.5 向下取整得到 5，即为 3&lt;=k&lt;=5；

当出现 -5.5&lt;=&lt;=-2.5 时，我们需要的可行的 k 为 -5,-4,-3, 所以需要将 -5.5 向上取整得到 -5,-2.5 向下取整得到 -3，即为 -5&lt;=k&lt;=-3；

正负数的情况都已经考虑完全了，可以得到取整的结论：上界下取整，下界上取整。

最后，将得到的两个范围取交集，得到 [l,r]，则最终答案为 r-l&#43;1。

这样，本题就可以完美解决了。

```cpp
// BY Rinyo

#include&lt;cstdio&gt;
#include&lt;cmath&gt;
long long a,b,c,x1,x2,yy1,y2,x0,yy0;
inline long long cmin(const long long &amp;x,const long long &amp;y) {return x&lt;y?x:y;}
inline long long cmax(const long long &amp;x,const long long &amp;y) {return x&gt;y?x:y;}

long long gcd(long long a,long long b)
{
    if (b==0) return a;
    return gcd(b,a % b);
}
void exgcd(long long a,long long b)
{
    if (b==0){x0=1;yy0=0;return;}
    exgcd(b,a%b);
    long long t=x0;x0=yy0;yy0=t-a/b*yy0;
    return;
}

int main()
{
    scanf(&#34;%I64d%I64d%I64d%I64d%I64d%I64d%I64d&#34;,&amp;a,&amp;b,&amp;c,&amp;x1,&amp;x2,&amp;yy1,&amp;y2);
    c=-c;
    if (c&lt;0) {a=-a;b=-b;c=-c;}
    if (a&lt;0) {a=-a;long long t=x1;x1=-x2;x2=-t;}
    if (b&lt;0) {b=-b;long long t=yy1;yy1=-y2;y2=-t;}
    if (a==0 &amp;&amp; b==0)
    {
        if (c==0)
        {
            printf(&#34;%I64d&#34;,(x2-x1&#43;1)*(y2-yy1&#43;1));
            return 0;
        }
        printf(&#34;0&#34;);return 0;
    }
    else if (a==0)
    {
        if (c %b ==0)
            if (c/b&lt;=y2 &amp;&amp; c/b&gt;=yy1) {printf(&#34;%I64d&#34;,x2-x1&#43;1);return 0;}
        printf(&#34;0&#34;);return 0;
    }
    else if (b==0)
    {
        if (c%a==0)
            if (c/a&lt;=x2 &amp;&amp; c/a&gt;=x1) {printf(&#34;%I64d&#34;,y2-yy1&#43;1);return 0;}
        printf(&#34;0&#34;);return 0;
    }

    long long d=gcd(a,b);
    if (c%d!=0){printf(&#34;0&#34;);return 0;}

    a=a/d;b=b/d;c=c/d;
    exgcd(a,b);
    x0=x0*c;yy0=yy0*c;

    double tx2=x2,tx1=x1,tx0=x0,ta=a,tb=b,tc=c,ty1=yy1,ty2=y2,ty0=yy0;
    long long down1=floor(((tx2-tx0)/tb)),down2=floor(((ty0-ty1)/ta));
    long long r=cmin(down1,down2);
    long long up1=ceil(((tx1-tx0)/tb)),up2=ceil(((ty0-ty2)/ta));
    long long l=cmax(up1,up2);
    if (r&lt;l) printf(&#34;0&#34;);
    else printf(&#34;%I64d&#34;,r-l&#43;1);
    return 0;

}
```

扩展欧几里得模板

```c
#include&lt;iostream&gt;
using namespace std;

int exgcd(int a,int b,int &amp;x,int &amp;y)
{
     if(b==0)
    {
        x=1;
        y=0;
        return a;
    }
    int gcd=exgcd(b,a%b,x,y);
    int x2=x,y2=y;
    x=y2;
    y=x2-(a/b)*y2;
    return gcd;
}

int main()
{
int x,y,a,b;
cout&lt;&lt;&#34;请输入 a 和 b:&#34;&lt;&lt;endl;
cin&gt;&gt;a&gt;&gt;b;
cout&lt;&lt;&#34;a 和 b 的最大公约数：&#34;&lt;&lt;endl;
cout&lt;&lt;exgcd(a,b,x,y)&lt;&lt;endl;
cout&lt;&lt;&#34;ax&#43;by=gcd(a,b) 的一组解是：&#34;&lt;&lt;endl;
cout&lt;&lt;x&lt;&lt;&#34; &#34;&lt;&lt;y&lt;&lt;endl;
return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/euclid/  
> 转载 URL: https://www.cnblogs.com/Rinyo/archive/2012/11/25/2787419.html
