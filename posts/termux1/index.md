# termux 基本使用教程


> 前面有一篇文章写到一些，[在 Android 上搭建 hexo 博客](https://lruihao.cn/posts/termux/)
**本文当初摘要自 [国光个人博客](https://www.sqlsec.com/2018/05/termux.html?yyue=a21bo.50862.201879)**
如若作者博客 IP 被墙，可前往国光第三方博客诸如 csdn 等。[备用](https://www.freebuf.com/geek/170510.html)

### 初始化
下载并初始化 termux
#### 安装 vim
安装编辑器 vim
```
pkg install vim
```
#### 解决中文乱码问题
在 home 目录下，新建 `.vimrc` 文件
```
vim .vimrc
```
添加内容如下：
```
set fileencodings=utf-8,gb2312,gb18030,gbk,ucs-bom,cp936,latin1
set enc=utf8
set fencs=utf8,gbk,gb2312,gb18030
```
然后 source 下变量：
```
source .vimrc
```
#### 修改启动问候语
```
vim $PREFIX/etc/motd
```
按 i 然后编辑，比如
```
		www.lruihao.cn
		    李瑞豪
```
Esc 然后：wq 退出

#### 管理员权限
手机已经 root, 安装 tsu, 这是一个 su 的 termux 版本，用来在 termux 上替代 su:
```
pkg install tsu
```
然后终端下面输入：
```
tsu
```
即可切换 root 用户，这个时候会弹出 root 授权提示。在管理员身份下，输入 exit 可回到普通用户身份。

### 美化
[Termux-ohmyzsh](https://github.com/Cabbagec/termux-ohmyzsh)

作用 ： 美化之外，主要使用了 zsh 来替代 bash 作为默认 shell。使用一键安装脚本来安装，一步到位，顺便启动了外置存储，可以直接访问 SD 卡下的目录，创建软文件夹。

#### 使用
```
sh -c "$(curl -fsSL https://github.com/Cabbagec/termux-ohmyzsh/raw/master/install.sh)"
```
#### 设置色彩样式：
运行 chcolor 更换色彩样式，或者：
```
~/.termux/colors.sh
```
#### 设置字体
运行 chfont 更换字体，或者：
```
~/.termux/fonts.sh
```
#### 需要软件包：
 * curl

### 访问外置存储
执行过上面的 zsh 一键配置脚本后，并且授予文件访问权限的话，会在家目录生成 storage 目录，并且生成若干目录，软连接都指向外置存储卡的相应目录  
可以让从外置储存复制文件进 system 分区

#### 创建 QQ 文件夹软连接
```
ln -s /data/data/com.termux/files/home/storage/shared/tencent/QQfile_recv QQ
```

#### 创建 blog2 文件夹软连接备份文件
```
ln -s /data/data/com.termux/files/home/storage/shared/blog2 blog2
```

### 安装 hexo

#### 安装准备
```
pkg install nodejs
pkg install git
npm install hexo-cli -g
npm install hexo-deployer-git --save
pkg install openssh
```
#### 初始化 hexo
```
hexo init blog
cd blog
hexo g
hexo s
```
浏览器输入`127.0.0.1:4000`查看效果

#### 链接 github,coding,gitee 等远程仓库
```
ssh-keygen -t rsa -C "your_email@example.com"
#这将按照你提供的邮箱地址，创建一对密钥（个人喜欢一路回车）
```
找到`~/.ssh/id_rsa.pub`这个文件复制里面的内容，到对应的平台生成 SSH 公钥

#### 设置用户信息
```
git config --global user.name "lruihao"
git config --global user.email  "1074627678@qq.com"
```
#### 测试链接
```
ssh -T git@github.com  #github
ssh -T git@coding.net   #coding
ssh -T git@gitee.com   #gitee
```
**注意#注释部分不要的**

#### 站点配置文件

打开站点配置文件填写代码库

例如我的
```
deploy:
- type: git
  repository:
    github: git@github.com:Lruihao/Lruihao.github.io.git,master
    coding: git@git.coding.net:liruihao/liruihao.git,master
  #message: "日常更新"
```

#### 部署
```
hexo clean
hexo g -d
```
没出错就可以正常通过相应域名访问了。
<https://lruihao.github.io>
<https://liruihao.coding.me>
<https://lruihao.gitee.io> **//手机 hexo 效果展示**

### ssh 连接电脑或者服务器
```
ssh root@118.24.217.167
```
会提示输入密码，linux 下输入密码是看不到的，大家都知道，小心点别输入错误。  
之后就可以手机操作服务器了。  

### 解决 npm 安装报错（未验证）
```
vim $PREFIX/lib/node_modules/npm/node_modules/worker-farm/lib/farm.js
```
把里面的 length 改成 4，我默认的是 1。

### nyancat 彩虹猫
彩虹貓（英语：Nyan Cat）是在 2011 年 4 月上传在 Youtube 的视频，并且迅速爆红于网络，並在 2011 年 YouTube 浏览量最高的视频中排名第五。
```
pkg install nyancat
nyancat
```

> 还有更多姿势这里就不写了，只写一下日常用到的，就这样 OK 睡觉！

### termux 更多常用有趣命令（适用于 linux）

```
vim $PREFIX/etc/motd
chcolor
chfont
~/.termux/colors.sh
~/.termux/fonts.sh

echo "https://www.lruihao.cn" |curl -F-=\<- qrenco.de

pkg install nyancat
nyancat
pkg install sl
sl
pkg install figlet
figlet hello
pkg install toilet
toilet hello
toilet -f mono12 -F gay "hello"
pkg cowsay
cowsay "hello"
pkg install cmatrix
cmatrix
pkg install w3m
w3m www.lruihao.cn
```

    cmatrix 常用命令如下：
    cmatrix-a : 异步滚动（默认）
    cmatrix-b : 随机粗体
    cmatrix-B : 全部粗体
    cmatrix-o : 使用旧风格滚动
    cmatrix-x :X window 模式
    cmatrix-V : 显示版本信息
    cmatrix-u : 刷新频率，0-9，也就是滚动的快慢
    cmatrix-C : 显示的颜色，支持 green（默认）,red,blue,white,yellow,cyan,
            magenta and black
    例如：使用红色
    cmatrix -b -C red
    使用蓝色
    cmatrix -b -C blue
    等等 ........
    主义：在运行状态下，使用 0-9 数字，可以改变运行速度快慢。
开启你的装逼之路把，骚年！

---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/termux1/  

