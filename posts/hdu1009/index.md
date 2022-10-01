# HDU 1009 FatMouse' Trade（贪心）


## 题目大意：
[题目链接](http://acm.hdu.edu.cn/showproblem.php?pid=1009)  
老鼠有 M 磅猫食 , 有 N 个房间  , 每个房间前有一只猫  , 房间里有老鼠最喜欢的食品 J[i] , 若要得到房间的食物 , 必须付出相应的猫食 F[i]  , 当然这只老鼠没必要每次都付出所有的 F[i]，若它付出 F[i] 的 a%， 则得到 J[i] 的 a%，求老鼠能吃到的最多的食物。
### Sample Input
	5 3
	7 2
	4 3
	5 2
	20 3
	25 18
	24 15
	15 10
	-1 -1

### Sample Output
	13.333
	31.500

## 分析
老鼠要用最少的猫粮来换取最多的食物 , 也就是 J[i]/F[i] 越大越好  , 所以按照 J[i]/F[i] 进行降序排列 , 然后依次用猫粮来换取食物  , 当所剩下的猫粮不足以完全换取食物 , 能换多少是多少。
```cpp
#include<stdio.h>
#include<algorithm>
using namespace std;

struct node{
	double j;
	double f;
	double s;
}a[1005];

int cmp(node x,node y){
	return x.s>y.s;
}

int main(){
	int m,n,i;
	while(scanf("%d%d",&m,&n)&&(m!=-1&&n!=-1)){
		memset(a,0,sizeof(a));
		for(i=0;i<n;i++){
			scanf("%lf%lf",&a[i].j,&a[i].f);
			a[i].s=a[i].j/a[i].f;
		}

		sort(a,a+n,cmp);

		double sum=0;
		for(i=0;i<n;i++){
			if(m>=a[i].f){
				sum+=a[i].j;
				m-=a[i].f;
			}else{
				sum+=a[i].s*m;
				m=0;
			}
			if(m<=0)
				break;
		}
		printf("%.3lf\n",sum);
	}
	return 0;
}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/hdu1009/  

