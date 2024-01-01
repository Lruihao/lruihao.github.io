# python 发送 post 请求进行简单的接口测试


&gt; 通过 requests 可以向某个地址发送请求，可以用来做一些接口的测试；主要有两个方法：

- requests.get()
- requests.post()  
  最近帮朋友的项目做一个小需求，需要把后台数据定期打包发送到微信群，麻小科技涛哥给了我一个接口，post 访问。

&lt;!--more--&gt;

```python
#!/usr/bin/python
import requests

&#34;&#34;&#34;
通过 requests 可以向某个地址发送请求 requests.post(url,json date)
post 方法还有其他参数，如 header 等
&#34;&#34;&#34;

# post 发送的数据
postData = {
    # &#39;username&#39;:&#39;test&#39;,
    # &#39;password&#39;:&#39;123456&#39;,
    # &#39;salary&#39;:2000,
}

# 接口这里不便公开
r = requests.post(&#39;http://demo.maxiaokeji.com/xx/xxxxx/xxxx&#39;,data=postData)
# print(r.text)
response=r.json()
print(response)
```

运行后会在屏幕打印出返回的 json 数据
![返回数据](images/1.png)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/posttest/  

