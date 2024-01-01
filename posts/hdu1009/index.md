# HDU 1009 FatMouse&#39; Trade（贪心）


## 题目大意

[题目链接](http://acm.hdu.edu.cn/showproblem.php?pid=1009)  
老鼠有 M 磅猫食 , 有 N 个房间 , 每个房间前有一只猫 , 房间里有老鼠最喜欢的食品 J[i] , 若要得到房间的食物 , 必须付出相应的猫食 F[i] , 当然这只老鼠没必要每次都付出所有的 F[i]，若它付出 F[i] 的 a%，则得到 J[i] 的 a%，求老鼠能吃到的最多的食物。

### Sample Input

    5 3
    7 2
    4 3
    5 2
    20 3
    25 18
    24 15
    15 10
    -1 -1

### Sample Output

    13.333
    31.500

## 分析

老鼠要用最少的猫粮来换取最多的食物 , 也就是 J[i]/F[i] 越大越好 , 所以按照 J[i]/F[i] 进行降序排列 , 然后依次用猫粮来换取食物 , 当所剩下的猫粮不足以完全换取食物 , 能换多少是多少。

&lt;!-- markdownlint-disable MD046 --&gt;

```cpp
#include&lt;stdio.h&gt;
#include&lt;algorithm&gt;
using namespace std;

struct node{
  double j;
  double f;
  double s;
}a[1005];

int cmp(node x,node y){
  return x.s&gt;y.s;
}

int main(){
  int m,n,i;
  while(scanf(&#34;%d%d&#34;,&amp;m,&amp;n)&amp;&amp;(m!=-1&amp;&amp;n!=-1)){
    memset(a,0,sizeof(a));
    for(i=0;i&lt;n;i&#43;&#43;){
      scanf(&#34;%lf%lf&#34;,&amp;a[i].j,&amp;a[i].f);
      a[i].s=a[i].j/a[i].f;
    }

    sort(a,a&#43;n,cmp);

    double sum=0;
    for(i=0;i&lt;n;i&#43;&#43;){
      if(m&gt;=a[i].f){
        sum&#43;=a[i].j;
        m-=a[i].f;
      }else{
        sum&#43;=a[i].s*m;
        m=0;
      }
      if(m&lt;=0)
        break;
    }
    printf(&#34;%.3lf\n&#34;,sum);
  }
  return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/hdu1009/  

