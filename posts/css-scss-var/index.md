# 关于 CSS 和 Scss 变量运算那些事


## 问题分析
昨天在开发 FixIt 的时候，在 Scss 中写 `max(foo, bar)` 函数比较不同的单位变量时报错了，但是在 CSS 中使用 `max` 或者 `min` 函数函数比较不同的单位变量是没有问题的。

造成这一问题的原因是，在 Scss 中，也实现了 `max` 和 `min` 函数，但是在 Scss 中，**不同单位的变量是不能进行运算的**，所以使得在 Scss 中直接使用 `max` 或者 `min` 函数会提示单位不同的报错。（同类 Less 中的变量运算是支持不同单位的）

知道造成问题的原因后，解决这个问题就很简单了，有很多种方法，有些方法感觉像在卡 BUG，有点意思，记录一下。

<!--more-->

## 奇思淫技

1. 由于 **Scss 区分大小写而 CSS 不区分**，所以为了不让 Scss 中的函数覆盖 CSS 的函数，我们可以使用除了 `max` 以外的 2<sup>3</sup> - 1 种写法，这样就能使用原生 CSS 的 `max` 函数来比较了，就不会报错了。

     ```scss
     .foo {
       padding-left: MAX(10vh, 3.5rem);
     }
     ```
     
2. 使用 Scss 没有的 CSS 函数 [`clamp`](https://developer.mozilla.org/zh-CN/docs/web/css/clamp):

     `clamp(MIN, VAL, MAX)` 其实就是表示 `max(MIN, min(VAL, MAX))`
     ```scss
     .foo {
       padding-left: clamp($header-height, 10vh, 10vh);
     }
     ```
3. 使用 `unquote($string)` 函数让 Scss 删除字符串最前和最后的单引号或双引号

     ```scss
     .foo {
       padding-left: unquote("max(10vh, #{$header-height})");
     }
     ```

## By the way

如果需要在 CSS 函数内部恢复 `Scss` 解析（引用 `Scss` 变量），只需用 `#{...}` 包围 Scss 代码。

```scss
$header-height: 3.5rem !default;

.foo {
  margin: calc(10vh - $header-height);
}
```

上面的 Scss 将解析成 以下无效的 CSS 代码：

```css
.foo {
  margin: calc(10vh - $header-height);
}
```

用 `#{...}` 包围 Scss 变量

```scss
$header-height: 3.5rem !default;

.foo {
  margin: calc(10vh - #{$header-height});
}
```

---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/css-scss-var/  

