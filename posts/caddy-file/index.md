# caddy-两步搭建超简单云盘


## 安装

```bash
cd ~
curl https://getcaddy.com | bash -s personal http.filemanager
```

## 编写配置文件

```bash
vim Caddyfile
```

内容如下：

```
:80 {
filemanager / /sdcard
timeouts none
gzip
}
```

这里的 8080 端口号可以随意指定，如果在手机 termux 等搭建，由于手机权限比较低，所以一般设置 1024 以上的端口。`80`端口可以直接通过 ip 访问。如`118.24.217.167`

如果用域名，先在域名服务商解析 ip, 再配置文件如下

```bash
https://pan.lruihao.cn {
filemanager / /sdcard
timeouts none
tls admin@lruihao.cn
gzip
}
```

指定邮箱是为了申请 ssl, 实现 https.

## [demo](https://pan.lruihao.cn)

启动 caddy

```
caddy
```

账号密码默认`admin`
![](images/1.png)

## 设置定时器启动 caddy（好像没用，我不会）

为了断开 xshell 后 caddy 还在运行。

```bash
vim run.sh
```

编辑以下内容

```
#!/bin/bash
caddy
```

加权

```
chmod +x run.sh
```

设置任务
[参考](https://www.jianshu.com/p/95d1473859d1)

```
crontab -e
```

加入

```
* * * * * /root/run.sh
```

```
service crond start
```

## ？？？

最后误打误撞开启了 caddy  
昨晚双十一要抢裤子，加上湘潭天气太 tm 冷了，就上床了，接着用 termux 远程连接服务器继续搞。结果连接的时候命令输错了-\_-!  
本来是`ssh root@118.24.217.167`再输入密码就可以了。这次搞错了多写了个`-T`, 然后运行`caddy`,`ctrl+c` 再断开，意外地发现 filemanager 竟然可以访问了。

```bash
ssh -T root@118.24.217.167
caddy

Ctrl+c
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/caddy-file/  

