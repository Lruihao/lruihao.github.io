# How Many Tables-HDU-1213（并查集求连通域数目）


并查集求连通域数目，初始化 sum=n；
题目链接： [how many tables](http://acm.hdu.edu.cn/showproblem.php?pid=1213)

&lt;!--more--&gt;

```cpp
#include&lt;bits/stdc&#43;&#43;.h&gt;
using namespace std;

int pre[1005];

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

int main(){
    int n,m,t,sum,root1,root2;
    cin&gt;&gt;t;
    while(t--){
        cin&gt;&gt;n&gt;&gt;m;
        sum=n;
        for(int i=1;i&lt;=n;i&#43;&#43;)
            pre[i]=i;
        for(int i=0;i&lt;m;i&#43;&#43;){
            cin&gt;&gt;root1&gt;&gt;root2;
            int xx=find(root1);
            int yy=find(root2);
            if(xx!=yy){
                pre[xx]=yy;
                sum--;
            }
        }
        cout&lt;&lt;sum&lt;&lt;endl;
    }
    return 0;
}

```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/how-tables/  

