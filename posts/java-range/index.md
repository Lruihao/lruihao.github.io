# java 水仙花数（循环）


&gt; 水仙花数（Narcissistic number）也被称为超完全数字不变数（pluperfect digital invariant, PPDI）、自恋数、自幂数、阿姆斯壮数或阿姆斯特朗数（Armstrong number），水仙花数是指一个 3 位数，它的每个位上的数字的 3 次幂之和等于它本身（例如：1^3 &#43; 5^3&#43; 3^3 = 153）。

&lt;!--more--&gt;

## 定义

水仙花数只是自幂数的一种，严格来说 3 位数的 3 次幂数才称为水仙花数。  
附：其他位数的自幂数名字  
一位自幂数：独身数  
两位自幂数：没有  
三位自幂数：水仙花数  
四位自幂数：四叶玫瑰数  
五位自幂数：五角星数  
六位自幂数：六合数  
七位自幂数：北斗七星数  
八位自幂数：八仙数  
九位自幂数：九九重阳数  
十位自幂数：十全十美数

```java
package xunhuan;

import java.util.Scanner;

public class shuixianhua {

    public static void main(String[] agrs) {
        System.out.print(&#34;指定最大位数 N:&#34;);
        Scanner input = new Scanner(System.in);
        int N = input.nextInt();
        input.close();
        for (int i = 3; i &lt;= N; i&#43;&#43;) {
            int a[] = new int[i];
            int num = (int) Math.pow(10, i - 1) &#43; 1;
            System.out.print(i &#43; &#34;位的水仙花数有：\t&#34;);
            while (num &lt;= Math.pow(10, i)) {
                int sum = 0;
                for (int j = 0; j &lt; i; j&#43;&#43;)
                    a[j] = (int) (num / Math.pow(10, j) % 10);//取各个位的数
                for (int j = 0; j &lt; i; j&#43;&#43;)
                    sum = sum &#43; (int) Math.pow(a[j], i);
                if (num == sum)
                    System.out.print(num &#43; &#34;\t&#34;);
                num&#43;&#43;;
            }
            System.out.print(&#34;\n&#34;);
        }
    }

}
```

由于 int 精度限制，最多算到 9 位，而且使用常规算法，算到 8，9 位的时候就特别慢了。

```plain
指定最大位数 N:10
3 位的水仙花数有：153  370  371  407
4 位的水仙花数有：1634  8208  9474
5 位的水仙花数有：54748  92727  93084
6 位的水仙花数有：548834
7 位的水仙花数有：1741725  4210818  9800817  9926315
8 位的水仙花数有：24678050  24678051  88593477
9 位的水仙花数有：146511208
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/java-range/  

