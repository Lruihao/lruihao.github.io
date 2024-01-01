# JS 验证码


&lt;!-- markdownlint-disable MD033 --&gt;

&lt;style type=&#34;text/css&#34;&gt;

# code{  

  font-family:Arial;  
  font-style:italic;  
  font-weight:bold;  
  border:2px solid #ddd;
  letter-spacing:9px;  
  color:blue;
  font-size: 15px;
}
&lt;/style&gt;

&lt;script type=&#34;text/javascript&#34;&gt;
    //设置一个全局的变量，便于保存验证码
    var code;
    function createCode(){
        //首先默认 code 为空字符串
        code = &#39;&#39;;
        //设置长度，这里看需求，我这里设置了 4
        var codeLength = 4;
        var codeV = document.getElementById(&#39;code&#39;);
        //设置随机字符
        var random = new Array(&#39;人&#39;,&#39;徒&#39;,&#39;知&#39;,&#39;枯&#39;,&#39;坐&#39;,&#39;息&#39;,&#39;思&#39;,&#39;为&#39;,&#39;进&#39;,&#39;德&#39;,&#39;之&#39;,&#39;功&#39;,&#39;殊&#39;,&#39;不&#39;,&#39;知&#39;,&#39;上&#39;,&#39;达&#39;,&#39;之&#39;, &#39;士&#39;,&#39;圆&#39;,&#39;通&#39;,&#39;定&#39;,&#39;慧&#39;,&#39;体&#39;,&#39;用&#39;,&#39;双&#39;,&#39;修&#39;,&#39;即&#39;,&#39;动&#39;,&#39;而&#39;,&#39;静&#39;,&#39;虽&#39;,&#39;撄&#39;,&#39;而&#39;,&#39;宁&#39;);
        //循环 codeLength 我设置的 4 就是循环 4 次
        for(var i = 0; i &lt; codeLength; i&#43;&#43;){
            //设置随机数范围，这设置为 0 ~ 36
             var index = Math.floor(Math.random()*35);
             //字符串拼接 将每次随机的字符 进行拼接
             code &#43;= random[index];
        }
        //将拼接好的字符串赋值给展示的 Value
        codeV.value = code;
    }

    //下面就是判断是否== 的代码，无需解释
    function validate(){
        var Input = document.getElementById(&#39;input&#39;);
        var oValue = Input.value.toUpperCase();
        if(oValue ==0){
            alert(&#39;请输入验证码&#39;);
        }else if(oValue != code){
            Input.value = &#39;&#39;;
            alert(&#39;验证码不正确，请重新输入&#39;);
            createCode();
        }else{
            Input.value = &#39;&#39;;
            alert(&#39;验证码正确！&#39;);//window.open(&#39;http://lruihao.cn&#39;,&#39;_self&#39;);
        }
    }

    //设置此处的原因是每次进入界面展示一个随机的验证码，不设置则为空
    window.onload = function (){

        createCode();
    }
&lt;/script&gt;

&lt;div align=&#34;center&#34;&gt;  
    &lt;input type = &#34;text&#34; id = &#34;input&#34; value=&#34;&#34; /&gt; &lt;input type = &#34;button&#34; id=&#34;code&#34; onclick=&#34;createCode()&#34;/&gt; &lt;input class=&#34;btn&#34; type = &#34;button&#34; value = &#34;验证&#34; onclick = &#34;validate()&#34;/&gt;
    &lt;br/&gt;请点击验证码处：↑
&lt;/div&gt;

&lt;!--more--&gt;

验证码 JS 来源互联网

```javascript 验证码 js
&lt;script type=&#34;text/javascript&#34;&gt;
    //设置一个全局的变量，便于保存验证码
    var code;
    function createCode(){
        //首先默认 code 为空字符串
        code = &#39;&#39;;
        //设置长度，这里看需求，我这里设置了 4
        var codeLength = 4;
        var codeV = document.getElementById(&#39;code&#39;);
        //设置随机字符
        var random = new Array(0,1,2,3,4,5,6,7,8,9,&#39;A&#39;,&#39;B&#39;,&#39;C&#39;,&#39;D&#39;,&#39;E&#39;,&#39;F&#39;,&#39;G&#39;,&#39;H&#39;,&#39;I&#39;,&#39;J&#39;,&#39;K&#39;,&#39;L&#39;,&#39;M&#39;,&#39;N&#39;,&#39;O&#39;,&#39;P&#39;,&#39;Q&#39;,&#39;R&#39;, &#39;S&#39;,&#39;T&#39;,&#39;U&#39;,&#39;V&#39;,&#39;W&#39;,&#39;X&#39;,&#39;Y&#39;,&#39;Z&#39;);
        //循环 codeLength 我设置的 4 就是循环 4 次
        for(var i = 0; i &lt; codeLength; i&#43;&#43;){
            //设置随机数范围，这设置为 0 ~ 36
             var index = Math.floor(Math.random()*36);
             //字符串拼接 将每次随机的字符 进行拼接
             code &#43;= random[index];
        }
        //将拼接好的字符串赋值给展示的 Value
        codeV.value = code;
    }

    //下面就是判断是否== 的代码，无需解释，也可以结合 ajax 在后台做判断
    function validate(){
        var Input = document.getElementById(&#39;input&#39;);
        var oValue = Input.value.toUpperCase();
        if(oValue ==0){
            alert(&#39;请输入验证码&#39;);
        }else if(oValue != code){
            Input.value = &#39;&#39;;
            alert(&#39;验证码不正确，请重新输入&#39;);
            createCode();
        }else{
            Input.value = &#39;&#39;;
            alert(&#39;验证码正确！&#39;);//window.open(&#39;http://lruihao.cn&#39;,&#39;_self&#39;);
        }
    }

    //设置此处的原因是每次进入界面展示一个随机的验证码，不设置则为空
    window.onload = function (){

        createCode();
    }
&lt;/script&gt;
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/js-vcode/  

