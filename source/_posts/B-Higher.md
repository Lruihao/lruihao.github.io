---
title: 'B.Higher h-index'
date: 2018-06-14 22:47:28
tags: 
- 2018湘潭邀请赛
- ACM
categories:
- ACM
- 2018湘潭邀请赛
description:
---
**B. Higher h-index**

The h-index of an author is the largest h where he has at least h papers with citations not less than h. 
Bobo has no papers and he is going to publish some subsequently. If he works on a paper for x hours, the 
paper will get (a·x) citations, where a is a known constant. It’s clear that x should be a positive integer. 
There is also a trick – one can cite his own papers published earlier. 

Given Bobo has n working hours, ﬁnd the maximum h-index of him.


<!--more-->
**Input**

The input consists of several test cases and is terminated by end-of-ﬁle. 
Each test case contains two integers n and a.

**Output**

For each test case, print an integer which denotes the maximum h-index.

**Constraint**

  • 1≤ n ≤109 
  • 0≤ a ≤ n 
  • The number of test cases does not exceed 104.

**Sample Input**

3 0
3 1
1000000000 1000000000

**Sample Output**

1
2
1000000000

**Note** 

For the ﬁrst sample, Bobo can work 3 papers for 1 hour each. With the trick mentioned, 
he will get papers with citations 2,1,0. Thus, his h-index is 1. 
For the second sample, Bobo can work 2 papers for 1 and 2 hours respectively. 
He will get papers with citations 1+1,2+0. Thus, his h-index is 2.

题意：给定n个小时，可以用其中x(1<=x<=n)个小时写一篇论文，那么这篇论文的"既定"引用数将会是`x*a`(a为给定正整数)；此外，已经写好的论文将会被其后写成的论文所引用，也就是说，这篇论文的总引用数将会是"既定"引用数+其后论文篇数；问在所有的写论文方案中(例如一种方案就是用n个小时写n篇论文，每篇论文各花1小时(可以得到这n篇论文的引用数))，h最大为多少(h的含义同上题)(每一种方案都对应着一个h，求这些h中的最大者)
思路：最优方案(即对应h值最大的方案)是平摊n小时写成n篇论文(证明未知)；此时n篇论文的引用数为a,a+1,a+2,...,a+n-1，引用数为a+i时，引用数大于等于它的论文有n-i篇，令a+i=n-i得i=(n-a)/2,所以h=a+(n-a)/2;

后AC代码
```c
#include<cstdio>

int main(){
   int n,a;
   while(scanf("%d%d",&n,&a)!=EOF){
    printf("%d\n",a+(n-a)/2);
   }
   return 0;
}
```