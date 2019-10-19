---
title: 面向对象基础知识总结
date: 2019-01-15 16:07:31
tags: 
- 面向对象
- JAVA
categories:
- Backend
- JAVA
password:
abstract:
message:
description:
top:
author:
permalink:
---

### 面向对象思想(理解)
1. 面向对象是基于面向过程的一种编程思想
2. 思想特点：
	A:是一种更符合我们思考习惯的思想
	B:把复杂的问题简单化
	C:让我们从执行者变成了指挥者
3. 举例：
	A:洗衣服
	B:吃饭
	C:买电脑
4. 举例并代码体现
	把大象装进冰箱

### 类与对象(掌握)
1. 我们学习编程是为了把现实世界的事物用编程语言描述来实现信息化。
2. 现实世界事物是如何表达的呢?
	属性：外在特征
	行为：内在行为
3. 我们学习的是java语言，它最基本的单位是类。
	所以我们要学会用类来体现一个事物。
4. 类：是一组相关的属性和行为的集合
5. 对象：是该类事物的具体个体。
6. 举例：
	学生 类
	张三 对象

### 类的组成(掌握)
1. 成员变量
	其实就是变量，只不过定义在类中，方法外，并且可以不用初始化。
2. 成员方法
	其实就是方法，只不过不需要static了
3. 案例：
	学生类
```java
	class Student {
		String name;
		int age;

		public void study() {}
	}
```

### 类的使用(掌握)
1. 创建对象
	格式：类名 对象名 = new 类名();
2. 使用成员
	成员变量：对象名.变量名;
	成员方法：对象名.方法名(...);

### 成员变量和局部变量的区别(理解)
1. 在类中的位置不同
	A:成员变量 类中，方法外
	B:局部变量 方法的形式参数，或者方法体中
2. 在内存中的位置不同
	A:成员变量 在堆中
	B:局部变量 在栈中
3. 生命周期不同
	A:成员变量 随着对象的存在而存在，随着对象的消失而消失
	B:局部变量 随着方法的调用而存在，随着方法的调用完毕而消失
4. 初始化值不同
	A:成员变量 有默认初始化值
	B:局部变量 没有默认值，必须先声明，赋值，最后才能使用

### 形式参数问题(理解)
1. 基本类型
	基本类型作为形式参数，需要的是该基本类型的值。
2. 引用类型
	引用类型作为形式参数，需要的是该引用类型的地址值。(对象)

### 匿名对象(理解)
1. 匿名对象：没有名字的对象。是对象的简化书写方式。
2. 使用场景
	A:调用方法，仅仅只调用一次
	B:作为实际参数传递

### 封装(掌握)
1. 隐藏实现细节，提供公共的访问方式
2. 好处：
	A:隐藏实现细节，提供公共的访问方式
	B:提高了代码的复用性
	C:提高了代码的安全性
3. 使用原则
	A:把成员变量隐藏
	B:给出该成员变量对应的公共访问方式

### private关键字(掌握)
1. 是一个权限修饰符
2. 可以修饰类的成员(成员变量和成员方法)
3. 仅仅在本类中可以访问,对外提供对应的GetXXX()，SetXXX()等方法
4. 标准代码：
```java
	class Student {
		private String name;
		private int age;

		public void setName(String n) {
			name = n;
		}

		public String getName() {
			return name;
		}

		public void setAge(int a) {
			age = a;
		}

		public int getAge() {
			return age;
		}

		public void study() {}
	}
```

### this关键字(掌握)

1. this：代表本类的对象
2. 应用场景：
	解决了局部变量隐藏成员变量的问题。
	其他用法和super一起讲。
3. 标准代码：
```java
	class Student {
		private String name;
		private int age;

		public void setName(String name) {//局部变量
			this.name = name;
		}

		public String getName() {
			return name;
		}

		public void setAge(int age) {
			this.age = age;
		}

		public int getAge() {
			return age;
		}

		public void show() {
			System.out.println("姓名是："+name+",年龄是："+age);
		}

		public void study() {
			System.out.println("学生爱学习");
		}

		public void eat() {
			System.out.println("学生要吃饭");
		}

		public void sleep() {
			System.out.println("学生想睡觉");
		}
	}

	class StudentTest {
		public static void main(String[] args) {
			Student s = new Student();

			s.setName("林青霞");
			s.setAge(28);

			s.show();
			s.study();
			s.eat();
			s.sleep();

			System.out.println("姓名是："+s.getName());
			System.out.println("年龄是："+s.getAge());
		}
	}
```

