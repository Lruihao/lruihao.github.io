# win10,ubuntu 双系统时间不一致


> 我的 Ubuntu 和 Windows 双系统是 Ubuntu 是第一启动项，所以总是开机忘记点下键，一进 Ubuntu 系统时间就不对了（总是少了 8 小时），回到 Windows 时间也是错的。知道是错的调整一下还好。忘记调了有时候真的会误事。比如说 git 版本控制提交会遇到问题种种等。

<!--more-->
## 原因
在安装 Ubuntu 和 Windows 双系统的情况下，Ubuntu 的时间总会和 Windows 的时间相差 8 小时，原因在于 widows 认为 BIOS 时间是本地时间，Ubuntu 认为 BIOS 时间是 UTC 时间，即协调世界时，(Universal Time Coordinated) 英文缩写，是由国际无线电咨询委员会规定和推荐，并由国际时间局 (BIH) 负责保持的以秒为基础的时间标度。UTC 相当于本初子午线（即经度 0 度）上的平均太阳时，过去曾用格林威治平均时 (GMT) 来表示。北京时间比 UTC 时间早 8 小时，以 1999 年 1 月 1 日 00:00 UTC 为例，UTC 时间是零点，北京时间为 1999 年 1 月 1 日早上 8 点整。)，所以我们在时间上面相隔了 8 个小时。这个时候 bios 的时间和系统的时间当然是不一致，一个代表 utc 时间，一个代表 cst（＋8 时区），即我们常用的时间。

## 方法一
在 Windows 下 进行如下修改：（博主 win10,win7 自测）  
以管理员身份运行 CMD（`win+x 后选择 Windows Powershell（管理员）`
```default windows cmd 命令
Reg add HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation /v RealTimeIsUniversal /t REG_DWORD /d 1
```
重启看看时间发现 ok 了。

## 方法二
老版 Ubuntu（Ubuntu10 左右）：  
修改 `/etc/default/rcS` 文件  
编辑 `/etc/default/rcS` 将 `UTC=yes`改成 `UTC=no` 。

新版 Ubuntu（Ubuntu16.04）：
新版本的 Ubuntu 使用 systemd 启动之后，时间也改成了由 timedatectl 来管理，此方法就不适用了。
```default 重启完成将硬件时间 UTC 改为 CST，双系统时间保持一致。
$sudo timedatectl set-local-rtc 1
```
先在 ubuntu 下更新一下时间，确保时间无误：
```default ubuntu 命令
$sudo apt-get install ntpdate
$sudo ntpdate time.windows.com
```
然后将时间更新到硬件上：
```default ubuntu 命令
$sudo hwclock --localtime --systohc
```
重新进入 windows10，发现时间恢复正常了！


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/ubuntutime/  

