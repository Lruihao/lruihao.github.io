# Java 录入数据


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
    System.out.println(i+"+"+j+"="+(i+j));
    System.out.println("MAXij="+Max(i,j));
    System.out.println("MAXijk="+Max(i,j,k));

  }
  //Max() 方法重载
  static int Max(int i,int j) {
    return i>j?i:j;
  }
  static int Max(int i,int j,int k) {
    if(i==j)
      System.out.println("i 和 j 相等");
    else if(i==k)
      System.out.println("i 和 k 相等");
    else if(j==k)
      System.out.println("j 和 k 相等");
    return  (i=i>j?i:j)>k?i:k;
  }

}
```

结果

```plain
5 5 6
5+5=10
MAXij=5
i 和 j 相等
MAXijk=6
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/java-input/  

