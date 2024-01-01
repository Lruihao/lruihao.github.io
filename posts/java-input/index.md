# java 录入数据


## 记忆格式

(1) 导包：  
 import java.util.Scanner;  
 注意：位置在 class 的上面。  
(2) 创建键盘录入对象：  
 Scanner sc = new Scanner(System.in);  
(3) 获取数据  
 int i = sc.nextInt();  
(4) 练习：  
 A: 求两个数据的和  
 B: 获取两个数据中较大的值  
 C: 获取三个数据中较大的值  
 D: 比较两个数是否相等

## 实例

```java
package helloworld;

import java.util.Scanner;

public class helloworld {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int i=sc.nextInt(),j=sc.nextInt(),k=sc.nextInt();
    sc.close();
    System.out.println(i&#43;&#34;&#43;&#34;&#43;j&#43;&#34;=&#34;&#43;(i&#43;j));
    System.out.println(&#34;MAXij=&#34;&#43;Max(i,j));
    System.out.println(&#34;MAXijk=&#34;&#43;Max(i,j,k));

  }
  //Max() 方法重载
  static int Max(int i,int j) {
    return i&gt;j?i:j;
  }
  static int Max(int i,int j,int k) {
    if(i==j)
      System.out.println(&#34;i 和 j 相等&#34;);
    else if(i==k)
      System.out.println(&#34;i 和 k 相等&#34;);
    else if(j==k)
      System.out.println(&#34;j 和 k 相等&#34;);
    return  (i=i&gt;j?i:j)&gt;k?i:k;
  }

}
```

结果

```plain
5 5 6
5&#43;5=10
MAXij=5
i 和 j 相等
MAXijk=6
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/java-input/  

