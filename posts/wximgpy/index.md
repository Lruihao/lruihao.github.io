# 基本 Python 实现的爬取微信好友头像，并拼接成大图


&gt; Python 通过 wxpy 登录微信网页版，爬取好友所有头像并拼接成一张大图。然后删除所有子图。（注释相关代码可以不删除）  
&gt; **_文中涉及的图片涉及个人隐私，仅做举例，请勿传播_**  
&gt; **文中编码由 Sunbelife 提供，来自他的同名微信公众号，本博仅用于学习，侵删**

&lt;!--more--&gt;

## 依赖

- wxpy（Pythone 登录微信）
- pillow（拼接头像）
- os（文件夹操作）
- math（数学计算）

&gt; [wxpy](https://github.com/youfou/wxpy):  
&gt; &amp;ensp;&amp;ensp;wxpy 在 itchat 的基础上，通过大量接口优化提升了模块的易用性，并进行丰富的功能扩展。  
&gt; [PIL](https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/0014320027235877860c87af5544f25a8deeb55141d60c5000)：  
&gt; &amp;ensp;&amp;ensp;Python Imaging Library，已经是 Python 平台事实上的图像处理标准库了。PIL 功能非常强大，但 API 却非常简单易用。由于 PIL 仅支持到 Python 2.7，加上年久失修，于是一群志愿者在 PIL 的基础上创建了兼容的版本，名字叫 Pillow，支持最新 Python 3.x，又加入了许多新特性，因此，我们可以直接安装使用 Pillow。

## 安装

```bash
pip install -U wxpy -i &#34;https://pypi.doubanio.com/simple/&#34;
pip install pillow
```

## 运行

&gt; 如果在 Python IDE 运行出错，可能是因为微信好友的 id 是特殊字符，在 IDE 打印出错，注释掉代码 36 行即可。

```py @Sunbelife
from wxpy import *
import math
import PIL.Image as Image
import os
import sys
import shutil
#
### 获取文件所在的绝对路径
def get_dir(sys_arg):
  sys_arg = sys_arg.split(&#34;/&#34;)

  dir_str = &#34;&#34;
  count = 0
  for cur_dir in sys_arg:
    if count == 0:
      count = count &#43; 1
    if count == len(sys_arg):
      break
    dir_str = dir_str &#43; cur_dir &#43; &#34;/&#34;
    count = count &#43; 1
  return dir_str

curr_dir = get_dir(sys.argv[0])

bot = Bot()

## 机器人账号自身
myself = bot.self
my_friends = bot.friends(update=True)

if not os.path.exists(curr_dir &#43; &#34;group-images/&#34;):
  os.mkdir(curr_dir &#43; &#34;group-images/&#34;)

count = 0
for friend in my_friends:
  print(friend.nick_name)
  friend.get_avatar(curr_dir &#43; &#34;group-images/&#34; &#43; str(count) &#43; &#34;.jpg&#34;)
  count = count &#43; 1

## 获取下载的头像文件
ls = os.listdir(curr_dir &#43; &#39;group-images&#39;)

## 去除非 .jpg 文件
for filter_ls in ls:
  if &#34;.jpg&#34; in filter_ls:
    continue
  else:
    ls.remove(filter_ls)

## 排序
ls.sort(key=lambda x:int(x[:-4]))

## 头像墙尺寸
image_size = 2560

each_size = math.floor(image_size/math.floor(math.sqrt(len(ls))))
x_lines = math.ceil(math.sqrt(len(ls)))
y_lines = math.ceil(math.sqrt(len(ls)))
image = Image.new(&#39;RGB&#39;, (each_size * x_lines, each_size * y_lines))

x = 0
y = 0

for file_names in ls:
  try:
    img = Image.open(curr_dir &#43; &#34;group-images/&#34; &#43; file_names)
    print(&#34;正在处理&#34; &#43; file_names.split(&#39;.jpg&#39;)[0] &#43; &#34;/&#34; &#43; str(len(ls)))
  except IOError:
    continue
  else:
    img = img.resize((each_size, each_size))
    image.paste(img, (x * each_size, y * each_size))
    x &#43;= 1
    if x == x_lines:
      x = 0
      y &#43;= 1

img = image.save(curr_dir &#43; &#34;all.jpg&#34;)

try:
  shutil.rmtree(curr_dir &#43; &#34;group-images/&#34;)
  print(&#34;收尾，清理临时文件&#34;)
except FileNotFoundError:
  print(&#34;没什么好删的&#34;)

print(&#34;！！！\n 生成完毕了，放在了目录&#34; &#43; curr_dir &#43; &#34;，去看看吧。&#34;)
print(&#34;工具作者：@Sunbelife（新浪微博）&#34;)
print(&#34;公众号：Sunbelife&#34;)
print(&#34;感谢使用&#34;)
print(&#34;v1.2&#34;)
print(&#34;2019.4.18&#34;)
```

## 群友全家福

&gt; 修改 11 行群名称

```py @Sunbelife
import itchat
import math
import PIL.Image as Image
import os
import shutil

## 变量
itchat.auto_login(hotReload=True,enableCmdQR=False)
roomslist = itchat.get_chatrooms(update=True)[0:]
itchat.dump_login_status() ## 显示所有的群聊信息，默认是返回保存到通讯录中的群聊
myroom=itchat.search_chatrooms(name=u&#39;绥宁一中高 396 班&#39;) #群聊名称
gsq=itchat.update_chatroom(myroom[0][&#39;UserName&#39;], detailedMember=True)

num = 0

if not os.path.exists(&#34;./group-images/&#34;):
    os.mkdir(&#34;./group-images/&#34;)

for i in gsq[&#39;MemberList&#39;]:
    print(i[&#34;UserName&#34;])
    img = itchat.get_head_img(userName=i[&#34;UserName&#34;],chatroomUserName=myroom[0][&#39;UserName&#39;])
    fileImage = open(&#34;./group-images/&#34; &#43; str(num) &#43; &#34;.jpg&#34;,&#39;wb&#39;)
    fileImage.write(img)
    fileImage.close()
    num &#43;= 1

ls = os.listdir(&#39;./group-images&#39;)
each_size = int(math.sqrt(float(640*640)/len(ls)))
lines = int(640/each_size)
image = Image.new(&#39;RGBA&#39;, (640, 640))
x = 0
y = 0
for i in range(0,len(ls)&#43;1):
    try:
        img = Image.open(&#34;./group-images/&#34; &#43; str(i) &#43; &#34;.jpg&#34;)
    except IOError:
        print(&#34;Error&#34;)
    else:
        img = img.resize((each_size, each_size), Image.ANTIALIAS)
        image.paste(img, (x * each_size, y * each_size))
        x &#43;= 1
        if x == lines:
            x = 0
            y &#43;= 1
image.save(&#34;all.png&#34;)
shutil.rmtree(&#34;./group-images&#34;)
```

![绥宁一中高 396 班](images/2.png &#39;绥宁一中高 396 班&#39;)

&gt; 加个列表，加个循环实现自动爬取所有群聊头像并发送

```py @Sunbelife
import itchat
import math
import PIL.Image as Image
import os
import shutil

## 变量
itchat.auto_login(hotReload=True,enableCmdQR=False)
roomslist = itchat.get_chatrooms(update=True)[0:]
itchat.dump_login_status() ## 显示所有的群聊信息，默认是返回保存到通讯录中的群聊

for room in roomslist:
    print(room[&#39;UserName&#39;])
    gsq=itchat.update_chatroom(room[&#39;UserName&#39;], detailedMember=True)
    num = 0

    if not os.path.exists(&#34;./group-images/&#34;):
        os.mkdir(&#34;./group-images/&#34;)

    for i in gsq[&#39;MemberList&#39;]:
        print(i[&#34;UserName&#34;])
        img = itchat.get_head_img(userName=i[&#34;UserName&#34;],chatroomUserName=room[&#39;UserName&#39;])
        fileImage = open(&#34;./group-images/&#34; &#43; str(num) &#43; &#34;.jpg&#34;,&#39;wb&#39;)
        fileImage.write(img)
        fileImage.close()
        num &#43;= 1

    ls = os.listdir(&#39;./group-images&#39;)
    each_size = int(math.sqrt(float(640*640)/len(ls)))
    lines = int(640/each_size)
    image = Image.new(&#39;RGB&#39;, (640, 640))
    x = 0
    y = 0
    for i in range(0,len(ls)&#43;1):
        try:
            img = Image.open(&#34;./group-images/&#34; &#43; str(i) &#43; &#34;.jpg&#34;)
        except IOError:
            print(&#34;Error&#34;)
        else:
            img = img.resize((each_size, each_size), Image.ANTIALIAS)
            image.paste(img, (x * each_size, y * each_size))
            x &#43;= 1
            if x == lines:
                x = 0
                y &#43;= 1
    image.save(&#34;all.jpg&#34;)
    itchat.send(&#34;写了个好玩的… 测试一下&#34;, room[&#39;UserName&#39;])
    itchat.send_image(&#34;all.jpg&#34;, room[&#39;UserName&#39;])
    shutil.rmtree(&#34;./group-images&#34;)
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/wximgpy/  

