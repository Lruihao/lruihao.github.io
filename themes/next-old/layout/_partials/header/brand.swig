<div class="site-brand-wrapper">
  <div class="site-meta {% if theme.custom_logo.enabled %}custom-logo{% endif %}">
    {% if theme.custom_logo.image and theme.scheme === 'Muse' %}
      <div class="site-meta-headline">
        <a>
          <img class="custom-logo-image" src="{{ theme.custom_logo.image }}"
               alt="{{ title }}"/>
        </a>
      </div>
    {% endif %}

    <div class="custom-logo-site-title">
      <a href="{{ config.root }}" class="brand" rel="start">
        <span class="logo-line-before"><i></i></span>
        <span class="site-title" style="color:#DDD">{{ title }}</span>
        <span class="logo-line-after"><i></i></span>
      </a>
    </div>
    {% if subtitle %}
      {% if theme.seo %}
        <p><p style="font-family:STXK" class="site-subtitle" id="helloTitle" itemprop="description"></p></p>
      {% else %}
        <p><p style="font-family:STXK" id="helloTitle" class="site-subtitle"></p></p>
      {% endif %}
    {% endif %}
  </div>

  <div class="site-nav-toggle">
    <button aria-label="{{ __('accessibility.nav_toggle') }}">
      <span class="btn-bar"></span>
      <span class="btn-bar"></span>
      <span class="btn-bar"></span>
    </button>
  </div>
</div>
