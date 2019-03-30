---
title: vps配置ssl及https重定向
date: 2019-03-28 19:40:54
tags:
- VPS
- SSL
- 301重定向
- javascript
- CDN
categories: Web
password:
abstract:
message:
description:
keywords:
top:
sticky:
author:
permalink:
noreward:
notshow:
---

{% note default %}
记录自己在配置vps及博客SSL证书时遇到的问题。
{% endnote %}

<!--more-->

# 强制重定向https
> 有一种情况相信很多人都遇到过，就是虽然我们配置了ssl证书，但是https和http地址都是各自都可以单独访问。我们应该也见过类似于github的代码托管网站有强制https的开关。如果是这种情况我们还可以通过js进行301定向。

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

# 腾讯云CDN配置
> 这个博客后来是转到了腾讯云的cos桶存储。当时在桶内静态网站设置的时候，设置强制https发现会出错。而且还接入了CDN，所以今天在CDN设置那里也看到了https的设置，打开强制https就OK了。这天在三丰云撸了一个免费的主机，搭了一个WordPress（想试试wp的感觉），然后vps的SSL问题现在也很简单了，第一步，到腾讯云申请免费证书；第二步，配置CDN，按步骤来，其中接入方式选择自有源站；第三步，强制https(可选)。

{% asset_img 1.png Cellvps--WordPress %}

{% asset_img 2.png CDN域名管理 %}
