# 百钱百鸡（枚举法）


&gt; 我国古代数学家张丘建在《算经》一书中提出的数学问题：鸡翁一值钱五，鸡母一值钱三，鸡雏三值钱一。百钱买百鸡，问鸡翁、鸡母、鸡雏各几何？

&lt;!--more--&gt;

&gt; 设公鸡，母鸡，小鸡数目分别为 x,y,z(x&lt;=20,y&lt;=33,z&lt;=100)

## 约束条件

- x&#43;y&#43;z=100
- 5x&#43;3y&#43;z/3=100

## 算法分析

&gt; 若依次枚举 x,y,x, 则至少尝试 21\*34\*100=71400 次，显然效率太低。  
&gt; 在 x,y 的数目确定后，z 的数目也就确定下来了 100-x-y，无须再进行枚举，此时约束条件只有一个 5x&#43;3y&#43;z/3=100. 只需枚举 x,y，共 21\*34=714 次。

## 算法设计

```cpp
#include&lt;stdio.h&gt;

int main(){
    int x,y,z;
    for(x=0;x&lt;=20;x&#43;&#43;) //21*34=714
    for(y=0;y&lt;=33;y&#43;&#43;){
        z=100-y-x;
        if(z%3==0 &amp;&amp; (5*x&#43;3*y&#43;z/3)==100){//限定 z 能被 3 整除，进一步提高效率
            printf(&#34;cock number:%d\t&#34;,x);
            printf(&#34;hen number:%d\t&#34;,y);
            printf(&#34;chick number:%d\n&#34;,z);
        }
    }
    return 0;
}
```

运行解

```cpp 运行解
cock number:0   hen number:25   chick number:75
cock number:4   hen number:18   chick number:78
cock number:8   hen number:11   chick number:81
cock number:12  hen number:4    chick number:84
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/bqbj/  

