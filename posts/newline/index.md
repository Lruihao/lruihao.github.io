# 不同系统的换行符的差异


换行符（通常称为行尾、行尾 (EOL)、下一行 (NEL) 或换行符）是字符编码规范（例如，ASCII、EBCDIC）中的控制字符或控制字符序列，用于表示一行文本的结尾和新文本的开头。

<!--more-->

周五下班的时候想在 windows 电脑上跑一下 FixIt 看看有没有什么 bug, 然后就发现了 typyit shortcode 开头多出一行空行，mermaid shortcode 则直接语法报错了。

看了一下代码明明有 trim `\n` 处理，而且 Vercel 打包和 Mac 上运行打包都没问题。debug 了一下才发现 Windows 系统上的换行是 `\r\n`, 而 Mac 系统上的换行是 `\n`。于是查了一下不同系统的换行符的差异问题。

## 历史

简单来说，回车换行这些说法是从打字机那个时代开始叫的，然后在不同的标准下换行符有不同的表现符号。

Windows 系统设计遵循了 `CR + LF` 的约定，而 Unix 系统则遵循了 `LF` 的约定，之后的 类 Unix (Linux, macOS) 系统也遵循了 `LF` 的约定。

当然也有异类，老版的 mac 系统使用 `CR` 作为换行符。

## 表示

- `CR` 回车：`\r`
- `LF` 换行：`\n`

| 操作系统           | 换行符号 |
| ------------------ | -------- |
| Windows            | `\r\n`   |
| Unix、Linux、MacOS | `\n`     |
| classic Mac OS     | `\r`     |

## 问题

由于这个差异，会导致文本类的文件在跨系统浏览时会产生一些差异，比如说，Mac 的文本文件在 Windows 打开会全部挤在一行等等。

对于开发人员来说，这很有可能导致某些程序失效，比如正则去除空行等等。

甚至因此，Linux 系统下提供有两个命令用来进行 Windows 和 Unix 文件的转化：`dos2unix`和 `unix2dos`。

## 参考

- [Newline](https://en.wikipedia.org/wiki/Newline)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/newline/  

