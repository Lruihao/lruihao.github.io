# 小希的迷宫-HDU-1272（并查集 or 树性质）


## 题目链接：[小希的迷宫](http://acm.hdu.edu.cn/showproblem.php?pid=1272)

## 并查集

- 无回路
- 单连通

并查集做，首先想到的是判断两个点是否连通，不连通就合并，已连通的话说明会形成**回路**，则可以判定 No，交了一发错了。  
想了一下没有考虑到多个连通域的情况，该题必须只有**一个连通域**

## 树的性质

既然单连通无回路，则这肯定是一棵树；那么 edge=v-1;

&lt;!--more--&gt;

最后注意空树的情况，至于自环我这里 No 也过了，没有去验证自环 Yes 的情况了

```cpp
//并查集
#include&lt;bits/stdc&#43;&#43;.h&gt;
using namespace std;

int pre[100001];

int find(int root){
    int son,t;
    son=root;
    while(root!=pre[root])
        root=pre[root];
    while(son!=root){
        t=pre[son];
        pre[son]=root;
        son=t;
    }
    return root;
}

void join(int a,int b){
    int x=find(a),y=find(b);
    if(x!=y)
        pre[y]=x;
}

int main(){
    int a,b,flag,i,sum;
  while(1)
  {
    flag = 0;
    while(~scanf(&#34;%d%d&#34;,&amp;a,&amp;b) &amp;&amp; a!=0 &amp;&amp; b!=0){
      if(a==-1 &amp;&amp; b==-1) return 0;
            if(pre[a]==0)pre[a]=a;
      if(pre[b]==0)pre[b]=b;
      if(find(a)==find(b))flag = 1;
      else if(flag!=1)
      join(a,b);
    }
        for(sum = 0,i=1;i&lt;100001;i&#43;&#43;){
            if(pre[i]==i)sum&#43;&#43;;
            pre[i] = 0;
        }
        if(sum&gt;1 || flag == 1)
      printf(&#34;No\n&#34;);
        else
      printf(&#34;Yes\n&#34;);
  }
}
//1 2 3 4 0 0 No 没有连通
//0 0 Yes
//1 1 0 0 No（该代码）
```

```C
//树性质
#include &lt;stdio.h&gt;
bool s[100001];
int main()
{  int a,b,i,len,num,v;
  for(i=0;i&lt;100001;&#43;&#43;i)  s[i]=false;
  len=0,num=0,v=0;
  while(1)
  {  scanf(&#34;%d%d&#34;,&amp;a,&amp;b);
    if(a==-1&amp;&amp;b==-1)  break;
    if(a==0&amp;&amp;b==0)
    {  if(v==0)
      {  printf(&#34;Yes\n&#34;);
        continue;
      }
      if(num==len-1)  //划重点！！
        printf(&#34;Yes\n&#34;);
      else printf(&#34;No\n&#34;);

      num=len=v=0;
      for(i=0;i&lt;100001;&#43;&#43;i)
        s[i]=false;
      continue;
    }
    v=1;
    if(s[a]==false)    len&#43;&#43;;//点数
    if(s[b]==false)    len&#43;&#43;;
    s[a]=s[b]=true;
    num&#43;&#43;;//边数
  }
  return 0;
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/hdu1272/  

