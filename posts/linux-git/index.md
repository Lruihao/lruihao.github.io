# linux/centos 下的安装 git


### 下载 git
```
wget https://github.com/git/git/archive/v2.14.1.zip
```
### 安装依赖
```
sudo yum -y install zlib-devel openssl-devel cpio expat-devel gettext-devel curl-devel perl-ExtUtils-CBuilder perl-ExtUtils-MakeMaker
```
### 解压 git
```
unzip v2.14.1.zip
```
注：
unzip 命令用不了，具体步骤如下：
```
#yum list | grep zip/unzip 
#yum install zip
#yum install unzip
```
基本完成，如果在编译的时候出现错误：`gcc : error trying to exec 'cc1plus': execvp : No sunch file or directory`  
可以用`gcc -v/g++ -v` 来查看 gcc 版本，会发现没有安装。安装如下：

```
#yum list | grep gcc
#yum install gcc-c++
#yum install unzip
```
### 将 git 安装到/usr/local 上
先进入 git 文件夹  
编译  
安装  
```
cd git-2.14.1
make prefix=/usr/local all
make prefix=/usr/local install
```
### 验证是否安装完成
```
git --version
```

...


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/linux-git/  

