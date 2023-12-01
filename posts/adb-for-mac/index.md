# Mac 配置 ADB


作为非安卓专业开发，无需下载 Android SDK，  
仅下载 Android SDK 中的 [platform-tools](https://developer.android.com/studio/releases/platform-tools?hl=zh-cn) 命令行工具即可，并配置好环境变量。

<!--more-->

## 安装

- [platform-tools](https://developer.android.com/studio/releases/platform-tools?hl=zh-cn)

## 配置环境变量

```bash
open .bash_profile
```

写入以下内容

```
# platform-tools of Android SDK
export PATH=$PATH:$HOME/Applications/platform-tools
```

```bash
source .bash_profile
```

Windows 系统打开高级设置，配置 PATH 变量，增加一条路径即可。

## ADB 命令

通过 USB 连接手机和电脑，执行以下命令

```bash
# 1. 打开手机 tcpip 5555 端口
adb tcpip 5555
# 2. 查看手机网络 IP
adb shell ifconfig
# 3. 在电脑上 ping 手机网络 IP
# 4. adb connect [Android IP]
```

- [Android 调试桥 (adb)](https://developer.android.com/studio/command-line/adb?hl=zh-cn)
- [awesome-adb](https://github.com/mzlogin/awesome-adb)

## 注意

windows 系统下的文件（夹）命名所采用的是 GBK 编码，而 linux 是采用的 UTF-8 编码，使用 adb 的
push 和 pull 命令时由于编码方式的不同会产生错误，因此需要修改 adb 的源代码来支持编码转换。


---

> 作者:   
> URL: https://lruihao.cn/posts/adb-for-mac/  