### 构造方法(掌握)
1. 作用：对对象的数据进行初始化。
2. 特点：
	A:方法名和类名相同
	B:没有返回值类型
	C:没有返回值
3. 注意事项
	A:如果我们没写构造方法，系统将默认给出无参构造方法
	B:如果我们写了构造方法，系统将不再给出默认无参构造方法
	  建议：我们自己手动给出无参构造方法
4. 给成员变量赋值：
	A:无参+setXxx()
	B:带参
5. 一个标准的代码：
```java
	class Student {
		private String name;
		private int age;

		public Student() {}

		public Student(String name,int age) {//构造方法
			this.name = name;
			this.age = age;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getName() {
			return name;
		}

		public void setAge(int age) {
			this.age = age;
		}

		public int getAge() {
			return age;
		}

		public void show() {
			System.out.println("姓名是："+name+",年龄是："+age);
		}
	}

	class StudentTest {
		public static void main(String[] args) {
			//无参+setXxx()
			Student s = new Student();
			s.setName("林青霞");
			s.setAge(28);
			s.show();

			//带参
			Student ss = new Student("张曼玉",20);
			ss.show();
		}
	}
```

### 对象的初始化过程(理解)
- Student s = new Student();做了哪些事情
	A:加载Student.class文件进内存
	B:在栈中为s开辟空间
	C:在堆中为学生对象开辟空间
	D:为学生对象的成员变量赋默认值
	E:为学生对象的成员变量赋显示值
	F:通过构造方法给成员变量赋值
	G:对象构造完毕，把地址赋值给s变量

### static关键字(掌握)
1. 是一个状态修饰符。静态的意思
2. 它可以修饰成员变量和成员方法
3. 特点：
	**A:随着类的加载而加载
	B:优先于对象存在
	C:被所有对象共享**
	这也是判断我们是不是该使用静态的条件
	举例：饮水机(可共享static)和水杯例子。
	D:可以通过类名调用
	静态修饰的内容，可以通过类名调用，也可以通过对象名调用
4. 方法访问特点
	A:普通成员方法
	可以访问静态成员变量，非静态成员变量，静态成员方法，非静态成员方法
	B:静态成员方法
	**只能访问静态成员变量，静态成员方法
	简记：静态只能访问静态**
	注意：
	**静态中是不能有this的。
	先进内存的不能访问后进内存的。反之可以。**

```java
/*
	班级编号应该是被班级每个人都共享的，所以定义一个就应该可以了。
	而姓名和年龄，每个人应该是不一样的，所以，每个对象，都应该定义自己的。

	在java中，用什么来表示成员变量是被共享的呢? static
*/
class Student {
	//姓名
	String name;
	//年龄
	int age;
	//班级编号
	//String classNumber;
	static String classNumber;

	public Student(String name,int age) {
		this.name = name;
		this.age = age;
	}

	public Student(String name,int age,String classNumber) {
		this.name = name;
		this.age = age;
		this.classNumber = classNumber;
	}

	public void show() {
		System.out.println(name+"---"+age+"---"+classNumber);
	}
}

class StudentDemo {
	public static void main(String[] args) {
		//创建学生对象
		Student s1 = new Student("林青霞",28,"20150306");
		s1.show();

		/*
		Student s2 = new Student("马云",35,"20150306");
		s2.show();

		Student s3 = new Student("马化腾",33,"20150306");
		s3.show();
		*/
		Student s2 = new Student("马云",35);
		s2.show();

		Student s3 = new Student("马化腾",33);
		s3.show();
	}
}
```

