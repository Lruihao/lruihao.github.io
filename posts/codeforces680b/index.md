# Bear and Finding Criminals-Codeforces680B


题目链接：[Bear and Finding Criminals](https://codeforces.com/problemset/problem/680/B)

大致题意就是小熊警察住在某个城市，他要抓各个城市的罪犯，现在用一个 BCD 可以知道那个城市里**一定**有罪犯。

一定能确定该城市有小偷的几种情况：

1. 警察所住城市有罪犯，则一定能检测到

2. 警察所住城市的左边和右边位置若**都**不为 0，则说明两座城市都有罪犯（只有一边为 1 是不能确定到底哪个城市有罪犯的）
3. 警察所在城市的一边检测到有罪犯，但在另一边已经没有城市了，则说明该城市一定有罪犯

&lt;!--more--&gt;

```cpp
#include&lt;bits/stdc&#43;&#43;.h&gt;
using namespace std;

int t[107];

int main()
{
  int n, a;
  while(cin&gt;&gt;n&gt;&gt;a){
    int sum = 0;
    for(int i =1; i &lt;= n; i&#43;&#43;)
      cin &gt;&gt; t[i];
    if(t[a]) sum&#43;&#43;;//小熊所在城市有罪犯
    for(int i = 1; i &lt;= n; i&#43;&#43;){
      if(a-i &gt; 0&amp;&amp;a&#43;i &lt;= n) {
        if(t[a-i] == 1&amp;&amp;t[a&#43;i] == 1)
          sum&#43;=2;
      }
      else if(a-i &lt;= 0&amp;&amp;a&#43;i &lt;= n){//警察在第一个点
        if(t[a&#43;i])
          sum&#43;&#43;;
      }
      else if(a-i &gt; 0&amp;&amp;a&#43;i &gt; n){
        if(t[a-i])
          sum&#43;&#43;;
      }
    }
    cout &lt;&lt;sum&lt;&lt;endl;
  }
  return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/codeforces680b/  

