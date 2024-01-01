# K.2018


## K. 2018

Given a,b,c,d, ﬁnd out the number of pairs of integers (x,y) where a ≤ x ≤ b,c ≤ y ≤ d and x·y is a multiple of 2018.

&lt;!--more--&gt;

### Input

The input consists of several test cases and is terminated by end-of-ﬁle.  
Each test case contains four integers a,b,c,d.

### Output

For each test case, print an integer which denotes the result.

### Constraint

• 1≤ a ≤ b ≤109,1≤ c ≤ d ≤109  
 • The number of tests cases does not exceed 104.

### Sample Input

    1 2 1 2018
    1 2018 1 2018
    1 1000000000 1 1000000000

### Sample Output

    3
    6051
    1485883320325200

题意：给定区间 [a,b]、[c,d]，问有多少对有序数组 (x,y)(x∈[a,b],y∈[c,d]) 使得 x*y 是 2018 的倍数  
思路：2018=2*1009（分解质因数），则对 x 分类讨论：1) 仅为 2 的倍数；2）仅为 1009 的倍数；3）即为 2 又为 1009 的倍数；4）既不为 2 又不为 1009 的倍数  
等价于如下分类讨论：

1. 若 x 是偶数：1）若 x 是 1009 的倍数，则 y 可为 [c,d] 中任意数；2）若 x 不是 1009 的倍数，则 y 必定为 [c,d] 中 1009 的倍数
2. 若 x 是奇数：1）若 x 是 1009 的倍数，则 y 必定为 [c,d] 中 2 的倍数；2）若 x 不是 1009 的倍数，则 y 必定为 [c,d] 中 2018 的倍数

后 AC 代码

```c
#include&lt;cstdio&gt;
#include&lt;iostream&gt;
typedef unsigned long long ll;
using namespace std;

int main(){
   ll a,b,c,d;
   while(cin&gt;&gt;a&gt;&gt;b&gt;&gt;c&gt;&gt;d){
     ll num1_all_1009=b/1009-(a-1)/1009;
     ll num1_even=b/2-(a-1)/2;
     ll num1_1009_in_even=b/2018-(a-1)/2018;
     ll num1_rest_in_even=num1_even-num1_1009_in_even;
     ll num1_odd=(b-a&#43;1)-num1_even;
     ll num1_1009_in_odd=num1_all_1009-num1_1009_in_even;
     ll num1_rest_in_odd=num1_odd-num1_1009_in_odd;
     ll ans=0;
     ans&#43;=num1_1009_in_even*(d-c&#43;1);
     ll num2_all_1009=d/1009-(c-1)/1009;
     ans&#43;=num1_rest_in_even*num2_all_1009;
     ll num2_even=d/2-(c-1)/2;
     ans&#43;=num1_1009_in_odd*num2_even;
     ll num2_all_2018=d/2018-(c-1)/2018; ans&#43;=num1_rest_in_odd*num2_all_2018;
     cout&lt;&lt;ans&lt;&lt;endl;
   }
   return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/k-2018/  

