---
title: Bear and Finding Criminals-Codeforces680B
date: 2018-07-31 19:32:21
tags:
- Codeforces
- ACM
- C++
- C
categories:
- ACM
password:
abstract:
message:
description:
top:
---

题目链接：[Bear and Finding Criminals](https://codeforces.com/problemset/problem/680/B)

大致题意就是小熊警察住在某个城市，他要抓各个城市的罪犯，现在用一个BCD可以知道那个城市里**一定**有罪犯。

一定能确定该城市有小偷的几种情况：
1.警察所住城市有罪犯，则一定能检测到

2.警察所住城市的左边和右边位置若**都**不为0，则说明两座城市都有罪犯（只有一边为1是不能确定到底哪个城市有罪犯的）
                     
3.警察所在城市的一边检测到有罪犯，但在另一边已经没有城市了，则说明该城市一定有罪犯

<!--more-->

```c
#include<bits/stdc++.h>
using namespace std;

int t[107];

int main()
{
	int n, a;
	while(cin>>n>>a){
		int sum = 0;
		for(int i =1; i <= n; i++)
			cin >> t[i];
		if(t[a]) sum++;//小熊所在城市有罪犯
		for(int i = 1; i <= n; i++){
			if(a-i > 0&&a+i <= n) {
				if(t[a-i] == 1&&t[a+i] == 1)
					sum+=2;
			}
			else if(a-i <= 0&&a+i <= n){//警察在第一个点
				if(t[a+i])
					sum++;
			}
			else if(a-i > 0&&a+i > n){
				if(t[a-i])
					sum++;
			}
		}
		cout <<sum<<endl;
	}
	return 0;
}

```