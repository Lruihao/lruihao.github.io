# 云服务器 CentOS 系统搭建 web 服务


### 搭建 Apache web 服务

1. 安装 Apache 超文本传输协议 (HTTP) 服务器的主程序
```
[root@VM_0_6_centos /]# yum install -y httpd
```
注意安装目录，可通过 cd 命令切换。

2. 启动 HTTP 服务
```
[root@VM_0_6_centos /]# systemctl start httpd.service 
```
如果启动失败，可通过 systemctl status httpd.service 查看错误原因。  
启动成功，证明 http 服务已经可以使用，发现还需要把本地文件传到服务器。  
默认根目录`/var/www/html/`  

### 使用 SSH 连接服务器

尝试了两种方式：PuTTY 和 Xshell（推荐）
#### Xshell 方式
官网下载安装 Xshell 打开，输入 ip 账号密码连接主机。

使用 lrzsz 方式上传下载文件  
步骤 1：在服务器安装 lrzsz  
```
[root@VM_0_6_centos /]# yum -y install lrzsz
```
步骤 2：输入命令`rz`打开上传窗口（可以选择多个文件。)  
使用`sz`文件名命令可打开从服务器下载文件的保存窗口。  

### 修改 HTTP 配置
1.VIM 编辑器打开配置文件
```
[root@VM_0_6_centos /]# vim /etc/httpd/conf/httpd.conf
```
2. 按`I`键进入编辑模式

3. 找到并修改以下内容
```
ServerAdmin 管理员邮箱，用于浏览器请求报错时展示
DocumentRoot 访问根目录（默认：/var/www/html），如项目存放在其他地方，可修改为项目存放位置
<Directory "/var/www/html"> 同 DocumentRoot 配置
ServerName 服务器 IP 或 域名 
```
4. 按下 ESC 键输入`:wq`保存退出

5. 重启服务`service httpd restart`

6. 打开浏览器，输入地址访问  
如：我的项目索引 html 路径为 `love/index.html`，输入  
`http://IP 地址或域名/love/index.html`
  
7. 访问不成功，先检查网络，再查看 http 服务是否开启，最后检查配置；  
访问成功，配置完成。  


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/web-server-yun/  
> 转载 URL: https://www.jianshu.com/p/0b67c6c5d21d
