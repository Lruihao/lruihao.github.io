# 牛客暑假多校第五场


[题目链接 密码：l9sn](https://pan.baidu.com/s/1VP9Wn0OF4SVaqEVwpNralA)  
终于不爆零了，但是还是 wa 了无数次，有时候代码感觉都差不多

&lt;!--more--&gt;

## G-max

```cpp
/*
//wa
#include&lt;bits/stdc&#43;&#43;.h&gt;
using namespace std;

int main(){
    int n,c;//好像不会爆 int 吧，头晕
    cin&gt;&gt;c&gt;&gt;n;
    int t=n/c;
    if(t&lt;1) cout&lt;&lt;&#34;-1\n&#34;;//
    else if(t==1) cout&lt;&lt;c*c&lt;&lt;endl;
    else cout&lt;&lt;(t*c)*((t-1)*c)&lt;&lt;endl;
  return 0;
}*/

//AC
#include&lt;bits/stdc&#43;&#43;.h&gt;
using namespace std;

int main(){
    long long n,c;
    cin&gt;&gt;c&gt;&gt;n;
    long long t=n/c;
    if(t&lt;1) cout&lt;&lt;-1&lt;&lt;endl;
    else if(t==1) cout&lt;&lt;c*c&lt;&lt;endl;
    else cout&lt;&lt;(t*c)*((t-1)*c)&lt;&lt;endl;
  return 0;
}

```

## J-plan

```cpp
/*枚举所有情况
全买双人 n%2  0 or 1//剩 1 个人的时候，可以多开一间房或者退一间 2 人房开一间 3 人房
全买 3 人 n%3  0 or 1 or 2
再比较大小
*/
#include&lt;bits/stdc&#43;&#43;.h&gt;
#define INF 1&lt;&lt;20
using namespace std;
typedef long long ll;

ll min(ll a,ll b){
    return a&lt;b?a:b;
}

int main(){
    ll n,p2,p3,sum,sum1;
    while(cin&gt;&gt;n&gt;&gt;p2&gt;&gt;p3){
        if(n%2==0)
            sum=p2*(n/2);
        else sum=p2*(n/2)&#43;min(min(p2,p3),p3-p2);//退二买三；

        if(n%3==0)
            sum1=p3*(n/3);
        else if(n%3==1) sum1=p3*(n/3)&#43;min(min(p2,p3),2*p2-p3);//退 3 买 2*2
        else if(n%3==2) sum1=p3*(n/3)&#43;min(p3,p2);//退 3 买 3*2
        cout&lt;&lt;min(sum1,sum)&lt;&lt;endl;
    }
  return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/nowcodersummer-5th/  

