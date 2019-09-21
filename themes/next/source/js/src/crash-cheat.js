var oldTitle = document.title;
var titleTime; //標題恢復計時器
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    $("[rel='icon']").attr("href", "/images/icons/crash.png");
    document.title = "網站崩潰了！";
    clearTimeout(titleTime);
  } else {
    document.title = "其實並沒有！";
    $("[rel='icon']").attr("href", "/images/icons/favicon-32.png");
    titleTime = setTimeout(function () {
      document.title = oldTitle;
    }, 1000);
  }
});