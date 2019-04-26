---
title: python玩微信：初探wxpy
date: 2019-04-20 15:44:57
tags:
- python
- wxpy
- pyecharts
- jieba
- 他山之石
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
repost: true
photos:
- /posts/wxpy1/1.png
- /posts/wxpy1/2.png
---


{% note %}
***文中涉及的图片涉及个人隐私，仅做举例，请勿传播***

- 查看微信好友男女比例
- 查看好友地区分布
- 群性别统计

{% endnote %}

<!--more-->
# 前期准备
- [wxpy](https://github.com/youfou/wxpy)
- [pyecharts](https://github.com/pyecharts/pyecharts)（百度echarts）

# 查看微信好友男女比例

```py 生成结果在源文件同目录在的sex.html
from wxpy import *
from pyecharts import Pie

bot = Bot(cache_path = True)   #定义一个微信机器人
friends = bot.friends(update=False)   #获取更新好友列表
male = female = other = 0    

for i in friends[1:]:     #[1:]自己是第一个，排除掉
    sex = i.sex
    if sex == 1:
        male += 1
    elif sex == 2:
        female += 1
    else:
        other += 1
total = len(friends[1:])   #计算总数

#下面为分析
attr = ["男性","女性","其他"]
v1 = [float(male),float(female),float(other)]
pie = Pie("饼图-圆环图示例", title_pos='center')
pie.add("", attr, v1, radius=[40, 75], label_text_color=None, is_label_show=True,
        legend_orient='vertical', legend_pos='left')
pie.render("sex.html")
```
{% asset_img 1.png 微信好友男女比例 %}

# 查看好友地区分布

```py 生成结果在源文件同目录在的city.html
from wxpy import *
from pyecharts import Map

#因为获取的列表城市都没有带市字，而pyecharts需要带个市字
b = '市'
def s(x):
    return x+b

#只提取湖南的
bot = Bot(cache_path = True)
friends = bot.friends(update=False).search(province = '湖南')
citys = []   
for f in friends :
    city = f.city
    citys.append(city)
r = map(s,citys)
cityss = list(r)

#为城市计数
a = {}
for i in cityss:
    a[i] = cityss.count(i)
a.pop('市')

#把字典进行有序拆分为2个列表
attrs = []
values = []
for value, attr in a.items():
    values.append(attr)
    attrs.append(value)
#开始绘图
map = Map("湖南地图示例", width=1200, height=600)
map.add("", attrs, values, maptype='湖南', is_visualmap=True, visual_text_color='#000')
map.render("city.html")
```
{% asset_img 2.png 微信地区分布 %}

> **以上参考简书[陈思煜](https://www.jianshu.com/p/c0baf3c6db15)**

# 统计所有群男女数目
> 统计结果会自动发送到所有群聊
> 男女人数和不一定等于总数（有些人不显示性别）

```py @Sunbelife
#encoding=utf-8
from wxpy import *
import numpy
    
def removeAll(the_list, val):
    return [value for value in the_list if value != val]

def stats_text(target_group, group_name):
    print(group_name + "群共有：" + str(len(target_group)) + "人，其中：")
    all_stats_text = []
    all_dict = {}
    
    # 乱序先整理一份省份 + 地点的列表
    for user in target_group.members:
        trimed_data = user.province.replace(' ', '') + user.city.replace(' ', '')
        if trimed_data != '':
            all_stats_text.append(trimed_data)
    # 计数
    for data in all_stats_text:
        if all_stats_text.count(data) != 0:
            all_dict[data] = all_stats_text.count(data)
            all_stats_text = removeAll(all_stats_text, data)        
    final_dict = {}
    for i in sorted(all_dict.keys()):
        final_dict[i] = all_dict[i]
    return final_dict

def stats_sex(target_group):
    male = 0
    female = 0
    other = 0
    
    for user in target_group.members:
        if user.sex == 1:
            male = male + 1
        if user.sex == 2:
            female = female + 1
        else:
            other = other + 1
    
    print("男的有：" + str(male) + "人")
    print("女的有：" + str(female) + "人")
    msg = "男的有：" + str(male) + "人\n" + "女的有：" + str(female) + "人\n"
    return msg

bot = Bot()

target_group = bot.groups(update=True, contact_only=False)

for curr_group in target_group:
    # 小于 10 人的群过滤掉
    if len(curr_group) < 10:
        continue
    curr_group.update_group(members_details=True)
    print(curr_group.name + "一共有：" + str(len(curr_group)) + "人\n")
    msg = stats_sex(curr_group)
    curr_group.send(curr_group.name + "群，一共有：" + str(len(curr_group)) + "人\n" + msg)
```