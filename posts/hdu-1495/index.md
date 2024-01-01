# HDU-1495-非常可乐（bfs 模拟倒水 or 数论）


[非常可乐](http://acm.hdu.edu.cn/showproblem.php?pid=1495)

大家一定觉的运动以后喝可乐是一件很惬意的事情，但是 seeyou 却不这么认为。因为每次当 seeyou 买了可乐以后，阿牛就要求和 seeyou 一起分享这一瓶可乐，而且一定要喝的和 seeyou 一样多。但 seeyou 的手中只有两个杯子，它们的容量分别是 N 毫升和 M 毫升 可乐的体积为 S（S&lt;101）毫升（正好装满一瓶） ，它们三个之间可以相互倒可乐（都是没有刻度的，且 S==N&#43;M，101 ＞ S ＞ 0，N ＞ 0，M ＞ 0) 。聪明的 ACMER 你们说他们能平分吗？如果能请输出倒可乐的最少的次数，如果不能输出&#34;NO&#34;。

## Input

三个整数 : S 可乐的体积 , N 和 M 是两个杯子的容量，以&#34;0 0 0&#34;结束。

## Output

如果能平分的话请输出最少要倒的次数，否则输出&#34;NO&#34;。

## Sample Input

    7 4 3
    4 1 3
    0 0 0

## Sample Output

    NO
    3

模拟一下倒水的过程，一共有三种倒法，a 向 bc，b 向 ac，c 向 ab。（相当于一共六个方向）搜索并记录搜索过的过程就好了。

&lt;!-- markdownlint-disable MD046 --&gt;

```cpp
#include&lt;bits/stdc&#43;&#43;.h&gt;
using namespace std;

int a,b,c;
int used[111][111][111];
struct node
{
  int x,y,z;
  int step;
}m,n;

int bfs()
{
  queue&lt;node&gt;q;
  m.x = a;
  m.y = 0;
  m.z = 0;
  m.step = 0;
  used[a][0][0] = 1;
  q.push(m);
  while (!q.empty())
  {
    int trans;    //倒水量
    m = q.front();
    q.pop();

    //成功分好的三种情况
    if ((m.x == 0 &amp;&amp; m.y == m.z) || (m.y == 0 &amp;&amp; m.x == m.z) || (m.z == 0 &amp;&amp; m.x == m.y))
      return m.step;

    //下面开始 6 个搜索（由一个杯子向另外两个倒水）
    if (m.x)
    {
      //第一
      trans = min(m.x , b - m.y);//自己模拟一下倒水过程就知道了
        n.x = m.x - trans;
        n.y = m.y &#43; trans;
        n.z = m.z;
        n.step = m.step &#43; 1;
        if (!used[n.x][n.y][n.z])
        {
          q.push(n);
          used[n.x][n.y][n.z] = 1;
        }

      //第二
      trans = min(m.x , c - m.z);
        n.x = m.x - trans;
        n.y = m.y;
        n.z = m.z &#43; trans;
        n.step = m.step &#43; 1;
        if (!used[n.x][n.y][n.z])
        {
          q.push(n);
          used[n.x][n.y][n.z] = 1;
        }
    }
    if (m.y)
    {
      //第三
      trans = min(m.y , a - m.x);
        n.x = m.x &#43; trans;
        n.y = m.y - trans;
        n.z = m.z;
        n.step = m.step &#43; 1;
        if (!used[n.x][n.y][n.z])
        {
          used[n.x][n.y][n.z] = 1;
          q.push(n);
        }

      //第四
      trans = min(m.y , c - m.z);
        n.x = m.x;
        n.y = m.y - trans;
        n.z = m.z &#43; trans;
        n.step = m.step &#43; 1;
        if (!used[n.x][n.y][n.z])
        {
          used[n.x][n.y][n.z] = 1;
          q.push(n);
        }
    }
    if (m.z)
    {
      //第五
      trans = min(m.z , a - m.x);
        n.x = m.x &#43; trans;
        n.y = m.y;
        n.z = m.z - trans;
        n.step = m.step &#43; 1;
        if (!used[n.x][n.y][n.z])
        {
          used[n.x][n.y][n.z] = 1;
          q.push(n);
        }

      //第六
      trans = min(m.z , b - m.y);
        n.x = m.x;
        n.y = m.y &#43; trans;
        n.z = m.z - trans;
        n.step = m.step &#43; 1;
        if (!used[n.x][n.y][n.z])
        {
          q.push(n);
          used[n.x][n.y][n.z] = 1;
        }
    }
  }
  return 0;
}

int main()
{
  while (~scanf (&#34;%d %d %d&#34;,&amp;a,&amp;b,&amp;c) &amp;&amp; (a || b || c))
  {
    if (a&amp;1)    //先简单的剪枝一下，奇数肯定不能平分
      printf (&#34;NO\n&#34;);
    else
    {
      memset (used,0,sizeof (used));
      int ans = bfs();
      if (ans)
        printf (&#34;%d\n&#34;,ans);
      else
        printf (&#34;NO\n&#34;);
    }
  }
  return 0;
}
```

然后杭电上讨论板子上提供一种数论题解，~~但是数据存在一点问题，只不过有些数据好像不对；比如：10 6 5 的结果应该是 1 而不是 9~~，也提示我们多维思考同一个问题！

[数论推导](https://blog.csdn.net/V5ZSQ/article/details/52097459)

```cpp
#include&lt;bits/stdc&#43;&#43;.h&gt;
using namespace std;

int main(){
    int s,n,m;
    while(cin&gt;&gt;s&gt;&gt;n&gt;&gt;m,s&#43;n&#43;m){
        s/=__gcd(n,m);
        if(s&amp;1)//奇数
            cout&lt;&lt;&#34;NO\n&#34;;
        else cout&lt;&lt;s-1&lt;&lt;endl;
    }
    return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/hdu-1495/  

