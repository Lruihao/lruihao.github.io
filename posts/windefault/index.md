# Ubuntu + Windows 双系统默认启动项设置


> 双系统默认启动项是 Ubuntu，而日常使用最多的还是 Windows，所以说很不方便，一不小心就开机到 Ubuntu 去了。今天来设置一下。

<!--more-->

## 修改`/etc/default/grub`文件

> 同时按住键盘上的“Ctrl Alt T”三个键（即快捷键“Ctrl+Alt+T”），打开终端窗口。在终端内输入 sudo gedit /etc/default/grub 按 Enter 键确认，提示输入用户密码，输入的用户密码是看不见的，不要管它，输入完成确认即可打开 grub 文件。

![1](images/1.png)

> 把 grub 文件中的 `GRUB_DEFAULT=0` 中的 0 改为 `saved`, 把 `GRUB_TIMEOUT=10` 中的 10 改为 5。（这里的 5 表示开机时等待选择操作系统是时间是 5 秒）
> 在文件末尾添加 `GRUB_SAVEDEFAULT=true`后保存文件并退出。

![2](images/2.png)

## 更新启动配置文件

> 在终端输入 sudo update-grub 按 Enter 键确认

![3](images/3.png)

## 重启

`sudo reboot`或者点击重启，重启到启动菜单时，选择你要更改为默认启动项的系统，按 Enter 键确认启动即可，下次启动时刚刚选择的系统即为默认启动系统，直到你手动选择启动其他的系统为止。以后可以轻松的来回切换默认系统了。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/windefault/  

