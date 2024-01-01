# java 泛型 test


&gt; - 泛型方法，它在修饰符后，返回值类型前增加了类型参数 (&lt;&gt;)
&gt; - 类型通配符一般使用问号`?`代替具体的类型`实`参，注意不是类型形参。

&lt;!--more--&gt;

## 代码

```java
package code0507;

public class WildCardTest {

  public static void main(String[] args) {
    Box&lt;String&gt;name=new Box&lt;String&gt;(&#34;hello&#34;);
    Box&lt;Integer&gt;age=new Box&lt;Integer&gt;(12);
    Box&lt;Double&gt;number=new Box&lt;Double&gt;(210.50);
    Box&lt;Integer&gt;point=new Box&lt;Integer&gt;();
    getData(name);
    getData(age);
    getData(number);
    point.printpoint(520, 1314);
    point.printpoint(&#34;me&#34;, &#34;too&#34;);
  }

  public static void getData(Box&lt;?&gt;data){//类型通配符
    System.out.println(&#34;data:&#34;&#43;data.getData());
  }
}
class Box&lt;T&gt;{
  private T data;
  public Box() {}//构造方法重载
  public Box(T data) {
    setData(data);
  }
  public T getData() {
    return data;
  }
  public void setData(T data) {
    this.data = data;
  }
  //定义泛型方法
  public&lt;T1,T2&gt;void printpoint(T1 x,T2 y){
    T1 m=x;
    T2 n=y;
    System.out.println(&#34;This point is:&#34;&#43;m&#43;&#34;,&#34;&#43;n);
  }
}
```

## 运行结果

```java
data:hello
data:12
data:210.5
This point is:520,1314
This point is:me,too
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/fanxing/  

