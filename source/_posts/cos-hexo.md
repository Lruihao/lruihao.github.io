---
title: 利用腾讯云对象存储COS桶托管hexo博客
date: 2019-01-22 14:57:08
tags:
- hexo
- 腾讯云cos桶
- 对象存储
categories: hexo
password:
abstract:
message:
description:
top:
author:
permalink:
noreward:
notshow:
---

{% note info %}
本以为coding pages与腾讯云合作后会更好，没想到正是这种初期bug不断，速度也是非常慢。比gitee,甚至github都要慢很多了。所以决定放弃coding了，本想挂到云服务器上，但是这个云服务器只续费了半年，可能不会再续费，前几天看到用腾讯云的cos桶xml制作动态相册的文章，知道了对象存储这个玩意，腾讯云COS提供免费50G的存储空间，还有CDN加速服务，我觉得是个不错的选择，部署后发现速度还挺好。
{% endnote %}

<!--more-->
### 创建存储桶

打开腾讯云控制台--云产品--存储--对象存储，然后创建存储桶。
{% asset_img 1.png %}

### 开启静态网站设置

在基础配置打开静态网站(关掉强制https)
{% asset_img 2.png %}

### 绑定域名

{% asset_img 3.png %}

SSL设置
{% asset_img 4.png %}

### 域名解析，添加记录

去dns服务商添加域名解析记录CNAME指向上面的域名

### hexo设置

- 安装插件

```
npm install hexo-deployer-cos --save
```
- 站点配置文件

```
deploy:
  type: cos
  bucket: yourBucketName #cos桶名称
  appId: yourAppId #cos桶名称后数字
  secretId: yourSecretId  #云API密钥
  secretKey: yourSecretKey #云API密钥
  region: yourRegion #所属地域
```
- 发布还是一样的

```
hexo clean
hexo g -d
```
结果类似于
{% asset_img 5.png %}

### CDN刷新

每次更新博客内容完后，都要登陆腾讯云CDN--缓存刷新，手动刷新一下CDN。

用脚本在每次更新后刷新

- 安装

```
npm install qcloud-cdn-node-sdk --save
```

- 创建`qcloudcdn.js`放入`script`文件夹

```
const qcloudSDK = require('qcloud-cdn-node-sdk');

qcloudSDK.config({
    secretId: '你的ID',
    secretKey: '你的密钥'
})

qcloudSDK.request('RefreshCdnDir', {
	'dirs.1': 'http://博客地址' 
}, (res) => {
    console.log(res)
})
```