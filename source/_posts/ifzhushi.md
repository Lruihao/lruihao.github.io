---
title: 条件注释判断浏览器版本&lt;!--[if lt IE 9]&gt;
date: 2019-05-10 13:08:27
tags:
- Frontend
- 他山之石
categories:
- Frontend
repost: true
---

{% note %}
<p><span>&lt;!--[if !IE]&gt;&lt;!--&gt; 除IE外都可识别 &lt;!--&lt;![endif]--&gt;</span><br><span>&lt;!--[if IE]&gt; 所有的IE可识别 &lt;![endif]--&gt;</span><br><span>&lt;!--[if IE 6]&gt; 仅IE6可识别 &lt;![endif]--&gt;</span><br><span>&lt;!--[if lt IE 6]&gt; IE6以及IE6以下版本可识别 &lt;![endif]--&gt;</span><br><span>&lt;!--[if gte IE 6]&gt; IE6以及IE6以上版本可识别 &lt;![endif]--&gt;</span><br><span>&lt;!--[if IE 7]&gt; 仅IE7可识别 &lt;![endif]--&gt;</span><br><span>&lt;!--[if lt IE 7]&gt; IE7以及IE7以下版本可识别 &lt;![endif]--&gt;</span><br><span>&lt;!--[if gte IE 7]&gt; IE7以及IE7以上版本可识别 &lt;![endif]--&gt;</span><br><span>&lt;!--[if IE 8]&gt; 仅IE8可识别 &lt;![endif]--&gt;</span><br><span>&lt;!--[if IE 9]&gt; 仅IE9可识别 &lt;![endif]--&gt;</span></p>
{% endnote %}


<!--more-->

<table border="2" align="center"> <tbody> <tr><th width="50">项目</th><th width="150">范例</th><th>说明</th></tr> <tr> <td align="middle">!</td><td>[if !IE]</td><td>The NOT operator. This is placed immediately in front of the&nbsp;<em>feature</em>,&nbsp;<em>operator</em>, or&nbsp;<em>subexpression</em>&nbsp;to reverse the Boolean meaning of the expression.<br />NOT运算符。这是摆立即在前面的<em>功能</em>，<em>操作员</em>，或<em>子表达式</em>扭转布尔表达式的意义。</td></tr><tr><td align="middle">lt</td> <td>[if lt IE 5.5]</td> <td>The less-than operator. Returns true if the first argument is less than the second argument.<br />小于运算符。如果第一个参数小于第二个参数，则返回true。</td> </tr><tr><td align="middle">lte</td><td>[if lte IE 6]</td><td>The less-than or equal operator. Returns true if the first argument is less than or equal to the second argument.<br />小于或等于运算。如果第一个参数是小于或等于第二个参数，则返回true。</td> </tr><tr><td align="middle">gt</td><td>[if gt IE 5]</td><td>The greater-than operator. Returns true if the first argument is greater than the second argument.<br />大于运算符。如果第一个参数大于第二个参数，则返回true。</td> </tr><tr><td align="middle">gte</td> <td>[if gte IE 7]</td><td>The greater-than or equal operator. Returns true if the first argument is greater than or equal to the second argument.<br />大于或等于运算。如果第一个参数是大于或等于第二个参数，则返回true。</td> </tr><tr><td align="middle">( )</td><td>[if !(IE 7)]</td><td>Subexpression operators. Used in conjunction with boolean operators to create more complex expressions.<br />子表达式运营商。在与布尔运算符用于创建更复杂的表达式。</td></tr><tr><td align="middle">&amp;</td><td>[if (gt IE 5)&amp;(lt IE 7)]</td><td>The AND operator. Returns true if all subexpressions evaluate to true<br />AND运算符。如果所有的子表达式计算结果为true，返回true</td></tr><tr><td align="middle">|</td><td>[if (IE 6)|(IE 7)]</td><td>The OR operator. Returns true if any of the subexpressions evaluates to true.<br />OR运算符。返回true，如果子表达式计算结果为true。</td></tr></tbody></table>


```xml
<!--[if lt IE 9]>
加载CSS1
<!--[else]>
加载CSS2
<![endif]-->
```


这样有效是有效,但是用HTML VALIDATOR里,报错,因为这个不符合XHTML 1.1的规范,
如果把ELSE语句去掉,则正确.

```xml
加载CSS2
<!--[if lt IE 9]>
加载CSS1(可以把要重写的写在这里).
<![endif]-->
```