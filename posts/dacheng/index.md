# 大数乘法


&gt; 大数乘法 c 版 (基础写法)

&lt;!--more--&gt;

```cpp
#include&lt;stdio.h&gt;
#include&lt;string.h&gt;
#define N 202

int main() {
  int a[N] = {0}, b[N] = {0}, c[404] = {0}, la, lb, i, j,k, d = 0, n1, n2;//202 位数相乘，最长 404 位数
  int get(int *p);
  void change(int *a, int *b, int n);

  la = get(a);
  lb = get(b);
  n1 = la &gt; lb ? la : lb;//较长的数长
  n2 = la &lt; lb ? la : lb;//较短的数长

  if (la &lt; lb)
    change(a, b, lb);

  //模拟乘法运算过程（进位等考虑）
  for (i = 0; i &lt; n2; i&#43;&#43;) {
    for (j = 0; j &lt; n1; j&#43;&#43;) {
      c[j &#43; i] &#43;= (b[i] * a[j] &#43; d)%10;
      d = (b[i] * a[j] &#43; d) / 10;

      if (c[j&#43;i]&gt;9){
        d&#43;&#43;;
        c[j&#43;i]%=10;
      }
      if (a[j&#43;1]==0&amp;&amp;d!=0){
        k=j&#43;i&#43;1;
        c[k]=d;
      }
    }
    d=0;
  }

  k=k&gt;(j&#43;i-2)?k:j&#43;i-2;
  for (i = k; i &gt;= 0; i--)//将倒序装入的结果打印
    printf(&#34;%d&#34;, c[i]);

  return 0;
}

//输入字符串作为数字，并返回数字去除前导 0 后的长度
int get(int *p) {
  char x[N];
  int l, i, ex = 0;

  scanf(&#34;%s&#34;, x);
  l = strlen(x);
  while (x[ex] == &#39;0&#39;)
    ex&#43;&#43;;
  for (i = ex; i &lt; l; i&#43;&#43;) //提取字符串数字到 int 数组，倒序排列
    *(p &#43; l - i - 1) = x[i] - &#39;0&#39;;
  return l - ex;
}


void change(int *a, int *b, int n) {
  int i, t;
  for (i = 0; i &lt; n; i&#43;&#43;) {
    t = a[i];
    a[i] = b[i];
    b[i] = t;
  }
}
```

程序运行结果

```
1234567890123456789
98765432109876543210
121932631124517831023715309991126352690
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/dacheng/  

