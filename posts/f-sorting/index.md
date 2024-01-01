# F.sorting


![sorting.png](https://i.loli.net/2018/06/14/5b2286fcec6fc.png)

&lt;!--more--&gt;

## Sample Input

    2
    1 1 1
    1 1 2
    2
    1 1 2
    1 1 1
    3
    1 3 1
    2 2 1
    3 1 1

## Sample Output

    2 1
    1 2
    1 2 3

题意：给定 n 个元组 (a1,b1,c1),(a2,b2,c2),...,(an,bn,cn)，将其按 (ai&#43;bi)/(ai&#43;bi&#43;ci) 的值从小到大排序，输出排序后的 n 个元组的原序号；  
思路：编写 sort 里的 cmp 函数（形参为元组结构体元素，设为 Tuple x,Tuple y)，若直接算出 (x.a&#43;x.b)_(y.a&#43;y.b&#43;y.c) 和 (y.a&#43;y.b)_(x.a&#43;x.b&#43;x.c) 再比较大小，这两个结果会爆 unsigned long long；  
可以把因式乘积展开成多项式的和，约去两式中相同的项，得到 x.a*y.c&#43;x.b*y.c 和 y.a*x.c&#43;y.b*x.c，因此只需计算它俩再比较即可，结果不会爆 unsigned long long

后 AC 代码

```c
#include &#34;bits/stdc&#43;&#43;.h&#34;
using namespace std;
struct node{
    long double a,b,c;
    int numb;
}ss[1005];

bool cmp(const node &amp;a,const node &amp;b){
    long double suma,sumb;
    //suma=a.a*b.c&#43;a.b*b.c;
    //sumb=b.a*a.c&#43;b.b*a.c;
    suma=(a.a&#43;a.b)/(a.a&#43;a.b&#43;a.c);
    sumb=(b.a&#43;b.b)/(b.a&#43;b.b&#43;b.c);
    if(suma!=sumb)return suma&lt;sumb;
    return a.numb&lt;b.numb;
}

int main(){
    int n;
    while(cin&gt;&gt;n){
        for(int i=0;i&lt;n;i&#43;&#43;){
            cin&gt;&gt;ss[i].a&gt;&gt;ss[i].b&gt;&gt;ss[i].c;
            ss[i].numb=i&#43;1;
        }
        stable_sort(ss,ss&#43;n,cmp);
        int i;
        for(i=0;i&lt;n-1;i&#43;&#43;)
            cout&lt;&lt;ss[i].numb&lt;&lt;&#34; &#34;;
        cout&lt;&lt;ss[i].numb&lt;&lt;endl;
    }
    return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/f-sorting/  

