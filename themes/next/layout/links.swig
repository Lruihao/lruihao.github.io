{% extends '_layout.swig' %}
{% import '_macro/sidebar.swig' as sidebar_template %}

  {% block title %}{#
  #}{% set page_title_suffix = ' | ' + title %}{#

  #}{% if page.type === "categories" and not page.title %}{#
    #}{{ __('title.category') + page_title_suffix }}{#
  #}{% elif page.type === "tags" and not page.title %}{#
    #}{{ __('title.tag') + page_title_suffix }}{#

  #}{% elif page.type === "photos" and not page.title %}{#
  #}{{ __('title.photos') + page_title_suffix }}{#

  #}{% else %}{#
    #}{{ page.title + page_title_suffix }}{#
  #}{% endif %}{#
#}{% endblock %}

{% block page_class %}page-post-detail{% endblock %}

{% block content %}
  
  <div id="posts" class="posts-expand">
    {##################}
    {### PAGE BLOCK ###}
    {##################}
    <div class="post-block page">
      {% include '_partials/page-header.swig' %}
      {#################}
      {### PAGE BODY ###}
      {#################}

      <div class="post-body{% if theme.han %} han-init-context{% endif %}{% if page.direction && page.direction.toLowerCase() === 'rtl' %} rtl{% endif %}">
        <div class="links-list">
          {% for link in site.data.links %}
            <div class="card-box" title="{{ link.info }}">
              <a href="{{ link.site }}" target="_blank">
                <img class="card-avatar" src="{{ link.avatar }}"/>
                <span>@{{ link.nickname }}</span>
              </a>
            </div>
          {% endfor %}
        </div>
        {{ page.content }}
      </div>

      <style>
        /* @Author: lruihao.cn */
        .links-list {
          margin-top: 1rem;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .card-box {
          width: 150px;
          height: 200px;
          font-size: 1rem;
          text-align: center;
          background: rgba(255,255,255,0.3);
          box-sizing: border-box; 
          box-shadow: 3px 3px 5px #aaa;
          border-radius: 5px;
          transition-duration: 0.3s;
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
        }
        .card-box:hover {
          background: #fff;
          transform: scale(1.03);
          box-shadow: 0 0 3px #aaa;
        }
        .card-box a {
          border:none; 
        }
        .card-avatar {
          width: 100%;
          height: 150px!important;
          border-radius: 5px;
          margin: 0;
          padding: 0;
        }
        .card-box span{
          display: block;
          position: relative;
          bottom: 1rem;
          align-self: flex-end;
          color: #2bbc8a;
          font-weight: bold;
          max-width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .card-box span:hover {
          color: #d480aa;
        }
      </style>

      {#####################}
      {### END PAGE BODY ###}
      {#####################}
    </div>
    {% include '_partials/breadcrumb.swig' %}
    {######################}
    {### END PAGE BLOCK ###}
    {######################}
  </div>

{% endblock %}

{% block sidebar %}
  {{ sidebar_template.render(false) }}
{% endblock %}

{% block script_extra %}
  {% include '_scripts/pages/post-details.swig' %}
{% endblock %}