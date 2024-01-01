# Adjacent Replacements


[A. Adjacent Replacements](https://codeforces.com/contest/1006/problem/A)

第一次打 cf 就做出一道这样的找规律的题，打到自闭。

```cpp
#include&lt;bits/stdc&#43;&#43;.h&gt;
using namespace std;

int main(){
    int n,a[1001];
    cin&gt;&gt;n;
    int i;
    int flag=0;
    for(i=0;i&lt;n;i&#43;&#43;){
        cin&gt;&gt;a[i];
        if(!(a[i]&amp;1)) a[i]--;
        if(!flag) {cout&lt;&lt;a[i];flag=1;}
        else cout&lt;&lt;&#34; &#34;&lt;&lt;a[i];
    }
    return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/adjacent-replacements/  

