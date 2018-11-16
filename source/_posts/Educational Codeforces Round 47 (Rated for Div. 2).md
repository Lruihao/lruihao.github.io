---
title: Educational Codeforces Round 47 (Rated for Div. 2)
date: 2018-07-22 11:25:56
tags:
- Codeforces
- ACM
categories:
- ACM
password:
abstract:
message:
description:
top:
---
那天晚上报名了没打，第二天早上打的，也只出了两题。
[A. Game Shopping](https://codeforces.com/contest/1009/problem/A)
```c++
#include<iostream>
using namespace std;

int main(){
    int n,m,s=0;
    cin>>n>>m;
    int i,j;
    int c[1000],a[1000];
    for(i=0;i<n;i++)
        cin>>c[i];
    for(i=0;i<m;i++)
        cin>>a[i];
    for(i=0,j=0;i<n;){
        if(j==m)
            break;
        if(c[i]<=a[j]){
            s++;
            j++;
            i++;
        }
        else i++;
    }
    if(i==n&&s==0)
        cout<<"0\n";
    else cout<<s<<endl;
	return 0;
}

```
[B. Minimum Ternary String](https://codeforces.com/contest/1009/problem/B)
```c++
#include <bits/stdc++.h>
using namespace std;

string s, ans;

int main(){
    cin >> s;
    int one = 0;
    for (int i = 0; i < s.size(); i++){
        if (s[i] == '0') ans += "0";
        if (s[i] == '1') one++;
        if (s[i] == '2') ans += "2";
    }
    bool flag = false;
    for (int i = 0; i < ans.size(); i++){
        if (ans[i] == '2' && !flag) flag = true, cout << string(one, '1');
        cout << ans[i];
    }
    if (!flag) cout << string(one, '1');
    return 0;
}

/*

100210

11222121

20

2001

020201

2012101

111

000

*/
```