# POJ-3278-Catch That Cow(bfs)


Farmer John has been informed of the location of a fugitive cow and wants to catch her immediately. He starts at a point N (0 ≤ N ≤ 100,000) on a number line and the cow is at a point K (0 ≤ K ≤ 100,000) on the same number line. Farmer John has two modes of transportation: walking and teleporting.

- Walking: FJ can move from any point X to the points X&#34;,&#34;1 or X &#43; 1 in a single minute
- Teleporting: FJ can move from any point X to the point 2 × X in a single minute.

If the cow, unaware of its pursuit, does not move at all, how long does it take for Farmer John to retrieve it?

## Input

Line 1: Two space-separated integers: N and K

## Output

Line 1: The least amount of time, in minutes, it takes for Farmer John to catch the fugitive cow.

## Sample Input

    5 17

## Sample Output

    4

## Hint

The fastest way for Farmer John to reach the fugitive cow is to move along the following path: 5-10-9-18-17, which takes 4 minutes.

## 题意

农场主的牛不见了，主人和牛在一条直线上，且牛没有新的目标，它不会走动，主人的位置是你 n，牛的位置是 k，主人可以有三种走路的方法，右左（距离&#43;-1），闪现（距离&#43;x,x 为当前位置），每走一步，一分钟，问几分钟主人能找到牛。bfs 搜索方向即为三个“方向”。搜索所有走法；

&lt;!-- markdownlint-disable MD046 --&gt;

```cpp
#include&#34;iostream&#34;
#include&lt;queue&gt;
#include&#34;string.h&#34;
using namespace std;

int n,k;
bool sign[200007];

struct node{
    int x,step;
};

bool check(int a)
{
    if(!sign[a]&amp;&amp;a&gt;=0&amp;&amp;a&lt;110000)
        return true;
    return false;
}

void bfs()
{
    node u,v;
    queue&lt;node&gt; q;
    v.x=n;//初始化起点
    v.step=0;
    q.push(v);
    sign[v.x]=true;
    while(!q.empty()){
        u=q.front();
        q.pop();
        if(u.x==k){
            cout&lt;&lt;u.step&lt;&lt;endl;
            return ;
        }

        //三种前进方向，左右和闪现
        v=u;
        v.x&#43;&#43;;
        v.step&#43;&#43;;
        if(check(v.x)){
            sign[v.x]=true;
            q.push(v);
        }

        v=u;
        v.x--;
        v.step&#43;&#43;;
        if(check(v.x)){
            sign[v.x]=true;
            q.push(v);
        }

        v=u;
        v.x=2*v.x;
        v.step&#43;&#43;;
        if(check(v.x)){
            sign[v.x]=true;
            q.push(v);
        }
    }
}

int main()
{
    cin&gt;&gt;n&gt;&gt;k;
    memset(sign,0,sizeof(sign));
    bfs();
    return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/poj-3278/  

