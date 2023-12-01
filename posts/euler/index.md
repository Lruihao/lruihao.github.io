# 欧拉函数


## **_欧拉函数是求小于 x 并且和 x[互质](https://baike.baidu.com/item/%E4%BA%92%E8%B4%A8/577412?fr=aladdin) 的数的个数_**

通式：φ(x)=x(1-1/p1)(1-1/p2)(1-1/p3)(1-1/p4)…..(1-1/pn)  
**其中 p1, p2……pn 为 x 的所有质因数，x 是不为 0 的整数**  
φ(1)=1（唯一和 1 互质的数就是 1 本身）【注意：每种质因数只一个。比如 12=2*2*3】

## 定理

1. 若 n 是素数 p 的 k 次幂，φ(n)=p^k-p^(k-1)=(p-1)p^(k-1)，因为除了 p 的倍数外，其他数都跟 n 互质 ![IMG_20180808_170807.jpg](https://i.loli.net/2018/08/08/5b6ab31239225.jpg)
2. 欧拉函数是积性函数——若 m,n 互质，φ(mn)=φ(m)φ(n)

## 特殊性质

1. 当 n 为奇数时，φ(2n)=φ(n)
2. p 是素数，φ(p) = p - 1，φ(p) 称为 p 的欧拉值
3. 若 a 为素数，b mod a=0,`φ(a*b)=φ(b)*a`

<!--more-->

## 模板

//直接法

```cpp
int Euler(int n){
  int res = n,i;

   //由于任何一个合数都至少有一个不大于根号 n 的素因子，所以只要遍历到根号 n 即可
  for(i=2;i * i <= n;i++)
  if(n%i == 0){  //第一次找到的必为素因子
    n /=i ;
    res = res - res/i;  //x(1-1/p1)
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
1. 若 a 为质数，phi[a]=a-1;
2. 若 a 为质数，b mod a=0,phi[a*b]=phi[b]*a
3. 若 a,b 互质，phi[a*b]=phi[a]*phi[b](当 a 为质数时，if b mod a!=0 ,phi[a*b]=phi[a]*phi[b])
*/
int m[n],phi[n],p[n],nump;
//m[i] 标记 i 是否为素数，0 为素数，1 不为素数；p 是存放素数的数组；nump 是当前素数个数；phi[i] 为欧拉函数
int make()
{
        phi[1]=1;
    for (int i=2;i<=n;i++)
    {
        if (!m[i])//i 为素数，m[] 初始化为 0
        {
            p[++nump]=i;//将 i 加入素数数组 p 中
            phi[i]=i-1;//因为 i 是素数，由特性得知
        }
        for (int j=1;j<=nump&&p[j]*i<n;j++)  //用当前已的到的素数数组 p 筛，筛去 p[j]*i
        {
            m[p[j]*i]=1;//可以确定 i*p[j] 不是素数
            if (i%p[j]==0) //看 p[j] 是否是 i 的约数，因为素数 p[j], 等于判断 i 和 p[j] 是否互质
            {
                phi[p[j]*i]=phi[i]*p[j]; //特性 2
                break;
            }
            else phi[p[j]*i]=phi[i]*(p[j]-1); //互质，特性 3,p[j]-1 就是 phi[p[j]]
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
      for(int j=2*i;j<=N;j+=i)//筛掉 i 的倍数
        p[j]=1;
    }
}
```

## 例题

[Bi-shoe and Phi-shoe](https://vjudge.net/contest/238979#problem/A) LightOJ - 1370

> 题意：  
> 给一些数 Ai（第 i 个数），Ai 这些数代表的是某个数欧拉函数的值，我们要求出数 Ni 的欧拉函数值不小于 Ai。而我们要求的就是这些 Ni 这些数字的和 sum，而且我们想要 sum 最小，求出 sum 最小多少。
>
> 解题思路：  
> 要求和最小，我们可以让每个数都尽量小，那么我们最后得到的肯定就是一个最小值。  
> 给定一个数的欧拉函数值 ψ(N)，我们怎么样才能求得最小的 N?  
> 我们知道，一个素数 P 的欧拉函数值 ψ(P)=P-1。所以如果我们知道 ψ(N)，那么最小的 N 就是最接近 ψ(N)，并且大于 ψ(N) 的素数。我们把所有素数打表之后再判断就可以了。

这个 lightoj 有毒，什么头文件都不支持，卡了我好久。

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


---

> 作者:   
> URL: https://lruihao.cn/posts/euler/  

