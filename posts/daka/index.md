# 新冠疫情未返校未返工第 N 天之“自动打卡”


{{< admonition info >}}

这件事还得从一只蝙蝠说起 ...  
算了，昨天下午 3 点半，我还在王者峡谷 Timing, 突然潇 X 巴哥打了个电话给我说关于自动打卡的想法 ...  
哎，反正就是由于疫情需要每天健康打卡汇报给学校，然后每天提交一样的太麻烦了，就想写个程序自动打卡 ...  
我和潇 X 巴哥确定思路后兵分两路：

1. 他用 java 写个后台自动刷多人的，再弄个网页给用户填写账号密码保存在数据库；
2. 我想的就很直接，只刷一个人的，python 模拟浏览器登录后打卡，再设置定时任务（多人则设定多个）；

{{< /admonition >}}

<!--more-->

## Windows 运行效果

![打卡成功](images/result1.png '打卡成功')  
![重复打卡](images/result.png '重复打卡')  
![定时任务日志](images/result2.png '定时任务日志')

## 核心代码

> 适用湖南工程学院的打卡系统。  
> 请勿滥用代码提交不实健康信息，隐瞒疫情将受到相关法律处理！

[完整代码](https://github.com/Lruihao/python-funny-code/blob/master/%E6%98%93%E7%8F%AD%E6%89%93%E5%8D%A1.py)

```py 模拟登录打卡 https://github.com/Lruihao/python-funny-code/blob/master/%E6%98%93%E7%8F%AD%E6%89%93%E5%8D%A1.py 完整代码
def lajaDaka():
  # 登录
  r1 = requests.post(login_url, data=login,headers=headers,verify=False)
  if r1.status_code == 200:
    print(time.strftime("%Y:%m:%d:%H:%M", time.localtime()))
    print(login["username"] + " 登录成功！")
    # 拿到登录后的 cookie 并添加到 header 中
    header1 = r1.headers
    headers["Cookie"] = header1["Set-Cookie"]
  else:
    return

  # 打卡
  r2 = requests.post(daka_url, data=daka,headers=headers,verify=False)
  response2=r2.json()
  if r2.status_code != 200:
    print("打卡失败！")
    return
  if response2["result"] == True:
    print("打卡成功！")
  else:
    print(response2["errorInfoList"][0]["message"])

if __name__=="__main__":
  lajaDaka()
```

## 自动运行

### Windows

适用 python 代码控制休眠时间

```py 定时
if __name__=="__main__":
  while True:
    now_hour = time.strftime("%H", time.localtime())
    now_min = time.strftime("%M", time.localtime())
    # 设置每天 8 点发送
    if now_hour < "08":
      rest = 8 - int(now_hour)
      sleeptime = (rest-1)*3600 + (60-int(now_min))*60
      print("启动时北京时间为："+time.strftime("%H:%M", time.localtime()),"\t 脚本将在",rest-1,"小时",int((sleeptime-(rest-1)*3600)/60),"分钟后打卡")
      time.sleep(sleeptime)
    elif now_hour > "08":
      rest = 8 - int(now_hour) + 24
      sleeptime = (rest-1)*3600 + (60-int(now_min))*60
      print("启动时北京时间为："+time.strftime("%H:%M", time.localtime()),"\t 脚本将在",rest-1,"小时",int((sleeptime-(rest-1)*3600)/60),"分钟后打卡")
      time.sleep(sleeptime)
    elif now_hour == "08":
      print("软件明天开始将在每天 8 点发送数据！")
      lajaDaka()
      time.sleep(24*60*60-int(now_min)*60)
```

### linux（云服务器）

搭建 python 环境下载依赖后，使用 shell 脚本定时执行。

```bash 脚本内容设定
python /home/python/yiban_daka/daka.py
```

[CRON 表达式的基本语法](/posts/cron/)

## 潇 x 巴哥的 java web 版本

符合程序员的应该有的简洁和方便，干净又卫生！
`http://39.105.174.214/index.html`  
![java web 版](images/javaweb.png 'java web 版')


---

> 作者:   
> URL: https://lruihao.cn/posts/daka/  

