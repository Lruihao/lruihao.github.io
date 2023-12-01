# Adjacent Replacements


[A. Adjacent Replacements](https://codeforces.com/contest/1006/problem/A)

第一次打 cf 就做出一道这样的找规律的题，打到自闭。

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,a[1001];
    cin>>n;
    int i;
    int flag=0;
    for(i=0;i<n;i++){
        cin>>a[i];
        if(!(a[i]&1)) a[i]--;
        if(!flag) {cout<<a[i];flag=1;}
        else cout<<" "<<a[i];
    }
    return 0;
}
```


---

> 作者:   
> URL: https://lruihao.cn/posts/adjacent-replacements/  