```java
/*
	static:静态关键字。

	作用：
		可以修饰成员变量和成员方法

	特点：
		A:随着类的加载而加载	
		B:优先于对象存在
		C:被类的所有对象共享
			这也是我们判断是否使用静态关键字的条件

			饮水机：可以被静态修饰
			水杯：不可以被静态修饰
		D:可以通过类名调用
			我们的调用既可以是对象，还可以是类名
*/
class Student {
	public void show() {
		System.out.println("show");
	}

	public static void show2() {
		System.out.println("show2");
	}
}

class StudentDemo2 {
	public static void main(String[] args) {
		Student s = new Student();
		s.show();
		s.show2();

		Student.show2();
		//Student.show();&ensp;
	}
}

```
```java
/*
	static的注意事项：
		A:在静态方法中是没有this关键字的
			因为静态是随着类的加载而加载，优先于对象而存在。而this是随着对象的创建而存在。
			先进内存的， 不能访问后进内存的；而后进内存的，可以访问先进内存的。
		B:静态只能访问静态。
			非静态的成员方法：
				可以访问静态成员变量，非静态成员变量，静态成员方法，非静态成员方法
			静态的成员方法：
				只能访问静态的成员变量，静态的成员方法
*/
/*
class Student {
	private String name;

	public static void setName(String name) {//&ensp;静态方法不能用this
		this.name = name;
	}

	public void show() {
		System.out.println(name);
	}
}*/

class Demo {
	int x = 10;
	static int y = 20;

	public void show() {
		System.out.println(x);
		System.out.println(y);
	}

	public static void show2() {
		//System.out.println(x);&ensp;
		System.out.println(y);//√
	}

	public void show3() {
		show();
		show2();
	}

	public static void show4() {
		//show();只能访问静态的成员方法
		show2();
	}
}

class StudentDemo3 {
	public static void main(String[] args) {
		//Student.setName("林青霞");
	}
}
```

### 静态成员变量和普通成员变量的区别(理解)
1. 所属不同
	静态属于类的，称为类变量
	非静态属于对象的，称为对象变量，实例变量
2. 内存空间不同
	静态在方法区的静态区
	非静态在堆内存
3. 生命周期不同
	静态随着类的加载而加载，随着类的消失而消失
	非静态随着对象的创建而存在，随着对象的消失而消失
4. 调用不同
	静态可以通过类名调用，也可以通过对象名调用。建议通过类名调用
	非静态只能通过对象名调用

### main方法是静态的(理解)
```java
public static void main(String[] args)
```
public:访问权限修饰符，表示最大的访问权限，被jvm调用，所有权限要够大。
static:被jvm调用，不用创建对象，直接类名访问
void:被jvm调用，不需要给jvm返回值
main:一个通用的名称，虽然不是关键字，但是被jvm识别
String[] args:
	早期出现是为了接收键盘录入数据的。
	
### 实例
```java
/*求和*/
class Demo {
	private int x;
	private int y;

	public Demo() {}

	public Demo(int x,int y) {
		this.x = x;
		this.y = y;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getX() {
		return x;
	}

	public void setY(int y) {
		this.y = y;
	}

	public int getY() {
		return y;
	}

	//成员变量已经有x,y了。这里就没有必要在定义了
	/*
	public int sum(int x,int y) {
		return x + y;
	}
	*/

	public int sum() {
		return x + y;
	}
}

class Test {
	public static void main(String[] args) {
		Demo d = new Demo();
		d.setX(10);
		d.setY(20);
		int result = d.sum();
		System.out.println(result);
	}
}
```

```java
/*求和*/
class Demo {
	public int sum(int x,int y) {
		return x + y;
	}
}

class Test2 {
	public static void main(String[] args) {
		Demo d = new Demo();
		int result = d.sum(10,20);
		System.out.println(result);
	}
}
```

```java
/*
	定义一个员工类,自己分析出几个成员，
	然后给出成员变量，构造方法，getXxx()/setXxx()方法，
	以及一个显示所有成员信息的方法。并测试。

	Employee：
		成员变量：员工编号,姓名,职位
		构造方法：无参，带参
		成员方法：getXxx()/setXxx()方法，show()
*/
class Employee {
	private String eid;
	private String name;
	private String job;

	public Employee() {}

	public Employee(String eid,String name,String job) {
		this.eid = eid;
		this.name = name;
		this.job = job;
	}

	public void setEid(String eid) {
		this.eid = eid;
	}

	public String getEid() {
		return eid;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public String getJob() {
		return job;
	}

	public void show() {
		System.out.println("员工编号是："+eid+",姓名是："+name+",职位是："+job);
	}
}

class EmployeeDemo {
	public static void main(String[] args) {
		//无参
		Employee e = new Employee();
		e.setEid("itcast007");
		e.setName("周星驰");
		e.setJob("高级工程师");
		e.show();

		//带参
		Employee e2 = new Employee("itcast003","刘德华","挖掘机工程师");
		e2.show();
	}
}
```

### java类中的成员变量和方法访问权限

|关键词|同一个类|同一个包|不同包中的子类|不同包中的非子类|
|:-:|:-:|:-:|:-:|:-:|
|private|√|&ensp;|&ensp;|&ensp;|
|default|√|√|&ensp;|&ensp;|
|protected|√|√|√|&ensp;|
|public|√|√|√|√|