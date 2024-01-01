# php 同时主动推送链接到百度，神马等站长平台


&gt; php 主动推送站点链接到百度站长，神马站长进行 SEO。

&lt;!--more--&gt;

## 代码

把需要提交的链接和各站长 api 分别放在两个 txt 文件里面，然后运行 php 文件进行提交，不同站长提交成功一般返回的都是 `200` 状态码。

```php
&lt;?php

  //链接存放路径和站长 api 文件存放路径
  $urls_path = &#34;H:\\lruihao.cn\\public\\baidu_urls.txt&#34;;
  $apis_path = &#34;G:\\Demo\\lrh01\\zhanzhang_api.txt&#34;;
  //将文件每一行读到一个数组里面去
  $urls = file($urls_path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
  $apis = file($apis_path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

  for($x=0;$x&lt;count($apis);$x&#43;&#43;){
    $ch = curl_init();
    $options =  array(
      CURLOPT_URL =&gt; $apis[$x],
      CURLOPT_POST =&gt; true,
      CURLOPT_RETURNTRANSFER =&gt; true,
      CURLOPT_POSTFIELDS =&gt; implode(&#34;\n&#34;, $urls),
      CURLOPT_HTTPHEADER =&gt; array(&#39;Content-Type: text/plain&#39;),
    );
    curl_setopt_array($ch, $options);
    $result = curl_exec($ch);
    echo &#34;API: &lt;br/&gt;&amp;emsp;&#34;.$apis[$x].&#34;&lt;br/&gt;&#34;;
    echo &#34;result: &lt;br/&gt;&amp;emsp;&#34;.$result.&#34;&lt;hr/&gt;&#34;;
  }

?&gt;
```

## 提交结果

![提交结果](images/result.png)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/phppushurl/  

