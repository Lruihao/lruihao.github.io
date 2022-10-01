# 百钱百鸡（枚举法）


> 我国古代数学家张丘建在《算经》一书中提出的数学问题：鸡翁一值钱五，鸡母一值钱三，鸡雏三值钱一。百钱买百鸡，问鸡翁、鸡母、鸡雏各几何？

<!--more-->
> 设公鸡，母鸡，小鸡数目分别为 x,y,z(x<=20,y<=33,z<=100)

## 约束条件
- x+y+z=100
- 5x+3y+z/3=100

## 算法分析
>若依次枚举 x,y,x, 则至少尝试 21\*34\*100=71400 次，显然效率太低。  
在 x,y 的数目确定后，z 的数目也就确定下来了 100-x-y，无须再进行枚举，此时约束条件只有一个 5x+3y+z/3=100. 只需枚举 x,y，共 21\*34=714 次。

## 算法设计

```cpp
#include<stdio.h>

int main(){
    int x,y,z;
    for(x=0;x<=20;x++) //21*34=714
    for(y=0;y<=33;y++){
        z=100-y-x;
        if(z%3==0 && (5*x+3*y+z/3)==100){//限定 z 能被 3 整除，进一步提高效率
            printf("cock number:%d\t",x);
            printf("hen number:%d\t",y);
            printf("chick number:%d\n",z);
        }
    }
	return 0;
}
```
运行解
```cpp 运行解
cock number:0   hen number:25   chick number:75
cock number:4   hen number:18   chick number:78
cock number:8   hen number:11   chick number:81
cock number:12  hen number:4    chick number:84
```

---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/bqbj/  

