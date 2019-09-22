var str = document.querySelector('.loveTyping').innerHTML;
var i = 0;
var typeSet;
function typing(){
  var loveTyping = document.querySelector('.loveTyping');
  if (i <= str.length) {
    loveTyping.innerHTML = str.slice(0, i++) + '_';
    typeSet = setTimeout('typing()', 100);//递归调用,打字速度
  }else{
    loveTyping.innerHTML = str;//结束打字,移除 _ 光标
    clearTimeout(typeSet);
  }
}
typing();