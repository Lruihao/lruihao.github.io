# 牛客练习赛 23


两题水过，暴力，找规律。

## [托米的赌球](https://www.nowcoder.com/acm/contest/156/A)

## [托米的划分](https://www.nowcoder.com/acm/contest/156/B)

<!--more-->

## a

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int c[13],d[13]={100,50,20,10,5,2,1,50,20,10,5,2,1};
    int i,t;
    cin>>t;
    int a,b;
    while(t--){
        memset(c,0,sizeof(c));
        cin>>a>>b;
        for(i=0;i<7;i++){
            int x=0;
        if(a>c[i]){
            x=a/d[i];
            c[i]+=x;
            a-=x*d[i];
        }
        for(i=7;i<13;i++){
            int x=0;
        if(b>c[i]){
            x=b/d[i];
            c[i]+=x;
            b-=x*d[i];
        }
        cout<<c[0];
        for(i=1;i<13;i++)
            cout<<" "<<c[i];
        cout<<endl;
    }
    return 0;
}
```

## b

f(n)=f(n-1)+n-1;

```c
#include<bits/stdc++.h>
using namespace std;

long long sum;

int main(){
    int n;
    int t;
    cin>>t;
    while(t--){
        sum=1;
        cin>>n;
        if(n==1) sum=0;
        for(int i=3;i<=n;i++)
            sum+=i-1;
        cout<<sum<<endl;
    }
    return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/%E7%89%9B%E5%AE%A2%E7%BB%83%E4%B9%A0%E8%B5%9B23/  

