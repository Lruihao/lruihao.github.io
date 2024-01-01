# 匿名类在可视化界面中的应用


&gt; java 中匿名类用的最多的地方就是可视化界面设计中，特别是将`事件监听器`注册到某个组件上的时候。

&lt;!--more--&gt;

## 代码

```java
package cn.lruihao;

import java.awt.event.*;
import javax.swing.*;

public class QFrame extends JFrame {
  public QFrame() {
    JButton jbtnew=new JButton(&#34;New&#34;);//新建按钮
    JPanel panel=new JPanel();//面板容器
    panel.add(jbtnew);//添加组件
    add(panel);
    jbtnew.addActionListener(new ActionListener() {
      //新建一匿名类，并将该对应的事件监听器注册到“新建”按钮 就 jbtnew 上
      @Override
      public void actionPerformed(ActionEvent e) {
        JOptionPane.showMessageDialog(null, &#34;单击了新建按钮&#34;);
        System.out.println(&#34;lruihao.cn&#34;);

      }
    });
  }

  public static void main(String[] args) {
    JFrame frame=new QFrame();
    frame.setTitle(&#34;QFrame&#34;);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setLocationRelativeTo(null);
    frame.pack();
    frame.setVisible(true);

  }

}
```

创建一个可视化界面，界面中有一个按钮，单击按钮显示“单击了新建按钮”。

## 结果

![结果](images/1.png)

## 参考

- [JOptionPane 的使用](https://www.cnblogs.com/fantasy01/p/3911488.html)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/qframe/  

