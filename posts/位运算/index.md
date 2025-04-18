# 位运算


## 1. &运算

&运算通常用于二进制取位操作，例如一个数 & 1 的结果就是取二进制的最末位。这可以用来判断一个整数的奇偶，二进制的最末位为 0 表示该数为偶数，最末位为 1 表示该数为奇数。

## 2. |运算

|运算通常用于二进制特定位上的无条件赋值，例如一个数 or 1 的结果就是把二进制最末位强行变成 1。如果需要把二进制最末位变成 0，对这个数 | 1 之后再减一就可以了，其实际意义就是把这个数强行变成最接近的偶数。

## 3. ^运算

^运算通常用于对二进制的特定一位进行取反操作，因为异或可以这样定义：异或 0 都不变，异或 1 则取反。 ^运算的逆运算是它本身，也就是说两次异或同一个数最后结果不变，即 a ^ b ^ b = a。^运算可以用于简单的加密，比如你想对你 MM 说 1314520，但怕别人知道，于是双方约定拿你的生日 19880516 作为密钥。1314520^19880516 = 20665500，你就把 20665500 告诉 MM。MM 再次计算 20665500 ^ 19880516 的值，得到 1314520，于是她就明白了你的企图。

还可以用异或来进行快速地交换数据，

a=2;b=3;//先转化成二进制

a=a^b;

b=a^b;

a=a^b;

操作后 a=3;b=2;

## 4. ~ 运算

~运算的定义是把内存中的 0 和 1 全部取反。使用~运算时要格外小心，你需要注意整数类型有没有符号。如果~的对象是无符号整数（不能表示负数），那么得到的值就是它与该类型上界的差，因为无符号类型的数是用$0000 到$FFFF 依次表示的。

## 5. <<运算

a << b 就表示把 a 转为二进制后左移 b 位（在后面添 b 个 0）。例如 100 的二进制为 1100100，而 110010000 转成十进制是 400，那么 100 <<2 = 400。可以看出，a << b 的值实际上就是 a 乘以 2 的 b 次方，因为在二进制数后添一个 0 就相当于该数乘以 2。

通常认为 a << 1 比 a \* 2 更快，因为前者是更底层一些的操作。因此程序中乘以 2 的操作请尽量用左移一位来代替。

定义一些常量可能会用到<<运算。你可以方便地用 1 <<16 – 1 来表示 65535。很多算法和数据结构要求数据规模必须是 2 的幂，此时可以用<<来定义 Max_N 等常量。

## 6. >>运算

和<<相似，a >> b 表示二进制右移 b 位（去掉末 b 位），相当于 a 除以 2 的 b 次方（取整）。我们也经常用>> 1 来代替 div 2，比如二分查找、堆的插入操作等等。想办法用>>代替除法运算可以使程序效率大大提高。最大公约数的二进制算法用除以 2 操作来代替慢得出奇的 mod 运算，效率可以提高 60%

[传送门](https://weibo.com/ttarticle/p/show?id=2309404238259097064884&mod=zwenzhang)

> 原文：`http://www.matrix67.com/blog/archives/263`


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/%E4%BD%8D%E8%BF%90%E7%AE%97/  

