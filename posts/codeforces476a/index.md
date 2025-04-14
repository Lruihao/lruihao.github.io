# Dreamoon and Stairs


**[题目链接](https://codeforces.com/contest/476/problem/a)**

Dreamoon wants to climb up a stair of n steps. He can climb 1 or 2 steps at each move. Dreamoon wants the number of moves to be a multiple of an integer m.

What is the minimal number of moves making him climb to the top of the stairs that satisfies his condition?

## Input

The single line contains two space separated integers n, m (0 < n ≤ 10000, 1 < m ≤ 10).

## Output

Print a single integer — the minimal number of moves being a multiple of m. If there is no way he can climb satisfying condition print  - 1 instead.

## Examples

### input1

    10 2

### output1

    6

### input2

    3 5

### output2

    -1

### Note

For the first sample, Dreamoon could climb in 6 moves with following sequence of steps: {2, 2, 2, 2, 1, 1}.  
For the second sample, there are only three valid sequence of steps {2, 1}, {1, 2}, {1, 1, 1} with 2, 2, and 3 steps respectively. All these numbers are not multiples of 5.

有一个 n 级台阶，每次可以走一级或两级，问最少的步数是多少，且步数必须是 m 的倍数。  
找一下数学公式就好了。  
具体看代码。

<!-- markdownlint-disable code-block-style -->

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int x,n,m;
    cin>>n>>m;
    if(n<m){
        cout<<-1<<endl;
        return 0;
    }
    if(n==m){
        cout<<n<<endl;
        return 0;
    }
    if(n%2==0){
        x=n/2%m;
        if(x==0) cout<<n/2<<endl;
        else cout<<n/2+m-x<<endl;
    }else if(n%2!=0){
        x=(n/2+1)%m;
        if(x==0) cout<<n/2+1<<endl;
        else cout<<(n/2+1)+m-x<<endl;
    }
    return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/codeforces476a/  

