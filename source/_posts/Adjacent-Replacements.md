---
title: Adjacent Replacements
date: 2018-07-22 11:54:14
tags:
- Codeforces
- ACM
categories:
- ACM
password:
abstract:
message:
description: Codeforces Round 498 (Div. 3) A. Adjacent Replacements（水）
top:
---
[A. Adjacent Replacements](https://codeforces.com/contest/1006/problem/A)
第一次打cf就做出一道这样的找规律的题，打到自闭。
```c++
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,a[1001];
    cin>>n;
    int i;
    int flag=0;
    for(i=0;i<n;i++){
        cin>>a[i];
        if(!(a[i]&1)) a[i]--;
        if(!flag) {cout<<a[i];flag=1;}
        else cout<<" "<<a[i];
    }
	return 0;
}

```