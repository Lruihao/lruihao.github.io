# python 发送 post 请求进行简单的接口测试


> 通过 requests 可以向某个地址发送请求，可以用来做一些接口的测试；主要有两个方法：

- requests.get()
- requests.post()  
  最近帮朋友的项目做一个小需求，需要把后台数据定期打包发送到微信群，麻小科技涛哥给了我一个接口，post 访问。

<!--more-->

```python
#!/usr/bin/python
import requests

"""
通过 requests 可以向某个地址发送请求 requests.post(url,json date)
post 方法还有其他参数，如 header 等
"""

# post 发送的数据
postData = {
    # 'username':'test',
    # 'password':'123456',
    # 'salary':2000,
}

# 接口这里不便公开
r = requests.post('http://demo.maxiaokeji.com/xx/xxxxx/xxxx',data=postData)
# print(r.text)
response=r.json()
print(response)
```

运行后会在屏幕打印出返回的 json 数据
![返回数据](images/1.png)


---

> 作者:   
> URL: https://lruihao.cn/posts/posttest/  

