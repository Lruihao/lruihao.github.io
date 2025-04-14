# Python 设置程序每天 8 点定时执行任务


> 第一次运行根据程序执行时间，判断程序休眠的时间，尽最大可能休眠，节省系统资源。  
> 第二次运行后直接休眠一天，到每天早上 8 点执行任务。  
> （该程序需要一直挂着，保持网络不断）

<!--more-->

```python
import time
while True:
    now_hour = time.strftime("%H", time.localtime())
    now_min = time.strftime("%M", time.localtime())
    if now_hour < "08":
        rest = 8 - int(now_hour)
        sleeptime = (rest-1)*3600 + (60-int(now_min))*60
        print("启动时北京时间为："+time.strftime("%H:%M", time.localtime()),"\t 软件将在",rest-1,"小时",int((sleeptime-(rest-1)*3600)/60),"分钟后发送数据")
        time.sleep(sleeptime)
    elif now_hour > "08":
        rest = 8 - int(now_hour) + 24
        sleeptime = (rest-1)*3600 + (60-int(now_min))*60
        print("启动时北京时间为："+time.strftime("%H:%M", time.localtime()),"\t 软件将在",rest-1,"小时",int((sleeptime-(rest-1)*3600)/60),"分钟后发送数据")
        time.sleep(sleeptime)
    elif now_hour == "08":
        print("启动时北京时间为：" + time.strftime("%H:%M", time.localtime()), "\t 软件将在每天 8 点发送数据！")
        # 以下为定时任务
        print("数据")
        time.sleep(86400-int(now_min)*60)
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/pysettime/  

