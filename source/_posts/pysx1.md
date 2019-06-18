---
title: python实训总结Ⅰ
date: 2019-06-18 18:41:00
tags:
- python
- turtle
categories:
- python
password:
abstract:
message:
description:
keywords:
top:
sticky:
author:
permalink:
noreward:
notshow:
norelate:
repost:
---


{% note info no-icon %}
以前和前一段时间自己也学习了一下python，也写了几个小爬虫；
这次正好又课程安排了为期两周的综合实训，主要是**“用python做量化交易”**
进行了两天，讲的都是一些基本的东西，以前也接触过，所以不是很容易理解。还讲了一些软件，pycharm，anaconda,sublime等大都也都用过。anaconda倒是第一次接触。
{% endnote %}

<!--more-->

## 第一天
> 讲了一下变量和python的特色什么的。
还讲了模块定义`def`和类定义

```py
print("Hello World!")
```

```py
class zxm():
	def __init__(self):
		self.x=0
		self.y=0

	def move_up(self):
		self.y +=1

my_zxm=zxm()
print(my_zxm)
```

```
<__main__.zxm object at 0x000001D99CFEF668>
```

## 第二天
### 输入输出
> `print` 输出  
`input` 输入  
`eval`  执行一个字符串表达式，并返回表达式的值

```py
x=eval(input("请输入x的值："))
y=eval(input("请输入y的值："))
z=(x**2+y**2)**0.5
print(z)
```

```py
# 导入复数数学模块
import cmath
 
num = int(input("请输入一个数字: "))
num_sqrt = cmath.sqrt(num)
print('{0} 的平方根为 {1:0.3f}+{2:0.3f}j'.format(num ,num_sqrt.real,num_sqrt.imag))
```

### 数据类型
> 今天还讲了一下数据类型
- 字符串： `""` `''`
- 元组tuple(2,3) 
- 列表list[2,3]
- 字典{Key:Value}
- 集合{}

```py
x=[1,10]
type(x)#判断元素类型
```

```
list
```

### 循环判断
```py
for x in range(1,10,2): # (start,stop,step)
    pass # pass不做任何事情，一般用做占位语句
```

```py
for letter in 'Python':
   if letter == 'h':
      pass
      print('这是 pass 块')
   print('当前字母 :'+ letter)
 
print("Good bye!")
```

```
当前字母 :P
当前字母 :y
当前字母 :t
这是 pass 块
当前字母 :h
当前字母 :o
当前字母 :n
Good bye!
```

### str() 、 import导库
```py
x=10
print("整数转字符串"+str(x))
```

```py
import this
```

```
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```
> Google翻译意思是:
美丽胜过丑陋。显式优于隐式。简单比复杂更好。复杂比复杂更好。Flat优于嵌套。稀疏优于密集。可读性很重要。特殊情况不足以打破规则。虽然实用性胜过纯洁。错误不应该默默地传递。除非明确沉默。面对模棱两可，拒绝猜测的诱惑。应该有一个最好只有一个明显的方法来做到这一点。虽然这种方式起初可能并不明显，除非你是荷兰人。现在比永远好。虽然现在永远不会比正确好。如果实施很难解释，这是一个坏主意。如果实现很容易解释，那可能是个好主意。命名空间是一个很棒的主意，让我们做更多的事情吧！

### turtle绘图库（内置模块）

