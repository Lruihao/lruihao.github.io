# java 猜数字小游戏（Math 类）


> 大一刚学 c 的时候以前写过 [c 语言版](https://github.com/Lruihao/Grocery/tree/master/C%26C%2B%2B) 的。

1. Math: 针对数学进行运算的类
2. 特点：没有构造方法，因为它的成员都是静态的
3. 产生随机数：
   public static double random(): 产生随机数，范围 [0.0,1.0)
4. 产生 1-100 之间的随机数
   int number = (int)(Math.random()\*100)+1;
5. 猜数字小游戏案例

<!--more-->

```java
class MathDemo {
  public static void main(String[] args) {
    //获取随机数
    //double d = Math.random();
    //System.out.println(d);

    /*
    for(int x=0; x<10; x++) {
      //System.out.println(Math.random());
      System.out.println(Math.random()*100);
    }
    */

    //我们如何获取 1-100 之间的随机数呢？
    for(int x=0; x<100; x++) {
      int number = (int)(Math.random()*100)+1;
      System.out.println(number);
    }
  }
}
```

### 小游戏

> 该游戏可以由程序随机产生或由用户输入四个 0 到 9 之间的数字，且不重复。玩游戏者通过游戏提示输入八次来匹配上面所输入的数字。A 表示位置正确且数字正确，B 表示数字正确而位置不正确。  
> 算法： 可以直接算出 A 类的数目，但是 B 类的数目直接算出或许会很麻烦，正好我们可以先算出 C 类数目恰好减去 A 类就是 B 类了。

```java
package caishuzi;

import java.util.Scanner;

class Num {
  private int[] a= {0,0,0,0};

  public Num() {}

  public void setx() {
    /*for(int i=0;i<4;i++) {
      a[i]=(int)(Math.random()*10);
    }*/
    //为了四个互不相同的随机数
    a[0]=(int)Math.random()*10+1;
    for(int i=1;i<4;i++) {
      int t=(int)(Math.random()*10);
      for(int j=0;j<i;j++) {
        if(t==a[j]) {
          t=(int)(Math.random()*10);
          j=0;
        }
      }
      a[i]=t;
    }
  }
  public int[] getx() {
    return a;
  }
  public void show() {
    System.out.println();
    for(int i=0;i<4;i++)
      System.out.print(a[i]+" ");
    System.out.println();
  }

}

public class caishuzi {

  public static void main(String agrs[]) {
    int a[] = {0,0,0,0},b[] = {0,0,0,0};
    System.out.println("* * * *\n 请输入 4 个数字！A 表示位置数字都正确，B 表示数字正确位置错误。");
    Scanner sc=new Scanner(System.in);
    Num n=new Num();
    n.setx();
    a=n.getx();
    /*for(int i=0;i<4;i++)
      System.out.print(a[i]+" ");
    n.show();*/
    for(int k=0;k<10;k++) {//猜测次数
      int A=0,B=0,C=0;
      for(int i=0;i<4;i++) {
        b[i]=sc.nextInt();
      }
      sc.close();
      for(int i=0;i<4;i++){
        if (b[i]==a[i])A++;
        for(int j=0;j<4;j++){
          C=b[i]==a[j]?++C:C;//C 表示猜测数内和随机数中 A 类和 B 类数的数目
          if (b[i]==a[j])break;
        }
      }
      B=C-A;// 关键算法（感叹数学魅力）
      if(A==4) {
        System.out.println("恭喜猜对啦！");
      }else {
        System.out.println(A+"A"+B+"B");
      }
    }

  }

}
```

### 一次游戏过程

```plain
* * * *
请输入 4 个数字！A 表示位置数字都正确，B 表示数字正确位置错误。
0 1 2 3
0A1B
0 1 2 4
0A1B
0 1 2 5
1A1B
6 1 2 5
1A2B
1 6 2 5
3A0B
1 6 7 5
恭喜猜对啦！
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/mathclass/  

