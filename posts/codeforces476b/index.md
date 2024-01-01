# Dreamoon and WiFi（组合数学）


**[题目链接](https://codeforces.com/contest/476/problem/B)**

## 题目大意

就是给定两个字符串，第一个字符串由&#34;&#43;&#34;,&#34;-&#34;组成，第二个字符串由&#34;&#43;&#34;,&#34;-&#34;,&#34;?&#34;组成，“&#43;”代表加 1，&#34;-&#34;代表减一，“?&#34;代表可取正也可取负，问第二个字符串的位置和第一个字符串相等的概率是多少。

我一开始的想法是把（&#43;1，-1）^n 看成和二项式定理一样的展开始式，只不过把乘法改为加法，然后得到公式  
`c(n,0)(n&#43;(-1)0)&#43;c(n,1)(n-1&#43;(-1)1)&#43;c(n,i)(n-i&#43;(-1)i)&#43;...&#43;c(n,n)(n-n&#43;(-1)n)`  
化简一下可知通项为`c(n,i)(n-2*i)`  
然后我对第一个串求出位置 sum, 第二个串先求出已知位置 sum1，然后记录下？的个数，然后遍历找出展开式中某一项 n-2i&#43;sum1==sum，这样 x 的系数就是可能出现位置相等的所有情况，用 (n-2i)/系数和就是概率了啊，可是为什么不对呢，本地调试，数据没问题，可是交到 cf 上第二组都过不了，烦亏我还觉得想到一个独辟的方法呢，过不了。

```bash
//cf 错误报告，思前恐后不晓得 why,wtf??? 先码着吧
Test: #2, time: 0 ms., memory: 0 KB, exit code: 0, checker exit code: 1, verdict: WRONG_ANSWER
Input
&#43;-&#43;-
&#43;-??
Output
-0.000000000000
Answer
0.500000000000
Checker Log
wrong answer 1st numbers differ - expected: &#39;0.5000000&#39;, found: &#39;-0.0000000&#39;, error = &#39;0.5000000&#39;
```

## 错误代码

```c
#include&lt;bits/stdc&#43;&#43;.h&gt;
using namespace std;

int main(){
    int i,j,cnt=0;
    long long c[11][11],sum=0,sum1=0;
    for(i = 0; i &lt; 11; i&#43;&#43;){//杨辉三角
        c[i][0] = 1;
        c[i][i] = 1;
        for(j = 1; j &lt; i; j&#43;&#43;)
            c[i][j] = c[i-1][j] &#43; c[i-1][j-1];
    }
    string a,b;
    cin&gt;&gt;a&gt;&gt;b;
    //cout&lt;&lt;a&lt;&lt;endl&lt;&lt;b&lt;&lt;endl;
    int len=a.length();
    for(i=0;i&lt;len;i&#43;&#43;)
        if(a[i]==&#39;&#43;&#39;) sum&#43;=1;
        else sum-=1;
    for(i=0;i&lt;b.length();i&#43;&#43;){
        if(b[i]==&#39;&#43;&#39;) sum1&#43;=1;
        else if(b[i]==&#39;-&#39;)sum1-=1;
        if(b[i]==&#39;?&#39;) cnt&#43;&#43;;
    }
    if(sum==sum1&amp;&amp;cnt==0){
        printf(&#34;1.000000000000\n&#34;);
        return 0;
    }
    int flag=0;
    int x=0;
    for(j=0;j&lt;=cnt;j&#43;&#43;)
        x&#43;=c[cnt][j];
        //cout&lt;&lt;x&lt;&lt;endl;
    for(i=0;i&lt;=cnt;i&#43;&#43;)
        if(cnt-2*i&#43;sum1==sum){
            flag=1;
            long double y=c[cnt][i]*1.0/x;
            printf(&#34;%.12llf\n&#34;,y);
        }
    if(!flag)printf(&#34;0.000000000000\n&#34;);
    return 0;
}
```

想不通，没办法只好换思路。

我先分别记下 a,b 串的&#39;&#43;&#39;,&#39;-&#39;,&#39;?&#39;个数，然后后我们很容易知道，如要 a,b 位置相等，则加号和减号的数目，两串要相等，且 a 中的加号要比 b 中已知的加号要多，减号也要比 b 中已知的要多，否则打死都不会相等的，仔细比划一下就知道了。然后有 z 个‘?’，相当于有 z 个坑，让我们去填使得 a,b 相等。只能填 &#43; 或-，设加号差等于 x-p, 所以概率就等于 c(z,x-p)/2^z。

## AC 代码

```c
#include&lt;bits/stdc&#43;&#43;.h&gt;
using namespace std;

int main(){
    string a,b;
    int  x,y,z,p,q,c[11][11],i,j;
    for(i = 0; i &lt; 11; i&#43;&#43;){
        c[i][0] = 1;
        c[i][i] = 1;
        for(j = 1; j &lt; i; j&#43;&#43;)
            c[i][j] = c[i-1][j] &#43; c[i-1][j-1];
    }

    cin&gt;&gt;a;
    cin&gt;&gt;b;
    x=y=z=p=q=0;
    for(i=0;i&lt;a.length();i&#43;&#43;)
        if(a[i]==&#39;&#43;&#39;) x&#43;&#43;;
        else y&#43;&#43;;
    for(i=0;i&lt;b.length();i&#43;&#43;){
        if(b[i]==&#39;&#43;&#39;) p&#43;&#43;;
        else if(b[i]==&#39;-&#39;) q&#43;&#43;;
        else z&#43;&#43;;
    }
    if(x==p&amp;&amp;z==0){
        printf(&#34;1.000000000000\n&#34;);
        return 0;
    }
    if(x-p&lt;0||y-q&lt;0) {
        printf(&#34;0.000000000000\n&#34;);
        return 0;
    }
    x=x-p;
    printf(&#34;%0.12f&#34;,c[z][x]*1.0/(2&lt;&lt;(z-1)));
    return 0;
}
```

几分钟写完后面的代码，心中一万头草泥马在奔腾。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/codeforces476b/  

