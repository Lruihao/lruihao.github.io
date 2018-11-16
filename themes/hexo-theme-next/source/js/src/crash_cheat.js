<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://i.loli.net/2018/08/24/5b7fcb00ed9bf.png");
         document.title = '怎么回事╭(°A°`)╮';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://i.loli.net/2018/09/25/5baa4f21661e7.png");
         document.title = '小老弟(ฅ>ω<*ฅ)';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
             $('[rel="icon"]').attr('href', "/images/favicon-32x32-next.png");
         }, 2000);
     }
 });