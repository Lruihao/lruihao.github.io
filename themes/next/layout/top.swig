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

      <a href="https://tongji.baidu.com/web/welcome/ico?s=d25f1e053205bf07562f33365fef04d7" target="_blank" class="LinkCard">博採眾長百度统计数据预览</a>
      
      <div id="top"></div>
      <script src="https://cdn1.lncld.net/static/js/av-core-mini-0.6.4.js"></script>
      <script>AV.initialize("{{ theme.valine.appid }}", "{{ theme.valine.appkey }}");</script>
      <script type="text/javascript">
        setTimeout(function(){
          var time=0
          var title=""
          var url=""
          var query = new AV.Query('Counter');
          query.notEqualTo('id',0);
          query.descending('time');
          query.limit({{ page.limit }}); //设置篇数
          query.find().then(function (todo) {
            for (var i=0;i<{{ page.limit }};i++){
              var result=todo[i].attributes;
              time=result.time;
              title=result.title;
              category=result.categories
              url=result.url;
              var content="<p>"+"【文章热度:"+time+"℃】"+"<a href='"+"{{ config.url }}"+""+url+"'>"+title+"</a>"+"</p>";
              document.getElementById("top").innerHTML+=content
            }
          }, function (error) {
            console.log("error");
          });
        },1000)
      </script>

      <div class="post-body{% if theme.han %} han-init-context{% endif %}{% if page.direction && page.direction.toLowerCase() === 'rtl' %} rtl{% endif %}"></div>
      
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