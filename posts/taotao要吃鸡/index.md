# TaoTao 要吃鸡


&gt; 2018 年全国多校算法寒假训练营练习比赛（第二场）B(0 1 背包变化 特殊处理一个物品）  
&gt; 链接：&lt;https://www.nowcoder.com/acm/contest/74/B&gt;  
&gt; 来源：牛客网

## 题目描述

Taotao 的电脑带不动绝地求生，所以 taotao 只能去玩 pc 版的荒野行动了，和绝地求生一样，游戏人物本身可以携带一定重量 m 的物品，装备背包之后可以多携带 h（h 为 0 代表没有装备背包）重量的东西。玩了几天 taotao 发现了一个 BUG，当装备背包之后，如果可携带重量没有满，就可以拿一个任意重的东西（解释看样例）有一天 taotao 空降到了一个奇怪的岛上，岛上有 n 件装备，每个装备都有重量 Wi 和威力值 Vi, 但 taotao 不认识这些装备，所以他来求助你，挑选威力最大的装备，帮助他吃鸡。

## 输入描述

本题有多组输入（小于 10），当 n=0 时结束输入。第一行输入 n,m,h。n，m，h 为整数，并且 0&lt;=n,m,h&lt;=100，接下来 n 行，每行输入第 i 个物品的物品的重量 Wi 和威力值 Vi。0&lt;=Wi,Vi&lt;=100.

## 输出描述

输出最大威力值，每组输出一行。

## 示例 1

### 输入

    3 3 3
    2 3
    3 2
    2 3
    0

### 输出

    8

## 说明

可携带的总重量为 6，当拿了前两件装备，此时容量为 5/6，还可以再拿第三件物品。

思路：0-1 背包的变形题目，h=0 的时候为背包的模板，h！=0 的时候枚举每一个需要特殊处理的物品再背包

&lt;!-- markdownlint-disable MD046 --&gt;

```cpp
#include &lt;bits/stdc&#43;&#43;.h&gt;
using namespace std;

int v[105];
int w[105];
int n,m,h;
int dp[205];
int main()
{

    while(scanf(&#34;%d&#34;,&amp;n)==1&amp;&amp;n!=0){

        int sum=0;

        scanf(&#34;%d%d&#34;,&amp;m,&amp;h);

        for(int i=1;i&lt;=n;i&#43;&#43;)

            scanf(&#34;%d%d&#34;,&amp;w[i],&amp;v[i]);

        if(h==0){

            memset(dp,0,sizeof(dp));

            for(int i=1;i&lt;=n;i&#43;&#43;)    //前 i 个物品

                for(int j=m;j&gt;=w[i];j--)   //枚举背包重量

                dp[j]=max(dp[j],dp[j-w[i]]&#43;v[i]);  //

               sum=dp[m];

        }

        else{
             m&#43;=h
            for(int k=1;k&lt;=n;k&#43;&#43;) //枚举可以被剩下的物品
            {
                memset(dp,0,sizeof(dp));

                for(int i=1;i&lt;=n;i&#43;&#43;){  //前 i 个物品

                    if(i!=k){

                       for(int j=m;j&gt;=w[i];j--)   //枚举背包重量

                       dp[j]=max(dp[j],dp[j-w[i]]&#43;v[i]);

                    }

                } //留下来一个重量，即初始化威力为那个重量的威力

               for(int j=m-1;j&gt;=m-w[k];j--)   //枚举背包重量 &#43; 剩下物品

                dp[m]=max(dp[m],dp[j]&#43;v[k]);

               // printf(&#34;%d\n&#34;,dp[m]);

               sum=max(sum,dp[m]);
            }
        }
        printf(&#34;%d\n&#34;,sum);
    }
    return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/taotao%E8%A6%81%E5%90%83%E9%B8%A1/  

