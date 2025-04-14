# 畅通工程-HDU-1232（并查集经典模板）


## 并查集入门推荐：[超有爱的并查集~](https://blog.csdn.net/iteye_10189/article/details/82103035)

## 题目链接：[畅通工程](http://acm.hdu.edu.cn/showproblem.php?pid=1232)

## 题意分析

首先在地图上给你若干个城镇，这些城镇都可以看作点，然后告诉你哪些对城镇之间是有道路直接相连的。最后要解决的是整幅图的连通性问题。比如随意给你两个点，让你判断它们是否连通，或者问你整幅图一共有几个连通分支，也就是被分成了几个互相独立的块。像畅通工程这题，问还需要修几条路，实质就是求有几个连通分支。

<!--more-->

```cpp
#include<iostream>
#include<cstdio>
using namespace std;
int pre[1010];

int findd(int root){
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

int main(){
    int n,m,i,sum,r1,r2,star,end1;
    while(scanf("%d",&n)&&n){
        sum=n-1;
        for(i=1;i<=n;i++)
            pre[i]=i;
        scanf("%d",&m);
        while(m--){
            scanf("%d%d",&star,&end1);
            r1=findd(star);
            r2=findd(end1);
            if(r1!=r2){
                pre[r1]=r2;
                sum--;
            }
        }
        printf("%d\n",sum);
    }
 return 0;
}

```

## 基础回顾

### find() 函数找根结点的两种写法如下

第一种递归：

```C
int find(int x)
{
    return x == pre[x] ? x : find(pre[x]);
}
```

第二种：

```c
int find(int x)
{
    int root, temp;
    root = x;
    while(root != pre[root])
        root = pre[root];
    while(x != root)
    {
        temp = pre[x];
        pre[temp] = root;
        x = temp;
    }
    return root;
}
```

#### 合并函数

```c
void join(int x,int y){
    int fx=find(x);
    int fy=find(y);
    if(fx!=fy)
        pre[fx]=fy;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/%E7%95%85%E9%80%9A%E5%B7%A5%E7%A8%8B/  

