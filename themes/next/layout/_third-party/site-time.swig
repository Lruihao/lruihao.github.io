{% set sitetime = theme.run_time.creat_date %}
<script>
  function createTime() {
    var now = new Date();
    var run = new Date("{{ sitetime }}");
    //總的秒數
    var runTime = (now - run) / 1000;
    days = Math.floor(runTime / 60 / 60 / 24);
    hours = Math.floor(runTime / 60 / 60 - (24 * days));
    minutes = Math.floor(runTime / 60 - (24 * 60 * days) - (60 * hours));
    seconds = Math.floor((now - run) / 1000 - (24 * 60 * 60 * days) - (60 * 60 * hours) - (60 * minutes));
    //前置零
    if (String(hours).length === 1) {
      hours = "0" + hours;
    }
    if (String(minutes).length === 1) {
      minutes = "0" + minutes;
    }
    if (String(seconds).length === 1) {
      seconds = "0" + seconds;
    }
    document.querySelector(".run-times").innerHTML = days + "&thinsp;天&thinsp;" + hours
            + "&thinsp;时&thinsp;" + minutes + "&thinsp;分&thinsp;" + seconds + "&thinsp;秒";
  }
  if (!document.hidden) {
    var siteTime = setInterval("createTime()", 500);
  } else {
    clearInterval(siteTime);
  }
</script>