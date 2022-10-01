# 安装 pyinstaller 出错的解决办法及 csdn 工具实例打包


> 用过命令`pip install pyinstaller`安装失败，此包依赖于 pywin32，安装前需要先`pip install pywin32`, 我安装了还是出错，稍微百度了一下也没有看到解决办法。
这里通过手动下载安装解决的，记录一下。

<!--more-->

## 下载
去官网下载 pyinstaller 安装包：<https://pypi.org/project/PyInstaller/#files>

## 解压
我这里解压到`E:\应用、Python37\Lib\site-packages\PyInstaller-3.4`

## 安装
cmd 也进入到上面的路径下，然后执行`Python setup.py install`，等待安装完毕

![安装](images/1.png)
![完成](images/2.png)
![pip list](images/3.png)
![版本](images/4.png)

## pyinstaller 简介
pyinstaller 将 Python 脚本打包成可执行程序，使在没有 Python 环境的机器上运行。

最新版是 pyinstaller 3.4，可运行在 Windows，Mac 和 Linux 操作系统下。 但它不是跨编译的，也就是说在 Windows 下用 PyInstaller 生成的 exe 只能运行在 Windows 下，在 Linux 下生成的只能运行在 Linux 下。

## 打包
打包的 app 里并不包含任何源码，但将脚本的。pyc 文件打包了。

基本语法： `pyinstaller options myscript.py`
> 常用的可选参数如下： 
`--onefile` 将结果打包成一个可执行文件
`--onedir` 将所有结果打包到一个文件夹中，该文件夹包括一个可执行文件和可执行文件执行时需要的依赖文件（默认）
`--paths=DIR` 设置导入路径
`--distpath=DIR` 设置将打包的结果文件放置的路径
`--specpath=DIR` 设置将 spec 文件放置的路径
`--windowed` 使用 windows 子系统执行，不会打开命令行（只对 windows 有效）
`--nowindowed` 使用控制台子系统执行（默认）（只对 windows 有效）
`--icon=<FILE.ICO>` 将 file.ico 添加为可执行文件的资源（只对 windows 有效）

如`pyinstaller --paths="D:\" test.py`

## CSDN 访问量脚本实例
比如，拿以前写的一个刷 csdn 访问量工具 csdn.py（放在桌面上），[代码详见](/posts/csdnvisiter.html)

在 cmd 进入桌面路径，输入如下命令
```shell
pyinstaller --onefile --nowindowed csdn.py
```
![csdn.exe 生成成功](images/5.png)
![csdn.exe 生成成功](images/6.png)

另外推广一下自己的微信公众号，欢迎关注公众号👇👇👇，后台回复关键词`csdn_visiter`获取源码及 exe 可执行文件。

---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/pyinstallererror/  

