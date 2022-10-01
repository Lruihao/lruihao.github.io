# vps 配置 ssl 及 https 重定向


> 记录自己在配置 vps 及博客 SSL 证书时遇到的问题。

<!--more-->

## 强制重定向 https
> 有一种情况相信很多人都遇到过，就是虽然我们配置了 ssl 证书，但是 https 和 http 地址都是各自都可以单独访问。我们应该也见过类似于 github 的代码托管网站有强制 https 的开关。如果是这种情况我们还可以通过 js 进行 301 定向。

```java http2https
<script>
	var targetProtocol = "https:";
	var host = "lruihao.cn";
	if (window.location.host == host && window.location.protocol != targetProtocol){
 		window.location.href = targetProtocol +
  		window.location.href.substring(window.location.protocol.length);
    }
</script>
```

## 腾讯云 CDN 配置
> 这个博客后来是转到了腾讯云的 cos 桶存储。当时在桶内静态网站设置的时候，设置强制 https 发现会出错。而且还接入了 CDN，所以今天在 CDN 设置那里也看到了 https 的设置，打开强制 https 就 OK 了。这天在三丰云撸了一个免费的主机，搭了一个 WordPress（想试试 wp 的感觉），然后 vps 的 SSL 问题现在也很简单了，第一步，到腾讯云申请免费证书；第二步，配置 CDN，按步骤来，其中接入方式选择自有源站；第三步，强制 https（可选）。

![Cellvps--WordPress](images/1.png)

![CDN 域名管理](images/2.png)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/http2https/  

