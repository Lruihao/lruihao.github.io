# 前端页面内容加密总结


记录一下前端实现页面加密的思路。

<!--more-->

## 加密基础知识

### 双向加密

可还原的加密算法，可以逆向解密。

1. 对称加密（单密钥加密）

   采用单钥密码系统的加密方法，同一个密钥同时用作信息的加密和解密。

   密钥生成算法有 DES、3DES、AES。

2. 非对称加密（公开密钥系统）

   两个密钥：公开密钥（publickey）和私有密钥（privatekey）。

   公钥/私钥加密/签名，用私钥/公钥解密/验证签名。

   密钥生成算法有 RSA（公钥、私钥）、DSA（公钥、私钥、数字签名）。

### 单向加密

不可还原的加密算法（暴力撞库除外），常见的算法有：MD5、SHA1、SHA256、SHA512。

## 页面内容加密

![内容加密算法](images/algorithm.jpg '内容加密算法')

1. 通过比对密码和输入的 md5 值来判断密码是否输入正确
2. 密码验证通过后，开始解密内容
   1. 拿到正确的输入值的 sha256 值的部分内容
   2. 然后按照加密规则解秘内容

这里利用 `Set` 进行事件管理，简单模拟了 `addEventListener` 和 `removeEventListener` 的操作。并提供了两个事件：`decrypted` 和 `reset`，详见 [fixit-decryptor.js](https://github.com/hugo-fixit/FixIt/blob/master/assets/js/fixit-decryptor.js)。


---

> 作者:   
> URL: https://lruihao.cn/posts/encryption-fe/  

