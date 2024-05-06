# 条件注释判断浏览器版本&lt;!--[If Lt IE 9]&gt;;


&gt; &lt;p&gt;&lt;span&gt;&amp;lt;!--[if !IE]&amp;gt;&amp;lt;!--&amp;gt; 除 IE 外都可识别 &amp;lt;!--&amp;lt;![endif]--&amp;gt;&lt;/span&gt;&lt;br&gt;&lt;span&gt;&amp;lt;!--[if IE]&amp;gt; 所有的 IE 可识别 &amp;lt;![endif]--&amp;gt;&lt;/span&gt;&lt;br&gt;&lt;span&gt;&amp;lt;!--[if IE 6]&amp;gt; 仅 IE6 可识别 &amp;lt;![endif]--&amp;gt;&lt;/span&gt;&lt;br&gt;&lt;span&gt;&amp;lt;!--[if lt IE 6]&amp;gt; IE6 以及 IE6 以下版本可识别 &amp;lt;![endif]--&amp;gt;&lt;/span&gt;&lt;br&gt;&lt;span&gt;&amp;lt;!--[if gte IE 6]&amp;gt; IE6 以及 IE6 以上版本可识别 &amp;lt;![endif]--&amp;gt;&lt;/span&gt;&lt;br&gt;&lt;span&gt;&amp;lt;!--[if IE 7]&amp;gt; 仅 IE7 可识别 &amp;lt;![endif]--&amp;gt;&lt;/span&gt;&lt;br&gt;&lt;span&gt;&amp;lt;!--[if lt IE 7]&amp;gt; IE7 以及 IE7 以下版本可识别 &amp;lt;![endif]--&amp;gt;&lt;/span&gt;&lt;br&gt;&lt;span&gt;&amp;lt;!--[if gte IE 7]&amp;gt; IE7 以及 IE7 以上版本可识别 &amp;lt;![endif]--&amp;gt;&lt;/span&gt;&lt;br&gt;&lt;span&gt;&amp;lt;!--[if IE 8]&amp;gt; 仅 IE8 可识别 &amp;lt;![endif]--&amp;gt;&lt;/span&gt;&lt;br&gt;&lt;span&gt;&amp;lt;!--[if IE 9]&amp;gt; 仅 IE9 可识别 &amp;lt;![endif]--&amp;gt;&lt;/span&gt;&lt;/p&gt;

&lt;!--more--&gt;

&lt;table align=&#34;center&#34;&gt; &lt;tbody&gt; &lt;tr&gt;&lt;th width=&#34;50&#34;&gt;项目&lt;/th&gt;&lt;th width=&#34;150&#34;&gt;范例&lt;/th&gt;&lt;th&gt;说明&lt;/th&gt;&lt;/tr&gt; &lt;tr&gt; &lt;td align=&#34;middle&#34;&gt;!&lt;/td&gt;&lt;td&gt;[if !IE]&lt;/td&gt;&lt;td&gt;The NOT operator. This is placed immediately in front of the&amp;nbsp;&lt;em&gt;feature&lt;/em&gt;,&amp;nbsp;&lt;em&gt;operator&lt;/em&gt;, or&amp;nbsp;&lt;em&gt;subexpression&lt;/em&gt;&amp;nbsp;to reverse the Boolean meaning of the expression.&lt;br /&gt;NOT 运算符。这是摆立即在前面的&lt;em&gt;功能&lt;/em&gt;，&lt;em&gt;操作员&lt;/em&gt;，或&lt;em&gt;子表达式&lt;/em&gt;扭转布尔表达式的意义。&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td align=&#34;middle&#34;&gt;lt&lt;/td&gt; &lt;td&gt;[if lt IE 5.5]&lt;/td&gt; &lt;td&gt;The less-than operator. Returns true if the first argument is less than the second argument.&lt;br /&gt;小于运算符。如果第一个参数小于第二个参数，则返回 true。&lt;/td&gt; &lt;/tr&gt;&lt;tr&gt;&lt;td align=&#34;middle&#34;&gt;lte&lt;/td&gt;&lt;td&gt;[if lte IE 6]&lt;/td&gt;&lt;td&gt;The less-than or equal operator. Returns true if the first argument is less than or equal to the second argument.&lt;br /&gt;小于或等于运算。如果第一个参数是小于或等于第二个参数，则返回 true。&lt;/td&gt; &lt;/tr&gt;&lt;tr&gt;&lt;td align=&#34;middle&#34;&gt;gt&lt;/td&gt;&lt;td&gt;[if gt IE 5]&lt;/td&gt;&lt;td&gt;The greater-than operator. Returns true if the first argument is greater than the second argument.&lt;br /&gt;大于运算符。如果第一个参数大于第二个参数，则返回 true。&lt;/td&gt; &lt;/tr&gt;&lt;tr&gt;&lt;td align=&#34;middle&#34;&gt;gte&lt;/td&gt; &lt;td&gt;[if gte IE 7]&lt;/td&gt;&lt;td&gt;The greater-than or equal operator. Returns true if the first argument is greater than or equal to the second argument.&lt;br /&gt;大于或等于运算。如果第一个参数是大于或等于第二个参数，则返回 true。&lt;/td&gt; &lt;/tr&gt;&lt;tr&gt;&lt;td align=&#34;middle&#34;&gt;( )&lt;/td&gt;&lt;td&gt;[if !(IE 7)]&lt;/td&gt;&lt;td&gt;Subexpression operators. Used in conjunction with boolean operators to create more complex expressions.&lt;br /&gt;子表达式运营商。在与布尔运算符用于创建更复杂的表达式。&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td align=&#34;middle&#34;&gt;&amp;amp;&lt;/td&gt;&lt;td&gt;[if (gt IE 5)&amp;amp;(lt IE 7)]&lt;/td&gt;&lt;td&gt;The AND operator. Returns true if all subexpressions evaluate to true&lt;br /&gt;AND 运算符。如果所有的子表达式计算结果为 true，返回 true&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td align=&#34;middle&#34;&gt;|&lt;/td&gt;&lt;td&gt;[if (IE 6)|(IE 7)]&lt;/td&gt;&lt;td&gt;The OR operator. Returns true if any of the subexpressions evaluates to true.&lt;br /&gt;OR 运算符。返回 true，如果子表达式计算结果为 true。&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;

```xml
&lt;!--[if lt IE 9]&gt;
加载 CSS1
&lt;!--[else]&gt;
加载 CSS2
&lt;![endif]--&gt;
```

这样有效是有效，但是用 HTML VALIDATOR 里，报错，因为这个不符合 XHTML 1.1 的规范，
如果把 ELSE 语句去掉，则正确。

```xml
加载 CSS2
&lt;!--[if lt IE 9]&gt;
加载 CSS1（可以把要重写的写在这里）.
&lt;![endif]--&gt;
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/ifzhushi/  

