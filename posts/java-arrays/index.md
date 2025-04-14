# Arrays 类及基本使用


## 主要方法

- static type[] copyof(type[] original,int length)
- static int binarysearch(type[] a,type key)
- static boolean equals(type[] a,type[] b)
- static void fill(type[] a,type val)
- static void fill(type[] a,int fromindex,int toindex,type val)
- static void sort(type[] a)

<!--more-->

## 实例代码

```java
package Arrays;

import java.text.Collator;
import java.util.Arrays;
import java.util.Comparator;

public class ArraysDemo {
  public static void main(String agrs[]) {
    Integer arr[]=new Integer[9];
    for(int i=0;i<9;i++)
      arr[i]=(int)(Math.random()*100);
    //显示，排序数组
    System.out.print("原内容：");
    display(arr);
    Arrays.sort(arr);
    System.out.print("排序后：");
    display(arr);
    //将值 -1 分配给数组 arr 中下标从 0 到 3-1 的位置
    Arrays.fill(arr, 0,3,-1);
    System.out.print("fill() 后：");
    display(arr);
    //搜索 23
    System.out.print("值 23 的位置：");
    int index =Arrays.binarySearch(arr, 23);//二分查找
    System.out.print(index);//如果查找不到，index 为负
    System.out.print("\n 插入 0 在 3 号位置：");
    Arrays.fill(arr,3,4,0);
    display(arr);
    System.out.print("值 0 的位置：");
    index =Arrays.binarySearch(arr, 0);
    System.out.print(index);
    Integer arr2[]=new Integer[8];
    arr2=Arrays.copyOf(arr, arr2.length);
    //复制 8 个
    System.out.print("\n 复制后的数组：");
    display(arr2);
    if(Arrays.equals(arr, arr2))
      System.out.println("两数组相同！");
    else System.out.println("两数组不相同！");
    System.out.println("----------------------------------------");
    String[] str = {"计算机","黄桑","通信","李瑞豪"};
    Arrays.sort(str);
    for(int i=0;i<str.length;i++)
      System.out.print(str[i]+" ");
    System.out.println("");
    //Collator 类是用来执行分语言环境的字符串比较，这里用的 CHINA
    Comparator com=Collator.getInstance(java.util.Locale.CHINA);//获取 Comparator 对象，参数表示按中文排序
    //根据指定的 "比较器" 产生的顺序对 "指定对象数组" 进行排序
    Arrays.sort(str,com);//sort(T[] a,Comparator<?super T>c)
    for(int i=0;i<str.length;i++)
      System.out.print(str[i]+" ");
  }
  static void display(Integer arr[]) {
    for(int i=0;i<arr.length;i++)
      System.out.print(arr[i]+" ");
    System.out.println("");
  }
}
```

## 程序运行结果

```plain
原内容：41 0 44 96 49 96 30 6 87
排序后：0 6 30 41 44 49 87 96 96
fill() 后：-1 -1 -1 41 44 49 87 96 96
值 23 的位置：-4
插入 0 在 3 号位置：-1 -1 -1 0 44 49 87 96 96
值 0 的位置：3
复制后的数组：-1 -1 -1 0 44 49 87 96
两数组不相同！
----------------------------------------
李瑞豪 计算机 通信 黄桑
黄桑 计算机 李瑞豪 通信
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/java-arrays/  

