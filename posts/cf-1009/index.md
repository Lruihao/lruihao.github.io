# Educational Codeforces Round 47 (Rated for Div. 2)


那天晚上报名了没打，第二天早上打的，也只出了两题。

## [A. Game Shopping](https://codeforces.com/contest/1009/problem/A)

```cpp
#include&lt;iostream&gt;
using namespace std;

int main(){
    int n,m,s=0;
    cin&gt;&gt;n&gt;&gt;m;
    int i,j;
    int c[1000],a[1000];
    for(i=0;i&lt;n;i&#43;&#43;)
        cin&gt;&gt;c[i];
    for(i=0;i&lt;m;i&#43;&#43;)
        cin&gt;&gt;a[i];
    for(i=0,j=0;i&lt;n;){
        if(j==m)
            break;
        if(c[i]&lt;=a[j]){
            s&#43;&#43;;
            j&#43;&#43;;
            i&#43;&#43;;
        }
        else i&#43;&#43;;
    }
    if(i==n&amp;&amp;s==0)
        cout&lt;&lt;&#34;0\n&#34;;
    else cout&lt;&lt;s&lt;&lt;endl;
    return 0;
}

```

## [B. Minimum Ternary String](https://codeforces.com/contest/1009/problem/B)

```cpp
#include &lt;bits/stdc&#43;&#43;.h&gt;
using namespace std;

string s, ans;

int main(){
    cin &gt;&gt; s;
    int one = 0;
    for (int i = 0; i &lt; s.size(); i&#43;&#43;){
        if (s[i] == &#39;0&#39;) ans &#43;= &#34;0&#34;;
        if (s[i] == &#39;1&#39;) one&#43;&#43;;
        if (s[i] == &#39;2&#39;) ans &#43;= &#34;2&#34;;
    }
    bool flag = false;
    for (int i = 0; i &lt; ans.size(); i&#43;&#43;){
        if (ans[i] == &#39;2&#39; &amp;&amp; !flag) flag = true, cout &lt;&lt; string(one, &#39;1&#39;);
        cout &lt;&lt; ans[i];
    }
    if (!flag) cout &lt;&lt; string(one, &#39;1&#39;);
    return 0;
}

/*

100210

11222121

20

2001

020201

2012101

111

000

*/
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/cf-1009/  

