

<!--左下角公众号二维码-->
<div class="weixin-box">
  <div class="weixin-menu">
    <div class="weixin-hover">
      <div class="weixin-description">微信扫一扫，订阅本博客</div>
    </div>
  </div>
</div>

{% include 'beian.swig' %}

<!--使用Lruihao修改后的主题建议保留lruihao.cn-->
{% if !(config.author == '李瑞豪' and theme.footer.copyright == 'LRH') %}
	<div>BASE ON Next.Pisces and MODIFIED BY <a href="https://lruihao.cn" target="_blank">Lruihao</a> .</div>
{% endif %}