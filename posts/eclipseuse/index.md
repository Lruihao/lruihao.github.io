# Eclipse 的基本使用


## 基本使用

```diff 基本使用
A: 选择一个工作空间
  D:\develop\eclipse-SDK-3.7.2-win64\workspace
B: 如何写一个 HelloWorld 案例（代码以项目为基本单位）
  a: 创建项目（工程）
    *File -- New -- Java Project
    *在左边空白处，直接右键 -- New -- Java Project

    键入项目名称后直接 Finish。
  b: 所有的 java 文件必须写到 src 下面才有效
  c: 创建一个包
    cn.lruihao
  d: 在包下创建一个类
    HelloWorld

    同时让它帮我们写好了 main 方法。
  e: 在 main 方法中写内容即可
  f: 编译程序
    自动编译，在保存的那一刻帮你做好了
  g: 运行程序
    选择要运行的文件或者在要运行的文件内容中
    右键 -- Run as - Java Application 即可
  h: 内容显示
    在 Console 控制台显示内容
```

## Eclipse 的基本设置

```java 基本设置
A: 程序的编译和运行的环境配置（如果你的 Eclipse 启动没有问题，就不要配置了）
B: 去掉默认注释（可以不用改）
C: 行号的显示和隐藏
  显示：在代码区域的最左边的空白区域，右键 -- Show Line Numbers 即可。
  隐藏：把上面的动作再做一次。
D: 字体大小及颜色
  a:Java 代码区域的字体大小和颜色：
    window -- Preferences -- General -- Appearance -- Colors And Fonts -- Java 修改 -- Java Edit Text Font
  b: 控制台
    window -- Preferences -- General -- Appearance -- Colors And Fonts -- Debug -- Console font
  c: 其他文件
    window -- Preferences -- General -- Appearance -- Colors And Fonts -- Basic -- Text Font
E: 窗体给弄乱了，怎么办
  window -- Reset Perspective
F: 控制台找不到了
  Window--Show View—Console
```

## 快捷键的使用

```java 快捷键
A: 内容辅助键
  Alt+/ 起提示作用
  main+alt+/,syso+alt+/, 给出其他提示
B: 快捷键
  格式化  ctrl+shift+f
  导入包  ctrl+shift+o
  注释  ctrl+/
    ctrl+shift+/,ctrl+shift+\
  代码上下移动 选中代码 alt+上/下箭头
  查看源码  选中类名 (F3 或者 Ctrl+鼠标点击）
```

## Eclipse 中如何提高开发效率

```java 提高开发效率
A: 自动生成构造方法
  a: 无参构造方法 在代码区域右键--source--Generate Constructors from Superclass
  b: 带参构造方法 在代码区域右键--source--Generate Constructors using fields.. -- finish
B: 自动生成 get/set 方法
  在代码区域右键--source--Generate Getters and Setters...
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/eclipseuse/  

