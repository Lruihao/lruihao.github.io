# 石子阵列（组合数学）


链接：https://www.nowcoder.com/acm/contest/157/A  
来源：牛客网

### 题目描述 
xb 有 m 种石子，每种无限个，Ta 想从这些石子中取出 n 个，并按顺序排列起来，为了好看，相邻的石子不能相同。xb 想知道有多少种排列的方法。

### 输入描述：
第一行有两个正整数 n，m。
### 输出描述：
第一行一个整数，表示在 m 种石子中取出 n 个的排列方案数模 1000000007 后的值。
### 示例 1
输入

    1 1

输出

    1

### 示例 2
输入

    2 3
输出

    6

### 示例 3
输入

    3 3

输出

    12

### 备注：
对于 100%的测试数据：  
1 ≤ n, m ≤ 1000  
数据量较大，注意使用更快的输入输出方式。  

水题。
```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    long long n,m,ans;
    scanf("%lld%lld",&n,&m);
    ans=m;
    for(int i=1;i<n;i++)
        ans=(ans*(m-1))%1000000007;
    printf("%lld\n",ans);
	return 0;
}

```

---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/nowcoder157a/  

