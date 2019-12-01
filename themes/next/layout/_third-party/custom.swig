{# Custom javascript for lruihao.cn #}

{# 页面二维码 #}
<script type="text/javascript" src="/js/src/pageQRcode.js" defer></script>

{# 建站时间 #}
{% include 'site-time.swig'%}

{# console.log #}
<script type="text/javascript" src="/js/src/console.js"></script>

{# 知乎卡片链接 #}
<script async type="text/javascript" src="/js/src/link-card.js"></script>

{# 夜间模式 #}
<script async type="text/javascript" src="/js/src/night.js"></script>
<div class="cover"></div>

{# 崩溃欺骗 #}
{% if theme.custom_js.crash_cheat %}
  <script async type="text/javascript" src="/js/src/crash-cheat.js"></script>
{% endif %}

{# input特效 #}
<script src="/js/src/activate-power-mode.js"></script>
<script>
  POWERMODE.colorful = true; // make power mode colorful
  POWERMODE.shake = false; // turn off shake
  document.body.addEventListener('input', POWERMODE);
</script>

{# 鼠标点击特效 #}
{% if theme.custom_js.fireworks %}
 <canvas class="fireworks" style="position: fixed;left: 0;top: 0;z-index: 1; pointer-events: none;" ></canvas> 
 <script type="text/javascript" src="//cdn.bootcss.com/animejs/2.2.0/anime.min.js"></script> 
 <script type="text/javascript" src="/js/src/fireworks.js"></script>
{% elif theme.custom_js.love %}
 <script type="text/javascript" src="/js/src/love.js"></script>
{% endif %}

{# daovoice #}
{% if theme.daovoice.enable %}
  <script>
  (function(i,s,o,g,r,a,m){i["DaoVoiceObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;a.charset="utf-8";m.parentNode.insertBefore(a,m)})(window,document,"script",('https:' == document.location.protocol ? 'https:' : 'http:') + "//widget.daovoice.io/widget/0f81ff2f.js","daovoice")
  daovoice('init', {
      app_id: "{{theme.daovoice.app_id}}"
    });
  daovoice('update');
  </script>
{% endif %}