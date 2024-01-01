# B.Higher h-index


## B. Higher h-index

The h-index of an author is the largest h where he has at least h papers with citations not less than h.  
Bobo has no papers and he is going to publish some subsequently. If he works on a paper for x hours, the  
paper will get (a·x) citations, where a is a known constant. It’s clear that x should be a positive integer.  
There is also a trick – one can cite his own papers published earlier.

Given Bobo has n working hours, ﬁnd the maximum h-index of him.

&lt;!--more--&gt;

### Input

The input consists of several test cases and is terminated by end-of-ﬁle.  
Each test case contains two integers n and a.

### Output

For each test case, print an integer which denotes the maximum h-index.

### Constraint

    • 1≤ n ≤109
    • 0≤ a ≤ n
    • The number of test cases does not exceed 104.

### Sample Input

    3 0
    3 1
    1000000000 1000000000

### Sample Output

    1
    2
    1000000000

### Note

For the ﬁrst sample, Bobo can work 3 papers for 1 hour each. With the trick mentioned,  
he will get papers with citations 2,1,0. Thus, his h-index is 1.  
For the second sample, Bobo can work 2 papers for 1 and 2 hours respectively.  
He will get papers with citations 1&#43;1,2&#43;0. Thus, his h-index is 2.

题意：给定 n 个小时，可以用其中 x(1&lt;=x&lt;=n) 个小时写一篇论文，那么这篇论文的&#34;既定&#34;引用数将会是`x*a`(a 为给定正整数）；此外，已经写好的论文将会被其后写成的论文所引用，也就是说，这篇论文的总引用数将会是&#34;既定&#34;引用数 &#43; 其后论文篇数；问在所有的写论文方案中（例如一种方案就是用 n 个小时写 n 篇论文，每篇论文各花 1 小时（可以得到这 n 篇论文的引用数）)，h 最大为多少 (h 的含义同上题）（每一种方案都对应着一个 h，求这些 h 中的最大者）  
思路：最优方案（即对应 h 值最大的方案）是平摊 n 小时写成 n 篇论文（证明未知）；此时 n 篇论文的引用数为 a,a&#43;1,a&#43;2,...,a&#43;n-1，引用数为 a&#43;i 时，引用数大于等于它的论文有 n-i 篇，令 a&#43;i=n-i 得 i=(n-a)/2, 所以 h=a&#43;(n-a)/2;

后 AC 代码

```c
#include&lt;cstdio&gt;

int main(){
   int n,a;
   while(scanf(&#34;%d%d&#34;,&amp;n,&amp;a)!=EOF){
    printf(&#34;%d\n&#34;,a&#43;(n-a)/2);
   }
   return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/b-higher/  

