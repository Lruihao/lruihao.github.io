# Git 统计代码量


使用 Git 命令统计在某段时间内项目中的代码量。

&lt;!--more--&gt;

## 统计 commit 数

```bash
git log --author=&#34;1024@lruihao.cn&#34; --since=&#34;2023-01-01&#34; --until=&#34;2023-12-31&#34; --oneline | wc -l
```

## 统计行数

```bash
git log --author=&#34;1024@lruihao.cn&#34; --pretty=tformat:  --since=&#34;2023-01-01&#34; --until=&#34;2023-12-31&#34; --numstat -- .  &#34;:(exclude)build&#34; &#34;:(exclude)dist&#34; &#34;:(exclude)node_modules&#34; &#34;:(exclude)test&#34; &#34;:(exclude)static&#34; -numstat | awk &#39;{ add &#43;= $1; subs &#43;= $2; loc &#43;= $1 - $2 } END { printf &#34;added lines: %s, removed lines: %s, total lines: %s\n&#34;, add, subs, loc }&#39;
```

## 整合成一个脚本

统计所有作者移除 `--author=&#34;$author_email&#34;`

```bash
#!/bin/bash

project_name=$(basename &#34;$(pwd)&#34;)
author_email=&#34;1024@lruihao.cn&#34;
# since_date=&#34;1 year ago&#34;
since_date=&#34;2023-01-01&#34;
until_date=&#34;2023-12-31&#34;

# 统计 commit 数量
commit_count=$(git log --author=&#34;$author_email&#34; --since=&#34;$since_date&#34; --until=&#34;$until_date&#34; --oneline | wc -l)

# 统计代码行数（排除目录 build、dist、node_modules、test、static）
line_stats=$(git log --author=&#34;$author_email&#34; --pretty=tformat:  --since=&#34;$since_date&#34; --until=&#34;$until_date&#34; --numstat -- .  &#34;:(exclude)build&#34; &#34;:(exclude)dist&#34; &#34;:(exclude)node_modules&#34; &#34;:(exclude)test&#34; &#34;:(exclude)static&#34; | awk &#39;{ add &#43;= $1; subs &#43;= $2; } END { printf &#34;%s &#43;&#43;\t%s --\n&#34;, add, subs }&#39;)

echo &#34;$project_name:\t$commit_count commits\t$line_stats&#34;
```

例如在 FixIt 项目中截至 2024-07-17 为止我的代码统计如下：

```plain
FixIt:      1022 commits        82040 &#43;&#43;        103942 --
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/git-summary/  

