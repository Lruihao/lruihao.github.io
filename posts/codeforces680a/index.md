# Bear and Five Cards-Codeforces680A


题目链接：[Bear and Five Cards](https://codeforces.com/problemset/problem/680/A)

大致题意就是小熊有 5 张卡片，每张卡片有对应的分数，他可以选择丢弃 2 张相同的或者 3 张相同的卡片，没有相同的就无法丢弃，问小熊剩下的分数最少是多少。

<!--more-->

没有想得那么复杂，由于分数最大才 100，所以直接暴力就好了。

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int a[5],b[107],i,j,sum=0,sum1=0;
    for(i=0;i<5;i++){
        cin>>a[i];
        sum+=a[i];
    }
    sort(a,a+5);
    memset(b,0,sizeof(b));
    for(i=0;i<5;i++)
        b[a[i]]++;
    for(i=0;i<107;i++){
        if(b[i]==2)
            sum1=max(2*i,sum1);
        if(b[i]>=3) {sum1=max(3*i,sum1);/*cout<<3*i<<" "<<sum1<<endl;*/}
    }
    cout<<sum-sum1<<endl;
    return 0;
}
```


---

> 作者:   
> URL: https://lruihao.cn/posts/codeforces680a/  

