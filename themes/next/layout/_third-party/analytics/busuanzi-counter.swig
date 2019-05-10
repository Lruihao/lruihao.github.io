{% if theme.busuanzi_count.enable %}
<div class="busuanzi-count">
  <script src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>

  {% if theme.busuanzi_count.total_visitors %}
    <font color=DarkSlateGray face=STLiti><span class="site-uv" title="{{ __('footer.total_visitors') }}">
      <i class="fa fa-{{ theme.busuanzi_count.total_visitors_icon }}"></i>
      <span class="busuanzi-value" id="busuanzi_value_site_uv"></span>
    </span><span class="post-meta-divider">|</span></font>
    <font color=DarkSlateGray face=STLiti>
    <span id="timeDate" title="网站运行时间">载入天数...</span><span id="times" title="网站运行时间">载入时分秒...</span><span class="post-meta-divider">|</span>
    </font>
  {% endif %}

  {% if theme.busuanzi_count.total_views %}
    <font color=DarkSlateGray face=STLiti><span class="site-pv" title="{{ __('footer.total_views') }}">
      <i class="fa fa-{{ theme.busuanzi_count.total_views_icon }}"></i>
      <span class="busuanzi-value" id="busuanzi_value_site_pv"></span>
    </span></font>
  {% endif %}
</div>
{% endif %}


