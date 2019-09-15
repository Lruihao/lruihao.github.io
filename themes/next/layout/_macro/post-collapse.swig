{% macro render(post) %}

  <article class="post post-type-{{ post.type | default('normal') }}" itemscope itemtype="http://schema.org/Article">
    <header class="post-header">

      <{% if theme.seo %}h3{% else %}h2{% endif %} class="post-title">
        {### repost posts ###}
        {%- if post.repost %}
          {%- if post.link %}
            <span class="post-repost-flag" title="{{ __('post.repost') }} → {{ url_for(post.link) }}">
          {% else -%}
            <span class="post-repost-flag" title="{{ __('post.repost') }}">
          {%- endif %}
              <i class="fa fa-share-square-o"></i>
            </span>
        {%- endif %}

        {### delicate posts ###}
        {%- if post.delicate %}
          <span class="post-delicate-flag" title="{{ __('post.delicate') }}">
            <i class="fa fa-newspaper-o"></i>
          </span>
        {%- endif %}

        <a class="post-title-link" href="{{ url_for(post.path) }}" itemprop="url">
          {% if post.type === 'picture' %}
            {{ post.content }}
          {% else %}
            <span itemprop="name">{{ post.title | default(__('post.untitled')) }}</span>
          {% endif %}
        </a>
      </{% if theme.seo %}h3{% else %}h2{% endif %}>

      <div class="post-meta">
        <time class="post-time" itemprop="dateCreated"
              datetime="{{ moment(post.date).format() }}"
              content="{{ date(post.date, config.date_format) }}">
          {{ date(post.date, 'MM-DD') }}
        </time>
      </div>

    </header>
  </article>

{% endmacro %}
