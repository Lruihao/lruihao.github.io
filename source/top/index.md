---
title: 热度
date: 2019-03-25 22:05:25
description: Ctrl + F5刷新
---
<div id="top"></div>
<script src="https://cdn1.lncld.net/static/js/av-core-mini-0.6.4.js"></script>
<!--<script>AV.initialize("appid", "appkey");</script>-->
<script>AV["\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65"]("\x37\x48\x77\x54\x52\x54\x30\x51\x30\x54\x66\x72\x61\x74\x36\x75\x67\x72\x54\x36\x50\x36\x37\x63\x2d\x67\x7a\x47\x7a\x6f\x48\x73\x7a", "\x6d\x68\x54\x59\x31\x6b\x75\x55\x6d\x76\x69\x43\x74\x51\x77\x6b\x77\x4f\x41\x53\x66\x73\x66\x44");</script>
<script type="text/javascript">
  setTimeout(function(){
    var time=0
    var title=""
    var url=""
    var query = new AV.Query('Counter');
    query.notEqualTo('id',0);
    query.descending('time');
    query.limit(100); //设置篇数
    query.find().then(function (todo) {
      for (var i=0;i<100;i++){
        var result=todo[i].attributes;
        time=result.time;
        title=result.title;
        category=result.categories
        url=result.url;
        var content="<p>"+"【文章热度:"+time+"℃】"+"<a href='"+"https://lruihao.cn/"+""+url+"'>"+title+"</a>"+"</p>";
        document.getElementById("top").innerHTML+=content
      }
    }, function (error) {
      console.log("error");
    });
  },1000)
</script>