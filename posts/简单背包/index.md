# 简单背包


`弱鸡还是弱鸡啊最简单的背包问题——。——！`

## 问题描述

假设有一个能装入总体积为 T 的背包和 n 件体积分别为 W1，W2，···，Wn 的物品，能否从 n 件物品中挑选若干件恰好装满背包，即使 W1&#43;W2&#43;···&#43;Wn=T，要求找出所有满足上述条件的解。例如：当 T=10，共 6 件物品，物品的体积为{1，2，3，4，5，8}，那么可找到下列 4 组解：（1，2，3，4）、（1，4，5）、（2，3，5）、（2、8）。

&lt;!--more--&gt;

## 实现提示

可利用回溯法的设计思想来解决背包问题。首先，将物品排成一列，然后顺序选取物品装入背包，假设已选取了前 i 件物品之后背包还没有装满，则继续选取第 i&#43;1 件物品，若该件物品“太大”不能装入，则丢弃而继续选取下一件，直至背包装满为止。但如果在剩余的物品中找不到合适的物品以填满背包，则说明“刚刚”装入背包的那件物品“不合适”，应将它取出“丢弃一边”，继续再从“它之后”的物品中选取，如此重复，直至求得满足条件的解，或者无解。由于回溯求解的规则是“后进先出”，因此要用到栈。

使用栈作为该程序的数据结构，利用栈进行语法检查，以深度优先的搜索方式解空间，实现递归过程和函数的调用，在设计时还使用 C 语言的数组及其循环语言来实现程序。  
运用回溯法解题，在搜索解空间树时，只要其左儿子节点是一个可行结点，搜索就进入左子树，在右子树中有可能包含最优解是才进入右子树搜索。否则将右子树剪去。

```c
#include &lt;stdio.h&gt;
#include &lt;windows.h&gt;
#define size 50

struct stacks {
  int data[size];
  int top;
} stack;

void backpack(int number,int V,int w[]){
    int i,j=1,k=0;
    int flag=0;
    do {
    while (V &gt; 0 &amp;&amp; k &lt;= number) {
      if (V &gt;= w[k]) {
        stack.data[stack.top] = k;//第 k 个物品的体积下标
        stack.top&#43;&#43;;
        V -= w[k];
      }
      k&#43;&#43;;
    }

    if (V == 0) {
      flag=1;
      printf(&#34;第%d 个符合条件的解：&#34;, j);
      for (i = 0; i &lt; stack.top; i&#43;&#43;) {
        printf(&#34;%d &#34;, w[stack.data[i]]);
      }
      j&#43;&#43;;
      printf(&#34;\n&#34;);
    }
    //k 满时回溯
    k = stack.data[--stack.top];
    stack.data[stack.top] = 0;
    V &#43;= w[k];
    k&#43;&#43;;
  } while (!(stack.top == 0 &amp;&amp; k == number));
  if(!flag){
    printf(&#34;背包无解！\n&#34;);
  }
}

void judge(int number,int V,int w[]){
    int i,s = 0;
  for (i = 0; i &lt; number; i&#43;&#43;)
    s = s &#43; w[i];
  if(V &gt; s){
    printf(&#34;背包无解！\n&#34;);
    exit(0);
  }
  if(V==s){
    printf(&#34;只有一个符合条件的解：%d\n&#34;, V);
    exit(0);
  }
}

int main() {
  int w[size];
  int V;
  int i = 0;
  int j = 0;
  int number;
  printf(&#34;\t **简单背包问题**\n\n&#34;);
  printf(&#34;\n 请输入可供选择装入物品的个数：\n&#34;);
  scanf(&#34;%d&#34;, &amp;number);
  printf(&#34;\n 请输入各件物品的体积：\n&#34;);
  for (i = 0; i &lt; number; i&#43;&#43;)
    scanf(&#34;%d&#34;, &amp;w[i]);

  //排序
  for(i=0;i&lt;number;i&#43;&#43;)
    for(j=i&#43;1;j&lt;number;j&#43;&#43;)
      if(w[i]&gt;w[j]){
        w[i]=w[i]^w[j];
        w[j]=w[i]^w[j];
        w[i]=w[i]^w[j];
      }

  printf(&#34;\n 请输入背包的总体积：\n&#34;);
  scanf(&#34;%d&#34;, &amp;V);
  while(V &lt; 0){
    printf(&#34;输入背包体积错误！重新输入！\n&#34;);
    scanf(&#34;%d&#34;,&amp;V);
  }

  judge(number,V,w);

  //初始化栈
  for (i = 0; i &lt; number; i&#43;&#43;)
  stack.data[i] = 0;
  stack.top = 0;

  backpack(number,V,w);
  return 0;
}
```

--这么简单的问题我都费力，太辣鸡了，还是要多练习啊！--


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/%E7%AE%80%E5%8D%95%E8%83%8C%E5%8C%85/  

