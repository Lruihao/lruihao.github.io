# C&#43;&#43; With STL


## 1.swap（交换两元素值，在 algorithm 下，用法：swap(a,b);）

交换两元素的值在 C 语言课上作为指针讲解的典例。

int a=1,b=2;

swap(a,b);

//此时 a=2,b=1

（可以是其他类型）

## 2.sort(,,)

sort 排序是不稳定的，stl 中的 stable_sort 才是稳定的

```c
inta[10]={1,6,2,3,5,4,3,8,9,7};

stable_sort(a,a&#43;10,greater&lt;int&gt;());

for(int i=0;i&lt;10;i&#43;&#43;)

    cout&lt;&lt;a[i]&lt;&lt;&#34; &#34;;
```

## 3.reverse（翻转序列，在 algorithm 下）

//常用在字符串上

int a[5]={1,2,3,4,5};

reverse(a,a&#43;5);

//序列现在是 5 4 3 2 1

char s[]=&#34;ericxie&#34;;

reverse(s,s&#43;strlen(s));

//序列现在是 &#34;eixcire&#34;

//同样适用于 string

string s=&#34;qwer&#34;;

reverse(s.begin(),s.end());

## 4.min，max（取大，取小）

int a=1,b=2,c;

c=min(a,b);

//此时 c 等于 1

c=max(a,b);

//此时 c 等于 2

string s=&#34;qwer&#34;,d=&#34;asjk&#34;,c;

c=min(s,d);

//c=&#34;asjk&#34;

## 5.`__gcd`（最大公约数）

手写 gcd 函数也行，辗转相除，辗转相减；

```c
int gcd(int a,int b){

    return a%b ? b : gcd(b,a%b);

}
```

//直接用

```c
int a=4,b=6;

int c=__gcd(a,b);
```

//注意下划线，此时 c 等于 2

## 6.lower_bound 和 upper_bound（二分查找）

lower_bound 意思就是：找到第一个位置，使得：如果在这个位置插入 value 后，原有序序列依旧有序。

upper_bound 是找到最后一个符合数位置后一个位置，使得：如果在这个位置插入 value 后，原有序序列依旧有序。

//数组

int a[8]={1,2,4,4,9,12,12,15};

int pos1 = lower_bound(a,a&#43;8,4)-a;

int pos2 = upper_bound(a,a&#43;8,4)-a-1;

//在这个样例下 pos1!=pos2;pos1=2;pos2=3;

根据我的理解 lower_bound(a,a&#43;8,value)

得到的是一个地址，拿这个地址减去数组首地址 a[0]，那么刚好就是 value 应该放入的位置。

//vector

`vector&lt;int&gt; a;`

若 a 中目前的元素也是{1,2,4,4,9,12,12,15};

那么这里用 lower_bound 得到的应该也是一个类似于指针的东西，为什么不叫它指针呢？因为他有了一个名字，叫做迭代器。

```c
vector&lt;int&gt;::iterator it;

it = lower_bound(a.begin(),a.end(),4);
```

//这里的 it 就是迭代器，那么\* it 就是该下标对应的 value 了。

//set 集合

```c
set&lt;int&gt; a;

set&lt;int&gt;::iterator it;

it = a.lower_bound(value);
```

## 7.next_permutation（排列）

bool next_permutation( iterator start, iterator end ); 通常用于生成序列的全排列。用之前先保证有序；

```c
int a[]={1,2,3};

    do{

        for(int i=0;i&lt;3;i&#43;&#43;)

                cout&lt;&lt;a[i]&lt;&lt;&#34; &#34;;

        cout&lt;&lt;endl;

    }while(next_permutation(a,a&#43;3));
```

结果为：

    1 2 3
    1 3 2
    2 1 3
    2 3 1
    3 1 2
    3 2 1

```c
string str=&#34;STL&#34;;

sort(str.begin(), str.end());

do{

    cout &lt;&lt; str &lt;&lt; endl;

}while (next_permutation(str.begin(),str.end()))；
```

结果：

    LST
    LTS
    SLT
    STL
    TLS
    TSL

大数据 c 比 c&#43;&#43;效率高

```c
int length;

char str[MAX];

gets(str);

length = strlen(str);

sort(str, str &#43; length);

do{

       puts(str);

}while(next_permutation(str, str&#43;length))；
```

## 8.unique（去重）

如何把序列 a 中的重复元素去除呢？首先需要对原序列 a 进行排序，保证有序后，调用 unique(a.head , a.tail ) 就可以了。unique 会返回一个类似指针的东西（和 lower_bound 有点像），-a 后表示去重之后序列的长度。

下面是实例。

```c
int a[]={1,3,5,7,9,2,2,2,1,1,1};

sort(a,a&#43;11);

int len = unique(a,a&#43;11)-a;

for(int i=0;i&lt;len;i&#43;&#43;)

    cout&lt;&lt;a[i]&lt;&lt;&#34; &#34;;
```

输出结果为：1 2 3 5 7 9

[传送门](https://weibo.com/ttarticle/p/show?id=2309404241150725776250&amp;mod=zwenzhang)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/c-with-stl/  

