{% if theme.beian.enable %}
	{% set gov_link1 = '<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=' %}
	{% set recordcode = theme.beian.recordcode %}
	{% set gov_link2 = '">' %}
	<div style="font-family:STLiti;display:inline-block;height:20px;line-height:20px;"> 
		{{ gov_link1 }}{{ recordcode }}{{ gov_link2 }}
		<img src="/images/gov.png" style="float:left;" alt="公安" />{{ theme.beian.gov }}</a>
		<span class="post-meta-divider" style="color: #555;">|</span>
		<span><a href="http://www.miitbeian.gov.cn" target="_blank">{{ theme.beian.icp }}</a></span>
	</div>
{% endif %}