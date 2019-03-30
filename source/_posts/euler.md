---
title: 欧拉函数
date: 2018-08-08 17:10:07
tags:
- 数学
- 数论
- euler
- C
categories:
- ACM
- 数论
password:
abstract:
message:
description:
top:
author:
permalink:
---

### ***欧拉函数是求小于x并且和x[互质](https://baike.baidu.com/item/%E4%BA%92%E8%B4%A8/577412?fr=aladdin)的数的个数***

通式：φ(x)=x(1-1/p1)(1-1/p2)(1-1/p3)(1-1/p4)…..(1-1/pn)
**其中p1, p2……pn为x的所有质因数，x是不为0的整数**
φ(1)=1（唯一和1互质的数就是1本身）【注意：每种质因数只一个。比如12=2*2*3】

### 定理：
1. 若n是素数p的k次幂，φ(n)=p^k-p^(k-1)=(p-1)p^(k-1)，因为除了p的倍数外，其他数都跟n互质 ![IMG_20180808_170807.jpg](https://i.loli.net/2018/08/08/5b6ab31239225.jpg)
2. 欧拉函数是积性函数——若m,n互质，φ(mn)=φ(m)φ(n)

### 特殊性质：
1. 当n为奇数时，φ(2n)=φ(n)
2. p是素数，φ(p) = p - 1，φ(p)称为p的欧拉值
3. 若a为素数,b mod a=0,`φ(a*b)=φ(b)*a`

<!--more-->
### 模板

//直接法
```cpp
int Euler(int n){
	int res = n,i;
 
 	//由于任何一个合数都至少有一个不大于根号n的素因子，所以只要遍历到根号n即可
	for(i=2;i * i <= n;i++)
	if(n%i == 0){  //第一次找到的必为素因子
		n /=i ;
		res = res - res/i;	//x(1-1/p1)
		while(n % i ==0)
			n/=i;  //将该素因子的倍数也全部筛掉
	}
 
	if (n > 1)   
        res = res - res/n; 
   	return res;
}
```
[以上转载注明](https://blog.csdn.net/wangjian8006/article/details/7833319)


//素数筛选法，先素数筛选，再求欧拉
```c
/*
特性 :
1.若a为质数,phi[a]=a-1;
2.若a为质数,b mod a=0,phi[a*b]=phi[b]*a
3.若a,b互质,phi[a*b]=phi[a]*phi[b](当a为质数时,if b mod a!=0 ,phi[a*b]=phi[a]*phi[b])
*/
int m[n],phi[n],p[n],nump;
//m[i]标记i是否为素数,0为素数,1不为素数;p是存放素数的数组;nump是当前素数个数;phi[i]为欧拉函数
int make()
{
        phi[1]=1;
    for (int i=2;i<=n;i++)
    {
        if (!m[i])//i为素数，m[]初始化为0
        {
            p[++nump]=i;//将i加入素数数组p中
            phi[i]=i-1;//因为i是素数,由特性得知    
        }    
        for (int j=1;j<=nump&&p[j]*i<n;j++)  //用当前已的到的素数数组p筛,筛去p[j]*i
        {
            m[p[j]*i]=1;//可以确定i*p[j]不是素数 
            if (i%p[j]==0) //看p[j]是否是i的约数,因为素数p[j],等于判断i和p[j]是否互质 
            {
                phi[p[j]*i]=phi[i]*p[j]; //特性2
                break;
            }
            else phi[p[j]*i]=phi[i]*(p[j]-1); //互质,特性3,p[j]-1就是phi[p[j]]   
        }
    }
}
```

附素数打表
```c
int  p[N]={1,1,0};

void prime(){
	for(int i=2;i<N;i++)
		if(!p[i]){
			for(int j=2*i;j<=N;j+=i)//筛掉i的倍数
				p[j]=1;
		}

}
```
### 例题

 [Bi-shoe and Phi-shoe](https://vjudge.net/contest/238979#problem/A) LightOJ - 1370

题意：
{% note %}给一些数Ai（第 i 个数），Ai这些数代表的是某个数欧拉函数的值，我们要求出数 Ni 的欧拉函数值不小于Ai。而我们要求的就是这些 Ni 这些数字的和sum，而且我们想要sum最小，求出sum最小多少。{% endnote %}



解题思路：

{% note %}要求和最小，我们可以让每个数都尽量小，那么我们最后得到的肯定就是一个最小值。
给定一个数的欧拉函数值ψ(N)，我们怎么样才能求得最小的N?
我们知道，一个素数P的欧拉函数值ψ(P)=P-1。所以如果我们知道ψ(N)，那么最小的N就是最接近ψ(N)，并且大于ψ(N)的素数。我们把所有素数打表之后再判断就可以了。{% endnote %}


这个lightoj有毒，什么头文件都不支持，卡了我好久。。。
```c
#include<stdio.h>
#define N 1000005
#define ll long long

int m[N]={1,1,0};
int p[100000],cnt=0;

int max(int x,int y){
    return x>y?x:y;
}

void prime(){
    for(int i=2;i<N;i++)
    if(!m[i]){
        for(int j=2*i;j<=N;j+=i)
            m[j]=1;
        p[cnt++]=i;
    }
}

int binary_search(int x){//二分查找
    int l=0,r=cnt;
    while(l<=r){
        int mid=(l+r)/2;
        if(p[mid]>x)
            r=mid-1;
        else l=mid+1;
    }
    for(int i=max(r,0);;i++)
        if(p[i]>x)
        return p[i];
}

int main(){
    prime();
    int T,n,cas=1,temp;
    scanf("%d",&T);
    while(T--){
        scanf("%d",&n);
        ll sum=0;
        for(int i=0;i<n;i++){
            scanf("%d",&temp);
            sum+=binary_search(temp);
        }
        printf("Case %d: %lld Xukha\n",cas++,sum);
    }
	return 0;
}

```