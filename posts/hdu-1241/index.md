# Hdu-1241-Oil Deposits (Dfs)


## [Oil Deposits](http://acm.hdu.edu.cn/showproblem.php?pid=1241)

[翻译](https://vjudge.net/contest/238973#problem/L)  
Time Limit: 2000/1000 MS (Java/Others) Memory Limit: 65536/32768 K (Java/Others)  
Total Submission(s): 41406 Accepted Submission(s): 23977

### Problem Description

The GeoSurvComp geologic survey company is responsible for detecting underground oil deposits. GeoSurvComp works with one large rectangular region of land at a time, and creates a grid that divides the land into numerous square plots. It then analyzes each plot separately, using sensing equipment to determine whether or not the plot contains oil. A plot containing oil is called a pocket. If two pockets are adjacent, then they are part of the same oil deposit. Oil deposits can be quite large and may contain numerous pockets. Your job is to determine how many different oil deposits are contained in a grid.

### Input

The input file contains one or more grids. Each grid begins with a line containing m and n, the number of rows and columns in the grid, separated by a single space. If m = 0 it signals the end of the input; otherwise 1 &lt;= m &lt;= 100 and 1 &lt;= n &lt;= 100. Following this are m lines of n characters each (not counting the end-of-line characters). Each character corresponds to one plot, and is either &#39; \* &#39;, representing the absence of oil, or &#39;@&#39;, representing an oil pocket.

### Output

For each grid, output the number of distinct oil deposits. Two different pockets are part of the same oil deposit if they are adjacent horizontally, vertically, or diagonally. An oil deposit will not contain more than 100 pockets.

### Sample Input

    1 1
    *
    3 5
    *@*@*
    **@**
    *@*@*
    1 8
    @@****@*
    5 5
    ****@
    *@@*@
    *@**@
    @@@*@
    @@**@
    0 0

### Sample Output

    0
    1
    2

### Source

Mid-Central USA 1997

### Recommend

Eddy | We have carefully selected several similar problems for you: 1016 1010 1312 1242 1240

## 思路

dfs 模板题吧，八个方向搜索；（像 i，j 这样的计数器还是写在局部比较好，我尽然被定义域的问题搞了一晚上醉了醉了。）

&lt;!-- markdownlint-disable MD046 --&gt;

```cpp
#include&lt;bits/stdc&#43;&#43;.h&gt;
using namespace std;

int n,m,s;
char maze[107][107];
int vx[8]={-1,1,0,0,-1,-1,1,1};
int vy[8]={0,0,-1,1,-1,1,1,-1};

void dfs(int x,int y){
    maze[x][y]=&#39;*&#39;;
    for(int i=0;i&lt;8;i&#43;&#43;){
        int tx=x&#43;vx[i];
        int ty=y&#43;vy[i];
        if(tx&gt;=0&amp;&amp;tx&lt;m&amp;&amp;ty&gt;=0&amp;&amp;ty&lt;n&amp;&amp;maze[tx][ty]==&#39;@&#39;)
            dfs(tx,ty);
    }
}

int main(){
    int i,j;
    while(cin&gt;&gt;m&gt;&gt;n&amp;&amp;m){
        s=0;
        for(i=0;i&lt;m;i&#43;&#43;)
            cin&gt;&gt;maze[i];
        for(i=0;i&lt;m;i&#43;&#43;){//相当于不连通的情况
            for(j=0;j&lt;n;j&#43;&#43;){
                if(maze[i][j]==&#39;@&#39;){
                    dfs(i,j);
                    s&#43;&#43;;
                }
            }
        }
        cout&lt;&lt;s&lt;&lt;endl;
    }
    return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/hdu-1241/  

