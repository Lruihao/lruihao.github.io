let userAgentInfo = navigator.userAgent;
let Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
let flag = true;
for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
    }
}
if(flag){
  let qrBox = document.createElement("div");
  let qrImg = document.createElement("img");
  let span = document.createElement("span");
  let qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${window.location.href}`;
  qrImg.src = qrApi;
  qrImg.alt = "页面二维码";
  span.textContent = "扫一扫在手机上阅读，谢谢分享！";
  qrBox.appendChild(qrImg);
  qrBox.appendChild(span);
  qrBox.className = "qr-box";
  copyrightBox = document.querySelector(".copyright-box");
  if(copyrightBox){
    copyrightBox.appendChild(qrBox);
  }
}