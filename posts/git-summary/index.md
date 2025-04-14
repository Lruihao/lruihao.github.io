# Git 统计代码量


使用 Git 命令统计在某段时间内项目中的代码量。

<!--more-->

## 统计 commit 数

```bash
git log --author="1024@lruihao.cn" --since="2023-01-01" --until="2023-12-31" --oneline | wc -l
```

## 统计行数

```bash
git log --author="1024@lruihao.cn" --pretty=tformat:  --since="2023-01-01" --until="2023-12-31" --numstat -- .  ":(exclude)build" ":(exclude)dist" ":(exclude)node_modules" ":(exclude)test" ":(exclude)static" -numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }'
```

## 整合成一个脚本

统计所有作者移除 `--author="$author_email"`

```bash
#!/bin/bash

project_name=$(basename "$(pwd)")
author_email="1024@lruihao.cn"
# since_date="1 year ago"
since_date="2023-01-01"
until_date="2023-12-31"

# 统计 commit 数量
commit_count=$(git log --author="$author_email" --since="$since_date" --until="$until_date" --oneline | wc -l)

# 统计代码行数（排除目录 build、dist、node_modules、test、static）
line_stats=$(git log --author="$author_email" --pretty=tformat:  --since="$since_date" --until="$until_date" --numstat -- .  ":(exclude)build" ":(exclude)dist" ":(exclude)node_modules" ":(exclude)test" ":(exclude)static" | awk '{ add += $1; subs += $2; } END { printf "%s ++\t%s --\n", add, subs }')

echo "$project_name:\t$commit_count commits\t$line_stats"
```

例如在 FixIt 项目中截至 2024-07-17 为止我的代码统计如下：

```plain
FixIt:      1022 commits        82040 ++        103942 --
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/git-summary/  

