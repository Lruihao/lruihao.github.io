<div class="popup search-popup local-search-popup">
  <div class="local-search-header clearfix">
    <span class="search-icon">
      <i class="fa fa-search"></i>
    </span>
    <span class="popup-btn-close">
      <i class="fa fa-times-circle"></i>
    </span>
    <div class="local-search-input-wrapper">
      <input autocomplete="off"
             placeholder="{{ __('search.placeholder') }}" spellcheck="false"
             type="text" id="local-search-input">
    </div>
  </div>
  <div id="local-search-result">
    {% if theme.recent_posts %}
      <div class="links-of-blogroll motion-element {{ "links-of-blogroll-" + theme.recent_posts_layout  }}">
       <div class="links-of-blogroll-title">
         <i class="fa fa-{{ theme.recent_posts_icon }}" aria-hidden="true"></i>
         {{ theme.recent_posts_title }}
       </div>
       <ul class="links-of-blogroll-list">
         {% set posts = site.posts.sort('-date') %}
         {% for post in posts.slice('0', '15') %}
           <li>
             <a href="{{ url_for(post.path) }}" title="{{ post.title }}" target="_blank">{{ post.title }}</a>
           </li>
         {% endfor %}
       </ul>
      </div>
    {% endif %}
  </div>
</div>
