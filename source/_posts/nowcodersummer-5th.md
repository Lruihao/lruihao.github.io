---
title: 牛客暑假多校第五场
date: 2018-08-02 21:27:02
tags:
- Nowcoder
- ACM
categories:
- ACM
password:
abstract:
message:
description:
top:
author:
permalink:
---

[题目链接 密码：l9sn](链接：https://pan.baidu.com/s/1VP9Wn0OF4SVaqEVwpNralA)
终于不爆零了，但是还是wa了无数次，有时候代码感觉都差不多

<!--more-->

#### G-max
```c
/*
//wa
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,c;//好像不会爆int吧，头晕
    cin>>c>>n;
    int t=n/c;
    if(t<1) cout<<"-1\n";//
    else if(t==1) cout<<c*c<<endl;
    else cout<<(t*c)*((t-1)*c)<<endl;
	return 0;
}*/

//AC
#include<bits/stdc++.h>
using namespace std;

int main(){
    long long n,c;
    cin>>c>>n;
    long long t=n/c;
    if(t<1) cout<<-1<<endl;
    else if(t==1) cout<<c*c<<endl;
    else cout<<(t*c)*((t-1)*c)<<endl;
	return 0;
}

```

#### J-plan
```c
/*枚举所有情况
全买双人n%2  0 or 1//剩1个人的时候，可以多开一间房或者退一间2人房开一间3人房
全买3人n%3  0 or 1 or 2
再比较大小
*/
#include<bits/stdc++.h>
#define INF 1<<20
using namespace std;
typedef long long ll;

ll min(ll a,ll b){
    return a<b?a:b;
}

int main(){
    ll n,p2,p3,sum,sum1;
    while(cin>>n>>p2>>p3){
        if(n%2==0)
            sum=p2*(n/2);
        else sum=p2*(n/2)+min(min(p2,p3),p3-p2);//退二买三；

        if(n%3==0)
            sum1=p3*(n/3);
        else if(n%3==1) sum1=p3*(n/3)+min(min(p2,p3),2*p2-p3);//退3买2*2
        else if(n%3==2) sum1=p3*(n/3)+min(p3,p2);//退3买3*2
        cout<<min(sum1,sum)<<endl;
    }
	return 0;
}

```

