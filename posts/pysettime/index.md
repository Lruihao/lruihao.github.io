# Python 设置程序每天 8 点定时执行任务


&gt; 第一次运行根据程序执行时间，判断程序休眠的时间，尽最大可能休眠，节省系统资源。  
&gt; 第二次运行后直接休眠一天，到每天早上 8 点执行任务。  
&gt; （该程序需要一直挂着，保持网络不断）

&lt;!--more--&gt;

```python
import time
while True:
    now_hour = time.strftime(&#34;%H&#34;, time.localtime())
    now_min = time.strftime(&#34;%M&#34;, time.localtime())
    if now_hour &lt; &#34;08&#34;:
        rest = 8 - int(now_hour)
        sleeptime = (rest-1)*3600 &#43; (60-int(now_min))*60
        print(&#34;启动时北京时间为：&#34;&#43;time.strftime(&#34;%H:%M&#34;, time.localtime()),&#34;\t 软件将在&#34;,rest-1,&#34;小时&#34;,int((sleeptime-(rest-1)*3600)/60),&#34;分钟后发送数据&#34;)
        time.sleep(sleeptime)
    elif now_hour &gt; &#34;08&#34;:
        rest = 8 - int(now_hour) &#43; 24
        sleeptime = (rest-1)*3600 &#43; (60-int(now_min))*60
        print(&#34;启动时北京时间为：&#34;&#43;time.strftime(&#34;%H:%M&#34;, time.localtime()),&#34;\t 软件将在&#34;,rest-1,&#34;小时&#34;,int((sleeptime-(rest-1)*3600)/60),&#34;分钟后发送数据&#34;)
        time.sleep(sleeptime)
    elif now_hour == &#34;08&#34;:
        print(&#34;启动时北京时间为：&#34; &#43; time.strftime(&#34;%H:%M&#34;, time.localtime()), &#34;\t 软件将在每天 8 点发送数据！&#34;)
        # 以下为定时任务
        print(&#34;数据&#34;)
        time.sleep(86400-int(now_min)*60)
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/pysettime/  

