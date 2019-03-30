---
title: poj-1426-Find The Multiple(dfs)
date: 2018-07-22 11:57:13
tags:
- DFS
- ACM
- 搜索
- POJ
- C++
categories:
- ACM
- 搜索
password:
abstract:
message:
description:
top:
---
## Find The Multiple
Time Limit: 1000MS		Memory Limit: 10000K
Total Submissions: 40713		Accepted: 17088		Special Judge
### Description

Given a positive integer n, write a program to find out a nonzero multiple m of n whose decimal representation contains only the digits 0 and 1. You may assume that n is not greater than 200 and there is a corresponding m containing no more than 100 decimal digits.
### Input

The input file may contain multiple test cases. Each line contains a value of n (1 <= n <= 200). A line containing a zero terminates the input.
### Output

For each value of n in the input print a line containing the corresponding value of m. The decimal representation of m must not contain more than 100 digits. If there are multiple solutions for a given value of n, any one of them is acceptable.
### Sample Input

2
6
19
0
### Sample Output

10
100100100100100100
111111111111111111

---
给定一个正整数n，请编写一个程序来寻找n的一个非零的倍数m，这个m应当在十进制表示时每一位上只包含0或者1。你可以假定n不大于200且m不多于100位。 
提示：本题采用Special Judge，你无需输出所有符合条件的m，你只需要输出任一符合条件的m即可。
```c++
#include"iostream"
using namespace std;
typedef unsigned long long ll;
int n;
bool sign;

void dfs(ll x,int count)
{
    if(sign)
        return ;
    if(x%n==0){
        sign=true;
        cout<<x<<endl;
        return ;
    }
    if(count==19)//m最多200位
        return ;
    dfs(x*10,count+1);
    dfs(x*10+1,count+1);
    //每两位数后两位有两种情况，10或11，深搜所有情况，找到一种就返回，找不到找另外一颗子树
}
int main()
{
    while(cin>>n&&n)
    {
        sign=false;
        dfs(1,0);
    }
    return 0;
}
```