# Codeforces Round 502(Div.1 + Div.2)


### [A. The Rank](https://codeforces.com/contest/1017/problem/A)

题目大意：  
给出 n 个学生的成绩，Thomas Smith 的成绩是第一行，然后要按总成绩进行排序，总分相同的按编号从小到大排；  
开始看还以为要写 sort 的 cmp 函数进行多条件排序，敲完才发现其实只要按总分就可以了，因为托马斯的 id 是一，必然会排在前面。

<!--more-->

```c
#include<bits/stdc++.h>
using namespace std;

int a[4],sum[1005];

int main(){
    int n,s,f1;
    cin>>n;
    for(int j=1;j<=n;j++){
        s=0;
        for(int i=0;i<4;i++){
            cin>>a[i];
            s+=a[i];
        }
        sum[j]=s;
        if(j==1) f1=s;
    }
    sort(sum+1,sum+n+1,greater<int>());

    for(int i=1;i<=n;i++)
        if(sum[i]==f1){
            cout<<i<<endl;
            break;
        }
	return 0;
}

```

### [B. The Bits](https://codeforces.com/contest/1017/problem/B)

题目大意：  
先给出二进制数的长度，然后输入两个二进制数 a,b，问交换 a 中的某些位数的数，使得 a|b（按位或）的结果不同，求有多少种不同的或值。

| a,b 上下对应的情况：a/b | 个数 |
| :---------------------: | :--: |
|           1/0           |  m   |
|           0/0           |  n   |
|           1/1           |  x   |
|           0/1           |  y   |

用组合数学的思想来想：  
只要看 b 为 0 的位就行了，如果 0/0,a 只能换 1 的位置，为了避免重复，所以这里总数为`n*x`,  
再考虑 1/0 的情况，只能和 0 的位置换，这是后可以把 0/0 没算的都算上，所以总数`m*(n+y)`  
**所以最后总数为`sum=n*x+m*(n+y)`**

```c
#include<bits/stdc++.h>
using namespace std;

int main(){
    long long n,m,x,y,t;
    n=m=x=y=0;
    char a[100005],b[100005];
    cin>>t;
    cin>>a>>b;
    for(int i=0;i<t;i++){
        int p=a[i]-'0';
        int q=b[i]-'0';
        if(p==0&&q==0) n++;
        if(p==1&&q==0) m++;
        if(p==1&&q==1) x++;
        if(p==0&&q==1) y++;
    }
    long long sum=n*x+m*(y+n);
    cout<<sum<<endl;
	return 0;
}

```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/cfcontest1017/  

