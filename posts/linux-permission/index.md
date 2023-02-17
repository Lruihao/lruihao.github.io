# linux 文件权限


记录 linux 系统下文件权限相关的内容，Mac OS 下类似。

<!--more-->

## 查看文件权限

查看 linux 系统下的文件权限，可以使用 `ll` 命令或者 `ls` 命令 带 `-l`（长列表选项）

```bash
➜  ~ ll
total 160
drwx------@  8 liruihao  staff   256B Jul  5 14:47 Applications
drwx------@ 10 liruihao  staff   320B Jul 27 11:31 Desktop
drwx------+  7 liruihao  staff   224B Jun 17 15:01 Documents
drwx------@ 22 liruihao  staff   704B Jul 29 16:35 Downloads
drwx------@ 94 liruihao  staff   2.9K Jul 23 19:02 Library
drwx------   4 liruihao  staff   128B Nov 13  2021 Movies
drwx------+  6 liruihao  staff   192B Nov 18  2021 Music
drwx------+  9 liruihao  staff   288B Apr 26 10:25 Pictures
drwxr-xr-x+  5 liruihao  staff   160B Nov 14  2021 Public
drwxr-xr-x   5 liruihao  staff   160B Jul 29 17:48 file-share
drwxr-xr-x   3 liruihao  staff    96B Jul 26 17:17 node_modules
-rw-r--r--   1 liruihao  staff    27B Jun 24 13:47 package-lock.json
drwxr-xr-x  20 liruihao  staff   640B Jul 29 22:20 workspace
-rw-r--r--   1 liruihao  staff    86B Jul 26 17:17 yarn.lock
```

文件列表信息分为：文件类型、权限、链接数、所属用户、所属用户组、文件大小、最后修改时间、文件名。

## 文件类型

linux 一共有 7 种文件类型，分别如下：

- `-`: 普通文件
- `d`: 目录文件
- `l`: 链接文件
- `b`: 块设备文件
- `p`: 管道文件
- `c`: 字符设备文件
- `s`: 套接口文件/数据接口文件

  _后四种是特殊文件_

## 文件权限对应关系

| 权限 | 含义     | 对应数字 |
| ---- | -------- | -------- |
| r    | 读权限   | 4        |
| w    | 写权限   | 2        |
| x    | 执行权限 | 1        |

读、写、运行三项权限用数字表示就是 **r=4,w=2,x=1**。所以，`-rw-r--r--` 用数字表示成 644。

权限字段 `-rwxrwxrwx` 的内容总共会有 10 个 `-`，第一个表示文件类型，如该文件是**文件 (-表示）**，**文件夹 (d 表示）**, **连接文件 (l 表示）**，后面 9 个按照每三位为一组分。

```bash
drwxr-xr-x   5 liruihao  staff   160B Jul 29 17:48 file-share
```

**d**: 代表文件夹

**rwx**: 代表文件所有者 (u 表示）权限，这里是 liruihao，liruihao 对该文件拥有读写执行权限。

**r-x**: 代表所属（g 表示）的权限，这里同组用户拥有对该文件读和执行的权限。

**r-x**: 代表其他用户（o 表示）的权限，这里和上面权限一样。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/linux-permission/  
> 转载 URL: https://blog.csdn.net/icanlove/article/details/39667265/
