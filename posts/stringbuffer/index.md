# java 常用类


## StringBuffer/StringBuilder（掌握）

### StringBuffer 是线程安全的可变字符串

StringBuilder 是线程不安全的可变字符串。  
 和 StringBuffer 的功能一样。就是效率高一些，但是不安全。

### 构造方法

- StringBuffer sb = new StringBuffer();
- StringBuffer sb = new StringBuffer(50);
- StringBuffer sb = new StringBuffer("hello");

### 成员方法：（自己补齐方法和意思）

- 添加功能  
  public StringBuffer append(String str): 追加字符串  
  public StringBuffer insert(int offset,String str): 在指定位置插入字符串
- 删除功能  
  public StringBuffer deleteCharAt(int index): 删除指定位置字符  
  public StringBuffer delete(int start,int end): 删除从指定开始到结束的字符，左闭右开
- 替换功能  
  public StringBuffer replace(int start,int end,String str): 以字符串替代从指定开始到结束的字符
- 反转功能  
  public StringBuffer reverse(): 反转
- 截取功能  
  public String substring(int start): 从指定索引到末尾的字符串  
  public String substring(int start,int end): 从指定索引开始到指定索引结束的字符串

### 案例

- String 和 StringBuffer 的相互转换，通过构造即可。
- 把数组转成指定的字符串格式
- 把字符串反转
- 判断一个字符串是否是对称字符串

## 数组高级部分（理解）

### 排序

- 冒泡排序
  > 相邻元素，两两比较，大的往后放。

![冒泡排序](images/bubble.gif)

![冒泡排序](images/1.png)

```java
  public static void bubbleSort(int[] arr) {
    for(int x=0; x<arr.length-1; x++) {
      for(int y=0; y<arr.length-1-x; y++) {
        if(arr[y]>arr[y+1]) {
          int temp = arr[y];
          arr[y] = arr[y+1];
          arr[y+1] = temp;
        }
      }
    }
  }
```

- 选择排序
  > 从 0 开始，依次和后面的比较，小的往前放。

![选择排序 1](images/2.png)

```java
  public static void selectSort(int[] arr) {
    for(int x=0; x<arr.length-1; x++) {
      for(int y=x+1; y<arr.length; y++) {
        if(arr[y] < arr[x]) {
          int temp = arr[x];
          arr[x] = arr[y];
          arr[y] = temp;
        }
      }
    }
  }
```

![选择排序 2](images/select.gif)

```java
public static void selectSort(int[] a)
{
    int min=0;
    int temp=0;
    if((a==null)||(a.length==0))
        return;
    for(int i=0;i<a.length-1;i++)
    {
        min=i;//无序区的最小数据数组下标
        for(int  j=i+1;j<a.length;j++)
        {
            //在无序区中找到最小数据并保存其数组下标
            if(a[j]<a[min])
            {
                min=j;
            }
        }
        //将最小元素放到本次循环的前端
        temp=a[i];
        a[i]=a[min];
        a[min]=temp;
    }
}
```

### 查找

- 基本查找  
  数组无序
- 二分查找  
  数组有序

```java
public static int getIndex(int[] arr,int value) {
  int max = arr.length-1;
  int min = 0;
  int mid = (max+min)/2;

  while(arr[mid] != value) {
    if(arr[mid] > value) {
      max = mid - 1;
    }else if(arr[mid] < value) {
      min = mid + 1;
    }

    if(max < min) {
      return -1;
    }

    mid = (max+min)/2;
  }

  return mid;
}
```

## Arrays 工具类（掌握）

### Arrays 是针对数组进行操作的工具类，提供了排序和查找等功能

<!-- markdownlint-disable MD024 -->

### 成员方法：（自己补齐方法和意思）

- 把数组转成字符串
  public static String toString(): 将任意类型数据转换成字符串
- 排序
  public static void sort()：
- 二分查找
  public static int binarySearch(int[] arr,int key)

### 案例

把字符串中的字符进行排序

## 基本类型包装类（掌握）

### 为了让我们对基本类型进行更多的操作，java 针对每种基本类型提供了对应的包装类类型

### 分别是哪些呢？

```plain
  byte    Byte
  short    Short
  int    Integer
  long    Long
  float    Float
  double    Double
  char    Character
  boolean    Boolean
特殊：  void    Void
```

### Integer

- 构造方法
  - Integer i = new Integer(100);
  - Integer i = new Integer("100");
- 成员方法（自己补齐方法和意思）
  - 把字符串转成 int 类型  
    String->int: Integer.parseInt()  
    int->String: String.valueOf() 或 Integer.toString()
- JDK5 的新特性

```plain
自动装箱：
  int --> Integer    //Integer.valueOf()
自动拆箱：
  Integer --> int    //Integer.intValue()

请解释：
  Integer i = 100;
  i+=200;
  System.out.println(i);
```

- byte 缓存池面试题  
  byte,short,char--->小于 127，否则报-6 的错误（查看 JDK)

### Character

- 构造方法  
  Character ch = new Character('a');
- 成员方法（自己补齐方法和意思）
  - 判断字符是否是大写字母
    public boolean isUpperCase(char ch)
  - 判断字符是否是小写字母
    public boolean isLowerCase(Char ch)
  - 判断字符是否是数字字符
    public boolean isDigit(Char ch)
  - 把字符转成大写
    public Char toUpperCase(Char ch)
  - 把字符转成小写
    public Char toLowerCase(Char ch)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/stringbuffer/  

