# 判断三角形的黑盒测试


&gt; 黑盒测试着重测试软件功能，它并不涉及程序的内部结构和内容特性，主要根据规格说明，只依靠被测试程序的输入和输出之间关系或程序的功能来设计测试用例。  
&gt; 白盒测试则清楚程序内部的结构以及是如何运作的，因此白盒测试需要对系统内部的结构和工作原理有一个清楚的了解。

&lt;!--more--&gt;

## 程序

```cpp
#include&lt;stdio.h&gt;
#include&lt;stdlib.h&gt;
#define N 2&lt;&lt;25

int a=N,b=N,c=N,d=N;
void shuru();
void panduan(int a1,int b1,int c1);
int main()
{
    char se;
    shuru();
    panduan(a,b,c);
    while(1)
    {
        printf(&#34;是否要继续 y or n :&#34;);
        scanf(&#34;%c&#34;,&amp;se);
        if(se==&#39;\n&#39;) scanf(&#34;%c&#34;,&amp;se);
        switch(se)
        {
        case &#39;y&#39;:
          shuru();
          panduan(a,b,c);
          break;
        case &#39;n&#39;:
          return 0;
        }
    }
}
void shuru()
{
    printf(&#34;Please enter 三角形三边 (a,b,c)\n&#34;);
    while(!scanf(&#34;%d,%d,%d,%d&#34;,&amp;a,&amp;b,&amp;c,&amp;d)){//判断非数字字符
        fflush(stdin);//清理缓存
        a=N;b=N;c=N;d=N;
        printf(&#34;输入错误、n&#34;);
    }
    fflush(stdin);
    while((a&lt;1||a&gt;100)||(b&lt;1||b&gt;100)||(c&lt;1||c&gt;100)||d!=N)
    {
        if(b==N||c==N||d!=N) printf(&#34;输入错误、n&#34;);//边数为 1、2、4 条
        else if(a==0||b==0||c==0) printf(&#34;边长不能为 0\n&#34;);
        else if(a&lt;0||b&lt;0||c&lt;0) printf(&#34;边长不能为负、n&#34;);
        else printf(&#34;Please enter 1-100 之间的整数、n&#34;);
        a=N;b=N;c=N;d=N;
        while(!scanf(&#34;%d,%d,%d,%d&#34;,&amp;a,&amp;b,&amp;c,&amp;d)){//判断非数字字符
            fflush(stdin);//清理缓存
            a=N;b=N;c=N;d=N;
            printf(&#34;输入错误、n&#34;);
        }
        fflush(stdin);
    }
}
void panduan(int a1,int b1,int c1)
{
    if(a1&#43;b1&gt;c1&amp;&amp;b1&#43;c1&gt;a1&amp;&amp;a1&#43;c1&gt;b1)
    {
        if(a1==b1&amp;&amp;a1==c1)
            printf(&#34;等边三角形、n&#34;);
        else if(a1==b1||a1==c1||b1==c1)
            printf(&#34;等腰三角形、n&#34;);
        else
            printf(&#34;一般三角形、n&#34;);
    }
    else
        printf(&#34;非三角形、n&#34;);
}
```

## 测试

![测试 1](images/1.png &#39;测试 1&#39;)  
![测试 2](images/2.png &#39;测试 2&#39;)  
![测试 3](images/3.png &#39;测试 3&#39;)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/judgetriangle/  

