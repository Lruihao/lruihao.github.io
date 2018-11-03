<script>
 function GetRandomNum(Min,Max)
  {
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
  }
function setSidebarMarginTop (headerOffset) {
    return $('#sidebar').css({ 'margin-top': headerOffset });
  }
 function getHeaderOffset () {
    return $('.header-inner').height() + CONFIG.sidebar.offset;
  }
  window.onload=function(){
    var subtitle = "{{config.subtitle}}";
     var mytitle = subtitle.split("W");
     var max = mytitle.length-1;
     var index = GetRandomNum(0,max);
     var text = mytitle[index];
     $("#helloTitle").html(text);
     var headOffset = getHeaderOffset();
     setSidebarMarginTop(headOffset);
     //动态subtitle设置
  }
</script>

{{ partial('_partials/header/brand.swig', {}, {cache: theme.cache.enable}) }}
{% include 'menu.swig' %}

{% if theme.custom_file_path.header %}
  {% set custom_header = '../../../../../' + theme.custom_file_path.header %}
{% else %}
  {% set custom_header = '../../_custom/header.swig' %}
{% endif %}
{% include custom_header %}
