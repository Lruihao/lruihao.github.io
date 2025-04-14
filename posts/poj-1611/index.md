# The-Suspects-POJ-1611（并查集）


## 题目链接：[The-suspects](http://poj.org/problem?id=1611)

## 翻译

警察抓贩毒集团。有不同类型的犯罪集团，人员可能重复，集团内的人会相互接触。现在警察在其中一人（0 号）身上搜出毒品，认为与这个人直接接触或通过其他人有间接接触的人都是嫌疑犯。问包括 0 号犯人共有多少嫌疑犯？

<!--more-->

### Input

多样例输入。  
每个测试用例以两个整数 n 和 m 开头，其中 n 为人数，m 为犯罪集团数。你可以假定 0 < n <= 30000 和 0 <= m <= 500。在所有的情况下，每个人都有自己独特的整数编号 0 到 n−1, 且 0 号是公认的嫌疑犯。  
接下来 m 行输入，每个犯罪集团一行。每一行从一个整数 k 开始，它本身表示集团内成员的数量。按照成员的数量，在这个组中有 k 个整数表示人员。一行中的所有整数都被至少一个空格隔开。  
n = 0 且 m = 0 时输入结束。

### Output

对于每个样例，输出嫌疑犯人数。

### Sample Input

    100 4
    2 1 2
    5 10 13 11 12 14
    2 0 1
    2 99 2
    200 2
    1 5
    5 1 2 3 4 5
    1 0
    0 0

### Sample Output

    4
    1

这题也很好理解，AC 代码如下：

<!-- markdownlint-disable MD046 -->

```cpp
#include<cstdio>

int pre[30010],x[30010];

int find(int root){
    int son,t;
    son=root;
    while(root!=pre[root])
        root=pre[root];
    while(son!=root){
        t=pre[son];
        pre[son]=root;
        son=t;
    }
    return root;
}

void join(int x,int y){
    int fx=find(x),fy=find(y);
    if(fx!=fy)
        pre[fy]=fx;
}

int main(){
    int n,m,i,k,sum;
    while(scanf("%d%d",&n,&m),n||m){
        sum=0;
        for(i=0;i<n;i++)
            pre[i]=i;
        while(m--){
            scanf("%d",&k);
            for(i=0;i<k;i++)
                scanf("%d",&x[i]);
            for(i=1;i<k;i++)
                join(x[i-1],x[i]);
        }

        for(i=0;i<n;i++)
            if(find(0)==find(i)) sum++;//再次查找并压缩路径，注不用 pre[i]
        printf("%d\n",sum);

    }
    return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/poj-1611/  

