# 使用 Python 刷 Csdn 访问量


&gt; 使用 python 模拟浏览器行为刷 csdn 访问量，脚本仅做学习，请勿滥用~

&lt;!--more--&gt;

直接丢代码，把代码挂到服务器上可以策马奔腾~，也可以生成二进制文件放到 Windows 桌面上随时使用~  
[打包 exe 参考](/posts/pyinstallererror/)

```python
#!/usr/bin/python
# -*- coding: utf-8 -*-
__author__ = &#39;lruihao.cn&#39;
import urllib.request
import re
import time
from bs4 import BeautifulSoup

opener = urllib.request.build_opener()
opener.addheaders = [(&#39;User-agent&#39;,
                      &#39;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 UBrowser/4.0.3214.0 Safari/537.36&#39;)]

def get_article_url(page,name):
    endurl = &#34;/&#34;&#43;name&#43;&#34;/article/details/........&#34;
    print(name)
    p = re.compile(endurl)
    url = &#34;http://blog.csdn.net/&#34;&#43;name&#43;&#34;/article/list/&#34;&#43;str(page)
    # 使用 build_opener() 是为了让 python 程序模仿浏览器进行访问
    html = opener.open(url).read().decode(&#39;utf-8&#39;)
    allfinds = p.findall(html)
    return allfinds
    #print(&#39;allfinds&#39;,allfinds)

def start_do(allfinds):
    urlBase = &#34;http://blog.csdn.net&#34;  # 需要将网址合并的部分
    # 页面中的网址有重复的，需要使用 set 进行去重复
    mypages = list(set(allfinds))
    for i in range(len(mypages)):
        mypages[i] = urlBase &#43; mypages[i]
    print(&#39;要刷的网页有：&#39;)
    for index, page in enumerate(mypages):
        print(str(index), page)
    # 设置每个网页要刷的次数
    brushNum = 1

    # 所有的页面都刷
    print(&#39;下面开始刷了哦：&#39;)
    for index, page in enumerate(mypages):
        for j in range(brushNum):
            try:
                pageContent = opener.open(page).read().decode(&#39;utf-8&#39;)
                # 使用 BeautifulSoup 解析每篇博客的标题
                soup = BeautifulSoup(pageContent)
                blogTitle = str(soup.title.string)
                blogTitle = blogTitle[0:blogTitle.find(&#39;-&#39;)]
                print(str(j), blogTitle)
            except urllib.error.HTTPError:
                print(&#39;urllib.error.HTTPError&#39;)
                time.sleep(3)  # 出现错误，停几秒先
            except urllib.error.URLError:
                print(&#39;urllib.error.URLError&#39;)
                time.sleep(3)  # 出现错误，停几秒先
                time.sleep(0.5)  # 正常停顿，以免服务器拒绝访问

def main(name):
    for page in range(1,5):
        print(&#34;************第&#34;&#43;str(page)&#43;&#34;页*************&#34;)
        endurl = get_article_url(page,name)
        start_do(endurl)

if __name__ == &#39;__main__&#39;:
  name = input(&#34;输入你的 csdn 用户名：&#34;)
  if name==&#34;&#34;:
    name = &#34;qq_39520417&#34; #cheung99857
  while 1:
    main(name)
        print(&#34;开始休息 ...&#34;)
        time.sleep(40)
```

主函数也可以这样写实现同时刷多人的访问量，人多可以适当减少休眠时间，当然有兴趣的可以尝试一下多线程~

```py
if __name__ == &#39;__main__&#39;:
    # 多用户
    names = [&#34;qq_39520417&#34;,&#34;cheung99857&#34;]
    while 1:
        for name in names:
            main(name)
            print(&#34;开始休息 ...&#34;)
            # 控制休眠时间相当于控制刷新的速度
            time.sleep(30)
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/csdnvisiter/  

