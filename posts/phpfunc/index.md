# Php 函数学习


&gt; 练习 php 函数的基本使用。  
&gt; 注：  
&gt; 必选参数在可选参数的前面。  
&gt; 可在函数中定义函数，需要先调用外层函数才能调用内层函数。

&lt;!--more--&gt;

```php php 函数动态创建表格
&lt;?php
/*
创建表格
*/
function createTable($rows,$cols,$bgcolor=&#39;pink&#39;,$content=&#39;x&#39;){
  $table = &#34;&lt;table border=&#39;1&#39; bgcolor=&#39;{$bgcolor}&#39; cellpadding=&#39;10&#39; cellspacing=&#39;0&#39; width=&#39;50%&#39; &gt;&#34;;
  for($i=1;$i&lt;=$rows;$i&#43;&#43;){
    $table.=&#34;&lt;tr&gt;&#34;;
    for($j=1;$j&lt;=$cols;$j&#43;&#43;){
      $table.=&#34;&lt;td&gt;{$content}&lt;/td&gt;&#34;;
    }
    $table .=&#34;&lt;/tr&gt;&#34;;
  }
  $table.=&#34;&lt;/table&gt;&#34;;
  return $table;
}
echo createTable(5,5,&#39;pink&#39;,&#39;hello lruihao&#39;);
?&gt;
```

![php 创建表格](images/table.png)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/phpfunc/  

