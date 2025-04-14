# A.Easy H-Index


## A. Easy h-index

The h-index of an author is the largest h where he has at least h papers with citations not less than h.  
Bobo has published many papers. Given a0,a1,a2,...,an which means Bobo has published ai papers with  
itations exactly i, ﬁnd the h-index of Bobo.

<!--more-->

### Input

The input consists of several test cases and is terminated by end-of-ﬁle.  
The ﬁrst line of each test case contains an integer n. The second line contains (n+1) integers a0,a1,...,an.

### Output

For each test case, print an integer which denotes the result.

### Constraint

• 1≤ n ≤2·105
• 0≤ ai ≤109
• The sum of n does not exceed 250,000.

### Sample Input

    1
    1 2
    2
    1 2 3
    3
    0 0 0 0

### Sample Output

    1
    2
    0

题意：给定被引用次数为 0~n 的论文分别有几张，找到最大的 h，满足被引用次数大于等于 h 的论文至少有 h 张  
思路：在区间 [0,n] 内二分答案；或直接从 n~0 遍历找到第一个满足条件的 h

后 AC 代码

```c
#include "bits/stdc++.h"
using namespace std;
int main(){
    int a[200005];
    int n;
    int i;
    while(cin>>n){
        for(i=0;i<=n;i++)
            cin>>a[i];
        int sum=a[n];
        for(i=n;i>=0;){
            if(sum>=i){
                cout<<i<<endl;
                break;
            }
            else sum+=a[--i];
        }
        if(i<0)
            cout<<"0"<<endl;
    }
    return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/a-easy/  

