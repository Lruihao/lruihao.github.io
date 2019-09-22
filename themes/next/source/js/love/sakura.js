function sakuraInit() {
  $(document).snowfall('clear');
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  if (flag) {
    $(document).snowfall({image:"/images/1.png", flakeCount:5, minSpeed:1, minSize:15, maxSize:25,});
    $(document).snowfall({image:"/images/2.png", flakeCount:5, minSpeed:1, minSize:15, maxSize:25,});
    $(document).snowfall({image:"/images/3.png", flakeCount:5, minSpeed:1, minSize:15, maxSize:25,});
    $(document).snowfall({image:"/images/4.png", flakeCount:5, minSpeed:1, minSize:15, maxSize:25,});
  } else {
    $(document).snowfall({image:"/images/1.png", flakeCount:2, minSpeed:1, minSize:10, maxSize:20,});
    $(document).snowfall({image:"/images/2.png", flakeCount:2, minSpeed:1, minSize:10, maxSize:20,});
    $(document).snowfall({image:"/images/3.png", flakeCount:2, minSpeed:1, minSize:10, maxSize:20,});
    $(document).snowfall({image:"/images/4.png", flakeCount:2, minSpeed:1, minSize:10, maxSize:20,});
  }
}
window.onload = sakuraInit();