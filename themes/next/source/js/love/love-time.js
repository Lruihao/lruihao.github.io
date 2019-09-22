function loveZxm() {
  var loving = new Date();
  var love = new Date("11/17/2016 21:00:00");
  //總的秒數
  var loveTime = (loving - love) / 1000,
  loveDays = Math.floor(loveTime / 60 / 60 / 24),
  loveHours = Math.floor(loveTime / 60 / 60 - (24 * loveDays)),
  loveMin = Math.floor(loveTime / 60 - (24 * 60 * loveDays) - (60 * loveHours)),
  loveSec = Math.floor((loving - love) / 1000 - (24 * 60 * 60 * loveDays) - (60 * 60 * loveHours) - (60 * loveMin));
  //前置零
  if (String(loveHours).length === 1) {
    loveHours = "0" + loveHours;
  }
  if (String(loveMin).length === 1) {
    loveMin = "0" + loveMin;
  }
  if (String(loveSec).length === 1) {
    loveSec = "0" + loveSec;
  }
  document.querySelector(".love-times").innerHTML = loveDays + " 天 " + loveHours
          + " 小时 " + loveMin + " 分 " + loveSec + " 秒";    }
setInterval("loveZxm()", 500);