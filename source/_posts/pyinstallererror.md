---
title: 安装pyinstaller出错的解决办法及csdn工具实例打包
date: 2019-05-09 19:05:01
tags:
- python
- pyinstaller
- 脚本
categories:
- python
password:
abstract:
message:
description:
keywords:
- python
- pyinstaller
- 脚本
- csdn访问数
top:
sticky:
author:
permalink:
noreward:
notshow:
norelate:
repost:
photos:
- /posts/pyinstallererror/1.png
- /posts/pyinstallererror/6.png
---


{% note %}
用过命令`pip install pyinstaller`安装失败，此包依赖于pywin32，安装前需要先`pip install pywin32`,我安装了还是出错，稍微百度了一下也没有看到解决办法。
这里通过手动下载安装解决的，记录一下。
{% endnote %}


<!--more-->

# 下载
去官网下载pyinstaller安装包：<https://pypi.org/project/PyInstaller/#files>

# 解压
我这里解压到`E:\应用\Python37\Lib\site-packages\PyInstaller-3.4`

# 安装
cmd也进入到上面的路径下，然后执行`Python setup.py install`，等待安装完毕
{% asset_img 1.png 安装 %}
{% asset_img 2.png 完成 %}
{% asset_img 3.png pip list %}
{% asset_img 4.png 版本 %}

# pyinstaller简介
pyinstaller将Python脚本打包成可执行程序，使在没有Python环境的机器上运行。

最新版是pyinstaller 3.4，可运行在Windows，Mac和Linux操作系统下。 但它不是跨编译的，也就是说在Windows下用PyInstaller生成的exe只能运行在Windows下，在Linux下生成的只能运行在Linux下。

# 打包
打包的app里并不包含任何源码，但将脚本的.pyc文件打包了。

基本语法： `pyinstaller options myscript.py`
> 常用的可选参数如下： 
`--onefile` 将结果打包成一个可执行文件
`--onedir` 将所有结果打包到一个文件夹中，该文件夹包括一个可执行文件和可执行文件执行时需要的依赖文件（默认）
`--paths=DIR` 设置导入路径
`--distpath=DIR` 设置将打包的结果文件放置的路径
`--specpath=DIR` 设置将spec文件放置的路径
`--windowed` 使用windows子系统执行，不会打开命令行（只对windows有效）
`--nowindowed` 使用控制台子系统执行（默认）（只对windows有效）
`--icon=<FILE.ICO>` 将file.ico添加为可执行文件的资源(只对windows有效）

如`pyinstaller --paths="D:\" test.py`

# CSDN访问量脚本实例
比如，拿以前写的一个刷csdn访问量工具csdn.py（放在桌面上），代码如下
```python 
__author__ = 'lruihao.cn'
import urllib.request
import re
import time
from bs4 import BeautifulSoup

opener = urllib.request.build_opener()
opener.addheaders = [('User-agent',
                      'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 UBrowser/4.0.3214.0 Safari/537.36')]

def get_article_url(page,name):
    endurl = "/"+name+"/article/details/........"
    print(name)
    p = re.compile(endurl)
    url = "http://blog.csdn.net/"+name+"/article/list/"+str(page)
    # 使用build_opener()是为了让python程序模仿浏览器进行访问
    html = opener.open(url).read().decode('utf-8')
    allfinds = p.findall(html)
    return allfinds
    #print('allfinds',allfinds)

def start_do(allfinds):
    urlBase = "http://blog.csdn.net"  # 需要将网址合并的部分
    # 页面中的网址有重复的，需要使用set进行去重复
    mypages = list(set(allfinds))
    for i in range(len(mypages)):
        mypages[i] = urlBase + mypages[i]
    print('要刷的网页有：')
    for index, page in enumerate(mypages):
        print(str(index), page)
    # 设置每个网页要刷的次数
    brushNum = 1

    # 所有的页面都刷
    print('下面开始刷了哦：')
    for index, page in enumerate(mypages):
        for j in range(brushNum):
            try:
                pageContent = opener.open(page).read().decode('utf-8')
                # 使用BeautifulSoup解析每篇博客的标题
                soup = BeautifulSoup(pageContent)
                blogTitle = str(soup.title.string)
                blogTitle = blogTitle[0:blogTitle.find('-')]
                print(str(j), blogTitle)
            except urllib.error.HTTPError:
                print('urllib.error.HTTPError')
                time.sleep(3)  # 出现错误，停几秒先
            except urllib.error.URLError:
                print('urllib.error.URLError')
                time.sleep(3)  # 出现错误，停几秒先
                time.sleep(0.5)  # 正常停顿，以免服务器拒绝访问

def main():
    name = input("输入你的csdn用户名：") 
    if name=="":
        name = "qq_39520417" # cheung99857 
    for page in range(1,5):
        print("************第"+str(page)+"页*************")
        endurl = get_article_url(page,name)
        start_do(endurl)
    print("开始休息")
    time.sleep(40)

if __name__ == '__main__':
    while 1:
        main()
```

在cmd进入桌面路径，输入如下命令
```shell
pyinstaller --onefile --nowindowed csdn.py
```
{% asset_img 5.png csdn.exe生成成功 %}

另外推广一下自己的微信公众号，欢迎关注公众号👇👇👇，后台回复关键词`csdn_visiter`获取源码及exe可执行文件。