{% if theme.beian.enable %}
	{% set recordcode = theme.beian.recordcode %}
	<div class="beian" style="display:inline-block;height:20px;line-height:20px;"> 
		<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode={{ recordcode }}">
		<img src="/images/gov.png" style="float:left;" alt="公安" />{{ theme.beian.gov }}</a>
		<span class="post-meta-divider" style="color: #555;">|</span>
		<span><a href="http://www.beian.miit.gov.cn" target="_blank">{{ theme.beian.icp }}</a></span>
	</div>
{% endif %}