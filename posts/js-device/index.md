# Js 判断用户设备类型及平台


前端开发经常遇到需要判断用户的浏览设备，是 pc 端还是移动端，移动端使用的是什么手机系统？android、ios、ipad、windows phone 等等，有时候还需要知道用户浏览页面是在微信中打开还是在移动端浏览器中打开，等等一系列判断做一些相应的处理。

&lt;!--more--&gt;

### 首先判断 pc 端还是移动端

```
function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = [&#34;Android&#34;, &#34;iPhone&#34;,
                    &#34;SymbianOS&#34;, &#34;Windows Phone&#34;,
                    &#34;iPad&#34;, &#34;iPod&#34;];
        var flag = true;
        for (var v = 0; v &lt; Agents.length; v&#43;&#43;) {
            if (userAgentInfo.indexOf(Agents[v]) &gt; 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
```

### 判断用户移动端使用的系统平台

```
var u = navigator.userAgent;
    if (u.indexOf(&#39;Android&#39;) &gt; -1 || u.indexOf(&#39;Linux&#39;) &gt; -1) {
        //安卓手机
    } else if (u.indexOf(&#39;iPhone&#39;) &gt; -1) {
        //苹果手机
    } else if (u.indexOf(&#39;Windows Phone&#39;) &gt; -1) {
        //winphone 手机
    }
```

### 判断用户是否在微信中打开

```
function isWeiXin(){
        var ua = navigator.userAgent.toLowerCase();
        if(ua.indexOf(&#39;micromessenger&#39;) != -1) {
            return true;
        } else {
            return false;
        }
    }
```

### 实际运用

根据 pc 或者移动端控制飘花数目，降低 cpu 消耗，减少卡顿。[demo](https://www.lruihao.cn)

```
  &lt;script&gt;
    function sakuraInit() {
        $(document).snowfall(&#39;clear&#39;);
        var userAgentInfo = navigator.userAgent;
        var Agents = [&#34;Android&#34;, &#34;iPhone&#34;,
                    &#34;SymbianOS&#34;, &#34;Windows Phone&#34;,
                    &#34;iPad&#34;, &#34;iPod&#34;];
        var flag = true;
        for (var v = 0; v &lt; Agents.length; v&#43;&#43;) {
            if (userAgentInfo.indexOf(Agents[v]) &gt; 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            $(document).snowfall({image:&#34;images/1.png&#34;, flakeCount:5, minSpeed:1, minSize:8, maxSize:15,});
            $(document).snowfall({image:&#34;images/2.png&#34;, flakeCount:5, minSpeed:1, minSize:8, maxSize:15,});
            $(document).snowfall({image:&#34;images/3.png&#34;, flakeCount:5, minSpeed:1, minSize:8, maxSize:15,});
            $(document).snowfall({image:&#34;images/4.png&#34;, flakeCount:5, minSpeed:1, minSize:8, maxSize:15,});
        } else {
            $(document).snowfall({image:&#34;images/1.png&#34;, flakeCount:2, minSpeed:1, minSize:8, maxSize:15,});
            $(document).snowfall({image:&#34;images/2.png&#34;, flakeCount:2, minSpeed:1, minSize:8, maxSize:15,});
            $(document).snowfall({image:&#34;images/3.png&#34;, flakeCount:2, minSpeed:1, minSize:8, maxSize:15,});
            $(document).snowfall({image:&#34;images/4.png&#34;, flakeCount:2, minSpeed:1, minSize:8, maxSize:15,});
        }
    }
    window.onload = sakuraInit();
  &lt;/script&gt;
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/js-device/  
> 转载 URL: https://www.cnblogs.com/coober/p/6594379.html
