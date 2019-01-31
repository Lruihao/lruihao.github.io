<div class="copyright">{#
#}{% set current = date(Date.now(), "YYYY") %}{#
#}<font color=black face=STLiti>Copyright &nbsp;</font><font color=black>&copy;</font> {% if theme.footer.since and theme.footer.since != current %}<font color=black face=STLiti>{{ theme.footer.since }} - </font>{% endif %}{#
#}<font color=black face=STLiti><span itemprop="copyrightYear">{{ current }}</span></font>
  <span class="with-love" id="animate">
    <i class="fa fa-{{ theme.footer.icon.name }}"></i>
  </span>
  <span class="author" itemprop="copyrightHolder" style="font-family:STLiti;color:black;">{{ theme.footer.copyright | default(author) }} . All Rights Reserved.</span>

  {% if config.symbols_count_time.total_symbols %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-area-chart"></i>
    </span>
    {% if theme.symbols_count_time.item_text_total %}
      <span class="post-meta-item-text">{{ __('symbols_count_time.count_total') + __('symbol.colon') }}</span>
    {% endif %}
    <span title="{{ __('symbols_count_time.count_total') }}">{#
    #}{{ symbolsCountTotal(site) }}{#
  #}</span>
  {% endif %}

  {% if config.symbols_count_time.total_time %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-coffee"></i>
    </span>
    {% if theme.symbols_count_time.item_text_total %}
      <span class="post-meta-item-text">{{ __('symbols_count_time.time_total')}} &asymp;</span>
    {% endif %}
    <span title="{{ __('symbols_count_time.time_total') }}">{#
    #}{{ symbolsTimeTotal(site, theme.symbols_count_time.awl, theme.symbols_count_time.wpm, __('symbols_count_time.time_minutes')) }}{#
  #}</span>
  {% endif %}
</div>

{% if theme.seo %}
  {% set nofollow = ' rel="external nofollow"' %}
{% endif %}

{% if theme.footer.powered.enable %}
  <div class="powered-by">{#
  #}{{ __('footer.powered', '<a class="theme-link" target="_blank"' + nofollow + ' href="https://hexo.io">Hexo</a>') }}{% if theme.footer.powered.version %} v{{ hexo_env('version') }}{% endif %}{#
#}</div>
{% endif %}

{% if theme.footer.powered.enable and theme.footer.theme.enable %}
  <span class="post-meta-divider">|</span>
{% endif %}

{% if theme.footer.theme.enable %}
  <div class="theme-info">{#
  #}{{ __('footer.theme') }} - {#
  #}<a class="theme-link" target="_blank"{{ nofollow }} href="https://theme-next.org">{#
    #}NexT.{{ theme.scheme }}{#
  #}</a>{% if theme.footer.theme.version %} v{{ version }}{% endif %}{#
#}</div>
{% endif %}

{% if theme.footer.custom_text %}
  <div class="footer-custom">{#
  #}{{ theme.footer.custom_text }}{#
#}</div>
{% endif %}
