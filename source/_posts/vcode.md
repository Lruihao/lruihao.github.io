---
title: js验证码
date: 2019-03-04 20:53:09
tags: 
- Frontend
- JavaScript
categories:
- Frontend
- JavaScript
---

<style type="text/css">
	#code{  
        font-family:Arial;  
        font-style:italic;  
        font-weight:bold;  
        border:2px solid #ddd;
        letter-spacing:9px;  
        color:blue;
        font-size: 15px; 
    }
</style>

<script type="text/javascript">
	//设置一个全局的变量，便于保存验证码
    var code;
    function createCode(){
        //首先默认code为空字符串
        code = '';
        //设置长度，这里看需求，我这里设置了4
        var codeLength = 4;
        var codeV = document.getElementById('code');
        //设置随机字符
        var random = new Array('人','徒','知','枯','坐','息','思','为','进','德','之','功','殊','不','知','上','达','之', '士','圆','通','定','慧','体','用','双','修','即','动','而','静','虽','撄','而','宁');
        //循环codeLength 我设置的4就是循环4次
        for(var i = 0; i < codeLength; i++){
            //设置随机数范围,这设置为0 ~ 36
             var index = Math.floor(Math.random()*35);
             //字符串拼接 将每次随机的字符 进行拼接
             code += random[index]; 
        }
        //将拼接好的字符串赋值给展示的Value
        codeV.value = code;
    }

    //下面就是判断是否== 的代码，无需解释
    function validate(){
        var Input = document.getElementById('input');
        var oValue = Input.value.toUpperCase();
        if(oValue ==0){
            alert('请输入验证码');
        }else if(oValue != code){
            Input.value = '';
            alert('验证码不正确，请重新输入');
            createCode();
        }else{
            Input.value = '';
            alert('验证码正确！');//window.open('http://lruihao.cn','_self');
        }
    }


    //设置此处的原因是每次进入界面展示一个随机的验证码，不设置则为空
    window.onload = function (){

        createCode();
    }
</script>


<div align="center">  
    <input type = "text" id = "input" value="" /> <input type = "button" id="code" onclick="createCode()"/> <input class="btn" type = "button" value = "验证" onclick = "validate()"/> 
    请点击验证码处: ↑ 
</div>

<!--more-->
---
js来源互联网
```java 验证码js
<script type="text/javascript">
	//设置一个全局的变量，便于保存验证码
    var code;
    function createCode(){
        //首先默认code为空字符串
        code = '';
        //设置长度，这里看需求，我这里设置了4
        var codeLength = 4;
        var codeV = document.getElementById('code');
        //设置随机字符
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
        //循环codeLength 我设置的4就是循环4次
        for(var i = 0; i < codeLength; i++){
            //设置随机数范围,这设置为0 ~ 36
             var index = Math.floor(Math.random()*36);
             //字符串拼接 将每次随机的字符 进行拼接
             code += random[index]; 
        }
        //将拼接好的字符串赋值给展示的Value
        codeV.value = code;
    }

    //下面就是判断是否== 的代码，无需解释,也可以结合ajax在后台做判断
    function validate(){
        var Input = document.getElementById('input');
        var oValue = Input.value.toUpperCase();
        if(oValue ==0){
            alert('请输入验证码');
        }else if(oValue != code){
            Input.value = '';
            alert('验证码不正确，请重新输入');
            createCode();
        }else{
            Input.value = '';
            alert('验证码正确！');//window.open('http://lruihao.cn','_self');
        }
    }


    //设置此处的原因是每次进入界面展示一个随机的验证码，不设置则为空
    window.onload = function (){

        createCode();
    }
</script>
```