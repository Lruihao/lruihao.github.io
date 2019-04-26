---
title: 基本python实现的爬取微信好友头像，并拼接成大图
date: 2019-04-20 13:32:58
tags:
- python
- wxpy
- pillow
categories:
- python
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
repost:
photos:
- /posts/wximgpy/1.jpg
- /posts/wximgpy/2.png
---


{% note %}
Python通过wxpy登录微信网页版，爬取好友所有头像并拼接成一张大图。然后删除所有子图。(注释相关代码可以不删除)
***文中涉及的图片涉及个人隐私，仅做举例，请勿传播***
**文中编码由Sunbelife提供，来自他的同名微信公众号，本博仅用于学习，侵删**
{% endnote %}

<!--more-->

# 预览
{% asset_img 1.jpg 我的微信好友全家福 %}

# 依赖
- wxpy（Pythone登录微信）
- pillow（拼接头像）
- os（文件夹操作）
- math（数学计算）

> [wxpy](https://github.com/youfou/wxpy):
&ensp;&ensp;wxpy 在 itchat 的基础上，通过大量接口优化提升了模块的易用性，并进行丰富的功能扩展。
[PIL](https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/0014320027235877860c87af5544f25a8deeb55141d60c5000)：
&ensp;&ensp;Python Imaging Library，已经是Python平台事实上的图像处理标准库了。PIL功能非常强大，但API却非常简单易用。由于PIL仅支持到Python 2.7，加上年久失修，于是一群志愿者在PIL的基础上创建了兼容的版本，名字叫Pillow，支持最新Python 3.x，又加入了许多新特性，因此，我们可以直接安装使用Pillow。

# 安装
```
pip install -U wxpy -i "https://pypi.doubanio.com/simple/"
pip install pillow
```

# 运行
> 如果在Python IDE 运行出错，可能是因为微信好友的id是特殊字符，在IDE打印出错，注释掉代码36行即可。

```py @Sunbelife
from wxpy import *
import math
import PIL.Image as Image
import os
import sys
import shutil
#
## 获取文件所在的绝对路径
def get_dir(sys_arg):
	sys_arg = sys_arg.split("/")

	dir_str = ""
	count = 0
	for cur_dir in sys_arg:
		if count == 0:
			count = count + 1
		if count == len(sys_arg):
			break
		dir_str = dir_str + cur_dir + "/"
		count = count + 1
	return dir_str

curr_dir = get_dir(sys.argv[0])

bot = Bot()

# 机器人账号自身
myself = bot.self
my_friends = bot.friends(update=True)

if not os.path.exists(curr_dir + "group-images/"):
	os.mkdir(curr_dir + "group-images/")

count = 0
for friend in my_friends:
	print(friend.nick_name)
	friend.get_avatar(curr_dir + "group-images/" + str(count) + ".jpg")
	count = count + 1

# 获取下载的头像文件
ls = os.listdir(curr_dir + 'group-images')

# 去除非 .jpg 文件
for filter_ls in ls:
	if ".jpg" in filter_ls:
		continue
	else:
		ls.remove(filter_ls)
		
# 排序
ls.sort(key=lambda x:int(x[:-4]))

# 头像墙尺寸
image_size = 2560

each_size = math.floor(image_size/math.floor(math.sqrt(len(ls))))
x_lines = math.ceil(math.sqrt(len(ls)))
y_lines = math.ceil(math.sqrt(len(ls)))
image = Image.new('RGB', (each_size * x_lines, each_size * y_lines))

x = 0
y = 0

for file_names in ls:
	try:
		img = Image.open(curr_dir + "group-images/" + file_names)
		print("正在处理" + file_names.split('.jpg')[0] + "/" + str(len(ls)))
	except IOError:
		continue
	else:
		img = img.resize((each_size, each_size))
		image.paste(img, (x * each_size, y * each_size))
		x += 1
		if x == x_lines:
			x = 0
			y += 1
				
img = image.save(curr_dir + "all.jpg")


try:
	shutil.rmtree(curr_dir + "group-images/")
	print("收尾，清理临时文件")
except FileNotFoundError:
	print("没什么好删的")

print("！！！\n生成完毕了，放在了目录" + curr_dir + "，去看看吧。")
print("工具作者：@Sunbelife（新浪微博）")
print("公众号：Sunbelife")
print("感谢使用")
print("v1.2")
print("2019.4.18")
```

# 群友全家福
> 修改11行群名称

```py @Sunbelife
import itchat
import math
import PIL.Image as Image
import os
import shutil

# 变量
itchat.auto_login(hotReload=True,enableCmdQR=False)
roomslist = itchat.get_chatrooms(update=True)[0:]
itchat.dump_login_status() # 显示所有的群聊信息，默认是返回保存到通讯录中的群聊
myroom=itchat.search_chatrooms(name=u'绥宁一中高396班') #群聊名称
gsq=itchat.update_chatroom(myroom[0]['UserName'], detailedMember=True)

num = 0

if not os.path.exists("./group-images/"):
    os.mkdir("./group-images/")

for i in gsq['MemberList']:
    print(i["UserName"])
    img = itchat.get_head_img(userName=i["UserName"],chatroomUserName=myroom[0]['UserName'])
    fileImage = open("./group-images/" + str(num) + ".jpg",'wb')
    fileImage.write(img)
    fileImage.close()
    num += 1

ls = os.listdir('./group-images')
each_size = int(math.sqrt(float(640*640)/len(ls)))
lines = int(640/each_size)
image = Image.new('RGBA', (640, 640))
x = 0
y = 0
for i in range(0,len(ls)+1):
    try:
        img = Image.open("./group-images/" + str(i) + ".jpg")
    except IOError:
        print("Error")
    else:
        img = img.resize((each_size, each_size), Image.ANTIALIAS)
        image.paste(img, (x * each_size, y * each_size))
        x += 1
        if x == lines:
            x = 0
            y += 1
image.save("all.png")
shutil.rmtree("./group-images")
```
{% asset_img 2.png 绥宁一中高396班 %}

> 加个列表，加个循环实现自动爬取所有群聊头像并发送

```py @Sunbelife
import itchat
import math
import PIL.Image as Image
import os
import shutil

# 变量
itchat.auto_login(hotReload=True,enableCmdQR=False)
roomslist = itchat.get_chatrooms(update=True)[0:]
itchat.dump_login_status() # 显示所有的群聊信息，默认是返回保存到通讯录中的群聊

for room in roomslist:
    print(room['UserName'])
    gsq=itchat.update_chatroom(room['UserName'], detailedMember=True)
    num = 0

    if not os.path.exists("./group-images/"):
        os.mkdir("./group-images/")

    for i in gsq['MemberList']:
        print(i["UserName"])
        img = itchat.get_head_img(userName=i["UserName"],chatroomUserName=room['UserName'])
        fileImage = open("./group-images/" + str(num) + ".jpg",'wb')
        fileImage.write(img)
        fileImage.close()
        num += 1

    ls = os.listdir('./group-images')
    each_size = int(math.sqrt(float(640*640)/len(ls)))
    lines = int(640/each_size)
    image = Image.new('RGB', (640, 640))
    x = 0
    y = 0
    for i in range(0,len(ls)+1):
        try:
            img = Image.open("./group-images/" + str(i) + ".jpg")
        except IOError:
            print("Error")
        else:
            img = img.resize((each_size, each_size), Image.ANTIALIAS)
            image.paste(img, (x * each_size, y * each_size))
            x += 1
            if x == lines:
                x = 0
                y += 1
    image.save("all.jpg")
    itchat.send("写了个好玩的… 测试一下", room['UserName'])
    itchat.send_image("all.jpg", room['UserName'])
    shutil.rmtree("./group-images")
```