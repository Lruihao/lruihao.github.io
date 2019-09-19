---
title: 设置网站运行时间
date: 2019-09-19 22:03:29
tags:
- javascript
- 前端
categories:
- javascript
---

{% note %}
使用`javascript`计算博客等网站的运行时间。
{% endnote %}

<!--more-->
> 话不多说，直接贴码！

```js 网站运行时间计算JS和HTML
function createTime() {
  var now = new Date();
  var run = new Date("05/28/2018 20:01:01");
  //總的秒數
  var runTime = (now - run) / 1000;
  days = Math.floor(runTime / 60 / 60 / 24);
  hours = Math.floor(runTime / 60 / 60 - (24 * days));
  minutes = Math.floor(runTime / 60 - (24 * 60 * days) - (60 * hours));
  seconds = Math.floor((now - run) / 1000 - (24 * 60 * 60 * days) - (60 * 60 * hours) - (60 * minutes));
  //前置零
  if (String(hours).length === 1) {
    hours = "0" + hours;
  }
  if (String(minutes).length === 1) {
    minutes = "0" + minutes;
  }
  if (String(seconds).length === 1) {
    seconds = "0" + seconds;
  }
  /*document.querySelector(".run-times").innerHTML = days + "&thinsp;天&thinsp;" + hours
          + "&thinsp;时&thinsp;" + minutes + "&thinsp;分&thinsp;" + seconds + "&thinsp;秒";
  */
  document.querySelector(".run-times").innerHTML = "RunTime: " + days + "," + hours
          + ":" + minutes + ":" + seconds + "";
  
}

//setInterval("createTime()", 500);
if (!document.hidden) {
  var siteTime = setInterval("createTime()", 500);
} else {
  clearInterval(siteTime);
}


/**
 * HTML写法
<span class="run-times" title="网站运行时间">载入时分秒...</span>
<p class="run-times" title="主頁运行时间">RunTime Loading...</p>
*/
```